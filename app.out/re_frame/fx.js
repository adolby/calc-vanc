// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18215){
var vec__18216 = p__18215;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18216,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18216,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__18227_18237 = cljs.core.cst$kw$dispatch_DASH_later;
var G__18228_18238 = ((function (G__18227_18237){
return (function (value){
var seq__18229 = cljs.core.seq(value);
var chunk__18230 = null;
var count__18231 = (0);
var i__18232 = (0);
while(true){
if((i__18232 < count__18231)){
var map__18233 = chunk__18230.cljs$core$IIndexed$_nth$arity$2(null,i__18232);
var map__18233__$1 = ((((!((map__18233 == null)))?((((map__18233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18233):map__18233);
var effect = map__18233__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18233__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18233__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__18229,chunk__18230,count__18231,i__18232,map__18233,map__18233__$1,effect,ms,dispatch,G__18227_18237){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__18229,chunk__18230,count__18231,i__18232,map__18233,map__18233__$1,effect,ms,dispatch,G__18227_18237))
,ms);
}

var G__18239 = seq__18229;
var G__18240 = chunk__18230;
var G__18241 = count__18231;
var G__18242 = (i__18232 + (1));
seq__18229 = G__18239;
chunk__18230 = G__18240;
count__18231 = G__18241;
i__18232 = G__18242;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18229);
if(temp__4657__auto__){
var seq__18229__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18229__$1)){
var c__7365__auto__ = cljs.core.chunk_first(seq__18229__$1);
var G__18243 = cljs.core.chunk_rest(seq__18229__$1);
var G__18244 = c__7365__auto__;
var G__18245 = cljs.core.count(c__7365__auto__);
var G__18246 = (0);
seq__18229 = G__18243;
chunk__18230 = G__18244;
count__18231 = G__18245;
i__18232 = G__18246;
continue;
} else {
var map__18235 = cljs.core.first(seq__18229__$1);
var map__18235__$1 = ((((!((map__18235 == null)))?((((map__18235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18235):map__18235);
var effect = map__18235__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18235__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18235__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__18229,chunk__18230,count__18231,i__18232,map__18235,map__18235__$1,effect,ms,dispatch,seq__18229__$1,temp__4657__auto__,G__18227_18237){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__18229,chunk__18230,count__18231,i__18232,map__18235,map__18235__$1,effect,ms,dispatch,seq__18229__$1,temp__4657__auto__,G__18227_18237))
,ms);
}

var G__18247 = cljs.core.next(seq__18229__$1);
var G__18248 = null;
var G__18249 = (0);
var G__18250 = (0);
seq__18229 = G__18247;
chunk__18230 = G__18248;
count__18231 = G__18249;
i__18232 = G__18250;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__18227_18237))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__18227_18237,G__18228_18238) : re_frame.fx.register.call(null,G__18227_18237,G__18228_18238));
var G__18251_18253 = cljs.core.cst$kw$dispatch;
var G__18252_18254 = ((function (G__18251_18253){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__18251_18253))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__18251_18253,G__18252_18254) : re_frame.fx.register.call(null,G__18251_18253,G__18252_18254));
var G__18259_18265 = cljs.core.cst$kw$dispatch_DASH_n;
var G__18260_18266 = ((function (G__18259_18265){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__18261 = cljs.core.seq(value);
var chunk__18262 = null;
var count__18263 = (0);
var i__18264 = (0);
while(true){
if((i__18264 < count__18263)){
var event = chunk__18262.cljs$core$IIndexed$_nth$arity$2(null,i__18264);
re_frame.router.dispatch(event);

var G__18267 = seq__18261;
var G__18268 = chunk__18262;
var G__18269 = count__18263;
var G__18270 = (i__18264 + (1));
seq__18261 = G__18267;
chunk__18262 = G__18268;
count__18263 = G__18269;
i__18264 = G__18270;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18261);
if(temp__4657__auto__){
var seq__18261__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18261__$1)){
var c__7365__auto__ = cljs.core.chunk_first(seq__18261__$1);
var G__18271 = cljs.core.chunk_rest(seq__18261__$1);
var G__18272 = c__7365__auto__;
var G__18273 = cljs.core.count(c__7365__auto__);
var G__18274 = (0);
seq__18261 = G__18271;
chunk__18262 = G__18272;
count__18263 = G__18273;
i__18264 = G__18274;
continue;
} else {
var event = cljs.core.first(seq__18261__$1);
re_frame.router.dispatch(event);

var G__18275 = cljs.core.next(seq__18261__$1);
var G__18276 = null;
var G__18277 = (0);
var G__18278 = (0);
seq__18261 = G__18275;
chunk__18262 = G__18276;
count__18263 = G__18277;
i__18264 = G__18278;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__18259_18265))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__18259_18265,G__18260_18266) : re_frame.fx.register.call(null,G__18259_18265,G__18260_18266));
var G__18279_18281 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__18280_18282 = ((function (G__18279_18281){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__18279_18281))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__18279_18281,G__18280_18282) : re_frame.fx.register.call(null,G__18279_18281,G__18280_18282));
var G__18283_18285 = cljs.core.cst$kw$db;
var G__18284_18286 = ((function (G__18283_18285){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__18283_18285))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__18283_18285,G__18284_18286) : re_frame.fx.register.call(null,G__18283_18285,G__18284_18286));
