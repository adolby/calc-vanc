// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data();
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(64),(1)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__28379 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28379,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28379,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28379,(2),null);
var vec__28382 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1((taoensso.encore.parse_version.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.parse_version.cljs$core$IFn$_invoke$arity$1(min_version) : taoensso.encore.parse_version.call(null,min_version))));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(2),null);
var vec__28385 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__28379,xc,yc,zc,vec__28382,xm,ym,zm){
return (function (p1__28369_SHARP_){
var or__6554__auto__ = p1__28369_SHARP_;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return (0);
}
});})(vec__28379,xc,yc,zc,vec__28382,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Insufficient `com.taoensso/encore` version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Given a name symbol and sigs, returns [<name-with-attrs-meta> <args>]
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args28388 = [];
var len__7629__auto___28397 = arguments.length;
var i__7630__auto___28398 = (0);
while(true){
if((i__7630__auto___28398 < len__7629__auto___28397)){
args28388.push((arguments[i__7630__auto___28398]));

var G__28399 = (i__7630__auto___28398 + (1));
i__7630__auto___28398 = G__28399;
continue;
} else {
}
break;
}

var G__28390 = args28388.length;
switch (G__28390) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28388.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,sigs){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,null,sigs);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,attrs_merge,sigs){
var vec__28391 = (((typeof cljs.core.first(sigs) === 'string') && (cljs.core.next(sigs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(sigs),cljs.core.next(sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(0),null);
var sigs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(1),null);
var vec__28394 = (((cljs.core.map_QMARK_(cljs.core.first(sigs__$1))) && (cljs.core.next(sigs__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(sigs__$1),cljs.core.next(sigs__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,sigs__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(0),null);
var sigs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),sigs__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args28401 = [];
var len__7629__auto___28406 = arguments.length;
var i__7630__auto___28407 = (0);
while(true){
if((i__7630__auto___28407 < len__7629__auto___28406)){
args28401.push((arguments[i__7630__auto___28407]));

var G__28408 = (i__7630__auto___28407 + (1));
i__7630__auto___28407 = G__28408;
continue;
} else {
}
break;
}

var G__28403 = args28401.length;
switch (G__28403) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28401.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic) : taoensso.encore.kw_identical_QMARK_.call(null,readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic)))?(function (){var G__28404 = cljs.core.symbol;
var G__28405 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_));
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__28404,G__28405) : taoensso.encore.map_keys.call(null,G__28404,G__28405));
})():readers);
var default$__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(default$,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic) : taoensso.encore.kw_identical_QMARK_.call(null,default$,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.array_seq([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arg,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args28410 = [];
var len__7629__auto___28415 = arguments.length;
var i__7630__auto___28416 = (0);
while(true){
if((i__7630__auto___28416 < len__7629__auto___28415)){
args28410.push((arguments[i__7630__auto___28416]));

var G__28417 = (i__7630__auto___28416 + (1));
i__7630__auto___28416 = G__28417;
continue;
} else {
}
break;
}

var G__28412 = args28410.length;
switch (G__28412) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28410.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_28413 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_28414 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_28414;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_28413;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__6554__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map], 0));
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
return !((x == null));
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || (x.cljs$core$IIndexed$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || (x.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__6542__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__6542__auto__){
var and__6542__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__6542__auto____$1)){
return true;
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__6542__auto__ = (x instanceof cljs.core.Symbol);
if(and__6542__auto__){
var and__6542__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__6542__auto____$1)){
return true;
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__6542__auto__ = (x instanceof cljs.core.Keyword);
if(and__6542__auto__){
var and__6542__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__6542__auto____$1)){
return true;
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__6542__auto__ = typeof x === 'number';
if(and__6542__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__6542__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var temp__4655__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e28430){if((e28430 instanceof Error)){
var _ = e28430;
return false;
} else {
throw e28430;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args28431 = [];
var len__7629__auto___28434 = arguments.length;
var i__7630__auto___28435 = (0);
while(true){
if((i__7630__auto___28435 < len__7629__auto___28434)){
args28431.push((arguments[i__7630__auto___28435]));

var G__28436 = (i__7630__auto___28435 + (1));
i__7630__auto___28435 = G__28436;
continue;
} else {
}
break;
}

var G__28433 = args28431.length;
switch (G__28433) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28431.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$arg_DASH_val,x,cljs.core.cst$kw$arg_DASH_type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("`as-"),cljs.core.str(cljs.core.name(as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arg,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});
taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});
taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});
taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});
taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});
taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});
taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__6554__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args28438 = [];
var len__7629__auto___28441 = arguments.length;
var i__7630__auto___28442 = (0);
while(true){
if((i__7630__auto___28442 < len__7629__auto___28441)){
args28438.push((arguments[i__7630__auto___28442]));

var G__28443 = (i__7630__auto___28442 + (1));
i__7630__auto___28442 = G__28443;
continue;
} else {
}
break;
}

var G__28440 = args28438.length;
switch (G__28440) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28438.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,no_slash_QMARK_){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,taoensso.encore.explode_keyword(in$));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * Like `force` for refs
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(x),m], 0)));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args28446 = [];
var len__7629__auto___28458 = arguments.length;
var i__7630__auto___28459 = (0);
while(true){
if((i__7630__auto___28459 < len__7629__auto___28458)){
args28446.push((arguments[i__7630__auto___28459]));

var G__28460 = (i__7630__auto___28459 + (1));
i__7630__auto___28459 = G__28460;
continue;
} else {
}
break;
}

var G__28451 = args28446.length;
switch (G__28451) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28446.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7648__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__6542__auto__ = taoensso.encore.some_QMARK_(x);
if(and__6542__auto__){
var and__6542__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__6542__auto____$1){
var G__28456 = ((function (and__6542__auto____$1,and__6542__auto__){
return (function (p1__28445_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28445_SHARP_,x);
});})(and__6542__auto____$1,and__6542__auto__))
;
var G__28457 = more;
return (taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2(G__28456,G__28457) : taoensso.encore.revery_QMARK_.call(null,G__28456,G__28457));
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq28447){
var G__28448 = cljs.core.first(seq28447);
var seq28447__$1 = cljs.core.next(seq28447);
var G__28449 = cljs.core.first(seq28447__$1);
var seq28447__$2 = cljs.core.next(seq28447__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__28448,G__28449,seq28447__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args28462 = [];
var len__7629__auto___28469 = arguments.length;
var i__7630__auto___28470 = (0);
while(true){
if((i__7630__auto___28470 < len__7629__auto___28469)){
args28462.push((arguments[i__7630__auto___28470]));

var G__28471 = (i__7630__auto___28470 + (1));
i__7630__auto___28470 = G__28471;
continue;
} else {
}
break;
}

var G__28468 = args28462.length;
switch (G__28468) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28462.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7648__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return (taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2(taoensso.encore.some_QMARK_,more) : taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more));
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq28463){
var G__28464 = cljs.core.first(seq28463);
var seq28463__$1 = cljs.core.next(seq28463);
var G__28465 = cljs.core.first(seq28463__$1);
var seq28463__$2 = cljs.core.next(seq28463__$1);
var G__28466 = cljs.core.first(seq28463__$2);
var seq28463__$3 = cljs.core.next(seq28463__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__28464,G__28465,G__28466,seq28463__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});
taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__28478 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28478,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28478,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var temp__4657__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var temp__4657__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * May not be available with Node.js, etc.
 */
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args28481 = [];
var len__7629__auto___28485 = arguments.length;
var i__7630__auto___28486 = (0);
while(true){
if((i__7630__auto___28486 < len__7629__auto___28485)){
args28481.push((arguments[i__7630__auto___28486]));

var G__28487 = (i__7630__auto___28486 + (1));
i__7630__auto___28486 = G__28487;
continue;
} else {
}
break;
}

var G__28483 = args28481.length;
switch (G__28483) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28481.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3(x,y,0.001);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return ((function (){var G__28484 = (x - y);
return Math.abs(G__28484);
})() < signf);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args28489 = [];
var len__7629__auto___28493 = arguments.length;
var i__7630__auto___28494 = (0);
while(true){
if((i__7630__auto___28494 < len__7629__auto___28493)){
args28489.push((arguments[i__7630__auto___28494]));

var G__28495 = (i__7630__auto___28494 + (1));
i__7630__auto___28494 = G__28495;
continue;
} else {
}
break;
}

var G__28491 = args28489.length;
switch (G__28491) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28489.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__28492 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28492) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__28499 = (n * 10.0);
return Math.round(G__28499);
})() / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__28501 = (n * 100.0);
return Math.round(G__28501);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args28502 = [];
var len__7629__auto___28508 = arguments.length;
var i__7630__auto___28509 = (0);
while(true){
if((i__7630__auto___28509 < len__7629__auto___28508)){
args28502.push((arguments[i__7630__auto___28509]));

var G__28510 = (i__7630__auto___28509 + (1));
i__7630__auto___28509 = G__28510;
continue;
} else {
}
break;
}

var G__28504 = args28502.length;
switch (G__28504) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28502.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__28505){
var map__28506 = p__28505;
var map__28506__$1 = ((((!((map__28506 == null)))?((((map__28506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28506):map__28506);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28506__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28506__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28506__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28528 = arguments.length;
var i__7630__auto___28529 = (0);
while(true){
if((i__7630__auto___28529 < len__7629__auto___28528)){
args__7636__auto__.push((arguments[i__7630__auto___28529]));

var G__28530 = (i__7630__auto___28529 + (1));
i__7630__auto___28529 = G__28530;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__28525){
var map__28526 = p__28525;
var map__28526__$1 = ((((!((map__28526 == null)))?((((map__28526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28526):map__28526);
var opts = map__28526__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28526__$1,cljs.core.cst$kw$ms);
if(cljs.core.truth_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__28526,map__28526__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null).call(null,__in))){
return __in;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__28526,map__28526__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq28524){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28524));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.set_STAR_(x))));
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args28535 = [];
var len__7629__auto___28542 = arguments.length;
var i__7630__auto___28543 = (0);
while(true){
if((i__7630__auto___28543 < len__7629__auto___28542)){
args28535.push((arguments[i__7630__auto___28543]));

var G__28544 = (i__7630__auto___28543 + (1));
i__7630__auto___28543 = G__28544;
continue;
} else {
}
break;
}

var G__28541 = args28535.length;
switch (G__28541) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28535.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7648__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3(o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq28536){
var G__28537 = cljs.core.first(seq28536);
var seq28536__$1 = cljs.core.next(seq28536);
var G__28538 = cljs.core.first(seq28536__$1);
var seq28536__$2 = cljs.core.next(seq28536__$1);
var G__28539 = cljs.core.first(seq28536__$2);
var seq28536__$3 = cljs.core.next(seq28536__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__28537,G__28538,G__28539,seq28536__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__28549 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28549,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__28555 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28555,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.set_STAR_(x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args28558 = [];
var len__7629__auto___28564 = arguments.length;
var i__7630__auto___28565 = (0);
while(true){
if((i__7630__auto___28565 < len__7629__auto___28564)){
args28558.push((arguments[i__7630__auto___28565]));

var G__28566 = (i__7630__auto___28565 + (1));
i__7630__auto___28565 = G__28566;
continue;
} else {
}
break;
}

var G__28563 = args28558.length;
switch (G__28563) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28558.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7648__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(taoensso.encore.some_QMARK_(_QMARK_x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq28559){
var G__28560 = cljs.core.first(seq28559);
var seq28559__$1 = cljs.core.next(seq28559);
var G__28561 = cljs.core.first(seq28559__$1);
var seq28559__$2 = cljs.core.next(seq28559__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__28560,G__28561,seq28559__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);

/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28569_SHARP_,p2__28568_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__28568_SHARP_) : proc.call(null,p2__28568_SHARP_));
}),null,coll);

return null;
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__28572_SHARP_,p2__28570_SHARP_,p3__28571_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__28570_SHARP_,p3__28571_SHARP_) : proc.call(null,p2__28570_SHARP_,p3__28571_SHARP_));
}),null,m);

return null;
});
taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
var G__28579_28582 = (function (p1__28575_SHARP_,p2__28573_SHARP_,p3__28574_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__28573_SHARP_,p3__28574_SHARP_) : proc.call(null,p2__28573_SHARP_,p3__28574_SHARP_));
});
var G__28580_28583 = null;
var G__28581_28584 = kvs;
(taoensso.encore.reduce_kvs.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.reduce_kvs.cljs$core$IFn$_invoke$arity$3(G__28579_28582,G__28580_28583,G__28581_28584) : taoensso.encore.reduce_kvs.call(null,G__28579_28582,G__28580_28583,G__28581_28584));

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__4657__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var temp__4657__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__28594){
var vec__28595 = p__28594;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28595,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * Like `reduce-kv` but for JavaScript objects
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__28601 = acc;
var G__28602 = k;
var G__28603 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28601,G__28602,G__28603) : f.call(null,G__28601,G__28602,G__28603));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args28608 = [];
var len__7629__auto___28611 = arguments.length;
var i__7630__auto___28612 = (0);
while(true){
if((i__7630__auto___28612 < len__7629__auto___28611)){
args28608.push((arguments[i__7630__auto___28612]));

var G__28613 = (i__7630__auto___28612 + (1));
i__7630__auto___28612 = G__28613;
continue;
} else {
}
break;
}

var G__28610 = args28608.length;
switch (G__28610) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28608.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args28619 = [];
var len__7629__auto___28622 = arguments.length;
var i__7630__auto___28623 = (0);
while(true){
if((i__7630__auto___28623 < len__7629__auto___28622)){
args28619.push((arguments[i__7630__auto___28623]));

var G__28624 = (i__7630__auto___28623 + (1));
i__7630__auto___28623 = G__28624;
continue;
} else {
}
break;
}

var G__28621 = args28619.length;
switch (G__28621) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28619.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__28626 = null;
var G__28626__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28626__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__28626__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen_) : cljs.core.deref.call(null,seen_)),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__28626 = function(acc,input){
switch(arguments.length){
case 0:
return G__28626__0.call(this);
case 1:
return G__28626__1.call(this,acc);
case 2:
return G__28626__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28626.cljs$core$IFn$_invoke$arity$0 = G__28626__0;
G__28626.cljs$core$IFn$_invoke$arity$1 = G__28626__1;
G__28626.cljs$core$IFn$_invoke$arity$2 = G__28626__2;
return G__28626;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
var or__6554__auto__ = (taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3(coll,(0),n) : taoensso.encore._QMARK_subvec_LT_len.call(null,coll,(0),n));
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args28631 = [];
var len__7629__auto___28637 = arguments.length;
var i__7630__auto___28638 = (0);
while(true){
if((i__7630__auto___28638 < len__7629__auto___28637)){
args28631.push((arguments[i__7630__auto___28638]));

var G__28639 = (i__7630__auto___28638 + (1));
i__7630__auto___28638 = G__28639;
continue;
} else {
}
break;
}

var G__28636 = args28631.length;
switch (G__28636) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28631.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7648__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq28632){
var G__28633 = cljs.core.first(seq28632);
var seq28632__$1 = cljs.core.next(seq28632);
var G__28634 = cljs.core.first(seq28632__$1);
var seq28632__$2 = cljs.core.next(seq28632__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__28633,G__28634,seq28632__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
return taoensso.encore.filter_vals(cljs.core.complement(pred),m);
});
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
return taoensso.encore.filter_keys(cljs.core.complement(pred),m);
});
taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
return taoensso.encore.filter_kvs(cljs.core.complement(pred),m);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__28641_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__28641_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_(ks)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
} else {
var vec__28649 = ks;
var seq__28650 = cljs.core.seq(vec__28649);
var first__28651 = cljs.core.first(seq__28650);
var seq__28650__$1 = cljs.core.next(seq__28650);
var k = first__28651;
var ks__$1 = seq__28650__$1;
if(ks__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso$encore$update_in_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28652) : f.call(null,G__28652));
})());
}
}
});
/**
 * Like `subvec` but:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty vector.
 */
taoensso.encore._QMARK_subvec_LT_idx = (function taoensso$encore$_QMARK_subvec_LT_idx(var_args){
var args28653 = [];
var len__7629__auto___28656 = arguments.length;
var i__7630__auto___28657 = (0);
while(true){
if((i__7630__auto___28657 < len__7629__auto___28656)){
args28653.push((arguments[i__7630__auto___28657]));

var G__28658 = (i__7630__auto___28657 + (1));
i__7630__auto___28657 = G__28658;
continue;
} else {
}
break;
}

var G__28655 = args28653.length;
switch (G__28655) {
case 2:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28653.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?subvec<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore._QMARK_subvec_LT_len = (function taoensso$encore$_QMARK_subvec_LT_len(var_args){
var args28660 = [];
var len__7629__auto___28663 = arguments.length;
var i__7630__auto___28664 = (0);
while(true){
if((i__7630__auto___28664 < len__7629__auto___28663)){
args28660.push((arguments[i__7630__auto___28664]));

var G__28665 = (i__7630__auto___28664 + (1));
i__7630__auto___28664 = G__28665;
continue;
} else {
}
break;
}

var G__28662 = args28660.length;
switch (G__28662) {
case 2:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28660.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return null;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args28667 = [];
var len__7629__auto___28670 = arguments.length;
var i__7630__auto___28671 = (0);
while(true){
if((i__7630__auto___28671 < len__7629__auto___28670)){
args28667.push((arguments[i__7630__auto___28671]));

var G__28672 = (i__7630__auto___28671 + (1));
i__7630__auto___28671 = G__28672;
continue;
} else {
}
break;
}

var G__28669 = args28667.length;
switch (G__28669) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28667.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4(n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4(n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.butlast(ks)),cljs.core.last(ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args28674 = [];
var len__7629__auto___28681 = arguments.length;
var i__7630__auto___28682 = (0);
while(true){
if((i__7630__auto___28682 < len__7629__auto___28681)){
args28674.push((arguments[i__7630__auto___28682]));

var G__28683 = (i__7630__auto___28682 + (1));
i__7630__auto___28682 = G__28683;
continue;
} else {
}
break;
}

var G__28680 = args28674.length;
switch (G__28680) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28674.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7648__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in_STAR_(m,ks,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in_STAR_(m,ks,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq28675){
var G__28676 = cljs.core.first(seq28675);
var seq28675__$1 = cljs.core.next(seq28675);
var G__28677 = cljs.core.first(seq28675__$1);
var seq28675__$2 = cljs.core.next(seq28675__$1);
var G__28678 = cljs.core.first(seq28675__$2);
var seq28675__$3 = cljs.core.next(seq28675__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__28676,G__28677,G__28678,seq28675__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args28685 = [];
var len__7629__auto___28692 = arguments.length;
var i__7630__auto___28693 = (0);
while(true){
if((i__7630__auto___28693 < len__7629__auto___28692)){
args28685.push((arguments[i__7630__auto___28693]));

var G__28694 = (i__7630__auto___28693 + (1));
i__7630__auto___28693 = G__28694;
continue;
} else {
}
break;
}

var G__28691 = args28685.length;
switch (G__28691) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28685.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7648__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq28686){
var G__28687 = cljs.core.first(seq28686);
var seq28686__$1 = cljs.core.next(seq28686);
var G__28688 = cljs.core.first(seq28686__$1);
var seq28686__$2 = cljs.core.next(seq28686__$1);
var G__28689 = cljs.core.first(seq28686__$2);
var seq28686__$3 = cljs.core.next(seq28686__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__28687,G__28688,G__28689,seq28686__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args28696 = [];
var len__7629__auto___28703 = arguments.length;
var i__7630__auto___28704 = (0);
while(true){
if((i__7630__auto___28704 < len__7629__auto___28703)){
args28696.push((arguments[i__7630__auto___28704]));

var G__28705 = (i__7630__auto___28704 + (1));
i__7630__auto___28704 = G__28705;
continue;
} else {
}
break;
}

var G__28702 = args28696.length;
switch (G__28702) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28696.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7648__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq28697){
var G__28698 = cljs.core.first(seq28697);
var seq28697__$1 = cljs.core.next(seq28697);
var G__28699 = cljs.core.first(seq28697__$1);
var seq28697__$2 = cljs.core.next(seq28697__$1);
var G__28700 = cljs.core.first(seq28697__$2);
var seq28697__$3 = cljs.core.next(seq28697__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__28698,G__28699,G__28700,seq28697__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);

taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args28707 = [];
var len__7629__auto___28710 = arguments.length;
var i__7630__auto___28711 = (0);
while(true){
if((i__7630__auto___28711 < len__7629__auto___28710)){
args28707.push((arguments[i__7630__auto___28711]));

var G__28712 = (i__7630__auto___28711 + (1));
i__7630__auto___28711 = G__28712;
continue;
} else {
}
break;
}

var G__28709 = args28707.length;
switch (G__28709) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28707.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28715 = arguments.length;
var i__7630__auto___28716 = (0);
while(true){
if((i__7630__auto___28716 < len__7629__auto___28715)){
args__7636__auto__.push((arguments[i__7630__auto___28716]));

var G__28717 = (i__7630__auto___28716 + (1));
i__7630__auto___28716 = G__28717;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq28714){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28714));
});

/**
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28721 = arguments.length;
var i__7630__auto___28722 = (0);
while(true){
if((i__7630__auto___28722 < len__7629__auto___28721)){
args__7636__auto__.push((arguments[i__7630__auto___28722]));

var G__28723 = (i__7630__auto___28722 + (1));
i__7630__auto___28722 = G__28723;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),(function (){var G__28720 = cljs.core.last(args);
return (taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(G__28720) : taoensso.encore.seq_kvs.call(null,G__28720));
})()));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq28718){
var G__28719 = cljs.core.first(seq28718);
var seq28718__$1 = cljs.core.next(seq28718);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__28719,seq28718__$1);
});

/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__28724 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__28725 = cljs.core.next(ks__$1);
var G__28726 = cljs.core.next(vs__$1);
m = G__28724;
ks__$1 = G__28725;
vs__$1 = G__28726;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args28727 = [];
var len__7629__auto___28733 = arguments.length;
var i__7630__auto___28734 = (0);
while(true){
if((i__7630__auto___28734 < len__7629__auto___28733)){
args28727.push((arguments[i__7630__auto___28734]));

var G__28735 = (i__7630__auto___28734 + (1));
i__7630__auto___28734 = G__28735;
continue;
} else {
}
break;
}

var G__28732 = args28727.length;
switch (G__28732) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28727.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7648__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq28728){
var G__28729 = cljs.core.first(seq28728);
var seq28728__$1 = cljs.core.next(seq28728);
var G__28730 = cljs.core.first(seq28728__$1);
var seq28728__$2 = cljs.core.next(seq28728__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__28729,G__28730,seq28728__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
var G__28737 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__28738 = cljs.core.next(s1);
var G__28739 = cljs.core.next(s2);
v = G__28737;
s1 = G__28738;
s2 = G__28739;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
taoensso.encore._nested_merge_with = (function taoensso$encore$_nested_merge_with(f,maps){
if(cljs.core.truth_(taoensso.encore.rsome(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce_kv((function taoensso$encore$_nested_merge_with_$_rf2(acc__$1,k,rv){
if(cljs.core.contains_QMARK_(acc__$1,k)){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
if((cljs.core.map_QMARK_(lv)) && (cljs.core.map_QMARK_(rv))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_nested_merge_with_$_rf2,lv,rv));
} else {
if(taoensso.encore.kw_identical_QMARK_(rv,cljs.core.cst$kw$merge_SLASH_dissoc)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(taoensso.encore.kw_identical_QMARK_(new_rv,cljs.core.cst$kw$merge_SLASH_dissoc)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
}
}),acc,in$);
}),cljs.core.PersistentArrayMap.EMPTY,maps);
} else {
return null;
}
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28742 = arguments.length;
var i__7630__auto___28743 = (0);
while(true){
if((i__7630__auto___28743 < len__7629__auto___28742)){
args__7636__auto__.push((arguments[i__7630__auto___28743]));

var G__28744 = (i__7630__auto___28743 + (1));
i__7630__auto___28743 = G__28744;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._nested_merge_with(f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq28740){
var G__28741 = cljs.core.first(seq28740);
var seq28740__$1 = cljs.core.next(seq28740);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__28741,seq28740__$1);
});

taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28746 = arguments.length;
var i__7630__auto___28747 = (0);
while(true){
if((i__7630__auto___28747 < len__7629__auto___28746)){
args__7636__auto__.push((arguments[i__7630__auto___28747]));

var G__28748 = (i__7630__auto___28747 + (1));
i__7630__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._nested_merge_with((function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq28745){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28745));
});

/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore._platform_cas_BANG_ = (function taoensso$encore$_platform_cas_BANG_(atom_,old_val,new_val){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,new_val) : cljs.core.reset_BANG_.call(null,atom_,new_val));

return true;
});
/**
 * Returns [<old-val> <new-val>]
 */
taoensso.encore.dswap_BANG_ = (function taoensso$encore$dswap_BANG_(atom_,f){
var ov = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var nv = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ov) : f.call(null,ov));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,nv) : cljs.core.reset_BANG_.call(null,atom_,nv));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ov,nv], null);
});
/**
 * Used by memoization utils
 */
taoensso.encore._swap_cache_BANG_ = (function taoensso$encore$_swap_cache_BANG_(atom_,k,f){
var om = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var nv = (function (){var G__28750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28750) : f.call(null,G__28750));
})();
var nm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om,k,nv);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,nm) : cljs.core.reset_BANG_.call(null,atom_,nm));

return nv;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7176__auto__,k__7177__auto__){
var self__ = this;
var this__7176__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7176__auto____$1,k__7177__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7178__auto__,k28752,else__7179__auto__){
var self__ = this;
var this__7178__auto____$1 = this;
var G__28754 = (((k28752 instanceof cljs.core.Keyword))?k28752.fqn:null);
switch (G__28754) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28752,else__7179__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7190__auto__,writer__7191__auto__,opts__7192__auto__){
var self__ = this;
var this__7190__auto____$1 = this;
var pr_pair__7193__auto__ = ((function (this__7190__auto____$1){
return (function (keyval__7194__auto__){
return cljs.core.pr_sequential_writer(writer__7191__auto__,cljs.core.pr_writer,""," ","",opts__7192__auto__,keyval__7194__auto__);
});})(this__7190__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7191__auto__,pr_pair__7193__auto__,"#taoensso.encore.Swapped{",", ","}",opts__7192__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$new_DASH_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$return_DASH_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28751){
var self__ = this;
var G__28751__$1 = this;
return (new cljs.core.RecordIter((0),G__28751__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_val,cljs.core.cst$kw$return_DASH_val], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7170__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7180__auto__){
var self__ = this;
var this__7180__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7171__auto__){
var self__ = this;
var this__7171__auto____$1 = this;
var h__6989__auto__ = self__.__hash;
if(!((h__6989__auto__ == null))){
return h__6989__auto__;
} else {
var h__6989__auto____$1 = cljs.core.hash_imap(this__7171__auto____$1);
self__.__hash = h__6989__auto____$1;

return h__6989__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7172__auto__,other__7173__auto__){
var self__ = this;
var this__7172__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6542__auto__ = other__7173__auto__;
if(cljs.core.truth_(and__6542__auto__)){
var and__6542__auto____$1 = (this__7172__auto____$1.constructor === other__7173__auto__.constructor);
if(and__6542__auto____$1){
return cljs.core.equiv_map(this__7172__auto____$1,other__7173__auto__);
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7185__auto__,k__7186__auto__){
var self__ = this;
var this__7185__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$return_DASH_val,null,cljs.core.cst$kw$new_DASH_val,null], null), null),k__7186__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7185__auto____$1),self__.__meta),k__7186__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7186__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7183__auto__,k__7184__auto__,G__28751){
var self__ = this;
var this__7183__auto____$1 = this;
var pred__28755 = cljs.core.keyword_identical_QMARK_;
var expr__28756 = k__7184__auto__;
if(cljs.core.truth_((pred__28755.cljs$core$IFn$_invoke$arity$2 ? pred__28755.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new_DASH_val,expr__28756) : pred__28755.call(null,cljs.core.cst$kw$new_DASH_val,expr__28756)))){
return (new taoensso.encore.Swapped(G__28751,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28755.cljs$core$IFn$_invoke$arity$2 ? pred__28755.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return_DASH_val,expr__28756) : pred__28755.call(null,cljs.core.cst$kw$return_DASH_val,expr__28756)))){
return (new taoensso.encore.Swapped(self__.new_val,G__28751,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7184__auto__,G__28751),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7188__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$new_DASH_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$return_DASH_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7175__auto__,G__28751){
var self__ = this;
var this__7175__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__28751,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7181__auto__,entry__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7182__auto__)){
return cljs.core._assoc(this__7181__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7182__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7181__auto____$1,entry__7182__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_val,cljs.core.cst$sym$return_DASH_val], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__7210__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__7210__auto__,writer__7211__auto__){
return cljs.core._write(writer__7211__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__28753){
return (new taoensso.encore.Swapped(cljs.core.cst$kw$new_DASH_val.cljs$core$IFn$_invoke$arity$1(G__28753),cljs.core.cst$kw$return_DASH_val.cljs$core$IFn$_invoke$arity$1(G__28753),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28753,cljs.core.cst$kw$new_DASH_val,cljs.core.array_seq([cljs.core.cst$kw$return_DASH_val], 0)),null));
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
/**
 * Returns [<new-val> <return-val>]
 */
taoensso.encore._swapped = (function taoensso$encore$_swapped(var_args){
var args28759 = [];
var len__7629__auto___28771 = arguments.length;
var i__7630__auto___28772 = (0);
while(true){
if((i__7630__auto___28772 < len__7629__auto___28771)){
args28759.push((arguments[i__7630__auto___28772]));

var G__28773 = (i__7630__auto___28772 + (1));
i__7630__auto___28772 = G__28773;
continue;
} else {
}
break;
}

var G__28761 = args28759.length;
switch (G__28761) {
case 1:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28759.length)].join('')));

}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(taoensso.encore.swapped_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_val.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$return_DASH_val.cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2 = (function (old_val,f){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val)));
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3 = (function (old_val,ks,f){
var vec__28762 = ks;
var seq__28763 = cljs.core.seq(vec__28762);
var first__28764 = cljs.core.first(seq__28763);
var seq__28763__$1 = cljs.core.next(seq__28763);
var k1 = first__28764;
var kn = seq__28763__$1;
var m = old_val;
if(kn){
if(taoensso.encore.kw_identical_QMARK_(f,cljs.core.cst$kw$swap_SLASH_dissoc)){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,cljs.core.butlast(ks),cljs.core.last(ks)));
} else {
var old_val_in = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var vec__28765 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val_in) : f.call(null,old_val_in)));
var new_val_in = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28765,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28765,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_(new_val_in,cljs.core.cst$kw$swap_SLASH_dissoc))?taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,cljs.core.butlast(ks),cljs.core.last(ks)):cljs.core.assoc_in(m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
} else {
if(((k1 == null)) && (cljs.core.empty_QMARK_(ks))){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val)));
} else {
if(taoensso.encore.kw_identical_QMARK_(f,cljs.core.cst$kw$swap_SLASH_dissoc)){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k1));
} else {
var old_val_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k1);
var vec__28768 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val_in) : f.call(null,old_val_in)));
var new_val_in = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28768,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28768,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_(new_val_in,cljs.core.cst$kw$swap_SLASH_dissoc))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k1):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k1,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
}
}
});

taoensso.encore._swapped.cljs$lang$maxFixedArity = 3;

/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore._replace_in = (function taoensso$encore$_replace_in(_QMARK_vf_type,m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__28779 = (cljs.core.truth_(_QMARK_vf_type)?cljs.core.cons(_QMARK_vf_type,_QMARK_op):_QMARK_op);
var vf_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(2),null);
var G__28782 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__28782) {
case "reset":
if(cljs.core.empty_QMARK_(ks)){
return valf;
} else {
return cljs.core.assoc_in(acc,ks,valf);
}

break;
case "swap":
if((valf == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_(ks)){
return (valf.cljs$core$IFn$_invoke$arity$1 ? valf.cljs$core$IFn$_invoke$arity$1(acc) : valf.call(null,acc));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3(acc,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
} else {
return acc;
}
}),m,ops);
});
/**
 * For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28786 = arguments.length;
var i__7630__auto___28787 = (0);
while(true){
if((i__7630__auto___28787 < len__7629__auto___28786)){
args__7636__auto__.push((arguments[i__7630__auto___28787]));

var G__28788 = (i__7630__auto___28787 + (1));
i__7630__auto___28787 = G__28788;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore._replace_in(null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq28784){
var G__28785 = cljs.core.first(seq28784);
var seq28784__$1 = cljs.core.next(seq28784);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__28785,seq28784__$1);
});

taoensso.encore.pairs_into = (function taoensso$encore$pairs_into(to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(to,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),from);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args28793 = [];
var len__7629__auto___28808 = arguments.length;
var i__7630__auto___28809 = (0);
while(true){
if((i__7630__auto___28809 < len__7629__auto___28808)){
args28793.push((arguments[i__7630__auto___28809]));

var G__28810 = (i__7630__auto___28809 + (1));
i__7630__auto___28809 = G__28810;
continue;
} else {
}
break;
}

var G__28799 = args28793.length;
switch (G__28799) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28793.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7648__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var vec__28800 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val)));
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28800,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28800,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var vec__28803 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3(old_val,ks,f);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28803,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28803,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count(more);
}catch (e28806){if((e28806 instanceof Error)){
var e = e28806;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e28806;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e28807){if((e28807 instanceof Error)){
var e = e28807;
return e;
} else {
throw e28807;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),more);
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var new_val = taoensso.encore._replace_in(cljs.core.cst$kw$swap,old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq28794){
var G__28795 = cljs.core.first(seq28794);
var seq28794__$1 = cljs.core.next(seq28794);
var G__28796 = cljs.core.first(seq28794__$1);
var seq28794__$2 = cljs.core.next(seq28794__$1);
var G__28797 = cljs.core.first(seq28794__$2);
var seq28794__$3 = cljs.core.next(seq28794__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28795,G__28796,G__28797,seq28794__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args28812 = [];
var len__7629__auto___28821 = arguments.length;
var i__7630__auto___28822 = (0);
while(true){
if((i__7630__auto___28822 < len__7629__auto___28821)){
args28812.push((arguments[i__7630__auto___28822]));

var G__28823 = (i__7630__auto___28822 + (1));
i__7630__auto___28822 = G__28823;
continue;
} else {
}
break;
}

var G__28818 = args28812.length;
switch (G__28818) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28812.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7648__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_(ks)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,new_val) : cljs.core.reset_BANG_.call(null,atom_,new_val));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,(function (old_val){
return cljs.core.assoc_in(old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count(more);
}catch (e28819){if((e28819 instanceof Error)){
var e = e28819;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e28819;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e28820){if((e28820 instanceof Error)){
var e = e28820;
return e;
} else {
throw e28820;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),more);
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var new_val__$1 = taoensso.encore._replace_in(cljs.core.cst$kw$reset,old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq28813){
var G__28814 = cljs.core.first(seq28813);
var seq28813__$1 = cljs.core.next(seq28813);
var G__28815 = cljs.core.first(seq28813__$1);
var seq28813__$2 = cljs.core.next(seq28813__$1);
var G__28816 = cljs.core.first(seq28813__$2);
var seq28813__$3 = cljs.core.next(seq28813__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28814,G__28815,G__28816,seq28813__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args28825 = [];
var len__7629__auto___28831 = arguments.length;
var i__7630__auto___28832 = (0);
while(true){
if((i__7630__auto___28832 < len__7629__auto___28831)){
args28825.push((arguments[i__7630__auto___28832]));

var G__28833 = (i__7630__auto___28832 + (1));
i__7630__auto___28832 = G__28833;
continue;
} else {
}
break;
}

var G__28830 = args28825.length;
switch (G__28830) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7648__auto__ = (new cljs.core.IndexedSeq(args28825.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7648__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq28826){
var G__28827 = cljs.core.first(seq28826);
var seq28826__$1 = cljs.core.next(seq28826);
var G__28828 = cljs.core.first(seq28826__$1);
var seq28826__$2 = cljs.core.next(seq28826__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__28827,G__28828,seq28826__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args28839 = [];
var len__7629__auto___28842 = arguments.length;
var i__7630__auto___28843 = (0);
while(true){
if((i__7630__auto___28843 < len__7629__auto___28842)){
args28839.push((arguments[i__7630__auto___28843]));

var G__28844 = (i__7630__auto___28843 + (1));
i__7630__auto___28843 = G__28844;
continue;
} else {
}
break;
}

var G__28841 = args28839.length;
switch (G__28841) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28839.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__6542__auto__ = separator;
if(cljs.core.truth_(and__6542__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__6542__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__6554__auto__ = fmt;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE
 *  * Formats nil as "nil" rather than "null"
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!)
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28848 = arguments.length;
var i__7630__auto___28849 = (0);
while(true){
if((i__7630__auto___28849 < len__7629__auto___28848)){
args__7636__auto__.push((arguments[i__7630__auto___28849]));

var G__28850 = (i__7630__auto___28849 + (1));
i__7630__auto___28849 = G__28850;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq28846){
var G__28847 = cljs.core.first(seq28846);
var seq28846__$1 = cljs.core.next(seq28846);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__28847,seq28846__$1);
});

/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides behaviour consistent between Clojure/Script.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__28853__delegate = function (args){
var G__28852 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__28852) : replacement.call(null,G__28852));
};
var G__28853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28854__i = 0, G__28854__a = new Array(arguments.length -  0);
while (G__28854__i < G__28854__a.length) {G__28854__a[G__28854__i] = arguments[G__28854__i + 0]; ++G__28854__i;}
  args = new cljs.core.IndexedSeq(G__28854__a,0);
} 
return G__28853__delegate.call(this,args);};
G__28853.cljs$lang$maxFixedArity = 0;
G__28853.cljs$lang$applyTo = (function (arglist__28855){
var args = cljs.core.seq(arglist__28855);
return G__28853__delegate(args);
});
G__28853.cljs$core$IFn$_invoke$arity$variadic = G__28853__delegate;
return G__28853;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
}
}
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args28856 = [];
var len__7629__auto___28859 = arguments.length;
var i__7630__auto___28860 = (0);
while(true){
if((i__7630__auto___28860 < len__7629__auto___28859)){
args28856.push((arguments[i__7630__auto___28860]));

var G__28861 = (i__7630__auto___28860 + (1));
i__7630__auto___28860 = G__28861;
continue;
} else {
}
break;
}

var G__28858 = args28856.length;
switch (G__28858) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28856.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty string.
 */
taoensso.encore._QMARK_substr_LT_idx = (function taoensso$encore$_QMARK_substr_LT_idx(var_args){
var args28863 = [];
var len__7629__auto___28866 = arguments.length;
var i__7630__auto___28867 = (0);
while(true){
if((i__7630__auto___28867 < len__7629__auto___28866)){
args28863.push((arguments[i__7630__auto___28867]));

var G__28868 = (i__7630__auto___28867 + (1));
i__7630__auto___28867 = G__28868;
continue;
} else {
}
break;
}

var G__28865 = args28863.length;
switch (G__28865) {
case 2:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28863.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substring(start));
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return null;
} else {
return s.substring(start,end);
}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?substr<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore._QMARK_substr_LT_len = (function taoensso$encore$_QMARK_substr_LT_len(var_args){
var args28870 = [];
var len__7629__auto___28873 = arguments.length;
var i__7630__auto___28874 = (0);
while(true){
if((i__7630__auto___28874 < len__7629__auto___28873)){
args28870.push((arguments[i__7630__auto___28874]));

var G__28875 = (i__7630__auto___28874 + (1));
i__7630__auto___28874 = G__28875;
continue;
} else {
}
break;
}

var G__28872 = args28870.length;
switch (G__28872) {
case 2:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28870.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore._QMARK_substr_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Like `string/join` but skips duplicate separators
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_ends_with_sep_QMARK__) : cljs.core.deref.call(null,acc_ends_with_sep_QMARK__));
var acc_empty_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_empty_QMARK__) : cljs.core.deref.call(null,acc_empty_QMARK__));
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__6554__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7636__auto__ = [];
var len__7629__auto___28880 = arguments.length;
var i__7630__auto___28881 = (0);
while(true){
if((i__7630__auto___28881 < len__7629__auto___28880)){
args__7636__auto__.push((arguments[i__7630__auto___28881]));

var G__28882 = (i__7630__auto___28881 + (1));
i__7630__auto___28881 = G__28882;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq28879){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28879));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args28883 = [];
var len__7629__auto___28886 = arguments.length;
var i__7630__auto___28887 = (0);
while(true){
if((i__7630__auto___28887 < len__7629__auto___28886)){
args28883.push((arguments[i__7630__auto___28887]));

var G__28888 = (i__7630__auto___28887 + (1));
i__7630__auto___28887 = G__28888;
continue;
} else {
}
break;
}

var G__28885 = args28883.length;
switch (G__28885) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28883.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Like `core/memoize` but avoids write races, supports invalidation
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__28894__delegate = function (xs){
var get_sentinel = {};
var x1 = cljs.core.first(xs);
if(taoensso.encore.kw_identical_QMARK_(x1,cljs.core.cst$kw$mem_SLASH_del)){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(taoensso.encore.kw_identical_QMARK_(x2,cljs.core.cst$kw$mem_SLASH_all)){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
if(taoensso.encore.kw_identical_QMARK_(x1,cljs.core.cst$kw$mem_SLASH_fresh)){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__28894 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__28895__i = 0, G__28895__a = new Array(arguments.length -  0);
while (G__28895__i < G__28895__a.length) {G__28895__a[G__28895__i] = arguments[G__28895__i + 0]; ++G__28895__i;}
  xs = new cljs.core.IndexedSeq(G__28895__a,0);
} 
return G__28894__delegate.call(this,xs);};
G__28894.cljs$lang$maxFixedArity = 0;
G__28894.cljs$lang$applyTo = (function (arglist__28896){
var xs = cljs.core.seq(arglist__28896);
return G__28894__delegate(xs);
});
G__28894.cljs$core$IFn$_invoke$arity$variadic = G__28894__delegate;
return G__28894;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = (function (){var G__28899 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28899) : cljs.core.atom.call(null,G__28899));
})();
return ((function (cache_){
return (function() { 
var G__28901__delegate = function (args){
var G__28900 = (function (){var or__6554__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),args);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__6554__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__6554__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__6554__auto__,cache_))
,null))], true, false);
}
});})(or__6554__auto__,cache_))
),args);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28900) : cljs.core.deref.call(null,G__28900));
};
var G__28901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28902__i = 0, G__28902__a = new Array(arguments.length -  0);
while (G__28902__i < G__28902__a.length) {G__28902__a[G__28902__i] = arguments[G__28902__i + 0]; ++G__28902__i;}
  args = new cljs.core.IndexedSeq(G__28902__a,0);
} 
return G__28901__delegate.call(this,args);};
G__28901.cljs$lang$maxFixedArity = 0;
G__28901.cljs$lang$applyTo = (function (arglist__28903){
var args = cljs.core.seq(arglist__28903);
return G__28901__delegate(args);
});
G__28901.cljs$core$IFn$_invoke$arity$variadic = G__28901__delegate;
return G__28901;
})()
;
;})(cache_))
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() <= taoensso.encore.gc_rate);
});
/**
 * Like `core/memoize` but:
 *  * Often faster, depends on opts
 *  * Prevents race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` opt
 *  * Supports cache size limit & gc with `cache-size` opt
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args28904 = [];
var len__7629__auto___28947 = arguments.length;
var i__7630__auto___28948 = (0);
while(true){
if((i__7630__auto___28948 < len__7629__auto___28947)){
args28904.push((arguments[i__7630__auto___28948]));

var G__28949 = (i__7630__auto___28948 + (1));
i__7630__auto___28948 = G__28949;
continue;
} else {
}
break;
}

var G__28906 = args28904.length;
switch (G__28906) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28904.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_28951 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28907){if((e28907 instanceof Error)){
var e = e28907;
return e;
} else {
throw e28907;

}
}})();
if((e_28951 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(pos-int? ttl-ms)",ttl_ms,e_28951,null);
}

var cache_ = (function (){var G__28908 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28908) : cljs.core.atom.call(null,G__28908));
})();
var gc_running_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__6542__auto__ = taoensso.encore.gc_now_QMARK_();
if(cljs.core.truth_(and__6542__auto__)){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__6542__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped(true,cljs.core.not(b));
});})(and__6542__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__6542__auto__;
}
})())){
var instant = taoensso.encore.now_udt();
var snapshot = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_));
var ks_to_gc = cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__28909){
var vec__28910 = p__28909;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28910,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28910,(1),null);
var cv = vec__28910;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$(m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(gc_running_QMARK__,false) : cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false));
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__28952__delegate = function (args){
var a1 = cljs.core.first(args);
if(taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_del)){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(taoensso.encore.kw_identical_QMARK_(a2,cljs.core.cst$kw$mem_SLASH_all)){
var G__28913_28953 = cache_;
var G__28914_28954 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28913_28953,G__28914_28954) : cljs.core.reset_BANG_.call(null,G__28913_28953,G__28914_28954));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn();

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_fresh);
var args__$1 = ((fresh_QMARK_)?cljs.core.next(args):args);
var instant = taoensso.encore.now_udt();
var vec__28915 = taoensso.encore._swap_cache_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6542__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6542__auto__)){
var and__6542__auto____$1 = !(fresh_QMARK_);
if(and__6542__auto____$1){
var vec__28921 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28915,(0),null);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dv) : cljs.core.deref.call(null,dv));
}
};
var G__28952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28955__i = 0, G__28955__a = new Array(arguments.length -  0);
while (G__28955__i < G__28955__a.length) {G__28955__a[G__28955__i] = arguments[G__28955__i + 0]; ++G__28955__i;}
  args = new cljs.core.IndexedSeq(G__28955__a,0);
} 
return G__28952__delegate.call(this,args);};
G__28952.cljs$lang$maxFixedArity = 0;
G__28952.cljs$lang$applyTo = (function (arglist__28956){
var args = cljs.core.seq(arglist__28956);
return G__28952__delegate(args);
});
G__28952.cljs$core$IFn$_invoke$arity$variadic = G__28952__delegate;
return G__28952;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__6554__auto__ = (x == null);
if(or__6554__auto__){
return or__6554__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_28957 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28924){if((e28924 instanceof Error)){
var e = e28924;
return e;
} else {
throw e28924;

}
}})();
if((e_28957 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(pos-int? cache-size)",cache_size,e_28957,null);
}

var state_ = (function (){var G__28925 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28925) : cljs.core.atom.call(null,G__28925));
})();
var gc_running_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$((function (){var or__6554__auto__ = ttl_ms;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$(cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__6542__auto__ = taoensso.encore.gc_now_QMARK_();
if(cljs.core.truth_(and__6542__auto__)){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__6542__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped(true,cljs.core.not(b));
});})(and__6542__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__6542__auto__;
}
})())){
var instant = taoensso.encore.now_udt();
if(ttl_ms_QMARK_){
var snapshot_28958 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)),cljs.core.cst$kw$tick);
var ks_to_gc_28959 = cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (snapshot_28958,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__28926){
var vec__28927 = p__28926;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(3),null);
var cv = vec__28927;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(snapshot_28958,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),snapshot_28958));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (snapshot_28958,ks_to_gc_28959,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (snapshot_28958,ks_to_gc_28959,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(snapshot_28958,ks_to_gc_28959,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(m),ks_to_gc_28959));
});})(snapshot_28958,ks_to_gc_28959,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_28960 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)),cljs.core.cst$kw$tick);
var n_to_gc_28961 = (cljs.core.count(snapshot_28960) - cache_size__$1);
if((n_to_gc_28961 > (64))){
var ks_to_gc_28962 = taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(n_to_gc_28961,((function (snapshot_28960,n_to_gc_28961,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__28930 = (snapshot_28960.cljs$core$IFn$_invoke$arity$1 ? snapshot_28960.cljs$core$IFn$_invoke$arity$1(k) : snapshot_28960.call(null,k));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28930,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28930,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28930,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28930,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_28960,n_to_gc_28961,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys(snapshot_28960));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (ks_to_gc_28962,snapshot_28960,n_to_gc_28961,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_28962,snapshot_28960,n_to_gc_28961,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_28962,snapshot_28960,n_to_gc_28961,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(m),ks_to_gc_28962));
});})(ks_to_gc_28962,snapshot_28960,n_to_gc_28961,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(gc_running_QMARK__,false) : cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false));
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((ttl_ms_QMARK_)?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt();
return taoensso.encore._swap_cache_BANG_(state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6542__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6542__auto__)){
var and__6542__auto____$1 = cljs.core.not(fresh_QMARK_);
if(and__6542__auto____$1){
var vec__28936 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore._swap_cache_BANG_(state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6542__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6542__auto__)){
return cljs.core.not(fresh_QMARK_);
} else {
return and__6542__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__28963__delegate = function (args){
var a1 = cljs.core.first(args);
if(taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_del)){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(taoensso.encore.kw_identical_QMARK_(a2,cljs.core.cst$kw$mem_SLASH_all)){
var G__28939_28964 = state_;
var G__28940_28965 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,(0)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28939_28964,G__28940_28965) : cljs.core.reset_BANG_.call(null,G__28939_28964,G__28940_28965));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn();

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_fresh);
var args__$1 = ((fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.cst$kw$tick.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)));
var vec__28941 = (cv_fn.cljs$core$IFn$_invoke$arity$3 ? cv_fn.cljs$core$IFn$_invoke$arity$3(args__$1,fresh_QMARK_,tick) : cv_fn.call(null,args__$1,fresh_QMARK_,tick));
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (fresh_QMARK_,args__$1,tick,vec__28941,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__28944 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28944,(0),null);
var _QMARK_udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28944,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28944,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28944,(3),null);
var cv = vec__28944;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$tick,(tick + (1)),cljs.core.array_seq([args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tick,(tick + (1)));
}
});})(fresh_QMARK_,args__$1,tick,vec__28941,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dv) : cljs.core.deref.call(null,dv));
}
};
var G__28963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28966__i = 0, G__28966__a = new Array(arguments.length -  0);
while (G__28966__i < G__28966__a.length) {G__28966__a[G__28966__i] = arguments[G__28966__i + 0]; ++G__28966__i;}
  args = new cljs.core.IndexedSeq(G__28966__a,0);
} 
return G__28963__delegate.call(this,args);};
G__28963.cljs$lang$maxFixedArity = 0;
G__28963.cljs$lang$applyTo = (function (arglist__28967){
var args = cljs.core.seq(arglist__28967);
return G__28963__delegate(args);
});
G__28963.cljs$core$IFn$_invoke$arity$variadic = G__28963__delegate;
return G__28963;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return cljs.core.constantly(null);
} else {
var vspecs = cljs.core.vec(specs);
var vstates_ = (function (){var G__29060 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29060) : cljs.core.atom.call(null,G__29060));
})();
var max_win_ms = cljs.core.long$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vspecs,vstates_){
return (function (p__29061){
var vec__29062 = p__29061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(0),null);
var win_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(2),null);
var spec = vec__29062;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count(vspecs);
var nid_specs = cljs.core.count(cljs.core.filterv(((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__29065){
var vec__29066 = p__29065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__29069){
var vec__29111 = p__29069;
var _QMARK_a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(0),null);
var _QMARK_a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(1),null);
if(taoensso.encore.kw_identical_QMARK_(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_debug)){
return vstates_;
} else {
if(taoensso.encore.kw_identical_QMARK_(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_reset)){
if(taoensso.encore.kw_identical_QMARK_(_QMARK_a2,cljs.core.cst$kw$rl_SLASH_all)){
var G__29114_29152 = vstates_;
var G__29115_29153 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29114_29152,G__29115_29153) : cljs.core.reset_BANG_.call(null,G__29114_29152,G__29115_29153));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_peek);
var req_id = ((peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((function (){var and__6542__auto__ = req_id;
if(cljs.core.truth_(and__6542__auto__)){
return taoensso.encore.gc_now_QMARK_();
} else {
return and__6542__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv(((function (peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__29120){
var vec__29121 = p__29120;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(2),null);
var x__6885__auto__ = acc;
var y__6886__auto__ = udt;
return ((x__6885__auto__ > y__6886__auto__) ? x__6885__auto__ : y__6886__auto__);
});})(peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.truth_(_QMARK_vstate)){
var vec__29124 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__29127 = in_vspecs;
var seq__29128 = cljs.core.seq(vec__29127);
var first__29129 = cljs.core.first(seq__29128);
var seq__29128__$1 = cljs.core.next(seq__29128);
var vec__29130 = first__29129;
var ncalls_limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(0),null);
var win_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(1),null);
var _QMARK_spec_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(2),null);
var next_in_vspecs = seq__29128__$1;
var vec__29133 = in_vstate;
var seq__29134 = cljs.core.seq(vec__29133);
var first__29135 = cljs.core.first(seq__29134);
var seq__29134__$1 = cljs.core.next(seq__29134);
var vec__29136 = first__29135;
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29136,(0),null);
var udt_win_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29136,(1),null);
var next_in_vstate = seq__29134__$1;
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((rate_limited_QMARK_)?(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__6554__auto__ = (_QMARK_worst_limit_offence == null);
if(or__6554__auto__){
return or__6554__auto__;
} else {
var vec__29142 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29142,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29142,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})():_QMARK_worst_limit_offence);
if(next_in_vspecs){
var G__29154 = next_in_vspecs;
var G__29155 = next_in_vstate;
var G__29156 = new_out_vstate;
var G__29157 = new__QMARK_worst_limit_offence;
in_vspecs = G__29154;
in_vstate = G__29155;
out_vstate = G__29156;
_QMARK_worst_limit_offence = G__29157;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29124,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29124,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((peek_QMARK_)?_QMARK_vstate:((all_limits_pass_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__29124,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__29145){
var vec__29146 = p__29145;
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29146,(0),null);
var udt_win_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29146,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__29124,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets):vstate_with_resets));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__29149 = wlo;
var ms_wait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29149,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29149,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped(new_vstate,result);
} else {
if(peek_QMARK_){
return taoensso.encore.swapped(_QMARK_vstate,null);
} else {
return taoensso.encore.swapped(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
}
});})(peek_QMARK_,req_id,instant,vec__29111,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__29069 = null;
if (arguments.length > 0) {
var G__29158__i = 0, G__29158__a = new Array(arguments.length -  0);
while (G__29158__i < G__29158__a.length) {G__29158__a[G__29158__i] = arguments[G__29158__i + 0]; ++G__29158__i;}
  p__29069 = new cljs.core.IndexedSeq(G__29158__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__29069);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__29159){
var p__29069 = cljs.core.seq(arglist__29159);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__29069);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__29160__delegate = function (args){
var temp__4655__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__29160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29161__i = 0, G__29161__a = new Array(arguments.length -  0);
while (G__29161__i < G__29161__a.length) {G__29161__a[G__29161__i] = arguments[G__29161__i + 0]; ++G__29161__i;}
  args = new cljs.core.IndexedSeq(G__29161__a,0);
} 
return G__29160__delegate.call(this,args);};
G__29160.cljs$lang$maxFixedArity = 0;
G__29160.cljs$lang$applyTo = (function (arglist__29162){
var args = cljs.core.seq(arglist__29162);
return G__29160__delegate(args);
});
G__29160.cljs$core$IFn$_invoke$arity$variadic = G__29160__delegate;
return G__29160;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__6554__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
var or__6554__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__6554__auto____$1)){
return or__6554__auto____$1;
} else {
var or__6554__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__6554__auto____$2)){
return or__6554__auto____$2;
} else {
var or__6554__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__6554__auto____$3)){
return or__6554__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$((1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__6542__auto__ = typeof console !== 'undefined';
if(and__6542__auto__){
return console.log;
} else {
return and__6542__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29174 = arguments.length;
var i__7630__auto___29175 = (0);
while(true){
if((i__7630__auto___29175 < len__7629__auto___29174)){
args__7636__auto__.push((arguments[i__7630__auto___29175]));

var G__29176 = (i__7630__auto___29175 + (1));
i__7630__auto___29175 = G__29176;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.console_log.call(null,xs));
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq29163){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29163));
});


taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29177 = arguments.length;
var i__7630__auto___29178 = (0);
while(true){
if((i__7630__auto___29178 < len__7629__auto___29177)){
args__7636__auto__.push((arguments[i__7630__auto___29178]));

var G__29179 = (i__7630__auto___29178 + (1));
i__7630__auto___29178 = G__29179;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__29165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.spaced_str_with_nils.call(null,xs))], null);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__29165) : taoensso.encore.console_log.call(null,G__29165));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq29164){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29164));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29180 = arguments.length;
var i__7630__auto___29181 = (0);
while(true){
if((i__7630__auto___29181 < len__7629__auto___29180)){
args__7636__auto__.push((arguments[i__7630__auto___29181]));

var G__29182 = (i__7630__auto___29181 + (1));
i__7630__auto___29181 = G__29182;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__29168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_(fmt,xs)], null);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__29168) : taoensso.encore.console_log.call(null,G__29168));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq29166){
var G__29167 = cljs.core.first(seq29166);
var seq29166__$1 = cljs.core.next(seq29166);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__29167,seq29166__$1);
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29183 = arguments.length;
var i__7630__auto___29184 = (0);
while(true){
if((i__7630__auto___29184 < len__7629__auto___29183)){
args__7636__auto__.push((arguments[i__7630__auto___29184]));

var G__29185 = (i__7630__auto___29184 + (1));
i__7630__auto___29184 = G__29185;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__29170 = (taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.spaced_str_with_nils.call(null,xs));
return alert(G__29170);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq29169){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29169));
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29186 = arguments.length;
var i__7630__auto___29187 = (0);
while(true){
if((i__7630__auto___29187 < len__7629__auto___29186)){
args__7636__auto__.push((arguments[i__7630__auto___29187]));

var G__29188 = (i__7630__auto___29187 + (1));
i__7630__auto___29187 = G__29188;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__29173 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__29173);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq29171){
var G__29172 = cljs.core.first(seq29171);
var seq29171__$1 = cljs.core.next(seq29171);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__29172,seq29171__$1);
});

/**
 * Returns `js/window`'s current location as a map
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
var temp__4657__auto____$1 = js_win.location;
if(cljs.core.truth_(temp__4657__auto____$1)){
var loc = temp__4657__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((cljs.core.truth_((function (x){
var or__6554__auto__ = (x == null);
if(or__6554__auto__){
return or__6554__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,x);
}
}).call(null,params))?true:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"([:or nil? map?] params)",params,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.seq(params))?(function (){var s = (function (){var G__29191 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__29191);
})().toString();
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return s;
}
})():null);
var G__29192 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__29192) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__29196,callback){
var map__29238 = p__29196;
var map__29238__$1 = ((((!((map__29238 == null)))?((((map__29238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29238):map__29238);
var opts = map__29238__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29238__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29238__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29238__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29238__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29238__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29238__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var progress_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29238__$1,cljs.core.cst$kw$progress_DASH_fn);
var errorf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29238__$1,cljs.core.cst$kw$errorf,taoensso.encore.logf);
if(cljs.core.truth_((cljs.core.truth_(((function (map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (x){
var or__6554__auto__ = (x == null);
if(or__6554__auto__){
return or__6554__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,timeout_ms))?true:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? nat-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__6554__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__29244 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__29244) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys(cljs.core.name,params);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys(cljs.core.name,headers)], 0));
var vec__29241 = taoensso.encore.coerce_xhr_params(uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241,(0),null);
var post_content_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js((cljs.core.truth_(post_content_STAR_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8"):headers__$1));
var G__29245_29280 = xhr;
var G__29246_29281 = G__29245_29280;
var G__29247_29282 = goog.net.EventType.READY;
var G__29248_29283 = ((function (G__29246_29281,G__29247_29282,G__29245_29280,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);
});})(G__29246_29281,G__29247_29282,G__29245_29280,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listenOnce(G__29246_29281,G__29247_29282,G__29248_29283);

var G__29259_29284 = G__29245_29280;
var G__29260_29285 = goog.net.EventType.COMPLETE;
var G__29261_29286 = ((function (G__29259_29284,G__29260_29285,G__29245_29280,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?(function (){var pred__29267 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__29259_29284,G__29260_29285,G__29245_29280,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__29195_SHARP_,p2__29194_SHARP_){
return taoensso.encore.str_contains_QMARK_(p2__29194_SHARP_,p1__29195_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__29259_29284,G__29260_29285,G__29245_29280,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__29268 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__29267("/edn",expr__29268))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(pred__29267("/json",expr__29268))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(pred__29267("/xml",expr__29268))){
return cljs.core.cst$kw$xml;
} else {
if(cljs.core.truth_(pred__29267("/html",expr__29268))){
return cljs.core.cst$kw$text;
} else {
return cljs.core.cst$kw$text;
}
}
}
}
})():resp_type);
try{var G__29271 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__29271) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e29270){if((e29270 instanceof Error)){
var e = e29270;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e29270;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_content_DASH_type,(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_status,_QMARK_http_status,cljs.core.cst$kw$_QMARK_error,(function (){var or__6554__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout], true, false),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown));
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return cljs.core.cst$kw$no_DASH_content;
} else {
return null;
}
}
})()], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(cb_arg) : callback.call(null,cb_arg));
});})(G__29259_29284,G__29260_29285,G__29245_29280,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listenOnce(G__29259_29284,G__29260_29285,G__29261_29286);


var temp__4657__auto___29288 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___29288)){
var pf_29289 = temp__4657__auto___29288;
var G__29273_29290 = xhr;
var G__29274_29291 = goog.net.EventType.PROGRESS;
var G__29275_29292 = ((function (G__29273_29290,G__29274_29291,pf_29289,temp__4657__auto___29288,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__6542__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__6542__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__6542__auto__;
}
})())?(loaded / total):null);
var G__29276 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_29289.cljs$core$IFn$_invoke$arity$1 ? pf_29289.cljs$core$IFn$_invoke$arity$1(G__29276) : pf_29289.call(null,G__29276));
});})(G__29273_29290,G__29274_29291,pf_29289,temp__4657__auto___29288,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__29241,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__29238,map__29238__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listen(G__29273_29290,G__29274_29291,G__29275_29292);
} else {
}

var G__29277_29293 = xhr;
var temp__4657__auto___29294 = cljs.core.cst$kw$always;
if(cljs.core.truth_(temp__4657__auto___29294)){
var x_29295 = temp__4657__auto___29294;
G__29277_29293.setTimeoutInterval((function (){var or__6554__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___29296 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___29296)){
var x_29297 = temp__4657__auto___29296;
G__29277_29293.setWithCredentials(true);
} else {
}

var temp__4657__auto___29298 = cljs.core.cst$kw$always;
if(cljs.core.truth_(temp__4657__auto___29298)){
var x_29299 = temp__4657__auto___29298;
G__29277_29293.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e29240){if((e29240 instanceof Error)){
var e = e29240;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);

return null;
} else {
throw e29240;

}
}} else {
var G__29278_29300 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__29278_29300) : callback.call(null,G__29278_29300));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__29303 = [cljs.core.str(s)].join('');
var G__29304 = s;
return encodeURIComponent(G__29303,G__29304);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29311 = arguments.length;
var i__7630__auto___29312 = (0);
while(true){
if((i__7630__auto___29312 < len__7629__auto___29311)){
args__7636__auto__.push((arguments[i__7630__auto___29312]));

var G__29313 = (i__7630__auto___29312 + (1));
i__7630__auto___29312 = G__29313;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__29307){
var vec__29308 = p__29307;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq29305){
var G__29306 = cljs.core.first(seq29305);
var seq29305__$1 = cljs.core.next(seq29305);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__29306,seq29305__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode((function (){var or__6554__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__7334__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__29332(s__29333){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__29333__$1 = s__29333;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__29333__$1);
if(temp__4657__auto__){
var s__29333__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29333__$2)){
var c__7332__auto__ = cljs.core.chunk_first(s__29333__$2);
var size__7333__auto__ = cljs.core.count(c__7332__auto__);
var b__29335 = cljs.core.chunk_buffer(size__7333__auto__);
if((function (){var i__29334 = (0);
while(true){
if((i__29334 < size__7333__auto__)){
var vec__29344 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7332__auto__,i__29334);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__29335,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__6554__auto__ = cljs.core.seq(v);
if(or__6554__auto__){
return or__6554__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__29350 = (i__29334 + (1));
i__29334 = G__29350;
continue;
} else {
var G__29351 = (i__29334 + (1));
i__29334 = G__29351;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29335),taoensso$encore$format_query_string_$_iter__29332(cljs.core.chunk_rest(s__29333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29335),null);
}
} else {
var vec__29347 = cljs.core.first(s__29333__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29347,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__6554__auto__ = cljs.core.seq(v);
if(or__6554__auto__){
return or__6554__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__29332(cljs.core.rest(s__29333__$2)));
} else {
var G__29352 = cljs.core.rest(s__29333__$2);
s__29333__$1 = G__29352;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__7334__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29363 = arguments.length;
var i__7630__auto___29364 = (0);
while(true){
if((i__7630__auto___29364 < len__7629__auto___29363)){
args__7636__auto__.push((arguments[i__7630__auto___29364]));

var G__29365 = (i__7630__auto___29364 + (1));
i__7630__auto___29364 = G__29365;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__29355){
var vec__29356 = p__29355;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_(s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(s__$1,"="))){
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__29356,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29359 = temp__4655__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29359,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__29356,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.map_QMARK_(_PERCENT_)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29362){if((e29362 instanceof Error)){
var e = e29362;
return e;
} else {
throw e29362;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(map? %)",_PERCENT_,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq29353){
var G__29354 = cljs.core.first(seq29353);
var seq29353__$1 = cljs.core.next(seq29353);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__29354,seq29353__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__29369 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(1),null);
var qmap = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stub_ = (function taoensso$encore$_new_stub_(sfn_name){
return cljs.core.volatile_BANG_((function() { 
var G__29372__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No stubfn implementation for: "),cljs.core.str(sfn_name)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sfn_DASH_name,sfn_name,cljs.core.cst$kw$args,args], null));
};
var G__29372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29373__i = 0, G__29373__a = new Array(arguments.length -  0);
while (G__29373__i < G__29373__a.length) {G__29373__a[G__29373__i] = arguments[G__29373__i + 0]; ++G__29373__i;}
  args = new cljs.core.IndexedSeq(G__29373__a,0);
} 
return G__29372__delegate.call(this,args);};
G__29372.cljs$lang$maxFixedArity = 0;
G__29372.cljs$lang$applyTo = (function (arglist__29374){
var args = cljs.core.seq(arglist__29374);
return G__29372__delegate(args);
});
G__29372.cljs$core$IFn$_invoke$arity$variadic = G__29372__delegate;
return G__29372;
})()
);
});
taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__29376){
var map__29379 = p__29376;
var map__29379__$1 = ((((!((map__29379 == null)))?((((map__29379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29379):map__29379);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29379__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29379__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7388__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__29375__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7388__auto__);
})(),cljs.core.array_seq([(function (){var x__7388__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7388__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__7388__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7388__auto__);
})(),(function (){var x__7388__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__29375__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7388__auto__);
})(),(function (){var x__7388__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7388__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__7388__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7388__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore._swapped;

taoensso.encore.swap_val_BANG_ = taoensso.encore._swap_cache_BANG_;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29488 = arguments.length;
var i__7630__auto___29489 = (0);
while(true){
if((i__7630__auto___29489 < len__7629__auto___29488)){
args__7636__auto__.push((arguments[i__7630__auto___29489]));

var G__29490 = (i__7630__auto___29489 + (1));
i__7630__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__29387){
var vec__29388 = p__29387;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29388,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29388,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__6554__auto__ = type;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq29385){
var G__29386 = cljs.core.first(seq29385);
var seq29385__$1 = cljs.core.next(seq29385);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__29386,seq29385__$1);
});


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29491 = arguments.length;
var i__7630__auto___29492 = (0);
while(true){
if((i__7630__auto___29492 < len__7629__auto___29491)){
args__7636__auto__.push((arguments[i__7630__auto___29492]));

var G__29493 = (i__7630__auto___29492 + (1));
i__7630__auto___29492 = G__29493;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq29391){
var G__29392 = cljs.core.first(seq29391);
var seq29391__$1 = cljs.core.next(seq29391);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__29392,seq29391__$1);
});


taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__29494__delegate = function (args){
var temp__4655__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__29494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29495__i = 0, G__29495__a = new Array(arguments.length -  0);
while (G__29495__i < G__29495__a.length) {G__29495__a[G__29495__i] = arguments[G__29495__i + 0]; ++G__29495__i;}
  args = new cljs.core.IndexedSeq(G__29495__a,0);
} 
return G__29494__delegate.call(this,args);};
G__29494.cljs$lang$maxFixedArity = 0;
G__29494.cljs$lang$applyTo = (function (arglist__29496){
var args = cljs.core.seq(arglist__29496);
return G__29494__delegate(args);
});
G__29494.cljs$core$IFn$_invoke$arity$variadic = G__29494__delegate;
return G__29494;
})()
;
;})(rl))
});

taoensso.encore.logging_level = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug) : cljs.core.atom.call(null,cljs.core.cst$kw$debug));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29497 = arguments.length;
var i__7630__auto___29498 = (0);
while(true){
if((i__7630__auto___29498 < len__7629__auto___29497)){
args__7636__auto__.push((arguments[i__7630__auto___29498]));

var G__29499 = (i__7630__auto___29498 + (1));
i__7630__auto___29498 = G__29499;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__29395){
var vec__29396 = p__29395;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29396,(0),null);
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__6554__auto__ = nattempt;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq29393){
var G__29394 = cljs.core.first(seq29393);
var seq29393__$1 = cljs.core.next(seq29393);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29394,seq29393__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29500 = arguments.length;
var i__7630__auto___29501 = (0);
while(true){
if((i__7630__auto___29501 < len__7629__auto___29500)){
args__7636__auto__.push((arguments[i__7630__auto___29501]));

var G__29502 = (i__7630__auto___29501 + (1));
i__7630__auto___29501 = G__29502;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$trace) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$trace)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq29399){
var G__29400 = cljs.core.first(seq29399);
var seq29399__$1 = cljs.core.next(seq29399);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__29400,seq29399__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29503 = arguments.length;
var i__7630__auto___29504 = (0);
while(true){
if((i__7630__auto___29504 < len__7629__auto___29503)){
args__7636__auto__.push((arguments[i__7630__auto___29504]));

var G__29505 = (i__7630__auto___29504 + (1));
i__7630__auto___29504 = G__29505;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$debug)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq29401){
var G__29402 = cljs.core.first(seq29401);
var seq29401__$1 = cljs.core.next(seq29401);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__29402,seq29401__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29506 = arguments.length;
var i__7630__auto___29507 = (0);
while(true){
if((i__7630__auto___29507 < len__7629__auto___29506)){
args__7636__auto__.push((arguments[i__7630__auto___29507]));

var G__29508 = (i__7630__auto___29507 + (1));
i__7630__auto___29507 = G__29508;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$info)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq29403){
var G__29404 = cljs.core.first(seq29403);
var seq29403__$1 = cljs.core.next(seq29403);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__29404,seq29403__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29509 = arguments.length;
var i__7630__auto___29510 = (0);
while(true){
if((i__7630__auto___29510 < len__7629__auto___29509)){
args__7636__auto__.push((arguments[i__7630__auto___29510]));

var G__29511 = (i__7630__auto___29510 + (1));
i__7630__auto___29510 = G__29511;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$warn) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$warn)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq29405){
var G__29406 = cljs.core.first(seq29405);
var seq29405__$1 = cljs.core.next(seq29405);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__29406,seq29405__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29512 = arguments.length;
var i__7630__auto___29513 = (0);
while(true){
if((i__7630__auto___29513 < len__7629__auto___29512)){
args__7636__auto__.push((arguments[i__7630__auto___29513]));

var G__29514 = (i__7630__auto___29513 + (1));
i__7630__auto___29513 = G__29514;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$error)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq29407){
var G__29408 = cljs.core.first(seq29407);
var seq29407__$1 = cljs.core.next(seq29407);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__29408,seq29407__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29515 = arguments.length;
var i__7630__auto___29516 = (0);
while(true){
if((i__7630__auto___29516 < len__7629__auto___29515)){
args__7636__auto__.push((arguments[i__7630__auto___29516]));

var G__29517 = (i__7630__auto___29516 + (1));
i__7630__auto___29516 = G__29517;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fatal) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$fatal)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq29409){
var G__29410 = cljs.core.first(seq29409);
var seq29409__$1 = cljs.core.next(seq29409);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__29410,seq29409__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29518 = arguments.length;
var i__7630__auto___29519 = (0);
while(true){
if((i__7630__auto___29519 < len__7629__auto___29518)){
args__7636__auto__.push((arguments[i__7630__auto___29519]));

var G__29520 = (i__7630__auto___29519 + (1));
i__7630__auto___29519 = G__29520;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$report) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$report)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq29411){
var G__29412 = cljs.core.first(seq29411);
var seq29411__$1 = cljs.core.next(seq29411);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__29412,seq29411__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29521 = arguments.length;
var i__7630__auto___29522 = (0);
while(true){
if((i__7630__auto___29522 < len__7629__auto___29521)){
args__7636__auto__.push((arguments[i__7630__auto___29522]));

var G__29523 = (i__7630__auto___29522 + (1));
i__7630__auto___29522 = G__29523;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__29415){
var vec__29416 = p__29415;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29416,(0),null);
var comparator = (function (){var or__6554__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__29416,_QMARK_comparator){
return (function (p1__29381_SHARP_,p2__29382_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__29381_SHARP_,p2__29382_SHARP_) : comparator.call(null,p1__29381_SHARP_,p2__29382_SHARP_)) > (0))){
return p2__29382_SHARP_;
} else {
return p1__29381_SHARP_;
}
});})(comparator,vec__29416,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq29413){
var G__29414 = cljs.core.first(seq29413);
var seq29413__$1 = cljs.core.next(seq29413);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__29414,seq29413__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29524 = arguments.length;
var i__7630__auto___29525 = (0);
while(true){
if((i__7630__auto___29525 < len__7629__auto___29524)){
args__7636__auto__.push((arguments[i__7630__auto___29525]));

var G__29526 = (i__7630__auto___29525 + (1));
i__7630__auto___29525 = G__29526;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__29421){
var vec__29422 = p__29421;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(0),null);
var comparator = (function (){var or__6554__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__29422,_QMARK_comparator){
return (function (p1__29383_SHARP_,p2__29384_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__29383_SHARP_,p2__29384_SHARP_) : comparator.call(null,p1__29383_SHARP_,p2__29384_SHARP_)) < (0))){
return p2__29384_SHARP_;
} else {
return p1__29383_SHARP_;
}
});})(comparator,vec__29422,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq29419){
var G__29420 = cljs.core.first(seq29419);
var seq29419__$1 = cljs.core.next(seq29419);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__29420,seq29419__$1);
});



/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__6554__auto__ = x;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__29441,seen__$1){
while(true){
var vec__29442 = p__29441;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29442,(0),null);
var xs__$1 = vec__29442;
var temp__4657__auto__ = cljs.core.seq(xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__29527 = cljs.core.rest(s);
var G__29528 = seen__$1;
p__29441 = G__29527;
seen__$1 = G__29528;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args29445 = [];
var len__7629__auto___29529 = arguments.length;
var i__7630__auto___29530 = (0);
while(true){
if((i__7630__auto___29530 < len__7629__auto___29529)){
args29445.push((arguments[i__7630__auto___29530]));

var G__29531 = (i__7630__auto___29530 + (1));
i__7630__auto___29530 = G__29531;
continue;
} else {
}
break;
}

var G__29447 = args29445.length;
switch (G__29447) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29445.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29448,in$){
var vec__29449 = p__29448;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29449,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29449,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:((taoensso.encore.kw_identical_QMARK_(kf,cljs.core.cst$kw$keywordize))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29533 = arguments.length;
var i__7630__auto___29534 = (0);
while(true){
if((i__7630__auto___29534 < len__7629__auto___29533)){
args__7636__auto__.push((arguments[i__7630__auto___29534]));

var G__29535 = (i__7630__auto___29534 + (1));
i__7630__auto___29534 = G__29535;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__29454){
var vec__29455 = p__29454;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29455,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29455,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__29455,kf,vf){
return (function (_,v){
return v;
});})(vec__29455,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__29455,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__29455,kf,vf))
:((taoensso.encore.kw_identical_QMARK_(kf,cljs.core.cst$kw$keywordize))?((function (vf__$1,vec__29455,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__29455,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__29455,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__29455,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq29452){
var G__29453 = cljs.core.first(seq29452);
var seq29452__$1 = cljs.core.next(seq29452);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__29453,seq29452__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29536 = arguments.length;
var i__7630__auto___29537 = (0);
while(true){
if((i__7630__auto___29537 < len__7629__auto___29536)){
args__7636__auto__.push((arguments[i__7630__auto___29537]));

var G__29538 = (i__7630__auto___29537 + (1));
i__7630__auto___29537 = G__29538;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((2) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7637__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
var G__29461 = taoensso.encore._swap_cache_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29461) : cljs.core.deref.call(null,G__29461));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq29458){
var G__29459 = cljs.core.first(seq29458);
var seq29458__$1 = cljs.core.next(seq29458);
var G__29460 = cljs.core.first(seq29458__$1);
var seq29458__$2 = cljs.core.next(seq29458__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__29459,G__29460,seq29458__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__6892__auto__ = signed_idx;
var y__6893__auto__ = max_idx;
return ((x__6892__auto__ < y__6893__auto__) ? x__6892__auto__ : y__6893__auto__);
} else {
var x__6885__auto__ = (0);
var y__6886__auto__ = (signed_idx + max_idx);
return ((x__6885__auto__ > y__6886__auto__) ? x__6885__auto__ : y__6886__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29539 = arguments.length;
var i__7630__auto___29540 = (0);
while(true){
if((i__7630__auto___29540 < len__7629__auto___29539)){
args__7636__auto__.push((arguments[i__7630__auto___29540]));

var G__29541 = (i__7630__auto___29540 + (1));
i__7630__auto___29540 = G__29541;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((2) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7637__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__29465){
var map__29466 = p__29465;
var map__29466__$1 = ((((!((map__29466 == null)))?((((map__29466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29466):map__29466);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29466__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29466__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__27555__auto__ = (start_idx_STAR_ + max_len);
var n2__27556__auto__ = xlen;
if((n1__27555__auto__ > n2__27556__auto__)){
return n2__27556__auto__;
} else {
return n1__27555__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq29462){
var G__29463 = cljs.core.first(seq29462);
var seq29462__$1 = cljs.core.next(seq29462);
var G__29464 = cljs.core.first(seq29462__$1);
var seq29462__$2 = cljs.core.next(seq29462__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__29463,G__29464,seq29462__$2);
});


/**
 * Deprecated, prefer `?substr<idx` or `?substr<len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29542 = arguments.length;
var i__7630__auto___29543 = (0);
while(true){
if((i__7630__auto___29543 < len__7629__auto___29542)){
args__7636__auto__.push((arguments[i__7630__auto___29543]));

var G__29544 = (i__7630__auto___29543 + (1));
i__7630__auto___29543 = G__29544;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((2) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7637__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__29471){
var vec__29472 = p__29471;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29472,(0),null);
var vec__29475 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29475,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29475,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq29468){
var G__29469 = cljs.core.first(seq29468);
var seq29468__$1 = cljs.core.next(seq29468);
var G__29470 = cljs.core.first(seq29468__$1);
var seq29468__$2 = cljs.core.next(seq29468__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__29469,G__29470,seq29468__$2);
});



/**
 * Deprecated, prefer `?subvec<idx` or `?subvec<len`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29545 = arguments.length;
var i__7630__auto___29546 = (0);
while(true){
if((i__7630__auto___29546 < len__7629__auto___29545)){
args__7636__auto__.push((arguments[i__7630__auto___29546]));

var G__29547 = (i__7630__auto___29546 + (1));
i__7630__auto___29546 = G__29547;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((2) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7637__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__29481){
var vec__29482 = p__29481;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29482,(0),null);
var vec__29485 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29485,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29485,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq29478){
var G__29479 = cljs.core.first(seq29478);
var seq29478__$1 = cljs.core.next(seq29478);
var G__29480 = cljs.core.first(seq29478__$1);
var seq29478__$2 = cljs.core.next(seq29478__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29479,G__29480,seq29478__$2);
});


