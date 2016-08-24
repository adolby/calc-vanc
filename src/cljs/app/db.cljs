(ns app.db
  (:require [cljs.reader]
            [cljs.spec :as s]))

(s/def ::db (s/keys :req-un [::results]))

(def default-value
  {:results {}})
