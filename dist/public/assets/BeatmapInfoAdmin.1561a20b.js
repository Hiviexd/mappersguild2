import{_ as t}from"./ModalDialog.0d82a3c5.js";import{_ as a}from"./ModesIcons.4407befb.js";import{d as s,i as e,o,q as d,w as i,b as p,t as r,j as n,f as m,G as l,H as u,g as c,F as b,N as h,e as k,k as y}from"./vendor.cb33bf1d.js";var f=s({name:"BeatmapInfoAdmin",components:{ModalDialog:t,ModesIcons:a},props:{beatmap:{type:Object,required:!0}},data(){return{status:this.beatmap.status,taskId:null,modderId:null,beatmapUrl:this.beatmap.url,storyboardQuality:null,storyboardTaskId:null,packId:this.beatmap.packId}},computed:{sortedTasks(){const t=["Easy","Normal","Hard","Insane","Expert","Storyboard"];return[...this.beatmap.tasks].sort((function(a,s){return t.indexOf(a.name)-t.indexOf(s.name)}))}},watch:{beatmap(){this.findBeatmapInfo()}},mounted(){this.findBeatmapInfo()},methods:{findBeatmapInfo(){this.status=this.beatmap.status,this.taskId=null,this.modderId=null,this.beatmapUrl=this.beatmap.url,this.storyboardQuality=null,this.storyboardTaskId=null,this.packId=this.beatmap.packId,this.beatmap.tasks.forEach((t=>{"Storyboard"==t.name&&(t.sbQuality&&(this.storyboardQuality=t.sbQuality),this.storyboardTaskId=t.id)}))},findTaskInfo(t){let a=`${t.name} --- `;return a+=t.mappers.map((t=>t.username)).join(", "),"Storyboard"==t.name&&(a+=` --- ${t.sbQuality}`),a},async updateBeatmapStatus(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateStatus`,{status:this.status},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:"updated beatmap status",type:"info"}),this.$store.commit("updateBeatmapStatus",{beatmapId:this.beatmap.id,status:a}))},async deleteTask(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/tasks/${this.taskId}/delete`,{},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:"deleted task",type:"info"}),this.$store.commit("deleteTask",{beatmapId:this.beatmap.id,taskId:this.taskId}))},async deleteModder(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/modders/${this.modderId}/delete`,{},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:"deleted modder",type:"info"}),this.$store.commit("deleteModder",{beatmapId:this.beatmap.id,modderId:this.modderId}))},async updateUrl(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateUrl`,{url:this.beatmapUrl},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:"updated URL",type:"info"}),this.$store.commit("updateUrl",{beatmapId:this.beatmap.id,url:a}))},async updateStoryboardQuality(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateStoryboardQuality`,{storyboardQuality:this.storyboardQuality,taskId:this.storyboardTaskId},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:"updated storyboard quality",type:"info"}),this.$store.commit("updateStoryboardQuality",{beatmapId:this.beatmap.id,taskId:this.storyboardTaskId,task:a}))},async updatePackId(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updatePackId`,{packId:this.packId},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:"updated pack id",type:"info"}),this.$store.commit("updatePackId",{beatmapId:this.beatmap.id,packId:a}))},async updateIsShowcase(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateIsShowcase`,{isShowcase:!this.beatmap.isShowcase},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:`updated isShowcase: ${a}`,type:"info"}),this.$store.commit("updateIsShowcase",{beatmapId:this.beatmap.id,isShowcase:a}))},async updateQueuedForRank(t){const a=await this.$http.executePost(`/admin/beatmaps/${this.beatmap.id}/updateQueuedForRank`,{queuedForRank:!this.beatmap.queuedForRank},t);this.$http.isError(a)||(this.$store.dispatch("updateToastMessages",{message:`updated queuedForRank: ${a}`,type:"info"}),this.$store.commit("updateQueuedForRank",{beatmapId:this.beatmap.id,queuedForRank:a}))}}});const I=["href"],$={key:1},w=y(" | "),g={class:"container"},S={class:"row"},Q=[m("option",{value:"WIP"}," WIP ",-1),m("option",{value:"Done"}," Done ",-1),m("option",{value:"Qualified"}," Qualified ",-1),m("option",{value:"Ranked"}," Ranked ",-1)],T={class:"row"},x=["value"],v={class:"row"},U=["value"],M={class:"row"},R={key:0,class:"row"},P=[m("option",{value:"1"}," 1 ",-1),m("option",{value:"2"}," 2 ",-1),m("option",{value:"3"}," 3 ",-1)],E={class:"row"},F={class:"row"},B={class:"col-sm-6"},q=y(" Featured Artist showcase: "),C={class:"text-danger me-2"},j={key:1,class:"row"},D={class:"col-sm-6"},V=y(" Queued for rank: "),_={class:"text-danger me-2"};f.render=function(t,a,s,y,f,O){const A=e("user-link"),H=e("modes-icons"),L=e("modal-dialog");return o(),d(L,{id:"editBeatmap",loaded:Boolean(t.beatmap)},{header:i((()=>[t.beatmap.url?(o(),p("a",{key:0,href:t.beatmap.url,target:"_blank"},r(t.beatmap.song.artist)+" - "+r(t.beatmap.song.title),9,I)):(o(),p("span",$,r(t.beatmap.song.artist)+" - "+r(t.beatmap.song.title),1)),w,n(A,{class:"me-1",user:t.beatmap.host},null,8,["user"]),n(H,{modes:[t.beatmap.mode]},null,8,["modes"])])),default:i((()=>[m("div",g,[m("p",S,[l(m("select",{"onUpdate:modelValue":a[0]||(a[0]=a=>t.status=a),class:"form-select form-select-sm w-50 mx-2"},Q,512),[[u,t.status]]),m("button",{class:"btn btn-sm btn-outline-info w-25",onClick:a[1]||(a[1]=a=>t.updateBeatmapStatus(a))}," Save status ")]),m("p",T,[l(m("select",{"onUpdate:modelValue":a[2]||(a[2]=a=>t.taskId=a),class:"form-select form-select-sm w-50 mx-2"},[(o(!0),p(b,null,c(t.sortedTasks,(a=>(o(),p("option",{key:a.id,value:a.id},r(t.findTaskInfo(a)),9,x)))),128))],512),[[u,t.taskId]]),m("button",{class:"btn btn-sm btn-outline-danger w-25",onClick:a[3]||(a[3]=a=>t.deleteTask(a))}," Remove difficulty ")]),m("p",v,[l(m("select",{"onUpdate:modelValue":a[4]||(a[4]=a=>t.modderId=a),class:"form-select form-select-sm w-50 mx-2"},[(o(!0),p(b,null,c(t.beatmap.modders,(t=>(o(),p("option",{key:t.id,value:t.id},r(t.username),9,U)))),128))],512),[[u,t.modderId]]),m("button",{class:"btn btn-sm btn-outline-danger w-25",onClick:a[5]||(a[5]=a=>t.deleteModder(a))}," Remove modder ")]),m("p",M,[l(m("input",{"onUpdate:modelValue":a[6]||(a[6]=a=>t.beatmapUrl=a),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"beatmap url..."},null,512),[[h,t.beatmapUrl]]),m("button",{class:"btn btn-sm btn-outline-info w-25",onClick:a[7]||(a[7]=a=>t.updateUrl(a))}," Save URL ")]),t.storyboardTaskId?(o(),p("p",R,[l(m("select",{"onUpdate:modelValue":a[8]||(a[8]=a=>t.storyboardQuality=a),class:"form-select form-select-sm w-50 mx-2"},P,512),[[u,t.storyboardQuality]]),m("button",{class:"btn btn-sm btn-outline-info w-25",onClick:a[9]||(a[9]=a=>t.updateStoryboardQuality(a))}," Save Storyboard Quality ")])):k("",!0),m("p",E,[l(m("input",{"onUpdate:modelValue":a[10]||(a[10]=a=>t.packId=a),class:"form-control form-control-sm mx-2 w-50",type:"text",autocomplete:"off",placeholder:"osu! beatmap pack ID..."},null,512),[[h,t.packId]]),m("button",{class:"btn btn-sm btn-outline-info w-25",onClick:a[11]||(a[11]=a=>t.updatePackId(a))}," Save pack ID ")]),m("p",F,[m("span",B,[q,m("span",C,r(t.beatmap.isShowcase?"true":"false"),1)]),m("button",{class:"btn btn-sm btn-outline-info ms-3 w-25",onClick:a[12]||(a[12]=a=>t.updateIsShowcase(a))}," Toggle ")]),"Qualified"==t.beatmap.status?(o(),p("p",j,[m("span",D,[V,m("span",_,r(t.beatmap.queuedForRank?"true":"false"),1)]),m("button",{class:"btn btn-sm btn-outline-info ms-3 w-25",onClick:a[13]||(a[13]=a=>t.updateQueuedForRank(a))}," Toggle ")])):k("",!0)])])),_:1},8,["loaded"])};export{f as _};
