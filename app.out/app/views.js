// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('app.util');
/**
 * Value of field in input form
 */
app.views.field_values = (function app$views$field_values(names){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30710_SHARP_){
return goog.dom.getElement(p1__30710_SHARP_).value;
}),names);
});
/**
 * Card for taking user input
 */
app.views.input_card = (function app$views$input_card(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$indent,"Patient Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"calculate",cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

return null;
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"gender"], null),"Gender"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"gender",cljs.core.cst$kw$id,"gender"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"male"], null),"male"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"female"], null),"female"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"age"], null),"Age (years)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$id,"age",cljs.core.cst$kw$name,"age"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"height"], null),"Height (cm)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$id,"height",cljs.core.cst$kw$name,"height"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"weight"], null),"Weight (kg)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$id,"weight",cljs.core.cst$kw$name,"weight"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"serum-creatinine"], null),"Serum creatinine (mg/dL)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$id,"serum-creatinine",cljs.core.cst$kw$name,"serum-creatinine"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Calculate"], null)], null)], null)], null)], null);
});
/**
 * Card for displaying calculation results
 */
app.views.results_card = (function app$views$results_card(){
var results = (function (){var G__30723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$results], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30723) : re_frame.core.subscribe.call(null,G__30723));
})();
return ((function (results){
return (function (){
if(cljs.core.some_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(results) : cljs.core.deref.call(null,results)))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$indent,"Calculation Results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$row$indent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Creatinine clearance"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.cst$kw$creatinine_DASH_clearance.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(results) : cljs.core.deref.call(null,results)))," (kg-cm)",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sup,"1/2"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$row$indent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Elimination rate constant (k)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(results) : cljs.core.deref.call(null,results)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$row$indent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Half-life"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.cst$kw$half_DASH_life.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(results) : cljs.core.deref.call(null,results)))," hours"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (results){
return (function (q_idx,p__30724){
var vec__30725 = p__30724;
var q_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30725,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30725,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$indent,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str("q-"),cljs.core.str(q_idx)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__30725,q_label,value,results){
return (function (dose_idx,p__30728){
var vec__30729 = p__30728;
var dose_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30729,(0),null);
var vec__30732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30729,(1),null);
var c_peak = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30732,(0),null);
var c_trough = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30732,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str("dose-"),cljs.core.str(dose_idx)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$static_DASH_element,[cljs.core.str("q"),cljs.core.str(q_label),cljs.core.str(" - "),cljs.core.str(dose_label),cljs.core.str("mg vancomycin")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"C",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sub,"peak"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,c_peak], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"C",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sub,"trough"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,c_trough], null)], null)], null)], null);
});})(vec__30725,q_label,value,results))
,value)], null)], null);
});})(results))
,cljs.core.cst$kw$concentrations.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(results) : cljs.core.deref.call(null,results))))], null);
} else {
return null;
}
});
;})(results))
});
app.views.main_page = (function app$views$main_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.input_card], null)], null);
});
app.views.listen_submit = (function app$views$listen_submit(){
var input = app.util.listen(goog.dom.getElement("calculate"),"submit");
var c__14635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14635__auto__,input){
return (function (){
var f__14636__auto__ = (function (){var switch__14521__auto__ = ((function (c__14635__auto__,input){
return (function (state_30789){
var state_val_30790 = (state_30789[(1)]);
if((state_val_30790 === (1))){
var state_30789__$1 = state_30789;
var statearr_30791_30805 = state_30789__$1;
(statearr_30791_30805[(2)] = null);

(statearr_30791_30805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30790 === (2))){
var state_30789__$1 = state_30789;
var statearr_30792_30806 = state_30789__$1;
(statearr_30792_30806[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_30790 === (3))){
var inst_30787 = (state_30789[(2)]);
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30789__$1,inst_30787);
} else {
if((state_val_30790 === (4))){
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30789__$1,(7),input);
} else {
if((state_val_30790 === (5))){
var state_30789__$1 = state_30789;
var statearr_30794_30807 = state_30789__$1;
(statearr_30794_30807[(2)] = null);

(statearr_30794_30807[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30790 === (6))){
var inst_30785 = (state_30789[(2)]);
var state_30789__$1 = state_30789;
var statearr_30795_30808 = state_30789__$1;
(statearr_30795_30808[(2)] = inst_30785);

(statearr_30795_30808[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30790 === (7))){
var inst_30773 = (state_30789[(2)]);
var inst_30774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30776 = ["gender","age","height","weight","serum-creatinine"];
var inst_30777 = (new cljs.core.PersistentVector(null,5,(5),inst_30775,inst_30776,null));
var inst_30778 = app.views.field_values(inst_30777);
var inst_30779 = [cljs.core.cst$kw$calculate,inst_30778];
var inst_30780 = (new cljs.core.PersistentVector(null,2,(5),inst_30774,inst_30779,null));
var inst_30781 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_30780) : re_frame.core.dispatch.call(null,inst_30780));
var state_30789__$1 = (function (){var statearr_30796 = state_30789;
(statearr_30796[(7)] = inst_30781);

(statearr_30796[(8)] = inst_30773);

return statearr_30796;
})();
var statearr_30797_30809 = state_30789__$1;
(statearr_30797_30809[(2)] = null);

(statearr_30797_30809[(1)] = (2));


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
});})(c__14635__auto__,input))
;
return ((function (switch__14521__auto__,c__14635__auto__,input){
return (function() {
var app$views$listen_submit_$_state_machine__14522__auto__ = null;
var app$views$listen_submit_$_state_machine__14522__auto____0 = (function (){
var statearr_30801 = [null,null,null,null,null,null,null,null,null];
(statearr_30801[(0)] = app$views$listen_submit_$_state_machine__14522__auto__);

(statearr_30801[(1)] = (1));

return statearr_30801;
});
var app$views$listen_submit_$_state_machine__14522__auto____1 = (function (state_30789){
while(true){
var ret_value__14523__auto__ = (function (){try{while(true){
var result__14524__auto__ = switch__14521__auto__(state_30789);
if(cljs.core.keyword_identical_QMARK_(result__14524__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14524__auto__;
}
break;
}
}catch (e30802){if((e30802 instanceof Object)){
var ex__14525__auto__ = e30802;
var statearr_30803_30810 = state_30789;
(statearr_30803_30810[(5)] = ex__14525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30789);

return cljs.core.cst$kw$recur;
} else {
throw e30802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14523__auto__,cljs.core.cst$kw$recur)){
var G__30811 = state_30789;
state_30789 = G__30811;
continue;
} else {
return ret_value__14523__auto__;
}
break;
}
});
app$views$listen_submit_$_state_machine__14522__auto__ = function(state_30789){
switch(arguments.length){
case 0:
return app$views$listen_submit_$_state_machine__14522__auto____0.call(this);
case 1:
return app$views$listen_submit_$_state_machine__14522__auto____1.call(this,state_30789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$views$listen_submit_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$0 = app$views$listen_submit_$_state_machine__14522__auto____0;
app$views$listen_submit_$_state_machine__14522__auto__.cljs$core$IFn$_invoke$arity$1 = app$views$listen_submit_$_state_machine__14522__auto____1;
return app$views$listen_submit_$_state_machine__14522__auto__;
})()
;})(switch__14521__auto__,c__14635__auto__,input))
})();
var state__14637__auto__ = (function (){var statearr_30804 = (f__14636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14636__auto__.cljs$core$IFn$_invoke$arity$0() : f__14636__auto__.call(null));
(statearr_30804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14635__auto__);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14637__auto__);
});})(c__14635__auto__,input))
);

return c__14635__auto__;
});
app.views.render_page = (function app$views$render_page(){
var G__30814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.main_page], null);
var G__30815 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__30814,G__30815) : reagent.core.render_component.call(null,G__30814,G__30815));
});
