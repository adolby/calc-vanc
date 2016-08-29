(ns app.calc
  (:require [cljs.core.async :as async :refer [<!]]
            [taoensso.timbre :as timbre :refer-macros [info warn]]
            [app.math
              :as math
              :refer [exp squared sqrt round not-a-number?]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def schedules {8 [750 1000 1250 1500 1750]
                12 [750 1000 1250 1500 1750 2000]
                24 [750 1000 1250]})

(defn bmi
  "Body mass index in kg/(cm)^2"
  [height weight]
  (if (not= height 0)
    (/ weight (squared height))
    js/NaN))

(defn creatinine-clearance
  "Estimated creatinine clearance in (kg-cm)^(1/2)"
  [gender age height abw s-cr]
  (let [bsa (/ (sqrt (* height abw)) 60)]
    (if (and (not= bsa 0) (not= s-cr 0))
      (let [cr-cl (/ (* (- 140 age) abw) (* (* 72 s-cr)) (/ 1.73 bsa))]
        (if (= gender "female")
          (* 0.85 cr-cl)
          cr-cl))
      js/NaN)))

(defn elimination-rate-constant
  "Calculate elimination rate constant (k)"
  [cr-cl]
  (+ (* 0.00083 cr-cl) 0.0044))

(defn peak-concentration
  "Calculate peak-concentration in µg/mL"
  [obese x-0 k tau t T]
  (let [v-d (if obese 0.8 0.6)]
    (if (not= k 0)
      (let [e-kt (exp (- (* k t)))
            e-kT (exp (- (* k T)))
            e-k-tau (exp (- (* k tau)))]
        (/ (* x-0 (- 1 e-kt) e-kT)
           (* v-d k (- 1 e-k-tau))))
      js/NaN)))

(defn trough-concentration
  "Calculate trough concentration in µg/mL"
  [c-peak k tau t T]
  (let [t-prime (- tau t T)]
    (* c-peak (exp (- (* k t-prime))))))

(defn half-life
  "Calculate half-life given elimination rate constant"
  [k]
  (if (not= k 0)
    (/ 0.693 k)
    js/NaN))

(defn calculate-concentrations
  "Calculate peak and trough calculations for a dose"
  [dose height weight k q infusion-time c-peak-time]
  (let [x-0 (if (not= infusion-time 0)
              (/ dose infusion-time)
              js/NaN)
        bmi (bmi height weight)
        obese? (> bmi 30)
        c-peak
        (peak-concentration obese?
                            x-0
                            k
                            q
                            infusion-time
                            c-peak-time)
        c-trough
        (trough-concentration c-peak
                              k
                              q
                              infusion-time
                              c-peak-time)
        c-peak-rounded (round c-peak)
        c-trough-rounded (round c-trough)
        bad-calculation? (or (not-a-number? c-peak)
                             (not-a-number? c-trough))]
    (if-not bad-calculation?
      [(str c-peak-rounded) (str c-trough-rounded)]
      ["Calculation error!" "Calculation error!"])))

(defn concentration-map
  "Calculate concentrations for all doses"
  [doses height weight k q infusion-time c-peak-time]
  (reduce conj
    (map
      (fn [dose]
        {dose (calculate-concentrations dose
                                        height
                                        weight
                                        k
                                        q
                                        infusion-time
                                        c-peak-time)})
      doses)))

;; Public interface
(defn calculate
  "Calculate half-life, creatinine clearance, and concentrations for
   all doses"
  [data]
  (let [gender (first data)
        [age height weight serum-creatinine]
        (mapv #(js/parseFloat %) (rest data))
        cr-cl (creatinine-clearance gender
                                    age
                                    height
                                    weight
                                    serum-creatinine)
        cr-cl-rounded (round cr-cl)
        k (elimination-rate-constant cr-cl)
        h-l (half-life k)
        h-l-rounded (round h-l)
        concentrations (reduce conj
                         (map
                           (fn [[q doses]]
                             {q (concentration-map doses
                                                   height
                                                   weight
                                                   k
                                                   q
                                                   1
                                                   1)})
                           schedules))]
    {:creatinine-clearance cr-cl-rounded
     :k k
     :half-life h-l-rounded
     :concentrations concentrations}))
