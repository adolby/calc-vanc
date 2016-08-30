// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('app.calc');
goog.require('app.db');
goog.require('cljs.spec');
goog.require('clojure.string');
goog.require('re_frame.core');
/**
 * Throw an exception if db doesn't match the spec
 */
app.events.check_and_throw = (function app$events$check_and_throw(a_spec,db){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("spec check failed: ",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$problems,cljs.spec.explain_str(a_spec,db)], null));
}
});
app.events.check_spec_interceptor = (function (){var G__32067 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.check_and_throw,cljs.core.cst$kw$app$db_SLASH_db);
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__32067) : re_frame.core.after.call(null,G__32067));
})();
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,app.events.check_spec_interceptor,(function (_,___$1){
return app.db.default_value;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$calculate,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.events.check_spec_interceptor,(re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$results) : re_frame.core.path.call(null,cljs.core.cst$kw$results)),re_frame.core.trim_v], null),(function (_,p__32068){
var vec__32069 = p__32068;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32069,(0),null);
return app.calc.calculate(data);
}));
