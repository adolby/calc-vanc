// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29557 = arguments.length;
var i__7630__auto___29558 = (0);
while(true){
if((i__7630__auto___29558 < len__7629__auto___29557)){
args__7636__auto__.push((arguments[i__7630__auto___29558]));

var G__29559 = (i__7630__auto___29558 + (1));
i__7630__auto___29558 = G__29559;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__29551){
var vec__29552 = p__29551;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29552,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__29552,_opts){
return (function (data){
var map__29555 = data;
var map__29555__$1 = ((((!((map__29555 == null)))?((((map__29555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29555):map__29555);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29555__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.force(output_)], 0));
});})(vec__29552,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq29550){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29550));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__7636__auto__ = [];
var len__7629__auto___29567 = arguments.length;
var i__7630__auto___29568 = (0);
while(true){
if((i__7630__auto___29568 < len__7629__auto___29567)){
args__7636__auto__.push((arguments[i__7630__auto___29568]));

var G__29569 = (i__7630__auto___29568 + (1));
i__7630__auto___29568 = G__29569;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__29561){
var vec__29562 = p__29561;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29562,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,(cljs.core.truth_((function (){var and__6542__auto__ = typeof console !== 'undefined';
if(and__6542__auto__){
return console.log;
} else {
return and__6542__auto__;
}
})())?(function (){var level__GT_logger = ((function (vec__29562,opts){
return (function (level){
var or__6554__auto__ = (function (){var G__29566 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__29566) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
})();
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return console.log;
}
});})(vec__29562,opts))
;
return ((function (level__GT_logger,vec__29562,opts){
return (function (data){
var logger = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_((function (){var or__6554__auto__ = cljs.core.cst$kw$raw_DASH_console_QMARK_.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
var output = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.array_seq([cljs.core.cst$kw$_QMARK_err,null], 0)));
var args = cljs.core.cons(output,cljs.core.cons(cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data)));
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
});
;})(level__GT_logger,vec__29562,opts))
})():((function (vec__29562,opts){
return (function (data){
return null;
});})(vec__29562,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq29560){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29560));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
