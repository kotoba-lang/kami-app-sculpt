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

var seq__19990 = cljs.core.seq(new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc));
var chunk__19991 = null;
var count__19992 = (0);
var i__19993 = (0);
while(true){
if((i__19993 < count__19992)){
var layer = chunk__19991.cljs$core$IIndexed$_nth$arity$2(null, i__19993);
var b_20058 = document.createElement("button");
var id_20059 = new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(layer);
(b_20058.textContent = [(cljs.core.truth_(new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265).cljs$core$IFn$_invoke$arity$1(layer))?"\u25C9 ":"\u25CB "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003).cljs$core$IFn$_invoke$arity$1(layer))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer).toFixed((2)))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_20059,new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc))){
b_20058.classList.add("selected");
} else {
}

b_20058.addEventListener("click",((function (seq__19990,chunk__19991,count__19992,i__19993,b_20058,id_20059,layer,container,doc){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null),id_20059);

(document.getElementById("layer-opacity").value = new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer));

(document.getElementById("layer-name").value = new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003).cljs$core$IFn$_invoke$arity$1(layer));

return (kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.refresh_layers_BANG_.call(null, ));
});})(seq__19990,chunk__19991,count__19992,i__19993,b_20058,id_20059,layer,container,doc))
);

b_20058.addEventListener("dblclick",((function (seq__19990,chunk__19991,count__19992,i__19993,b_20058,id_20059,layer,container,doc){
return (function (){
(kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.checkpoint_BANG_.call(null, ));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.update_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_20059,cljs.core.update,new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265),cljs.core.not], 0));

return (kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.upload_BANG_.call(null, ));
});})(seq__19990,chunk__19991,count__19992,i__19993,b_20058,id_20059,layer,container,doc))
);

container.appendChild(b_20058);


var G__20060 = seq__19990;
var G__20061 = chunk__19991;
var G__20062 = count__19992;
var G__20063 = (i__19993 + (1));
seq__19990 = G__20060;
chunk__19991 = G__20061;
count__19992 = G__20062;
i__19993 = G__20063;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__19990);
if(temp__5825__auto__){
var seq__19990__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19990__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19990__$1);
var G__20064 = cljs.core.chunk_rest(seq__19990__$1);
var G__20065 = c__5525__auto__;
var G__20066 = cljs.core.count(c__5525__auto__);
var G__20067 = (0);
seq__19990 = G__20064;
chunk__19991 = G__20065;
count__19992 = G__20066;
i__19993 = G__20067;
continue;
} else {
var layer = cljs.core.first(seq__19990__$1);
var b_20068 = document.createElement("button");
var id_20069 = new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(layer);
(b_20068.textContent = [(cljs.core.truth_(new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265).cljs$core$IFn$_invoke$arity$1(layer))?"\u25C9 ":"\u25CB "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003).cljs$core$IFn$_invoke$arity$1(layer))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer).toFixed((2)))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_20069,new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc))){
b_20068.classList.add("selected");
} else {
}

b_20068.addEventListener("click",((function (seq__19990,chunk__19991,count__19992,i__19993,b_20068,id_20069,layer,seq__19990__$1,temp__5825__auto__,container,doc){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null),id_20069);

(document.getElementById("layer-opacity").value = new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer));

(document.getElementById("layer-name").value = new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003).cljs$core$IFn$_invoke$arity$1(layer));

return (kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.refresh_layers_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.refresh_layers_BANG_.call(null, ));
});})(seq__19990,chunk__19991,count__19992,i__19993,b_20068,id_20069,layer,seq__19990__$1,temp__5825__auto__,container,doc))
);

b_20068.addEventListener("dblclick",((function (seq__19990,chunk__19991,count__19992,i__19993,b_20068,id_20069,layer,seq__19990__$1,temp__5825__auto__,container,doc){
return (function (){
(kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.checkpoint_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.checkpoint_BANG_.call(null, ));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.update_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_20069,cljs.core.update,new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265),cljs.core.not], 0));

return (kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.sculpt.app.upload_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.sculpt.app.upload_BANG_.call(null, ));
});})(seq__19990,chunk__19991,count__19992,i__19993,b_20068,id_20069,layer,seq__19990__$1,temp__5825__auto__,container,doc))
);

container.appendChild(b_20068);


var G__20070 = cljs.core.next(seq__19990__$1);
var G__20071 = null;
var G__20072 = (0);
var G__20073 = (0);
seq__19990 = G__20070;
chunk__19991 = G__20071;
count__19992 = G__20072;
i__19993 = G__20073;
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
var mesh_20074 = kami.sculpt.app.mesh();
var masked_20075 = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,new cljs.core.Keyword(null,"masks","masks",416633332).cljs$core$IFn$_invoke$arity$1(mesh_20074)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.viewport,cljs.core.assoc,new cljs.core.Keyword(null,"buffers","buffers",471409492),kami.webgpu.mesh.upload_mesh_BANG_(new cljs.core.Keyword(null,"mesh-context","mesh-context",832369712).cljs$core$IFn$_invoke$arity$1(v),mesh_20074));

(document.getElementById("stats").textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh_20074)))," vertices \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(mesh_20074)) / (3)))," triangles \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)))," strokes"].join(''));

(document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"layerCount","layerCount",-963307453),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"activeLayer","activeLayer",656177926),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"layerNames","layerNames",-1118727313),new cljs.core.Keyword(null,"maskedVertices","maskedVertices",1987436463),new cljs.core.Keyword(null,"shortcutBuffer","shortcutBuffer",1317694555),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"triangles","triangles",-1525417058)],[kami.sculpt.project.current_version,cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh_20074)),cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059)], null))),new cljs.core.Keyword(null,"revision","revision",-1350113114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null)),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),cljs.core.name(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))),cljs.core.name(new cljs.core.Keyword(null,"save-status","save-status",-2046612873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059)], null))),masked_20075,new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state)),cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state))),(cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(mesh_20074)) / (3))]))));

return kami.sculpt.app.refresh_layers_BANG_();
} else {
return null;
}
});
kami.sculpt.app.draw_BANG_ = (function kami$sculpt$app$draw_BANG_(){
var temp__5825__auto___20076 = cljs.core.deref(kami.sculpt.app.viewport);
if(cljs.core.truth_(temp__5825__auto___20076)){
var map__19994_20077 = temp__5825__auto___20076;
var map__19994_20078__$1 = cljs.core.__destructure_map(map__19994_20077);
var v_20079 = map__19994_20078__$1;
var buffers_20080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19994_20078__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
if(cljs.core.truth_(buffers_20080)){
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$5(v_20079,buffers_20080,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.85,0.42,0.58], null));
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

var seq__19995_20081 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("[data-mode]")));
var chunk__19996_20082 = null;
var count__19997_20083 = (0);
var i__19998_20084 = (0);
while(true){
if((i__19998_20084 < count__19997_20083)){
var button_20085 = chunk__19996_20082.cljs$core$IIndexed$_nth$arity$2(null, i__19998_20084);
button_20085.classList.toggle("selected",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(mode),button_20085.getAttribute("data-mode")));


var G__20086 = seq__19995_20081;
var G__20087 = chunk__19996_20082;
var G__20088 = count__19997_20083;
var G__20089 = (i__19998_20084 + (1));
seq__19995_20081 = G__20086;
chunk__19996_20082 = G__20087;
count__19997_20083 = G__20088;
i__19998_20084 = G__20089;
continue;
} else {
var temp__5825__auto___20090 = cljs.core.seq(seq__19995_20081);
if(temp__5825__auto___20090){
var seq__19995_20091__$1 = temp__5825__auto___20090;
if(cljs.core.chunked_seq_QMARK_(seq__19995_20091__$1)){
var c__5525__auto___20092 = cljs.core.chunk_first(seq__19995_20091__$1);
var G__20093 = cljs.core.chunk_rest(seq__19995_20091__$1);
var G__20094 = c__5525__auto___20092;
var G__20095 = cljs.core.count(c__5525__auto___20092);
var G__20096 = (0);
seq__19995_20081 = G__20093;
chunk__19996_20082 = G__20094;
count__19997_20083 = G__20095;
i__19998_20084 = G__20096;
continue;
} else {
var button_20097 = cljs.core.first(seq__19995_20091__$1);
button_20097.classList.toggle("selected",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(mode),button_20097.getAttribute("data-mode")));


var G__20098 = cljs.core.next(seq__19995_20091__$1);
var G__20099 = null;
var G__20100 = (0);
var G__20101 = (0);
seq__19995_20081 = G__20098;
chunk__19996_20082 = G__20099;
count__19997_20083 = G__20100;
i__19998_20084 = G__20101;
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
var tag = (function (){var G__19999 = target;
var G__19999__$1 = (((G__19999 == null))?null:G__19999.tagName);
if((G__19999__$1 == null)){
return null;
} else {
return G__19999__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__20000 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__20000.cljs$core$IFn$_invoke$arity$1 ? fexpr__20000.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20000.call(null, tag));
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
var map__20001 = cljs.core.deref(kami.sculpt.app.state);
var map__20001__$1 = cljs.core.__destructure_map(map__20001);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var symmetry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20001__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
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
var map__20002 = cljs.core.deref(kami.sculpt.app.state);
var map__20002__$1 = cljs.core.__destructure_map(map__20002);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20002__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20002__$1,new cljs.core.Keyword(null,"strength","strength",-415606478));
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20002__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175));
var symmetry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20002__$1,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20002__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var seq__20003_20102 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["radius",radius], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["strength",strength], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spacing",spacing], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["profile",cljs.core.name(profile)], null)], null));
var chunk__20004_20103 = null;
var count__20005_20104 = (0);
var i__20006_20105 = (0);
while(true){
if((i__20006_20105 < count__20005_20104)){
var vec__20013_20106 = chunk__20004_20103.cljs$core$IIndexed$_nth$arity$2(null, i__20006_20105);
var id_20107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20013_20106,(0),null);
var value_20108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20013_20106,(1),null);
(document.getElementById(id_20107).value = value_20108);


var G__20109 = seq__20003_20102;
var G__20110 = chunk__20004_20103;
var G__20111 = count__20005_20104;
var G__20112 = (i__20006_20105 + (1));
seq__20003_20102 = G__20109;
chunk__20004_20103 = G__20110;
count__20005_20104 = G__20111;
i__20006_20105 = G__20112;
continue;
} else {
var temp__5825__auto___20113 = cljs.core.seq(seq__20003_20102);
if(temp__5825__auto___20113){
var seq__20003_20114__$1 = temp__5825__auto___20113;
if(cljs.core.chunked_seq_QMARK_(seq__20003_20114__$1)){
var c__5525__auto___20115 = cljs.core.chunk_first(seq__20003_20114__$1);
var G__20116 = cljs.core.chunk_rest(seq__20003_20114__$1);
var G__20117 = c__5525__auto___20115;
var G__20118 = cljs.core.count(c__5525__auto___20115);
var G__20119 = (0);
seq__20003_20102 = G__20116;
chunk__20004_20103 = G__20117;
count__20005_20104 = G__20118;
i__20006_20105 = G__20119;
continue;
} else {
var vec__20016_20120 = cljs.core.first(seq__20003_20114__$1);
var id_20121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20016_20120,(0),null);
var value_20122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20016_20120,(1),null);
(document.getElementById(id_20121).value = value_20122);


var G__20123 = cljs.core.next(seq__20003_20114__$1);
var G__20124 = null;
var G__20125 = (0);
var G__20126 = (0);
seq__20003_20102 = G__20123;
chunk__20004_20103 = G__20124;
count__20005_20104 = G__20125;
i__20006_20105 = G__20126;
continue;
}
} else {
}
}
break;
}

(document.getElementById("radius-value").textContent = radius.toFixed((2)));

(document.getElementById("strength-value").textContent = strength.toFixed((2)));

var seq__20019 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var chunk__20020 = null;
var count__20021 = (0);
var i__20022 = (0);
while(true){
if((i__20022 < count__20021)){
var axis = chunk__20020.cljs$core$IIndexed$_nth$arity$2(null, i__20022);
(document.getElementById(["symmetry-",cljs.core.name(axis)].join('')).checked = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([axis]),symmetry));


var G__20127 = seq__20019;
var G__20128 = chunk__20020;
var G__20129 = count__20021;
var G__20130 = (i__20022 + (1));
seq__20019 = G__20127;
chunk__20020 = G__20128;
count__20021 = G__20129;
i__20022 = G__20130;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20019);
if(temp__5825__auto__){
var seq__20019__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20019__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20019__$1);
var G__20131 = cljs.core.chunk_rest(seq__20019__$1);
var G__20132 = c__5525__auto__;
var G__20133 = cljs.core.count(c__5525__auto__);
var G__20134 = (0);
seq__20019 = G__20131;
chunk__20020 = G__20132;
count__20021 = G__20133;
i__20022 = G__20134;
continue;
} else {
var axis = cljs.core.first(seq__20019__$1);
(document.getElementById(["symmetry-",cljs.core.name(axis)].join('')).checked = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([axis]),symmetry));


var G__20135 = cljs.core.next(seq__20019__$1);
var G__20136 = null;
var G__20137 = (0);
var G__20138 = (0);
seq__20019 = G__20135;
chunk__20020 = G__20136;
count__20021 = G__20137;
i__20022 = G__20138;
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
}catch (e20023){var _ = e20023;
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
return file.text().then((function (p1__20024_SHARP_){
return kami.sculpt.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__20024_SHARP_));
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
var prefix_QMARK_ = cljs.core.some((function (p1__20025_SHARP_){
return p1__20025_SHARP_.startsWith(buffer);
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

var seq__20033_20139 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("[data-mode]")));
var chunk__20034_20140 = null;
var count__20035_20141 = (0);
var i__20036_20142 = (0);
while(true){
if((i__20036_20142 < count__20035_20141)){
var b_20143 = chunk__20034_20140.cljs$core$IIndexed$_nth$arity$2(null, i__20036_20142);
b_20143.addEventListener("click",((function (seq__20033_20139,chunk__20034_20140,count__20035_20141,i__20036_20142,b_20143,canvas,dragging,last_center){
return (function (){
return kami.sculpt.app.set_mode_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b_20143.getAttribute("data-mode")));
});})(seq__20033_20139,chunk__20034_20140,count__20035_20141,i__20036_20142,b_20143,canvas,dragging,last_center))
);


var G__20144 = seq__20033_20139;
var G__20145 = chunk__20034_20140;
var G__20146 = count__20035_20141;
var G__20147 = (i__20036_20142 + (1));
seq__20033_20139 = G__20144;
chunk__20034_20140 = G__20145;
count__20035_20141 = G__20146;
i__20036_20142 = G__20147;
continue;
} else {
var temp__5825__auto___20148 = cljs.core.seq(seq__20033_20139);
if(temp__5825__auto___20148){
var seq__20033_20149__$1 = temp__5825__auto___20148;
if(cljs.core.chunked_seq_QMARK_(seq__20033_20149__$1)){
var c__5525__auto___20150 = cljs.core.chunk_first(seq__20033_20149__$1);
var G__20151 = cljs.core.chunk_rest(seq__20033_20149__$1);
var G__20152 = c__5525__auto___20150;
var G__20153 = cljs.core.count(c__5525__auto___20150);
var G__20154 = (0);
seq__20033_20139 = G__20151;
chunk__20034_20140 = G__20152;
count__20035_20141 = G__20153;
i__20036_20142 = G__20154;
continue;
} else {
var b_20155 = cljs.core.first(seq__20033_20149__$1);
b_20155.addEventListener("click",((function (seq__20033_20139,chunk__20034_20140,count__20035_20141,i__20036_20142,b_20155,seq__20033_20149__$1,temp__5825__auto___20148,canvas,dragging,last_center){
return (function (){
return kami.sculpt.app.set_mode_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(b_20155.getAttribute("data-mode")));
});})(seq__20033_20139,chunk__20034_20140,count__20035_20141,i__20036_20142,b_20155,seq__20033_20149__$1,temp__5825__auto___20148,canvas,dragging,last_center))
);


var G__20156 = cljs.core.next(seq__20033_20149__$1);
var G__20157 = null;
var G__20158 = (0);
var G__20159 = (0);
seq__20033_20139 = G__20156;
chunk__20034_20140 = G__20157;
count__20035_20141 = G__20158;
i__20036_20142 = G__20159;
continue;
}
} else {
}
}
break;
}

document.getElementById("profile").addEventListener("change",(function (p1__20026_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20026_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-buffer","shortcut-buffer",-1661749655),""], 0));

(document.getElementById("profile-hint").textContent = (function (){var G__20037 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.sculpt.app.state));
var G__20037__$1 = (((G__20037 instanceof cljs.core.Keyword))?G__20037.fqn:null);
switch (G__20037__$1) {
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

canvas.addEventListener("pointerdown",(function (p1__20027_SHARP_){
var center = kami.sculpt.app.pointer_center(canvas,p1__20027_SHARP_);
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

canvas.addEventListener("pointermove",(function (p1__20028_SHARP_){
if(cljs.core.truth_(cljs.core.deref(dragging))){
var center = kami.sculpt.app.pointer_center(canvas,p1__20028_SHARP_);
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

document.getElementById("radius").addEventListener("input",(function (p1__20029_SHARP_){
var v = parseFloat(p1__20029_SHARP_.target.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"radius","radius",-2073122258),v);

return (document.getElementById("radius-value").textContent = v.toFixed((2)));
}));

document.getElementById("strength").addEventListener("input",(function (p1__20030_SHARP_){
var v = parseFloat(p1__20030_SHARP_.target.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"strength","strength",-415606478),v);

return (document.getElementById("strength-value").textContent = v.toFixed((2)));
}));

var seq__20038_20161 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var chunk__20039_20162 = null;
var count__20040_20163 = (0);
var i__20041_20164 = (0);
while(true){
if((i__20041_20164 < count__20040_20163)){
var axis_20165 = chunk__20039_20162.cljs$core$IIndexed$_nth$arity$2(null, i__20041_20164);
document.getElementById(["symmetry-",cljs.core.name(axis_20165)].join('')).addEventListener("change",((function (seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20165,canvas,dragging,last_center){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20165,canvas,dragging,last_center){
return (function (a){
return document.getElementById(["symmetry-",cljs.core.name(a)].join('')).checked;
});})(seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20165,canvas,dragging,last_center))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null))));
});})(seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20165,canvas,dragging,last_center))
);


var G__20166 = seq__20038_20161;
var G__20167 = chunk__20039_20162;
var G__20168 = count__20040_20163;
var G__20169 = (i__20041_20164 + (1));
seq__20038_20161 = G__20166;
chunk__20039_20162 = G__20167;
count__20040_20163 = G__20168;
i__20041_20164 = G__20169;
continue;
} else {
var temp__5825__auto___20170 = cljs.core.seq(seq__20038_20161);
if(temp__5825__auto___20170){
var seq__20038_20171__$1 = temp__5825__auto___20170;
if(cljs.core.chunked_seq_QMARK_(seq__20038_20171__$1)){
var c__5525__auto___20172 = cljs.core.chunk_first(seq__20038_20171__$1);
var G__20173 = cljs.core.chunk_rest(seq__20038_20171__$1);
var G__20174 = c__5525__auto___20172;
var G__20175 = cljs.core.count(c__5525__auto___20172);
var G__20176 = (0);
seq__20038_20161 = G__20173;
chunk__20039_20162 = G__20174;
count__20040_20163 = G__20175;
i__20041_20164 = G__20176;
continue;
} else {
var axis_20177 = cljs.core.first(seq__20038_20171__$1);
document.getElementById(["symmetry-",cljs.core.name(axis_20177)].join('')).addEventListener("change",((function (seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20177,seq__20038_20171__$1,temp__5825__auto___20170,canvas,dragging,last_center){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20177,seq__20038_20171__$1,temp__5825__auto___20170,canvas,dragging,last_center){
return (function (a){
return document.getElementById(["symmetry-",cljs.core.name(a)].join('')).checked;
});})(seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20177,seq__20038_20171__$1,temp__5825__auto___20170,canvas,dragging,last_center))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null))));
});})(seq__20038_20161,chunk__20039_20162,count__20040_20163,i__20041_20164,axis_20177,seq__20038_20171__$1,temp__5825__auto___20170,canvas,dragging,last_center))
);


var G__20178 = cljs.core.next(seq__20038_20171__$1);
var G__20179 = null;
var G__20180 = (0);
var G__20181 = (0);
seq__20038_20161 = G__20178;
chunk__20039_20162 = G__20179;
count__20040_20163 = G__20180;
i__20041_20164 = G__20181;
continue;
}
} else {
}
}
break;
}

document.getElementById("spacing").addEventListener("input",(function (p1__20031_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.sculpt.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"spacing","spacing",204422175),parseFloat(p1__20031_SHARP_.target.value));
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

document.getElementById("rename-layer").addEventListener("click",(function (){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null));
var name = document.getElementById("layer-name").value.trim();
if(cljs.core.seq(name)){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.update_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,cljs.core.assoc,new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003),name], 0));

return kami.sculpt.app.upload_BANG_();
} else {
return null;
}
}));

document.getElementById("duplicate-layer").addEventListener("click",(function (){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.duplicate_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null))], 0));

return kami.sculpt.app.upload_BANG_();
}));

var seq__20042_20182 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["layer-up",(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["layer-down",(1)], null)], null));
var chunk__20043_20183 = null;
var count__20044_20184 = (0);
var i__20045_20185 = (0);
while(true){
if((i__20045_20185 < count__20044_20184)){
var vec__20052_20186 = chunk__20043_20183.cljs$core$IIndexed$_nth$arity$2(null, i__20045_20185);
var button_id_20187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20052_20186,(0),null);
var delta_20188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20052_20186,(1),null);
document.getElementById(button_id_20187).addEventListener("click",((function (seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,vec__20052_20186,button_id_20187,delta_20188,canvas,dragging,last_center){
return (function (){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null));
var layers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059)], null));
var index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,id,layers,vec__20052_20186,button_id_20187,delta_20188,canvas,dragging,last_center){
return (function (i,layer){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(layer))){
return i;
} else {
return null;
}
});})(seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,id,layers,vec__20052_20186,button_id_20187,delta_20188,canvas,dragging,last_center))
,layers));
var target = (index + delta_20188);
if(((((-1) < target)) && ((target < cljs.core.count(layers))))){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.move_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,target], 0));

return kami.sculpt.app.upload_BANG_();
} else {
return null;
}
});})(seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,vec__20052_20186,button_id_20187,delta_20188,canvas,dragging,last_center))
);


var G__20189 = seq__20042_20182;
var G__20190 = chunk__20043_20183;
var G__20191 = count__20044_20184;
var G__20192 = (i__20045_20185 + (1));
seq__20042_20182 = G__20189;
chunk__20043_20183 = G__20190;
count__20044_20184 = G__20191;
i__20045_20185 = G__20192;
continue;
} else {
var temp__5825__auto___20193 = cljs.core.seq(seq__20042_20182);
if(temp__5825__auto___20193){
var seq__20042_20194__$1 = temp__5825__auto___20193;
if(cljs.core.chunked_seq_QMARK_(seq__20042_20194__$1)){
var c__5525__auto___20195 = cljs.core.chunk_first(seq__20042_20194__$1);
var G__20196 = cljs.core.chunk_rest(seq__20042_20194__$1);
var G__20197 = c__5525__auto___20195;
var G__20198 = cljs.core.count(c__5525__auto___20195);
var G__20199 = (0);
seq__20042_20182 = G__20196;
chunk__20043_20183 = G__20197;
count__20044_20184 = G__20198;
i__20045_20185 = G__20199;
continue;
} else {
var vec__20055_20200 = cljs.core.first(seq__20042_20194__$1);
var button_id_20201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20200,(0),null);
var delta_20202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20200,(1),null);
document.getElementById(button_id_20201).addEventListener("click",((function (seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,vec__20055_20200,button_id_20201,delta_20202,seq__20042_20194__$1,temp__5825__auto___20193,canvas,dragging,last_center){
return (function (){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null));
var layers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059)], null));
var index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,id,layers,vec__20055_20200,button_id_20201,delta_20202,seq__20042_20194__$1,temp__5825__auto___20193,canvas,dragging,last_center){
return (function (i,layer){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(layer))){
return i;
} else {
return null;
}
});})(seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,id,layers,vec__20055_20200,button_id_20201,delta_20202,seq__20042_20194__$1,temp__5825__auto___20193,canvas,dragging,last_center))
,layers));
var target = (index + delta_20202);
if(((((-1) < target)) && ((target < cljs.core.count(layers))))){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.move_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,target], 0));

return kami.sculpt.app.upload_BANG_();
} else {
return null;
}
});})(seq__20042_20182,chunk__20043_20183,count__20044_20184,i__20045_20185,vec__20055_20200,button_id_20201,delta_20202,seq__20042_20194__$1,temp__5825__auto___20193,canvas,dragging,last_center))
);


var G__20203 = cljs.core.next(seq__20042_20194__$1);
var G__20204 = null;
var G__20205 = (0);
var G__20206 = (0);
seq__20042_20182 = G__20203;
chunk__20043_20183 = G__20204;
count__20044_20184 = G__20205;
i__20045_20185 = G__20206;
continue;
}
} else {
}
}
break;
}

document.getElementById("bake-layer").addEventListener("click",(function (){
kami.sculpt.app.checkpoint_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.sculpt.app.state,cljs.core.update,new cljs.core.Keyword(null,"document","document",-1329188687),kami.sculpt.bake_layer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kami.sculpt.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537)], null))], 0));

return kami.sculpt.app.upload_BANG_();
}));

document.getElementById("layer-opacity").addEventListener("change",(function (p1__20032_SHARP_){
var value = parseFloat(p1__20032_SHARP_.target.value);
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
