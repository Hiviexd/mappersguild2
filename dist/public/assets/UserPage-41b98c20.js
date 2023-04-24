import{U as B}from"./UserInfo-9278c4f5.js";import{D}from"./DataTable-c7d0750a.js";import{d as A,m as S,_ as C,o as t,e as r,a as c,h,t as $,l as L,q as l,k as i,w as g,b as y,n as M,i as p,s as q,F as U,r as _,c as H,A as E}from"./index-3c4a2e8e.js";import{C as I}from"./CopyPaste-afb653c9.js";import"./ModalDialog-50371956.js";var v=(s=>(s.User="user",s.Admin="admin",s.Spectator="spectator",s.Secret="secret",s))(v||{});const T=A({components:{DataTable:D,UserInfo:B},props:{groupedUsers:{type:Array,default:()=>[]},group:{type:String,required:!0}},data(){return{selectedUserId:""}},computed:{...S({users:s=>s.usersAdmin.users}),selectedUser(){return this.users.find(s=>s.id===this.selectedUserId)},spectators(){return this.users.filter(s=>s.group==v.Spectator)}}}),N=["href"],F=c("i",{class:"fas fa-angle-down"},null,-1),G={key:0};function P(s,e,o,u,f,w){const d=p("user-link"),a=p("data-table"),k=p("user-info"),m=q("bs-tooltip");return t(),r("div",null,[c("a",{href:`#${s.group}`,"data-bs-toggle":"collapse",class:"ms-1",onClick:e[0]||(e[0]=L(()=>{},["prevent"]))},[c("h5",null,[h($(s.group)+" ",1),F])],8,N),s.groupedUsers.length?l("",!0):(t(),r("div",G," (still loading) ")),i(a,{id:s.group,class:"collapse",data:s.groupedUsers,headers:["USERNAME","RANK","QUEUED BADGE","BADGE"],"custom-data-target":`#editUser${s.group}`,"onUpdate:selectedId":e[1]||(e[1]=n=>s.selectedUserId=n)},{default:g(({obj:n})=>[c("td",null,[i(d,{user:n},null,8,["user"])]),c("td",null,[n.rank?y((t(),r("i",{key:0,class:M(["fas fa-crown","text-rank-"+n.rank])},null,2)),[[m,`rank ${n.rank} user`]]):l("",!0)]),c("td",{class:M({"bg-open":n.rank!=n.queuedBadge})},[n.queuedBadge?y((t(),r("i",{key:0,class:M(["fas fa-crown","text-rank-"+n.queuedBadge])},null,2)),[[m,`rank ${n.queuedBadge} user`]]):l("",!0)],2),c("td",{class:M({"bg-open":n.rank!=n.badge})},[n.badge?y((t(),r("i",{key:0,class:M(["fas fa-crown","text-rank-"+n.badge])},null,2)),[[m,`rank ${n.badge} user`]]):l("",!0)],2)]),_:1},8,["id","data","custom-data-target"]),i(k,{user:s.selectedUser,"current-group":s.group},null,8,["user","current-group"])])}const V=C(T,[["render",P]]);const R={name:"BotChatMessage",props:{messages:{type:Array,default(){return[]},required:!0},messageType:{type:String,required:!0},mongoId:{type:String,required:!0},users:{type:Array,default(){return[]}}},methods:{async sendMessages(s){if(confirm("Are you sure?")){let o="";switch(this.messageType){case"contest":o=`/admin/contests/${this.mongoId}/sendMessages`;break;case"showcase":o="/admin/users/sendMessages";break;default:return""}await this.$http.executePost(o,{users:this.users,messages:this.messages},s)}}}},O={class:"card card-body message-text small mb-2"};function j(s,e,o,u,f,w){return t(),r("div",null,[c("div",O,[(t(!0),r(U,null,_(o.messages,(d,a)=>(t(),r("span",{key:a},$(d),1))),128))]),o.users.length?(t(),r("a",{key:0,class:"btn btn-sm w-100 btn-success mb-2",onClick:e[0]||(e[0]=d=>w.sendMessages(d))}," Send messages ")):l("",!0)])}const z=C(R,[["render",j]]),J=A({name:"ShowcaseUserList",components:{CopyPaste:I,BotChatMessage:z},data(){return{osuUsers:[],taikoUsers:[],catchUsers:[],maniaUsers:[]}},computed:{uniqueUsers(){const s=this.osuUsers.concat(this.taikoUsers,this.catchUsers,this.maniaUsers),e=[];for(const o of s)e.find(f=>f.osuId==o.osuId)||e.push(o);return e},messages(){const s=[];return s.push(`hello! you're receiving this message because you marked yourself as a "FA showcase mapper" in the mappers guild https://osu.ppy.sh/home/news/2022-07-25-mappers-guild-updates#how-to-participate`),s.push("if you'd like to map an upcoming featured artist song for an announcement in October-December, send me some of the genres you'd like to map!"),s.push("i'll link some upcoming artists in return"),s.push("thank you!! -pishifat"),s}},methods:{async findShowcaseUsers(s){const e=await this.$http.executeGet("/admin/users/findShowcaseUsers",s);e&&!e.error&&(this.osuUsers=e.osuUsers,this.taikoUsers=e.taikoUsers,this.catchUsers=e.catchUsers,this.maniaUsers=e.maniaUsers)},async sendMessages(s,e){if(confirm("Are you sure you want to send messages to the user?")){const u=await this.$http.executePost("/admin/users/sendMessages",{users:[s],messages:this.messages},e);this.$http.isError(u)||this.$store.dispatch("updateToastMessages",{message:"sent",type:"info"})}}}});const K={class:"container card card-body py-1 my-2"},Q={key:1,class:"row"},W={key:0,class:"col-sm-3"},X=["onClick"],Y={key:1,class:"col-sm-3"},Z=["onClick"],x={key:2,class:"col-sm-3"},ss=["onClick"],es={key:3,class:"col-sm-3"},ts=["onClick"];function rs(s,e,o,u,f,w){const d=p("bot-chat-message"),a=p("user-link"),k=p("copy-paste"),m=q("bs-tooltip");return t(),r("div",K,[c("button",{class:"btn btn-sm w-100 btn-outline-info mb-3",onClick:e[0]||(e[0]=n=>s.findShowcaseUsers(n))}," Load FA showcase users "),s.uniqueUsers.length?(t(),H(d,{key:0,messages:s.messages,"message-type":"showcase","mongo-id":"",users:s.uniqueUsers},null,8,["messages","users"])):l("",!0),s.osuUsers.length&&s.taikoUsers.length&&s.catchUsers.length&&s.maniaUsers.length?(t(),r("div",Q,[s.osuUsers.length?(t(),r("div",W,[h(" osu! "),i(k,{distinct:"osu"},{default:g(()=>[(t(!0),r(U,null,_(s.osuUsers,n=>(t(),r("div",{key:n.id},[i(a,{user:n},null,8,["user"]),y(c("button",{class:"btn tiny-button btn-outline-info ms-1",onClick:b=>s.sendMessages(n,b)},null,8,X),[[m,"send messages"]])]))),128))]),_:1})])):l("",!0),s.taikoUsers.length?(t(),r("div",Y,[h(" osu!taiko "),i(k,{distinct:"taiko"},{default:g(()=>[(t(!0),r(U,null,_(s.taikoUsers,n=>(t(),r("div",{key:n.id},[i(a,{user:n},null,8,["user"]),y(c("button",{class:"btn tiny-button btn-outline-info ms-1",onClick:b=>s.sendMessages(n,b)},null,8,Z),[[m,"send messages"]])]))),128))]),_:1})])):l("",!0),s.catchUsers.length?(t(),r("div",x,[h(" osu!catch "),i(k,{distinct:"catch"},{default:g(()=>[(t(!0),r(U,null,_(s.catchUsers,n=>(t(),r("div",{key:n.id},[i(a,{user:n},null,8,["user"]),y(c("button",{class:"btn tiny-button btn-outline-info ms-1",onClick:b=>s.sendMessages(n,b)},null,8,ss),[[m,"send messages"]])]))),128))]),_:1})])):l("",!0),s.maniaUsers.length?(t(),r("div",es,[h(" osu!mania "),i(k,{distinct:"mania"},{default:g(()=>[(t(!0),r(U,null,_(s.maniaUsers,n=>(t(),r("div",{key:n.id},[i(a,{user:n},null,8,["user"]),y(c("button",{class:"btn tiny-button btn-outline-info ms-1",onClick:b=>s.sendMessages(n,b)},null,8,ts),[[m,"send messages"]])]))),128))]),_:1})])):l("",!0)])):l("",!0)])}const ns=C(J,[["render",rs],["__scopeId","data-v-d226a2f0"]]),os=A({name:"ShowcaseUserList",components:{CopyPaste:I},data(){return{osuUsers:[],taikoUsers:[],catchUsers:[],maniaUsers:[]}},computed:{uniqueUsers(){const s=this.osuUsers.concat(this.taikoUsers,this.catchUsers,this.maniaUsers),e=[];for(const o of s)e.find(f=>f.osuId==o.osuId)||e.push(o);return e},messages(){const s=[];return s.push(`hello! you're receiving this message because you marked yourself as a "FA showcase mapper" in the mappers guild https://i.imgur.com/aJt9uL1.png`),s.push("if you'd like to map an upcoming featured artist for an announcement in October-December, send me some of the genres you'd like to map!"),s.push("thank you!! -pishifat"),s}},methods:{async findContestHelperUsers(s){const e=await this.$http.executeGet("/admin/users/findContestHelperUsers",s);e&&!e.error&&(this.osuUsers=e.osuUsers,this.taikoUsers=e.taikoUsers,this.catchUsers=e.catchUsers,this.maniaUsers=e.maniaUsers)}}}),as={class:"container card card-body py-1 my-2"},is={key:0,class:"row"},us={key:0,class:"col-sm-3"},ds={key:1,class:"col-sm-3"},cs={key:2,class:"col-sm-3"},ls={key:3,class:"col-sm-3"};function ps(s,e,o,u,f,w){const d=p("copy-paste");return t(),r("div",as,[c("button",{class:"btn btn-sm w-100 btn-outline-info mb-3",onClick:e[0]||(e[0]=a=>s.findContestHelperUsers(a))}," Load contest helper users "),s.osuUsers&&s.taikoUsers&&s.catchUsers&&s.maniaUsers?(t(),r("div",is,[s.osuUsers.length?(t(),r("div",us,[h(" osu! "),i(d,{distinct:"osu"},{default:g(()=>[(t(!0),r(U,null,_(s.osuUsers,a=>(t(),r("div",{key:a.id},$(a.username),1))),128))]),_:1})])):l("",!0),s.taikoUsers.length?(t(),r("div",ds,[h(" osu!taiko "),i(d,{distinct:"taiko"},{default:g(()=>[(t(!0),r(U,null,_(s.taikoUsers,a=>(t(),r("div",{key:a.id},$(a.username),1))),128))]),_:1})])):l("",!0),s.catchUsers.length?(t(),r("div",cs,[h(" osu!catch "),i(d,{distinct:"catch"},{default:g(()=>[(t(!0),r(U,null,_(s.catchUsers,a=>(t(),r("div",{key:a.id},$(a.username),1))),128))]),_:1})])):l("",!0),s.maniaUsers.length?(t(),r("div",ls,[h(" osu!mania "),i(d,{distinct:"mania"},{default:g(()=>[(t(!0),r(U,null,_(s.maniaUsers,a=>(t(),r("div",{key:a.id},$(a.username),1))),128))]),_:1})])):l("",!0)])):l("",!0)])}const ms=C(os,[["render",ps]]),hs=A({name:"DiscordHighlightGenerator",components:{CopyPaste:I},data(){return{inputUsers:"",users:[]}},computed:{discordHighlights(){let s="";for(const e of this.users)s+=`<@${e.discordId}> `;return s}},methods:{async generateDiscordHighlights(s){const e=await this.$http.executePost("/admin/users/findInputUsers",{inputUsers:this.inputUsers},s);e&&!e.error&&(this.users=e.users)}}}),gs={class:"container card card-body py-1 mb-4"},fs={key:0};function Us(s,e,o,u,f,w){const d=p("copy-paste");return t(),r("div",gs,[y(c("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.inputUsers=a),class:"form-control form-control-sm mx-2 mt-2 w-100",type:"text",autocomplete:"off",placeholder:"usernames separated by newlines..."},null,512),[[E,s.inputUsers]]),c("button",{class:"btn btn-sm w-100 btn-outline-info",onClick:e[1]||(e[1]=a=>s.generateDiscordHighlights(a))}," Generate Discord highlights "),s.users.length?(t(),r("div",fs,[i(d,null,{default:g(()=>[h($(s.discordHighlights),1)]),_:1})])):l("",!0)])}const _s=C(hs,[["render",Us]]),ks={state:{users:[]},mutations:{setUsers(s,e){s.users=e},updateBadge(s,e){const o=s.users.find(u=>u.id==e.userId);o&&(o.queuedBadge=e.badge)},updateDiscordId(s,e){const o=s.users.find(u=>u.id==e.userId);o&&(o.discordId=e.discordId)},updateBypassLogin(s,e){const o=s.users.find(u=>u.id==e.userId);o&&(o.bypassLogin=e.bypassLogin)},updateIsShowcaseMapper(s,e){const o=s.users.find(u=>u.id==e.userId);o&&(o.isShowcaseMapper=e.isShowcaseMapper)},updateIsMentorshipAdmin(s,e){const o=s.users.find(u=>u.id==e.userId);o&&(o.isMentorshipAdmin=e.isMentorshipAdmin)}}},ys=ks,bs=A({components:{AdminUserTable:V,ShowcaseUserList:ns,ContestHelperUserList:ms,DiscordHighlightGenerator:_s},data(){return{selectedUserId:""}},computed:{...S({users:s=>s.usersAdmin.users}),selectedUser(){return this.users.find(s=>s.id===this.selectedUserId)},spectators(){return this.users.filter(s=>s.group==v.Spectator)},normalUsers(){return this.users.filter(s=>s.group==v.User)},showcaseUsers(){return this.users.filter(s=>s.group==v.Secret)},admins(){return this.users.filter(s=>s.group==v.Admin)}},beforeCreate(){this.$store.hasModule("usersAdmin")||this.$store.registerModule("usersAdmin",ys)},unmounted(){this.$store.hasModule("usersAdmin")&&this.$store.unregisterModule("usersAdmin")},async created(){const s=await this.$http.initialRequest("/admin/users/load");this.$http.isError(s)||this.$store.commit("setUsers",s)}}),$s={class:"container card card-body"},ws=c("h4",{class:"mt-2"},"Groups",-1);function vs(s,e,o,u,f,w){const d=p("admin-user-table"),a=p("showcase-user-list"),k=p("contest-helper-user-list"),m=p("discord-highlight-generator");return t(),r("div",null,[c("div",$s,[ws,i(d,{"grouped-users":s.admins,group:"admin"},null,8,["grouped-users"]),i(d,{"grouped-users":s.showcaseUsers,group:"secret"},null,8,["grouped-users"]),i(d,{"grouped-users":s.normalUsers,group:"user"},null,8,["grouped-users"]),i(d,{"grouped-users":s.spectators,group:"spectator"},null,8,["grouped-users"])]),i(a),i(k),i(m)])}const qs=C(bs,[["render",vs]]);export{qs as default};
