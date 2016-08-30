// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(58),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.58);
}
/**
 * Default (fn [data]) -> string output fn.
 *   Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var args30362 = [];
var len__7629__auto___30369 = arguments.length;
var i__7630__auto___30370 = (0);
while(true){
if((i__7630__auto___30370 < len__7629__auto___30369)){
args30362.push((arguments[i__7630__auto___30370]));

var G__30371 = (i__7630__auto___30370 + (1));
i__7630__auto___30370 = G__30371;
continue;
} else {
}
break;
}

var G__30364 = args30362.length;
switch (G__30364) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30362.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__30365 = opts;
var map__30365__$1 = ((((!((map__30365 == null)))?((((map__30365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30365):map__30365);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30365__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30365__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__30366 = data;
var map__30366__$1 = ((((!((map__30366 == null)))?((((map__30366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30366):map__30366);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,cljs.core.cst$kw$_QMARK_line);
return [cljs.core.str(clojure.string.upper_case(cljs.core.name(level))),cljs.core.str(" "),cljs.core.str("["),cljs.core.str((function (){var or__6554__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return "?";
}
})()),cljs.core.str(":"),cljs.core.str((function (){var or__6554__auto__ = _QMARK_line;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return "?";
}
})()),cljs.core.str("] - "),cljs.core.str(cljs.core.force(msg_)),cljs.core.str((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4657__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4657__auto__)){
var err = temp__4657__auto__;
return [cljs.core.str("\n"),cljs.core.str((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :timestamp-opts  ; Optional override for inherited {:pattern _ :locale _ :timezone _}
 *    :ns-whitelist    ; Optional, stacks with active config's whitelist
 *    :ns-blacklist    ; Optional, stacks with active config's blacklist
 *    :middleware-fn   ; Optional, stacks with active config's middleware
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :vargs           ; Vector of raw args
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; *context* value at log time (see `with-context`)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware
 *  returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_whitelist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ns_DASH_blacklist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__30373 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__30373) : taoensso.timbre.console_appender.call(null,G__30373));
})()], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__7636__auto__ = [];
var len__7629__auto___30376 = arguments.length;
var i__7630__auto___30377 = (0);
while(true){
if((i__7630__auto___30377 < len__7629__auto___30376)){
args__7636__auto__.push((arguments[i__7630__auto___30377]));

var G__30378 = (i__7630__auto___30377 + (1));
i__7630__auto___30377 = G__30378;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq30374){
var G__30375 = cljs.core.first(seq30374);
var seq30374__$1 = cljs.core.next(seq30374);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30375,seq30374__$1);
});

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old,m], 0));
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$level,level);
}));
});
taoensso.timbre._levels_vec = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);
taoensso.timbre._levels_set = cljs.core.set(taoensso.timbre._levels_vec);
taoensso.timbre._levels_map = cljs.core.zipmap(taoensso.timbre._levels_vec,cljs.core.next(cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_((taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x)))){
return true;
} else {
return false;
}
});
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
var or__6554__auto__ = (taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x));
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Timbre logging level",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,x], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((function (){var G__30381 = taoensso.timbre.valid_level(x);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__30381) : taoensso.timbre._levels_map.call(null,G__30381));
})() >= (function (){var G__30382 = taoensso.timbre.valid_level(y);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__30382) : taoensso.timbre._levels_map.call(null,G__30382));
})());
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.timbre.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(x,"*"))){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace([cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));

}
}
});
return ((function (compile1){
return (function() {
var taoensso$timbre$self = null;
var taoensso$timbre$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$timbre$self.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$whitelist.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$blacklist.cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x))){
return taoensso$timbre$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__30396 = [cljs.core.str(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30396) : match_QMARK_.call(null,G__30396));
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))

}
}
}
});
var taoensso$timbre$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
var vec__30397 = match_fns;
var seq__30398 = cljs.core.seq(vec__30397);
var first__30399 = cljs.core.first(seq__30398);
var seq__30398__$1 = cljs.core.next(seq__30398);
var m1 = first__30399;
var mn = seq__30398__$1;
if(mn){
return ((function (match_fns,vec__30397,seq__30398,first__30399,seq__30398__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__30397,seq__30398,first__30399,seq__30398__$1,m1,mn,compile1){
return (function (p1__30383_SHARP_){
return (p1__30383_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30383_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__30383_SHARP_.call(null,ns_str));
});})(match_fns,vec__30397,seq__30398,first__30399,seq__30398__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__30397,seq__30398,first__30399,seq__30398__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__30397,seq__30398,first__30399,seq__30398__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__30397,seq__30398,first__30399,seq__30398__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__30400 = match_fns;
var seq__30401 = cljs.core.seq(vec__30400);
var first__30402 = cljs.core.first(seq__30401);
var seq__30401__$1 = cljs.core.next(seq__30401);
var m1 = first__30402;
var mn = seq__30401__$1;
if(mn){
return ((function (match_fns,vec__30400,seq__30401,first__30402,seq__30401__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__30400,seq__30401,first__30402,seq__30401__$1,m1,mn,white,compile1){
return (function (p1__30384_SHARP_){
return (p1__30384_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30384_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__30384_SHARP_.call(null,ns_str));
});})(match_fns,vec__30400,seq__30401,first__30402,seq__30401__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__30400,seq__30401,first__30402,seq__30401__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__30400,seq__30401,first__30402,seq__30401__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__30400,seq__30401,first__30402,seq__30401__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__6542__auto__ = white;
if(cljs.core.truth_(and__6542__auto__)){
return black;
} else {
return and__6542__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str(_QMARK_ns)].join('');
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__30403 = [cljs.core.str(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__30403) : white.call(null,G__30403));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__30404 = [cljs.core.str(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__30404) : black.call(null,G__30404));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))

}
}
}
});
taoensso$timbre$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$timbre$self__1.call(this,whitelist);
case 2:
return taoensso$timbre$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$timbre$self.cljs$core$IFn$_invoke$arity$1 = taoensso$timbre$self__1;
taoensso$timbre$self.cljs$core$IFn$_invoke$arity$2 = taoensso$timbre$self__2;
return taoensso$timbre$self;
})()
;})(compile1))
})();
taoensso.timbre._compile_ns_filter = taoensso.encore.memoize_(taoensso.timbre.compile_ns_filter);
/**
 * Returns true iff given ns passes white/black lists.
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_((function (whitelist,blacklist,_QMARK_ns){
return (taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2(whitelist,blacklist) : taoensso.timbre._compile_ns_filter.call(null,whitelist,blacklist)).call(null,_QMARK_ns);
}));
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var args30405 = [];
var len__7629__auto___30414 = arguments.length;
var i__7630__auto___30415 = (0);
while(true){
if((i__7630__auto___30415 < len__7629__auto___30414)){
args30405.push((arguments[i__7630__auto___30415]));

var G__30416 = (i__7630__auto___30415 + (1));
i__7630__auto___30415 = G__30416;
continue;
} else {
}
break;
}

var G__30407 = args30405.length;
switch (G__30407) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30405.length)].join('')));

}
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,null,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__6554__auto__ = _QMARK_config;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$level,cljs.core.cst$kw$report);
var and__6542__auto__ = taoensso.timbre.level_GT__EQ_(level,min_level);
if(cljs.core.truth_(and__6542__auto__)){
var and__6542__auto____$1 = (function (){var G__30411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__30412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
var G__30413 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__30411,G__30412,G__30413) : taoensso.timbre.ns_filter.call(null,G__30411,G__30412,G__30413));
})();
if(cljs.core.truth_(and__6542__auto____$1)){
return true;
} else {
return and__6542__auto____$1;
}
} else {
return and__6542__auto__;
}
});

taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_((function (appender_id,specs){
return taoensso.encore.rate_limiter_STAR_(specs);
}));
}
/**
 * General-purpose dynamic logging context. Context will be included in
 *   appender data map at logging time.
 */
taoensso.timbre._STAR_context_STAR_ = null;
taoensso.timbre.next_vargs = (function taoensso$timbre$next_vargs(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Transforms raw vargs -> {:?err _ :?meta _ ...}, extracting:
 *   * Special error or ^:meta {} (experimental, undocumented) v0
 *   * Message format string
 *   * Message string delay
 */
taoensso.timbre.vargs__GT_margs = (function taoensso$timbre$vargs__GT_margs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = taoensso.encore.kw_identical_QMARK_(_QMARK_err,cljs.core.cst$kw$auto);
var msg_fmt_QMARK_ = taoensso.encore.kw_identical_QMARK_(msg_type,cljs.core.cst$kw$f);
var vec__30429 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30429,(0),null);
if((auto_error_QMARK_) && (taoensso.encore.error_QMARK_(v0))){
var vargs__$1 = taoensso.timbre.next_vargs(vargs);
var _QMARK_msg_fmt = ((msg_fmt_QMARK_)?(function (){var vec__30432 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30432,(0),null);
return v0__$1;
})():null);
var vargs__$2 = ((msg_fmt_QMARK_)?taoensso.timbre.next_vargs(vargs__$1):vargs__$1);
var msg_ = (new cljs.core.Delay(((function (vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__30429,v0){
return (function (){
var G__30435 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__30435)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__30435)){
return taoensso.timbre.str_join(vargs__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__30435)){
return taoensso.encore.format_STAR_(((typeof _QMARK_msg_fmt === 'string')?_QMARK_msg_fmt:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",null,"(string? ?msg-fmt)",_QMARK_msg_fmt,null,null)),vargs__$2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
}
}
});})(vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__30429,v0))
,null));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_err,v0,cljs.core.cst$kw$_QMARK_meta,null,cljs.core.cst$kw$_QMARK_msg_DASH_fmt,_QMARK_msg_fmt,cljs.core.cst$kw$msg_,msg_,cljs.core.cst$kw$vargs,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__6542__auto__ = cljs.core.map_QMARK_(v0);
if(and__6542__auto__){
return cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__6542__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__6554__auto__ = cljs.core.cst$kw$err.cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
if(auto_error_QMARK_){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,cljs.core.cst$kw$err);
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.timbre.next_vargs(vargs):vargs);
var _QMARK_msg_fmt = ((msg_fmt_QMARK_)?(function (){var vec__30436 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30436,(0),null);
return v0__$1;
})():null);
var vargs__$2 = ((msg_fmt_QMARK_)?taoensso.timbre.next_vargs(vargs__$1):vargs__$1);
var msg_ = (new cljs.core.Delay(((function (_QMARK_meta,_QMARK_err__$1,_QMARK_meta__$1,vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__30429,v0){
return (function (){
var G__30439 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__30439)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__30439)){
return taoensso.timbre.str_join(vargs__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__30439)){
return taoensso.encore.format_STAR_(((typeof _QMARK_msg_fmt === 'string')?_QMARK_msg_fmt:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",null,"(string? ?msg-fmt)",_QMARK_msg_fmt,null,null)),vargs__$2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
}
}
});})(_QMARK_meta,_QMARK_err__$1,_QMARK_meta__$1,vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__30429,v0))
,null));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_err,_QMARK_err__$1,cljs.core.cst$kw$_QMARK_meta,_QMARK_meta__$1,cljs.core.cst$kw$_QMARK_msg_DASH_fmt,_QMARK_msg_fmt,cljs.core.cst$kw$msg_,msg_,cljs.core.cst$kw$vargs,vargs__$2], null);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var args30440 = [];
var len__7629__auto___30450 = arguments.length;
var i__7630__auto___30451 = (0);
while(true){
if((i__7630__auto___30451 < len__7629__auto___30450)){
args30440.push((arguments[i__7630__auto___30451]));

var G__30452 = (i__7630__auto___30451 + (1));
i__7630__auto___30451 = G__30452;
continue;
} else {
}
break;
}

var G__30442 = args30440.length;
switch (G__30442) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30440.length)].join('')));

}
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null);
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,config))){
var instant_30454 = taoensso.encore.now_dt();
var context_30455 = taoensso.timbre._STAR_context_STAR_;
var vargs_30456 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vargs_) : cljs.core.deref.call(null,vargs_));
var margs_30457 = taoensso.timbre.vargs__GT_margs(_QMARK_err,msg_type,vargs_30456);
var data_30458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([_QMARK_base_data,margs_30457,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$hash_,cljs.core.cst$kw$instant,cljs.core.cst$kw$config,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$vargs_,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_],[(new cljs.core.Delay(((function (instant_30454,context_30455,vargs_30456,margs_30457){
return (function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,cljs.core.cst$kw$_QMARK_msg_DASH_fmt.cljs$core$IFn$_invoke$arity$1(margs_30457),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(margs_30457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$hash], null),cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(margs_30457))], null));
});})(instant_30454,context_30455,vargs_30456,margs_30457))
,null)),instant_30454,config,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null).call(null,level),_QMARK_ns_str,level,(new cljs.core.Delay(((function (instant_30454,context_30455,vargs_30456,margs_30457){
return (function (){
return cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(margs_30457);
});})(instant_30454,context_30455,vargs_30456,margs_30457))
,null)),context_30455,_QMARK_line,(new cljs.core.Delay(((function (instant_30454,context_30455,vargs_30456,margs_30457){
return (function (){
return cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(margs_30457);
});})(instant_30454,context_30455,vargs_30456,margs_30457))
,null))])], 0));
var _QMARK_data_30459 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant_30454,context_30455,vargs_30456,margs_30457,data_30458){
return (function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
});})(instant_30454,context_30455,vargs_30456,margs_30457,data_30458))
,data_30458,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__4657__auto___30460 = _QMARK_data_30459;
if(cljs.core.truth_(temp__4657__auto___30460)){
var data_30461__$1 = temp__4657__auto___30460;
var output_fn1_30462 = taoensso.encore.memoize_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
cljs.core.reduce_kv(((function (output_fn1_30462,data_30461__$1,temp__4657__auto___30460,instant_30454,context_30455,vargs_30456,margs_30457,data_30458,_QMARK_data_30459){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__6542__auto__ = cljs.core.cst$kw$enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__6542__auto__)){
return taoensso.timbre.level_GT__EQ_(level,(function (){var or__6554__auto__ = cljs.core.cst$kw$min_DASH_level.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return cljs.core.cst$kw$trace;
}
})());
} else {
return and__6542__auto__;
}
})())){
if(cljs.core.truth_((function (){var G__30443 = cljs.core.cst$kw$ns_DASH_whitelist.cljs$core$IFn$_invoke$arity$1(appender);
var G__30444 = cljs.core.cst$kw$ns_DASH_blacklist.cljs$core$IFn$_invoke$arity$1(appender);
var G__30445 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__30443,G__30444,G__30445) : taoensso.timbre.ns_filter.call(null,G__30443,G__30444,G__30445));
})())){
var rate_limit_specs = cljs.core.cst$kw$rate_DASH_limit.cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__6554__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__6554__auto__){
return or__6554__auto__;
} else {
var rl_fn = (taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2(id,rate_limit_specs) : taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs));
return cljs.core.not((function (){var G__30447 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_30461__$1));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__30447) : rl_fn.call(null,G__30447));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__30448 = appender;
var map__30448__$1 = ((((!((map__30448 == null)))?((((map__30448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30448):map__30448);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(((f == null)) || (taoensso.encore.kw_identical_QMARK_(f,cljs.core.cst$kw$inherit))){
return output_fn1_30462;
} else {
return f;
}
})();
var output_ = (new cljs.core.Delay(((function (map__30448,map__30448__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,output_fn1_30462,data_30461__$1,temp__4657__auto___30460,instant_30454,context_30455,vargs_30456,margs_30457,data_30458,_QMARK_data_30459){
return (function (){
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(data_30461__$1) : output_fn.call(null,data_30461__$1));
});})(map__30448,map__30448__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,output_fn1_30462,data_30461__$1,temp__4657__auto___30460,instant_30454,context_30455,vargs_30456,margs_30457,data_30458,_QMARK_data_30459))
,null));
var data__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_30461__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_], null));
var _QMARK_data__$1 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$middleware_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__4655__auto__)){
var mfn = temp__4655__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$2) : mfn.call(null,data__$2));
} else {
return data__$2;
}
})();
var temp__4657__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__4657__auto____$1)){
var data__$3 = temp__4657__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$3) : apfn.call(null,data__$3));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(output_fn1_30462,data_30461__$1,temp__4657__auto___30460,instant_30454,context_30455,vargs_30456,margs_30457,data_30458,_QMARK_data_30459))
,null,cljs.core.cst$kw$appenders.cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
});

taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 10;

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var args30463 = [];
var len__7629__auto___30466 = arguments.length;
var i__7630__auto___30467 = (0);
while(true){
if((i__7630__auto___30467 < len__7629__auto___30466)){
args30463.push((arguments[i__7630__auto___30467]));

var G__30468 = (i__7630__auto___30467 + (1));
i__7630__auto___30467 = G__30468;
continue;
} else {
}
break;
}

var G__30465 = args30463.length;
switch (G__30465) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30463.length)].join('')));

}
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return [cljs.core.str(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2;

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
taoensso.timbre.ordered_levels = taoensso.timbre._levels_vec;
taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;
taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,[cljs.core.str(compile_time_ns)].join(''));
});
taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__7636__auto__ = [];
var len__7629__auto___30471 = arguments.length;
var i__7630__auto___30472 = (0);
while(true){
if((i__7630__auto___30472 < len__7629__auto___30471)){
args__7636__auto__.push((arguments[i__7630__auto___30472]));

var G__30473 = (i__7630__auto___30472 + (1));
i__7630__auto___30472 = G__30473;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((0) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__7637__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq30470){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30470));
});

