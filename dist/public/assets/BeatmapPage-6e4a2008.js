import{d as g,_ as M,o,e as i,a as r,t as s,F as f,r as b,c as $,w as _,b as U,A,q as h,h as I,k as m,i as y,M as L,m as O}from"./index-2d571758.js";import{C}from"./CopyPaste-6bad7cad.js";import{M as S}from"./ModalDialog-f42320a0.js";import{B as D}from"./BeatmapInfoAdmin-45c69d06.js";import{D as N}from"./DataTable-17fc135a.js";const E=g({name:"BeatmapList",props:{beatmaps:{type:Array,default:()=>[]},displayMode:{type:String,default:null},rawMode:{type:String,default:null}},computed:{navigation(){return'<a id="'+this.rawMode+'"></a>'}},methods:{hasUniqueMapper(t){let e="";for(const a of t)for(const n of a.mappers)if(!e)e=n.id;else if(e!==n.id)return!1;return!0}}}),T=r("br",null,null,-1);function G(t,e,a,n,k,w){return o(),i("div",null,[r("p",null," ## "+s(t.navigation+t.displayMode),1),(o(!0),i(f,null,b(t.beatmaps,p=>(o(),i("div",{key:p.id}," - ["+s(p.song.artist)+" - "+s(p.song.title)+"]("+s(p.url)+") "+s(t.hasUniqueMapper(p.tasks)?"by":"hosted by")+" ["+s(p.host.username)+"]("+s("https://osu.ppy.sh/users/"+p.host.osuId)+") ",1))),128)),T])}const R=M(E,[["render",G]]),V=g({name:"NewsPost",components:{BeatmapList:R,CopyPaste:C,ModalDialog:S},data(){return{date:"2020-11-20",beatmaps:[],quests:[],externalBeatmaps:[],users:[]}},computed:{osuBeatmaps(){return this.beatmaps.filter(t=>t.mode=="osu")},taikoBeatmaps(){return this.beatmaps.filter(t=>t.mode=="taiko")},catchBeatmaps(){return this.beatmaps.filter(t=>t.mode=="catch")},maniaBeatmaps(){return this.beatmaps.filter(t=>t.mode=="mania")},hybridBeatmaps(){return this.beatmaps.filter(t=>t.mode=="hybrid")}},methods:{async loadNewsInfo(t){const e=await this.$http.executeGet("/admin/beatmaps/loadNewsInfo/"+this.date,t);e&&(this.beatmaps=e.beatmaps,this.quests=e.quests,this.externalBeatmaps=e.externalBeatmaps,this.users=e.users)},questModes(t){let e="";for(let a=0;a<t.length;a++){const n=t[a];n=="osu"?e+="osu!":e+="osu!"+n,a<t.length-1&&(e+=", ")}return e},separateUsername(t,e){return t<e-2?", ":t<e-1?" and":""},separateCommas(t,e){return t<e-1?", ":""},hasMultipleMappers(t){const e=[];return t.forEach(a=>{a.mappers.forEach(n=>{e.includes(n)||e.push(n)})}),e.length>1}}}),F={key:0},Y={key:0},j={key:0},Q=r("br",null,null,-1),q={key:1},K=r("br",null,null,-1),z={key:2},H=r("div",null,"[**osu!**](#osu)",-1),J=r("div",null,"[**osu!taiko**](#taiko)",-1),W=r("div",null,"[**osu!catch**](#catch)",-1),X=r("div",null,"[**osu!mania**](#mania)",-1),Z=r("div",null,"[*Multiple mode mapsets**](#hybrid)",-1),x=r("br",null,null,-1),tt={key:4},et={key:6},st=r("div",null," | User | Modes | Beatmaps Ranked | Difficulties Ranked | ",-1),at=r("div",null," | :-- | :-- | :-- | :-- | ",-1);function nt(t,e,a,n,k,w){const p=y("copy-paste"),u=y("beatmap-list"),v=y("modal-dialog");return o(),$(v,{id:"newsPost",title:"Generate news post"},{default:_(()=>[r("p",null,[r("button",{class:"btn btn-sm btn-outline-info",onClick:e[0]||(e[0]=d=>t.loadNewsInfo(d))}," Load beatmap and quest data "),U(r("input",{"onUpdate:modelValue":e[1]||(e[1]=d=>t.date=d),class:"form-control form-control-sm mx-2 w-25",type:"text",autocomplete:"off",placeholder:"YYYY-MM-DD"},null,512),[[A,t.date]])]),t.quests?(o(),i("p",F," Quest data: ")):h("",!0),t.quests?(o(),$(p,{key:1,distinct:"quests"},{default:_(()=>[(o(!0),i(f,null,b(t.quests,d=>(o(),i("div",{key:d.id},[d.requiredMapsets>2?(o(),i("div",Y,[r("p",null,s(d.art&&d.associatedMaps.length?"!["+d.associatedMaps[0].song.artist+" header](https://assets.ppy.sh/artists/"+d.art+"/header.jpg)":"![Mystery header](/wiki/shared/news/banners/mappersguild-mystery.jpg)"),1),r("p",null," For the **"+s(d.name+" ("+t.questModes(d.modes)+")")+"** quest, the mapper"+s(d.currentParty.members.length==1?"":"s")+" had to "+s(d.descriptionMain.substring(0,1).toLowerCase()+d.descriptionMain.substring(1)),1),r("p",null,[I(" This quest was completed by "),(o(!0),i(f,null,b(d.currentParty.members,(l,B)=>(o(),i("span",{key:l.id}," **["+s(l.username)+"]("+s("https://osu.ppy.sh/users/"+l.osuId)+")**"+s(t.separateUsername(B,d.currentParty.members.length)),1))),128))]),(o(!0),i(f,null,b(d.associatedMaps,l=>(o(),i("div",{key:l.id},[I(" - ["+s(l.song.artist)+" - "+s(l.song.title)+"]("+s(l.url)+") "+s(t.hasMultipleMappers(l.tasks)?"hosted by":"by")+" ["+s(l.host.username)+"]("+s("https://osu.ppy.sh/users/"+l.host.osuId)+") ",1),d.modes.length>1?(o(),i("span",j," ("+s(l.mode=="osu"?"osu!":l.mode=="hybrid"?"hybrid":"osu!"+l.mode)+") ",1)):h("",!0)]))),128)),Q])):(o(),i("div",q,[I(" - **"+s(d.name+" ("+t.questModes(d.modes)+")")+"**: ",1),(o(!0),i(f,null,b(d.associatedMaps,(l,B)=>(o(),i("span",{key:l.id}," ["+s(l.song.artist)+" - "+s(l.song.title)+"]("+s(l.url)+") "+s(t.hasMultipleMappers(l.tasks)?"hosted by":"by")+" ["+s(l.host.username)+"]("+s("https://osu.ppy.sh/users/"+l.host.osuId)+")"+s(t.separateUsername(B,d.associatedMaps.length)),1))),128)),K]))]))),128))]),_:1})):h("",!0),t.beatmaps?(o(),i("p",z," Other beatmap data: ")):h("",!0),t.beatmaps?(o(),$(p,{key:3,distinct:"beatmaps"},{default:_(()=>[H,J,W,X,Z,x,m(u,{beatmaps:t.osuBeatmaps,"display-mode":"osu!","raw-mode":"osu"},null,8,["beatmaps"]),m(u,{beatmaps:t.taikoBeatmaps,"display-mode":"osu!taiko","raw-mode":"taiko"},null,8,["beatmaps"]),m(u,{beatmaps:t.catchBeatmaps,"display-mode":"osu!catch","raw-mode":"catch"},null,8,["beatmaps"]),m(u,{beatmaps:t.maniaBeatmaps,"display-mode":"osu!mania","raw-mode":"mania"},null,8,["beatmaps"]),m(u,{beatmaps:t.hybridBeatmaps,"display-mode":"multiple modes","raw-mode":"hybrid"},null,8,["beatmaps"])]),_:1})):h("",!0),t.externalBeatmaps?(o(),i("p",tt," External beatmaps (sort these manually): ")):h("",!0),t.externalBeatmaps?(o(),$(p,{key:5,distinct:"external"},{default:_(()=>[(o(!0),i(f,null,b(t.externalBeatmaps,d=>(o(),i("div",{key:d.osuId}," - ["+s(d.artist)+" - "+s(d.title)+"]("+s("https://osu.ppy.sh/beatmapsets/"+d.osuId)+") hosted by ["+s(d.creator)+"]("+s("https://osu.ppy.sh/users/"+d.creatorOsuId)+") ",1))),128))]),_:1})):h("",!0),t.users?(o(),i("p",et," Users with ranked maps/tasks: ")):h("",!0),t.users?(o(),$(p,{key:7,distinct:"users"},{default:_(()=>[st,at,(o(!0),i(f,null,b(t.users,d=>(o(),i("div",{key:d.id},[I(" | ["+s(d.username)+"]("+s("https://osu.ppy.sh/users/"+d.osuId)+") | ",1),(o(!0),i(f,null,b(d.modes,(l,B)=>(o(),i("span",{key:l},s(l=="osu"?"osu!":l=="sb"?"Storyboarder":"osu!"+l)+s(t.separateCommas(B,d.modes.length)),1))),128)),I(" | "+s(d.hostCount)+" | "+s(d.taskCount)+" | ",1)]))),128))]),_:1})):h("",!0)]),_:1})}const ot=M(V,[["render",nt]]),dt=g({name:"BundledBeatmapsList",components:{CopyPaste:C},data(){return{bundledBeatmaps:[]}},computed:{osuBeatmaps(){return this.bundledBeatmaps.filter(t=>t.mode=="osu")},taikoBeatmaps(){return this.bundledBeatmaps.filter(t=>t.mode=="taiko")},catchBeatmaps(){return this.bundledBeatmaps.filter(t=>t.mode=="catch")},maniaBeatmaps(){return this.bundledBeatmaps.filter(t=>t.mode=="mania")}},methods:{async findBundledBeatmaps(t){const e=await this.$http.executeGet("/admin/beatmaps/findBundledBeatmaps",t);e&&!e.error&&(this.bundledBeatmaps=e)},findOsuId(t){const e=t.indexOf("beatmapsets/")+12,a=t.indexOf("#");let n="";return a!==-1?n=t.slice(e,a):n=t.slice(e),parseInt(n,10)}}}),it={class:"container card card-body py-1 mb-4"},rt={key:0},lt=r("p",null,"osu",-1),ut=r("p",null,"taiko",-1),pt=r("p",null,"catch",-1),mt=r("p",null,"mania",-1);function ct(t,e,a,n,k,w){const p=y("copy-paste");return o(),i("div",it,[r("button",{class:"btn btn-sm w-100 btn-outline-info",onClick:e[0]||(e[0]=u=>t.findBundledBeatmaps(u))}," Load bundled beatmaps "),t.bundledBeatmaps.length?(o(),i("div",rt,[lt,m(p,{distinct:"osu"},{default:_(()=>[(o(!0),i(f,null,b(t.osuBeatmaps,u=>(o(),i("div",{key:u.id},s(t.findOsuId(u.url)),1))),128))]),_:1}),ut,m(p,{distinct:"taiko"},{default:_(()=>[(o(!0),i(f,null,b(t.taikoBeatmaps,u=>(o(),i("div",{key:u.id},s(t.findOsuId(u.url)),1))),128))]),_:1}),pt,m(p,{distinct:"catch"},{default:_(()=>[(o(!0),i(f,null,b(t.catchBeatmaps,u=>(o(),i("div",{key:u.id},s(t.findOsuId(u.url)),1))),128))]),_:1}),mt,m(p,{distinct:"mania"},{default:_(()=>[(o(!0),i(f,null,b(t.maniaBeatmaps,u=>(o(),i("div",{key:u.id},s(t.findOsuId(u.url)),1))),128))]),_:1})])):h("",!0)])}const ht=M(dt,[["render",ct]]),ft=g({name:"BeatmapPackIdListGenerator",components:{CopyPaste:C},data(){return{inputUrls:"",output:""}},methods:{findOsuId(t){const e=t.indexOf("beatmapsets/")+12,a=t.indexOf("#");let n="";return a!==-1?n=t.slice(e,a):n=t.slice(e),parseInt(n,10)},generateBeatmapPackIdList(){let t="";const e=this.inputUrls.split(`
`);for(const a of e){const n=this.findOsuId(a);isNaN(n)?t+=`FAILED (${a})`:t+=n,t+=","}this.output=t.substring(0,t.length-1)}}}),bt={class:"container card card-body py-1 mb-4"},yt={key:0};function _t(t,e,a,n,k,w){const p=y("copy-paste");return o(),i("div",bt,[U(r("textarea",{"onUpdate:modelValue":e[0]||(e[0]=u=>t.inputUrls=u),class:"form-control form-control-sm mx-2 mt-2 w-100",type:"text",autocomplete:"off",placeholder:"map URLs separated by newlines..."},null,512),[[A,t.inputUrls]]),r("button",{class:"btn btn-sm w-100 btn-outline-info",onClick:e[1]||(e[1]=u=>t.generateBeatmapPackIdList())}," Generate beatmap pack ID list "),t.output.length?(o(),i("div",yt,[m(p,null,{default:_(()=>[I(s(t.output),1)]),_:1})])):h("",!0)])}const kt=M(ft,[["render",_t]]),Bt={state:{beatmaps:[]},mutations:{setBeatmaps(t,e){t.beatmaps=e},updateBeatmapStatus(t,e){const a=t.beatmaps.find(n=>n.id==e.beatmapId);a&&(a.status=e.status)},deleteTask(t,e){const a=t.beatmaps.find(n=>n.id==e.beatmapId);if(a){const n=a.tasks.findIndex(k=>k.id==e.taskId);n!==-1&&a.tasks.splice(n,1)}},deleteModder(t,e){const a=t.beatmaps.find(n=>n.id==e.beatmapId);if(a){const n=a.modders.findIndex(k=>k.id==e.modderId);n!==-1&&a.modders.splice(n,1)}},updateUrl(t,e){const a=t.beatmaps.find(n=>n.id==e.beatmapId);a&&(a.url=e.url)},updateStoryboardQuality(t,e){const a=t.beatmaps.find(n=>n.id==e.beatmapId);if(a){const n=a.tasks.findIndex(k=>k.id==e.taskId);n!==-1&&(a.tasks[n]=e.task)}},updatePackId(t,e){const a=t.beatmaps.find(n=>n.id==e.beatmapId);a&&(a.packId=e.packId)},updateIsShowcase(t,e){const a=t.beatmaps.find(n=>n.id==e.beatmapId);a&&(a.isShowcase=e.isShowcase)}}},$t=Bt,It=g({components:{NewsPost:ot,DataTable:N,BeatmapInfoAdmin:D,BundledBeatmapsList:ht,BeatmapPackIdListGenerator:kt,ModesIcons:L},data(){return{selectedBeatmapId:""}},computed:{...O({beatmaps:t=>t.beatmapsAdmin.beatmaps}),selectedBeatmap(){return this.beatmaps.find(t=>t.id===this.selectedBeatmapId)}},beforeCreate(){this.$store.hasModule("beatmapsAdmin")||this.$store.registerModule("beatmapsAdmin",$t)},unmounted(){this.$store.hasModule("beatmapsAdmin")&&this.$store.unregisterModule("beatmapsAdmin")},async created(){const t=await this.$http.initialRequest("/admin/beatmaps/load");this.$http.isError(t)||this.$store.commit("setBeatmaps",t)},methods:{updateBeatmap(t){const e=this.beatmaps.findIndex(a=>a.id==t.id);e!==-1&&(this.beatmaps[e]=t)},formatMetadata(t){if(!t)return"";let e=t.artist+" - ";return t.title.length>40?e+=t.title.slice(0,40)+"...":e+=t.title,e}}}),gt={class:"container card card-body py-1"},Mt={class:"row"},wt={class:"col-sm"},vt=r("button",{class:"btn btn-sm btn-info w-100","data-bs-toggle":"modal","data-bs-target":"#newsPost"}," Create news post ",-1),Ct={class:"text-truncate"},Ut=["href"],At={key:1,class:"ms-1"};function Pt(t,e,a,n,k,w){const p=y("modes-icons"),u=y("user-link"),v=y("data-table"),d=y("beatmap-info-admin"),l=y("news-post"),B=y("bundled-beatmaps-list"),P=y("beatmap-pack-id-list-generator");return o(),i("div",null,[r("div",gt,[r("div",Mt,[r("div",wt,[vt,m(v,{data:t.beatmaps,headers:["METADATA","PACK ID","CREATOR","STATUS"],"custom-data-target":"#editBeatmap","onUpdate:selectedId":e[0]||(e[0]=c=>t.selectedBeatmapId=c)},{default:_(({obj:c})=>[r("td",Ct,[m(p,{modes:[c.mode]},null,8,["modes"]),c.url?(o(),i("a",{key:0,href:c.url,class:"ms-1"},s(t.formatMetadata(c.song)),9,Ut)):(o(),i("span",At,s(t.formatMetadata(c.song)),1))]),r("td",null,s(c.packId),1),r("td",null,[m(u,{user:c.host},null,8,["user"])]),r("td",null,s(c.status),1)]),_:1},8,["data"])])])]),t.selectedBeatmap?(o(),$(d,{key:0,beatmap:t.selectedBeatmap,onUpdateBeatmap:e[1]||(e[1]=c=>t.updateBeatmap(c))},null,8,["beatmap"])):h("",!0),m(l),m(B),m(P)])}const Et=M(It,[["render",Pt]]);export{Et as default};