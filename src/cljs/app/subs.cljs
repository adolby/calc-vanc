(ns app.subs
  (:require [re-frame.core :refer [reg-sub]]))

;; Subscription for showing calculation results
(reg-sub
  :results
  (fn [db _]
    (:results db)))
