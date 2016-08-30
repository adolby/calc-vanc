// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14680 = [];
var len__7629__auto___14686 = arguments.length;
var i__7630__auto___14687 = (0);
while(true){
if((i__7630__auto___14687 < len__7629__auto___14686)){
args14680.push((arguments[i__7630__auto___14687]));

var G__14688 = (i__7630__auto___14687 + (1));
i__7630__auto___14687 = G__14688;
continue;
} else {
}
break;
}

var G__14682 = args14680.length;
switch (G__14682) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14680.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14683 = (function (f,blockable,meta14684){
this.f = f;
this.blockable = blockable;
this.meta14684 = meta14684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14685,meta14684__$1){
var self__ = this;
var _14685__$1 = this;
return (new cljs.core.async.t_cljs$core$async14683(self__.f,self__.blockable,meta14684__$1));
});

cljs.core.async.t_cljs$core$async14683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14685){
var self__ = this;
var _14685__$1 = this;
return self__.meta14684;
});

cljs.core.async.t_cljs$core$async14683.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14684], null);
});

cljs.core.async.t_cljs$core$async14683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14683";

cljs.core.async.t_cljs$core$async14683.cljs$lang$ctorPrWriter = (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async14683");
});

cljs.core.async.__GT_t_cljs$core$async14683 = (function cljs$core$async$__GT_t_cljs$core$async14683(f__$1,blockable__$1,meta14684){
return (new cljs.core.async.t_cljs$core$async14683(f__$1,blockable__$1,meta14684));
});

}

return (new cljs.core.async.t_cljs$core$async14683(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14692 = [];
var len__7629__auto___14695 = arguments.length;
var i__7630__auto___14696 = (0);
while(true){
if((i__7630__auto___14696 < len__7629__auto___14695)){
args14692.push((arguments[i__7630__auto___14696]));

var G__14697 = (i__7630__auto___14696 + (1));
i__7630__auto___14696 = G__14697;
continue;
} else {
}
break;
}

var G__14694 = args14692.length;
switch (G__14694) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14692.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14699 = [];
var len__7629__auto___14702 = arguments.length;
var i__7630__auto___14703 = (0);
while(true){
if((i__7630__auto___14703 < len__7629__auto___14702)){
args14699.push((arguments[i__7630__auto___14703]));

var G__14704 = (i__7630__auto___14703 + (1));
i__7630__auto___14703 = G__14704;
continue;
} else {
}
break;
}

var G__14701 = args14699.length;
switch (G__14701) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14699.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14706 = [];
var len__7629__auto___14709 = arguments.length;
var i__7630__auto___14710 = (0);
while(true){
if((i__7630__auto___14710 < len__7629__auto___14709)){
args14706.push((arguments[i__7630__auto___14710]));

var G__14711 = (i__7630__auto___14710 + (1));
i__7630__auto___14710 = G__14711;
continue;
} else {
}
break;
}

var G__14708 = args14706.length;
switch (G__14708) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14706.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14713 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14713) : fn1.call(null,val_14713));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14713,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14713) : fn1.call(null,val_14713));
});})(val_14713,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14714 = [];
var len__7629__auto___14717 = arguments.length;
var i__7630__auto___14718 = (0);
while(true){
if((i__7630__auto___14718 < len__7629__auto___14717)){
args14714.push((arguments[i__7630__auto___14718]));

var G__14719 = (i__7630__auto___14718 + (1));
i__7630__auto___14718 = G__14719;
continue;
} else {
}
break;
}

var G__14716 = args14714.length;
switch (G__14716) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14714.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7469__auto___14721 = n;
var x_14722 = (0);
while(true){
if((x_14722 < n__7469__auto___14721)){
(a[x_14722] = (0));

var G__14723 = (x_14722 + (1));
x_14722 = G__14723;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14724 = (i + (1));
i = G__14724;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14728 = (function (alt_flag,flag,meta14729){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14729 = meta14729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14730,meta14729__$1){
var self__ = this;
var _14730__$1 = this;
return (new cljs.core.async.t_cljs$core$async14728(self__.alt_flag,self__.flag,meta14729__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14730){
var self__ = this;
var _14730__$1 = this;
return self__.meta14729;
});})(flag))
;

cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14728.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14729], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14728";

cljs.core.async.t_cljs$core$async14728.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async14728");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14728 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14728(alt_flag__$1,flag__$1,meta14729){
return (new cljs.core.async.t_cljs$core$async14728(alt_flag__$1,flag__$1,meta14729));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14728(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14734 = (function (alt_handler,flag,cb,meta14735){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14735 = meta14735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14736,meta14735__$1){
var self__ = this;
var _14736__$1 = this;
return (new cljs.core.async.t_cljs$core$async14734(self__.alt_handler,self__.flag,self__.cb,meta14735__$1));
});

cljs.core.async.t_cljs$core$async14734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14736){
var self__ = this;
var _14736__$1 = this;
return self__.meta14735;
});

cljs.core.async.t_cljs$core$async14734.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14735], null);
});

cljs.core.async.t_cljs$core$async14734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14734";

cljs.core.async.t_cljs$core$async14734.cljs$lang$ctorPrWriter = (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async14734");
});

cljs.core.async.__GT_t_cljs$core$async14734 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14734(alt_handler__$1,flag__$1,cb__$1,meta14735){
return (new cljs.core.async.t_cljs$core$async14734(alt_handler__$1,flag__$1,cb__$1,meta14735));
});

}

return (new cljs.core.async.t_cljs$core$async14734(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14737_SHARP_){
var G__14741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14737_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14741) : fret.call(null,G__14741));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14738_SHARP_){
var G__14742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14738_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14742) : fret.call(null,G__14742));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6554__auto__ = wport;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14743 = (i + (1));
i = G__14743;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6554__auto__ = ret;
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6542__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6542__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6542__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7636__auto__ = [];
var len__7629__auto___14749 = arguments.length;
var i__7630__auto___14750 = (0);
while(true){
if((i__7630__auto___14750 < len__7629__auto___14749)){
args__7636__auto__.push((arguments[i__7630__auto___14750]));

var G__14751 = (i__7630__auto___14750 + (1));
i__7630__auto___14750 = G__14751;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((1) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7637__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14746){
var map__14747 = p__14746;
var map__14747__$1 = ((((!((map__14747 == null)))?((((map__14747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14747):map__14747);
var opts = map__14747__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14744){
var G__14745 = cljs.core.first(seq14744);
var seq14744__$1 = cljs.core.next(seq14744);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14745,seq14744__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14752 = [];
var len__7629__auto___14802 = arguments.length;
var i__7630__auto___14803 = (0);
while(true){
if((i__7630__auto___14803 < len__7629__auto___14802)){
args14752.push((arguments[i__7630__auto___14803]));

var G__14804 = (i__7630__auto___14803 + (1));
i__7630__auto___14803 = G__14804;
continue;
} else {
}
break;
}

var G__14754 = args14752.length;
switch (G__14754) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14752.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14635__auto___14806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___14806){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___14806){
return (function (state_14778){
var state_val_14779 = (state_14778[(1)]);
if((state_val_14779 === (7))){
var inst_14774 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
var statearr_14780_14807 = state_14778__$1;
(statearr_14780_14807[(2)] = inst_14774);

(statearr_14780_14807[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (1))){
var state_14778__$1 = state_14778;
var statearr_14781_14808 = state_14778__$1;
(statearr_14781_14808[(2)] = null);

(statearr_14781_14808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (4))){
var inst_14757 = (state_14778[(7)]);
var inst_14757__$1 = (state_14778[(2)]);
var inst_14758 = (inst_14757__$1 == null);
var state_14778__$1 = (function (){var statearr_14782 = state_14778;
(statearr_14782[(7)] = inst_14757__$1);

return statearr_14782;
})();
if(cljs.core.truth_(inst_14758)){
var statearr_14783_14809 = state_14778__$1;
(statearr_14783_14809[(1)] = (5));

} else {
var statearr_14784_14810 = state_14778__$1;
(statearr_14784_14810[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (13))){
var state_14778__$1 = state_14778;
var statearr_14785_14811 = state_14778__$1;
(statearr_14785_14811[(2)] = null);

(statearr_14785_14811[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (6))){
var inst_14757 = (state_14778[(7)]);
var state_14778__$1 = state_14778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14778__$1,(11),to,inst_14757);
} else {
if((state_val_14779 === (3))){
var inst_14776 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14778__$1,inst_14776);
} else {
if((state_val_14779 === (12))){
var state_14778__$1 = state_14778;
var statearr_14786_14812 = state_14778__$1;
(statearr_14786_14812[(2)] = null);

(statearr_14786_14812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (2))){
var state_14778__$1 = state_14778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14778__$1,(4),from);
} else {
if((state_val_14779 === (11))){
var inst_14767 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
if(cljs.core.truth_(inst_14767)){
var statearr_14787_14813 = state_14778__$1;
(statearr_14787_14813[(1)] = (12));

} else {
var statearr_14788_14814 = state_14778__$1;
(statearr_14788_14814[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (9))){
var state_14778__$1 = state_14778;
var statearr_14789_14815 = state_14778__$1;
(statearr_14789_14815[(2)] = null);

(statearr_14789_14815[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (5))){
var state_14778__$1 = state_14778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14790_14816 = state_14778__$1;
(statearr_14790_14816[(1)] = (8));

} else {
var statearr_14791_14817 = state_14778__$1;
(statearr_14791_14817[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (14))){
var inst_14772 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
var statearr_14792_14818 = state_14778__$1;
(statearr_14792_14818[(2)] = inst_14772);

(statearr_14792_14818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (10))){
var inst_14764 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
var statearr_14793_14819 = state_14778__$1;
(statearr_14793_14819[(2)] = inst_14764);

(statearr_14793_14819[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14779 === (8))){
var inst_14761 = cljs.core.async.close_BANG_(to);
var state_14778__$1 = state_14778;
var statearr_14794_14820 = state_14778__$1;
(statearr_14794_14820[(2)] = inst_14761);

(statearr_14794_14820[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
});})(c__14635__auto___14806))
;
return ((function (switch__14521__auto__,c__14635__auto___14806){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_14798 = [null,null,null,null,null,null,null,null];
(statearr_14798[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_14798[(1)] = (1));

return statearr_14798;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_14778){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_14778);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e14799){if((e14799 instanceof Object)){
var ex__14525__auto__ = e14799;
var statearr_14800_14821 = state_14778;
(statearr_14800_14821[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14778);

return cljs.core.cst$kw$recur;
} else {
throw e14799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__14822 = state_14778;
state_14778 = G__14822;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_14778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_14778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___14806))
})();
var state__14637__auto__ = (function (){var statearr_14801 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_14801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___14806);

return statearr_14801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___14806))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15010){
var vec__15011 = p__15010;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15011,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15011,(1),null);
var job = vec__15011;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14635__auto___15197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___15197,res,vec__15011,v,p,job,jobs,results){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___15197,res,vec__15011,v,p,job,jobs,results){
return (function (state_15018){
var state_val_15019 = (state_15018[(1)]);
if((state_val_15019 === (1))){
var state_15018__$1 = state_15018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15018__$1,(2),res,v);
} else {
if((state_val_15019 === (2))){
var inst_15015 = (state_15018[(2)]);
var inst_15016 = cljs.core.async.close_BANG_(res);
var state_15018__$1 = (function (){var statearr_15020 = state_15018;
(statearr_15020[(7)] = inst_15015);

return statearr_15020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15018__$1,inst_15016);
} else {
return null;
}
}
});})(c__14635__auto___15197,res,vec__15011,v,p,job,jobs,results))
;
return ((function (switch__14521__auto__,c__14635__auto___15197,res,vec__15011,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0 = (function (){
var statearr_15024 = [null,null,null,null,null,null,null,null];
(statearr_15024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__);

(statearr_15024[(1)] = (1));

return statearr_15024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1 = (function (state_15018){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15018);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15025){if((e15025 instanceof Object)){
var ex__14525__auto__ = e15025;
var statearr_15026_15198 = state_15018;
(statearr_15026_15198[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15018);

return cljs.core.cst$kw$recur;
} else {
throw e15025;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15199 = state_15018;
state_15018 = G__15199;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = function(state_15018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1.call(this,state_15018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___15197,res,vec__15011,v,p,job,jobs,results))
})();
var state__14637__auto__ = (function (){var statearr_15027 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___15197);

return statearr_15027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___15197,res,vec__15011,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15028){
var vec__15029 = p__15028;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15029,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15029,(1),null);
var job = vec__15029;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7469__auto___15200 = n;
var __15201 = (0);
while(true){
if((__15201 < n__7469__auto___15200)){
var G__15032_15202 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15032_15202) {
case "compute":
var c__14635__auto___15204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15201,c__14635__auto___15204,G__15032_15202,n__7469__auto___15200,jobs,results,process,async){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (__15201,c__14635__auto___15204,G__15032_15202,n__7469__auto___15200,jobs,results,process,async){
return (function (state_15045){
var state_val_15046 = (state_15045[(1)]);
if((state_val_15046 === (1))){
var state_15045__$1 = state_15045;
var statearr_15047_15205 = state_15045__$1;
(statearr_15047_15205[(2)] = null);

(statearr_15047_15205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15046 === (2))){
var state_15045__$1 = state_15045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15045__$1,(4),jobs);
} else {
if((state_val_15046 === (3))){
var inst_15043 = (state_15045[(2)]);
var state_15045__$1 = state_15045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15045__$1,inst_15043);
} else {
if((state_val_15046 === (4))){
var inst_15035 = (state_15045[(2)]);
var inst_15036 = process(inst_15035);
var state_15045__$1 = state_15045;
if(cljs.core.truth_(inst_15036)){
var statearr_15048_15206 = state_15045__$1;
(statearr_15048_15206[(1)] = (5));

} else {
var statearr_15049_15207 = state_15045__$1;
(statearr_15049_15207[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15046 === (5))){
var state_15045__$1 = state_15045;
var statearr_15050_15208 = state_15045__$1;
(statearr_15050_15208[(2)] = null);

(statearr_15050_15208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15046 === (6))){
var state_15045__$1 = state_15045;
var statearr_15051_15209 = state_15045__$1;
(statearr_15051_15209[(2)] = null);

(statearr_15051_15209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15046 === (7))){
var inst_15041 = (state_15045[(2)]);
var state_15045__$1 = state_15045;
var statearr_15052_15210 = state_15045__$1;
(statearr_15052_15210[(2)] = inst_15041);

(statearr_15052_15210[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15201,c__14635__auto___15204,G__15032_15202,n__7469__auto___15200,jobs,results,process,async))
;
return ((function (__15201,switch__14521__auto__,c__14635__auto___15204,G__15032_15202,n__7469__auto___15200,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0 = (function (){
var statearr_15056 = [null,null,null,null,null,null,null];
(statearr_15056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__);

(statearr_15056[(1)] = (1));

return statearr_15056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1 = (function (state_15045){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15045);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15057){if((e15057 instanceof Object)){
var ex__14525__auto__ = e15057;
var statearr_15058_15211 = state_15045;
(statearr_15058_15211[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15045);

return cljs.core.cst$kw$recur;
} else {
throw e15057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15212 = state_15045;
state_15045 = G__15212;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = function(state_15045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1.call(this,state_15045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__;
})()
;})(__15201,switch__14521__auto__,c__14635__auto___15204,G__15032_15202,n__7469__auto___15200,jobs,results,process,async))
})();
var state__14637__auto__ = (function (){var statearr_15059 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___15204);

return statearr_15059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(__15201,c__14635__auto___15204,G__15032_15202,n__7469__auto___15200,jobs,results,process,async))
);


break;
case "async":
var c__14635__auto___15213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15201,c__14635__auto___15213,G__15032_15202,n__7469__auto___15200,jobs,results,process,async){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (__15201,c__14635__auto___15213,G__15032_15202,n__7469__auto___15200,jobs,results,process,async){
return (function (state_15072){
var state_val_15073 = (state_15072[(1)]);
if((state_val_15073 === (1))){
var state_15072__$1 = state_15072;
var statearr_15074_15214 = state_15072__$1;
(statearr_15074_15214[(2)] = null);

(statearr_15074_15214[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15073 === (2))){
var state_15072__$1 = state_15072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15072__$1,(4),jobs);
} else {
if((state_val_15073 === (3))){
var inst_15070 = (state_15072[(2)]);
var state_15072__$1 = state_15072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15072__$1,inst_15070);
} else {
if((state_val_15073 === (4))){
var inst_15062 = (state_15072[(2)]);
var inst_15063 = async(inst_15062);
var state_15072__$1 = state_15072;
if(cljs.core.truth_(inst_15063)){
var statearr_15075_15215 = state_15072__$1;
(statearr_15075_15215[(1)] = (5));

} else {
var statearr_15076_15216 = state_15072__$1;
(statearr_15076_15216[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15073 === (5))){
var state_15072__$1 = state_15072;
var statearr_15077_15217 = state_15072__$1;
(statearr_15077_15217[(2)] = null);

(statearr_15077_15217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15073 === (6))){
var state_15072__$1 = state_15072;
var statearr_15078_15218 = state_15072__$1;
(statearr_15078_15218[(2)] = null);

(statearr_15078_15218[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15073 === (7))){
var inst_15068 = (state_15072[(2)]);
var state_15072__$1 = state_15072;
var statearr_15079_15219 = state_15072__$1;
(statearr_15079_15219[(2)] = inst_15068);

(statearr_15079_15219[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15201,c__14635__auto___15213,G__15032_15202,n__7469__auto___15200,jobs,results,process,async))
;
return ((function (__15201,switch__14521__auto__,c__14635__auto___15213,G__15032_15202,n__7469__auto___15200,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0 = (function (){
var statearr_15083 = [null,null,null,null,null,null,null];
(statearr_15083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__);

(statearr_15083[(1)] = (1));

return statearr_15083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1 = (function (state_15072){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15072);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15084){if((e15084 instanceof Object)){
var ex__14525__auto__ = e15084;
var statearr_15085_15220 = state_15072;
(statearr_15085_15220[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15072);

return cljs.core.cst$kw$recur;
} else {
throw e15084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15221 = state_15072;
state_15072 = G__15221;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = function(state_15072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1.call(this,state_15072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__;
})()
;})(__15201,switch__14521__auto__,c__14635__auto___15213,G__15032_15202,n__7469__auto___15200,jobs,results,process,async))
})();
var state__14637__auto__ = (function (){var statearr_15086 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___15213);

return statearr_15086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(__15201,c__14635__auto___15213,G__15032_15202,n__7469__auto___15200,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15222 = (__15201 + (1));
__15201 = G__15222;
continue;
} else {
}
break;
}

var c__14635__auto___15223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___15223,jobs,results,process,async){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___15223,jobs,results,process,async){
return (function (state_15108){
var state_val_15109 = (state_15108[(1)]);
if((state_val_15109 === (1))){
var state_15108__$1 = state_15108;
var statearr_15110_15224 = state_15108__$1;
(statearr_15110_15224[(2)] = null);

(statearr_15110_15224[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (2))){
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15108__$1,(4),from);
} else {
if((state_val_15109 === (3))){
var inst_15106 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15108__$1,inst_15106);
} else {
if((state_val_15109 === (4))){
var inst_15089 = (state_15108[(7)]);
var inst_15089__$1 = (state_15108[(2)]);
var inst_15090 = (inst_15089__$1 == null);
var state_15108__$1 = (function (){var statearr_15111 = state_15108;
(statearr_15111[(7)] = inst_15089__$1);

return statearr_15111;
})();
if(cljs.core.truth_(inst_15090)){
var statearr_15112_15225 = state_15108__$1;
(statearr_15112_15225[(1)] = (5));

} else {
var statearr_15113_15226 = state_15108__$1;
(statearr_15113_15226[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (5))){
var inst_15092 = cljs.core.async.close_BANG_(jobs);
var state_15108__$1 = state_15108;
var statearr_15114_15227 = state_15108__$1;
(statearr_15114_15227[(2)] = inst_15092);

(statearr_15114_15227[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (6))){
var inst_15089 = (state_15108[(7)]);
var inst_15094 = (state_15108[(8)]);
var inst_15094__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15096 = [inst_15089,inst_15094__$1];
var inst_15097 = (new cljs.core.PersistentVector(null,2,(5),inst_15095,inst_15096,null));
var state_15108__$1 = (function (){var statearr_15115 = state_15108;
(statearr_15115[(8)] = inst_15094__$1);

return statearr_15115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15108__$1,(8),jobs,inst_15097);
} else {
if((state_val_15109 === (7))){
var inst_15104 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15116_15228 = state_15108__$1;
(statearr_15116_15228[(2)] = inst_15104);

(statearr_15116_15228[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (8))){
var inst_15094 = (state_15108[(8)]);
var inst_15099 = (state_15108[(2)]);
var state_15108__$1 = (function (){var statearr_15117 = state_15108;
(statearr_15117[(9)] = inst_15099);

return statearr_15117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15108__$1,(9),results,inst_15094);
} else {
if((state_val_15109 === (9))){
var inst_15101 = (state_15108[(2)]);
var state_15108__$1 = (function (){var statearr_15118 = state_15108;
(statearr_15118[(10)] = inst_15101);

return statearr_15118;
})();
var statearr_15119_15229 = state_15108__$1;
(statearr_15119_15229[(2)] = null);

(statearr_15119_15229[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
});})(c__14635__auto___15223,jobs,results,process,async))
;
return ((function (switch__14521__auto__,c__14635__auto___15223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0 = (function (){
var statearr_15123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__);

(statearr_15123[(1)] = (1));

return statearr_15123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1 = (function (state_15108){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15108);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15124){if((e15124 instanceof Object)){
var ex__14525__auto__ = e15124;
var statearr_15125_15230 = state_15108;
(statearr_15125_15230[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15108);

return cljs.core.cst$kw$recur;
} else {
throw e15124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15231 = state_15108;
state_15108 = G__15231;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = function(state_15108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1.call(this,state_15108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___15223,jobs,results,process,async))
})();
var state__14637__auto__ = (function (){var statearr_15126 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___15223);

return statearr_15126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___15223,jobs,results,process,async))
);


var c__14635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto__,jobs,results,process,async){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto__,jobs,results,process,async){
return (function (state_15164){
var state_val_15165 = (state_15164[(1)]);
if((state_val_15165 === (7))){
var inst_15160 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
var statearr_15166_15232 = state_15164__$1;
(statearr_15166_15232[(2)] = inst_15160);

(statearr_15166_15232[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (20))){
var state_15164__$1 = state_15164;
var statearr_15167_15233 = state_15164__$1;
(statearr_15167_15233[(2)] = null);

(statearr_15167_15233[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (1))){
var state_15164__$1 = state_15164;
var statearr_15168_15234 = state_15164__$1;
(statearr_15168_15234[(2)] = null);

(statearr_15168_15234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (4))){
var inst_15129 = (state_15164[(7)]);
var inst_15129__$1 = (state_15164[(2)]);
var inst_15130 = (inst_15129__$1 == null);
var state_15164__$1 = (function (){var statearr_15169 = state_15164;
(statearr_15169[(7)] = inst_15129__$1);

return statearr_15169;
})();
if(cljs.core.truth_(inst_15130)){
var statearr_15170_15235 = state_15164__$1;
(statearr_15170_15235[(1)] = (5));

} else {
var statearr_15171_15236 = state_15164__$1;
(statearr_15171_15236[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (15))){
var inst_15142 = (state_15164[(8)]);
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15164__$1,(18),to,inst_15142);
} else {
if((state_val_15165 === (21))){
var inst_15155 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
var statearr_15172_15237 = state_15164__$1;
(statearr_15172_15237[(2)] = inst_15155);

(statearr_15172_15237[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (13))){
var inst_15157 = (state_15164[(2)]);
var state_15164__$1 = (function (){var statearr_15173 = state_15164;
(statearr_15173[(9)] = inst_15157);

return statearr_15173;
})();
var statearr_15174_15238 = state_15164__$1;
(statearr_15174_15238[(2)] = null);

(statearr_15174_15238[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (6))){
var inst_15129 = (state_15164[(7)]);
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15164__$1,(11),inst_15129);
} else {
if((state_val_15165 === (17))){
var inst_15150 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
if(cljs.core.truth_(inst_15150)){
var statearr_15175_15239 = state_15164__$1;
(statearr_15175_15239[(1)] = (19));

} else {
var statearr_15176_15240 = state_15164__$1;
(statearr_15176_15240[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (3))){
var inst_15162 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15164__$1,inst_15162);
} else {
if((state_val_15165 === (12))){
var inst_15139 = (state_15164[(10)]);
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15164__$1,(14),inst_15139);
} else {
if((state_val_15165 === (2))){
var state_15164__$1 = state_15164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15164__$1,(4),results);
} else {
if((state_val_15165 === (19))){
var state_15164__$1 = state_15164;
var statearr_15177_15241 = state_15164__$1;
(statearr_15177_15241[(2)] = null);

(statearr_15177_15241[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (11))){
var inst_15139 = (state_15164[(2)]);
var state_15164__$1 = (function (){var statearr_15178 = state_15164;
(statearr_15178[(10)] = inst_15139);

return statearr_15178;
})();
var statearr_15179_15242 = state_15164__$1;
(statearr_15179_15242[(2)] = null);

(statearr_15179_15242[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (9))){
var state_15164__$1 = state_15164;
var statearr_15180_15243 = state_15164__$1;
(statearr_15180_15243[(2)] = null);

(statearr_15180_15243[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (5))){
var state_15164__$1 = state_15164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15181_15244 = state_15164__$1;
(statearr_15181_15244[(1)] = (8));

} else {
var statearr_15182_15245 = state_15164__$1;
(statearr_15182_15245[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (14))){
var inst_15142 = (state_15164[(8)]);
var inst_15144 = (state_15164[(11)]);
var inst_15142__$1 = (state_15164[(2)]);
var inst_15143 = (inst_15142__$1 == null);
var inst_15144__$1 = cljs.core.not(inst_15143);
var state_15164__$1 = (function (){var statearr_15183 = state_15164;
(statearr_15183[(8)] = inst_15142__$1);

(statearr_15183[(11)] = inst_15144__$1);

return statearr_15183;
})();
if(inst_15144__$1){
var statearr_15184_15246 = state_15164__$1;
(statearr_15184_15246[(1)] = (15));

} else {
var statearr_15185_15247 = state_15164__$1;
(statearr_15185_15247[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (16))){
var inst_15144 = (state_15164[(11)]);
var state_15164__$1 = state_15164;
var statearr_15186_15248 = state_15164__$1;
(statearr_15186_15248[(2)] = inst_15144);

(statearr_15186_15248[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (10))){
var inst_15136 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
var statearr_15187_15249 = state_15164__$1;
(statearr_15187_15249[(2)] = inst_15136);

(statearr_15187_15249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (18))){
var inst_15147 = (state_15164[(2)]);
var state_15164__$1 = state_15164;
var statearr_15188_15250 = state_15164__$1;
(statearr_15188_15250[(2)] = inst_15147);

(statearr_15188_15250[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15165 === (8))){
var inst_15133 = cljs.core.async.close_BANG_(to);
var state_15164__$1 = state_15164;
var statearr_15189_15251 = state_15164__$1;
(statearr_15189_15251[(2)] = inst_15133);

(statearr_15189_15251[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14635__auto__,jobs,results,process,async))
;
return ((function (switch__14521__auto__,c__14635__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0 = (function (){
var statearr_15193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__);

(statearr_15193[(1)] = (1));

return statearr_15193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1 = (function (state_15164){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15164);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15194){if((e15194 instanceof Object)){
var ex__14525__auto__ = e15194;
var statearr_15195_15252 = state_15164;
(statearr_15195_15252[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15164);

return cljs.core.cst$kw$recur;
} else {
throw e15194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15253 = state_15164;
state_15164 = G__15253;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__ = function(state_15164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1.call(this,state_15164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto__,jobs,results,process,async))
})();
var state__14637__auto__ = (function (){var statearr_15196 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto__);

return statearr_15196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto__,jobs,results,process,async))
);

return c__14635__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15254 = [];
var len__7629__auto___15257 = arguments.length;
var i__7630__auto___15258 = (0);
while(true){
if((i__7630__auto___15258 < len__7629__auto___15257)){
args15254.push((arguments[i__7630__auto___15258]));

var G__15259 = (i__7630__auto___15258 + (1));
i__7630__auto___15258 = G__15259;
continue;
} else {
}
break;
}

var G__15256 = args15254.length;
switch (G__15256) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15254.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15261 = [];
var len__7629__auto___15264 = arguments.length;
var i__7630__auto___15265 = (0);
while(true){
if((i__7630__auto___15265 < len__7629__auto___15264)){
args15261.push((arguments[i__7630__auto___15265]));

var G__15266 = (i__7630__auto___15265 + (1));
i__7630__auto___15265 = G__15266;
continue;
} else {
}
break;
}

var G__15263 = args15261.length;
switch (G__15263) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15261.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15268 = [];
var len__7629__auto___15321 = arguments.length;
var i__7630__auto___15322 = (0);
while(true){
if((i__7630__auto___15322 < len__7629__auto___15321)){
args15268.push((arguments[i__7630__auto___15322]));

var G__15323 = (i__7630__auto___15322 + (1));
i__7630__auto___15322 = G__15323;
continue;
} else {
}
break;
}

var G__15270 = args15268.length;
switch (G__15270) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15268.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14635__auto___15325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___15325,tc,fc){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___15325,tc,fc){
return (function (state_15296){
var state_val_15297 = (state_15296[(1)]);
if((state_val_15297 === (7))){
var inst_15292 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
var statearr_15298_15326 = state_15296__$1;
(statearr_15298_15326[(2)] = inst_15292);

(statearr_15298_15326[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (1))){
var state_15296__$1 = state_15296;
var statearr_15299_15327 = state_15296__$1;
(statearr_15299_15327[(2)] = null);

(statearr_15299_15327[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (4))){
var inst_15273 = (state_15296[(7)]);
var inst_15273__$1 = (state_15296[(2)]);
var inst_15274 = (inst_15273__$1 == null);
var state_15296__$1 = (function (){var statearr_15300 = state_15296;
(statearr_15300[(7)] = inst_15273__$1);

return statearr_15300;
})();
if(cljs.core.truth_(inst_15274)){
var statearr_15301_15328 = state_15296__$1;
(statearr_15301_15328[(1)] = (5));

} else {
var statearr_15302_15329 = state_15296__$1;
(statearr_15302_15329[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (13))){
var state_15296__$1 = state_15296;
var statearr_15303_15330 = state_15296__$1;
(statearr_15303_15330[(2)] = null);

(statearr_15303_15330[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (6))){
var inst_15273 = (state_15296[(7)]);
var inst_15279 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15273) : p.call(null,inst_15273));
var state_15296__$1 = state_15296;
if(cljs.core.truth_(inst_15279)){
var statearr_15304_15331 = state_15296__$1;
(statearr_15304_15331[(1)] = (9));

} else {
var statearr_15305_15332 = state_15296__$1;
(statearr_15305_15332[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (3))){
var inst_15294 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15296__$1,inst_15294);
} else {
if((state_val_15297 === (12))){
var state_15296__$1 = state_15296;
var statearr_15306_15333 = state_15296__$1;
(statearr_15306_15333[(2)] = null);

(statearr_15306_15333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (2))){
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15296__$1,(4),ch);
} else {
if((state_val_15297 === (11))){
var inst_15273 = (state_15296[(7)]);
var inst_15283 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15296__$1,(8),inst_15283,inst_15273);
} else {
if((state_val_15297 === (9))){
var state_15296__$1 = state_15296;
var statearr_15307_15334 = state_15296__$1;
(statearr_15307_15334[(2)] = tc);

(statearr_15307_15334[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (5))){
var inst_15276 = cljs.core.async.close_BANG_(tc);
var inst_15277 = cljs.core.async.close_BANG_(fc);
var state_15296__$1 = (function (){var statearr_15308 = state_15296;
(statearr_15308[(8)] = inst_15276);

return statearr_15308;
})();
var statearr_15309_15335 = state_15296__$1;
(statearr_15309_15335[(2)] = inst_15277);

(statearr_15309_15335[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (14))){
var inst_15290 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
var statearr_15310_15336 = state_15296__$1;
(statearr_15310_15336[(2)] = inst_15290);

(statearr_15310_15336[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (10))){
var state_15296__$1 = state_15296;
var statearr_15311_15337 = state_15296__$1;
(statearr_15311_15337[(2)] = fc);

(statearr_15311_15337[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15297 === (8))){
var inst_15285 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
if(cljs.core.truth_(inst_15285)){
var statearr_15312_15338 = state_15296__$1;
(statearr_15312_15338[(1)] = (12));

} else {
var statearr_15313_15339 = state_15296__$1;
(statearr_15313_15339[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
});})(c__14635__auto___15325,tc,fc))
;
return ((function (switch__14521__auto__,c__14635__auto___15325,tc,fc){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_15317 = [null,null,null,null,null,null,null,null,null];
(statearr_15317[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_15317[(1)] = (1));

return statearr_15317;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_15296){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15296);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15318){if((e15318 instanceof Object)){
var ex__14525__auto__ = e15318;
var statearr_15319_15340 = state_15296;
(statearr_15319_15340[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15296);

return cljs.core.cst$kw$recur;
} else {
throw e15318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15341 = state_15296;
state_15296 = G__15341;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_15296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_15296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___15325,tc,fc))
})();
var state__14637__auto__ = (function (){var statearr_15320 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___15325);

return statearr_15320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___15325,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto__){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto__){
return (function (state_15405){
var state_val_15406 = (state_15405[(1)]);
if((state_val_15406 === (7))){
var inst_15401 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
var statearr_15407_15428 = state_15405__$1;
(statearr_15407_15428[(2)] = inst_15401);

(statearr_15407_15428[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15406 === (1))){
var inst_15385 = init;
var state_15405__$1 = (function (){var statearr_15408 = state_15405;
(statearr_15408[(7)] = inst_15385);

return statearr_15408;
})();
var statearr_15409_15429 = state_15405__$1;
(statearr_15409_15429[(2)] = null);

(statearr_15409_15429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15406 === (4))){
var inst_15388 = (state_15405[(8)]);
var inst_15388__$1 = (state_15405[(2)]);
var inst_15389 = (inst_15388__$1 == null);
var state_15405__$1 = (function (){var statearr_15410 = state_15405;
(statearr_15410[(8)] = inst_15388__$1);

return statearr_15410;
})();
if(cljs.core.truth_(inst_15389)){
var statearr_15411_15430 = state_15405__$1;
(statearr_15411_15430[(1)] = (5));

} else {
var statearr_15412_15431 = state_15405__$1;
(statearr_15412_15431[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15406 === (6))){
var inst_15388 = (state_15405[(8)]);
var inst_15392 = (state_15405[(9)]);
var inst_15385 = (state_15405[(7)]);
var inst_15392__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15385,inst_15388) : f.call(null,inst_15385,inst_15388));
var inst_15393 = cljs.core.reduced_QMARK_(inst_15392__$1);
var state_15405__$1 = (function (){var statearr_15413 = state_15405;
(statearr_15413[(9)] = inst_15392__$1);

return statearr_15413;
})();
if(inst_15393){
var statearr_15414_15432 = state_15405__$1;
(statearr_15414_15432[(1)] = (8));

} else {
var statearr_15415_15433 = state_15405__$1;
(statearr_15415_15433[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15406 === (3))){
var inst_15403 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15405__$1,inst_15403);
} else {
if((state_val_15406 === (2))){
var state_15405__$1 = state_15405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15405__$1,(4),ch);
} else {
if((state_val_15406 === (9))){
var inst_15392 = (state_15405[(9)]);
var inst_15385 = inst_15392;
var state_15405__$1 = (function (){var statearr_15416 = state_15405;
(statearr_15416[(7)] = inst_15385);

return statearr_15416;
})();
var statearr_15417_15434 = state_15405__$1;
(statearr_15417_15434[(2)] = null);

(statearr_15417_15434[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15406 === (5))){
var inst_15385 = (state_15405[(7)]);
var state_15405__$1 = state_15405;
var statearr_15418_15435 = state_15405__$1;
(statearr_15418_15435[(2)] = inst_15385);

(statearr_15418_15435[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15406 === (10))){
var inst_15399 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
var statearr_15419_15436 = state_15405__$1;
(statearr_15419_15436[(2)] = inst_15399);

(statearr_15419_15436[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15406 === (8))){
var inst_15392 = (state_15405[(9)]);
var inst_15395 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15392) : cljs.core.deref.call(null,inst_15392));
var state_15405__$1 = state_15405;
var statearr_15420_15437 = state_15405__$1;
(statearr_15420_15437[(2)] = inst_15395);

(statearr_15420_15437[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
});})(c__14635__auto__))
;
return ((function (switch__14521__auto__,c__14635__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14522__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14522__auto____0 = (function (){
var statearr_15424 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15424[(0)] = cljs$core$async$reduce_$_state_machine__14522__auto__);

(statearr_15424[(1)] = (1));

return statearr_15424;
});
var cljs$core$async$reduce_$_state_machine__14522__auto____1 = (function (state_15405){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15405);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15425){if((e15425 instanceof Object)){
var ex__14525__auto__ = e15425;
var statearr_15426_15438 = state_15405;
(statearr_15426_15438[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15405);

return cljs.core.cst$kw$recur;
} else {
throw e15425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15439 = state_15405;
state_15405 = G__15439;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14522__auto__ = function(state_15405){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14522__auto____1.call(this,state_15405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14522__auto____0;
cljs$core$async$reduce_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14522__auto____1;
return cljs$core$async$reduce_$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto__))
})();
var state__14637__auto__ = (function (){var statearr_15427 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto__);

return statearr_15427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto__))
);

return c__14635__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15440 = [];
var len__7629__auto___15492 = arguments.length;
var i__7630__auto___15493 = (0);
while(true){
if((i__7630__auto___15493 < len__7629__auto___15492)){
args15440.push((arguments[i__7630__auto___15493]));

var G__15494 = (i__7630__auto___15493 + (1));
i__7630__auto___15493 = G__15494;
continue;
} else {
}
break;
}

var G__15442 = args15440.length;
switch (G__15442) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15440.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto__){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto__){
return (function (state_15467){
var state_val_15468 = (state_15467[(1)]);
if((state_val_15468 === (7))){
var inst_15449 = (state_15467[(2)]);
var state_15467__$1 = state_15467;
var statearr_15469_15496 = state_15467__$1;
(statearr_15469_15496[(2)] = inst_15449);

(statearr_15469_15496[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (1))){
var inst_15443 = cljs.core.seq(coll);
var inst_15444 = inst_15443;
var state_15467__$1 = (function (){var statearr_15470 = state_15467;
(statearr_15470[(7)] = inst_15444);

return statearr_15470;
})();
var statearr_15471_15497 = state_15467__$1;
(statearr_15471_15497[(2)] = null);

(statearr_15471_15497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (4))){
var inst_15444 = (state_15467[(7)]);
var inst_15447 = cljs.core.first(inst_15444);
var state_15467__$1 = state_15467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15467__$1,(7),ch,inst_15447);
} else {
if((state_val_15468 === (13))){
var inst_15461 = (state_15467[(2)]);
var state_15467__$1 = state_15467;
var statearr_15472_15498 = state_15467__$1;
(statearr_15472_15498[(2)] = inst_15461);

(statearr_15472_15498[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (6))){
var inst_15452 = (state_15467[(2)]);
var state_15467__$1 = state_15467;
if(cljs.core.truth_(inst_15452)){
var statearr_15473_15499 = state_15467__$1;
(statearr_15473_15499[(1)] = (8));

} else {
var statearr_15474_15500 = state_15467__$1;
(statearr_15474_15500[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (3))){
var inst_15465 = (state_15467[(2)]);
var state_15467__$1 = state_15467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15467__$1,inst_15465);
} else {
if((state_val_15468 === (12))){
var state_15467__$1 = state_15467;
var statearr_15475_15501 = state_15467__$1;
(statearr_15475_15501[(2)] = null);

(statearr_15475_15501[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (2))){
var inst_15444 = (state_15467[(7)]);
var state_15467__$1 = state_15467;
if(cljs.core.truth_(inst_15444)){
var statearr_15476_15502 = state_15467__$1;
(statearr_15476_15502[(1)] = (4));

} else {
var statearr_15477_15503 = state_15467__$1;
(statearr_15477_15503[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (11))){
var inst_15458 = cljs.core.async.close_BANG_(ch);
var state_15467__$1 = state_15467;
var statearr_15478_15504 = state_15467__$1;
(statearr_15478_15504[(2)] = inst_15458);

(statearr_15478_15504[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (9))){
var state_15467__$1 = state_15467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15479_15505 = state_15467__$1;
(statearr_15479_15505[(1)] = (11));

} else {
var statearr_15480_15506 = state_15467__$1;
(statearr_15480_15506[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (5))){
var inst_15444 = (state_15467[(7)]);
var state_15467__$1 = state_15467;
var statearr_15481_15507 = state_15467__$1;
(statearr_15481_15507[(2)] = inst_15444);

(statearr_15481_15507[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (10))){
var inst_15463 = (state_15467[(2)]);
var state_15467__$1 = state_15467;
var statearr_15482_15508 = state_15467__$1;
(statearr_15482_15508[(2)] = inst_15463);

(statearr_15482_15508[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15468 === (8))){
var inst_15444 = (state_15467[(7)]);
var inst_15454 = cljs.core.next(inst_15444);
var inst_15444__$1 = inst_15454;
var state_15467__$1 = (function (){var statearr_15483 = state_15467;
(statearr_15483[(7)] = inst_15444__$1);

return statearr_15483;
})();
var statearr_15484_15509 = state_15467__$1;
(statearr_15484_15509[(2)] = null);

(statearr_15484_15509[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
});})(c__14635__auto__))
;
return ((function (switch__14521__auto__,c__14635__auto__){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_15488 = [null,null,null,null,null,null,null,null];
(statearr_15488[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_15488[(1)] = (1));

return statearr_15488;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_15467){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15467);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15489){if((e15489 instanceof Object)){
var ex__14525__auto__ = e15489;
var statearr_15490_15510 = state_15467;
(statearr_15490_15510[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15467);

return cljs.core.cst$kw$recur;
} else {
throw e15489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__15511 = state_15467;
state_15467 = G__15511;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_15467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_15467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto__))
})();
var state__14637__auto__ = (function (){var statearr_15491 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto__);

return statearr_15491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto__))
);

return c__14635__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7217__auto__ = (((_ == null))?null:_);
var m__7218__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7218__auto__.call(null,_));
} else {
var m__7218__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7218__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7218__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7218__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7218__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7218__auto__.call(null,m,ch));
} else {
var m__7218__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7218__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7218__auto__.call(null,m));
} else {
var m__7218__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7218__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15740 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15740) : cljs.core.atom.call(null,G__15740));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15741 = (function (mult,ch,cs,meta15742){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15742 = meta15742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15743,meta15742__$1){
var self__ = this;
var _15743__$1 = this;
return (new cljs.core.async.t_cljs$core$async15741(self__.mult,self__.ch,self__.cs,meta15742__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15743){
var self__ = this;
var _15743__$1 = this;
return self__.meta15742;
});})(cs))
;

cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15744_15968 = self__.cs;
var G__15745_15969 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15744_15968,G__15745_15969) : cljs.core.reset_BANG_.call(null,G__15744_15968,G__15745_15969));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15741.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15742], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15741";

cljs.core.async.t_cljs$core$async15741.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async15741");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15741 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15741(mult__$1,ch__$1,cs__$1,meta15742){
return (new cljs.core.async.t_cljs$core$async15741(mult__$1,ch__$1,cs__$1,meta15742));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15741(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14635__auto___15970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___15970,cs,m,dchan,dctr,done){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___15970,cs,m,dchan,dctr,done){
return (function (state_15880){
var state_val_15881 = (state_15880[(1)]);
if((state_val_15881 === (7))){
var inst_15876 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15882_15971 = state_15880__$1;
(statearr_15882_15971[(2)] = inst_15876);

(statearr_15882_15971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (20))){
var inst_15779 = (state_15880[(7)]);
var inst_15791 = cljs.core.first(inst_15779);
var inst_15792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15791,(0),null);
var inst_15793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15791,(1),null);
var state_15880__$1 = (function (){var statearr_15883 = state_15880;
(statearr_15883[(8)] = inst_15792);

return statearr_15883;
})();
if(cljs.core.truth_(inst_15793)){
var statearr_15884_15972 = state_15880__$1;
(statearr_15884_15972[(1)] = (22));

} else {
var statearr_15885_15973 = state_15880__$1;
(statearr_15885_15973[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (27))){
var inst_15748 = (state_15880[(9)]);
var inst_15828 = (state_15880[(10)]);
var inst_15821 = (state_15880[(11)]);
var inst_15823 = (state_15880[(12)]);
var inst_15828__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15821,inst_15823);
var inst_15829 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15828__$1,inst_15748,done);
var state_15880__$1 = (function (){var statearr_15886 = state_15880;
(statearr_15886[(10)] = inst_15828__$1);

return statearr_15886;
})();
if(cljs.core.truth_(inst_15829)){
var statearr_15887_15974 = state_15880__$1;
(statearr_15887_15974[(1)] = (30));

} else {
var statearr_15888_15975 = state_15880__$1;
(statearr_15888_15975[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (1))){
var state_15880__$1 = state_15880;
var statearr_15889_15976 = state_15880__$1;
(statearr_15889_15976[(2)] = null);

(statearr_15889_15976[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (24))){
var inst_15779 = (state_15880[(7)]);
var inst_15798 = (state_15880[(2)]);
var inst_15799 = cljs.core.next(inst_15779);
var inst_15757 = inst_15799;
var inst_15758 = null;
var inst_15759 = (0);
var inst_15760 = (0);
var state_15880__$1 = (function (){var statearr_15890 = state_15880;
(statearr_15890[(13)] = inst_15759);

(statearr_15890[(14)] = inst_15757);

(statearr_15890[(15)] = inst_15758);

(statearr_15890[(16)] = inst_15798);

(statearr_15890[(17)] = inst_15760);

return statearr_15890;
})();
var statearr_15891_15977 = state_15880__$1;
(statearr_15891_15977[(2)] = null);

(statearr_15891_15977[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (39))){
var state_15880__$1 = state_15880;
var statearr_15895_15978 = state_15880__$1;
(statearr_15895_15978[(2)] = null);

(statearr_15895_15978[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (4))){
var inst_15748 = (state_15880[(9)]);
var inst_15748__$1 = (state_15880[(2)]);
var inst_15749 = (inst_15748__$1 == null);
var state_15880__$1 = (function (){var statearr_15896 = state_15880;
(statearr_15896[(9)] = inst_15748__$1);

return statearr_15896;
})();
if(cljs.core.truth_(inst_15749)){
var statearr_15897_15979 = state_15880__$1;
(statearr_15897_15979[(1)] = (5));

} else {
var statearr_15898_15980 = state_15880__$1;
(statearr_15898_15980[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (15))){
var inst_15759 = (state_15880[(13)]);
var inst_15757 = (state_15880[(14)]);
var inst_15758 = (state_15880[(15)]);
var inst_15760 = (state_15880[(17)]);
var inst_15775 = (state_15880[(2)]);
var inst_15776 = (inst_15760 + (1));
var tmp15892 = inst_15759;
var tmp15893 = inst_15757;
var tmp15894 = inst_15758;
var inst_15757__$1 = tmp15893;
var inst_15758__$1 = tmp15894;
var inst_15759__$1 = tmp15892;
var inst_15760__$1 = inst_15776;
var state_15880__$1 = (function (){var statearr_15899 = state_15880;
(statearr_15899[(13)] = inst_15759__$1);

(statearr_15899[(14)] = inst_15757__$1);

(statearr_15899[(15)] = inst_15758__$1);

(statearr_15899[(17)] = inst_15760__$1);

(statearr_15899[(18)] = inst_15775);

return statearr_15899;
})();
var statearr_15900_15981 = state_15880__$1;
(statearr_15900_15981[(2)] = null);

(statearr_15900_15981[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (21))){
var inst_15802 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15904_15982 = state_15880__$1;
(statearr_15904_15982[(2)] = inst_15802);

(statearr_15904_15982[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (31))){
var inst_15828 = (state_15880[(10)]);
var inst_15832 = done(null);
var inst_15833 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15828);
var state_15880__$1 = (function (){var statearr_15905 = state_15880;
(statearr_15905[(19)] = inst_15832);

return statearr_15905;
})();
var statearr_15906_15983 = state_15880__$1;
(statearr_15906_15983[(2)] = inst_15833);

(statearr_15906_15983[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (32))){
var inst_15821 = (state_15880[(11)]);
var inst_15823 = (state_15880[(12)]);
var inst_15822 = (state_15880[(20)]);
var inst_15820 = (state_15880[(21)]);
var inst_15835 = (state_15880[(2)]);
var inst_15836 = (inst_15823 + (1));
var tmp15901 = inst_15821;
var tmp15902 = inst_15822;
var tmp15903 = inst_15820;
var inst_15820__$1 = tmp15903;
var inst_15821__$1 = tmp15901;
var inst_15822__$1 = tmp15902;
var inst_15823__$1 = inst_15836;
var state_15880__$1 = (function (){var statearr_15907 = state_15880;
(statearr_15907[(11)] = inst_15821__$1);

(statearr_15907[(12)] = inst_15823__$1);

(statearr_15907[(20)] = inst_15822__$1);

(statearr_15907[(22)] = inst_15835);

(statearr_15907[(21)] = inst_15820__$1);

return statearr_15907;
})();
var statearr_15908_15984 = state_15880__$1;
(statearr_15908_15984[(2)] = null);

(statearr_15908_15984[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (40))){
var inst_15848 = (state_15880[(23)]);
var inst_15852 = done(null);
var inst_15853 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15848);
var state_15880__$1 = (function (){var statearr_15909 = state_15880;
(statearr_15909[(24)] = inst_15852);

return statearr_15909;
})();
var statearr_15910_15985 = state_15880__$1;
(statearr_15910_15985[(2)] = inst_15853);

(statearr_15910_15985[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (33))){
var inst_15839 = (state_15880[(25)]);
var inst_15841 = cljs.core.chunked_seq_QMARK_(inst_15839);
var state_15880__$1 = state_15880;
if(inst_15841){
var statearr_15911_15986 = state_15880__$1;
(statearr_15911_15986[(1)] = (36));

} else {
var statearr_15912_15987 = state_15880__$1;
(statearr_15912_15987[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (13))){
var inst_15769 = (state_15880[(26)]);
var inst_15772 = cljs.core.async.close_BANG_(inst_15769);
var state_15880__$1 = state_15880;
var statearr_15913_15988 = state_15880__$1;
(statearr_15913_15988[(2)] = inst_15772);

(statearr_15913_15988[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (22))){
var inst_15792 = (state_15880[(8)]);
var inst_15795 = cljs.core.async.close_BANG_(inst_15792);
var state_15880__$1 = state_15880;
var statearr_15914_15989 = state_15880__$1;
(statearr_15914_15989[(2)] = inst_15795);

(statearr_15914_15989[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (36))){
var inst_15839 = (state_15880[(25)]);
var inst_15843 = cljs.core.chunk_first(inst_15839);
var inst_15844 = cljs.core.chunk_rest(inst_15839);
var inst_15845 = cljs.core.count(inst_15843);
var inst_15820 = inst_15844;
var inst_15821 = inst_15843;
var inst_15822 = inst_15845;
var inst_15823 = (0);
var state_15880__$1 = (function (){var statearr_15915 = state_15880;
(statearr_15915[(11)] = inst_15821);

(statearr_15915[(12)] = inst_15823);

(statearr_15915[(20)] = inst_15822);

(statearr_15915[(21)] = inst_15820);

return statearr_15915;
})();
var statearr_15916_15990 = state_15880__$1;
(statearr_15916_15990[(2)] = null);

(statearr_15916_15990[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (41))){
var inst_15839 = (state_15880[(25)]);
var inst_15855 = (state_15880[(2)]);
var inst_15856 = cljs.core.next(inst_15839);
var inst_15820 = inst_15856;
var inst_15821 = null;
var inst_15822 = (0);
var inst_15823 = (0);
var state_15880__$1 = (function (){var statearr_15917 = state_15880;
(statearr_15917[(11)] = inst_15821);

(statearr_15917[(12)] = inst_15823);

(statearr_15917[(27)] = inst_15855);

(statearr_15917[(20)] = inst_15822);

(statearr_15917[(21)] = inst_15820);

return statearr_15917;
})();
var statearr_15918_15991 = state_15880__$1;
(statearr_15918_15991[(2)] = null);

(statearr_15918_15991[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (43))){
var state_15880__$1 = state_15880;
var statearr_15919_15992 = state_15880__$1;
(statearr_15919_15992[(2)] = null);

(statearr_15919_15992[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (29))){
var inst_15864 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15920_15993 = state_15880__$1;
(statearr_15920_15993[(2)] = inst_15864);

(statearr_15920_15993[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (44))){
var inst_15873 = (state_15880[(2)]);
var state_15880__$1 = (function (){var statearr_15921 = state_15880;
(statearr_15921[(28)] = inst_15873);

return statearr_15921;
})();
var statearr_15922_15994 = state_15880__$1;
(statearr_15922_15994[(2)] = null);

(statearr_15922_15994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (6))){
var inst_15812 = (state_15880[(29)]);
var inst_15811 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15812__$1 = cljs.core.keys(inst_15811);
var inst_15813 = cljs.core.count(inst_15812__$1);
var inst_15814 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15813) : cljs.core.reset_BANG_.call(null,dctr,inst_15813));
var inst_15819 = cljs.core.seq(inst_15812__$1);
var inst_15820 = inst_15819;
var inst_15821 = null;
var inst_15822 = (0);
var inst_15823 = (0);
var state_15880__$1 = (function (){var statearr_15923 = state_15880;
(statearr_15923[(30)] = inst_15814);

(statearr_15923[(11)] = inst_15821);

(statearr_15923[(12)] = inst_15823);

(statearr_15923[(20)] = inst_15822);

(statearr_15923[(29)] = inst_15812__$1);

(statearr_15923[(21)] = inst_15820);

return statearr_15923;
})();
var statearr_15924_15995 = state_15880__$1;
(statearr_15924_15995[(2)] = null);

(statearr_15924_15995[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (28))){
var inst_15839 = (state_15880[(25)]);
var inst_15820 = (state_15880[(21)]);
var inst_15839__$1 = cljs.core.seq(inst_15820);
var state_15880__$1 = (function (){var statearr_15925 = state_15880;
(statearr_15925[(25)] = inst_15839__$1);

return statearr_15925;
})();
if(inst_15839__$1){
var statearr_15926_15996 = state_15880__$1;
(statearr_15926_15996[(1)] = (33));

} else {
var statearr_15927_15997 = state_15880__$1;
(statearr_15927_15997[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (25))){
var inst_15823 = (state_15880[(12)]);
var inst_15822 = (state_15880[(20)]);
var inst_15825 = (inst_15823 < inst_15822);
var inst_15826 = inst_15825;
var state_15880__$1 = state_15880;
if(cljs.core.truth_(inst_15826)){
var statearr_15928_15998 = state_15880__$1;
(statearr_15928_15998[(1)] = (27));

} else {
var statearr_15929_15999 = state_15880__$1;
(statearr_15929_15999[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (34))){
var state_15880__$1 = state_15880;
var statearr_15930_16000 = state_15880__$1;
(statearr_15930_16000[(2)] = null);

(statearr_15930_16000[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (17))){
var state_15880__$1 = state_15880;
var statearr_15931_16001 = state_15880__$1;
(statearr_15931_16001[(2)] = null);

(statearr_15931_16001[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (3))){
var inst_15878 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15880__$1,inst_15878);
} else {
if((state_val_15881 === (12))){
var inst_15807 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15932_16002 = state_15880__$1;
(statearr_15932_16002[(2)] = inst_15807);

(statearr_15932_16002[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (2))){
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15880__$1,(4),ch);
} else {
if((state_val_15881 === (23))){
var state_15880__$1 = state_15880;
var statearr_15933_16003 = state_15880__$1;
(statearr_15933_16003[(2)] = null);

(statearr_15933_16003[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (35))){
var inst_15862 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15934_16004 = state_15880__$1;
(statearr_15934_16004[(2)] = inst_15862);

(statearr_15934_16004[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (19))){
var inst_15779 = (state_15880[(7)]);
var inst_15783 = cljs.core.chunk_first(inst_15779);
var inst_15784 = cljs.core.chunk_rest(inst_15779);
var inst_15785 = cljs.core.count(inst_15783);
var inst_15757 = inst_15784;
var inst_15758 = inst_15783;
var inst_15759 = inst_15785;
var inst_15760 = (0);
var state_15880__$1 = (function (){var statearr_15935 = state_15880;
(statearr_15935[(13)] = inst_15759);

(statearr_15935[(14)] = inst_15757);

(statearr_15935[(15)] = inst_15758);

(statearr_15935[(17)] = inst_15760);

return statearr_15935;
})();
var statearr_15936_16005 = state_15880__$1;
(statearr_15936_16005[(2)] = null);

(statearr_15936_16005[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (11))){
var inst_15757 = (state_15880[(14)]);
var inst_15779 = (state_15880[(7)]);
var inst_15779__$1 = cljs.core.seq(inst_15757);
var state_15880__$1 = (function (){var statearr_15937 = state_15880;
(statearr_15937[(7)] = inst_15779__$1);

return statearr_15937;
})();
if(inst_15779__$1){
var statearr_15938_16006 = state_15880__$1;
(statearr_15938_16006[(1)] = (16));

} else {
var statearr_15939_16007 = state_15880__$1;
(statearr_15939_16007[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (9))){
var inst_15809 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15940_16008 = state_15880__$1;
(statearr_15940_16008[(2)] = inst_15809);

(statearr_15940_16008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (5))){
var inst_15755 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15756 = cljs.core.seq(inst_15755);
var inst_15757 = inst_15756;
var inst_15758 = null;
var inst_15759 = (0);
var inst_15760 = (0);
var state_15880__$1 = (function (){var statearr_15941 = state_15880;
(statearr_15941[(13)] = inst_15759);

(statearr_15941[(14)] = inst_15757);

(statearr_15941[(15)] = inst_15758);

(statearr_15941[(17)] = inst_15760);

return statearr_15941;
})();
var statearr_15942_16009 = state_15880__$1;
(statearr_15942_16009[(2)] = null);

(statearr_15942_16009[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (14))){
var state_15880__$1 = state_15880;
var statearr_15943_16010 = state_15880__$1;
(statearr_15943_16010[(2)] = null);

(statearr_15943_16010[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (45))){
var inst_15870 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15944_16011 = state_15880__$1;
(statearr_15944_16011[(2)] = inst_15870);

(statearr_15944_16011[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (26))){
var inst_15812 = (state_15880[(29)]);
var inst_15866 = (state_15880[(2)]);
var inst_15867 = cljs.core.seq(inst_15812);
var state_15880__$1 = (function (){var statearr_15945 = state_15880;
(statearr_15945[(31)] = inst_15866);

return statearr_15945;
})();
if(inst_15867){
var statearr_15946_16012 = state_15880__$1;
(statearr_15946_16012[(1)] = (42));

} else {
var statearr_15947_16013 = state_15880__$1;
(statearr_15947_16013[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (16))){
var inst_15779 = (state_15880[(7)]);
var inst_15781 = cljs.core.chunked_seq_QMARK_(inst_15779);
var state_15880__$1 = state_15880;
if(inst_15781){
var statearr_15948_16014 = state_15880__$1;
(statearr_15948_16014[(1)] = (19));

} else {
var statearr_15949_16015 = state_15880__$1;
(statearr_15949_16015[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (38))){
var inst_15859 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15950_16016 = state_15880__$1;
(statearr_15950_16016[(2)] = inst_15859);

(statearr_15950_16016[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (30))){
var state_15880__$1 = state_15880;
var statearr_15951_16017 = state_15880__$1;
(statearr_15951_16017[(2)] = null);

(statearr_15951_16017[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (10))){
var inst_15758 = (state_15880[(15)]);
var inst_15760 = (state_15880[(17)]);
var inst_15768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15758,inst_15760);
var inst_15769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15768,(0),null);
var inst_15770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15768,(1),null);
var state_15880__$1 = (function (){var statearr_15952 = state_15880;
(statearr_15952[(26)] = inst_15769);

return statearr_15952;
})();
if(cljs.core.truth_(inst_15770)){
var statearr_15953_16018 = state_15880__$1;
(statearr_15953_16018[(1)] = (13));

} else {
var statearr_15954_16019 = state_15880__$1;
(statearr_15954_16019[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (18))){
var inst_15805 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15955_16020 = state_15880__$1;
(statearr_15955_16020[(2)] = inst_15805);

(statearr_15955_16020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (42))){
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15880__$1,(45),dchan);
} else {
if((state_val_15881 === (37))){
var inst_15748 = (state_15880[(9)]);
var inst_15848 = (state_15880[(23)]);
var inst_15839 = (state_15880[(25)]);
var inst_15848__$1 = cljs.core.first(inst_15839);
var inst_15849 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15848__$1,inst_15748,done);
var state_15880__$1 = (function (){var statearr_15956 = state_15880;
(statearr_15956[(23)] = inst_15848__$1);

return statearr_15956;
})();
if(cljs.core.truth_(inst_15849)){
var statearr_15957_16021 = state_15880__$1;
(statearr_15957_16021[(1)] = (39));

} else {
var statearr_15958_16022 = state_15880__$1;
(statearr_15958_16022[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15881 === (8))){
var inst_15759 = (state_15880[(13)]);
var inst_15760 = (state_15880[(17)]);
var inst_15762 = (inst_15760 < inst_15759);
var inst_15763 = inst_15762;
var state_15880__$1 = state_15880;
if(cljs.core.truth_(inst_15763)){
var statearr_15959_16023 = state_15880__$1;
(statearr_15959_16023[(1)] = (10));

} else {
var statearr_15960_16024 = state_15880__$1;
(statearr_15960_16024[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14635__auto___15970,cs,m,dchan,dctr,done))
;
return ((function (switch__14521__auto__,c__14635__auto___15970,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14522__auto__ = null;
var cljs$core$async$mult_$_state_machine__14522__auto____0 = (function (){
var statearr_15964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15964[(0)] = cljs$core$async$mult_$_state_machine__14522__auto__);

(statearr_15964[(1)] = (1));

return statearr_15964;
});
var cljs$core$async$mult_$_state_machine__14522__auto____1 = (function (state_15880){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_15880);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e15965){if((e15965 instanceof Object)){
var ex__14525__auto__ = e15965;
var statearr_15966_16025 = state_15880;
(statearr_15966_16025[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15880);

return cljs.core.cst$kw$recur;
} else {
throw e15965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__16026 = state_15880;
state_15880 = G__16026;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14522__auto__ = function(state_15880){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14522__auto____1.call(this,state_15880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14522__auto____0;
cljs$core$async$mult_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14522__auto____1;
return cljs$core$async$mult_$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___15970,cs,m,dchan,dctr,done))
})();
var state__14637__auto__ = (function (){var statearr_15967 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_15967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___15970);

return statearr_15967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___15970,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16027 = [];
var len__7629__auto___16030 = arguments.length;
var i__7630__auto___16031 = (0);
while(true){
if((i__7630__auto___16031 < len__7629__auto___16030)){
args16027.push((arguments[i__7630__auto___16031]));

var G__16032 = (i__7630__auto___16031 + (1));
i__7630__auto___16031 = G__16032;
continue;
} else {
}
break;
}

var G__16029 = args16027.length;
switch (G__16029) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16027.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7218__auto__.call(null,m,ch));
} else {
var m__7218__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7218__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7218__auto__.call(null,m,ch));
} else {
var m__7218__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7218__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7218__auto__.call(null,m));
} else {
var m__7218__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7218__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7218__auto__.call(null,m,state_map));
} else {
var m__7218__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7218__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7217__auto__ = (((m == null))?null:m);
var m__7218__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7218__auto__.call(null,m,mode));
} else {
var m__7218__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7218__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7636__auto__ = [];
var len__7629__auto___16044 = arguments.length;
var i__7630__auto___16045 = (0);
while(true){
if((i__7630__auto___16045 < len__7629__auto___16044)){
args__7636__auto__.push((arguments[i__7630__auto___16045]));

var G__16046 = (i__7630__auto___16045 + (1));
i__7630__auto___16045 = G__16046;
continue;
} else {
}
break;
}

var argseq__7637__auto__ = ((((3) < args__7636__auto__.length))?(new cljs.core.IndexedSeq(args__7636__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7637__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16038){
var map__16039 = p__16038;
var map__16039__$1 = ((((!((map__16039 == null)))?((((map__16039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16039):map__16039);
var opts = map__16039__$1;
var statearr_16041_16047 = state;
(statearr_16041_16047[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16039,map__16039__$1,opts){
return (function (val){
var statearr_16042_16048 = state;
(statearr_16042_16048[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16039,map__16039__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16043_16049 = state;
(statearr_16043_16049[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16034){
var G__16035 = cljs.core.first(seq16034);
var seq16034__$1 = cljs.core.next(seq16034);
var G__16036 = cljs.core.first(seq16034__$1);
var seq16034__$2 = cljs.core.next(seq16034__$1);
var G__16037 = cljs.core.first(seq16034__$2);
var seq16034__$3 = cljs.core.next(seq16034__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16035,G__16036,G__16037,seq16034__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16218 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16218) : cljs.core.atom.call(null,G__16218));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16219 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16220){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16220 = meta16220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16221,meta16220__$1){
var self__ = this;
var _16221__$1 = this;
return (new cljs.core.async.t_cljs$core$async16219(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16220__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16221){
var self__ = this;
var _16221__$1 = this;
return self__.meta16220;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16222_16386 = self__.cs;
var G__16223_16387 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16222_16386,G__16223_16387) : cljs.core.reset_BANG_.call(null,G__16222_16386,G__16223_16387));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16220], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16219";

cljs.core.async.t_cljs$core$async16219.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async16219");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16219 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16220){
return (new cljs.core.async.t_cljs$core$async16219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16220));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16219(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14635__auto___16388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___16388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___16388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16323){
var state_val_16324 = (state_16323[(1)]);
if((state_val_16324 === (7))){
var inst_16239 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
var statearr_16325_16389 = state_16323__$1;
(statearr_16325_16389[(2)] = inst_16239);

(statearr_16325_16389[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (20))){
var inst_16251 = (state_16323[(7)]);
var state_16323__$1 = state_16323;
var statearr_16326_16390 = state_16323__$1;
(statearr_16326_16390[(2)] = inst_16251);

(statearr_16326_16390[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (27))){
var state_16323__$1 = state_16323;
var statearr_16327_16391 = state_16323__$1;
(statearr_16327_16391[(2)] = null);

(statearr_16327_16391[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (1))){
var inst_16227 = (state_16323[(8)]);
var inst_16227__$1 = calc_state();
var inst_16229 = (inst_16227__$1 == null);
var inst_16230 = cljs.core.not(inst_16229);
var state_16323__$1 = (function (){var statearr_16328 = state_16323;
(statearr_16328[(8)] = inst_16227__$1);

return statearr_16328;
})();
if(inst_16230){
var statearr_16329_16392 = state_16323__$1;
(statearr_16329_16392[(1)] = (2));

} else {
var statearr_16330_16393 = state_16323__$1;
(statearr_16330_16393[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (24))){
var inst_16283 = (state_16323[(9)]);
var inst_16297 = (state_16323[(10)]);
var inst_16274 = (state_16323[(11)]);
var inst_16297__$1 = (inst_16274.cljs$core$IFn$_invoke$arity$1 ? inst_16274.cljs$core$IFn$_invoke$arity$1(inst_16283) : inst_16274.call(null,inst_16283));
var state_16323__$1 = (function (){var statearr_16331 = state_16323;
(statearr_16331[(10)] = inst_16297__$1);

return statearr_16331;
})();
if(cljs.core.truth_(inst_16297__$1)){
var statearr_16332_16394 = state_16323__$1;
(statearr_16332_16394[(1)] = (29));

} else {
var statearr_16333_16395 = state_16323__$1;
(statearr_16333_16395[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (4))){
var inst_16242 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
if(cljs.core.truth_(inst_16242)){
var statearr_16334_16396 = state_16323__$1;
(statearr_16334_16396[(1)] = (8));

} else {
var statearr_16335_16397 = state_16323__$1;
(statearr_16335_16397[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (15))){
var inst_16268 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
if(cljs.core.truth_(inst_16268)){
var statearr_16336_16398 = state_16323__$1;
(statearr_16336_16398[(1)] = (19));

} else {
var statearr_16337_16399 = state_16323__$1;
(statearr_16337_16399[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (21))){
var inst_16273 = (state_16323[(12)]);
var inst_16273__$1 = (state_16323[(2)]);
var inst_16274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16273__$1,cljs.core.cst$kw$solos);
var inst_16275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16273__$1,cljs.core.cst$kw$mutes);
var inst_16276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16273__$1,cljs.core.cst$kw$reads);
var state_16323__$1 = (function (){var statearr_16338 = state_16323;
(statearr_16338[(12)] = inst_16273__$1);

(statearr_16338[(11)] = inst_16274);

(statearr_16338[(13)] = inst_16275);

return statearr_16338;
})();
return cljs.core.async.ioc_alts_BANG_(state_16323__$1,(22),inst_16276);
} else {
if((state_val_16324 === (31))){
var inst_16305 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
if(cljs.core.truth_(inst_16305)){
var statearr_16339_16400 = state_16323__$1;
(statearr_16339_16400[(1)] = (32));

} else {
var statearr_16340_16401 = state_16323__$1;
(statearr_16340_16401[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (32))){
var inst_16282 = (state_16323[(14)]);
var state_16323__$1 = state_16323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16323__$1,(35),out,inst_16282);
} else {
if((state_val_16324 === (33))){
var inst_16273 = (state_16323[(12)]);
var inst_16251 = inst_16273;
var state_16323__$1 = (function (){var statearr_16341 = state_16323;
(statearr_16341[(7)] = inst_16251);

return statearr_16341;
})();
var statearr_16342_16402 = state_16323__$1;
(statearr_16342_16402[(2)] = null);

(statearr_16342_16402[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (13))){
var inst_16251 = (state_16323[(7)]);
var inst_16258 = inst_16251.cljs$lang$protocol_mask$partition0$;
var inst_16259 = (inst_16258 & (64));
var inst_16260 = inst_16251.cljs$core$ISeq$;
var inst_16261 = (inst_16259) || (inst_16260);
var state_16323__$1 = state_16323;
if(cljs.core.truth_(inst_16261)){
var statearr_16343_16403 = state_16323__$1;
(statearr_16343_16403[(1)] = (16));

} else {
var statearr_16344_16404 = state_16323__$1;
(statearr_16344_16404[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (22))){
var inst_16283 = (state_16323[(9)]);
var inst_16282 = (state_16323[(14)]);
var inst_16281 = (state_16323[(2)]);
var inst_16282__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16281,(0),null);
var inst_16283__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16281,(1),null);
var inst_16284 = (inst_16282__$1 == null);
var inst_16285 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16283__$1,change);
var inst_16286 = (inst_16284) || (inst_16285);
var state_16323__$1 = (function (){var statearr_16345 = state_16323;
(statearr_16345[(9)] = inst_16283__$1);

(statearr_16345[(14)] = inst_16282__$1);

return statearr_16345;
})();
if(cljs.core.truth_(inst_16286)){
var statearr_16346_16405 = state_16323__$1;
(statearr_16346_16405[(1)] = (23));

} else {
var statearr_16347_16406 = state_16323__$1;
(statearr_16347_16406[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (36))){
var inst_16273 = (state_16323[(12)]);
var inst_16251 = inst_16273;
var state_16323__$1 = (function (){var statearr_16348 = state_16323;
(statearr_16348[(7)] = inst_16251);

return statearr_16348;
})();
var statearr_16349_16407 = state_16323__$1;
(statearr_16349_16407[(2)] = null);

(statearr_16349_16407[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (29))){
var inst_16297 = (state_16323[(10)]);
var state_16323__$1 = state_16323;
var statearr_16350_16408 = state_16323__$1;
(statearr_16350_16408[(2)] = inst_16297);

(statearr_16350_16408[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (6))){
var state_16323__$1 = state_16323;
var statearr_16351_16409 = state_16323__$1;
(statearr_16351_16409[(2)] = false);

(statearr_16351_16409[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (28))){
var inst_16293 = (state_16323[(2)]);
var inst_16294 = calc_state();
var inst_16251 = inst_16294;
var state_16323__$1 = (function (){var statearr_16352 = state_16323;
(statearr_16352[(7)] = inst_16251);

(statearr_16352[(15)] = inst_16293);

return statearr_16352;
})();
var statearr_16353_16410 = state_16323__$1;
(statearr_16353_16410[(2)] = null);

(statearr_16353_16410[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (25))){
var inst_16319 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
var statearr_16354_16411 = state_16323__$1;
(statearr_16354_16411[(2)] = inst_16319);

(statearr_16354_16411[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (34))){
var inst_16317 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
var statearr_16355_16412 = state_16323__$1;
(statearr_16355_16412[(2)] = inst_16317);

(statearr_16355_16412[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (17))){
var state_16323__$1 = state_16323;
var statearr_16356_16413 = state_16323__$1;
(statearr_16356_16413[(2)] = false);

(statearr_16356_16413[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (3))){
var state_16323__$1 = state_16323;
var statearr_16357_16414 = state_16323__$1;
(statearr_16357_16414[(2)] = false);

(statearr_16357_16414[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (12))){
var inst_16321 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16323__$1,inst_16321);
} else {
if((state_val_16324 === (2))){
var inst_16227 = (state_16323[(8)]);
var inst_16232 = inst_16227.cljs$lang$protocol_mask$partition0$;
var inst_16233 = (inst_16232 & (64));
var inst_16234 = inst_16227.cljs$core$ISeq$;
var inst_16235 = (inst_16233) || (inst_16234);
var state_16323__$1 = state_16323;
if(cljs.core.truth_(inst_16235)){
var statearr_16358_16415 = state_16323__$1;
(statearr_16358_16415[(1)] = (5));

} else {
var statearr_16359_16416 = state_16323__$1;
(statearr_16359_16416[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (23))){
var inst_16282 = (state_16323[(14)]);
var inst_16288 = (inst_16282 == null);
var state_16323__$1 = state_16323;
if(cljs.core.truth_(inst_16288)){
var statearr_16360_16417 = state_16323__$1;
(statearr_16360_16417[(1)] = (26));

} else {
var statearr_16361_16418 = state_16323__$1;
(statearr_16361_16418[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (35))){
var inst_16308 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
if(cljs.core.truth_(inst_16308)){
var statearr_16362_16419 = state_16323__$1;
(statearr_16362_16419[(1)] = (36));

} else {
var statearr_16363_16420 = state_16323__$1;
(statearr_16363_16420[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (19))){
var inst_16251 = (state_16323[(7)]);
var inst_16270 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16251);
var state_16323__$1 = state_16323;
var statearr_16364_16421 = state_16323__$1;
(statearr_16364_16421[(2)] = inst_16270);

(statearr_16364_16421[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (11))){
var inst_16251 = (state_16323[(7)]);
var inst_16255 = (inst_16251 == null);
var inst_16256 = cljs.core.not(inst_16255);
var state_16323__$1 = state_16323;
if(inst_16256){
var statearr_16365_16422 = state_16323__$1;
(statearr_16365_16422[(1)] = (13));

} else {
var statearr_16366_16423 = state_16323__$1;
(statearr_16366_16423[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (9))){
var inst_16227 = (state_16323[(8)]);
var state_16323__$1 = state_16323;
var statearr_16367_16424 = state_16323__$1;
(statearr_16367_16424[(2)] = inst_16227);

(statearr_16367_16424[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (5))){
var state_16323__$1 = state_16323;
var statearr_16368_16425 = state_16323__$1;
(statearr_16368_16425[(2)] = true);

(statearr_16368_16425[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (14))){
var state_16323__$1 = state_16323;
var statearr_16369_16426 = state_16323__$1;
(statearr_16369_16426[(2)] = false);

(statearr_16369_16426[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (26))){
var inst_16283 = (state_16323[(9)]);
var inst_16290 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16283);
var state_16323__$1 = state_16323;
var statearr_16370_16427 = state_16323__$1;
(statearr_16370_16427[(2)] = inst_16290);

(statearr_16370_16427[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (16))){
var state_16323__$1 = state_16323;
var statearr_16371_16428 = state_16323__$1;
(statearr_16371_16428[(2)] = true);

(statearr_16371_16428[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (38))){
var inst_16313 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
var statearr_16372_16429 = state_16323__$1;
(statearr_16372_16429[(2)] = inst_16313);

(statearr_16372_16429[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (30))){
var inst_16283 = (state_16323[(9)]);
var inst_16274 = (state_16323[(11)]);
var inst_16275 = (state_16323[(13)]);
var inst_16300 = cljs.core.empty_QMARK_(inst_16274);
var inst_16301 = (inst_16275.cljs$core$IFn$_invoke$arity$1 ? inst_16275.cljs$core$IFn$_invoke$arity$1(inst_16283) : inst_16275.call(null,inst_16283));
var inst_16302 = cljs.core.not(inst_16301);
var inst_16303 = (inst_16300) && (inst_16302);
var state_16323__$1 = state_16323;
var statearr_16373_16430 = state_16323__$1;
(statearr_16373_16430[(2)] = inst_16303);

(statearr_16373_16430[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (10))){
var inst_16227 = (state_16323[(8)]);
var inst_16247 = (state_16323[(2)]);
var inst_16248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16247,cljs.core.cst$kw$solos);
var inst_16249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16247,cljs.core.cst$kw$mutes);
var inst_16250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16247,cljs.core.cst$kw$reads);
var inst_16251 = inst_16227;
var state_16323__$1 = (function (){var statearr_16374 = state_16323;
(statearr_16374[(16)] = inst_16248);

(statearr_16374[(17)] = inst_16249);

(statearr_16374[(7)] = inst_16251);

(statearr_16374[(18)] = inst_16250);

return statearr_16374;
})();
var statearr_16375_16431 = state_16323__$1;
(statearr_16375_16431[(2)] = null);

(statearr_16375_16431[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (18))){
var inst_16265 = (state_16323[(2)]);
var state_16323__$1 = state_16323;
var statearr_16376_16432 = state_16323__$1;
(statearr_16376_16432[(2)] = inst_16265);

(statearr_16376_16432[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (37))){
var state_16323__$1 = state_16323;
var statearr_16377_16433 = state_16323__$1;
(statearr_16377_16433[(2)] = null);

(statearr_16377_16433[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16324 === (8))){
var inst_16227 = (state_16323[(8)]);
var inst_16244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16227);
var state_16323__$1 = state_16323;
var statearr_16378_16434 = state_16323__$1;
(statearr_16378_16434[(2)] = inst_16244);

(statearr_16378_16434[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14635__auto___16388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14521__auto__,c__14635__auto___16388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14522__auto__ = null;
var cljs$core$async$mix_$_state_machine__14522__auto____0 = (function (){
var statearr_16382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16382[(0)] = cljs$core$async$mix_$_state_machine__14522__auto__);

(statearr_16382[(1)] = (1));

return statearr_16382;
});
var cljs$core$async$mix_$_state_machine__14522__auto____1 = (function (state_16323){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_16323);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e16383){if((e16383 instanceof Object)){
var ex__14525__auto__ = e16383;
var statearr_16384_16435 = state_16323;
(statearr_16384_16435[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16323);

return cljs.core.cst$kw$recur;
} else {
throw e16383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__16436 = state_16323;
state_16323 = G__16436;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14522__auto__ = function(state_16323){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14522__auto____1.call(this,state_16323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14522__auto____0;
cljs$core$async$mix_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14522__auto____1;
return cljs$core$async$mix_$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___16388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14637__auto__ = (function (){var statearr_16385 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_16385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___16388);

return statearr_16385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___16388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7217__auto__ = (((p == null))?null:p);
var m__7218__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7218__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7218__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7218__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7217__auto__ = (((p == null))?null:p);
var m__7218__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7218__auto__.call(null,p,v,ch));
} else {
var m__7218__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7218__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16437 = [];
var len__7629__auto___16440 = arguments.length;
var i__7630__auto___16441 = (0);
while(true){
if((i__7630__auto___16441 < len__7629__auto___16440)){
args16437.push((arguments[i__7630__auto___16441]));

var G__16442 = (i__7630__auto___16441 + (1));
i__7630__auto___16441 = G__16442;
continue;
} else {
}
break;
}

var G__16439 = args16437.length;
switch (G__16439) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16437.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7217__auto__ = (((p == null))?null:p);
var m__7218__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7218__auto__.call(null,p));
} else {
var m__7218__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7218__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7217__auto__ = (((p == null))?null:p);
var m__7218__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7217__auto__)]);
if(!((m__7218__auto__ == null))){
return (m__7218__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7218__auto__.call(null,p,v));
} else {
var m__7218__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7218__auto____$1 == null))){
return (m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7218__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7218__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16445 = [];
var len__7629__auto___16573 = arguments.length;
var i__7630__auto___16574 = (0);
while(true){
if((i__7630__auto___16574 < len__7629__auto___16573)){
args16445.push((arguments[i__7630__auto___16574]));

var G__16575 = (i__7630__auto___16574 + (1));
i__7630__auto___16574 = G__16575;
continue;
} else {
}
break;
}

var G__16447 = args16445.length;
switch (G__16447) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16445.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16448 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16448) : cljs.core.atom.call(null,G__16448));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6554__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6554__auto__,mults){
return (function (p1__16444_SHARP_){
if(cljs.core.truth_((p1__16444_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16444_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16444_SHARP_.call(null,topic)))){
return p1__16444_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16444_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6554__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16449 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16450){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16450 = meta16450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16451,meta16450__$1){
var self__ = this;
var _16451__$1 = this;
return (new cljs.core.async.t_cljs$core$async16449(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16450__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16451){
var self__ = this;
var _16451__$1 = this;
return self__.meta16450;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16452 = self__.mults;
var G__16453 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16452,G__16453) : cljs.core.reset_BANG_.call(null,G__16452,G__16453));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16450], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16449";

cljs.core.async.t_cljs$core$async16449.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async16449");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16449 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16450){
return (new cljs.core.async.t_cljs$core$async16449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16450));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16449(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14635__auto___16577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___16577,mults,ensure_mult,p){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___16577,mults,ensure_mult,p){
return (function (state_16525){
var state_val_16526 = (state_16525[(1)]);
if((state_val_16526 === (7))){
var inst_16521 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16527_16578 = state_16525__$1;
(statearr_16527_16578[(2)] = inst_16521);

(statearr_16527_16578[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (20))){
var state_16525__$1 = state_16525;
var statearr_16528_16579 = state_16525__$1;
(statearr_16528_16579[(2)] = null);

(statearr_16528_16579[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (1))){
var state_16525__$1 = state_16525;
var statearr_16529_16580 = state_16525__$1;
(statearr_16529_16580[(2)] = null);

(statearr_16529_16580[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (24))){
var inst_16504 = (state_16525[(7)]);
var inst_16513 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16504);
var state_16525__$1 = state_16525;
var statearr_16530_16581 = state_16525__$1;
(statearr_16530_16581[(2)] = inst_16513);

(statearr_16530_16581[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (4))){
var inst_16456 = (state_16525[(8)]);
var inst_16456__$1 = (state_16525[(2)]);
var inst_16457 = (inst_16456__$1 == null);
var state_16525__$1 = (function (){var statearr_16531 = state_16525;
(statearr_16531[(8)] = inst_16456__$1);

return statearr_16531;
})();
if(cljs.core.truth_(inst_16457)){
var statearr_16532_16582 = state_16525__$1;
(statearr_16532_16582[(1)] = (5));

} else {
var statearr_16533_16583 = state_16525__$1;
(statearr_16533_16583[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (15))){
var inst_16498 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16534_16584 = state_16525__$1;
(statearr_16534_16584[(2)] = inst_16498);

(statearr_16534_16584[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (21))){
var inst_16518 = (state_16525[(2)]);
var state_16525__$1 = (function (){var statearr_16535 = state_16525;
(statearr_16535[(9)] = inst_16518);

return statearr_16535;
})();
var statearr_16536_16585 = state_16525__$1;
(statearr_16536_16585[(2)] = null);

(statearr_16536_16585[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (13))){
var inst_16480 = (state_16525[(10)]);
var inst_16482 = cljs.core.chunked_seq_QMARK_(inst_16480);
var state_16525__$1 = state_16525;
if(inst_16482){
var statearr_16537_16586 = state_16525__$1;
(statearr_16537_16586[(1)] = (16));

} else {
var statearr_16538_16587 = state_16525__$1;
(statearr_16538_16587[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (22))){
var inst_16510 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
if(cljs.core.truth_(inst_16510)){
var statearr_16539_16588 = state_16525__$1;
(statearr_16539_16588[(1)] = (23));

} else {
var statearr_16540_16589 = state_16525__$1;
(statearr_16540_16589[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (6))){
var inst_16504 = (state_16525[(7)]);
var inst_16456 = (state_16525[(8)]);
var inst_16506 = (state_16525[(11)]);
var inst_16504__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16456) : topic_fn.call(null,inst_16456));
var inst_16505 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16506__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16505,inst_16504__$1);
var state_16525__$1 = (function (){var statearr_16541 = state_16525;
(statearr_16541[(7)] = inst_16504__$1);

(statearr_16541[(11)] = inst_16506__$1);

return statearr_16541;
})();
if(cljs.core.truth_(inst_16506__$1)){
var statearr_16542_16590 = state_16525__$1;
(statearr_16542_16590[(1)] = (19));

} else {
var statearr_16543_16591 = state_16525__$1;
(statearr_16543_16591[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (25))){
var inst_16515 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16544_16592 = state_16525__$1;
(statearr_16544_16592[(2)] = inst_16515);

(statearr_16544_16592[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (17))){
var inst_16480 = (state_16525[(10)]);
var inst_16489 = cljs.core.first(inst_16480);
var inst_16490 = cljs.core.async.muxch_STAR_(inst_16489);
var inst_16491 = cljs.core.async.close_BANG_(inst_16490);
var inst_16492 = cljs.core.next(inst_16480);
var inst_16466 = inst_16492;
var inst_16467 = null;
var inst_16468 = (0);
var inst_16469 = (0);
var state_16525__$1 = (function (){var statearr_16545 = state_16525;
(statearr_16545[(12)] = inst_16491);

(statearr_16545[(13)] = inst_16469);

(statearr_16545[(14)] = inst_16466);

(statearr_16545[(15)] = inst_16467);

(statearr_16545[(16)] = inst_16468);

return statearr_16545;
})();
var statearr_16546_16593 = state_16525__$1;
(statearr_16546_16593[(2)] = null);

(statearr_16546_16593[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (3))){
var inst_16523 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16525__$1,inst_16523);
} else {
if((state_val_16526 === (12))){
var inst_16500 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16547_16594 = state_16525__$1;
(statearr_16547_16594[(2)] = inst_16500);

(statearr_16547_16594[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (2))){
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16525__$1,(4),ch);
} else {
if((state_val_16526 === (23))){
var state_16525__$1 = state_16525;
var statearr_16548_16595 = state_16525__$1;
(statearr_16548_16595[(2)] = null);

(statearr_16548_16595[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (19))){
var inst_16456 = (state_16525[(8)]);
var inst_16506 = (state_16525[(11)]);
var inst_16508 = cljs.core.async.muxch_STAR_(inst_16506);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16525__$1,(22),inst_16508,inst_16456);
} else {
if((state_val_16526 === (11))){
var inst_16466 = (state_16525[(14)]);
var inst_16480 = (state_16525[(10)]);
var inst_16480__$1 = cljs.core.seq(inst_16466);
var state_16525__$1 = (function (){var statearr_16549 = state_16525;
(statearr_16549[(10)] = inst_16480__$1);

return statearr_16549;
})();
if(inst_16480__$1){
var statearr_16550_16596 = state_16525__$1;
(statearr_16550_16596[(1)] = (13));

} else {
var statearr_16551_16597 = state_16525__$1;
(statearr_16551_16597[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (9))){
var inst_16502 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16552_16598 = state_16525__$1;
(statearr_16552_16598[(2)] = inst_16502);

(statearr_16552_16598[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (5))){
var inst_16463 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16464 = cljs.core.vals(inst_16463);
var inst_16465 = cljs.core.seq(inst_16464);
var inst_16466 = inst_16465;
var inst_16467 = null;
var inst_16468 = (0);
var inst_16469 = (0);
var state_16525__$1 = (function (){var statearr_16553 = state_16525;
(statearr_16553[(13)] = inst_16469);

(statearr_16553[(14)] = inst_16466);

(statearr_16553[(15)] = inst_16467);

(statearr_16553[(16)] = inst_16468);

return statearr_16553;
})();
var statearr_16554_16599 = state_16525__$1;
(statearr_16554_16599[(2)] = null);

(statearr_16554_16599[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (14))){
var state_16525__$1 = state_16525;
var statearr_16558_16600 = state_16525__$1;
(statearr_16558_16600[(2)] = null);

(statearr_16558_16600[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (16))){
var inst_16480 = (state_16525[(10)]);
var inst_16484 = cljs.core.chunk_first(inst_16480);
var inst_16485 = cljs.core.chunk_rest(inst_16480);
var inst_16486 = cljs.core.count(inst_16484);
var inst_16466 = inst_16485;
var inst_16467 = inst_16484;
var inst_16468 = inst_16486;
var inst_16469 = (0);
var state_16525__$1 = (function (){var statearr_16559 = state_16525;
(statearr_16559[(13)] = inst_16469);

(statearr_16559[(14)] = inst_16466);

(statearr_16559[(15)] = inst_16467);

(statearr_16559[(16)] = inst_16468);

return statearr_16559;
})();
var statearr_16560_16601 = state_16525__$1;
(statearr_16560_16601[(2)] = null);

(statearr_16560_16601[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (10))){
var inst_16469 = (state_16525[(13)]);
var inst_16466 = (state_16525[(14)]);
var inst_16467 = (state_16525[(15)]);
var inst_16468 = (state_16525[(16)]);
var inst_16474 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16467,inst_16469);
var inst_16475 = cljs.core.async.muxch_STAR_(inst_16474);
var inst_16476 = cljs.core.async.close_BANG_(inst_16475);
var inst_16477 = (inst_16469 + (1));
var tmp16555 = inst_16466;
var tmp16556 = inst_16467;
var tmp16557 = inst_16468;
var inst_16466__$1 = tmp16555;
var inst_16467__$1 = tmp16556;
var inst_16468__$1 = tmp16557;
var inst_16469__$1 = inst_16477;
var state_16525__$1 = (function (){var statearr_16561 = state_16525;
(statearr_16561[(17)] = inst_16476);

(statearr_16561[(13)] = inst_16469__$1);

(statearr_16561[(14)] = inst_16466__$1);

(statearr_16561[(15)] = inst_16467__$1);

(statearr_16561[(16)] = inst_16468__$1);

return statearr_16561;
})();
var statearr_16562_16602 = state_16525__$1;
(statearr_16562_16602[(2)] = null);

(statearr_16562_16602[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (18))){
var inst_16495 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16563_16603 = state_16525__$1;
(statearr_16563_16603[(2)] = inst_16495);

(statearr_16563_16603[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16526 === (8))){
var inst_16469 = (state_16525[(13)]);
var inst_16468 = (state_16525[(16)]);
var inst_16471 = (inst_16469 < inst_16468);
var inst_16472 = inst_16471;
var state_16525__$1 = state_16525;
if(cljs.core.truth_(inst_16472)){
var statearr_16564_16604 = state_16525__$1;
(statearr_16564_16604[(1)] = (10));

} else {
var statearr_16565_16605 = state_16525__$1;
(statearr_16565_16605[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14635__auto___16577,mults,ensure_mult,p))
;
return ((function (switch__14521__auto__,c__14635__auto___16577,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_16569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16569[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_16569[(1)] = (1));

return statearr_16569;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_16525){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_16525);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e16570){if((e16570 instanceof Object)){
var ex__14525__auto__ = e16570;
var statearr_16571_16606 = state_16525;
(statearr_16571_16606[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16525);

return cljs.core.cst$kw$recur;
} else {
throw e16570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__16607 = state_16525;
state_16525 = G__16607;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_16525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_16525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___16577,mults,ensure_mult,p))
})();
var state__14637__auto__ = (function (){var statearr_16572 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_16572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___16577);

return statearr_16572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___16577,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16608 = [];
var len__7629__auto___16611 = arguments.length;
var i__7630__auto___16612 = (0);
while(true){
if((i__7630__auto___16612 < len__7629__auto___16611)){
args16608.push((arguments[i__7630__auto___16612]));

var G__16613 = (i__7630__auto___16612 + (1));
i__7630__auto___16612 = G__16613;
continue;
} else {
}
break;
}

var G__16610 = args16608.length;
switch (G__16610) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16608.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16615 = [];
var len__7629__auto___16618 = arguments.length;
var i__7630__auto___16619 = (0);
while(true){
if((i__7630__auto___16619 < len__7629__auto___16618)){
args16615.push((arguments[i__7630__auto___16619]));

var G__16620 = (i__7630__auto___16619 + (1));
i__7630__auto___16619 = G__16620;
continue;
} else {
}
break;
}

var G__16617 = args16615.length;
switch (G__16617) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16615.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16622 = [];
var len__7629__auto___16693 = arguments.length;
var i__7630__auto___16694 = (0);
while(true){
if((i__7630__auto___16694 < len__7629__auto___16693)){
args16622.push((arguments[i__7630__auto___16694]));

var G__16695 = (i__7630__auto___16694 + (1));
i__7630__auto___16694 = G__16695;
continue;
} else {
}
break;
}

var G__16624 = args16622.length;
switch (G__16624) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16622.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14635__auto___16697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___16697,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___16697,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16663){
var state_val_16664 = (state_16663[(1)]);
if((state_val_16664 === (7))){
var state_16663__$1 = state_16663;
var statearr_16665_16698 = state_16663__$1;
(statearr_16665_16698[(2)] = null);

(statearr_16665_16698[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (1))){
var state_16663__$1 = state_16663;
var statearr_16666_16699 = state_16663__$1;
(statearr_16666_16699[(2)] = null);

(statearr_16666_16699[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (4))){
var inst_16627 = (state_16663[(7)]);
var inst_16629 = (inst_16627 < cnt);
var state_16663__$1 = state_16663;
if(cljs.core.truth_(inst_16629)){
var statearr_16667_16700 = state_16663__$1;
(statearr_16667_16700[(1)] = (6));

} else {
var statearr_16668_16701 = state_16663__$1;
(statearr_16668_16701[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (15))){
var inst_16659 = (state_16663[(2)]);
var state_16663__$1 = state_16663;
var statearr_16669_16702 = state_16663__$1;
(statearr_16669_16702[(2)] = inst_16659);

(statearr_16669_16702[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (13))){
var inst_16652 = cljs.core.async.close_BANG_(out);
var state_16663__$1 = state_16663;
var statearr_16670_16703 = state_16663__$1;
(statearr_16670_16703[(2)] = inst_16652);

(statearr_16670_16703[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (6))){
var state_16663__$1 = state_16663;
var statearr_16671_16704 = state_16663__$1;
(statearr_16671_16704[(2)] = null);

(statearr_16671_16704[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (3))){
var inst_16661 = (state_16663[(2)]);
var state_16663__$1 = state_16663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16663__$1,inst_16661);
} else {
if((state_val_16664 === (12))){
var inst_16649 = (state_16663[(8)]);
var inst_16649__$1 = (state_16663[(2)]);
var inst_16650 = cljs.core.some(cljs.core.nil_QMARK_,inst_16649__$1);
var state_16663__$1 = (function (){var statearr_16672 = state_16663;
(statearr_16672[(8)] = inst_16649__$1);

return statearr_16672;
})();
if(cljs.core.truth_(inst_16650)){
var statearr_16673_16705 = state_16663__$1;
(statearr_16673_16705[(1)] = (13));

} else {
var statearr_16674_16706 = state_16663__$1;
(statearr_16674_16706[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (2))){
var inst_16626 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16627 = (0);
var state_16663__$1 = (function (){var statearr_16675 = state_16663;
(statearr_16675[(7)] = inst_16627);

(statearr_16675[(9)] = inst_16626);

return statearr_16675;
})();
var statearr_16676_16707 = state_16663__$1;
(statearr_16676_16707[(2)] = null);

(statearr_16676_16707[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (11))){
var inst_16627 = (state_16663[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16663,(10),Object,null,(9));
var inst_16636 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16627) : chs__$1.call(null,inst_16627));
var inst_16637 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16627) : done.call(null,inst_16627));
var inst_16638 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16636,inst_16637);
var state_16663__$1 = state_16663;
var statearr_16677_16708 = state_16663__$1;
(statearr_16677_16708[(2)] = inst_16638);


cljs.core.async.impl.ioc_helpers.process_exception(state_16663__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (9))){
var inst_16627 = (state_16663[(7)]);
var inst_16640 = (state_16663[(2)]);
var inst_16641 = (inst_16627 + (1));
var inst_16627__$1 = inst_16641;
var state_16663__$1 = (function (){var statearr_16678 = state_16663;
(statearr_16678[(10)] = inst_16640);

(statearr_16678[(7)] = inst_16627__$1);

return statearr_16678;
})();
var statearr_16679_16709 = state_16663__$1;
(statearr_16679_16709[(2)] = null);

(statearr_16679_16709[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (5))){
var inst_16647 = (state_16663[(2)]);
var state_16663__$1 = (function (){var statearr_16680 = state_16663;
(statearr_16680[(11)] = inst_16647);

return statearr_16680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16663__$1,(12),dchan);
} else {
if((state_val_16664 === (14))){
var inst_16649 = (state_16663[(8)]);
var inst_16654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16649);
var state_16663__$1 = state_16663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16663__$1,(16),out,inst_16654);
} else {
if((state_val_16664 === (16))){
var inst_16656 = (state_16663[(2)]);
var state_16663__$1 = (function (){var statearr_16681 = state_16663;
(statearr_16681[(12)] = inst_16656);

return statearr_16681;
})();
var statearr_16682_16710 = state_16663__$1;
(statearr_16682_16710[(2)] = null);

(statearr_16682_16710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (10))){
var inst_16631 = (state_16663[(2)]);
var inst_16632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16663__$1 = (function (){var statearr_16683 = state_16663;
(statearr_16683[(13)] = inst_16631);

return statearr_16683;
})();
var statearr_16684_16711 = state_16663__$1;
(statearr_16684_16711[(2)] = inst_16632);


cljs.core.async.impl.ioc_helpers.process_exception(state_16663__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16664 === (8))){
var inst_16645 = (state_16663[(2)]);
var state_16663__$1 = state_16663;
var statearr_16685_16712 = state_16663__$1;
(statearr_16685_16712[(2)] = inst_16645);

(statearr_16685_16712[(1)] = (5));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
});})(c__14635__auto___16697,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14521__auto__,c__14635__auto___16697,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_16689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16689[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_16689[(1)] = (1));

return statearr_16689;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_16663){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_16663);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e16690){if((e16690 instanceof Object)){
var ex__14525__auto__ = e16690;
var statearr_16691_16713 = state_16663;
(statearr_16691_16713[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16663);

return cljs.core.cst$kw$recur;
} else {
throw e16690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__16714 = state_16663;
state_16663 = G__16714;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_16663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_16663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___16697,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14637__auto__ = (function (){var statearr_16692 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_16692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___16697);

return statearr_16692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___16697,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16716 = [];
var len__7629__auto___16774 = arguments.length;
var i__7630__auto___16775 = (0);
while(true){
if((i__7630__auto___16775 < len__7629__auto___16774)){
args16716.push((arguments[i__7630__auto___16775]));

var G__16776 = (i__7630__auto___16775 + (1));
i__7630__auto___16775 = G__16776;
continue;
} else {
}
break;
}

var G__16718 = args16716.length;
switch (G__16718) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16716.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14635__auto___16778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___16778,out){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___16778,out){
return (function (state_16750){
var state_val_16751 = (state_16750[(1)]);
if((state_val_16751 === (7))){
var inst_16729 = (state_16750[(7)]);
var inst_16730 = (state_16750[(8)]);
var inst_16729__$1 = (state_16750[(2)]);
var inst_16730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16729__$1,(0),null);
var inst_16731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16729__$1,(1),null);
var inst_16732 = (inst_16730__$1 == null);
var state_16750__$1 = (function (){var statearr_16752 = state_16750;
(statearr_16752[(7)] = inst_16729__$1);

(statearr_16752[(9)] = inst_16731);

(statearr_16752[(8)] = inst_16730__$1);

return statearr_16752;
})();
if(cljs.core.truth_(inst_16732)){
var statearr_16753_16779 = state_16750__$1;
(statearr_16753_16779[(1)] = (8));

} else {
var statearr_16754_16780 = state_16750__$1;
(statearr_16754_16780[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16751 === (1))){
var inst_16719 = cljs.core.vec(chs);
var inst_16720 = inst_16719;
var state_16750__$1 = (function (){var statearr_16755 = state_16750;
(statearr_16755[(10)] = inst_16720);

return statearr_16755;
})();
var statearr_16756_16781 = state_16750__$1;
(statearr_16756_16781[(2)] = null);

(statearr_16756_16781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16751 === (4))){
var inst_16720 = (state_16750[(10)]);
var state_16750__$1 = state_16750;
return cljs.core.async.ioc_alts_BANG_(state_16750__$1,(7),inst_16720);
} else {
if((state_val_16751 === (6))){
var inst_16746 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16757_16782 = state_16750__$1;
(statearr_16757_16782[(2)] = inst_16746);

(statearr_16757_16782[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16751 === (3))){
var inst_16748 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16750__$1,inst_16748);
} else {
if((state_val_16751 === (2))){
var inst_16720 = (state_16750[(10)]);
var inst_16722 = cljs.core.count(inst_16720);
var inst_16723 = (inst_16722 > (0));
var state_16750__$1 = state_16750;
if(cljs.core.truth_(inst_16723)){
var statearr_16759_16783 = state_16750__$1;
(statearr_16759_16783[(1)] = (4));

} else {
var statearr_16760_16784 = state_16750__$1;
(statearr_16760_16784[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16751 === (11))){
var inst_16720 = (state_16750[(10)]);
var inst_16739 = (state_16750[(2)]);
var tmp16758 = inst_16720;
var inst_16720__$1 = tmp16758;
var state_16750__$1 = (function (){var statearr_16761 = state_16750;
(statearr_16761[(11)] = inst_16739);

(statearr_16761[(10)] = inst_16720__$1);

return statearr_16761;
})();
var statearr_16762_16785 = state_16750__$1;
(statearr_16762_16785[(2)] = null);

(statearr_16762_16785[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16751 === (9))){
var inst_16730 = (state_16750[(8)]);
var state_16750__$1 = state_16750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16750__$1,(11),out,inst_16730);
} else {
if((state_val_16751 === (5))){
var inst_16744 = cljs.core.async.close_BANG_(out);
var state_16750__$1 = state_16750;
var statearr_16763_16786 = state_16750__$1;
(statearr_16763_16786[(2)] = inst_16744);

(statearr_16763_16786[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16751 === (10))){
var inst_16742 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16764_16787 = state_16750__$1;
(statearr_16764_16787[(2)] = inst_16742);

(statearr_16764_16787[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16751 === (8))){
var inst_16729 = (state_16750[(7)]);
var inst_16731 = (state_16750[(9)]);
var inst_16730 = (state_16750[(8)]);
var inst_16720 = (state_16750[(10)]);
var inst_16734 = (function (){var cs = inst_16720;
var vec__16725 = inst_16729;
var v = inst_16730;
var c = inst_16731;
return ((function (cs,vec__16725,v,c,inst_16729,inst_16731,inst_16730,inst_16720,state_val_16751,c__14635__auto___16778,out){
return (function (p1__16715_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16715_SHARP_);
});
;})(cs,vec__16725,v,c,inst_16729,inst_16731,inst_16730,inst_16720,state_val_16751,c__14635__auto___16778,out))
})();
var inst_16735 = cljs.core.filterv(inst_16734,inst_16720);
var inst_16720__$1 = inst_16735;
var state_16750__$1 = (function (){var statearr_16765 = state_16750;
(statearr_16765[(10)] = inst_16720__$1);

return statearr_16765;
})();
var statearr_16766_16788 = state_16750__$1;
(statearr_16766_16788[(2)] = null);

(statearr_16766_16788[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
});})(c__14635__auto___16778,out))
;
return ((function (switch__14521__auto__,c__14635__auto___16778,out){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_16770 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16770[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_16770[(1)] = (1));

return statearr_16770;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_16750){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_16750);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e16771){if((e16771 instanceof Object)){
var ex__14525__auto__ = e16771;
var statearr_16772_16789 = state_16750;
(statearr_16772_16789[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16750);

return cljs.core.cst$kw$recur;
} else {
throw e16771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__16790 = state_16750;
state_16750 = G__16790;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_16750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_16750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___16778,out))
})();
var state__14637__auto__ = (function (){var statearr_16773 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_16773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___16778);

return statearr_16773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___16778,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16791 = [];
var len__7629__auto___16840 = arguments.length;
var i__7630__auto___16841 = (0);
while(true){
if((i__7630__auto___16841 < len__7629__auto___16840)){
args16791.push((arguments[i__7630__auto___16841]));

var G__16842 = (i__7630__auto___16841 + (1));
i__7630__auto___16841 = G__16842;
continue;
} else {
}
break;
}

var G__16793 = args16791.length;
switch (G__16793) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16791.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14635__auto___16844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___16844,out){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___16844,out){
return (function (state_16817){
var state_val_16818 = (state_16817[(1)]);
if((state_val_16818 === (7))){
var inst_16799 = (state_16817[(7)]);
var inst_16799__$1 = (state_16817[(2)]);
var inst_16800 = (inst_16799__$1 == null);
var inst_16801 = cljs.core.not(inst_16800);
var state_16817__$1 = (function (){var statearr_16819 = state_16817;
(statearr_16819[(7)] = inst_16799__$1);

return statearr_16819;
})();
if(inst_16801){
var statearr_16820_16845 = state_16817__$1;
(statearr_16820_16845[(1)] = (8));

} else {
var statearr_16821_16846 = state_16817__$1;
(statearr_16821_16846[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (1))){
var inst_16794 = (0);
var state_16817__$1 = (function (){var statearr_16822 = state_16817;
(statearr_16822[(8)] = inst_16794);

return statearr_16822;
})();
var statearr_16823_16847 = state_16817__$1;
(statearr_16823_16847[(2)] = null);

(statearr_16823_16847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (4))){
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16817__$1,(7),ch);
} else {
if((state_val_16818 === (6))){
var inst_16812 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
var statearr_16824_16848 = state_16817__$1;
(statearr_16824_16848[(2)] = inst_16812);

(statearr_16824_16848[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (3))){
var inst_16814 = (state_16817[(2)]);
var inst_16815 = cljs.core.async.close_BANG_(out);
var state_16817__$1 = (function (){var statearr_16825 = state_16817;
(statearr_16825[(9)] = inst_16814);

return statearr_16825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16817__$1,inst_16815);
} else {
if((state_val_16818 === (2))){
var inst_16794 = (state_16817[(8)]);
var inst_16796 = (inst_16794 < n);
var state_16817__$1 = state_16817;
if(cljs.core.truth_(inst_16796)){
var statearr_16826_16849 = state_16817__$1;
(statearr_16826_16849[(1)] = (4));

} else {
var statearr_16827_16850 = state_16817__$1;
(statearr_16827_16850[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (11))){
var inst_16794 = (state_16817[(8)]);
var inst_16804 = (state_16817[(2)]);
var inst_16805 = (inst_16794 + (1));
var inst_16794__$1 = inst_16805;
var state_16817__$1 = (function (){var statearr_16828 = state_16817;
(statearr_16828[(8)] = inst_16794__$1);

(statearr_16828[(10)] = inst_16804);

return statearr_16828;
})();
var statearr_16829_16851 = state_16817__$1;
(statearr_16829_16851[(2)] = null);

(statearr_16829_16851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (9))){
var state_16817__$1 = state_16817;
var statearr_16830_16852 = state_16817__$1;
(statearr_16830_16852[(2)] = null);

(statearr_16830_16852[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (5))){
var state_16817__$1 = state_16817;
var statearr_16831_16853 = state_16817__$1;
(statearr_16831_16853[(2)] = null);

(statearr_16831_16853[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (10))){
var inst_16809 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
var statearr_16832_16854 = state_16817__$1;
(statearr_16832_16854[(2)] = inst_16809);

(statearr_16832_16854[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16818 === (8))){
var inst_16799 = (state_16817[(7)]);
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16817__$1,(11),out,inst_16799);
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
}
}
}
});})(c__14635__auto___16844,out))
;
return ((function (switch__14521__auto__,c__14635__auto___16844,out){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_16836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16836[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_16836[(1)] = (1));

return statearr_16836;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_16817){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_16817);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e16837){if((e16837 instanceof Object)){
var ex__14525__auto__ = e16837;
var statearr_16838_16855 = state_16817;
(statearr_16838_16855[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16817);

return cljs.core.cst$kw$recur;
} else {
throw e16837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__16856 = state_16817;
state_16817 = G__16856;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_16817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_16817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___16844,out))
})();
var state__14637__auto__ = (function (){var statearr_16839 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_16839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___16844);

return statearr_16839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___16844,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16866 = (function (map_LT_,f,ch,meta16867){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16867 = meta16867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16868,meta16867__$1){
var self__ = this;
var _16868__$1 = this;
return (new cljs.core.async.t_cljs$core$async16866(self__.map_LT_,self__.f,self__.ch,meta16867__$1));
});

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16868){
var self__ = this;
var _16868__$1 = this;
return self__.meta16867;
});

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16869 = (function (map_LT_,f,ch,meta16867,_,fn1,meta16870){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16867 = meta16867;
this._ = _;
this.fn1 = fn1;
this.meta16870 = meta16870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16871,meta16870__$1){
var self__ = this;
var _16871__$1 = this;
return (new cljs.core.async.t_cljs$core$async16869(self__.map_LT_,self__.f,self__.ch,self__.meta16867,self__._,self__.fn1,meta16870__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16871){
var self__ = this;
var _16871__$1 = this;
return self__.meta16870;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16857_SHARP_){
var G__16872 = (((p1__16857_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16857_SHARP_) : self__.f.call(null,p1__16857_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16872) : f1.call(null,G__16872));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16869.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16867,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16866], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16870], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16869";

cljs.core.async.t_cljs$core$async16869.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async16869");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16869 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16869(map_LT___$1,f__$1,ch__$1,meta16867__$1,___$2,fn1__$1,meta16870){
return (new cljs.core.async.t_cljs$core$async16869(map_LT___$1,f__$1,ch__$1,meta16867__$1,___$2,fn1__$1,meta16870));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16869(self__.map_LT_,self__.f,self__.ch,self__.meta16867,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6542__auto__ = ret;
if(cljs.core.truth_(and__6542__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6542__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16873 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16873) : self__.f.call(null,G__16873));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16867], null);
});

cljs.core.async.t_cljs$core$async16866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16866";

cljs.core.async.t_cljs$core$async16866.cljs$lang$ctorPrWriter = (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async16866");
});

cljs.core.async.__GT_t_cljs$core$async16866 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16866(map_LT___$1,f__$1,ch__$1,meta16867){
return (new cljs.core.async.t_cljs$core$async16866(map_LT___$1,f__$1,ch__$1,meta16867));
});

}

return (new cljs.core.async.t_cljs$core$async16866(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16877 = (function (map_GT_,f,ch,meta16878){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16878 = meta16878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16879,meta16878__$1){
var self__ = this;
var _16879__$1 = this;
return (new cljs.core.async.t_cljs$core$async16877(self__.map_GT_,self__.f,self__.ch,meta16878__$1));
});

cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16879){
var self__ = this;
var _16879__$1 = this;
return self__.meta16878;
});

cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16877.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16878], null);
});

cljs.core.async.t_cljs$core$async16877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16877";

cljs.core.async.t_cljs$core$async16877.cljs$lang$ctorPrWriter = (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async16877");
});

cljs.core.async.__GT_t_cljs$core$async16877 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16877(map_GT___$1,f__$1,ch__$1,meta16878){
return (new cljs.core.async.t_cljs$core$async16877(map_GT___$1,f__$1,ch__$1,meta16878));
});

}

return (new cljs.core.async.t_cljs$core$async16877(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16883 = (function (filter_GT_,p,ch,meta16884){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16884 = meta16884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16885,meta16884__$1){
var self__ = this;
var _16885__$1 = this;
return (new cljs.core.async.t_cljs$core$async16883(self__.filter_GT_,self__.p,self__.ch,meta16884__$1));
});

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16885){
var self__ = this;
var _16885__$1 = this;
return self__.meta16884;
});

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16884], null);
});

cljs.core.async.t_cljs$core$async16883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16883";

cljs.core.async.t_cljs$core$async16883.cljs$lang$ctorPrWriter = (function (this__7160__auto__,writer__7161__auto__,opt__7162__auto__){
return cljs.core._write(writer__7161__auto__,"cljs.core.async/t_cljs$core$async16883");
});

cljs.core.async.__GT_t_cljs$core$async16883 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16883(filter_GT___$1,p__$1,ch__$1,meta16884){
return (new cljs.core.async.t_cljs$core$async16883(filter_GT___$1,p__$1,ch__$1,meta16884));
});

}

return (new cljs.core.async.t_cljs$core$async16883(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16886 = [];
var len__7629__auto___16930 = arguments.length;
var i__7630__auto___16931 = (0);
while(true){
if((i__7630__auto___16931 < len__7629__auto___16930)){
args16886.push((arguments[i__7630__auto___16931]));

var G__16932 = (i__7630__auto___16931 + (1));
i__7630__auto___16931 = G__16932;
continue;
} else {
}
break;
}

var G__16888 = args16886.length;
switch (G__16888) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16886.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14635__auto___16934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___16934,out){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___16934,out){
return (function (state_16909){
var state_val_16910 = (state_16909[(1)]);
if((state_val_16910 === (7))){
var inst_16905 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16911_16935 = state_16909__$1;
(statearr_16911_16935[(2)] = inst_16905);

(statearr_16911_16935[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (1))){
var state_16909__$1 = state_16909;
var statearr_16912_16936 = state_16909__$1;
(statearr_16912_16936[(2)] = null);

(statearr_16912_16936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (4))){
var inst_16891 = (state_16909[(7)]);
var inst_16891__$1 = (state_16909[(2)]);
var inst_16892 = (inst_16891__$1 == null);
var state_16909__$1 = (function (){var statearr_16913 = state_16909;
(statearr_16913[(7)] = inst_16891__$1);

return statearr_16913;
})();
if(cljs.core.truth_(inst_16892)){
var statearr_16914_16937 = state_16909__$1;
(statearr_16914_16937[(1)] = (5));

} else {
var statearr_16915_16938 = state_16909__$1;
(statearr_16915_16938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (6))){
var inst_16891 = (state_16909[(7)]);
var inst_16896 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16891) : p.call(null,inst_16891));
var state_16909__$1 = state_16909;
if(cljs.core.truth_(inst_16896)){
var statearr_16916_16939 = state_16909__$1;
(statearr_16916_16939[(1)] = (8));

} else {
var statearr_16917_16940 = state_16909__$1;
(statearr_16917_16940[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (3))){
var inst_16907 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16909__$1,inst_16907);
} else {
if((state_val_16910 === (2))){
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16909__$1,(4),ch);
} else {
if((state_val_16910 === (11))){
var inst_16899 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16918_16941 = state_16909__$1;
(statearr_16918_16941[(2)] = inst_16899);

(statearr_16918_16941[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (9))){
var state_16909__$1 = state_16909;
var statearr_16919_16942 = state_16909__$1;
(statearr_16919_16942[(2)] = null);

(statearr_16919_16942[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (5))){
var inst_16894 = cljs.core.async.close_BANG_(out);
var state_16909__$1 = state_16909;
var statearr_16920_16943 = state_16909__$1;
(statearr_16920_16943[(2)] = inst_16894);

(statearr_16920_16943[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (10))){
var inst_16902 = (state_16909[(2)]);
var state_16909__$1 = (function (){var statearr_16921 = state_16909;
(statearr_16921[(8)] = inst_16902);

return statearr_16921;
})();
var statearr_16922_16944 = state_16909__$1;
(statearr_16922_16944[(2)] = null);

(statearr_16922_16944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (8))){
var inst_16891 = (state_16909[(7)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16909__$1,(11),out,inst_16891);
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
}
}
}
});})(c__14635__auto___16934,out))
;
return ((function (switch__14521__auto__,c__14635__auto___16934,out){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_16926 = [null,null,null,null,null,null,null,null,null];
(statearr_16926[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_16926[(1)] = (1));

return statearr_16926;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_16909){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_16909);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e16927){if((e16927 instanceof Object)){
var ex__14525__auto__ = e16927;
var statearr_16928_16945 = state_16909;
(statearr_16928_16945[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16909);

return cljs.core.cst$kw$recur;
} else {
throw e16927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__16946 = state_16909;
state_16909 = G__16946;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_16909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_16909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___16934,out))
})();
var state__14637__auto__ = (function (){var statearr_16929 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_16929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___16934);

return statearr_16929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___16934,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16947 = [];
var len__7629__auto___16950 = arguments.length;
var i__7630__auto___16951 = (0);
while(true){
if((i__7630__auto___16951 < len__7629__auto___16950)){
args16947.push((arguments[i__7630__auto___16951]));

var G__16952 = (i__7630__auto___16951 + (1));
i__7630__auto___16951 = G__16952;
continue;
} else {
}
break;
}

var G__16949 = args16947.length;
switch (G__16949) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16947.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto__){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto__){
return (function (state_17119){
var state_val_17120 = (state_17119[(1)]);
if((state_val_17120 === (7))){
var inst_17115 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17121_17162 = state_17119__$1;
(statearr_17121_17162[(2)] = inst_17115);

(statearr_17121_17162[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (20))){
var inst_17085 = (state_17119[(7)]);
var inst_17096 = (state_17119[(2)]);
var inst_17097 = cljs.core.next(inst_17085);
var inst_17071 = inst_17097;
var inst_17072 = null;
var inst_17073 = (0);
var inst_17074 = (0);
var state_17119__$1 = (function (){var statearr_17122 = state_17119;
(statearr_17122[(8)] = inst_17074);

(statearr_17122[(9)] = inst_17073);

(statearr_17122[(10)] = inst_17072);

(statearr_17122[(11)] = inst_17071);

(statearr_17122[(12)] = inst_17096);

return statearr_17122;
})();
var statearr_17123_17163 = state_17119__$1;
(statearr_17123_17163[(2)] = null);

(statearr_17123_17163[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (1))){
var state_17119__$1 = state_17119;
var statearr_17124_17164 = state_17119__$1;
(statearr_17124_17164[(2)] = null);

(statearr_17124_17164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (4))){
var inst_17060 = (state_17119[(13)]);
var inst_17060__$1 = (state_17119[(2)]);
var inst_17061 = (inst_17060__$1 == null);
var state_17119__$1 = (function (){var statearr_17125 = state_17119;
(statearr_17125[(13)] = inst_17060__$1);

return statearr_17125;
})();
if(cljs.core.truth_(inst_17061)){
var statearr_17126_17165 = state_17119__$1;
(statearr_17126_17165[(1)] = (5));

} else {
var statearr_17127_17166 = state_17119__$1;
(statearr_17127_17166[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (15))){
var state_17119__$1 = state_17119;
var statearr_17131_17167 = state_17119__$1;
(statearr_17131_17167[(2)] = null);

(statearr_17131_17167[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (21))){
var state_17119__$1 = state_17119;
var statearr_17132_17168 = state_17119__$1;
(statearr_17132_17168[(2)] = null);

(statearr_17132_17168[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (13))){
var inst_17074 = (state_17119[(8)]);
var inst_17073 = (state_17119[(9)]);
var inst_17072 = (state_17119[(10)]);
var inst_17071 = (state_17119[(11)]);
var inst_17081 = (state_17119[(2)]);
var inst_17082 = (inst_17074 + (1));
var tmp17128 = inst_17073;
var tmp17129 = inst_17072;
var tmp17130 = inst_17071;
var inst_17071__$1 = tmp17130;
var inst_17072__$1 = tmp17129;
var inst_17073__$1 = tmp17128;
var inst_17074__$1 = inst_17082;
var state_17119__$1 = (function (){var statearr_17133 = state_17119;
(statearr_17133[(8)] = inst_17074__$1);

(statearr_17133[(9)] = inst_17073__$1);

(statearr_17133[(10)] = inst_17072__$1);

(statearr_17133[(11)] = inst_17071__$1);

(statearr_17133[(14)] = inst_17081);

return statearr_17133;
})();
var statearr_17134_17169 = state_17119__$1;
(statearr_17134_17169[(2)] = null);

(statearr_17134_17169[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (22))){
var state_17119__$1 = state_17119;
var statearr_17135_17170 = state_17119__$1;
(statearr_17135_17170[(2)] = null);

(statearr_17135_17170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (6))){
var inst_17060 = (state_17119[(13)]);
var inst_17069 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17060) : f.call(null,inst_17060));
var inst_17070 = cljs.core.seq(inst_17069);
var inst_17071 = inst_17070;
var inst_17072 = null;
var inst_17073 = (0);
var inst_17074 = (0);
var state_17119__$1 = (function (){var statearr_17136 = state_17119;
(statearr_17136[(8)] = inst_17074);

(statearr_17136[(9)] = inst_17073);

(statearr_17136[(10)] = inst_17072);

(statearr_17136[(11)] = inst_17071);

return statearr_17136;
})();
var statearr_17137_17171 = state_17119__$1;
(statearr_17137_17171[(2)] = null);

(statearr_17137_17171[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (17))){
var inst_17085 = (state_17119[(7)]);
var inst_17089 = cljs.core.chunk_first(inst_17085);
var inst_17090 = cljs.core.chunk_rest(inst_17085);
var inst_17091 = cljs.core.count(inst_17089);
var inst_17071 = inst_17090;
var inst_17072 = inst_17089;
var inst_17073 = inst_17091;
var inst_17074 = (0);
var state_17119__$1 = (function (){var statearr_17138 = state_17119;
(statearr_17138[(8)] = inst_17074);

(statearr_17138[(9)] = inst_17073);

(statearr_17138[(10)] = inst_17072);

(statearr_17138[(11)] = inst_17071);

return statearr_17138;
})();
var statearr_17139_17172 = state_17119__$1;
(statearr_17139_17172[(2)] = null);

(statearr_17139_17172[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (3))){
var inst_17117 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17119__$1,inst_17117);
} else {
if((state_val_17120 === (12))){
var inst_17105 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17140_17173 = state_17119__$1;
(statearr_17140_17173[(2)] = inst_17105);

(statearr_17140_17173[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (2))){
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17119__$1,(4),in$);
} else {
if((state_val_17120 === (23))){
var inst_17113 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17141_17174 = state_17119__$1;
(statearr_17141_17174[(2)] = inst_17113);

(statearr_17141_17174[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (19))){
var inst_17100 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17142_17175 = state_17119__$1;
(statearr_17142_17175[(2)] = inst_17100);

(statearr_17142_17175[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (11))){
var inst_17085 = (state_17119[(7)]);
var inst_17071 = (state_17119[(11)]);
var inst_17085__$1 = cljs.core.seq(inst_17071);
var state_17119__$1 = (function (){var statearr_17143 = state_17119;
(statearr_17143[(7)] = inst_17085__$1);

return statearr_17143;
})();
if(inst_17085__$1){
var statearr_17144_17176 = state_17119__$1;
(statearr_17144_17176[(1)] = (14));

} else {
var statearr_17145_17177 = state_17119__$1;
(statearr_17145_17177[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (9))){
var inst_17107 = (state_17119[(2)]);
var inst_17108 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17119__$1 = (function (){var statearr_17146 = state_17119;
(statearr_17146[(15)] = inst_17107);

return statearr_17146;
})();
if(cljs.core.truth_(inst_17108)){
var statearr_17147_17178 = state_17119__$1;
(statearr_17147_17178[(1)] = (21));

} else {
var statearr_17148_17179 = state_17119__$1;
(statearr_17148_17179[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (5))){
var inst_17063 = cljs.core.async.close_BANG_(out);
var state_17119__$1 = state_17119;
var statearr_17149_17180 = state_17119__$1;
(statearr_17149_17180[(2)] = inst_17063);

(statearr_17149_17180[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (14))){
var inst_17085 = (state_17119[(7)]);
var inst_17087 = cljs.core.chunked_seq_QMARK_(inst_17085);
var state_17119__$1 = state_17119;
if(inst_17087){
var statearr_17150_17181 = state_17119__$1;
(statearr_17150_17181[(1)] = (17));

} else {
var statearr_17151_17182 = state_17119__$1;
(statearr_17151_17182[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (16))){
var inst_17103 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17152_17183 = state_17119__$1;
(statearr_17152_17183[(2)] = inst_17103);

(statearr_17152_17183[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17120 === (10))){
var inst_17074 = (state_17119[(8)]);
var inst_17072 = (state_17119[(10)]);
var inst_17079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17072,inst_17074);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17119__$1,(13),out,inst_17079);
} else {
if((state_val_17120 === (18))){
var inst_17085 = (state_17119[(7)]);
var inst_17094 = cljs.core.first(inst_17085);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17119__$1,(20),out,inst_17094);
} else {
if((state_val_17120 === (8))){
var inst_17074 = (state_17119[(8)]);
var inst_17073 = (state_17119[(9)]);
var inst_17076 = (inst_17074 < inst_17073);
var inst_17077 = inst_17076;
var state_17119__$1 = state_17119;
if(cljs.core.truth_(inst_17077)){
var statearr_17153_17184 = state_17119__$1;
(statearr_17153_17184[(1)] = (10));

} else {
var statearr_17154_17185 = state_17119__$1;
(statearr_17154_17185[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14635__auto__))
;
return ((function (switch__14521__auto__,c__14635__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14522__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14522__auto____0 = (function (){
var statearr_17158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17158[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14522__auto__);

(statearr_17158[(1)] = (1));

return statearr_17158;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14522__auto____1 = (function (state_17119){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_17119);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e17159){if((e17159 instanceof Object)){
var ex__14525__auto__ = e17159;
var statearr_17160_17186 = state_17119;
(statearr_17160_17186[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17119);

return cljs.core.cst$kw$recur;
} else {
throw e17159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__17187 = state_17119;
state_17119 = G__17187;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14522__auto__ = function(state_17119){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14522__auto____1.call(this,state_17119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14522__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14522__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto__))
})();
var state__14637__auto__ = (function (){var statearr_17161 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_17161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto__);

return statearr_17161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto__))
);

return c__14635__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17188 = [];
var len__7629__auto___17191 = arguments.length;
var i__7630__auto___17192 = (0);
while(true){
if((i__7630__auto___17192 < len__7629__auto___17191)){
args17188.push((arguments[i__7630__auto___17192]));

var G__17193 = (i__7630__auto___17192 + (1));
i__7630__auto___17192 = G__17193;
continue;
} else {
}
break;
}

var G__17190 = args17188.length;
switch (G__17190) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17188.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17195 = [];
var len__7629__auto___17198 = arguments.length;
var i__7630__auto___17199 = (0);
while(true){
if((i__7630__auto___17199 < len__7629__auto___17198)){
args17195.push((arguments[i__7630__auto___17199]));

var G__17200 = (i__7630__auto___17199 + (1));
i__7630__auto___17199 = G__17200;
continue;
} else {
}
break;
}

var G__17197 = args17195.length;
switch (G__17197) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17195.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17202 = [];
var len__7629__auto___17253 = arguments.length;
var i__7630__auto___17254 = (0);
while(true){
if((i__7630__auto___17254 < len__7629__auto___17253)){
args17202.push((arguments[i__7630__auto___17254]));

var G__17255 = (i__7630__auto___17254 + (1));
i__7630__auto___17254 = G__17255;
continue;
} else {
}
break;
}

var G__17204 = args17202.length;
switch (G__17204) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17202.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14635__auto___17257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___17257,out){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___17257,out){
return (function (state_17228){
var state_val_17229 = (state_17228[(1)]);
if((state_val_17229 === (7))){
var inst_17223 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
var statearr_17230_17258 = state_17228__$1;
(statearr_17230_17258[(2)] = inst_17223);

(statearr_17230_17258[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (1))){
var inst_17205 = null;
var state_17228__$1 = (function (){var statearr_17231 = state_17228;
(statearr_17231[(7)] = inst_17205);

return statearr_17231;
})();
var statearr_17232_17259 = state_17228__$1;
(statearr_17232_17259[(2)] = null);

(statearr_17232_17259[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (4))){
var inst_17208 = (state_17228[(8)]);
var inst_17208__$1 = (state_17228[(2)]);
var inst_17209 = (inst_17208__$1 == null);
var inst_17210 = cljs.core.not(inst_17209);
var state_17228__$1 = (function (){var statearr_17233 = state_17228;
(statearr_17233[(8)] = inst_17208__$1);

return statearr_17233;
})();
if(inst_17210){
var statearr_17234_17260 = state_17228__$1;
(statearr_17234_17260[(1)] = (5));

} else {
var statearr_17235_17261 = state_17228__$1;
(statearr_17235_17261[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (6))){
var state_17228__$1 = state_17228;
var statearr_17236_17262 = state_17228__$1;
(statearr_17236_17262[(2)] = null);

(statearr_17236_17262[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (3))){
var inst_17225 = (state_17228[(2)]);
var inst_17226 = cljs.core.async.close_BANG_(out);
var state_17228__$1 = (function (){var statearr_17237 = state_17228;
(statearr_17237[(9)] = inst_17225);

return statearr_17237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17228__$1,inst_17226);
} else {
if((state_val_17229 === (2))){
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17228__$1,(4),ch);
} else {
if((state_val_17229 === (11))){
var inst_17208 = (state_17228[(8)]);
var inst_17217 = (state_17228[(2)]);
var inst_17205 = inst_17208;
var state_17228__$1 = (function (){var statearr_17238 = state_17228;
(statearr_17238[(10)] = inst_17217);

(statearr_17238[(7)] = inst_17205);

return statearr_17238;
})();
var statearr_17239_17263 = state_17228__$1;
(statearr_17239_17263[(2)] = null);

(statearr_17239_17263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (9))){
var inst_17208 = (state_17228[(8)]);
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17228__$1,(11),out,inst_17208);
} else {
if((state_val_17229 === (5))){
var inst_17208 = (state_17228[(8)]);
var inst_17205 = (state_17228[(7)]);
var inst_17212 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17208,inst_17205);
var state_17228__$1 = state_17228;
if(inst_17212){
var statearr_17241_17264 = state_17228__$1;
(statearr_17241_17264[(1)] = (8));

} else {
var statearr_17242_17265 = state_17228__$1;
(statearr_17242_17265[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (10))){
var inst_17220 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
var statearr_17243_17266 = state_17228__$1;
(statearr_17243_17266[(2)] = inst_17220);

(statearr_17243_17266[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (8))){
var inst_17205 = (state_17228[(7)]);
var tmp17240 = inst_17205;
var inst_17205__$1 = tmp17240;
var state_17228__$1 = (function (){var statearr_17244 = state_17228;
(statearr_17244[(7)] = inst_17205__$1);

return statearr_17244;
})();
var statearr_17245_17267 = state_17228__$1;
(statearr_17245_17267[(2)] = null);

(statearr_17245_17267[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
});})(c__14635__auto___17257,out))
;
return ((function (switch__14521__auto__,c__14635__auto___17257,out){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_17249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17249[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_17249[(1)] = (1));

return statearr_17249;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_17228){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_17228);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e17250){if((e17250 instanceof Object)){
var ex__14525__auto__ = e17250;
var statearr_17251_17268 = state_17228;
(statearr_17251_17268[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17228);

return cljs.core.cst$kw$recur;
} else {
throw e17250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__17269 = state_17228;
state_17228 = G__17269;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_17228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_17228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___17257,out))
})();
var state__14637__auto__ = (function (){var statearr_17252 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_17252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___17257);

return statearr_17252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___17257,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17270 = [];
var len__7629__auto___17340 = arguments.length;
var i__7630__auto___17341 = (0);
while(true){
if((i__7630__auto___17341 < len__7629__auto___17340)){
args17270.push((arguments[i__7630__auto___17341]));

var G__17342 = (i__7630__auto___17341 + (1));
i__7630__auto___17341 = G__17342;
continue;
} else {
}
break;
}

var G__17272 = args17270.length;
switch (G__17272) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17270.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14635__auto___17344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___17344,out){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___17344,out){
return (function (state_17310){
var state_val_17311 = (state_17310[(1)]);
if((state_val_17311 === (7))){
var inst_17306 = (state_17310[(2)]);
var state_17310__$1 = state_17310;
var statearr_17312_17345 = state_17310__$1;
(statearr_17312_17345[(2)] = inst_17306);

(statearr_17312_17345[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (1))){
var inst_17273 = (new Array(n));
var inst_17274 = inst_17273;
var inst_17275 = (0);
var state_17310__$1 = (function (){var statearr_17313 = state_17310;
(statearr_17313[(7)] = inst_17274);

(statearr_17313[(8)] = inst_17275);

return statearr_17313;
})();
var statearr_17314_17346 = state_17310__$1;
(statearr_17314_17346[(2)] = null);

(statearr_17314_17346[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (4))){
var inst_17278 = (state_17310[(9)]);
var inst_17278__$1 = (state_17310[(2)]);
var inst_17279 = (inst_17278__$1 == null);
var inst_17280 = cljs.core.not(inst_17279);
var state_17310__$1 = (function (){var statearr_17315 = state_17310;
(statearr_17315[(9)] = inst_17278__$1);

return statearr_17315;
})();
if(inst_17280){
var statearr_17316_17347 = state_17310__$1;
(statearr_17316_17347[(1)] = (5));

} else {
var statearr_17317_17348 = state_17310__$1;
(statearr_17317_17348[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (15))){
var inst_17300 = (state_17310[(2)]);
var state_17310__$1 = state_17310;
var statearr_17318_17349 = state_17310__$1;
(statearr_17318_17349[(2)] = inst_17300);

(statearr_17318_17349[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (13))){
var state_17310__$1 = state_17310;
var statearr_17319_17350 = state_17310__$1;
(statearr_17319_17350[(2)] = null);

(statearr_17319_17350[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (6))){
var inst_17275 = (state_17310[(8)]);
var inst_17296 = (inst_17275 > (0));
var state_17310__$1 = state_17310;
if(cljs.core.truth_(inst_17296)){
var statearr_17320_17351 = state_17310__$1;
(statearr_17320_17351[(1)] = (12));

} else {
var statearr_17321_17352 = state_17310__$1;
(statearr_17321_17352[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (3))){
var inst_17308 = (state_17310[(2)]);
var state_17310__$1 = state_17310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17310__$1,inst_17308);
} else {
if((state_val_17311 === (12))){
var inst_17274 = (state_17310[(7)]);
var inst_17298 = cljs.core.vec(inst_17274);
var state_17310__$1 = state_17310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17310__$1,(15),out,inst_17298);
} else {
if((state_val_17311 === (2))){
var state_17310__$1 = state_17310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17310__$1,(4),ch);
} else {
if((state_val_17311 === (11))){
var inst_17290 = (state_17310[(2)]);
var inst_17291 = (new Array(n));
var inst_17274 = inst_17291;
var inst_17275 = (0);
var state_17310__$1 = (function (){var statearr_17322 = state_17310;
(statearr_17322[(7)] = inst_17274);

(statearr_17322[(10)] = inst_17290);

(statearr_17322[(8)] = inst_17275);

return statearr_17322;
})();
var statearr_17323_17353 = state_17310__$1;
(statearr_17323_17353[(2)] = null);

(statearr_17323_17353[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (9))){
var inst_17274 = (state_17310[(7)]);
var inst_17288 = cljs.core.vec(inst_17274);
var state_17310__$1 = state_17310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17310__$1,(11),out,inst_17288);
} else {
if((state_val_17311 === (5))){
var inst_17274 = (state_17310[(7)]);
var inst_17275 = (state_17310[(8)]);
var inst_17278 = (state_17310[(9)]);
var inst_17283 = (state_17310[(11)]);
var inst_17282 = (inst_17274[inst_17275] = inst_17278);
var inst_17283__$1 = (inst_17275 + (1));
var inst_17284 = (inst_17283__$1 < n);
var state_17310__$1 = (function (){var statearr_17324 = state_17310;
(statearr_17324[(12)] = inst_17282);

(statearr_17324[(11)] = inst_17283__$1);

return statearr_17324;
})();
if(cljs.core.truth_(inst_17284)){
var statearr_17325_17354 = state_17310__$1;
(statearr_17325_17354[(1)] = (8));

} else {
var statearr_17326_17355 = state_17310__$1;
(statearr_17326_17355[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (14))){
var inst_17303 = (state_17310[(2)]);
var inst_17304 = cljs.core.async.close_BANG_(out);
var state_17310__$1 = (function (){var statearr_17328 = state_17310;
(statearr_17328[(13)] = inst_17303);

return statearr_17328;
})();
var statearr_17329_17356 = state_17310__$1;
(statearr_17329_17356[(2)] = inst_17304);

(statearr_17329_17356[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (10))){
var inst_17294 = (state_17310[(2)]);
var state_17310__$1 = state_17310;
var statearr_17330_17357 = state_17310__$1;
(statearr_17330_17357[(2)] = inst_17294);

(statearr_17330_17357[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17311 === (8))){
var inst_17274 = (state_17310[(7)]);
var inst_17283 = (state_17310[(11)]);
var tmp17327 = inst_17274;
var inst_17274__$1 = tmp17327;
var inst_17275 = inst_17283;
var state_17310__$1 = (function (){var statearr_17331 = state_17310;
(statearr_17331[(7)] = inst_17274__$1);

(statearr_17331[(8)] = inst_17275);

return statearr_17331;
})();
var statearr_17332_17358 = state_17310__$1;
(statearr_17332_17358[(2)] = null);

(statearr_17332_17358[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
});})(c__14635__auto___17344,out))
;
return ((function (switch__14521__auto__,c__14635__auto___17344,out){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_17336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17336[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_17336[(1)] = (1));

return statearr_17336;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_17310){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_17310);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e17337){if((e17337 instanceof Object)){
var ex__14525__auto__ = e17337;
var statearr_17338_17359 = state_17310;
(statearr_17338_17359[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17310);

return cljs.core.cst$kw$recur;
} else {
throw e17337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__17360 = state_17310;
state_17310 = G__17360;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_17310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_17310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___17344,out))
})();
var state__14637__auto__ = (function (){var statearr_17339 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_17339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___17344);

return statearr_17339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___17344,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17361 = [];
var len__7629__auto___17435 = arguments.length;
var i__7630__auto___17436 = (0);
while(true){
if((i__7630__auto___17436 < len__7629__auto___17435)){
args17361.push((arguments[i__7630__auto___17436]));

var G__17437 = (i__7630__auto___17436 + (1));
i__7630__auto___17436 = G__17437;
continue;
} else {
}
break;
}

var G__17363 = args17361.length;
switch (G__17363) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17361.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14635__auto___17439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto___17439,out){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto___17439,out){
return (function (state_17405){
var state_val_17406 = (state_17405[(1)]);
if((state_val_17406 === (7))){
var inst_17401 = (state_17405[(2)]);
var state_17405__$1 = state_17405;
var statearr_17407_17440 = state_17405__$1;
(statearr_17407_17440[(2)] = inst_17401);

(statearr_17407_17440[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (1))){
var inst_17364 = [];
var inst_17365 = inst_17364;
var inst_17366 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17405__$1 = (function (){var statearr_17408 = state_17405;
(statearr_17408[(7)] = inst_17366);

(statearr_17408[(8)] = inst_17365);

return statearr_17408;
})();
var statearr_17409_17441 = state_17405__$1;
(statearr_17409_17441[(2)] = null);

(statearr_17409_17441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (4))){
var inst_17369 = (state_17405[(9)]);
var inst_17369__$1 = (state_17405[(2)]);
var inst_17370 = (inst_17369__$1 == null);
var inst_17371 = cljs.core.not(inst_17370);
var state_17405__$1 = (function (){var statearr_17410 = state_17405;
(statearr_17410[(9)] = inst_17369__$1);

return statearr_17410;
})();
if(inst_17371){
var statearr_17411_17442 = state_17405__$1;
(statearr_17411_17442[(1)] = (5));

} else {
var statearr_17412_17443 = state_17405__$1;
(statearr_17412_17443[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (15))){
var inst_17395 = (state_17405[(2)]);
var state_17405__$1 = state_17405;
var statearr_17413_17444 = state_17405__$1;
(statearr_17413_17444[(2)] = inst_17395);

(statearr_17413_17444[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (13))){
var state_17405__$1 = state_17405;
var statearr_17414_17445 = state_17405__$1;
(statearr_17414_17445[(2)] = null);

(statearr_17414_17445[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (6))){
var inst_17365 = (state_17405[(8)]);
var inst_17390 = inst_17365.length;
var inst_17391 = (inst_17390 > (0));
var state_17405__$1 = state_17405;
if(cljs.core.truth_(inst_17391)){
var statearr_17415_17446 = state_17405__$1;
(statearr_17415_17446[(1)] = (12));

} else {
var statearr_17416_17447 = state_17405__$1;
(statearr_17416_17447[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (3))){
var inst_17403 = (state_17405[(2)]);
var state_17405__$1 = state_17405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17405__$1,inst_17403);
} else {
if((state_val_17406 === (12))){
var inst_17365 = (state_17405[(8)]);
var inst_17393 = cljs.core.vec(inst_17365);
var state_17405__$1 = state_17405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17405__$1,(15),out,inst_17393);
} else {
if((state_val_17406 === (2))){
var state_17405__$1 = state_17405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17405__$1,(4),ch);
} else {
if((state_val_17406 === (11))){
var inst_17373 = (state_17405[(10)]);
var inst_17369 = (state_17405[(9)]);
var inst_17383 = (state_17405[(2)]);
var inst_17384 = [];
var inst_17385 = inst_17384.push(inst_17369);
var inst_17365 = inst_17384;
var inst_17366 = inst_17373;
var state_17405__$1 = (function (){var statearr_17417 = state_17405;
(statearr_17417[(11)] = inst_17383);

(statearr_17417[(12)] = inst_17385);

(statearr_17417[(7)] = inst_17366);

(statearr_17417[(8)] = inst_17365);

return statearr_17417;
})();
var statearr_17418_17448 = state_17405__$1;
(statearr_17418_17448[(2)] = null);

(statearr_17418_17448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (9))){
var inst_17365 = (state_17405[(8)]);
var inst_17381 = cljs.core.vec(inst_17365);
var state_17405__$1 = state_17405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17405__$1,(11),out,inst_17381);
} else {
if((state_val_17406 === (5))){
var inst_17366 = (state_17405[(7)]);
var inst_17373 = (state_17405[(10)]);
var inst_17369 = (state_17405[(9)]);
var inst_17373__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17369) : f.call(null,inst_17369));
var inst_17374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17373__$1,inst_17366);
var inst_17375 = cljs.core.keyword_identical_QMARK_(inst_17366,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17376 = (inst_17374) || (inst_17375);
var state_17405__$1 = (function (){var statearr_17419 = state_17405;
(statearr_17419[(10)] = inst_17373__$1);

return statearr_17419;
})();
if(cljs.core.truth_(inst_17376)){
var statearr_17420_17449 = state_17405__$1;
(statearr_17420_17449[(1)] = (8));

} else {
var statearr_17421_17450 = state_17405__$1;
(statearr_17421_17450[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (14))){
var inst_17398 = (state_17405[(2)]);
var inst_17399 = cljs.core.async.close_BANG_(out);
var state_17405__$1 = (function (){var statearr_17423 = state_17405;
(statearr_17423[(13)] = inst_17398);

return statearr_17423;
})();
var statearr_17424_17451 = state_17405__$1;
(statearr_17424_17451[(2)] = inst_17399);

(statearr_17424_17451[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (10))){
var inst_17388 = (state_17405[(2)]);
var state_17405__$1 = state_17405;
var statearr_17425_17452 = state_17405__$1;
(statearr_17425_17452[(2)] = inst_17388);

(statearr_17425_17452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17406 === (8))){
var inst_17373 = (state_17405[(10)]);
var inst_17369 = (state_17405[(9)]);
var inst_17365 = (state_17405[(8)]);
var inst_17378 = inst_17365.push(inst_17369);
var tmp17422 = inst_17365;
var inst_17365__$1 = tmp17422;
var inst_17366 = inst_17373;
var state_17405__$1 = (function (){var statearr_17426 = state_17405;
(statearr_17426[(7)] = inst_17366);

(statearr_17426[(14)] = inst_17378);

(statearr_17426[(8)] = inst_17365__$1);

return statearr_17426;
})();
var statearr_17427_17453 = state_17405__$1;
(statearr_17427_17453[(2)] = null);

(statearr_17427_17453[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
});})(c__14635__auto___17439,out))
;
return ((function (switch__14521__auto__,c__14635__auto___17439,out){
return (function() {
var cljs$core$async$state_machine__14522__auto__ = null;
var cljs$core$async$state_machine__14522__auto____0 = (function (){
var statearr_17431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17431[(0)] = cljs$core$async$state_machine__14522__auto__);

(statearr_17431[(1)] = (1));

return statearr_17431;
});
var cljs$core$async$state_machine__14522__auto____1 = (function (state_17405){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_17405);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e17432){if((e17432 instanceof Object)){
var ex__14525__auto__ = e17432;
var statearr_17433_17454 = state_17405;
(statearr_17433_17454[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17405);

return cljs.core.cst$kw$recur;
} else {
throw e17432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__17455 = state_17405;
state_17405 = G__17455;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
cljs$core$async$state_machine__14522__auto__ = function(state_17405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14522__auto____1.call(this,state_17405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14522__auto____0;
cljs$core$async$state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14522__auto____1;
return cljs$core$async$state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto___17439,out))
})();
var state__14637__auto__ = (function (){var statearr_17434 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_17434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto___17439);

return statearr_17434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto___17439,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

