(ns kami.sculpt.app (:require [kami.sculpt :as sculpt] [kami.webgpu.mesh :as gpu]))
(def base (sculpt/sphere-mesh 1.5 32 20))
(defonce state (atom {:mesh base :mode :inflate :radius 0.6 :strength 0.12 :spacing 0.12
                      :symmetry [:x] :history [] :future [] :strokes 0}))
(defonce viewport (atom nil))
(defn- upload! []
  (when-let [v @viewport]
    (let [mesh (:mesh @state) masked (count (filter pos? (:masks mesh)))]
      (swap! viewport assoc :buffers (gpu/upload-mesh! (:mesh-context v) mesh))
      (set! (.-textContent (.getElementById js/document "stats")) (str (count (:positions mesh)) " vertices · " (/ (count (:indices mesh)) 3) " triangles · " (:strokes @state) " strokes"))
      (set! (.-textContent (.getElementById js/document "debug-state"))
            (js/JSON.stringify (clj->js {:vertices (count (:positions mesh)) :triangles (/ (count (:indices mesh)) 3)
                                         :maskedVertices masked :mode (name (:mode @state)) :symmetry (:symmetry @state)}))))))
(defn- draw! [] (when-let [{:keys [buffers] :as v} @viewport] (when buffers (gpu/render-frame! v buffers [0 1 5] [0 0 0] [0.85 0.42 0.58]))) (js/requestAnimationFrame draw!))
(defn- pointer-center [canvas e]
  (let [r (.getBoundingClientRect canvas) nx (- (* 2 (/ (- (.-clientX e) (.-left r)) (.-width r))) 1)
        ny (- 1 (* 2 (/ (- (.-clientY e) (.-top r)) (.-height r)))) z (js/Math.sqrt (max 0 (- 1 (* nx nx) (* ny ny))))]
    [(* 1.5 nx) (* 1.5 ny) (* 1.5 z)]))
(defn- brush-at! [center]
  (let [b (sculpt/brush center (:radius @state) (:strength @state) (:mode @state))]
    (swap! state update :mesh sculpt/apply-stroke b (:symmetry @state)) (upload!)))
(defn- checkpoint! [] (swap! state (fn [s] (-> s (update :history conj (:mesh s)) (assoc :future [])))))
(defn ^:export init! [] (let [canvas (.getElementById js/document "gpu-canvas") dragging (atom false) last-center (atom nil)]
 (-> (gpu/init-canvas! canvas) (.then (fn [v] (reset! viewport v) (upload!) (set! (.-textContent (.getElementById js/document "gpu-status")) "") (draw!))))
 (doseq [b (array-seq (.querySelectorAll js/document "[data-mode]"))] (.addEventListener b "click" #(do (doseq [x (array-seq (.querySelectorAll js/document "[data-mode]"))] (.remove (.-classList x) "selected")) (.add (.-classList b) "selected") (swap! state assoc :mode (keyword (.getAttribute b "data-mode"))))))
 (.addEventListener canvas "pointerdown" #(let [center (pointer-center canvas %)] (reset! dragging true) (reset! last-center center) (checkpoint!) (swap! state update :strokes inc) (brush-at! center)))
 (.addEventListener js/window "pointerup" #(do (reset! dragging false) (reset! last-center nil)))
 (.addEventListener canvas "pointermove" #(when @dragging
                                             (let [center (pointer-center canvas %) delta (mapv - center @last-center)
                                                   distance (js/Math.sqrt (reduce + (map (fn [x] (* x x)) delta)))]
                                               (when (>= distance (:spacing @state)) (reset! last-center center) (brush-at! center)))))
 (.addEventListener (.getElementById js/document "radius") "input" #(let [v (js/parseFloat (.. % -target -value))] (swap! state assoc :radius v) (set! (.-textContent (.getElementById js/document "radius-value")) (.toFixed v 2))))
 (.addEventListener (.getElementById js/document "strength") "input" #(let [v (js/parseFloat (.. % -target -value))] (swap! state assoc :strength v) (set! (.-textContent (.getElementById js/document "strength-value")) (.toFixed v 2))))
 (doseq [axis [:x :y :z]]
   (.addEventListener (.getElementById js/document (str "symmetry-" (name axis))) "change"
                      #(swap! state assoc :symmetry (vec (filter (fn [a] (.-checked (.getElementById js/document (str "symmetry-" (name a))))) [:x :y :z])))))
 (.addEventListener (.getElementById js/document "spacing") "input" #(swap! state assoc :spacing (js/parseFloat (.. % -target -value))))
 (.addEventListener (.getElementById js/document "clear-mask") "click" #(do (checkpoint!) (swap! state update :mesh sculpt/clear-mask) (upload!)))
 (.addEventListener (.getElementById js/document "invert-mask") "click" #(do (checkpoint!) (swap! state update :mesh sculpt/invert-mask) (upload!)))
 (.addEventListener (.getElementById js/document "subdivide") "click" #(do (checkpoint!) (swap! state update :mesh sculpt/subdivide-mesh) (upload!)))
 (.addEventListener (.getElementById js/document "undo") "click" #(when-let [m (peek (:history @state))] (swap! state (fn [s] (assoc s :mesh m :history (pop (:history s)) :future (conj (:future s) (:mesh s))))) (upload!)))
 (.addEventListener (.getElementById js/document "redo") "click" (fn [] (when-let [m (peek (:future @state))] (swap! state (fn [s] (assoc s :mesh m :future (pop (:future s)) :history (conj (:history s) (:mesh s))))) (upload!))))
 (.addEventListener (.getElementById js/document "export") "click" #(let [a (.createElement js/document "a")] (set! (.-href a) (.createObjectURL js/URL (js/Blob. #js [(pr-str (:mesh @state))] #js {:type "application/edn"}))) (set! (.-download a) "sculpt.edn") (.click a)))))
