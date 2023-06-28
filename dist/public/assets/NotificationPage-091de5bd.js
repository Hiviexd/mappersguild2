import{d as w,_ as P,o as s,e as o,a as i,k as y,h as c,t as n,l as v,q as m,i as p,M as A,c as _,w as b,r as I,n as N,F as M,T as C}from"./index-8c73bd06.js";import{M as B}from"./ModalDialog-a7cb74be.js";import{U as q}from"./UserLinkList-2e2f20fa.js";import{a as L}from"./task-0811ab65.js";const E=w({name:"NotificationCard",props:{notification:{type:Object,required:!0}},emits:["update:selectedMap","update:selectedParty","hideNotification"],methods:{hideNotification(t){this.$emit("hideNotification",{id:this.notification.id,e:t})},selectBeatmap(){this.$emit("update:selectedMap",this.notification.map)},selectParty(){this.$emit("update:selectedParty",this.notification.party)}}}),O={class:"col-md-12 my-1"},j={class:"card card-body card-level-2 p-2"},U={class:"card-text small"},z={key:0},D={key:0},R=["href"],T={key:1},V=i("i",{class:"far fa-window-maximize"},null,-1),S=[V],F={key:1},H=i("i",{class:"far fa-window-maximize"},null,-1),G=[H],J=i("hr",null,null,-1),K={class:"d-flex justify-content-between align-items-center"},Q={class:"card-text small"};function W(t,e,l,r,u,k){const f=p("user-link");return s(),o("div",O,[i("div",j,[i("div",U,[y(f,{user:t.notification.sender},null,8,["user"]),c(" "+n(t.notification.info)+" ",1),t.notification.map?(s(),o("span",z,[t.notification.map.url?(s(),o("span",D,[i("a",{href:t.notification.map.url,target:"_blank"},'"'+n(t.notification.map.song.artist)+" - "+n(t.notification.map.song.title)+'"',9,R)])):(s(),o("span",T,'"'+n(t.notification.map.song.artist)+" - "+n(t.notification.map.song.title)+'"',1)),i("a",{href:"#",class:"text-done ms-1","data-bs-toggle":"modal","data-bs-target":"#limitedEditBeatmap",onClick:e[0]||(e[0]=v(a=>t.selectBeatmap(),["prevent"]))},S)])):m("",!0),t.notification.party?(s(),o("span",F,[c(' for quest "'+n(t.notification.quest.name)+'" ',1),i("a",{href:"#",class:"text-done","data-bs-toggle":"modal","data-bs-target":"#limitedEditParty",onClick:e[1]||(e[1]=v(a=>t.selectParty(),["prevent"]))},G)])):m("",!0)]),J,i("div",K,[i("span",Q,n(t.notification.createdAt.slice(0,10)),1),i("button",{class:"btn btn-outline-info btn-sm",onClick:e[2]||(e[2]=v(a=>t.hideNotification(a),["prevent"]))}," Mark as read ")])])])}const X=P(E,[["render",W]]),Y=w({name:"InviteCard",props:{invite:{type:Object,required:!0}},emits:["update:selectedMap","update:selectedParty","hideInvite","acceptInvite"],data(){return{info:""}},methods:{selectBeatmap(){this.$emit("update:selectedMap",this.invite.map)},selectParty(){this.$emit("update:selectedParty",this.invite.party)},hideInvite(t){this.$emit("hideInvite",{id:this.invite.id,e:t})},acceptInvite(t){this.$emit("acceptInvite",{id:this.invite.id,e:t})}}}),Z={class:"col-md-12 my-1"},x={class:"card card-body card-level-2 p-2"},tt={class:"card-text small"},et={key:0},it={key:0},st=["href"],nt={key:1},ot=i("i",{class:"far fa-window-maximize"},null,-1),at=[ot],dt={key:1},lt=i("i",{class:"far fa-window-maximize"},null,-1),rt=[lt],ct=i("hr",null,null,-1),pt={class:"d-flex justify-content-between align-items-center"},mt={class:"card-text small"},ut={class:"text-danger small"};function ft(t,e,l,r,u,k){const f=p("user-link");return s(),o("div",Z,[i("div",x,[i("div",tt,[y(f,{user:t.invite.sender},null,8,["user"]),c(" "+n(t.invite.info)+" ",1),t.invite.map?(s(),o("span",et,[t.invite.map.url?(s(),o("span",it,[i("a",{href:t.invite.map.url,target:"_blank"},n(t.invite.map.song.artist)+" - "+n(t.invite.map.song.title),9,st)])):(s(),o("span",nt,n(t.invite.map.song.artist)+" - "+n(t.invite.map.song.title),1)),i("a",{href:"#",class:"text-done ms-1","data-bs-toggle":"modal","data-bs-target":"#limitedEditBeatmap",onClick:e[0]||(e[0]=v(a=>t.selectBeatmap(),["prevent"]))},at)])):m("",!0),t.invite.party?(s(),o("span",dt,[c('for quest "'+n(t.invite.quest.name)+'" ',1),i("a",{href:"#",class:"text-done","data-bs-toggle":"modal","data-bs-target":"#limitedEditParty",onClick:e[1]||(e[1]=v(a=>t.selectParty(),["prevent"]))},rt)])):m("",!0)]),ct,i("div",pt,[i("span",mt,n(t.invite.createdAt.toString().slice(0,10)),1),c(),i("span",ut,n(t.info),1),i("div",null,[i("button",{class:"btn btn-outline-danger btn-sm mx-1",onClick:e[2]||(e[2]=v(a=>t.hideInvite(a),["prevent"]))}," Decline "),i("button",{class:"btn btn-outline-info btn-sm",onClick:e[3]||(e[3]=v(a=>t.acceptInvite(a),["prevent"]))}," Accept ")])])])])}const ht=P(Y,[["render",ft]]),vt=w({name:"LimitedMapInfo",components:{ModalDialog:B,UserLinkList:q,ModesIcons:A},props:{beatmap:{type:Object,required:!0}},computed:{sortTasks(){const t=Object.values(L);return{...this.beatmap}.tasks.sort(function(l,r){return t.indexOf(l.name)-t.indexOf(r.name)})}}}),$t={class:"container"},yt={class:"row"},_t={class:"col-sm-12"},bt={class:"table table-sm"},kt=i("th",{scope:"col"}," Difficulty ",-1),gt=i("th",{scope:"col"}," Mapper(s) ",-1),wt={key:0,scope:"col"},Pt=["id"],It={scope:"row"},Mt={scope:"row"};function Ct(t,e,l,r,u,k){const f=p("modes-icons"),a=p("user-link-list"),g=p("modal-dialog");return s(),_(g,{id:"limitedEditBeatmap","modal-size":"md","header-class":t.beatmap?"bg-"+t.beatmap.status.toLowerCase():"",loaded:Boolean(t.beatmap)},{header:b(()=>[c(n(t.beatmap.song.artist)+" - "+n(t.beatmap.song.title)+" ("+n(t.beatmap.host.username)+") ",1),t.beatmap.mode!=="osu"?(s(),_(f,{key:0,modes:[t.beatmap.mode]},null,8,["modes"])):m("",!0)]),default:b(()=>[i("div",$t,[i("div",yt,[i("div",_t,[i("table",bt,[i("thead",null,[i("tr",null,[kt,gt,t.beatmap.status!="Ranked"?(s(),o("th",wt," Status ")):m("",!0)])]),y(C,{id:"difficulties",tag:"tbody",name:"list"},{default:b(()=>[(s(!0),o(M,null,I(t.beatmap.tasks,$=>(s(),o("tr",{id:$.id+"Row",key:$.id},[i("td",It,n($.name),1),i("td",Mt,[y(a,{users:$.mappers},null,8,["users"])]),t.beatmap.status!="Ranked"?(s(),o("td",{key:0,scope:"row",class:N($.status.toLowerCase())},n($.status),3)):m("",!0)],8,Pt))),128))]),_:1})])])])])]),_:1},8,["header-class","loaded"])}const Nt=P(vt,[["render",Ct]]),Bt=w({name:"LimitedPartyInfo",components:{ModalDialog:B,UserLinkList:q},props:{party:{type:Object,required:!0}}});function qt(t,e,l,r,u,k){const f=p("user-link-list"),a=p("user-link"),g=p("modal-dialog");return s(),_(g,{id:"limitedEditParty","header-class":t.party?"bg-rank-"+t.party.rank:"",loaded:Boolean(t.party)},{header:b(()=>[c(n(t.party.leader.username)+"'s party ",1)]),default:b(()=>[i("p",null,[c(" Members: ("),i("span",{class:N(t.party.id+"-member-count")},n(t.party.members.length),3),c(") ")]),i("p",null,[y(f,{users:t.party.members},null,8,["users"])]),i("p",null,[c(" Leader: "),y(a,{user:t.party.leader},null,8,["user"])]),i("p",null," Rank: "+n(t.party.rank),1)]),_:1},8,["header-class","loaded"])}const At=P(Bt,[["render",qt]]),Lt=w({name:"NotificationPage",components:{NotificationCard:X,InviteCard:ht,LimitedMapInfo:Nt,LimitedPartyInfo:At},data(){return{notifications:[],invites:[],info:"",selectedMap:null,selectedParty:null}},async created(){const t=await this.$http.initialRequest("/notifications/relevantInfo");t&&(this.notifications=t.notifications,this.invites=t.invites)},methods:{async hideNotification(t){const e=t.id,l=t.e,r=this.notifications.findIndex(u=>u.id===e);this.notifications.splice(r,1),await this.$http.executePost(`/notifications/${e}/hide`,{},l)},async hideAll(t){this.notifications=[],await this.$http.executePost("/notifications/hideAll/",{},t)},async hideInvite(t){const e=t.id,l=t.e,r=this.invites.findIndex(u=>u.id===e);this.invites.splice(r,1),await this.$http.executePost(`/invites/${e}/hide`,{},l)},async declineAll(t){this.invites=[],await this.$http.executePost("/invites/declineAll/",{},t)},async acceptInvite(t){const e=t.id,l=t.e,r=await this.$http.executePost(`/invites/${e}/accept`,{},l);if(!this.$http.isError(r)){const u=this.invites.findIndex(k=>k.id===e);this.invites.splice(u,1)}}}}),Et={class:"container card card-body py-3 mb-2"},Ot={class:"row"},jt={class:"col-md-6"},Ut={key:0,class:"ms-4"},zt={class:"col-md-6"},Dt={key:0,class:"ms-4"};function Rt(t,e,l,r,u,k){const f=p("notification-card"),a=p("invite-card"),g=p("limited-map-info"),$=p("limited-party-info");return s(),o("div",null,[i("div",Et,[i("div",Ot,[i("div",jt,[i("h2",null,[c(" Notifications "),i("button",{class:"btn btn-outline-info btn-sm ms-1",onClick:e[0]||(e[0]=v(h=>t.hideAll(h),["prevent"]))}," Mark all as read ")]),y(C,{name:"list",tag:"div",class:"row"},{default:b(()=>[(s(!0),o(M,null,I(t.notifications,h=>(s(),_(f,{key:h.id,notification:h,"onUpdate:selectedMap":e[1]||(e[1]=d=>t.selectedMap=d),"onUpdate:selectedParty":e[2]||(e[2]=d=>t.selectedParty=d),onHideNotification:e[3]||(e[3]=d=>t.hideNotification(d))},null,8,["notification"]))),128))]),_:1}),t.notifications.length?m("",!0):(s(),o("p",Ut," No notifications... "))]),i("div",zt,[i("h2",null,[c(" Invites "),i("button",{class:"btn btn-outline-danger btn-sm ms-1",onClick:e[4]||(e[4]=v(h=>t.declineAll(h),["prevent"]))}," Decline all ")]),y(C,{name:"list",tag:"div",class:"row"},{default:b(()=>[(s(!0),o(M,null,I(t.invites,h=>(s(),_(a,{key:h.id,invite:h,"onUpdate:info":e[5]||(e[5]=d=>t.info=d),"onUpdate:selectedMap":e[6]||(e[6]=d=>t.selectedMap=d),"onUpdate:selectedParty":e[7]||(e[7]=d=>t.selectedParty=d),onHideInvite:e[8]||(e[8]=d=>t.hideInvite(d)),onAcceptInvite:e[9]||(e[9]=d=>t.acceptInvite(d))},null,8,["invite"]))),128))]),_:1}),t.invites.length?m("",!0):(s(),o("p",Dt," No invites... "))])])]),t.selectedMap?(s(),_(g,{key:0,beatmap:t.selectedMap},null,8,["beatmap"])):m("",!0),t.selectedParty?(s(),_($,{key:1,party:t.selectedParty},null,8,["party"])):m("",!0)])}const Ht=P(Lt,[["render",Rt]]);export{Ht as default};
