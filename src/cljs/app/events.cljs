(ns app.events
  (:require
    [clojure.string :as str]
    [cljs.spec :as s]
    [re-frame.core :refer [reg-event-db path trim-v after debug
                           dispatch]]
    [taoensso.timbre :as timbre :refer-macros [info]]
    [app.db :refer [default-value]]
    [app.calc :as calc])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn check-and-throw
  "Throw an exception if db doesn't match the spec"
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info "spec check failed: "
             {:problems (s/explain-str a-spec db)}))))

(def check-spec-interceptor
  (after (partial check-and-throw :app.db/db)))

(reg-event-db
  :initialize-db
  check-spec-interceptor
  (fn [_ _]
    default-value))

(reg-event-db
  :calculate
  [check-spec-interceptor (path :results) trim-v]
  (fn [_ [data]]
    (calc/calculate data)))
