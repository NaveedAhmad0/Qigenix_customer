(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[20],{173:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t},i=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var l=c(a(0)),s=a(174),u=(0,a(175).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,a=void 0===t||t,n=e.color,o=void 0===n?"#000000":n,c=e.speedMultiplier,m=void 0===c?1:c,d=e.cssOverride,p=void 0===d?{}:d,f=e.size,v=void 0===f?35:f,h=i(e,["loading","color","speedMultiplier","cssOverride","size"]),b=r({background:"transparent !important",width:(0,s.cssValue)(v),height:(0,s.cssValue)(v),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(u," ").concat(.75/m,"s 0s infinite linear"),animationFillMode:"both"},p);return a?l.createElement("span",r({style:b},h)):null}},174:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}},175:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var r="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return r;var n=document.createElement("style");document.head.appendChild(n);var o=n.sheet,c="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(c,0),r}},689:function(e,t,a){e.exports={userHeading:"adminprofile_userHeading__3J3T5",usercardbody:"adminprofile_usercardbody__3NiTz",userLabel:"adminprofile_userLabel__bYYNi",userInputs:"adminprofile_userInputs__2JCWa",userBtn:"adminprofile_userBtn__7BJgp"}},837:function(e,t,a){"use strict";a.r(t);var r=a(68),n=a(71),o=a(9),c=a(32),i=a.n(c),l=a(0),s=a.n(l),u=a(173),m=a.n(u),d=a(689),p=a.n(d);function f(){f=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(L){i=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),c=new x(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return _()}for(a.method=n,a.arg=o;;){var c=a.delegate;if(c){var i=N(c,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=s(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}(e,a,c),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var u={};function m(){}function d(){}function p(){}var v={};i(v,n,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(j([])));b&&b!==t&&a.call(b,n)&&(v=b);var g=p.prototype=m.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(n,o){function c(){return new t((function(r,c){!function r(n,o,c,i){var l=s(e[n],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,i)}))}i(l.arg)}(n,o,r,c)}))}return r=r?r.then(c,c):c()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=p,i(g,"constructor",p),i(p,"constructor",d),d.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var c=new E(l(t,a,r,n),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(g),i(g,c,"Generator"),i(g,n,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e=Object(l.useState)([{userName:"",email:"",surName:"",mobile:0,address:"",province:"",district:"",subdistrict:"",pincode:""}]),t=Object(o.a)(e,2),a=t[0],c=t[1],u=Object(l.useState)(!1),d=Object(o.a)(u,2),v=d[0],h=d[1],b=Object(l.useState)(!0),g=Object(o.a)(b,2),y=g[0],E=g[1],N=a;function w(){var e=a,t=!1;return console.log("AKSHDKJHSDKJHAKSHDK",Object.keys(e).length),Object.values(e).every((function(e){return null!==e}))&&Object.values(e).every((function(e){return""!==e}))&&(t=!0),t}var O=localStorage.getItem("email");function x(){return(x=Object(n.a)(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!w()){e.next=16;break}return e.prev=2,e.next=5,i.a.patch("https://backend.klivepay.com/api/admin/update-profile?email=".concat(O),JSON.stringify({userName:a.userName,surName:a.surName,mobile:parseInt(a.mobile),address:a.address,province:a.province,subdistrict:a.subdistrict,district:a.district,pincode:a.pincode}),{headers:{"Content-Type":"application/json"}}).then((function(e){201===e.code&&alert(e.data.message)}));case 5:r=e.sent,h(!0),console.log(JSON.stringify(null===r||void 0===r?void 0:r.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),alert(e.t0.message);case 14:e.next=17;break;case 16:alert("Form has errors.");case 17:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){i.a.get("https://backend.klivepay.com/api/admin/get-profile?email=".concat(O)).then((function(e){c({userName:e.data.admin.name,mobile:e.data.admin.mobile,email:e.data.admin.email,surName:e.data.admin.surName,address:e.data.admin.address,province:e.data.admin.province,district:e.data.admin.district,subdistrict:e.data.admin.subdistrict,pincode:e.data.admin.pincode}),E(!1),setTimeout((function(){E(!1)}),3e3),console.log("DATA IS ",e.data.admin)}))}),[]),Object(l.useEffect)((function(){v&&alert("Profile changed Succesfully!")}),[v]),s.a.createElement("div",{className:"col-12 grid-margin"},s.a.createElement("h4",{className:"card-title"},"user Personal Information"),y?s.a.createElement("div",{className:"row",style:{height:"500px"}},s.a.createElement("div",{className:"col-12 text-center my-auto"},s.a.createElement(m.a,{color:"#136be0",size:100,speedMultiplier:1}))):s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body ".concat(p.a.usercardbody)},s.a.createElement("h4",{className:"text-center ".concat(p.a.userHeading)},"Profile"),s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},s.a.createElement("form",{className:"needs-validation",novalidate:!0},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:p.a.userLabel},"first name"),s.a.createElement("input",{type:"year",name:"userName",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{userName:e.target.value}))},value:a.userName,className:"form-control ".concat(p.a.userInputs)}),null==N.userName||""==N.userName?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),s.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:p.a.userLabel},"sur name"),s.a.createElement("input",{type:"text",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{surName:e.target.value}))},value:a.surName,className:"form-control ".concat(p.a.userInputs)}),null==N.surName||""==N.surName?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:p.a.userLabel},"Email address"),s.a.createElement("input",{type:"email",disabled:!0,className:"form-control ".concat(p.a.userInputs),onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{email:e.target.value}))},value:a.email}),null==N.email||""==N.email?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""))),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{className:p.a.userLabel},"contact number"),s.a.createElement("input",{type:"number",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{mobile:parseInt(e.target.value)}))},value:a.mobile,className:"form-control ".concat(p.a.userInputs)}),null==N.mobile||""==N.mobile?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{className:p.a.userLabel},"address"),s.a.createElement("input",{type:"text",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{address:e.target.value}))},value:a.address,className:"form-control ".concat(p.a.userInputs)}),null==N.address||""==N.address?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"row"},s.a.createElement("form",{className:"d-flex justify-content-between"},s.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"form-group "},s.a.createElement("label",{className:p.a.userLabel},"provience"),s.a.createElement("input",{type:"email",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{province:e.target.value}))},value:a.province,className:"form-control ".concat(p.a.userInputs)}),null==N.province||""==N.province?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")),s.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"form-group "},s.a.createElement("label",{className:p.a.userLabel},"Sub District"),s.a.createElement("input",{type:"text",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{subdistrict:e.target.value}))},value:a.subdistrict,className:"form-control ".concat(p.a.userInputs)}),null==N.subdistrict||""==N.subdistrict?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),s.a.createElement("div",{className:"row"},s.a.createElement("form",{className:"d-flex"},s.a.createElement("div",{className:"form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},s.a.createElement("label",{className:p.a.userLabel},"district"),s.a.createElement("input",{type:"text",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{district:e.target.value}))},value:a.district,className:"form-control ".concat(p.a.userInputs)}),null==N.district||""==N.district?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):""),s.a.createElement("div",{className:"form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},s.a.createElement("label",{className:p.a.userLabel},"pincode"),s.a.createElement("input",{type:"number",onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{pincode:e.target.value}))},value:a.pincode,className:"form-control ".concat(p.a.userInputs),placeholder:"123456"}),null==N.pincode||""==N.pincode?s.a.createElement("span",{className:"text-danger"},"Field can't be empty"):"")))),s.a.createElement("button",{type:"button",disabled:!(!Object.values(N).every((function(e){return null===e}))||!Object.values(N).every((function(e){return""===e}))),onClick:function(e){return function(e){return x.apply(this,arguments)}(e)},className:"btn ".concat(p.a.userBtn)},"Finish"))))}}}]);
//# sourceMappingURL=20.4b923421.chunk.js.map