import{d as c,M as d,_ as i,o as t,e as o,a as s,c as l,l as m,t as n,r as u}from"./index-f2084d68.js";const p=c({name:"ContestCard",components:{ModesIcons:d},props:{contest:{type:Object,required:!0},route:{type:String,required:!0}},data(){return{contestName:""}},methods:{selectContest(){this.$store.commit("setSelectedContestId",this.contest.id),this.$route.query.id!==this.contest.id&&this.$router.replace(`/contests/${this.route}?contest=${this.contest.id}`)}}}),h={class:"card card-hover card-level-2 card-body"},C={class:"mb-2"},_={class:"me-1"},$=["href"],f={key:1},k={class:"text-secondary"};function y(e,r,v,b,g,B){const a=u("modes-icons");return t(),o("div",{onClick:r[0]||(r[0]=q=>e.selectContest())},[s("div",h,[s("div",C,[s("span",_,[e.contest.mode?(t(),l(a,{key:0,modes:[e.contest.mode]},null,8,["modes"])):m("",!0)]),e.contest.url&&e.contest.url.length?(t(),o("a",{key:0,href:e.contest.url,target:"_blank"},n(e.contest.name),9,$)):(t(),o("span",f,n(e.contest.name),1))]),s("div",k,n(e.contest.status=="complete"||e.contest.status=="hidden"||e.contest.status=="locked"?e.contest.status:e.contest.status+" phase"),1)])])}const S=i(p,[["render",y]]);export{S as C};
