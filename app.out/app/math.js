// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('app.math');
goog.require('cljs.core');
app.math.e = Math.E;
app.math.exp = (function app$math$exp(n){
return Math.exp(n);
});
app.math.squared = (function app$math$squared(x){
return Math.pow(x,(2));
});
app.math.sqrt = (function app$math$sqrt(x){
return Math.sqrt(x);
});
app.math.round = (function app$math$round(x){
return Math.round(x);
});
app.math.not_a_number_QMARK_ = (function app$math$not_a_number_QMARK_(x){
return isNaN(x);
});
