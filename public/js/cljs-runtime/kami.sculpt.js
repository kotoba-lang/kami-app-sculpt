goog.provide('kami.sculpt');
kami.sculpt.sphere = (function kami$sculpt$sphere(center,radius){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sdf","kind","sdf/kind",-714102622),new cljs.core.Keyword(null,"sphere","sphere",384337120),new cljs.core.Keyword("sdf","center","sdf/center",-748797093),center,new cljs.core.Keyword("sdf","radius","sdf/radius",-2073235977),radius], null);
});
kami.sculpt.brush = (function kami$sculpt$brush(center,radius,strength,mode){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("brush","center","brush/center",-586838954),center,new cljs.core.Keyword("brush","radius","brush/radius",-1965808916),radius,new cljs.core.Keyword("brush","strength","brush/strength",-438330772),strength,new cljs.core.Keyword("brush","mode","brush/mode",610910645),mode], null);
});
/**
 * Append a deterministic non-destructive brush operation. A mesher consumes this
 *   EDN stack to remesh; UI never mutates a binary mesh directly.
 */
kami.sculpt.apply_brush = (function kami$sculpt$apply_brush(shape,b){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword("sdf","operations","sdf/operations",1630578500),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),b);
});
kami.sculpt.mirrored = (function kami$sculpt$mirrored(b,axis){
var vec__19953 = new cljs.core.Keyword("brush","center","brush/center",-586838954).cljs$core$IFn$_invoke$arity$1(b);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(2),null);
var p = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),y,z], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(- y),z], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(- z)], null)], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("brush","center","brush/center",-586838954),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,axis));
});
kami.sculpt.sin = (function kami$sculpt$sin(x){
return Math.sin(x);
});
kami.sculpt.cos = (function kami$sculpt$cos(x){
return Math.cos(x);
});
kami.sculpt.sqrt = (function kami$sculpt$sqrt(x){
return Math.sqrt(x);
});
kami.sculpt.pi = Math.PI;
kami.sculpt.sub = (function kami$sculpt$sub(a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,a,b);
});
kami.sculpt.add = (function kami$sculpt$add(a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,b);
});
kami.sculpt.scale = (function kami$sculpt$scale(v,s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19956_SHARP_){
return (p1__19956_SHARP_ * s);
}),v);
});
kami.sculpt.mix = (function kami$sculpt$mix(a,b,t){
return kami.sculpt.add(a,kami.sculpt.scale(kami.sculpt.sub(b,a),t));
});
kami.sculpt.length = (function kami$sculpt$length(v){
return kami.sculpt.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19957_SHARP_){
return (p1__19957_SHARP_ * p1__19957_SHARP_);
}),v)));
});
kami.sculpt.normalize = (function kami$sculpt$normalize(v){
var l = (function (){var x__5087__auto__ = 1.0E-9;
var y__5088__auto__ = kami.sculpt.length(v);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return kami.sculpt.scale(v,((1) / l));
});
/**
 * Generate a UV sphere suitable for deterministic brush deformation.
 */
kami.sculpt.sphere_mesh = (function kami$sculpt$sphere_mesh(var_args){
var G__19959 = arguments.length;
switch (G__19959) {
case 1:
return kami.sculpt.sphere_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return kami.sculpt.sphere_mesh.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.sculpt.sphere_mesh.cljs$core$IFn$_invoke$arity$1 = (function (radius){
return kami.sculpt.sphere_mesh.cljs$core$IFn$_invoke$arity$3(radius,(32),(20));
}));

(kami.sculpt.sphere_mesh.cljs$core$IFn$_invoke$arity$3 = (function (radius,slices,stacks){
var positions = cljs.core.vec((function (){var iter__5480__auto__ = (function kami$sculpt$iter__19975(s__19976){
return (new cljs.core.LazySeq(null,(function (){
var s__19976__$1 = s__19976;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__19976__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var j = cljs.core.first(xs__6385__auto__);
var iterys__5476__auto__ = ((function (s__19976__$1,j,xs__6385__auto__,temp__5825__auto__){
return (function kami$sculpt$iter__19975_$_iter__19977(s__19978){
return (new cljs.core.LazySeq(null,((function (s__19976__$1,j,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__19978__$1 = s__19978;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__19978__$1);
if(temp__5825__auto____$1){
var s__19978__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19978__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19978__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19980 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19979 = (0);
while(true){
if((i__19979 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__19979);
var v = (j / stacks);
var u = (i / slices);
var phi = (kami.sculpt.pi * v);
var theta = (((2) * kami.sculpt.pi) * u);
cljs.core.chunk_append(b__19980,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((radius * kami.sculpt.sin(phi)) * kami.sculpt.cos(theta)),(radius * kami.sculpt.cos(phi)),((radius * kami.sculpt.sin(phi)) * kami.sculpt.sin(theta))], null));

var G__20052 = (i__19979 + (1));
i__19979 = G__20052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19980),kami$sculpt$iter__19975_$_iter__19977(cljs.core.chunk_rest(s__19978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19980),null);
}
} else {
var i = cljs.core.first(s__19978__$2);
var v = (j / stacks);
var u = (i / slices);
var phi = (kami.sculpt.pi * v);
var theta = (((2) * kami.sculpt.pi) * u);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((radius * kami.sculpt.sin(phi)) * kami.sculpt.cos(theta)),(radius * kami.sculpt.cos(phi)),((radius * kami.sculpt.sin(phi)) * kami.sculpt.sin(theta))], null),kami$sculpt$iter__19975_$_iter__19977(cljs.core.rest(s__19978__$2)));
}
} else {
return null;
}
break;
}
});})(s__19976__$1,j,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__19976__$1,j,xs__6385__auto__,temp__5825__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((slices + (1)))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,kami$sculpt$iter__19975(cljs.core.rest(s__19976__$1)));
} else {
var G__20053 = cljs.core.rest(s__19976__$1);
s__19976__$1 = G__20053;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((stacks + (1))));
})());
var cols = (slices + (1));
var indices = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__19985){
var vec__19986 = p__19985;
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19986,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19986,(1),null);
var a = ((j * cols) + i);
var b = (a + (1));
var c = (a + cols);
var d = (c + (1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,b,b,c,d], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5480__auto__ = (function kami$sculpt$iter__19989(s__19990){
return (new cljs.core.LazySeq(null,(function (){
var s__19990__$1 = s__19990;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__19990__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var j = cljs.core.first(xs__6385__auto__);
var iterys__5476__auto__ = ((function (s__19990__$1,j,xs__6385__auto__,temp__5825__auto__,positions,cols){
return (function kami$sculpt$iter__19989_$_iter__19991(s__19992){
return (new cljs.core.LazySeq(null,((function (s__19990__$1,j,xs__6385__auto__,temp__5825__auto__,positions,cols){
return (function (){
var s__19992__$1 = s__19992;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__19992__$1);
if(temp__5825__auto____$1){
var s__19992__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19992__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19992__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19994 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19993 = (0);
while(true){
if((i__19993 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__19993);
cljs.core.chunk_append(b__19994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));

var G__20054 = (i__19993 + (1));
i__19993 = G__20054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19994),kami$sculpt$iter__19989_$_iter__19991(cljs.core.chunk_rest(s__19992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19994),null);
}
} else {
var i = cljs.core.first(s__19992__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),kami$sculpt$iter__19989_$_iter__19991(cljs.core.rest(s__19992__$2)));
}
} else {
return null;
}
break;
}
});})(s__19990__$1,j,xs__6385__auto__,temp__5825__auto__,positions,cols))
,null,null));
});})(s__19990__$1,j,xs__6385__auto__,temp__5825__auto__,positions,cols))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(slices)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,kami$sculpt$iter__19989(cljs.core.rest(s__19990__$1)));
} else {
var G__20055 = cljs.core.rest(s__19990__$1);
s__19990__$1 = G__20055;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(stacks));
})()], 0)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kami.sculpt.normalize,positions),new cljs.core.Keyword(null,"indices","indices",-1218138343),indices,new cljs.core.Keyword(null,"masks","masks",416633332),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(positions),0.0))], null);
}));

(kami.sculpt.sphere_mesh.cljs$lang$maxFixedArity = 3);

kami.sculpt.clear_mask = (function kami$sculpt$clear_mask(mesh){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mesh,new cljs.core.Keyword(null,"masks","masks",416633332),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh)),0.0)));
});
kami.sculpt.invert_mask = (function kami$sculpt$invert_mask(mesh){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(mesh,new cljs.core.Keyword(null,"masks","masks",416633332),(function (p1__20013_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return (1.0 - v);
}),(function (){var or__5002__auto__ = p1__20013_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh)),0.0);
}
})());
}));
});
/**
 * Paint or erase a per-vertex mask using the same quadratic brush falloff.
 */
kami.sculpt.apply_mask_brush = (function kami$sculpt$apply_mask_brush(mesh,p__20014){
var map__20015 = p__20014;
var map__20015__$1 = cljs.core.__destructure_map(map__20015);
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,new cljs.core.Keyword("brush","center","brush/center",-586838954));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,new cljs.core.Keyword("brush","radius","brush/radius",-1965808916));
var strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,new cljs.core.Keyword("brush","strength","brush/strength",-438330772));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,new cljs.core.Keyword("brush","mode","brush/mode",610910645));
var masks = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"masks","masks",416633332).cljs$core$IFn$_invoke$arity$1(mesh);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh)),0.0));
}
})();
var paint = (function (p,current){
var d = kami.sculpt.length(kami.sculpt.sub(p,center));
if((d >= radius)){
return current;
} else {
var x = ((1) - (d / radius));
var amount = ((strength * x) * x);
var value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"mask-erase","mask-erase",-1259279978)))?(current - amount):(current + amount));
var x__5087__auto__ = 0.0;
var y__5088__auto__ = (function (){var x__5090__auto__ = 1.0;
var y__5091__auto__ = value;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mesh,new cljs.core.Keyword(null,"masks","masks",416633332),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(paint,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh),masks));
});
/**
 * Apply an actual brush displacement to mesh positions. Supported modes are
 *   :inflate, :smooth and :pinch. Returns a new immutable mesh.
 */
kami.sculpt.apply_mesh_brush = (function kami$sculpt$apply_mesh_brush(mesh,p__20016){
var map__20017 = p__20016;
var map__20017__$1 = cljs.core.__destructure_map(map__20017);
var b = map__20017__$1;
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20017__$1,new cljs.core.Keyword("brush","center","brush/center",-586838954));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20017__$1,new cljs.core.Keyword("brush","radius","brush/radius",-1965808916));
var strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20017__$1,new cljs.core.Keyword("brush","strength","brush/strength",-438330772));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20017__$1,new cljs.core.Keyword("brush","mode","brush/mode",610910645));
if(cljs.core.truth_((function (){var fexpr__20018 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mask","mask",-585748447),null,new cljs.core.Keyword(null,"mask-erase","mask-erase",-1259279978),null], null), null);
return (fexpr__20018.cljs$core$IFn$_invoke$arity$1 ? fexpr__20018.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__20018.call(null, mode));
})())){
return kami.sculpt.apply_mask_brush(mesh,b);
} else {
var avg_radius = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(kami.sculpt.length,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh))) / cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh)));
var masks = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"masks","masks",416633332).cljs$core$IFn$_invoke$arity$1(mesh);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh)),0.0);
}
})();
var deform = (function (p,n,mask){
var delta = kami.sculpt.sub(p,center);
var d = kami.sculpt.length(delta);
if((d >= radius)){
return p;
} else {
var falloff = (function (){var x = ((1) - (d / radius));
return (x * x);
})();
var amount = ((strength * falloff) * ((1) - mask));
var G__20019 = mode;
var G__20019__$1 = (((G__20019 instanceof cljs.core.Keyword))?G__20019.fqn:null);
switch (G__20019__$1) {
case "smooth":
return kami.sculpt.add(p,kami.sculpt.scale(kami.sculpt.sub(kami.sculpt.scale(kami.sculpt.normalize(p),avg_radius),p),amount));

break;
case "pinch":
return kami.sculpt.add(p,kami.sculpt.scale(kami.sculpt.sub(center,p),(amount * 0.25)));

break;
default:
return kami.sculpt.add(p,kami.sculpt.scale(n,amount));

}
}
});
var positions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(deform,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(mesh),masks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mesh,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kami.sculpt.normalize,positions)], 0));
}
});
/**
 * Return unique brush instances for any combination of enabled symmetry axes.
 */
kami.sculpt.symmetry_brushes = (function kami$sculpt$symmetry_brushes(b,axes){
var axes__$1 = (((axes == null))?cljs.core.PersistentVector.EMPTY:(((axes instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [axes], null):axes
));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (brushes,axis){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(brushes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20020_SHARP_){
return kami.sculpt.mirrored(p1__20020_SHARP_,axis);
}),brushes))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),axes__$1);
});
/**
 * Apply a brush and optional axis symmetry as one deterministic stroke.
 */
kami.sculpt.apply_stroke = (function kami$sculpt$apply_stroke(mesh,b,symmetry_axis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(kami.sculpt.apply_mesh_brush,mesh,kami.sculpt.symmetry_brushes(b,symmetry_axis));
});
/**
 * Resample pointer input at stable world-space spacing for device-independent strokes.
 */
kami.sculpt.resample_stroke = (function kami$sculpt$resample_stroke(points,spacing){
if((spacing > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("stroke spacing must be positive",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),spacing], null));
}

if((cljs.core.count(points) < (2))){
return cljs.core.vec(points);
} else {
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null);
var remaining = cljs.core.rest(points);
var cursor = cljs.core.first(points);
while(true){
var temp__5823__auto__ = cljs.core.first(remaining);
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
var delta = kami.sculpt.sub(target,cursor);
var d = kami.sculpt.length(delta);
if((d >= spacing)){
var next_point = kami.sculpt.add(cursor,kami.sculpt.scale(delta,(spacing / d)));
var G__20085 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next_point);
var G__20086 = remaining;
var G__20087 = next_point;
result = G__20085;
remaining = G__20086;
cursor = G__20087;
continue;
} else {
var G__20088 = result;
var G__20089 = cljs.core.rest(remaining);
var G__20090 = target;
result = G__20088;
remaining = G__20089;
cursor = G__20090;
continue;
}
} else {
var G__20022 = result;
if((kami.sculpt.length(kami.sculpt.sub(cljs.core.peek(result),cljs.core.last(points))) > 1.0E-9)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20022,cljs.core.last(points));
} else {
return G__20022;
}
}
break;
}
}
});
/**
 * Uniformly subdivide indexed triangles while sharing edge midpoints. This is
 *   the deterministic topology step used by dynamic-topology and multires tools.
 */
kami.sculpt.subdivide_mesh = (function kami$sculpt$subdivide_mesh(mesh){
var positions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(mesh)));
var masks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"masks","masks",416633332).cljs$core$IFn$_invoke$arity$1(mesh);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(positions)),0.0);
}
})()));
var edge_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var midpoint = (function (a,b){
var edge = (((a < b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edge_cache),edge);
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
return i;
} else {
var i = cljs.core.count(cljs.core.deref(positions));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(positions,cljs.core.conj,kami.sculpt.mix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(positions),a),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(positions),b),0.5));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(masks,cljs.core.conj,((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(masks),a) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(masks),b)) / (2)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edge_cache,cljs.core.assoc,edge,i);

return i;
}
});
var triangles = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(mesh));
var indices = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20023){
var vec__20024 = p__20023;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20024,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20024,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20024,(2),null);
var ab = midpoint(a,b);
var bc = midpoint(b,c);
var ca = midpoint(c,a);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca,ab,b,bc,ca,bc,c,ab,bc,ca], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([triangles], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mesh,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.deref(positions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kami.sculpt.normalize,cljs.core.deref(positions)),new cljs.core.Keyword(null,"masks","masks",416633332),cljs.core.deref(masks),new cljs.core.Keyword(null,"indices","indices",-1218138343),indices], 0));
});
kami.sculpt.sculpt_layer = (function kami$sculpt$sculpt_layer(var_args){
var G__20028 = arguments.length;
switch (G__20028) {
case 3:
return kami.sculpt.sculpt_layer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kami.sculpt.sculpt_layer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.sculpt.sculpt_layer.cljs$core$IFn$_invoke$arity$3 = (function (id,name,vertex_count){
return kami.sculpt.sculpt_layer.cljs$core$IFn$_invoke$arity$4(id,name,vertex_count,cljs.core.PersistentArrayMap.EMPTY);
}));

(kami.sculpt.sculpt_layer.cljs$core$IFn$_invoke$arity$4 = (function (id,name,vertex_count,p__20029){
var map__20030 = p__20029;
var map__20030__$1 = cljs.core.__destructure_map(map__20030);
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20030__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),1.0);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20030__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226),id,new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003),name,new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574),opacity,new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265),visible_QMARK_,new cljs.core.Keyword("sculpt.layer","deltas","sculpt.layer/deltas",818949036),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(vertex_count,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0], null)))], null);
}));

(kami.sculpt.sculpt_layer.cljs$lang$maxFixedArity = 4);

kami.sculpt.sculpt_document = (function kami$sculpt$sculpt_document(base_mesh){
var layer = kami.sculpt.sculpt_layer.cljs$core$IFn$_invoke$arity$3((1),"Base detail",cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(base_mesh)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943),base_mesh,new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [layer], null),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537),(1),new cljs.core.Keyword("sculpt","next-layer-id","sculpt/next-layer-id",-2002016365),(2)], null);
});
kami.sculpt.find_layer = (function kami$sculpt$find_layer(doc,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20031_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(p1__20031_SHARP_));
}),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc)));
});
kami.sculpt.evaluate_document = (function kami$sculpt$evaluate_document(doc){
var base = new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943).cljs$core$IFn$_invoke$arity$1(doc);
var deltas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc));
var positions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (index,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,layer){
return kami.sculpt.add(result,kami.sculpt.scale(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sculpt.layer","deltas","sculpt.layer/deltas",818949036).cljs$core$IFn$_invoke$arity$1(layer),index),new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer)));
}),p,deltas);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(base));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kami.sculpt.normalize,positions)], 0));
});
kami.sculpt.add_layer = (function kami$sculpt$add_layer(doc,name){
var id = new cljs.core.Keyword("sculpt","next-layer-id","sculpt/next-layer-id",-2002016365).cljs$core$IFn$_invoke$arity$1(doc);
var layer = kami.sculpt.sculpt_layer.cljs$core$IFn$_invoke$arity$3(id,name,cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null))));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059),cljs.core.conj,layer),new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537),id),new cljs.core.Keyword("sculpt","next-layer-id","sculpt/next-layer-id",-2002016365),cljs.core.inc);
});
kami.sculpt.update_layer = (function kami$sculpt$update_layer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20094 = arguments.length;
var i__5727__auto___20095 = (0);
while(true){
if((i__5727__auto___20095 < len__5726__auto___20094)){
args__5732__auto__.push((arguments[i__5727__auto___20095]));

var G__20096 = (i__5727__auto___20095 + (1));
i__5727__auto___20095 = G__20096;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return kami.sculpt.update_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(kami.sculpt.update_layer.cljs$core$IFn$_invoke$arity$variadic = (function (doc,id,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059),(function (p1__20032_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (layer){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(layer))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,layer,args);
} else {
return layer;
}
}),p1__20032_SHARP_);
}));
}));

(kami.sculpt.update_layer.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(kami.sculpt.update_layer.cljs$lang$applyTo = (function (seq20033){
var G__20034 = cljs.core.first(seq20033);
var seq20033__$1 = cljs.core.next(seq20033);
var G__20035 = cljs.core.first(seq20033__$1);
var seq20033__$2 = cljs.core.next(seq20033__$1);
var G__20036 = cljs.core.first(seq20033__$2);
var seq20033__$3 = cljs.core.next(seq20033__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20034,G__20035,G__20036,seq20033__$3);
}));

kami.sculpt.delete_layer = (function kami$sculpt$delete_layer(doc,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sculpt document needs one layer",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var layers = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20037_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(p1__20037_SHARP_));
}),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(doc,new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059),layers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc)))?new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(cljs.core.first(layers)):new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc))], 0));
});
kami.sculpt.move_layer = (function kami$sculpt$move_layer(doc,id,target_index){
var layers = new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc);
var source_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20039_SHARP_,p2__20038_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(p2__20038_SHARP_))){
return p1__20039_SHARP_;
} else {
return null;
}
}),layers));
if(cljs.core.truth_(source_index)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sculpt layer not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}

var target = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (function (){var x__5090__auto__ = (cljs.core.count(layers) - (1));
var y__5091__auto__ = target_index;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,source_index);
var without = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(layers,(0),source_index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(layers,(source_index + (1)))));
var reordered = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(without,(0),target),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [layer], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(without,target)], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059),reordered);
});
kami.sculpt.duplicate_layer = (function kami$sculpt$duplicate_layer(doc,id){
var source = kami.sculpt.find_layer(doc,id);
if(cljs.core.truth_(source)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sculpt layer not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}

var new_id = new cljs.core.Keyword("sculpt","next-layer-id","sculpt/next-layer-id",-2002016365).cljs$core$IFn$_invoke$arity$1(doc);
var copy = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(source,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226),new_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sculpt.layer","name","sculpt.layer/name",1929867003).cljs$core$IFn$_invoke$arity$1(source))," Copy"].join('')], 0));
var index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20041_SHARP_,p2__20040_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sculpt.layer","id","sculpt.layer/id",-1638147226).cljs$core$IFn$_invoke$arity$1(p2__20040_SHARP_))){
return p1__20041_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc)));
var at = (index + (1));
var layers = new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(doc,new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(layers,(0),at),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [copy], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(layers,at)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537),new_id], 0)),new cljs.core.Keyword("sculpt","next-layer-id","sculpt/next-layer-id",-2002016365),cljs.core.inc);
});
/**
 * Bake one visible layer's effective delta into the base while preserving the evaluated mesh.
 */
kami.sculpt.bake_layer = (function kami$sculpt$bake_layer(doc,id){
var layer = kami.sculpt.find_layer(doc,id);
if(cljs.core.truth_(layer)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sculpt layer not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}

var base = (cljs.core.truth_(new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265).cljs$core$IFn$_invoke$arity$1(layer))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943).cljs$core$IFn$_invoke$arity$1(doc),new cljs.core.Keyword(null,"positions","positions",-1380538434),(function (p1__20042_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(kami.sculpt.add,p1__20042_SHARP_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
return kami.sculpt.scale(d,new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574).cljs$core$IFn$_invoke$arity$1(layer));
}),new cljs.core.Keyword("sculpt.layer","deltas","sculpt.layer/deltas",818949036).cljs$core$IFn$_invoke$arity$1(layer)));
})):new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943).cljs$core$IFn$_invoke$arity$1(doc));
var zeroed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(layer,new cljs.core.Keyword("sculpt.layer","deltas","sculpt.layer/deltas",818949036),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(base)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sculpt.layer","opacity","sculpt.layer/opacity",273229574),1.0,new cljs.core.Keyword("sculpt.layer","visible?","sculpt.layer/visible?",1036801265),true], 0));
return kami.sculpt.update_layer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943),base),id,cljs.core.constantly(zeroed));
});
kami.sculpt.apply_layer_stroke = (function kami$sculpt$apply_layer_stroke(doc,b,symmetry){
var before = kami.sculpt.evaluate_document(doc);
var after = kami.sculpt.apply_stroke(before,b,symmetry);
var increment = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(kami.sculpt.sub,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(after),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(before));
var active = new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc);
if(cljs.core.truth_((function (){var G__20045 = new cljs.core.Keyword("brush","mode","brush/mode",610910645).cljs$core$IFn$_invoke$arity$1(b);
var fexpr__20044 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mask","mask",-585748447),null,new cljs.core.Keyword(null,"mask-erase","mask-erase",-1259279978),null], null), null);
return (fexpr__20044.cljs$core$IFn$_invoke$arity$1 ? fexpr__20044.cljs$core$IFn$_invoke$arity$1(G__20045) : fexpr__20044.call(null, G__20045));
})())){
return cljs.core.assoc_in(doc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943),new cljs.core.Keyword(null,"masks","masks",416633332)], null),new cljs.core.Keyword(null,"masks","masks",416633332).cljs$core$IFn$_invoke$arity$1(after));
} else {
return kami.sculpt.update_layer.cljs$core$IFn$_invoke$arity$variadic(doc,active,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sculpt.layer","deltas","sculpt.layer/deltas",818949036),(function (p1__20043_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(kami.sculpt.add,p1__20043_SHARP_,increment);
})], 0));
}
});
/**
 * Bake visible layers, subdivide topology, and start a fresh detail layer.
 */
kami.sculpt.subdivide_document = (function kami$sculpt$subdivide_document(doc){
return kami.sculpt.sculpt_document(kami.sculpt.subdivide_mesh(kami.sculpt.evaluate_document(doc)));
});

//# sourceMappingURL=kami.sculpt.js.map
