goog.provide('kami.sculpt.app');
kami.sculpt.app.base = kami.sculpt.sphere_mesh.cljs$core$IFn$_invoke$arity$3(1.5,(32),(20));
kami.sculpt.app.initial_document = kami.sculpt.sculpt_document(kami.sculpt.app.base);
if((typeof kami !== 'undefined') && (typeof kami.sculpt !== 'undefined') && (typeof kami.sculpt.app !== 'undefined') && (typeof kami.sculpt.app.state !== 'undefined')){
} else {
kami.sculpt.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"temporary-mode","temporary-mode",-97261008),new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"strength","strength",-415606478),new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"spacing","spacing",204422175)],["Untitled Sculpt",cljs.core.PersistentVector.EMPTY,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),"",new cljs.core.Keyword(null,"inflate","inflate",-1062661619),cljs.core.PersistentVector.EMPTY,0.6,null,kami.sculpt.app.initial_document,0.12,new cljs.core.Keyword(null,"clean","clean",41534079),(0),"untitled-sculpt",new cljs.core.Keyword(null,"zbrush","zbrush",-2114537379),0.12]));
}
if((typeof kami !== 'undefined') && (typeof kami.sculpt !== 'undefined') && (typeof kami.sculpt.app !== 'undefined') && (typeof kami.sculpt.app.viewport !== 'undefined')){
} else {
kami.sculpt.app.viewport = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}

kami.sculpt.app.mesh = (function kami$sculpt$app$mesh(){
return kami.sculpt.evaluate_document(new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)));
});
kami.sculpt.app.refresh_layers_BANG_ = (function kami$sculpt$app$refresh_layers_BANG_(){
var container = document.getElementById("layers");
var doc = new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state));
(container.innerHTML = "");

var seq__22859 = cljs.core.seq(new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc));
var chunk__22860 = null;
var count__22861 = (0);
var i__22862 = (0);
while(true){
if((i__22862 < count__22861)){
var layer = chunk__22860.cljs$core$IIndexed$_nth$arity$2(null, i__22862);
var b_23078 = document.createElement("button");
var id_23079 = new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(layer);
(b_23078.textContent = [(cljs.core.truth_(new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265).cljs$core$IFn$_invoke$arity$1(layer))?"\u25C9 ":"\u25CB "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003).cljs$core$IFn$_invoke$arity$1(layer))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer).toFixed((2)))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_23079,new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc))){
b_23078.classList.add("selected");
} else {
}

b_23078.addEventListener("click",((function (seq__22859,chunk__22860,count__22861,i__22862,b_23078,id_23079,layer,container,doc){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null),id_23079);

(document.getElementById("layer-opacity").value = new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer));

return (kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.refresh_layers_BANG_.call(null, ));
});})(seq__22859,chunk__22860,count__22861,i__22862,b_23078,id_23079,layer,container,doc))
);

b_23078.addEventListener("dblclick",((function (seq__22859,chunk__22860,count__22861,i__22862,b_23078,id_23079,layer,container,doc){
return (function (){
(kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.checkpoint_BANG_.call(null, ));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.update_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_23079,cljs.core.update,new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265),cljs.core.not], 0));

return (kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.upload_BANG_.call(null, ));
});})(seq__22859,chunk__22860,count__22861,i__22862,b_23078,id_23079,layer,container,doc))
);

container.appendChild(b_23078);


var G__23087 = seq__22859;
var G__23088 = chunk__22860;
var G__23089 = count__22861;
var G__23090 = (i__22862 + (1));
seq__22859 = G__23087;
chunk__22860 = G__23088;
count__22861 = G__23089;
i__22862 = G__23090;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22859);
if(temp__5825__auto__){
var seq__22859__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22859__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22859__$1);
var G__23093 = cljs.core.chunk_rest(seq__22859__$1);
var G__23094 = c__5525__auto__;
var G__23095 = cljs.core.count(c__5525__auto__);
var G__23096 = (0);
seq__22859 = G__23093;
chunk__22860 = G__23094;
count__22861 = G__23095;
i__22862 = G__23096;
continue;
} else {
var layer = cljs.core.first(seq__22859__$1);
var b_23098 = document.createElement("button");
var id_23099 = new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(layer);
(b_23098.textContent = [(cljs.core.truth_(new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265).cljs$core$IFn$_invoke$arity$1(layer))?"\u25C9 ":"\u25CB "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003).cljs$core$IFn$_invoke$arity$1(layer))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer).toFixed((2)))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_23099,new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc))){
b_23098.classList.add("selected");
} else {
}

b_23098.addEventListener("click",((function (seq__22859,chunk__22860,count__22861,i__22862,b_23098,id_23099,layer,seq__22859__$1,temp__5825__auto__,container,doc){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null),id_23099);

(document.getElementById("layer-opacity").value = new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer));

return (kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.refresh_layers_BANG_.call(null, ));
});})(seq__22859,chunk__22860,count__22861,i__22862,b_23098,id_23099,layer,seq__22859__$1,temp__5825__auto__,container,doc))
);

b_23098.addEventListener("dblclick",((function (seq__22859,chunk__22860,count__22861,i__22862,b_23098,id_23099,layer,seq__22859__$1,temp__5825__auto__,container,doc){
return (function (){
(kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.checkpoint_BANG_.call(null, ));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.update_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_23099,cljs.core.update,new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265),cljs.core.not], 0));

return (kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.upload_BANG_.call(null, ));
});})(seq__22859,chunk__22860,count__22861,i__22862,b_23098,id_23099,layer,seq__22859__$1,temp__5825__auto__,container,doc))
);

container.appendChild(b_23098);


var G__23108 = cljs.core.next(seq__22859__$1);
var G__23109 = null;
var G__23110 = (0);
var G__23111 = (0);
seq__22859 = G__23108;
chunk__22860 = G__23109;
count__22861 = G__23110;
i__22862 = G__23111;
continue;
}
} else {
return null;
}
}
break;
}
});
kami.sculpt.app.upload_BANG_ = (function kami$sculpt$app$upload_BANG_(){
var temp__5825__auto__ = cljs.core.deref(kami.sculpt.app.viewport);
if(cljs.core.truth_(temp__5825__auto__)){
var v = temp__5825__auto__;
var mesh_23112 = kami.sculpt.app.mesh();
var masked_23113 = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,new cljs.core.Keyword(null,"masks","masks",416633332).cljs$core$IFn$_invoke$arity$1(mesh_23112)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.viewport,cljs.core.assoc,new cljs.core.Keyword(null,"buffers","buffers",471409492),kami.webgpu.mesh.upload_mesh_BANG_(new cljs.core.Keyword(null,"mesh-context","mesh-context",832369712).cljs$core$IFn$_invoke$arity$1(v),mesh_23112));

(document.getElementById("stats").textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh_23112)))," vertices \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(mesh_23112)) / (3)))," triangles \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)))," strokes"].join(''));

(document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"layerCount","layerCount",-963307453),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"activeLayer","activeLayer",656177926),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"maskedVertices","maskedVertices",1987436463),new cljs.core.Keyword(null,"shortcutBuffer","shortcutBuffer",1317694555),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"triangles","triangles",-1525417058)],[kami.sculpt.project.current_version,cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh_23112)),cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059)], null))),new cljs.core.Keyword(null,"revision","revision",-1350113114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null)),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),cljs.core.name(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))),cljs.core.name(new cljs.core.Keyword(null,"save-status","save-status",-2046612873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))),masked_23113,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))),(cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(mesh_23112)) / (3))]))));

return kami.sculpt.app.refresh_layers_BANG_();
} else {
return null;
}
});
kami.sculpt.app.draw_BANG_ = (function kami$sculpt$app$draw_BANG_(){
var temp__5825__auto___23124 = cljs.core.deref(kami.sculpt.app.viewport);
if(cljs.core.truth_(temp__5825__auto___23124)){
var map__22923_23125 = temp__5825__auto___23124;
var map__22923_23126__$1 = cljs.core.__destructure_map(map__22923_23125);
var v_23127 = map__22923_23126__$1;
var buffers_23128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22923_23126__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
if(cljs.core.truth_(buffers_23128)){
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$5(v_23127,buffers_23128,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.85,0.42,0.58], null));
} else {
}
} else {
}

return requestAnimationFrame(kami.sculpt.app.draw_BANG_);
});
kami.sculpt.app.pointer_center = (function kami$sculpt$app$pointer_center(canvas,e){
var r = canvas.getBoundingClientRect();
var nx = (((2) * ((e.clientX - r.left) / r.width)) - (1));
var ny = ((1) - ((2) * ((e.clientY - r.top) / r.height)));
var z = Math.sqrt((function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (((1) - (nx * nx)) - (ny * ny));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.5 * nx),(1.5 * ny),(1.5 * z)], null);
});
kami.sculpt.app.brush_at_BANG_ = (function kami$sculpt$app$brush_at_BANG_(center){
var b = kami.sculpt.brush(center,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),new cljs.core.Keyword(null,"strength","strength",-415606478).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.apply_layer_stroke,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))], 0));

return kami.sculpt.app.upload_BANG_();
});
kami.sculpt.app.checkpoint_BANG_ = (function kami$sculpt$app$checkpoint_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.sculpt.app.state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0)),new cljs.core.Keyword(null,"revision","revision",-1350113114),cljs.core.inc);
}));
});
kami.sculpt.app.set_mode_BANG_ = (function kami$sculpt$app$set_mode_BANG_(mode){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),""], 0));

var seq__22935_23129 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("[data-mode]")));
var chunk__22936_23130 = null;
var count__22937_23131 = (0);
var i__22938_23132 = (0);
while(true){
if((i__22938_23132 < count__22937_23131)){
var button_23133 = chunk__22936_23130.cljs$core$IIndexed$_nth$arity$2(null, i__22938_23132);
button_23133.classList.toggle("selected",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(mode),button_23133.getAttribute("data-mode")));


var G__23134 = seq__22935_23129;
var G__23135 = chunk__22936_23130;
var G__23136 = count__22937_23131;
var G__23137 = (i__22938_23132 + (1));
seq__22935_23129 = G__23134;
chunk__22936_23130 = G__23135;
count__22937_23131 = G__23136;
i__22938_23132 = G__23137;
continue;
} else {
var temp__5825__auto___23138 = cljs.core.seq(seq__22935_23129);
if(temp__5825__auto___23138){
var seq__22935_23139__$1 = temp__5825__auto___23138;
if(cljs.core.chunked_seq_QMARK_(seq__22935_23139__$1)){
var c__5525__auto___23140 = cljs.core.chunk_first(seq__22935_23139__$1);
var G__23141 = cljs.core.chunk_rest(seq__22935_23139__$1);
var G__23142 = c__5525__auto___23140;
var G__23143 = cljs.core.count(c__5525__auto___23140);
var G__23144 = (0);
seq__22935_23129 = G__23141;
chunk__22936_23130 = G__23142;
count__22937_23131 = G__23143;
i__22938_23132 = G__23144;
continue;
} else {
var button_23145 = cljs.core.first(seq__22935_23139__$1);
button_23145.classList.toggle("selected",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(mode),button_23145.getAttribute("data-mode")));


var G__23146 = cljs.core.next(seq__22935_23139__$1);
var G__23147 = null;
var G__23148 = (0);
var G__23149 = (0);
seq__22935_23129 = G__23146;
chunk__22936_23130 = G__23147;
count__22937_23131 = G__23148;
i__22938_23132 = G__23149;
continue;
}
} else {
}
}
break;
}

return kami.sculpt.app.upload_BANG_();
});
kami.sculpt.app.editable_target_QMARK_ = (function kami$sculpt$app$editable_target_QMARK_(event){
var target = event.target;
var tag = (function (){var G__22948 = target;
var G__22948__$1 = (((G__22948 == null))?null:G__22948.tagName);
if((G__22948__$1 == null)){
return null;
} else {
return G__22948__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__22956 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__22956.cljs$core$IFn$_invoke$arity$1 ? fexpr__22956.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__22956.call(null, tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return target.isContentEditable;
}
});
kami.sculpt.app.zbrush_sequences = new cljs.core.PersistentArrayMap(null, 3, ["bi",new cljs.core.Keyword(null,"inflate","inflate",-1062661619),"bs",new cljs.core.Keyword(null,"smooth","smooth",-809843519),"bp",new cljs.core.Keyword(null,"pinch","pinch",1452564114)], null);
kami.sculpt.app.direct_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blender","blender",354426016),new cljs.core.PersistentArrayMap(null, 5, ["i",new cljs.core.Keyword(null,"inflate","inflate",-1062661619),"s",new cljs.core.Keyword(null,"smooth","smooth",-809843519),"p",new cljs.core.Keyword(null,"pinch","pinch",1452564114),"m",new cljs.core.Keyword(null,"mask","mask",-585748447),"e",new cljs.core.Keyword(null,"mask-erase","mask-erase",-1259279978)], null),new cljs.core.Keyword(null,"mudbox","mudbox",-698035541),new cljs.core.PersistentArrayMap(null, 5, ["1",new cljs.core.Keyword(null,"inflate","inflate",-1062661619),"2",new cljs.core.Keyword(null,"smooth","smooth",-809843519),"3",new cljs.core.Keyword(null,"pinch","pinch",1452564114),"m",new cljs.core.Keyword(null,"mask","mask",-585748447),"e",new cljs.core.Keyword(null,"mask-erase","mask-erase",-1259279978)], null)], null);
kami.sculpt.app.storage_key = "kami.sculpt.project.v2";
kami.sculpt.app.backup_key = "kami.sculpt.project.backup";
kami.sculpt.app.project_document = (function kami$sculpt$app$project_document(){
var map__22977 = cljs.core.deref(kami.sculpt.app.state);
var map__22977__$1 = cljs.core.__destructure_map(map__22977);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var symmetry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
return kami.sculpt.project.document(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id,new cljs.core.Keyword(null,"name","name",1843675177),project_name,new cljs.core.Keyword(null,"sculpt-document","sculpt-document",-2018073400),document__$1,new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"strength","strength",-415606478),strength,new cljs.core.Keyword(null,"spacing","spacing",204422175),spacing], null),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),symmetry,new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),strokes], null));
});
kami.sculpt.app.save_project_BANG_ = (function kami$sculpt$app$save_project_BANG_(){
var data = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.sculpt.app.project_document()], 0));
var old = localStorage.getItem(kami.sculpt.app.storage_key);
if(cljs.core.truth_(old)){
localStorage.setItem(kami.sculpt.app.backup_key,old);
} else {
}

localStorage.setItem(kami.sculpt.app.storage_key,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660));

return kami.sculpt.app.upload_BANG_();
});
kami.sculpt.app.sync_controls_BANG_ = (function kami$sculpt$app$sync_controls_BANG_(){
var map__22980 = cljs.core.deref(kami.sculpt.app.state);
var map__22980__$1 = cljs.core.__destructure_map(map__22980);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22980__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22980__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22980__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175));
var symmetry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22980__$1,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22980__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var seq__22981_23150 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["radius",radius], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["strength",strength], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spacing",spacing], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["profile",cljs.core.name(profile)], null)], null));
var chunk__22982_23151 = null;
var count__22983_23152 = (0);
var i__22984_23153 = (0);
while(true){
if((i__22984_23153 < count__22983_23152)){
var vec__22991_23154 = chunk__22982_23151.cljs$core$IIndexed$_nth$arity$2(null, i__22984_23153);
var id_23155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22991_23154,(0),null);
var value_23156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22991_23154,(1),null);
(document.getElementById(id_23155).value = value_23156);


var G__23157 = seq__22981_23150;
var G__23158 = chunk__22982_23151;
var G__23159 = count__22983_23152;
var G__23160 = (i__22984_23153 + (1));
seq__22981_23150 = G__23157;
chunk__22982_23151 = G__23158;
count__22983_23152 = G__23159;
i__22984_23153 = G__23160;
continue;
} else {
var temp__5825__auto___23161 = cljs.core.seq(seq__22981_23150);
if(temp__5825__auto___23161){
var seq__22981_23162__$1 = temp__5825__auto___23161;
if(cljs.core.chunked_seq_QMARK_(seq__22981_23162__$1)){
var c__5525__auto___23163 = cljs.core.chunk_first(seq__22981_23162__$1);
var G__23164 = cljs.core.chunk_rest(seq__22981_23162__$1);
var G__23165 = c__5525__auto___23163;
var G__23166 = cljs.core.count(c__5525__auto___23163);
var G__23167 = (0);
seq__22981_23150 = G__23164;
chunk__22982_23151 = G__23165;
count__22983_23152 = G__23166;
i__22984_23153 = G__23167;
continue;
} else {
var vec__22994_23168 = cljs.core.first(seq__22981_23162__$1);
var id_23169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22994_23168,(0),null);
var value_23170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22994_23168,(1),null);
(document.getElementById(id_23169).value = value_23170);


var G__23172 = cljs.core.next(seq__22981_23162__$1);
var G__23173 = null;
var G__23174 = (0);
var G__23175 = (0);
seq__22981_23150 = G__23172;
chunk__22982_23151 = G__23173;
count__22983_23152 = G__23174;
i__22984_23153 = G__23175;
continue;
}
} else {
}
}
break;
}

(document.getElementById("radius-value").textContent = radius.toFixed((2)));

(document.getElementById("strength-value").textContent = strength.toFixed((2)));

var seq__22997 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var chunk__22998 = null;
var count__22999 = (0);
var i__23000 = (0);
while(true){
if((i__23000 < count__22999)){
var axis = chunk__22998.cljs$core$IIndexed$_nth$arity$2(null, i__23000);
(document.getElementById(["symmetry-",cljs.core.name(axis)].join('')).checked = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([axis]),symmetry));


var G__23176 = seq__22997;
var G__23177 = chunk__22998;
var G__23178 = count__22999;
var G__23179 = (i__23000 + (1));
seq__22997 = G__23176;
chunk__22998 = G__23177;
count__22999 = G__23178;
i__23000 = G__23179;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22997);
if(temp__5825__auto__){
var seq__22997__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22997__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22997__$1);
var G__23180 = cljs.core.chunk_rest(seq__22997__$1);
var G__23181 = c__5525__auto__;
var G__23182 = cljs.core.count(c__5525__auto__);
var G__23183 = (0);
seq__22997 = G__23180;
chunk__22998 = G__23181;
count__22999 = G__23182;
i__23000 = G__23183;
continue;
} else {
var axis = cljs.core.first(seq__22997__$1);
(document.getElementById(["symmetry-",cljs.core.name(axis)].join('')).checked = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([axis]),symmetry));


var G__23184 = cljs.core.next(seq__22997__$1);
var G__23185 = null;
var G__23186 = (0);
var G__23187 = (0);
seq__22997 = G__23184;
chunk__22998 = G__23185;
count__22999 = G__23186;
i__23000 = G__23187;
continue;
}
} else {
return null;
}
}
break;
}
});
kami.sculpt.app.apply_project_BANG_ = (function kami$sculpt$app$apply_project_BANG_(value){
var p = kami.sculpt.project.open(value);
var brush = new cljs.core.Keyword("project","brush","project/brush",-16829216).cljs$core$IFn$_invoke$arity$1(p);
var interaction = new cljs.core.Keyword("project","interaction","project/interaction",-1316543261).cljs$core$IFn$_invoke$arity$1(p);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("project","sculpt","project/sculpt",1597715011).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"strength","strength",-415606478),new cljs.core.Keyword(null,"strength","strength",-415606478).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(brush),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),new cljs.core.Keyword("project","symmetry","project/symmetry",-837415138).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.Keyword("project","strokes","project/strokes",-1957087091).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),"",new cljs.core.Keyword(null,"temporary-mode","temporary-mode",-97261008),null,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660)], 0));

kami.sculpt.app.sync_controls_BANG_();

kami.sculpt.app.set_mode_BANG_(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(brush));

return kami.sculpt.app.upload_BANG_();
});
kami.sculpt.app.load_project_BANG_ = (function kami$sculpt$app$load_project_BANG_(){
var temp__5825__auto__ = localStorage.getItem(kami.sculpt.app.storage_key);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
try{return kami.sculpt.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data));
}catch (e23003){var _ = e23003;
var temp__5825__auto____$1 = localStorage.getItem(kami.sculpt.app.backup_key);
if(cljs.core.truth_(temp__5825__auto____$1)){
var backup = temp__5825__auto____$1;
return kami.sculpt.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(backup));
} else {
return null;
}
}} else {
return null;
}
});
kami.sculpt.app.download_project_BANG_ = (function kami$sculpt$app$download_project_BANG_(){
var a = document.createElement("a");
var url = URL.createObjectURL((new Blob([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.sculpt.app.project_document()], 0))],({"type": "application/edn"}))));
(a.href = url);

(a.download = "sculpt.kami-sculpt.edn");

a.click();

return setTimeout((function (){
return URL.revokeObjectURL(url);
}),(0));
});
kami.sculpt.app.import_project_BANG_ = (function kami$sculpt$app$import_project_BANG_(event){
var temp__5825__auto__ = (event.target.files[(0)]);
if(cljs.core.truth_(temp__5825__auto__)){
var file = temp__5825__auto__;
return file.text().then((function (p1__23010_SHARP_){
return kami.sculpt.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__23010_SHARP_));
}));
} else {
return null;
}
});
kami.sculpt.app.change_radius_BANG_ = (function kami$sculpt$app$change_radius_BANG_(delta){
var radius = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = (function (){var x__5090__auto__ = 1.5;
var y__5091__auto__ = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)) + delta);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius);

(document.getElementById("radius").value = radius);

(document.getElementById("radius-value").textContent = radius.toFixed((2)));

return kami.sculpt.app.upload_BANG_();
});
kami.sculpt.app.on_key_down_BANG_ = (function kami$sculpt$app$on_key_down_BANG_(event){
if(cljs.core.truth_(kami.sculpt.app.editable_target_QMARK_(event))){
return null;
} else {
var key = event.key.toLowerCase();
var ctrl = (function (){var or__5002__auto__ = event.ctrlKey;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return event.metaKey;
}
})();
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state));
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = event.shiftKey;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"n");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
event.preventDefault();

return document.getElementById("add-layer").click();
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"z");
} else {
return and__5000__auto__;
}
})())){
event.preventDefault();

return document.getElementById("undo").click();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"[")){
event.preventDefault();

return kami.sculpt.app.change_radius_BANG_(-0.05);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"]")){
event.preventDefault();

return kami.sculpt.app.change_radius_BANG_(0.05);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"shift")){
if(cljs.core.truth_(new cljs.core.Keyword(null,"temporary-mode","temporary-mode",-97261008).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"temporary-mode","temporary-mode",-97261008),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)));

return kami.sculpt.app.set_mode_BANG_(new cljs.core.Keyword(null,"smooth","smooth",-809843519));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"zbrush","zbrush",-2114537379))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"m")){
return kami.sculpt.app.set_mode_BANG_(new cljs.core.Keyword(null,"mask","mask",-585748447));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"e")){
return kami.sculpt.app.set_mode_BANG_(new cljs.core.Keyword(null,"mask-erase","mask-erase",-1259279978));
} else {
if(cljs.core.truth_(cljs.core.re_matches(/[a-z]/,key))){
var buffer = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kami.sculpt.app.zbrush_sequences,buffer);
var prefix_QMARK_ = cljs.core.some((function (p1__23013_SHARP_){
return p1__23013_SHARP_.startsWith(buffer);
}),cljs.core.keys(kami.sculpt.app.zbrush_sequences));
event.preventDefault();

if(cljs.core.truth_(mode)){
return kami.sculpt.app.set_mode_BANG_(mode);
} else {
if(cljs.core.truth_(prefix_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),buffer);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),key);

}
}
} else {
return null;
}
}
}
} else {
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kami.sculpt.app.direct_modes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [profile,key], null));
if(cljs.core.truth_(temp__5825__auto__)){
var mode = temp__5825__auto__;
event.preventDefault();

return kami.sculpt.app.set_mode_BANG_(mode);
} else {
return null;
}

}
}
}
}
}
}
}
});
kami.sculpt.app.on_key_up_BANG_ = (function kami$sculpt$app$on_key_up_BANG_(event){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Shift",event.key);
if(and__5000__auto__){
return new cljs.core.Keyword(null,"temporary-mode","temporary-mode",-97261008).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state));
} else {
return and__5000__auto__;
}
})())){
var mode = new cljs.core.Keyword(null,"temporary-mode","temporary-mode",-97261008).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"temporary-mode","temporary-mode",-97261008),null);

return kami.sculpt.app.set_mode_BANG_(mode);
} else {
return null;
}
});
kami.sculpt.app.init_BANG_ = (function kami$sculpt$app$init_BANG_(){
var canvas = document.getElementById("gpu-canvas");
var dragging = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var last_center = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
kami.webgpu.mesh.init_canvas_BANG_(canvas).then((function (v){
cljs.core.reset_BANG_(kami.sculpt.app.viewport,v);

kami.sculpt.app.upload_BANG_();

(document.getElementById("gpu-status").textContent = "");

return kami.sculpt.app.draw_BANG_();
}));

var seq__23023_23188 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("[data-mode]")));
var chunk__23024_23189 = null;
var count__23025_23190 = (0);
var i__23026_23191 = (0);
while(true){
if((i__23026_23191 < count__23025_23190)){
var b_23192 = chunk__23024_23189.cljs$core$IIndexed$_nth$arity$2(null, i__23026_23191);
b_23192.addEventListener("click",((function (seq__23023_23188,chunk__23024_23189,count__23025_23190,i__23026_23191,b_23192,canvas,dragging,last_center){
return (function (){
return kami.sculpt.app.set_mode_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b_23192.getAttribute("data-mode")));
});})(seq__23023_23188,chunk__23024_23189,count__23025_23190,i__23026_23191,b_23192,canvas,dragging,last_center))
);


var G__23193 = seq__23023_23188;
var G__23194 = chunk__23024_23189;
var G__23195 = count__23025_23190;
var G__23196 = (i__23026_23191 + (1));
seq__23023_23188 = G__23193;
chunk__23024_23189 = G__23194;
count__23025_23190 = G__23195;
i__23026_23191 = G__23196;
continue;
} else {
var temp__5825__auto___23197 = cljs.core.seq(seq__23023_23188);
if(temp__5825__auto___23197){
var seq__23023_23198__$1 = temp__5825__auto___23197;
if(cljs.core.chunked_seq_QMARK_(seq__23023_23198__$1)){
var c__5525__auto___23199 = cljs.core.chunk_first(seq__23023_23198__$1);
var G__23200 = cljs.core.chunk_rest(seq__23023_23198__$1);
var G__23201 = c__5525__auto___23199;
var G__23202 = cljs.core.count(c__5525__auto___23199);
var G__23203 = (0);
seq__23023_23188 = G__23200;
chunk__23024_23189 = G__23201;
count__23025_23190 = G__23202;
i__23026_23191 = G__23203;
continue;
} else {
var b_23204 = cljs.core.first(seq__23023_23198__$1);
b_23204.addEventListener("click",((function (seq__23023_23188,chunk__23024_23189,count__23025_23190,i__23026_23191,b_23204,seq__23023_23198__$1,temp__5825__auto___23197,canvas,dragging,last_center){
return (function (){
return kami.sculpt.app.set_mode_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b_23204.getAttribute("data-mode")));
});})(seq__23023_23188,chunk__23024_23189,count__23025_23190,i__23026_23191,b_23204,seq__23023_23198__$1,temp__5825__auto___23197,canvas,dragging,last_center))
);


var G__23207 = cljs.core.next(seq__23023_23198__$1);
var G__23208 = null;
var G__23209 = (0);
var G__23210 = (0);
seq__23023_23188 = G__23207;
chunk__23024_23189 = G__23208;
count__23025_23190 = G__23209;
i__23026_23191 = G__23210;
continue;
}
} else {
}
}
break;
}

document.getElementById("profile").addEventListener("change",(function (p1__23015_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__23015_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),""], 0));

(document.getElementById("profile-hint").textContent = (function (){var G__23030 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state));
var G__23030__$1 = (((G__23030 instanceof cljs.core.Keyword))?G__23030.fqn:null);
switch (G__23030__$1) {
case "blender":
return "I Inflate \u00B7 S Smooth \u00B7 P Pinch \u00B7 M Mask";

break;
case "mudbox":
return "1 Sculpt \u00B7 2 Smooth \u00B7 3 Pinch \u00B7 M Mask";

break;
default:
return "B,I Inflate \u00B7 B,S Smooth \u00B7 B,P Pinch \u00B7 M Mask";

}
})());

return kami.sculpt.app.upload_BANG_();
}));

window.addEventListener("keydown",kami.sculpt.app.on_key_down_BANG_);

window.addEventListener("keyup",kami.sculpt.app.on_key_up_BANG_);

canvas.addEventListener("pointerdown",(function (p1__23016_SHARP_){
var center = kami.sculpt.app.pointer_center(canvas,p1__23016_SHARP_);
cljs.core.reset_BANG_(dragging,true);

cljs.core.reset_BANG_(last_center,center);

kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.inc);

return kami.sculpt.app.brush_at_BANG_(center);
}));

window.addEventListener("pointerup",(function (){
cljs.core.reset_BANG_(dragging,false);

return cljs.core.reset_BANG_(last_center,null);
}));

canvas.addEventListener("pointermove",(function (p1__23017_SHARP_){
if(cljs.core.truth_(cljs.core.deref(dragging))){
var center = kami.sculpt.app.pointer_center(canvas,p1__23017_SHARP_);
var delta = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,center,cljs.core.deref(last_center));
var distance = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return (x * x);
}),delta)));
if((distance >= new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)))){
cljs.core.reset_BANG_(last_center,center);

return kami.sculpt.app.brush_at_BANG_(center);
} else {
return null;
}
} else {
return null;
}
}));

document.getElementById("radius").addEventListener("input",(function (p1__23018_SHARP_){
var v = parseFloat(p1__23018_SHARP_.target.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"radius","radius",-2073122258),v);

return (document.getElementById("radius-value").textContent = v.toFixed((2)));
}));

document.getElementById("strength").addEventListener("input",(function (p1__23019_SHARP_){
var v = parseFloat(p1__23019_SHARP_.target.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"strength","strength",-415606478),v);

return (document.getElementById("strength-value").textContent = v.toFixed((2)));
}));

var seq__23034_23216 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var chunk__23035_23217 = null;
var count__23036_23218 = (0);
var i__23037_23219 = (0);
while(true){
if((i__23037_23219 < count__23036_23218)){
var axis_23220 = chunk__23035_23217.cljs$core$IIndexed$_nth$arity$2(null, i__23037_23219);
document.getElementById(["symmetry-",cljs.core.name(axis_23220)].join('')).addEventListener("change",((function (seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23220,canvas,dragging,last_center){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23220,canvas,dragging,last_center){
return (function (a){
return document.getElementById(["symmetry-",cljs.core.name(a)].join('')).checked;
});})(seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23220,canvas,dragging,last_center))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null))));
});})(seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23220,canvas,dragging,last_center))
);


var G__23221 = seq__23034_23216;
var G__23222 = chunk__23035_23217;
var G__23223 = count__23036_23218;
var G__23224 = (i__23037_23219 + (1));
seq__23034_23216 = G__23221;
chunk__23035_23217 = G__23222;
count__23036_23218 = G__23223;
i__23037_23219 = G__23224;
continue;
} else {
var temp__5825__auto___23225 = cljs.core.seq(seq__23034_23216);
if(temp__5825__auto___23225){
var seq__23034_23226__$1 = temp__5825__auto___23225;
if(cljs.core.chunked_seq_QMARK_(seq__23034_23226__$1)){
var c__5525__auto___23227 = cljs.core.chunk_first(seq__23034_23226__$1);
var G__23228 = cljs.core.chunk_rest(seq__23034_23226__$1);
var G__23229 = c__5525__auto___23227;
var G__23230 = cljs.core.count(c__5525__auto___23227);
var G__23231 = (0);
seq__23034_23216 = G__23228;
chunk__23035_23217 = G__23229;
count__23036_23218 = G__23230;
i__23037_23219 = G__23231;
continue;
} else {
var axis_23232 = cljs.core.first(seq__23034_23226__$1);
document.getElementById(["symmetry-",cljs.core.name(axis_23232)].join('')).addEventListener("change",((function (seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23232,seq__23034_23226__$1,temp__5825__auto___23225,canvas,dragging,last_center){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23232,seq__23034_23226__$1,temp__5825__auto___23225,canvas,dragging,last_center){
return (function (a){
return document.getElementById(["symmetry-",cljs.core.name(a)].join('')).checked;
});})(seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23232,seq__23034_23226__$1,temp__5825__auto___23225,canvas,dragging,last_center))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null))));
});})(seq__23034_23216,chunk__23035_23217,count__23036_23218,i__23037_23219,axis_23232,seq__23034_23226__$1,temp__5825__auto___23225,canvas,dragging,last_center))
);


var G__23233 = cljs.core.next(seq__23034_23226__$1);
var G__23234 = null;
var G__23235 = (0);
var G__23236 = (0);
seq__23034_23216 = G__23233;
chunk__23035_23217 = G__23234;
count__23036_23218 = G__23235;
i__23037_23219 = G__23236;
continue;
}
} else {
}
}
break;
}

document.getElementById("spacing").addEventListener("input",(function (p1__23020_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"spacing","spacing",204422175),parseFloat(p1__23020_SHARP_.target.value));
}));

document.getElementById("clear-mask").addEventListener("click",(function (){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943)], null),kami.sculpt.clear_mask);

return kami.sculpt.app.upload_BANG_();
}));

document.getElementById("invert-mask").addEventListener("click",(function (){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943)], null),kami.sculpt.invert_mask);

return kami.sculpt.app.upload_BANG_();
}));

document.getElementById("subdivide").addEventListener("click",(function (){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.subdivide_document);

return kami.sculpt.app.upload_BANG_();
}));

document.getElementById("add-layer").addEventListener("click",(function (){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.add_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Detail ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059)], null))) + (1)))].join('')], 0));

return kami.sculpt.app.upload_BANG_();
}));

document.getElementById("delete-layer").addEventListener("click",(function (){
if((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059)], null))) > (1))){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.delete_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null))], 0));

return kami.sculpt.app.upload_BANG_();
} else {
return null;
}
}));

document.getElementById("layer-opacity").addEventListener("change",(function (p1__23021_SHARP_){
var value = parseFloat(p1__23021_SHARP_.target.value);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null));
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.update_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,cljs.core.assoc,new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574),value], 0));

return kami.sculpt.app.upload_BANG_();
}));

document.getElementById("undo").addEventListener("click",(function (){
var temp__5825__auto__ = cljs.core.peek(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)));
if(cljs.core.truth_(temp__5825__auto__)){
var doc = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.sculpt.app.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"document","document",-1329188687),doc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.pop(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

return kami.sculpt.app.upload_BANG_();
} else {
return null;
}
}));

document.getElementById("redo").addEventListener("click",(function (){
var temp__5825__auto__ = cljs.core.peek(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)));
if(cljs.core.truth_(temp__5825__auto__)){
var doc = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.sculpt.app.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"document","document",-1329188687),doc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.pop(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

return kami.sculpt.app.upload_BANG_();
} else {
return null;
}
}));

document.getElementById("save-project").addEventListener("click",kami.sculpt.app.save_project_BANG_);

document.getElementById("load-project").addEventListener("click",kami.sculpt.app.load_project_BANG_);

document.getElementById("import").addEventListener("click",(function (){
return document.getElementById("import-file").click();
}));

document.getElementById("import-file").addEventListener("change",kami.sculpt.app.import_project_BANG_);

return document.getElementById("export").addEventListener("click",kami.sculpt.app.download_project_BANG_);
});
goog.exportSymbol('kami.sculpt.app.init_BANG_', kami.sculpt.app.init_BANG_);

//# sourceMappingURL=kami.sculpt.app.js.map
