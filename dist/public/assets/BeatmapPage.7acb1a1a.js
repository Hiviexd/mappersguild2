var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{_ as r,a as d,b as m,c as p,d as n,e as c,f as u}from"./beatmaps.bc683872.js";import{d as b,m as f,C as h,i as g,o as B,b as y,j as v,w as k,f as w,F as M,g as j,n as O,l as $,t as L,k as x,D as C,E as F,q as S,u as D,e as P}from"./vendor.cb33bf1d.js";import{_ as G}from"./FilterBox.4128cb26.js";import{_ as q}from"./ModeFilters.cedc5b63.js";import{_ as Q}from"./ModesIcons.4407befb.js";import"./ModalDialog.0d82a3c5.js";import"./beatmap.b8797e7f.js";import"./task.5925ddbb.js";import"./UserLinkList.aca6880a.js";import"./extras.b9e74742.js";var I,V,_=b({name:"BeatmapPageFilters",components:{FilterBox:G,ModeFilters:q},data:()=>({statuses:{any:"Any",WIP:"WIP",Done:"Done",Qualified:"Qualified",Ranked:"Ranked"},quests:{any:"Any",none:"None"}}),computed:f("beatmaps",["filterMode","filterValue","filterStatus","filterQuest"]),methods:(I=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&i(e,t,a[t]);if(s)for(var t of s(a))o.call(a,t)&&i(e,t,a[t]);return e})({},h("beatmaps",["updateFilterValue","updateFilterMode","updateFilterStatus","updateFilterQuest"])),V={getStatusSortClass(e){return this.filterStatus===e?"sorted":"unsorted"},getQuestSortClass(e){return this.filterQuest===e?"sorted":"unsorted"}},a(I,t(V)))});const U={class:"container card card-body py-3 mb-2"},R=w("button",{class:"btn btn-primary",href:"#","data-bs-toggle":"modal","data-bs-target":"#addBeatmap"},[x(" Add beatmap "),w("i",{class:"fas fa-plus fa-xs"})],-1),E={class:"row mt-3"},N=w("div",{class:"col-auto filter-title"}," Status ",-1),A={class:"col"},T=["onClick"],H={class:"row mt-3"},W=w("div",{class:"col-auto filter-title"}," Quest ",-1),z={class:"col"},J=["onClick"];_.render=function(e,a,t,s,l,o){const i=g("mode-filters"),r=g("filter-box");return B(),y("div",U,[v(r,{placeholder:"enter to search for song/username...","filter-value":e.filterValue,"onUpdate:filterValue":a[1]||(a[1]=a=>e.updateFilterValue(a))},{filters:k((()=>[v(i,{"filter-mode":e.filterMode,"onUpdate:filterMode":a[0]||(a[0]=a=>e.updateFilterMode(a))},null,8,["filter-mode"]),w("div",E,[N,w("div",A,[(B(!0),y(M,null,j(e.statuses,((a,t)=>(B(),y("a",{key:t,href:"#",class:O(["status",e.getStatusSortClass(t)]),onClick:$((a=>e.updateFilterStatus(t)),["prevent"])},L(a),11,T)))),128))])]),w("div",H,[W,w("div",z,[(B(!0),y(M,null,j(e.quests,((a,t)=>(B(),y("a",{key:t,href:"#",class:O(["quest",e.getQuestSortClass(t)]),onClick:$((a=>e.updateFilterQuest(t)),["prevent"])},L(a),11,J)))),128))])])])),default:k((()=>[R])),_:1},8,["filter-value"])])};var K=b({components:{BeatmapCard:r},computed:C("beatmaps",["hostedBeatmaps"]),methods:F("beatmaps",["setSelectedBeatmap"])});const X={class:"container card card-body py-3"},Y={class:"ms-2"},Z={href:"#hostedBeatmaps","data-bs-toggle":"collapse"},ee=w("i",{class:"fas fa-angle-down"},null,-1),ae={key:0,id:"hostedBeatmaps",class:"show"},te={key:0,class:"ms-5 text-white-50"};K.render=function(e,a,t,s,l,o){const i=g("beatmap-card");return B(),y("div",X,[w("h5",Y,[w("a",Z,[x(" My mapsets ("+L(e.hostedBeatmaps?e.hostedBeatmaps.length:"...")+") ",1),ee])]),e.hostedBeatmaps?(B(),y("div",ae,[v(D,{name:"list",tag:"div",class:"row"},{default:k((()=>[(B(!0),y(M,null,j(e.hostedBeatmaps,(t=>(B(),S(i,{key:t.id,beatmap:t,"onUpdate:selectedBeatmap":a[0]||(a[0]=a=>e.setSelectedBeatmap(a))},null,8,["beatmap"])))),128))])),_:1}),e.hostedBeatmaps.length?P("",!0):(B(),y("p",te," None... "))])):P("",!0)])};var se=b({components:{BeatmapCard:r},props:{isLoadingGuestBeatmaps:Boolean},computed:C("beatmaps",["guestDifficultyBeatmaps"]),methods:F("beatmaps",["setSelectedBeatmap"])});const le={class:"container card card-body py-3"},oe={class:"ms-2"},ie={href:"#guestDifficultyBeatmaps","data-bs-toggle":"collapse"},re=w("i",{class:"fas fa-angle-down"},null,-1),de={key:0,class:"ms-5 text-white-50"};se.render=function(e,a,t,s,l,o){const i=g("beatmap-card");return B(),y("div",le,[w("h5",oe,[w("a",ie,[x(" My guest difficulties ("+L(e.guestDifficultyBeatmaps&&!e.isLoadingGuestBeatmaps?e.guestDifficultyBeatmaps.length:"...")+") ",1),re])]),e.guestDifficultyBeatmaps?(B(),y("div",{key:0,id:"guestDifficultyBeatmaps",class:O(["collapse",{"loading-data":e.isLoadingGuestBeatmaps}])},[e.guestDifficultyBeatmaps.length||e.isLoadingGuestBeatmaps?P("",!0):(B(),y("p",de," None... ")),v(D,{name:"list",tag:"div",class:"row"},{default:k((()=>[(B(!0),y(M,null,j(e.guestDifficultyBeatmaps,(t=>(B(),S(i,{key:t.id,beatmap:t,"onUpdate:selectedBeatmap":a[0]||(a[0]=a=>e.setSelectedBeatmap(a))},null,8,["beatmap"])))),128))])),_:1})],2)):P("",!0)])};var me=b({name:"BeatmapTableRow",components:{BeatmapInfo:d,ProcessTasks:m,QuestImg:p,ModesIcons:Q},props:{beatmap:{type:Object,required:!0}},methods:{selectBeatmap(){this.$route.query.id!==this.beatmap.id&&this.$router.push(`/beatmaps?id=${this.beatmap.id}`)},formatMetadata(){const e=this.beatmap.song.artist+" - "+this.beatmap.song.title;return e.length>70?e.slice(0,70)+"...":e},statusBorder(){return this.beatmap.status?"card-status-"+this.beatmap.status.toLowerCase():""}}});const pe={class:"container"},ne={class:"row"},ce={class:"col-sm-6"},ue=["data-bs-target"],be=w("i",{class:"fas fa-angle-down"},null,-1),fe={class:"col-sm-2 small d-flex justify-content-end align-items-center"},he={class:"col-sm-3 small"},ge=w("span",{class:"text-white-50 me-1"},"Hosted by",-1),Be={key:0,class:"text-white-50"},ye={key:0,class:"col-sm-1 d-flex justify-content-end align-items-center"},ve=["href"],ke=[w("i",{class:"fas fa-link"},null,-1)],we=["id"];me.render=function(e,a,t,s,l,o){const i=g("quest-img"),r=g("process-tasks"),d=g("user-link"),m=g("modes-icons"),p=g("beatmap-info");return B(),y("div",null,[w("div",{class:O(["card card-body card-level-2 my-1 p-1",e.statusBorder()])},[w("div",pe,[w("div",ne,[w("div",ce,[v(i,{beatmap:e.beatmap},null,8,["beatmap"]),w("a",{href:"#","data-bs-toggle":"collapse","data-bs-target":"#details"+e.beatmap.id,onClick:a[0]||(a[0]=a=>e.selectBeatmap())},[x(L(e.formatMetadata())+" ",1),be],8,ue)]),w("div",fe,[v(r,{tasks:e.beatmap.tasks,"tasks-locked":e.beatmap.tasksLocked,mode:e.beatmap.mode},null,8,["tasks","tasks-locked","mode"])]),w("div",he,[ge,v(d,{class:"me-1",user:e.beatmap.host},null,8,["user"]),"osu"!==e.beatmap.mode?(B(),y("span",Be,[v(m,{modes:[e.beatmap.mode]},null,8,["modes"])])):P("",!0)]),e.beatmap.url?(B(),y("div",ye,[w("a",{href:e.beatmap.url,target:"_blank"},ke,8,ve)])):P("",!0)])])],2),w("div",{id:"details"+e.beatmap.id,class:O(["collapse my-2 mx-4 row border-end border-start py-3","border-"+e.beatmap.status.toLowerCase()])},[v(p,{beatmap:e.beatmap},null,8,["beatmap"])],10,we)])};var Me=b({components:{BeatmapTableRow:me},computed:f("beatmaps",{otherBeatmaps:"allBeatmaps",isLoadingOtherBeatmaps:"isLoadingOtherBeatmaps",filterValue:"filterValue"}),methods:{async showMore(e){e.target.disabled=!0,this.$store.commit("beatmaps/increaseFetchLimit"),await this.$store.dispatch("beatmaps/loadOtherBeatmaps"),e.target.disabled=!1}}});const je={class:"container card card-body py-3"},Oe={class:"ms-2"},$e={href:"#otherBeatmaps","data-bs-toggle":"collapse"},Le=w("i",{class:"fas fa-angle-down"},null,-1),xe={key:0,id:"otherBeatmaps",class:"collapse"},Ce={key:0,class:"ms-5 text-white-50"},Fe={key:1,class:"text-center"},Se=[w("i",{class:"fas fa-angle-down me-1"},null,-1),x(" show more "),w("i",{class:"fas fa-angle-down ms-1"},null,-1)];Me.render=function(e,a,t,s,l,o){const i=g("beatmap-table-row");return B(),y("div",je,[w("h5",Oe,[w("a",$e,[x(" Other beatmaps ("+L(e.otherBeatmaps&&!e.isLoadingOtherBeatmaps?e.otherBeatmaps.length:"...")+") ",1),Le])]),e.otherBeatmaps?(B(),y("div",xe,[w("div",{class:O({"loading-data":e.isLoadingOtherBeatmaps})},[e.otherBeatmaps.length||e.isLoadingOtherBeatmaps?P("",!0):(B(),y("p",Ce," None... ")),(B(!0),y(M,null,j(e.otherBeatmaps,(e=>(B(),S(i,{key:e.id,beatmap:e},null,8,["beatmap"])))),128)),e.filterValue?P("",!0):(B(),y("div",Fe,[w("button",{class:"btn btn-sm btn-outline-info my-4",onClick:a[0]||(a[0]=$((a=>e.showMore(a)),["prevent"]))},Se)]))],2)])):P("",!0)])};var De=b({name:"BeatmapPage",components:{BeatmapPageFilters:_,HostedBeatmaps:K,GuestDifficulties:se,OtherBeatmaps:Me,EditBeatmapModal:n,CreateBeatmapModal:c},data:()=>({isLoadingGuestBeatmaps:!0}),computed:f("beatmaps",["selectedBeatmap"]),beforeCreate(){this.$store.hasModule("beatmaps")||this.$store.registerModule("beatmaps",u)},async created(){const e=this.$route.query.id;let a,t;e?([a,t]=await Promise.all([this.$http.initialRequest("/beatmaps/relevantInfo"),this.$http.executeGet("/beatmaps/searchOnLoad/"+e)]),this.$http.isError(t)||(this.$store.commit("beatmaps/setSelectedBeatmap",t),this.$bs.showModal("editBeatmap"))):a=await this.$http.initialRequest("/beatmaps/relevantInfo"),this.$http.isError(a)||(this.$store.commit("beatmaps/setUserBeatmaps",a.beatmaps),this.$store.commit("beatmaps/setFilterMode",a.mainMode)),await Promise.all([this.loadGuestBeatmaps(),this.$store.dispatch("beatmaps/loadOtherBeatmaps")]),this.isLoadingGuestBeatmaps=!1},methods:{async loadGuestBeatmaps(){const e=await this.$http.executeGet("/beatmaps/guestBeatmaps");e&&this.$store.commit("beatmaps/setUserBeatmaps",e.userBeatmaps)}}});const Pe=w("div",{class:"radial-divisor"},null,-1),Ge=w("div",{class:"radial-divisor"},null,-1);De.render=function(e,a,t,s,l,o){const i=g("beatmap-page-filters"),r=g("hosted-beatmaps"),d=g("guest-difficulties"),m=g("other-beatmaps"),p=g("edit-beatmap-modal"),n=g("create-beatmap-modal");return B(),y("div",null,[v(i),v(r),Pe,v(d,{"is-loading-guest-beatmaps":e.isLoadingGuestBeatmaps},null,8,["is-loading-guest-beatmaps"]),Ge,v(m),v(p,{"selected-beatmap":e.selectedBeatmap},null,8,["selected-beatmap"]),v(n)])};export{De as default};
