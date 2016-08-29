(ns app.views
  (:require [goog.dom :as dom]
            [cljs.core.async :refer [<!]]
            [reagent.core :as reagent]
            [re-frame.core :refer [subscribe dispatch]]
            [taoensso.timbre :as timbre :refer-macros [info]]
            [app.util :refer [listen]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn field-values
  "Value of field in input form"
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
          [:button "Calculate"]]]]])

(defn results-card
  "Card for displaying calculation results"
  []
  (let [results (subscribe [:results])]
    (fn []
      (when (some? @results)
        [:div.card
          [:h3.indent "Calculation Results"]
          [:ul.row.indent
            [:li "Creatinine clearance"]
            [:li (:creatinine-clearance @results)
                 " (kg-cm)"
                 [:sup "1/2"]]]
          [:ul.row.indent
            [:li "Elimination rate constant (k)"]
            [:li (:k @results)]]
          [:ul.row.indent
            [:li "Half-life"]
            [:li (:half-life @results)
                 " hours"]]
          (map-indexed
            (fn [q-idx [q-label value]]
              [:ul.indent
                {:key (str "q-" q-idx)}
                [:li (map-indexed
                       (fn [dose-idx [dose-label [c-peak c-trough]]]
                         [:ul
                           {:key (str "dose-" dose-idx)}
                           [:li.static-element
                             (str "q" q-label " - "
                                  dose-label "mg vancomycin")]
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
    [input-card]])
    ;;[results-card]])

;; Public interface
(defn listen-submit
  []
  (let [input (listen (dom/getElement "calculate") "submit")]
    (go
      (while true
        (<! input)
        (dispatch
          [:calculate
            (field-values ["gender" "age" "height" "weight"
                           "serum-creatinine"])])))))

(defn render-page
  []
  (reagent/render-component
    [main-page]
    (.getElementById js/document "app")))
