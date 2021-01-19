(self.webpackChunkmappersguild=self.webpackChunkmappersguild||[]).push([[96],{9352:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var o=a(5393);const s={key:0,class:"table table-sm"},n=(0,o.createVNode)("th",null,"EDIT",-1),r={key:1,class:"text-white-50"},l=(0,o.defineComponent)({name:"DataTable",props:{data:{type:Array,required:!0},headers:{type:Array,required:!0},isLoading:Boolean,customDataTarget:{type:String,default:null}},emits:["update:selectedId"]});l.render=function(e,t,a,l,d,i){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[e.data.length?((0,o.openBlock)(),(0,o.createBlock)("table",s,[(0,o.createVNode)("thead",null,[(0,o.createVNode)("tr",null,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.headers,(e=>((0,o.openBlock)(),(0,o.createBlock)("th",{key:e},(0,o.toDisplayString)(e),1)))),128)),n])]),(0,o.createVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.data,(t=>((0,o.openBlock)(),(0,o.createBlock)("tr",{key:t.id,class:"text-white-50"},[(0,o.renderSlot)(e.$slots,"default",{obj:t}),(0,o.createVNode)("td",null,[(0,o.createVNode)("a",{href:"#","data-bs-toggle":"modal","data-bs-target":e.customDataTarget||"#edit",onClick:(0,o.withModifiers)((a=>e.$emit("update:selectedId",t.id)),["prevent"])}," edit ",8,["data-bs-target","onClick"])])])))),128))])])):e.isLoading?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)("span",r,"None..."))])};const d=l},1102:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>J});var o=a(5393);const s={class:"container card card-body py-1"},n={class:"row"},r={class:"col-sm"},l=(0,o.createVNode)("button",{class:"btn btn-sm btn-info w-100","data-bs-toggle":"modal","data-bs-target":"#newsPost"}," Create news post ",-1),d={class:"text-truncate"},i={key:1,class:"ms-1"};var c=a(6564);const p=(0,o.createVNode)("p",null," notes to self from last news post: - for the repeat packs (double, mini-pack, etc) they don't need to state the exact objective each time. too repetitive - separate quests by type (special, big pack, mini pack, solo) - not sure what to do about ranked maps list (probably too big each time? users is cool at least) ",-1),m={key:0},u=(0,o.createTextVNode)(" This quest was completed by "),k={key:0},h=(0,o.createVNode)("br",null,null,-1),B={key:2},b=(0,o.createVNode)("div",null,"[**osu!**](#osu)",-1),y=(0,o.createVNode)("div",null,"[**osu!taiko**](#taiko)",-1),f=(0,o.createVNode)("div",null,"[**osu!catch**](#catch)",-1),g=(0,o.createVNode)("div",null,"[**osu!mania**](#mania)",-1),N=(0,o.createVNode)("div",null,"[*Multiple mode mapsets**](#hybrid)",-1),V=(0,o.createVNode)("br",null,null,-1),v={key:4},w={key:6},C=(0,o.createVNode)("div",null," | User | Beatmaps Ranked | Difficulties Ranked | ",-1),D=(0,o.createVNode)("div",null," | :-- | :-- | :-- | ",-1),I=(0,o.createVNode)("br",null,null,-1),S=(0,o.defineComponent)({name:"BeatmapList",props:{beatmaps:{type:Array,default:()=>[]},displayMode:{type:String,default:null},rawMode:{type:String,default:null}},computed:{navigation(){return'<a id="'+this.rawMode+'"></a>'}},methods:{hasUniqueMapper(e){let t="";for(const a of e)for(const e of a.mappers)if(t){if(t!==e.id)return!1}else t=e.id;return!0}}});S.render=function(e,t,a,s,n,r){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("p",null," ## "+(0,o.toDisplayString)(e.navigation+e.displayMode),1),((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.beatmaps,(t=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:t.id}," - ["+(0,o.toDisplayString)(t.song.artist)+" - "+(0,o.toDisplayString)(t.song.title)+"]("+(0,o.toDisplayString)(t.url)+") "+(0,o.toDisplayString)(e.hasUniqueMapper(t.tasks)?"by":"hosted by")+" ["+(0,o.toDisplayString)(t.host.username)+"]("+(0,o.toDisplayString)("https://osu.ppy.sh/users/"+t.host.osuId)+") ",1)))),128)),I])};const x=S;var M=a(285),L=a(1516);const P=(0,o.defineComponent)({name:"NewsPost",components:{BeatmapList:x,CopyPaste:M.Z,ModalDialog:L.Z},data:()=>({date:"2020-03-23",beatmaps:[],quests:[],externalBeatmaps:[],users:[]}),computed:{osuBeatmaps(){return this.beatmaps.filter((e=>"osu"==e.mode))},taikoBeatmaps(){return this.beatmaps.filter((e=>"taiko"==e.mode))},catchBeatmaps(){return this.beatmaps.filter((e=>"catch"==e.mode))},maniaBeatmaps(){return this.beatmaps.filter((e=>"mania"==e.mode))},hybridBeatmaps(){return this.beatmaps.filter((e=>"hybrid"==e.mode))}},methods:{loadNewsInfo(e){return t=this,a=void 0,s=function*(){const t=yield this.$http.executeGet("/admin/beatmaps/loadNewsInfo/"+this.date,e);t&&(this.beatmaps=t.beatmaps,this.quests=t.quests,this.externalBeatmaps=t.externalBeatmaps,this.users=t.users)},new((o=void 0)||(o=Promise))((function(e,n){function r(e){try{d(s.next(e))}catch(e){n(e)}}function l(e){try{d(s.throw(e))}catch(e){n(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(r,l)}d((s=s.apply(t,a||[])).next())}));var t,a,o,s},questModes(e){let t="";for(let a=0;a<e.length;a++){const o=e[a];t+="osu"==o?"osu!":"osu!"+o,a<e.length-1&&(t+=", ")}return t},separateUsername:(e,t)=>e<t-2?", ":e<t-1?" and":"",hasMultipleMappers(e){const t=[];return e.forEach((e=>{e.mappers.forEach((e=>{t.includes(e)||t.push(e)}))})),t.length>1}}});P.render=function(e,t,a,s,n,r){const l=(0,o.resolveComponent)("copy-paste"),d=(0,o.resolveComponent)("beatmap-list"),i=(0,o.resolveComponent)("modal-dialog");return(0,o.openBlock)(),(0,o.createBlock)(i,{id:"newsPost",title:"Generate news post"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)("p",null,[(0,o.createVNode)("button",{class:"btn btn-sm btn-outline-info",onClick:t[1]||(t[1]=t=>e.loadNewsInfo(t))}," Load beatmap and quest data "),(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.date=t),class:"form-control form-control-sm mx-2 w-25",type:"text",autocomplete:"off",placeholder:"YYYY-MM-DD"},null,512),[[o.vModelText,e.date]])]),p,e.quests?((0,o.openBlock)(),(0,o.createBlock)("p",m," Quest data: ")):(0,o.createCommentVNode)("",!0),e.quests?((0,o.openBlock)(),(0,o.createBlock)(l,{key:1,distinct:"quests"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.quests,(t=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:t.id},[(0,o.createVNode)("p",null,(0,o.toDisplayString)(t.art&&t.associatedMaps.length?"!["+t.associatedMaps[0].song.artist+" header](https://assets.ppy.sh/artists/"+t.art+"/header.jpg)":"![Mystery header](/wiki/shared/news/banners/mappersguild-mystery.jpg)"),1),(0,o.createVNode)("p",null," For the **"+(0,o.toDisplayString)(t.name+" ("+e.questModes(t.modes)+")")+"** quest, the mapper"+(0,o.toDisplayString)(1==t.currentParty.members.length?"":"s")+" had to "+(0,o.toDisplayString)(t.descriptionMain.substring(0,1).toLowerCase()+t.descriptionMain.substring(1)),1),(0,o.createVNode)("p",null,[u,((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(t.currentParty.members,((a,s)=>((0,o.openBlock)(),(0,o.createBlock)("span",{key:a.id}," **["+(0,o.toDisplayString)(a.username)+"]("+(0,o.toDisplayString)("https://osu.ppy.sh/users/"+a.osuId)+")**"+(0,o.toDisplayString)(e.separateUsername(s,t.currentParty.members.length)),1)))),128))]),((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(t.associatedMaps,(a=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:a.id},[(0,o.createTextVNode)(" - ["+(0,o.toDisplayString)(a.song.artist)+" - "+(0,o.toDisplayString)(a.song.title)+"]("+(0,o.toDisplayString)(a.url)+") "+(0,o.toDisplayString)(e.hasMultipleMappers(a.tasks)?"hosted by":"by")+" ["+(0,o.toDisplayString)(a.host.username)+"]("+(0,o.toDisplayString)("https://osu.ppy.sh/users/"+a.host.osuId)+") ",1),t.modes.length>1?((0,o.openBlock)(),(0,o.createBlock)("span",k," ("+(0,o.toDisplayString)("osu"==a.mode?"osu!":"hybrid"==a.mode?"hybrid":"osu!"+a.mode)+") ",1)):(0,o.createCommentVNode)("",!0)])))),128)),h])))),128))])),_:1})):(0,o.createCommentVNode)("",!0),e.beatmaps?((0,o.openBlock)(),(0,o.createBlock)("p",B," Other beatmap data: ")):(0,o.createCommentVNode)("",!0),e.beatmaps?((0,o.openBlock)(),(0,o.createBlock)(l,{key:3,distinct:"beatmaps"},{default:(0,o.withCtx)((()=>[b,y,f,g,N,V,(0,o.createVNode)(d,{beatmaps:e.osuBeatmaps,"display-mode":"osu!","raw-mode":"osu"},null,8,["beatmaps"]),(0,o.createVNode)(d,{beatmaps:e.taikoBeatmaps,"display-mode":"osu!taiko","raw-mode":"taiko"},null,8,["beatmaps"]),(0,o.createVNode)(d,{beatmaps:e.catchBeatmaps,"display-mode":"osu!catch","raw-mode":"catch"},null,8,["beatmaps"]),(0,o.createVNode)(d,{beatmaps:e.maniaBeatmaps,"display-mode":"osu!mania","raw-mode":"mania"},null,8,["beatmaps"]),(0,o.createVNode)(d,{beatmaps:e.hybridBeatmaps,"display-mode":"multiple modes","raw-mode":"hybrid"},null,8,["beatmaps"])])),_:1})):(0,o.createCommentVNode)("",!0),e.externalBeatmaps?((0,o.openBlock)(),(0,o.createBlock)("p",v," External beatmaps (sort these manually): ")):(0,o.createCommentVNode)("",!0),e.externalBeatmaps?((0,o.openBlock)(),(0,o.createBlock)(l,{key:5,distinct:"external"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.externalBeatmaps,(e=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:e.osuId}," - ["+(0,o.toDisplayString)(e.artist)+" - "+(0,o.toDisplayString)(e.title)+"]("+(0,o.toDisplayString)("https://osu.ppy.sh/beatmapsets/"+e.osuId)+") hosted by ["+(0,o.toDisplayString)(e.creator)+"]("+(0,o.toDisplayString)("https://osu.ppy.sh/users/"+e.creatorOsuId)+") ",1)))),128))])),_:1})):(0,o.createCommentVNode)("",!0),e.users?((0,o.openBlock)(),(0,o.createBlock)("p",w," Users with ranked maps/tasks: ")):(0,o.createCommentVNode)("",!0),e.users?((0,o.openBlock)(),(0,o.createBlock)(l,{key:7,distinct:"users"},{default:(0,o.withCtx)((()=>[C,D,((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.users,(e=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:e.id}," | ["+(0,o.toDisplayString)(e.username)+"]("+(0,o.toDisplayString)("https://osu.ppy.sh/users/"+e.osuId)+") | "+(0,o.toDisplayString)(e.hostCount)+" | "+(0,o.toDisplayString)(e.taskCount)+" | ",1)))),128))])),_:1})):(0,o.createCommentVNode)("",!0)])),_:1})};const q=P;var T=a(957);const U={class:"container card card-body py-1 mb-4"},A={key:0},O=(0,o.createVNode)("p",null,"osu",-1),F=(0,o.createVNode)("p",null,"taiko",-1),$=(0,o.createVNode)("p",null,"catch",-1),_=(0,o.createVNode)("p",null,"mania",-1);const E=(0,o.defineComponent)({name:"BundledBeatmapsList",components:{CopyPaste:M.Z},data:()=>({bundledBeatmaps:[]}),computed:{osuBeatmaps(){return this.bundledBeatmaps.filter((e=>"osu"==e.mode))},taikoBeatmaps(){return this.bundledBeatmaps.filter((e=>"taiko"==e.mode))},catchBeatmaps(){return this.bundledBeatmaps.filter((e=>"catch"==e.mode))},maniaBeatmaps(){return this.bundledBeatmaps.filter((e=>"mania"==e.mode))}},methods:{findBundledBeatmaps(e){return t=this,a=void 0,s=function*(){const t=yield this.$http.executeGet("/admin/beatmaps/findBundledBeatmaps",e);t&&!t.error&&(this.bundledBeatmaps=t)},new((o=void 0)||(o=Promise))((function(e,n){function r(e){try{d(s.next(e))}catch(e){n(e)}}function l(e){try{d(s.throw(e))}catch(e){n(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(r,l)}d((s=s.apply(t,a||[])).next())}));var t,a,o,s},findOsuId(e){const t=e.indexOf("beatmapsets/")+"beatmapsets/".length,a=e.indexOf("#");let o="";return o=-1!==a?e.slice(t,a):e.slice(t),parseInt(o,10)}}});E.render=function(e,t,a,s,n,r){const l=(0,o.resolveComponent)("copy-paste");return(0,o.openBlock)(),(0,o.createBlock)("div",U,[(0,o.createVNode)("button",{class:"btn btn-sm w-100 btn-outline-info",onClick:t[1]||(t[1]=t=>e.findBundledBeatmaps(t))}," Load bundled beatmaps "),e.bundledBeatmaps.length?((0,o.openBlock)(),(0,o.createBlock)("div",A,[O,(0,o.createVNode)(l,{distinct:"osu"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.osuBeatmaps,(t=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:t.id},(0,o.toDisplayString)(e.findOsuId(t.url)),1)))),128))])),_:1}),F,(0,o.createVNode)(l,{distinct:"taiko"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.taikoBeatmaps,(t=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:t.id},(0,o.toDisplayString)(e.findOsuId(t.url)),1)))),128))])),_:1}),$,(0,o.createVNode)(l,{distinct:"catch"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.catchBeatmaps,(t=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:t.id},(0,o.toDisplayString)(e.findOsuId(t.url)),1)))),128))])),_:1}),_,(0,o.createVNode)(l,{distinct:"mania"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.maniaBeatmaps,(t=>((0,o.openBlock)(),(0,o.createBlock)("div",{key:t.id},(0,o.toDisplayString)(e.findOsuId(t.url)),1)))),128))])),_:1})])):(0,o.createCommentVNode)("",!0)])};const Z=E,j={class:"container card card-body py-1 mb-4"},G={key:0},R=(0,o.defineComponent)({name:"BeatmapPackIdListGenerator",components:{CopyPaste:M.Z},data:()=>({inputUrls:"",output:""}),methods:{findOsuId(e){const t=e.indexOf("beatmapsets/")+"beatmapsets/".length,a=e.indexOf("#");let o="";return o=-1!==a?e.slice(t,a):e.slice(t),parseInt(o,10)},generateBeatmapPackIdList(){let e="";const t=this.inputUrls.split("\n");for(const a of t){const t=this.findOsuId(a);isNaN(t)?e+=`FAILED (${a})`:e+=t,e+=","}this.output=e.substring(0,e.length-1)}}});R.render=function(e,t,a,s,n,r){const l=(0,o.resolveComponent)("copy-paste");return(0,o.openBlock)(),(0,o.createBlock)("div",j,[(0,o.withDirectives)((0,o.createVNode)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.inputUrls=t),class:"form-control form-control-sm mx-2 mt-2 w-100",type:"text",autocomplete:"off",placeholder:"map URLs separated by newlines..."},null,512),[[o.vModelText,e.inputUrls]]),(0,o.createVNode)("button",{class:"btn btn-sm w-100 btn-outline-info",onClick:t[2]||(t[2]=t=>e.generateBeatmapPackIdList())}," Generate beatmap pack ID list "),e.output.length?((0,o.openBlock)(),(0,o.createBlock)("div",G,[(0,o.createVNode)(l,null,{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.output),1)])),_:1})])):(0,o.createCommentVNode)("",!0)])};const Y=R;var Q=a(9352);const K={state:{beatmaps:[]},mutations:{setBeatmaps(e,t){e.beatmaps=t},updateBeatmapStatus(e,t){const a=e.beatmaps.find((e=>e.id==t.beatmapId));a&&(a.status=t.status)},deleteTask(e,t){const a=e.beatmaps.find((e=>e.id==t.beatmapId));if(a){const e=a.tasks.findIndex((e=>e.id==t.taskId));-1!==e&&a.tasks.splice(e,1)}},deleteModder(e,t){const a=e.beatmaps.find((e=>e.id==t.beatmapId));if(a){const e=a.modders.findIndex((e=>e.id==t.modderId));-1!==e&&a.modders.splice(e,1)}},updateUrl(e,t){const a=e.beatmaps.find((e=>e.id==t.beatmapId));a&&(a.url=t.url)},updateStoryboardQuality(e,t){const a=e.beatmaps.find((e=>e.id==t.beatmapId));if(a){const e=a.tasks.findIndex((e=>e.id==t.taskId));-1!==e&&(a.tasks[e]=t.task)}},updatePackId(e,t){const a=e.beatmaps.find((e=>e.id==t.beatmapId));a&&(a.packId=t.packId)},updateIsShowcase(e,t){const a=e.beatmaps.find((e=>e.id==t.beatmapId));a&&(a.isShowcase=t.isShowcase)}}};var z=a(8834);const H=(0,o.defineComponent)({components:{NewsPost:q,DataTable:Q.Z,BeatmapInfoAdmin:T.Z,BundledBeatmapsList:Z,BeatmapPackIdListGenerator:Y,ModesIcons:z.Z},data:()=>({selectedBeatmapId:""}),computed:Object.assign(Object.assign({},(0,c.rn)({beatmaps:e=>e.beatmapsAdmin.beatmaps})),{selectedBeatmap(){return this.beatmaps.find((e=>e.id===this.selectedBeatmapId))}}),beforeCreate(){this.$store.hasModule("beatmapsAdmin")||this.$store.registerModule("beatmapsAdmin",K)},unmounted(){this.$store.hasModule("beatmapsAdmin")&&this.$store.unregisterModule("beatmapsAdmin")},created(){return e=this,t=void 0,o=function*(){const e=yield this.$http.initialRequest("/admin/beatmaps/load");this.$http.isError(e)||this.$store.commit("setBeatmaps",e)},new((a=void 0)||(a=Promise))((function(s,n){function r(e){try{d(o.next(e))}catch(e){n(e)}}function l(e){try{d(o.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,l)}d((o=o.apply(e,t||[])).next())}));var e,t,a,o},methods:{updateBeatmap(e){const t=this.beatmaps.findIndex((t=>t.id==e.id));-1!==t&&(this.beatmaps[t]=e)},formatMetadata(e){if(!e)return"";let t=e.artist+" - ";return e.title.length>40?t+=e.title.slice(0,40)+"...":t+=e.title,t}}});H.render=function(e,t,a,c,p,m){const u=(0,o.resolveComponent)("modes-icons"),k=(0,o.resolveComponent)("user-link"),h=(0,o.resolveComponent)("data-table"),B=(0,o.resolveComponent)("beatmap-info-admin"),b=(0,o.resolveComponent)("news-post"),y=(0,o.resolveComponent)("bundled-beatmaps-list"),f=(0,o.resolveComponent)("beatmap-pack-id-list-generator");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",s,[(0,o.createVNode)("div",n,[(0,o.createVNode)("div",r,[l,(0,o.createVNode)(h,{data:e.beatmaps,headers:["METADATA","PACK ID","CREATOR","STATUS"],"custom-data-target":"#editBeatmap","onUpdate:selectedId":t[1]||(t[1]=t=>e.selectedBeatmapId=t)},{default:(0,o.withCtx)((({obj:t})=>[(0,o.createVNode)("td",d,[(0,o.createVNode)(u,{modes:[t.mode]},null,8,["modes"]),t.url?((0,o.openBlock)(),(0,o.createBlock)("a",{key:0,href:t.url,class:"ms-1"},(0,o.toDisplayString)(e.formatMetadata(t.song)),9,["href"])):((0,o.openBlock)(),(0,o.createBlock)("span",i,(0,o.toDisplayString)(e.formatMetadata(t.song)),1))]),(0,o.createVNode)("td",null,(0,o.toDisplayString)(t.packId),1),(0,o.createVNode)("td",null,[(0,o.createVNode)(k,{user:t.host},null,8,["user"])]),(0,o.createVNode)("td",null,(0,o.toDisplayString)(t.status),1)])),_:1},8,["data"])])])]),e.selectedBeatmap?((0,o.openBlock)(),(0,o.createBlock)(B,{key:0,beatmap:e.selectedBeatmap,onUpdateBeatmap:t[2]||(t[2]=t=>e.updateBeatmap(t))},null,8,["beatmap"])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(b),(0,o.createVNode)(y),(0,o.createVNode)(f)])};const J=H}}]);