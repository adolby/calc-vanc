// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('app.util');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('cljs.core.async');
app.util.listen = (function app$util$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__17461_17464 = el;
var G__17462_17465 = type;
var G__17463_17466 = ((function (G__17461_17464,G__17462_17465,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__17461_17464,G__17462_17465,out))
;
goog.events.listen(G__17461_17464,G__17462_17465,G__17463_17466);

return out;
});
