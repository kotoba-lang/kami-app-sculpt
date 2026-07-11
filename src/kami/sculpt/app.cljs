(ns kami.sculpt.app (:require [kami.sculpt :as sculpt] [kami.webgpu.mesh :as gpu]))
(def base (sculpt/sphere-mesh 1.5 32 20))
(def initial-document (sculpt/sculpt-document base))
(defonce state (atom {:document initial-document :mode :inflate :radius 0.6 :strength 0.12 :spacing 0.12
                      :symmetry [:x] :history [] :future [] :strokes 0}))
(defonce viewport (atom nil))
(declare checkpoint! upload!)
(defn- mesh [] (sculpt/evaluate-document (:document @state)))
(defn- refresh-layers! []
  (let [container (.getElementById js/document "layers") doc (:document @state)]
    (set! (.-innerHTML container) "")
    (doseq [layer (:sculpt/layers doc)]
      (let [b (.createElement js/document "button") id (:sculpt.layer/id layer)]
        (set! (.-textContent b) (str (if (:sculpt.layer/visible? layer) "◉ " "○ ") (:sculpt.layer/name layer)
                                     " · " (.toFixed (:sculpt.layer/opacity layer) 2)))
        (when (= id (:sculpt/active-layer doc)) (.add (.-classList b) "selected"))
        (.addEventListener b "click" #(do (swap! state assoc-in [:document :sculpt/active-layer] id)
                                           (set! (.-value (.getElementById js/document "layer-opacity")) (:sculpt.layer/opacity layer))
                                           (refresh-layers!)))
        (.addEventListener b "dblclick" #(do (checkpoint!) (swap! state update :document sculpt/update-layer id update :sculpt.layer/visible? not) (upload!)))
        (.appendChild container b)))))
(defn- upload! []
  (when-let [v @viewport]
    (let [mesh (mesh) masked (count (filter pos? (:masks mesh)))]
      (swap! viewport assoc :buffers (gpu/upload-mesh! (:mesh-context v) mesh))
      (set! (.-textContent (.getElementById js/document "stats")) (str (count (:positions mesh)) " vertices · " (/ (count (:indices mesh)) 3) " triangles · " (:strokes @state) " strokes"))
      (set! (.-textContent (.getElementById js/document "debug-state"))
            (js/JSON.stringify (clj->js {:vertices (count (:positions mesh)) :triangles (/ (count (:indices mesh)) 3)
                                         :maskedVertices masked :mode (name (:mode @state)) :symmetry (:symmetry @state)
                                         :layerCount (count (get-in @state [:document :sculpt/layers]))
                                         :activeLayer (get-in @state [:document :sculpt/active-layer])}))))
    (refresh-layers!)))
(defn- draw! [] (when-let [{:keys [buffers] :as v} @viewport] (when buffers (gpu/render-frame! v buffers [0 1 5] [0 0 0] [0.85 0.42 0.58]))) (js/requestAnimationFrame draw!))
(defn- pointer-center [canvas e]
  (let [r (.getBoundingClientRect canvas) nx (- (* 2 (/ (- (.-clientX e) (.-left r)) (.-width r))) 1)
        ny (- 1 (* 2 (/ (- (.-clientY e) (.-top r)) (.-height r)))) z (js/Math.sqrt (max 0 (- 1 (* nx nx) (* ny ny))))]
    [(* 1.5 nx) (* 1.5 ny) (* 1.5 z)]))
(defn- brush-at! [center]
  (let [b (sculpt/brush center (:radius @state) (:strength @state) (:mode @state))]
    (swap! state update :document sculpt/apply-layer-stroke b (:symmetry @state)) (upload!)))
(defn- checkpoint! [] (swap! state (fn [s] (-> s (update :history conj (:document s)) (assoc :future [])))))
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
 (.addEventListener (.getElementById js/document "clear-mask") "click" #(do (checkpoint!) (swap! state update-in [:document :sculpt/base] sculpt/clear-mask) (upload!)))
 (.addEventListener (.getElementById js/document "invert-mask") "click" #(do (checkpoint!) (swap! state update-in [:document :sculpt/base] sculpt/invert-mask) (upload!)))
 (.addEventListener (.getElementById js/document "subdivide") "click" #(do (checkpoint!) (swap! state update :document sculpt/subdivide-document) (upload!)))
 (.addEventListener (.getElementById js/document "add-layer") "click" #(do (checkpoint!) (swap! state update :document sculpt/add-layer (str "Detail " (inc (count (get-in @state [:document :sculpt/layers]))))) (upload!)))
 (.addEventListener (.getElementById js/document "delete-layer") "click" #(when (> (count (get-in @state [:document :sculpt/layers])) 1) (checkpoint!) (swap! state update :document sculpt/delete-layer (get-in @state [:document :sculpt/active-layer])) (upload!)))
 (.addEventListener (.getElementById js/document "layer-opacity") "change" #(let [value (js/parseFloat (.. % -target -value)) id (get-in @state [:document :sculpt/active-layer])] (checkpoint!) (swap! state update :document sculpt/update-layer id assoc :sculpt.layer/opacity value) (upload!)))
 (.addEventListener (.getElementById js/document "undo") "click" #(when-let [doc (peek (:history @state))] (swap! state (fn [s] (assoc s :document doc :history (pop (:history s)) :future (conj (:future s) (:document s))))) (upload!)))
 (.addEventListener (.getElementById js/document "redo") "click" (fn [] (when-let [doc (peek (:future @state))] (swap! state (fn [s] (assoc s :document doc :future (pop (:future s)) :history (conj (:history s) (:document s))))) (upload!))))
 (.addEventListener (.getElementById js/document "export") "click" #(let [a (.createElement js/document "a")] (set! (.-href a) (.createObjectURL js/URL (js/Blob. #js [(pr-str (:document @state))] #js {:type "application/edn"}))) (set! (.-download a) "sculpt-document.edn") (.click a)))))
