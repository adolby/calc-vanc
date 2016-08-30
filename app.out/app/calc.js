// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('app.calc');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('app.math');
app.calc.schedules = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(750),(1000),(1250),(1500),(1750)], null),(12),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(750),(1000),(1250),(1500),(1750),(2000)], null),(24),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(750),(1000),(1250)], null)], null);
/**
 * Body mass index in kg/(cm)^2
 */
app.calc.bmi = (function app$calc$bmi(height,weight){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(height,(0))){
return (weight / app.math.squared(height));
} else {
return NaN;
}
});
/**
 * Estimated creatinine clearance in (kg-cm)^(1/2)
 */
app.calc.creatinine_clearance = (function app$calc$creatinine_clearance(gender,age,height,abw,s_cr){
var bsa = (app.math.sqrt((height * abw)) / (60));
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bsa,(0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s_cr,(0)))){
var cr_cl = (((((140) - age) * abw) / ((72) * s_cr)) / (1.73 / bsa));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,"female")){
return (0.85 * cr_cl);
} else {
return cr_cl;
}
} else {
return NaN;
}
});
/**
 * Calculate elimination rate constant (k)
 */
app.calc.elimination_rate_constant = (function app$calc$elimination_rate_constant(cr_cl){
return ((8.3E-4 * cr_cl) + 0.0044);
});
/**
 * Calculate peak-concentration in µg/mL
 */
app.calc.peak_concentration = (function app$calc$peak_concentration(obese,x_0,k,tau,t,T){
var v_d = (cljs.core.truth_(obese)?0.8:0.6);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,(0))){
var e_kt = app.math.exp((- (k * t)));
var e_kT = app.math.exp((- (k * T)));
var e_k_tau = app.math.exp((- (k * tau)));
return (((x_0 * ((1) - e_kt)) * e_kT) / ((v_d * k) * ((1) - e_k_tau)));
} else {
return NaN;
}
});
/**
 * Calculate trough concentration in µg/mL
 */
app.calc.trough_concentration = (function app$calc$trough_concentration(c_peak,k,tau,t,T){
var t_prime = ((tau - t) - T);
return (c_peak * app.math.exp((- (k * t_prime))));
});
/**
 * Calculate half-life given elimination rate constant
 */
app.calc.half_life = (function app$calc$half_life(k){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,(0))){
return (0.693 / k);
} else {
return NaN;
}
});
/**
 * Calculate peak and trough calculations for a dose
 */
app.calc.calculate_concentrations = (function app$calc$calculate_concentrations(dose,height,weight,k,q,infusion_time,c_peak_time){
var x_0 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(infusion_time,(0)))?(dose / infusion_time):NaN);
var bmi = app.calc.bmi(height,weight);
var obese_QMARK_ = (bmi > (30));
var c_peak = app.calc.peak_concentration(obese_QMARK_,x_0,k,q,infusion_time,c_peak_time);
var c_trough = app.calc.trough_concentration(c_peak,k,q,infusion_time,c_peak_time);
var c_peak_rounded = app.math.round(c_peak);
var c_trough_rounded = app.math.round(c_trough);
var bad_calculation_QMARK_ = (function (){var or__6554__auto__ = app.math.not_a_number_QMARK_(c_peak);
if(cljs.core.truth_(or__6554__auto__)){
return or__6554__auto__;
} else {
return app.math.not_a_number_QMARK_(c_trough);
}
})();
if(cljs.core.not(bad_calculation_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(c_peak_rounded)].join(''),[cljs.core.str(c_trough_rounded)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calculation error!","Calculation error!"], null);
}
});
/**
 * Calculate concentrations for all doses
 */
app.calc.concentration_map = (function app$calc$concentration_map(doses,height,weight,k,q,infusion_time,c_peak_time){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dose){
return cljs.core.PersistentArrayMap.fromArray([dose,app.calc.calculate_concentrations(dose,height,weight,k,q,infusion_time,c_peak_time)], true, false);
}),doses));
});
/**
 * Calculate half-life, creatinine clearance, and concentrations for
 * all doses
 */
app.calc.calculate = (function app$calc$calculate(data){
var gender = cljs.core.first(data);
var vec__30484 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (gender){
return (function (p1__30476_SHARP_){
return parseFloat(p1__30476_SHARP_);
});})(gender))
,cljs.core.rest(data));
var age = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(1),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(2),null);
var serum_creatinine = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(3),null);
var cr_cl = app.calc.creatinine_clearance(gender,age,height,weight,serum_creatinine);
var cr_cl_rounded = app.math.round(cr_cl);
var k = app.calc.elimination_rate_constant(cr_cl);
var h_l = app.calc.half_life(k);
var h_l_rounded = app.math.round(h_l);
var concentrations = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gender,vec__30484,age,height,weight,serum_creatinine,cr_cl,cr_cl_rounded,k,h_l,h_l_rounded){
return (function (p__30487){
var vec__30488 = p__30487;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30488,(0),null);
var doses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30488,(1),null);
return cljs.core.PersistentArrayMap.fromArray([q,app.calc.concentration_map(doses,height,weight,k,q,(1),(1))], true, false);
});})(gender,vec__30484,age,height,weight,serum_creatinine,cr_cl,cr_cl_rounded,k,h_l,h_l_rounded))
,app.calc.schedules));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$creatinine_DASH_clearance,cr_cl_rounded,cljs.core.cst$kw$k,k,cljs.core.cst$kw$half_DASH_life,h_l_rounded,cljs.core.cst$kw$concentrations,concentrations], null);
});
