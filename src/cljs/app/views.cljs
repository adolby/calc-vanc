(ns app.views
  (:require [goog.dom :as dom]
            [cljs.core.async :refer [<!]]
            [reagent.core :as reagent]
            [re-frame.core :refer [subscribe dispatch]]
            [taoensso.timbre :as timbre :refer-macros [info]]
            [app.util :refer [listen]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn field-values
  "Value of fields in input form"
  [names]
  (mapv
    #(.-value (dom/getElement %))
    names))

(defn input-card
  "Card for taking user input"
  []
  [:div.card
    [:h3.indent "Patient Data"]
    [:form {:id "calculate"
            :on-submit (fn [e] (.preventDefault e) nil)}
      [:ul.form
        [:li
          [:label {:for "gender"} "Gender"]
          [:select {:name "gender" :id "gender"}
            [:option {:value "male"} "male"]
            [:option {:value "female"} "female"]]]
        [:li
          [:label {:for "age"} "Age (years)"]
          [:input {:type "text" :id "age" :name "age"}]]
        [:li
          [:label {:for "height"} "Height (cm)"]
          [:input {:type "text" :id "height" :name "height"}]]
        [:li
         [:label {:for "weight"} "Weight (kg)"]
         [:input {:type "text" :id "weight" :name "weight"}]]
        [:li
          [:label {:for "serum-creatinine"}
                  "Serum creatinine (mg/dL)"]
          [:input {:type "text"
                   :id "serum-creatinine"
                   :name "serum-creatinine"}]]
        [:li
          [:label {:for "infusion-time"} "Infusion time (seconds)"]
          [:input {:type "text"
                   :id "infusion-time"
                   :name "infusion-time"}]]
        [:li
          [:label {:for "c-peak-time"}
                  "Time from infusion to C"
                  [:sub "peak"]
                  " drawn (seconds)"]
          [:input {:type "text"
                   :id "c-peak-time"
                   :name "c-peak-time"}]]
        [:li
          [:button "Calculate"]]]]])

(defn results-card
  "Card for displaying calculation results"
  []
  (let [results (subscribe [:results])]
    (fn []
      (when (some? @results)
        [:div.card
          [:h3.indent "Calculation Results"]
          [:ul.row
            [:li "Creatinine clearance"]
            [:li (:creatinine-clearance @results)
                 " (kg-cm)"
                 [:sup "1/2"]]]
          [:ul.row
            [:li "Half-life"]
            [:li (:half-life @results)]]
          (map-indexed
            (fn [q-idx [q-label value]]
              [:ul.row
                {:key (str "q-" q-idx)}
                [:li (str "q" q-label)]
                [:li (map-indexed
                       (fn [dose-idx [dose-label [c-peak c-trough]]]
                         [:ul.row
                           {:key (str "dose-" dose-idx)}
                           [:li dose-label]
                           [:li
                             [:ul.row
                               [:li "C" [:sub "peak"]]
                               [:li c-peak]]
                             [:ul.row
                               [:li "C" [:sub "trough"]]
                               [:li c-trough]]]])
                       value)]])
            (:concentrations @results))]))))

(defn main-page
  []
  [:section.cards
    [input-card]
    [results-card]])

;; Public interface
(defn listen-submit-button
  []
  (let [input (listen (dom/getElement "calculate") "submit")]
    (go
      (while true
        (<! input)
        (dispatch
          [:calculate
            (field-values ["gender" "age" "height" "weight"
                           "serum-creatinine" "infusion-time"
                           "c-peak-time"])])))))

(defn render-page
  []
  (reagent/render-component
    [main-page]
    (.getElementById js/document "app")))
