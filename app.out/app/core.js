// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('app.subs');
goog.require('app.events');
goog.require('app.views');
app.core.init = (function app$core$init(){
app.views.render_page();

return app.views.listen_submit();
});
