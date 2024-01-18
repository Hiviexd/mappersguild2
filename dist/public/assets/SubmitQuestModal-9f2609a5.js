import{d as y,_ as g,o,c as C,w as f,a as i,t as p,p as u,m as A,i as n,e as a,r as b,F as c,k as m,j as d,y as M}from"./index-96f5eca7.js";import{M as $}from"./ModalDialog-abe26d3a.js";import{a as Q,b as _,c as j,F as N}from"./FormTextarea-a6c0f66b.js";const S=y({name:"FormCheckbox",components:{FormFieldBase:Q},props:{id:{type:String,required:!0},label:{type:String,required:!0},info:{type:String,default:""},modelValue:Boolean},emits:["update:modelValue"]}),T={class:"form-check"},F=["id","checked"],O=["for"];function U(e,t,l,k,v,q){const h=u("form-field-base");return o(),C(h,{label:e.label},{default:f(()=>[i("div",T,[i("input",{id:e.id,class:"form-check-input",type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.checked))},null,40,F),i("label",{class:"form-check-label",for:e.id},p(e.info),9,O)])]),_:1},8,["label"])}const I=g(S,[["render",U]]),B=y({name:"SubmitQuestModal",components:{ModalDialog:$,FormInput:_,FormTextarea:j,FormSelect:N,FormCheckbox:I},props:{isAdmin:Boolean},data(){return{featuredArtists:[],selectedArtist:"",mapsetCount:6,name:"",price:0,objective:"",timeframe:0,minParty:0,maxParty:0,minRank:0,isMbc:!1,queuedQuests:[]}},computed:{...A(["loggedInUser"]),packType(){return this.mapsetCount==1?"single":this.mapsetCount==2?"double":this.mapsetCount<=4?"mini-pack":this.mapsetCount<=9?"pack":this.mapsetCount>=10?"mega-pack":"invalid-pack"},selectedArtistOsuId(){return this.selectedArtist.length?this.selectedArtist.split("|")[0]:""},selectedArtistName(){return this.selectedArtist.length?this.selectedArtist.split("|")[1]:""},points(){let e=25;return this.selectedArtist||(e+=10),this.mapsetCount<1?e=727:this.mapsetCount==1?e+=100:this.mapsetCount<10&&(e+=(10-this.mapsetCount)*7.5),e},enoughPoints(){return this.loggedInUser.availablePoints-this.points>0}},watch:{selectedArtist(){this.selectedArtistName.length&&this.mapsetCount>0&&(this.name=this.findName(),this.objective=this.findObjective(),this.price=this.findPrice(),this.timeframe=this.findTimeframe(),this.minParty=this.mapsetCount,this.maxParty=this.mapsetCount*3)},mapsetCount(){this.selectedArtistName.length&&this.mapsetCount>0&&(this.name=this.findName(),this.objective=this.findObjective(),this.price=this.findPrice(),this.timeframe=this.findTimeframe(),this.minParty=this.mapsetCount,this.maxParty=this.mapsetCount*3)}},async created(){const e=await this.$http.executeGet("/featuredArtists");e&&(this.featuredArtists=e.sort((t,l)=>t.label.toLowerCase()>l.label.toLowerCase()?1:l.label.toLowerCase()>t.label.toLowerCase()?-1:0))},methods:{findName(){return this.selectedArtistName+" "+this.packType},findObjective(){return this.mapsetCount==1?`Create and rank ${this.mapsetCount} mapset of any song by ${this.selectedArtistName}.`:`Create and rank at least ${this.mapsetCount} mapsets of songs by ${this.selectedArtistName}, each hosted by a different user.`},findPrice(){switch(this.mapsetCount){case 1:return 20;case 2:return 10;case 3:return 5;default:return 0}},findTimeframe(){return this.mapsetCount*10+70},resetQuestDetails(){this.selectedArtist="",this.mapsetCount=6,this.name="",this.price=0,this.objective="",this.timeframe=0,this.minParty=0,this.maxParty=0,this.minRank=0,this.isMbc=!1},addToQueue(){this.queuedQuests.push({name:this.name,price:this.price,descriptionMain:this.objective,timeframe:this.timeframe*(24*3600*1e3),minParty:this.minParty,maxParty:this.maxParty,minRank:this.minRank,isMbc:this.isMbc,art:parseInt(this.selectedArtistOsuId),requiredMapsets:this.mapsetCount}),this.resetQuestDetails()},removeFromQueue(e){this.queuedQuests=this.queuedQuests.filter(t=>t.name!=e)},async submitQuest(e){const t={name:this.name,price:this.price,descriptionMain:this.objective,timeframe:this.timeframe*864e5,minParty:this.minParty,maxParty:this.maxParty,art:this.selectedArtistOsuId,requiredMapsets:this.mapsetCount},l=await this.$http.executePost("/quests/submit",t,e);this.$http.isError(l)||(this.$bs.hideModal("submitQuest"),this.resetQuestDetails())},async scheduleQuests(e){const t={quests:this.queuedQuests},l=await this.$http.executePost("/admin/quests/create",t,e);this.$http.isError(l)||(this.$bs.hideModal("submitQuest"),this.queuedQuests=[])}}}),R={class:"container"},D=i("option",{value:"-",disabled:""}," --- ",-1),L=i("option",{value:"-",disabled:""}," Jump to an artist by typing their name! ",-1),z=i("option",{value:"-",disabled:""}," --- ",-1),E=["value"],G={key:0,class:"row col ms-4"},J=i("ul",{class:"small text-secondary"},[i("li",null,"This artist's logo will be used as the quest's icon."),i("li",null,"If your quest allows songs from a few artists, choose whichever best expresses its theme."),i("li",null,'If your quest allows songs from many artists, choose "No specific artist".'),i("li",null,'Selecting an artist pre-fills the "Name" and "Objective" fields, though these can still be customized.')],-1),K=[J],Y={key:1,class:"row col ms-4"},H=i("ul",{class:"small text-secondary"},[i("li",null,"Submitting quest for approval requires you to spend points correlating to how many mapsets are required. The fewer required mapsets, the more points you'll have to spend (and vice versa)."),i("li",null,"Choosing a number pre-fills various fields, though these can still be customized.")],-1),W=[H],X=i("div",{class:"radial-divisor"},null,-1),Z={key:3,class:"row col-sm small text-secondary"},x=i("p",null," Keep in mind that your quest may need revision before it is approved and published on the Mappers' Guild quest listing! ",-1),ee=i("p",null," If your quest is rejected, your spent points will be returned and pishifat will send you a message explaining why it was rejected. You may re-submit the quest with changes according to that message. Minor wording changes will be modified by pishifat without rejection. ",-1),te=["disabled"],se=i("i",{class:"fas fa-coins"},null,-1),ie={key:4,class:"row col-sm"},oe=i("i",{class:"fas fa-coins"},null,-1),ae={key:0,class:"mt-2"},ne={class:"small text-secondary"},re=["onClick"],le=i("i",{class:"fas fa-minus"},null,-1),ue=[le];function me(e,t,l,k,v,q){const h=u("form-select"),r=u("form-input"),V=u("form-textarea"),w=u("form-checkbox"),P=u("modal-dialog");return o(),C(P,{id:"submitQuest",title:e.isAdmin?"Add quest":"Submit quest"},{default:f(()=>[i("div",R,[n(h,{modelValue:e.selectedArtist,"onUpdate:modelValue":t[0]||(t[0]=s=>e.selectedArtist=s),label:"Artist",placeholder:"No specific artist"},{default:f(()=>[D,L,z,(o(!0),a(c,null,b(e.featuredArtists,s=>(o(),a("option",{key:s.id,value:s.osuId+"|"+s.label},p(s.label),9,E))),128))]),_:1},8,["modelValue"]),e.isAdmin?m("",!0):(o(),a("div",G,K)),n(r,{modelValue:e.mapsetCount,"onUpdate:modelValue":t[1]||(t[1]=s=>e.mapsetCount=s),modelModifiers:{number:!0},label:"Required mapsets",type:"number"},null,8,["modelValue"]),e.isAdmin?m("",!0):(o(),a("div",Y,W)),n(r,{modelValue:e.name,"onUpdate:modelValue":t[2]||(t[2]=s=>e.name=s),label:"Name"},null,8,["modelValue"]),n(V,{modelValue:e.objective,"onUpdate:modelValue":t[3]||(t[3]=s=>e.objective=s),label:"Objective"},null,8,["modelValue"]),n(r,{modelValue:e.price,"onUpdate:modelValue":t[4]||(t[4]=s=>e.price=s),modelModifiers:{number:!0},label:"Price",type:"number",placeholder:"price per party member...",description:"...points required per party member"},null,8,["modelValue"]),n(r,{modelValue:e.timeframe,"onUpdate:modelValue":t[5]||(t[5]=s=>e.timeframe=s),modelModifiers:{number:!0},label:"Timeframe",type:"number",description:"...days to complete quest"},null,8,["modelValue"]),n(r,{modelValue:e.minParty,"onUpdate:modelValue":t[6]||(t[6]=s=>e.minParty=s),modelModifiers:{number:!0},label:"Party size (min)",type:"number"},null,8,["modelValue"]),n(r,{modelValue:e.maxParty,"onUpdate:modelValue":t[7]||(t[7]=s=>e.maxParty=s),modelModifiers:{number:!0},label:"Party size (max)",type:"number",description:"...members required to accept quest (min/max)"},null,8,["modelValue"]),e.isAdmin?(o(),a(c,{key:2},[n(r,{modelValue:e.minRank,"onUpdate:modelValue":t[8]||(t[8]=s=>e.minRank=s),modelModifiers:{number:!0},label:"Party rank (min)",type:"number",description:"...rank required to accept quest"},null,8,["modelValue"]),n(w,{id:"isMbcCheckbox",modelValue:e.isMbc,"onUpdate:modelValue":t[9]||(t[9]=s=>e.isMbc=s),label:"is MBC",info:"Toggle isMbc"},null,8,["modelValue"])],64)):m("",!0),X,e.isAdmin?(o(),a("div",ie,[i("button",{class:"btn btn-outline-secondary w-100",onClick:t[11]||(t[11]=s=>e.addToQueue())},[d(" Add quest to queue "),oe]),e.queuedQuests.length?(o(),a("div",ae,[d(" Pending quests "),i("ul",ne,[(o(!0),a(c,null,b(e.queuedQuests,s=>(o(),a("li",{key:s.name},[d(p(s.name)+" ",1),i("a",{href:"#",class:"text-danger",onClick:M(de=>e.removeFromQueue(s.name),["prevent"])},ue,8,re)]))),128))])])):m("",!0),e.queuedQuests.length?(o(),a("button",{key:1,class:"btn btn-outline-success w-100",onClick:t[12]||(t[12]=s=>e.scheduleQuests(s))}," Schedule quests ")):m("",!0)])):(o(),a("div",Z,[x,ee,i("button",{class:"btn btn-outline-success w-100",disabled:!e.enoughPoints,onClick:t[10]||(t[10]=s=>e.submitQuest(s))},[d(p(`Submit quest for approval: ${e.points} pts`)+" ",1),se],8,te)]))])]),_:1},8,["title"])}const fe=g(B,[["render",me]]);export{fe as S};