import{d as r,_ as i,o as s,e as t,a as o,F as d,r as c,n as l,l as u,t as m,q as p}from"./index-0b72a673.js";const f=r({name:"ModeFilters",props:{isLoading:Boolean,filterMode:{type:String,default:""}},emits:["update:filterMode"],data(){return{modes:{any:"Any",osu:"osu!",taiko:"osu!taiko",catch:"osu!catch",mania:"osu!mania"}}},methods:{getModeSortClass(e){return this.filterMode===e?"sorted":"unsorted"}}}),h={class:"row mt-3"},_=o("div",{class:"col-auto filter-title"}," Mode ",-1),k={class:"col"},g=["onClick"],y={key:0,class:"small text-white-50"};function C(e,v,$,B,S,w){return s(),t("div",h,[_,o("div",k,[(s(!0),t(d,null,c(e.modes,(n,a)=>(s(),t("a",{key:a,href:"#",class:l(["mode",e.getModeSortClass(a)]),onClick:u(L=>e.$emit("update:filterMode",a),["prevent"])},m(n),11,g))),128)),e.isLoading?(s(),t("span",y,"loading...")):p("",!0)])])}const V=i(f,[["render",C]]);var M=(e=>(e.any="any",e.osu="osu",e.taiko="taiko",e.catch="catch",e.mania="mania",e))(M||{});export{M as F,V as M};
