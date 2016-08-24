(ns app.util
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))
