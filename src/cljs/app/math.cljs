(ns app.math)

(def e (.-E js/Math))

(defn exp [n]
  (.exp js/Math n))

(defn squared [x]
  (.pow js/Math x 2))

(defn sqrt [x]
  (.sqrt js/Math x))

(defn round [x]
  (.round js/Math x))

(defn not-a-number? [x]
  (js/isNaN x))
