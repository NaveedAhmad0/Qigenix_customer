(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[17],{173:function(e,a,t){"use strict";var l=this&&this.__assign||function(){return(l=Object.assign||function(e){for(var a,t=1,l=arguments.length;t<l;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,a,t,l){void 0===l&&(l=t);var r=Object.getOwnPropertyDescriptor(a,t);r&&!("get"in r?!a.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(e,l,r)}:function(e,a,t,l){void 0===l&&(l=t),e[l]=a[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),m=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(a,e,t);return n(a,e),a},o=this&&this.__rest||function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)a.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(t[l[r]]=e[l[r]])}return t};Object.defineProperty(a,"__esModule",{value:!0});var c=m(t(0)),s=t(174),i=(0,t(175).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");a.default=function(e){var a=e.loading,t=void 0===a||a,r=e.color,n=void 0===r?"#000000":r,m=e.speedMultiplier,u=void 0===m?1:m,d=e.cssOverride,p=void 0===d?{}:d,f=e.size,E=void 0===f?35:f,b=o(e,["loading","color","speedMultiplier","cssOverride","size"]),v=l({background:"transparent !important",width:(0,s.cssValue)(E),height:(0,s.cssValue)(E),borderRadius:"100%",border:"2px solid",borderTopColor:n,borderBottomColor:"transparent",borderLeftColor:n,borderRightColor:n,display:"inline-block",animation:"".concat(i," ").concat(.75/u,"s 0s infinite linear"),animationFillMode:"both"},p);return t?c.createElement("span",l({style:v},b)):null}},174:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.cssValue=a.parseLengthAndUnit=void 0;var l={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var a,t=(e.match(/^[0-9.]*/)||"").toString();a=t.includes(".")?parseFloat(t):parseInt(t,10);var r=(e.match(/[^0-9]*$/)||"").toString();return l[r]?{value:a,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}a.parseLengthAndUnit=r,a.cssValue=function(e){var a=r(e);return"".concat(a.value).concat(a.unit)}},175:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.createAnimation=void 0;a.createAnimation=function(e,a,t){var l="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return l;var r=document.createElement("style");document.head.appendChild(r);var n=r.sheet,m="\n    @keyframes ".concat(l," {\n      ").concat(a,"\n    }\n  ");return n&&n.insertRule(m,0),l}},206:function(e,a,t){e.exports=t.p+"static/media/face8.16958c47.jpg"},690:function(e,a,t){},839:function(e,a,t){"use strict";t.r(a);var l=t(9),r=t(32),n=t.n(r),m=t(0),o=t.n(m),c=t(6),s=t(173),i=t.n(s),u=t(40),d=t(690),p=t.n(d);a.default=function(){var e=Object(c.useLocation)(),a=Object(m.useState)({id:0,name:"",mobile:"",email:"",userName:"",personType:"",InitialShop:"",firstName:"",surName:"",yearOfBirth:"",monthOfBirth:"",dayOfBirth:"",address:"",province:"",district:"",subDivision:"",pincode:0,shopType:"",creditCard:"",weChat:"",livePayment:"",mobileBanking:"",trueWallet:"",shopeePay:"",alone:"",website:"",facebook:"",linkedin:"",instagram:"",other:"",company:"",bank:"",bankAccount:0,rnfCode:"",domestic:"",inter:"",rateQrCode:"",rateBarCode:"",copyOfId:"",logo:"",bankBook:"",otherDocument:""}),r=Object(l.a)(a,2),s=r[0],d=r[1],f=s.id,E=s.name,b=s.mobile,v=s.email,h=s.userName,N=(s.personType,s.InitialShop),y=s.firstName,g=(s.surName,s.yearOfBirth),x=s.monthOfBirth,O=s.dayOfBirth,I=s.address,w=s.province,k=s.district,F=s.subDivision,C=(s.pincode,s.shopType,s.creditCard,s.weChat,s.livePayment,s.mobileBanking,s.trueWallet,s.shopeePay,s.alone,s.website),U=s.facebook,B=s.linkedin,P=s.instagram,j=s.other,_=s.company,M=s.bank,D=s.bankAccount,S=s.rnfCode,A=s.domestic,T=s.inter,R=s.rateQrCode,L=(s.rateBarCode,s.copyOfId,s.logo),W=(s.bankBook,s.otherDocument,Object(m.useState)(!0)),Q=Object(l.a)(W,2),z=Q[0],V=Q[1];return Object(m.useEffect)((function(){var a=e.state.dataEmail;console.log("Email is",e.state.dataEmail),n.a.get("".concat(u.a,"/user/get-profile?email=").concat(a)).then((function(e){d({id:e.data.user.id,name:e.data.user.name,mobile:e.data.user.mobile,email:e.data.user.email,userName:e.data.user.userName,personType:e.data.user.personType,InitialShop:e.data.user.InitialShop,firstName:e.data.user.firstName,surName:e.data.user.surName,yearOfBirth:e.data.user.yearOfBirth,monthOfBirth:e.data.user.monthOfBirth,dayOfBirth:e.data.user.dayOfBirth,address:e.data.user.address,province:e.data.user.province,district:e.data.user.district,subDivision:e.data.user.subDivision,pincode:e.data.user.pincode,shopType:e.data.user.shopType,creditCard:e.data.user.creditCard,weChat:e.data.user.weChat,livePayment:e.data.user.livePayment,mobileBanking:e.data.user.mobileBanking,trueWallet:e.data.user.trueWallet,shopeePay:e.data.user.shopeePay,alone:e.data.user.alone,website:e.data.user.website,facebook:e.data.user.facebook,linkedin:e.data.user.linkedin,instagram:e.data.user.instagram,other:e.data.user.other,company:e.data.user.company,bank:e.data.user.bank,bankAccount:e.data.user.bankAccount,rnfCode:e.data.user.rnfCode,domestic:e.data.user.domestic,inter:e.data.user.inter,rateQrCode:e.data.user.rateQrCode,rateBarCode:e.data.user.rateBarCode,copyOfId:e.data.user.copyOfId,logo:e.data.user.logo,bankBook:e.data.user.bankBook,otherDocument:e.data.user.otherDocument}),V(!1),setTimeout((function(){V(!1)}),3e3)}))}),[]),o.a.createElement("div",{className:"col-12 grid-margin userProfileMain"},o.a.createElement("h4",{className:"card-title fs-3"},"Personal Admin Information"),z?o.a.createElement("div",{className:"row",style:{height:"500px"}},o.a.createElement("div",{className:"col-12 text-center my-auto"},o.a.createElement(i.a,{color:"#136be0",size:100,speedMultiplier:1}))):o.a.createElement("div",{className:"card userProfileCard-2 "},o.a.createElement("div",{className:"row flex-column mt-5 mx-auto card text-white w-30 mb-5",style:{backgroundColor:"#007BFF",fontWeight:"500",lineHeight:"1",fontSize:"10px"}},o.a.createElement("img",{className:"profile-img mt-3 mb-2",src:t(206),alt:"Profile"}),o.a.createElement("div",{className:"mt-2 mx-auto"},o.a.createElement("p",{className:"text-white"},"Merchant Code: ",o.a.createElement("span",{className:"text-warning"},"M010303")),o.a.createElement("p",{className:"text-white"},"Email: ",o.a.createElement("span",{className:"text-warning"},v)))),o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("h4",{className:"card-title fs-4"},"User Personal Information"),o.a.createElement("div",{className:"card userCard p-lg-2"},o.a.createElement("div",{className:"card-body ".concat(p.a.usercardbody)},o.a.createElement("form",{className:"row g-3 form-sample"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Merchant ID :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:f})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Merchant Name English :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:E})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:" form-label"},"Merchant Name :"),o.a.createElement("input",{className:"form-control",id:"inputPassword4",value:h})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Email Address :"),o.a.createElement("input",{className:"form-control",id:"inputPassword4",value:v})),o.a.createElement("div",{class:"col-md-12"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Initial Shop :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:N}))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",{className:"row g-3 form-sample"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"First Name:"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:y})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Email :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:v})),o.a.createElement("div",{class:"col-md-4"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Year of Birth :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:g})),o.a.createElement("div",{class:"col-md-4"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Month Of Birth :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:x})),o.a.createElement("div",{class:"col-md-4"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Day Of Birth :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:O})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Contact Number :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:b})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Address :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:I}))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",{className:"row g-3 form-sample"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Provience :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:w})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Sub Division :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:F})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"District :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:k})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Mobile no :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:b}))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",{className:"row g-3 form-sample"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Web Site :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:C})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Linked in :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:B})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Facebok :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:U})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Instagram :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:P})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Other :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:j}))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",{className:"row g-3 form-sample"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Copy Of Id Card (Up to 5mb):"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4"})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Book Bank :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4"})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Company :"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:_})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label text-primary"},"Bank Account :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:D})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Domestic :"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:A})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Rate Of QR Code :"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:R}))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",{className:"row g-3 form-sample"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Logo :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:L})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Other document: :"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4"})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Bank :"),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:M})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Rnf Code :"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:S})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Inter :"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4",value:T})),o.a.createElement("div",{class:"col-md-6"},o.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Rate Of Bar Code :"," "),o.a.createElement("input",{className:"form-control",id:"inputEmail4"}))))),o.a.createElement("br",null),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{type:"button",className:"btn btn-success w-100 btn-lg rounded-pill"}," ","Finish"," ")))))}}}]);
//# sourceMappingURL=17.1baf1c26.chunk.js.map