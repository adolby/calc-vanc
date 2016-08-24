(ns app.calc
  (:require [cljs.core.async :as async :refer [<!]]
            [taoensso.timbre :as timbre :refer-macros [info warn]]
            [app.math :as math :refer [exp squared sqrt]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def schedules {8 [750 1000 1250 1500 1750]
                12 [750 1000 1250 1500 1750 2000]
                24 [750 1000 1250]})

(defn bmi
  "Body mass index in kg/(cm)^2"
  [height weight]
  (if (not= height 0)
    (/ weight (squared height))
    0))

(defn creatinine-clearance
  "Estimated creatinine clearance in (kg-cm)^(1/2)"
  [gender age height abw s-cr]
  (let [bsa (/ (sqrt (* height abw)) 60)]
    (if (and (not= bsa 0) (not= s-cr 0))
      (let [cr-cl (/ (* (- 140 age) abw) (* (* 72 s-cr)) (/ 1.73 bsa))]
        (if (= gender "female")
          (* 0.85 cr-cl)
          cr-cl))
      0)))

(defn elimination-rate-constant
  "Calculate elimination rate constant (k)"
  [cr-cl]
  (+ (* 0.00083 cr-cl) 0.0044))

(defn peak-concentration
  "Calculate peak-concentration in µg/mL"
  [obese k x-0 t T tau]
  (let [v-d (if obese 0.8 0.6)]
    (if (not= k 0)
      (/ (* x-0 (* (- 1 (exp (* (- k) t)) (exp (* (- k) T)))))
         (* v-d k (- 1 (exp (* (- k) tau)))))
      0)))

(defn trough-concentration
  "Calculate trough concentration in µg/mL"
  [c-peak k t T tau]
  (let [t-prime (- tau t T)]
    (* c-peak (exp (* (- k) t-prime)))))

(defn half-life
  "Calculate half-life given elimination rate constant"
  [k]
  (if (not= k 0)
    (/ 0.693 k)
    0))

(defn calculate-concentrations
  "Calculate peak and trough calculations for a dose"
  [q dose height weight infusion-time c-peak-time k]
  (let [x-0 (if (not= infusion-time 0)
              (/ dose infusion-time)
              0)
        bmi (bmi height weight)
        obese? (> bmi 30)
        c-peak
        (peak-concentration obese?
                            k
                            x-0
                            infusion-time
                            c-peak-time
                            q)
        c-trough
        (trough-concentration c-peak
                              k
                              infusion-time
                              c-peak-time
                              q)]
    [c-peak c-trough]))

(defn concentration-map
  "Calculate concentrations for all doses"
  [q doses height weight infusion-time c-peak-time k]
  (reduce conj
    (map
      (fn [dose]
        {dose
         (calculate-concentrations q
                                   dose
                                   height
                                   weight
                                   infusion-time
                                   c-peak-time
                                   k)})
      doses)))

;; Public interface
(defn calculate
  "Calculate half-life, creatinine clearance, and concentrations for
   all doses"
  [data]
  (let [gender (first data)
        [age height weight serum-creatinine infusion-time c-peak-time]
        (mapv #(js/parseFloat %) (rest data))
        cr-cl (creatinine-clearance gender
                                    age
                                    height
                                    weight
                                    serum-creatinine)
        k (elimination-rate-constant cr-cl)
        h-l (half-life k)
        concentrations (reduce conj
                         (map
                           (fn [[q doses]]
                             {q (concentration-map q
                                                   doses
                                                   height
                                                   weight
                                                   infusion-time
                                                   c-peak-time
                                                   k)})
                           schedules))]
    {:creatinine-clearance cr-cl
     :half-life h-l
     :concentrations concentrations}))
