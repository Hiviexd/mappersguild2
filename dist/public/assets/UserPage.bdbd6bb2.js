var s=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(s,e)=>{for(var t in e||(e={}))a.call(e,t)&&n(s,t,e[t]);if(r)for(var t of r(e))o.call(e,t)&&n(s,t,e[t]);return s},u=(s,r)=>e(s,t(r));import{_ as d}from"./UserInfo.ae97e797.js";import{_ as c}from"./DataTable.01cd035d.js";import{d as l,m as h,h as p,i as m,o as U,b as g,f,k as y,t as k,q as b,e as v,j as w,w as I,l as A,n as $,p as D,a as _,F as S,g as j,H as C}from"./vendor.b9ef672a.js";import{_ as M}from"./CopyPaste.4b23b3fb.js";import"./ModalDialog.4a9168b4.js";var H=l({components:{DataTable:c,UserInfo:d},props:{groupedUsers:{type:Array,default:()=>[]},group:{type:String,required:!0}},data:()=>({selectedUserId:""}),computed:u(i({},h({users:s=>s.usersAdmin.users})),{selectedUser(){return this.users.find((s=>s.id===this.selectedUserId))}})});const O=["href"],q=f("i",{class:"fas fa-angle-down"},null,-1),x={key:0};H.render=function(s,e,t,r,a,o){const n=p("user-link"),i=p("data-table"),u=p("user-info"),d=m("bs-tooltip");return U(),g("div",null,[f("a",{href:`#${s.group}`,"data-bs-toggle":"collapse",class:"ms-1",onClick:e[0]||(e[0]=b((()=>{}),["prevent"]))},[f("h5",null,[y(k(s.group)+" ",1),q])],8,O),s.groupedUsers.length?v("",!0):(U(),g("div",x," (still loading) ")),w(i,{id:s.group,class:"collapse",data:s.groupedUsers,headers:["USERNAME","RANK","QUEUED BADGE","BADGE"],"custom-data-target":`#editUser${s.group}`,"onUpdate:selectedId":e[1]||(e[1]=e=>s.selectedUserId=e)},{default:I((({obj:s})=>[f("td",null,[w(n,{user:s},null,8,["user"])]),f("td",null,[s.rank?A((U(),g("i",{key:0,class:$(["fas fa-crown","text-rank-"+s.rank])},null,2)),[[d,`rank ${s.rank} user`]]):v("",!0)]),f("td",{class:$({"bg-open":s.rank!=s.queuedBadge})},[s.queuedBadge?A((U(),g("i",{key:0,class:$(["fas fa-crown","text-rank-"+s.queuedBadge])},null,2)),[[d,`rank ${s.queuedBadge} user`]]):v("",!0)],2),f("td",{class:$({"bg-open":s.rank!=s.badge})},[s.badge?A((U(),g("i",{key:0,class:$(["fas fa-crown","text-rank-"+s.badge])},null,2)),[[d,`rank ${s.badge} user`]]):v("",!0)],2)])),_:1},8,["id","data","custom-data-target"]),w(u,{user:s.selectedUser,"current-group":s.group},null,8,["user","current-group"])])};var P=l({name:"ShowcaseUserList",components:{CopyPaste:M},data:()=>({osuUsers:[],taikoUsers:[],catchUsers:[],maniaUsers:[]}),computed:{uniqueUsers(){const s=this.osuUsers.concat(this.taikoUsers,this.catchUsers,this.maniaUsers),e=[];for(const t of s){e.find((s=>s.osuId==t.osuId))||e.push(t)}return e},messages(){const s=[];return s.push('hello! you\'re receiving this message because you marked yourself as a "FA showcase mapper" in the mappers guild https://osu.ppy.sh/home/news/2022-07-25-mappers-guild-updates#how-to-participate'),s.push("if you'd like to map an upcoming featured artist song for an announcement in October-December, send me some of the genres you'd like to map!"),s.push("i'll link some upcoming artists in return"),s.push("thank you!! -pishifat"),s}},methods:{async findShowcaseUsers(s){const e=await this.$http.executeGet("/admin/users/findShowcaseUsers",s);e&&!e.error&&(this.osuUsers=e.osuUsers,this.taikoUsers=e.taikoUsers,this.catchUsers=e.catchUsers,this.maniaUsers=e.maniaUsers)}}});D("data-v-3c1e13d2");const B={class:"container card card-body py-1 my-2"},E={key:0,class:"row"},G={key:0,class:"col-sm-3"},L=y(" osu! "),F={key:1,class:"col-sm-3"},R=y(" osu!taiko "),T={key:2,class:"col-sm-3"},N=y(" osu!catch "),J={key:3,class:"col-sm-3"},K=y(" osu!mania ");_(),P.render=function(s,e,t,r,a,o){const n=p("user-link"),i=p("copy-paste");return U(),g("div",B,[f("button",{class:"btn btn-sm w-100 btn-outline-info mb-3",onClick:e[0]||(e[0]=e=>s.findShowcaseUsers(e))}," Load FA showcase users "),s.osuUsers.length&&s.taikoUsers.length&&s.catchUsers.length&&s.maniaUsers.length?(U(),g("div",E,[s.osuUsers.length?(U(),g("div",G,[L,w(i,{distinct:"osu"},{default:I((()=>[(U(!0),g(S,null,j(s.osuUsers,(s=>(U(),g("div",{key:s.id},[w(n,{user:s},null,8,["user"])])))),128))])),_:1})])):v("",!0),s.taikoUsers.length?(U(),g("div",F,[R,w(i,{distinct:"taiko"},{default:I((()=>[(U(!0),g(S,null,j(s.taikoUsers,(s=>(U(),g("div",{key:s.id},[w(n,{user:s},null,8,["user"])])))),128))])),_:1})])):v("",!0),s.catchUsers.length?(U(),g("div",T,[N,w(i,{distinct:"catch"},{default:I((()=>[(U(!0),g(S,null,j(s.catchUsers,(s=>(U(),g("div",{key:s.id},[w(n,{user:s},null,8,["user"])])))),128))])),_:1})])):v("",!0),s.maniaUsers.length?(U(),g("div",J,[K,w(i,{distinct:"mania"},{default:I((()=>[(U(!0),g(S,null,j(s.maniaUsers,(s=>(U(),g("div",{key:s.id},[w(n,{user:s},null,8,["user"])])))),128))])),_:1})])):v("",!0)])):v("",!0)])},P.__scopeId="data-v-3c1e13d2";var Q=l({name:"ShowcaseUserList",components:{CopyPaste:M},data:()=>({osuUsers:[],taikoUsers:[],catchUsers:[],maniaUsers:[]}),computed:{uniqueUsers(){const s=this.osuUsers.concat(this.taikoUsers,this.catchUsers,this.maniaUsers),e=[];for(const t of s){e.find((s=>s.osuId==t.osuId))||e.push(t)}return e},messages(){const s=[];return s.push('hello! you\'re receiving this message because you marked yourself as a "FA showcase mapper" in the mappers guild https://i.imgur.com/aJt9uL1.png'),s.push("if you'd like to map an upcoming featured artist for an announcement in October-December, send me some of the genres you'd like to map!"),s.push("thank you!! -pishifat"),s}},methods:{async findContestHelperUsers(s){const e=await this.$http.executeGet("/admin/users/findContestHelperUsers",s);e&&!e.error&&(this.osuUsers=e.osuUsers,this.taikoUsers=e.taikoUsers,this.catchUsers=e.catchUsers,this.maniaUsers=e.maniaUsers)}}});const V={class:"container card card-body py-1 my-2"},z={key:0,class:"row"},W={key:0,class:"col-sm-3"},X=y(" osu! "),Y={key:1,class:"col-sm-3"},Z=y(" osu!taiko "),ss={key:2,class:"col-sm-3"},es=y(" osu!catch "),ts={key:3,class:"col-sm-3"},rs=y(" osu!mania ");Q.render=function(s,e,t,r,a,o){const n=p("copy-paste");return U(),g("div",V,[f("button",{class:"btn btn-sm w-100 btn-outline-info mb-3",onClick:e[0]||(e[0]=e=>s.findContestHelperUsers(e))}," Load contest helper users "),s.osuUsers&&s.taikoUsers&&s.catchUsers&&s.maniaUsers?(U(),g("div",z,[s.osuUsers.length?(U(),g("div",W,[X,w(n,{distinct:"osu"},{default:I((()=>[(U(!0),g(S,null,j(s.osuUsers,(s=>(U(),g("div",{key:s.id},k(s.username),1)))),128))])),_:1})])):v("",!0),s.taikoUsers.length?(U(),g("div",Y,[Z,w(n,{distinct:"taiko"},{default:I((()=>[(U(!0),g(S,null,j(s.taikoUsers,(s=>(U(),g("div",{key:s.id},k(s.username),1)))),128))])),_:1})])):v("",!0),s.catchUsers.length?(U(),g("div",ss,[es,w(n,{distinct:"catch"},{default:I((()=>[(U(!0),g(S,null,j(s.catchUsers,(s=>(U(),g("div",{key:s.id},k(s.username),1)))),128))])),_:1})])):v("",!0),s.maniaUsers.length?(U(),g("div",ts,[rs,w(n,{distinct:"mania"},{default:I((()=>[(U(!0),g(S,null,j(s.maniaUsers,(s=>(U(),g("div",{key:s.id},k(s.username),1)))),128))])),_:1})])):v("",!0)])):v("",!0)])};var as=l({name:"DiscordHighlightGenerator",components:{CopyPaste:M},data:()=>({inputUsers:"",users:[]}),computed:{discordHighlights(){let s="";for(const e of this.users)s+=`<@${e.discordId}> `;return s}},methods:{async generateDiscordHighlights(s){const e=await this.$http.executePost("/admin/users/findInputUsers",{inputUsers:this.inputUsers},s);e&&!e.error&&(this.users=e.users)}}});const os={class:"container card card-body py-1 mb-4"},ns={key:0};var is,us;as.render=function(s,e,t,r,a,o){const n=p("copy-paste");return U(),g("div",os,[A(f("textarea",{"onUpdate:modelValue":e[0]||(e[0]=e=>s.inputUsers=e),class:"form-control form-control-sm mx-2 mt-2 w-100",type:"text",autocomplete:"off",placeholder:"usernames separated by newlines..."},null,512),[[C,s.inputUsers]]),f("button",{class:"btn btn-sm w-100 btn-outline-info",onClick:e[1]||(e[1]=e=>s.generateDiscordHighlights(e))}," Generate Discord highlights "),s.users.length?(U(),g("div",ns,[w(n,null,{default:I((()=>[y(k(s.discordHighlights),1)])),_:1})])):v("",!0)])},(us=is||(is={})).User="user",us.Admin="admin",us.Secret="secret";var ds={state:{users:[]},mutations:{setUsers(s,e){s.users=e},updateBadge(s,e){const t=s.users.find((s=>s.id==e.userId));t&&(t.queuedBadge=e.badge)},updateDiscordId(s,e){const t=s.users.find((s=>s.id==e.userId));t&&(t.discordId=e.discordId)},updateIsShowcaseMapper(s,e){const t=s.users.find((s=>s.id==e.userId));t&&(t.isShowcaseMapper=e.isShowcaseMapper)},updateIsMentorshipAdmin(s,e){const t=s.users.find((s=>s.id==e.userId));t&&(t.isMentorshipAdmin=e.isMentorshipAdmin)}}},cs=l({components:{AdminUserTable:H,ShowcaseUserList:P,ContestHelperUserList:Q,DiscordHighlightGenerator:as},data:()=>({selectedUserId:""}),computed:u(i({},h({users:s=>s.usersAdmin.users})),{selectedUser(){return this.users.find((s=>s.id===this.selectedUserId))},normalUsers(){return this.users.filter((s=>s.group==is.User))},showcaseUsers(){return this.users.filter((s=>s.group==is.Secret))},admins(){return this.users.filter((s=>s.group==is.Admin))}}),beforeCreate(){this.$store.hasModule("usersAdmin")||this.$store.registerModule("usersAdmin",ds)},unmounted(){this.$store.hasModule("usersAdmin")&&this.$store.unregisterModule("usersAdmin")},async created(){const s=await this.$http.initialRequest("/admin/users/load");this.$http.isError(s)||this.$store.commit("setUsers",s)}});const ls={class:"container card card-body"},hs=f("h4",{class:"mt-2"}," Groups ",-1);cs.render=function(s,e,t,r,a,o){const n=p("admin-user-table"),i=p("showcase-user-list"),u=p("contest-helper-user-list"),d=p("discord-highlight-generator");return U(),g("div",null,[f("div",ls,[hs,w(n,{"grouped-users":s.admins,group:"admin"},null,8,["grouped-users"]),w(n,{"grouped-users":s.showcaseUsers,group:"secret"},null,8,["grouped-users"]),w(n,{"grouped-users":s.normalUsers,group:"user"},null,8,["grouped-users"])]),w(i),w(u),w(d)])};export{cs as default};
