var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,n=(e,s)=>{for(var t in s||(s={}))i.call(s,t)&&r(e,t,s[t]);if(a)for(var t of a(s))o.call(s,t)&&r(e,t,s[t]);return e},l=(e,a)=>s(e,t(a));import{d as p,m as c,p as h,a as d,i as u,o as g,b as m,l as w,t as f,j as y,e as b,n as v,s as k,f as S,F as M,g as x,z as $}from"./vendor.df51a6ea.js";import{_ as A}from"./UserLinkList.e91517e6.js";var j={namespaced:!0,state:{showcaseArtists:[]},mutations:{setShowcaseArtists(e,s){e.showcaseArtists=s},updateArtist(e,s){const t=e.showcaseArtists.findIndex((e=>e.id===s.id));-1!==t&&(e.showcaseArtists[t]=s)}}},U=p({name:"SongDetails",components:{UserLinkList:A},props:{song:{type:Object,default:null},isShowcaseMapper:{type:Boolean},artistId:{type:String,required:!0}},data:()=>({processing:!1}),computed:l(n({},c(["loggedInUser"])),{isSongShowcaseMapper(){return this.song.songShowcaseMappers.map((e=>e.id)).includes(this.loggedInUser.id)}}),methods:{async addSongShowcaseMapper(e){this.processing=!0;const s=await this.$http.executePost(`/showcase/addSongShowcaseMapper/${this.artistId}/${this.song.id}`,{},e);s&&!this.$http.isError(s)&&(this.$store.commit("showcase/updateArtist",s),this.$store.dispatch("updateToastMessages",{message:"Added",type:"info"})),this.processing=!1},async removeSongShowcaseMapper(e){this.processing=!0;const s=await this.$http.executePost(`/showcase/removeSongShowcaseMapper/${this.artistId}/${this.song.id}`,{},e);s&&!this.$http.isError(s)&&(this.$store.commit("showcase/updateArtist",s),this.$store.dispatch("updateToastMessages",{message:"Removed",type:"info"})),this.processing=!1}}});h("data-v-17e86fb0");const I={key:0,class:"text-info"},O=w(" (mapped by "),P=w(") "),T={key:1,class:"text-info"};d(),U.render=function(e,s,t,a,i,o){const r=u("user-link-list");return g(),m("div",null,[w(f(e.song.artist)+" - "+f(e.song.title)+" ",1),e.song.songShowcaseMappers&&e.song.songShowcaseMappers.length?(g(),m("span",I,[O,y(r,{users:e.song.songShowcaseMappers},null,8,["users"]),P])):b("",!0),e.isShowcaseMapper?(g(),m("span",T,[e.song.songShowcaseMappers&&e.isSongShowcaseMapper?(g(),m("a",{key:0,href:"#",class:v(["text-danger small",e.processing?"fake-button-disable":""]),onClick:s[0]||(s[0]=k((s=>e.removeSongShowcaseMapper(s)),["prevent"]))}," remove ",2)):(g(),m("a",{key:1,href:"#",class:v(["text-success small",e.processing?"fake-button-disable":""]),onClick:s[1]||(s[1]=k((s=>e.addSongShowcaseMapper(s)),["prevent"]))}," add ",2))])):b("",!0)])},U.__scopeId="data-v-17e86fb0";var D=p({name:"ArtistDetails",components:{UserLinkList:A,SongDetails:U},props:{artist:{type:Object,default:null}},data:()=>({processing:!1}),computed:l(n({},c(["loggedInUser"])),{isShowcaseMapper(){return this.artist.showcaseMappers.map((e=>e.id)).includes(this.loggedInUser.id)},month(){if(this.artist.projectedRelease){return new Date(this.artist.projectedRelease).toLocaleString("default",{month:"long"})}return null}}),methods:{async addShowcaseMapper(e){this.processing=!0;const s=await this.$http.executePost("/showcase/addShowcaseMapper/"+this.artist.id,{},e);s&&!this.$http.isError(s)&&(this.$store.commit("showcase/updateArtist",s),this.$store.dispatch("updateToastMessages",{message:"Added",type:"info"})),this.processing=!1},async removeShowcaseMapper(e){this.processing=!0;const s=await this.$http.executePost("/showcase/removeShowcaseMapper/"+this.artist.id,{},e);s&&!this.$http.isError(s)&&(this.$store.commit("showcase/updateArtist",s),this.$store.dispatch("updateToastMessages",{message:"Removed",type:"info"})),this.processing=!1}}});h("data-v-3e63b25e");const L=["href"],R=S("i",{class:"fas fa-angle-down"},null,-1),_=w(" — "),C=["id"],z={class:"small ms-2"},E={key:0},F=["href"],Y={key:1},q={key:2},B=["href"],G={key:3},H={key:4},J={key:5};d(),D.render=function(e,s,t,a,i,o){const r=u("user-link-list"),n=u("song-details");return g(),m("div",null,[S("a",{href:"#"+e.artist.label,"data-bs-toggle":"collapse",class:v(e.artist.hasRankedMaps?"":"text-warning")},[w(f(e.artist.label)+" ",1),R],10,L),_,y(r,{users:e.artist.showcaseMappers},null,8,["users"]),e.artist.showcaseMappers&&e.isShowcaseMapper?(g(),m("a",{key:0,href:"#",class:v(["text-danger small",e.processing?"fake-button-disable":""]),onClick:s[0]||(s[0]=k((s=>e.removeShowcaseMapper(s)),["prevent"]))}," remove ",2)):(g(),m("a",{key:1,href:"#",class:v(["text-success small",e.processing?"fake-button-disable":""]),onClick:s[1]||(s[1]=k((s=>e.addShowcaseMapper(s)),["prevent"]))}," add ",2)),S("div",{id:e.artist.label,class:"collapse"},[S("div",z,[e.artist.referenceUrl?(g(),m("div",E,[e.artist.referenceUrl?(g(),m("a",{key:0,href:e.artist.referenceUrl,target:"_blank"},f(e.artist.referenceUrl),9,F)):b("",!0)])):b("",!0),e.artist.songs.length?e.artist.oszTemplatesUrl?(g(),m("div",q,[S("a",{href:e.artist.oszTemplatesUrl,target:"_blank"},".osz templates",8,B)])):(g(),m("div",G," .osz templates aren't available yet. :( ")):(g(),m("div",Y," Songs haven't been added yet. @pishifat ")),e.artist.projectedRelease?(g(),m("div",H,f(e.month)+" (deadline estimate) ",1)):(g(),m("div",J," Deadline hasn't been set yet, but expect it to be within the next 4 months "))]),S("ul",null,[(g(!0),m(M,null,x(e.artist.songs,(s=>(g(),m("li",{key:s.id,class:"small text-secondary"},[y(n,{song:s,"is-showcase-mapper":e.isShowcaseMapper,"artist-id":e.artist.id},null,8,["song","is-showcase-mapper","artist-id"])])))),128))])],8,C)])},D.__scopeId="data-v-3e63b25e";var K=p({name:"ShowcasePage",components:{ArtistDetails:D},computed:n({},c("showcase",["showcaseArtists"])),beforeCreate(){this.$store.hasModule("showcase")||this.$store.registerModule("showcase",j)},async created(){const e=await this.$http.initialRequest("/showcase/relevantInfo");e&&this.$store.commit("showcase/setShowcaseArtists",e.artists)}});const N={class:"container card card-body py-3 mb-3"},Q=$('<h5>readme.txt</h5><ol class="small text-secondary"><li> These are some of the Featured Artists planned to be announced in the next few months. This is not an exhaustive list of all upcoming Featured Artists, and some may not be announced until later. </li><li> As a *special showcase mapper person*, you&#39;re trusted to not leak anything on this page. So don&#39;t leak anything. </li><li> Clicking an artist will display their info + songs you can map. </li><li><span class="text-warning">Yellow</span> artists are desperate for new maps, and will likely feature your map in the announcement video (if you&#39;re the only mapper). </li><li> If you&#39;re interested mapping a song from an artist, mark it with <span class="text-success">add</span> (or <span class="text-danger">remove</span> if you change your mind). You can optionally mark a specific song too. pishifat will talk to you about the next steps once you&#39;ve expressed interest. </li><li> Deadlines are flexible. Talk to pishifat if you want to map an artist, but the deadline is holding you back. </li></ol><hr><h5>Upcoming Featured Artists</h5>',4),V={key:0};K.render=function(e,s,t,a,i,o){const r=u("artist-details");return g(),m("div",null,[S("div",N,[Q,S("ul",null,[(g(!0),m(M,null,x(e.showcaseArtists,(e=>(g(),m("li",{key:e.id},[y(r,{artist:e},null,8,["artist"])])))),128)),e.showcaseArtists&&e.showcaseArtists.length?b("",!0):(g(),m("li",V," You're not supposed to be here. Or something went wrong. Talk to pishifat if you're expecting a list of artists. "))])])])};export{K as default};
