import{d as g,_ as C,o,c as k,w as h,a as i,t as c,p as u,M as _,B as m,m as j,i as a,e as n,r as y,F as b,k as d,j as p,y as N}from"./index-05be1e6e.js";import{M as T}from"./ModalDialog-18392add.js";import{a as v,b as S,c as I,F as O}from"./FormTextarea-945cd242.js";const F=g({name:"FormCheckbox",components:{FormFieldBase:v},props:{id:{type:String,required:!0},label:{type:String,required:!0},info:{type:String,default:""},modelValue:Boolean},emits:["update:modelValue"]}),U={class:"form-check"},B=["id","checked"],R=["for"];function D(e,t,l,q,V,M){const f=u("form-field-base");return o(),k(f,{label:e.label},{default:h(()=>[i("div",U,[i("input",{id:e.id,class:"form-check-input",type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.checked))},null,40,B),i("label",{class:"form-check-label",for:e.id},c(e.info),9,R)])]),_:1},8,["label"])}const L=C(F,[["render",D]]),z=g({name:"SubmitQuestModal",components:{ModalDialog:T,FormInput:S,FormTextarea:I,FormSelect:O,FormCheckbox:L,ModesIcons:_,FormFieldBase:v},props:{isAdmin:Boolean},data(){return{featuredArtists:[],selectedArtist:"",mapsetCount:6,name:"",price:0,objective:"",timeframe:0,minParty:0,maxParty:0,minRank:0,modes:[m.Osu,m.Taiko,m.Catch,m.Mania],isMbc:!1,queuedQuests:[]}},computed:{...j(["loggedInUser"]),packType(){return this.mapsetCount==1?"single":this.mapsetCount==2?"double":this.mapsetCount<=4?"mini-pack":this.mapsetCount<=9?"pack":this.mapsetCount>=10?"mega-pack":"invalid-pack"},selectedArtistOsuId(){return this.selectedArtist.length?this.selectedArtist.split("|")[0]:""},selectedArtistName(){return this.selectedArtist.length?this.selectedArtist.split("|")[1]:""},points(){let e=25;return this.selectedArtist||(e+=10),this.mapsetCount<1?e=727:this.mapsetCount==1?e+=100:this.mapsetCount<10&&(e+=(10-this.mapsetCount)*7.5),e},enoughPoints(){return this.loggedInUser.availablePoints-this.points>0}},watch:{selectedArtist(){this.selectedArtistName.length&&this.mapsetCount>0&&(this.name=this.findName(),this.objective=this.findObjective(),this.price=this.findPrice(),this.timeframe=this.findTimeframe(),this.minParty=this.mapsetCount,this.maxParty=this.mapsetCount*3)},mapsetCount(){this.selectedArtistName.length&&this.mapsetCount>0&&(this.name=this.findName(),this.objective=this.findObjective(),this.price=this.findPrice(),this.timeframe=this.findTimeframe(),this.minParty=this.mapsetCount,this.maxParty=this.mapsetCount*3)}},async created(){const e=await this.$http.executeGet("/featuredArtists");e&&(this.featuredArtists=e.sort((t,l)=>t.label.toLowerCase()>l.label.toLowerCase()?1:l.label.toLowerCase()>t.label.toLowerCase()?-1:0))},methods:{findName(){return this.selectedArtistName+" "+this.packType},findObjective(){return this.mapsetCount==1?`Create and rank ${this.mapsetCount} mapset of any song by ${this.selectedArtistName}.`:`Create and rank at least ${this.mapsetCount} mapsets of songs by ${this.selectedArtistName}, each hosted by a different user.`},findPrice(){switch(this.mapsetCount){case 1:return 20;case 2:return 10;case 3:return 5;default:return 0}},findTimeframe(){return this.mapsetCount*10+70},toggleQuestMode(e){const t=this.modes.findIndex(l=>l==e);t>-1?this.modes.splice(t,1):this.modes.push(e)},resetQuestDetails(){this.selectedArtist="",this.mapsetCount=6,this.name="",this.price=0,this.objective="",this.timeframe=0,this.minParty=0,this.maxParty=0,this.minRank=0,this.isMbc=!1},addToQueue(){this.queuedQuests.push({name:this.name,price:this.price,descriptionMain:this.objective,timeframe:this.timeframe*(24*3600*1e3),minParty:this.minParty,maxParty:this.maxParty,minRank:this.minRank,modes:this.modes,isMbc:this.isMbc,art:parseInt(this.selectedArtistOsuId),requiredMapsets:this.mapsetCount}),this.resetQuestDetails()},removeFromQueue(e){this.queuedQuests=this.queuedQuests.filter(t=>t.name!=e)},async submitQuest(e){if(!this.modes.length)this.$store.dispatch("updateToastMessages",{message:"Select at least one mode!",type:"danger"});else{const t={name:this.name,price:this.price,descriptionMain:this.objective,timeframe:this.timeframe*864e5,minParty:this.minParty,maxParty:this.maxParty,art:this.selectedArtistOsuId,requiredMapsets:this.mapsetCount,modes:this.modes},l=await this.$http.executePost("/quests/submit",t,e);this.$http.isError(l)||(this.$bs.hideModal("submitQuest"),this.resetQuestDetails())}},async scheduleQuests(e){const t={quests:this.queuedQuests},l=await this.$http.executePost("/admin/quests/create",t,e);this.$http.isError(l)||(this.$bs.hideModal("submitQuest"),this.queuedQuests=[])}}}),E={class:"container"},G=i("option",{value:"-",disabled:""}," --- ",-1),J=i("option",{value:"-",disabled:""}," Jump to an artist by typing their name! ",-1),K=i("option",{value:"-",disabled:""}," --- ",-1),Y=["value"],H={key:0,class:"row col ms-4"},W=i("ul",{class:"small text-secondary"},[i("li",null,"This artist's logo will be used as the quest's icon."),i("li",null,"If your quest allows songs from a few artists, choose whichever best expresses its theme."),i("li",null,'If your quest allows songs from many artists, choose "No specific artist".'),i("li",null,'Selecting an artist pre-fills the "Name" and "Objective" fields, though these can still be customized.')],-1),X=[W],Z={key:1,class:"row col ms-4"},x=i("ul",{class:"small text-secondary"},[i("li",null,"Submitting quest for approval requires you to spend points correlating to how many mapsets are required. The fewer required mapsets, the more points you'll have to spend (and vice versa)."),i("li",null,"Choosing a number pre-fills various fields, though these can still be customized.")],-1),ee=[x],te=i("div",{class:"radial-divisor"},null,-1),se={key:3,class:"row col-sm small text-secondary"},ie=i("p",null," Keep in mind that your quest may need revision before it is approved and published on the Mappers' Guild quest listing! ",-1),oe=i("p",null," If your quest is rejected, your spent points will be returned and pishifat will send you a message explaining why it was rejected. You may re-submit the quest with changes according to that message. Minor wording changes will be modified by pishifat without rejection. ",-1),ae=["disabled"],ne=i("i",{class:"fas fa-coins"},null,-1),le={key:4,class:"row col-sm"},re=i("i",{class:"fas fa-coins"},null,-1),ue={key:0,class:"mt-2"},de={class:"small text-secondary"},me=["onClick"],pe=i("i",{class:"fas fa-minus"},null,-1),he=[pe];function ce(e,t,l,q,V,M){const f=u("form-select"),r=u("form-input"),w=u("form-textarea"),P=u("modes-icons"),A=u("form-field-base"),$=u("form-checkbox"),Q=u("modal-dialog");return o(),k(Q,{id:"submitQuest",title:e.isAdmin?"Add quest":"Submit quest"},{default:h(()=>[i("div",E,[a(f,{modelValue:e.selectedArtist,"onUpdate:modelValue":t[0]||(t[0]=s=>e.selectedArtist=s),label:"Artist",placeholder:"No specific artist"},{default:h(()=>[G,J,K,(o(!0),n(b,null,y(e.featuredArtists,s=>(o(),n("option",{key:s.id,value:s.osuId+"|"+s.label},c(s.label),9,Y))),128))]),_:1},8,["modelValue"]),e.isAdmin?d("",!0):(o(),n("div",H,X)),a(r,{modelValue:e.mapsetCount,"onUpdate:modelValue":t[1]||(t[1]=s=>e.mapsetCount=s),modelModifiers:{number:!0},label:"Required mapsets",type:"number"},null,8,["modelValue"]),e.isAdmin?d("",!0):(o(),n("div",Z,ee)),a(r,{modelValue:e.name,"onUpdate:modelValue":t[2]||(t[2]=s=>e.name=s),label:"Name"},null,8,["modelValue"]),a(w,{modelValue:e.objective,"onUpdate:modelValue":t[3]||(t[3]=s=>e.objective=s),label:"Objective"},null,8,["modelValue"]),a(r,{modelValue:e.price,"onUpdate:modelValue":t[4]||(t[4]=s=>e.price=s),modelModifiers:{number:!0},label:"Price",type:"number",placeholder:"price per party member...",description:"...points required per party member"},null,8,["modelValue"]),a(r,{modelValue:e.timeframe,"onUpdate:modelValue":t[5]||(t[5]=s=>e.timeframe=s),modelModifiers:{number:!0},label:"Timeframe",type:"number",description:"...days to complete quest"},null,8,["modelValue"]),a(A,{label:"Modes",description:"quest modes"},{default:h(()=>[a(P,{modes:e.modes,toggler:!0,color:"secondary",onToggle:t[6]||(t[6]=s=>e.toggleQuestMode(s))},null,8,["modes"])]),_:1}),a(r,{modelValue:e.minParty,"onUpdate:modelValue":t[7]||(t[7]=s=>e.minParty=s),modelModifiers:{number:!0},label:"Party size (min)",type:"number"},null,8,["modelValue"]),a(r,{modelValue:e.maxParty,"onUpdate:modelValue":t[8]||(t[8]=s=>e.maxParty=s),modelModifiers:{number:!0},label:"Party size (max)",type:"number",description:"...members required to accept quest (min/max)"},null,8,["modelValue"]),e.isAdmin?(o(),n(b,{key:2},[a(r,{modelValue:e.minRank,"onUpdate:modelValue":t[9]||(t[9]=s=>e.minRank=s),modelModifiers:{number:!0},label:"Party rank (min)",type:"number",description:"...rank required to accept quest"},null,8,["modelValue"]),a($,{id:"isMbcCheckbox",modelValue:e.isMbc,"onUpdate:modelValue":t[10]||(t[10]=s=>e.isMbc=s),label:"is MBC",info:"Toggle isMbc"},null,8,["modelValue"])],64)):d("",!0),te,e.isAdmin?(o(),n("div",le,[i("button",{class:"btn btn-outline-secondary w-100",onClick:t[12]||(t[12]=s=>e.addToQueue())},[p(" Add quest to queue "),re]),e.queuedQuests.length?(o(),n("div",ue,[p(" Pending quests "),i("ul",de,[(o(!0),n(b,null,y(e.queuedQuests,s=>(o(),n("li",{key:s.name},[p(c(s.name)+" ",1),i("a",{href:"#",class:"text-danger",onClick:N(fe=>e.removeFromQueue(s.name),["prevent"])},he,8,me)]))),128))])])):d("",!0),e.queuedQuests.length?(o(),n("button",{key:1,class:"btn btn-outline-success w-100",onClick:t[13]||(t[13]=s=>e.scheduleQuests(s))}," Schedule quests ")):d("",!0)])):(o(),n("div",se,[ie,oe,i("button",{class:"btn btn-outline-success w-100",disabled:!e.enoughPoints,onClick:t[11]||(t[11]=s=>e.submitQuest(s))},[p(c(`Submit quest for approval: ${e.points} pts`)+" ",1),ne],8,ae)]))])]),_:1},8,["title"])}const Ce=C(z,[["render",ce]]);export{Ce as S};
