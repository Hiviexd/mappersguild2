import{O as I,d as y,P as L,R as D,S as P,m as f,A as T,U as M,_ as $,o as l,c as b,w as k,r as a,a as e,k as o,t as g,e as u,l as q,j as c,s as C,u as B,V as U,y as F,x as A,W as E,F as x,f as V}from"./index-df1d1ba3.js";import{F as z,M as N}from"./extras-fca724c1.js";import{M as R}from"./ModalDialog-1b815070.js";import{F as Y}from"./FilterBox-4a2b5f85.js";const j={namespaced:!0,state:{filterValue:"",filterMode:"",selectedMissionId:null,missions:[],userBeatmaps:[],isLoadingMissions:!0,isFirstLoadDone:!1,exampleMission:null},mutations:{setFirstLoadDone(s){s.isFirstLoadDone=!0},setMissions(s,i){s.missions=i},setUserBeatmaps(s,i){s.userBeatmaps=i},setFilterValue(s,i){s.filterValue=i},setExampleMission(s,i){s.exampleMission=i},setFilterMode(s,i){s.filterMode=i},setSelectedMissionId(s,i){s.selectedMissionId=i},updateMission(s,i){const t=s.missions.findIndex(r=>r.id===i.id);t!==-1&&(s.missions[t]=i)}},getters:{filteredMissions:s=>{let i=s.missions;if(s.filterMode!==z.any){const t=s.filterMode;i=i.filter(r=>r.modes.includes(t))}return s.filterValue.length>2&&(i=i.filter(t=>t.name.toLowerCase().includes(s.filterValue.toLowerCase()))),i},openMissions:(s,i)=>i.filteredMissions.filter(t=>t.status==I.Open),closedMissions:(s,i)=>i.filteredMissions.filter(t=>t.status==I.Closed),selectedMission:s=>s.missions.find(i=>i.id===s.selectedMissionId)},actions:{updateFilterValue({commit:s},i){s("setFilterValue",i)},updateFilterMode({commit:s},i){s("setFilterValue",""),s("setFilterMode",i)}}},G=j,O=y({name:"MissionCard",components:{AssociatedBeatmaps:L,AddBeatmapToMission:D,MissionDetails:P,ModalDialog:R},computed:{...f(["loggedInUser"]),...T("missions",["selectedMission"]),findTierImage(){switch(this.selectedMission.tier){case 1:return"/images/bronze.png";case 2:return"/images/silver.png";case 3:return"/images/gold.png";case 4:return"/images/platinum.png";default:return"/images/bronze.png"}},cleanModes(){const s=[];for(const i of this.selectedMission.modes)switch(i){case M.Osu:s.push("osu!");break;case M.Taiko:s.push("osu!taiko");break;case M.Catch:s.push("osu!catch");break;case M.Mania:s.push("osu!mania");break}return s}}});const S=s=>(C("data-v-19b06947"),s=s(),B(),s),H=["href"],W={key:0,class:"text-primary small"},J={class:"container"},K={class:"text-center"},Q=["src"],X={class:"fs-4"},Z=S(()=>e("hr",null,null,-1)),ss=S(()=>e("hr",null,null,-1));function es(s,i,t,r,p,v){const m=a("mission-details"),_=a("add-beatmap-to-mission"),d=a("associated-beatmaps"),w=a("modal-dialog");return l(),b(w,{id:"editMission","header-class":`bg-rank-${s.selectedMission?s.selectedMission.tier:1}`,loaded:Boolean(s.selectedMission)},{header:k(()=>[e("a",{href:`/missions?id=${s.selectedMission.id}`,target:"_blank",class:"text-dark"},[o(g(s.selectedMission.name)+" ",1),s.selectedMission.modes&&s.selectedMission.modes.length&&s.selectedMission.modes.length<4?(l(),u("span",W,"("+g(s.cleanModes.join(", ")+" only")+")",1)):q("",!0)],8,H)]),default:k(()=>[e("div",J,[e("div",K,[e("img",{src:s.findTierImage,class:"info-mission-tier"},null,8,Q),e("div",X,[e("b",null,g(s.selectedMission.name.trim()),1)]),e("div",null,[e("b",null,"Tier "+g(s.selectedMission.tier),1),o(" priority quest")]),Z]),c(m,{mission:s.selectedMission},null,8,["mission"]),ss,e("div",null,[s.selectedMission.status=="open"?(l(),b(_,{key:0,mission:s.selectedMission},null,8,["mission"])):q("",!0),c(d,{mission:s.selectedMission},null,8,["mission"])])])]),_:1},8,["header-class","loaded"])}const is=$(O,[["render",es],["__scopeId","data-v-19b06947"]]),os=y({name:"MissionInformation",components:{ExampleMission:U},computed:{...f("missions",["exampleMission"])}});const n=s=>(C("data-v-18bd0391"),s=s(),B(),s),ts={class:"container card card-body py-3 mb-2"},ns=n(()=>e("i",{class:"fas fa-angle-down"},null,-1)),ls={id:"missionInformation",class:"collapse ms-4 mb-2"},as=n(()=>e("div",{class:"small text-secondary"},[o(" Priority quests differ from "),e("a",{href:"/quests"},"normal quests"),o(" in a few ways: "),e("ol",null,[e("li",null,[e("b",null,"You don't need to claim a priority quest to participate."),o(" You only need to make a map and connect it to the quest!")]),e("li",null,[e("b",null,"Some priority quests have user-specific requirements."),o(" These generally aim to give newer mappers an opportunity to get involved, like only allowing users without ranked maps to participate.")]),e("li",null,[e("b",null,"Multiple users can complete the same quest."),o(" This depends on the quest's win condition.")])]),o(" Here's a breakdown of this example priority quest: ")],-1)),rs=n(()=>e("i",{class:"fas fa-angle-down"},null,-1)),ds={id:"missionRewards",class:"collapse ms-4 mb-2 small text-secondary"},cs=n(()=>e("b",null,"The host",-1)),ms=n(()=>e("li",null,[e("b",null,"Progress towards a profile badge specific to priority quests."),o(" You'll need to host 3 beatmapsets that complete priority quests to earn the badge!")],-1)),us=["src"],ps=n(()=>e("li",null,[e("b",null,"Customized mapping keychain for each priority quest completed:")],-1)),_s={class:"row"},hs={class:"col-sm-4"},fs=["src"],Ms=n(()=>e("ul",null,[e("li",null," Front: Pattern from your beatmap. "),e("li",null," Back: Your username and Mappers' Guild logos. "),e("li",null," Depending on your country, shipping may be difficult (or even impossible). These are being made and shipped individually by pishifat, so don't expect the efficiency of a professional company! ")],-1)),gs={class:"col-sm-6"},bs=["src"],ys=n(()=>e("b",null,"All users",-1)),$s=n(()=>e("li",null,[e("b",null,"+2 bonus points per difficulty on a ranked beatmap."),o(" This scales with length, so longer maps earn more points")],-1)),vs=n(()=>e("li",null,[e("b",null,"Variable points for completing a priority quest."),o(" This depends on the quest's difficulty tier:")],-1)),ws=["src"],ks=n(()=>e("b",null,"Tier 1:",-1)),qs=["src"],Fs=n(()=>e("b",null,"Tier 2:",-1)),Is=["src"],xs=n(()=>e("b",null,"Tier 3:",-1)),Vs=["src"],Ts=n(()=>e("b",null,"Tier 4:",-1)),Cs=n(()=>e("ul",null,[e("li",null,[e("b",null,"+1 bonus point per difficulty (also scaling with length) on a ranked beatmap")])],-1));function Bs(s,i,t,r,p,v){const m=a("example-mission");return l(),u("div",ts,[e("a",{href:"#missionInformation","data-bs-toggle":"collapse",onClick:i[0]||(i[0]=F(()=>{},["prevent"]))},[o(" How do priority quests work? "),ns]),e("div",ls,[as,c(m,{mission:s.exampleMission},null,8,["mission"])]),e("a",{href:"#missionRewards","data-bs-toggle":"collapse",onClick:i[1]||(i[1]=F(()=>{},["prevent"]))},[o(" What are the rewards for completing a priority quest? "),rs]),e("div",ds,[cs,o(" of a beatmap that completes a priority quest earns: "),e("ul",null,[ms,e("img",{class:"ms-2 text-center rounded",src:"/images/questbadge.png"},null,8,us),ps,e("div",_s,[e("div",hs,[e("img",{class:"text-center w-100 ms-2 rounded",src:"/images/examplemap.png"},null,8,fs),Ms]),e("div",gs,[e("img",{class:"ms-2 text-center w-100 rounded",src:"/images/keychain.jpg"},null,8,bs)])])]),ys,o(" involved in a beatmap that completes a priority quest earn: "),e("ul",null,[$s,vs,e("ul",null,[e("li",null,[e("img",{class:"tier-example me-1",src:"/images/bronze.png"},null,8,ws),ks,o(" 7 points ")]),e("li",null,[e("img",{class:"tier-example me-1",src:"/images/silver.png"},null,8,qs),Fs,o(" 10 points ")]),e("li",null,[e("img",{class:"tier-example me-1",src:"/images/gold.png"},null,8,Is),xs,o(" 13 points ")]),e("li",null,[e("img",{class:"tier-example me-1",src:"/images/platinum.png"},null,8,Vs),Ts,o(" 20 points ")])])]),o(" Anyone who participates in a map linked to a priority questearns: "),Cs])])}const Ss=$(os,[["render",Bs],["__scopeId","data-v-18bd0391"]]),Ls=y({name:"MissionPageFilters",components:{FilterBox:Y,ModeFilters:N},computed:{...f("missions",["filterMode"])},methods:A("missions",["updateFilterValue","updateFilterMode"])}),Ds={class:"container card card-body py-3 mb-2"};function Ps(s,i,t,r,p,v){const m=a("mode-filters"),_=a("filter-box");return l(),u("div",Ds,[c(_,{placeholder:"filter by quest name...","onUpdate:filterValue":i[1]||(i[1]=d=>s.updateFilterValue(d))},{filters:k(()=>[c(m,{"filter-mode":s.filterMode,"onUpdate:filterMode":i[0]||(i[0]=d=>s.updateFilterMode(d))},null,8,["filter-mode"])]),_:1})])}const Us=$(Ls,[["render",Ps]]),As=y({name:"MissionPage",components:{MissionCard:E,MissionInformation:Ss,MissionPageFilters:Us,MissionInfoModal:is},computed:{...f(["loggedInUser"]),...f("missions",["isFirstLoadDone","isLoadingMissions"]),...T("missions",["openMissions","closedMissions","selectedMission"])},beforeCreate(){this.$store.hasModule("missions")||this.$store.registerModule("missions",G)},async created(){const s=this.$route.query.id;let i="/missions/relevantInfo";const t=await this.$http.initialRequest(i);this.$http.isError(t)||(this.$store.commit("missions/setMissions",t.missions),this.$store.commit("missions/setUserBeatmaps",t.beatmaps),this.$store.commit("missions/setFilterMode",this.loggedInUser.mainMode),this.$store.commit("missions/setFirstLoadDone"),s&&t.missions.some(p=>p.id==s)&&(this.$store.commit("missions/setSelectedMissionId",s),this.$bs.showModal("editMission")));const r=await this.$http.executeGet("/exampleMission");this.$http.isError(r)||this.$store.commit("missions/setExampleMission",r)}}),Es=e("div",{class:"radial-divisor"},null,-1),zs={class:"container card card-body my-2"},Ns=e("h4",null,"Active priority quests",-1),Rs={key:0,class:"container card card-body my-4"},Ys=e("i",{class:"fas fa-angle-down"},null,-1),js={id:"closedMissions",class:"collapse"};function Gs(s,i,t,r,p,v){const m=a("mission-page-filters"),_=a("mission-information"),d=a("mission-card"),w=a("mission-info-modal");return l(),u("div",null,[c(m),c(_),Es,e("div",zs,[Ns,(l(!0),u(x,null,V(s.openMissions,h=>(l(),b(d,{key:h.id,mission:h},null,8,["mission"]))),128))]),s.closedMissions&&s.closedMissions.length?(l(),u("div",Rs,[e("h4",null,[e("a",{href:"#closedMissions","data-bs-toggle":"collapse",onClick:i[0]||(i[0]=F(()=>{},["prevent"]))},[o(" Inactive priority quests "),Ys])]),e("div",js,[(l(!0),u(x,null,V(s.closedMissions,h=>(l(),b(d,{key:h.id,mission:h},null,8,["mission"]))),128))])])):q("",!0),c(w)])}const Ks=$(As,[["render",Gs]]);export{Ks as default};
