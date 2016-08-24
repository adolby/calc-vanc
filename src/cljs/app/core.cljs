(ns app.core
  (:require [app.subs :as subs]
            [app.events :as events]
            [app.views :as views]))

(defn init
  []
  (views/render-page)
  (views/listen-submit-button))
