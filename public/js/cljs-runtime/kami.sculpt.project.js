goog.provide('kami.sculpt.project');
kami.sculpt.project.current_version = (2);
kami.sculpt.project.document = (function kami$sculpt$project$document(p__21695){
var map__21696 = p__21695;
var map__21696__$1 = cljs.core.__destructure_map(map__21696);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sculpt_document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"sculpt-document","sculpt-document",-2018073400));
var brush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"brush","brush",498034117));
var symmetry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"symmetry","symmetry",-679060985));
var interaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"interaction","interaction",-2143888916));
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("project","brush","project/brush",-16829216),new cljs.core.Keyword("project","interaction","project/interaction",-1316543261),new cljs.core.Keyword("project","sculpt","project/sculpt",1597715011),new cljs.core.Keyword("project","strokes","project/strokes",-1957087091),new cljs.core.Keyword("kami","document","kami/document",-1333247185),new cljs.core.Keyword("kami","version","kami/version",428545552),new cljs.core.Keyword("project","name","project/name",2022968152),new cljs.core.Keyword("project","id","project/id",-791740645),new cljs.core.Keyword("project","symmetry","project/symmetry",-837415138)],[brush,interaction,sculpt_document,(function (){var or__5002__auto__ = strokes;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"sculpt-project","sculpt-project",1285492489),kami.sculpt.project.current_version,(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Untitled Sculpt";
}
})(),(function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "untitled-sculpt";
}
})(),symmetry]);
});
kami.sculpt.project.migrate = (function kami$sculpt$project$migrate(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sculpt-project","sculpt-project",1285492489),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(v))){
var G__21700 = new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(v);
switch (G__21700) {
case (2):
return v;

break;
case (1):
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword("kami","version","kami/version",428545552),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("project","interaction","project/interaction",-1316543261),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"zbrush","zbrush",-2114537379)], null),new cljs.core.Keyword("project","strokes","project/strokes",-1957087091),(0)], 0)),new cljs.core.Keyword("project","version","project/version",132630599));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported Sculpt project version",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(v)], null));

}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.map_QMARK_(v);
if(and__5000__auto__){
var and__5000__auto____$1 = new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(and__5000__auto____$1)){
return new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(v);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return kami.sculpt.project.document(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sculpt-document","sculpt-document",-2018073400),v,new cljs.core.Keyword(null,"brush","brush",498034117),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"inflate","inflate",-1062661619),new cljs.core.Keyword(null,"radius","radius",-2073122258),0.6,new cljs.core.Keyword(null,"strength","strength",-415606478),0.12,new cljs.core.Keyword(null,"spacing","spacing",204422175),0.12], null),new cljs.core.Keyword(null,"symmetry","symmetry",-679060985),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"zbrush","zbrush",-2114537379)], null)], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a Sculpt project",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null));

}
}
});
kami.sculpt.project.valid_QMARK_ = (function kami$sculpt$project$valid_QMARK_(p){
var doc = new cljs.core.Keyword("project","sculpt","project/sculpt",1597715011).cljs$core$IFn$_invoke$arity$1(p);
var base = new cljs.core.Keyword("sculpt","base","sculpt/base",1429232943).cljs$core$IFn$_invoke$arity$1(doc);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sculpt-project","sculpt-project",1285492489),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kami.sculpt.project.current_version,new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(p))) && (((typeof new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((typeof new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((cljs.core.seq(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(base))) && (((cljs.core.seq(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(base))) && (((cljs.core.seq(new cljs.core.Keyword("sculpt","layers","sculpt/layers",568801059).cljs$core$IFn$_invoke$arity$1(doc))) && ((((!((new cljs.core.Keyword("sculpt","active-layer","sculpt/active-layer",973023537).cljs$core$IFn$_invoke$arity$1(doc) == null)))) && (((cljs.core.map_QMARK_(new cljs.core.Keyword("project","brush","project/brush",-16829216).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core.vector_QMARK_(new cljs.core.Keyword("project","symmetry","project/symmetry",-837415138).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core.map_QMARK_(new cljs.core.Keyword("project","interaction","project/interaction",-1316543261).cljs$core$IFn$_invoke$arity$1(p))) && (cljs.core.nat_int_QMARK_(new cljs.core.Keyword("project","strokes","project/strokes",-1957087091).cljs$core$IFn$_invoke$arity$1(p))))))))))))))))))))))));
});
kami.sculpt.project.open = (function kami$sculpt$project$open(v){
var p = kami.sculpt.project.migrate(v);
if(kami.sculpt.project.valid_QMARK_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Sculpt project",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),p], null));
}

return p;
});

//# sourceMappingURL=kami.sculpt.project.js.map
