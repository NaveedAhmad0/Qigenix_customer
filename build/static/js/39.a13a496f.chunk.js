(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[39],{700:function(e,t,r){},857:function(e,t,r){"use strict";r.r(t);var a=r(66),n=r(10),o=r(28),i=r.n(o),l=r(0),c=r.n(l),s=(r(186),r(197),r(198),r(193)),m=r(182),u=r.n(m),f=r(216),p=r.n(f),h=r(111),d=r.n(h),g=(r(40),r(700),r(74));function y(){y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(D){l=function(e,t,r){return e[t]=r}}function c(e,t,r,a){var n=t&&t.prototype instanceof u?t:u,o=Object.create(n.prototype),i=new L(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return k()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=s(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(D){return{type:"throw",arg:D}}}e.wrap=c;var m={};function u(){}function f(){}function p(){}var h={};l(h,n,(function(){return this}));var d=Object.getPrototypeOf,g=d&&d(d(S([])));g&&g!==t&&r.call(g,n)&&(h=g);var v=p.prototype=u.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(n,o){function i(){return new t((function(a,i){!function a(n,o,i,l){var c=s(e[n],e,o);if("throw"!==c.type){var m=c.arg,u=m.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(u).then((function(e){m.value=e,i(m)}),(function(e){return a("throw",e,i,l)}))}l(c.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=p,l(v,"constructor",p),l(p,"constructor",f),f.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new b(c(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(v),l(v,i,"Generator"),l(v,n,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){s.CSVExport.ExportCSVButton;var e=Object(l.useState)(),t=Object(n.a)(e,2),r=t[0],o=t[1],m=Object(l.useState)(""),f=Object(n.a)(m,2),h=f[0],v=f[1],E=Object(l.useState)([]),b=Object(n.a)(E,2),x=b[0],w=b[1],N=Object(l.useState)(!1),L=Object(n.a)(N,2),S=L[0],k=(L[1],localStorage.getItem("token")),D=function(){var e=Object(a.a)(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t={method:"get",url:"https://qigenix.ixiono.com/apis/admin/getAllCustomer",headers:{"Content-Type":"application/json",Authorization:"".concat(k)}},i()(t).then((function(e){o(e.data),w(e.data)})).catch((function(e){console.log(e.response.data)}))}catch(r){console.log(r.response.data)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){D()}),[]),Object(l.useEffect)((function(){}),[r]),Object(l.useEffect)((function(){var e=null===r||void 0===r?void 0:r.filter((function(e){return e.company.toLowerCase().match(h.toLowerCase())}));w(e)}),[h]);var O=[{name:"#",selector:"id",sortable:!1,style:{color:"#4E7AED"}},{name:"Company",selector:"company",sortable:!0,style:{color:"#4E7AED"}},{name:"Primary Contact",selector:"mobile",sortable:!1,style:{color:"#4E7AED"}},{name:"Primary Email",selector:"website",sortable:!1,style:{color:"#4E7AED"}},{name:"Phone",selector:"mobile",sortable:!1,style:{color:"#4E7AED"}},{name:"Groups",cell:function(e){return[c.a.createElement("button",{className:"btn",style:{background:"#FFFFFF",border:"1px solid #EFEFEF",color:"#515151"}},e.groups)]},sortable:!1},{name:"Date Created",sortable:!1,cell:function(e){return d()(e.createdAt).local().format("DD-MM-YYYY hh:mm:ss ")}}];return c.a.createElement("div",null,S?c.a.createElement("div",{className:"row",style:{height:"500px"}},c.a.createElement("div",{className:"col-12 text-center my-auto"},c.a.createElement(u.a,{color:"#136be0",size:100,speedMultiplier:1}))):c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 grid-margin"},c.a.createElement("div",{className:"row page-title-header"},c.a.createElement("div",{className:"col-12"},c.a.createElement(g.Link,{to:"/admin/addCustomer"},c.a.createElement("button",{className:"btn btn-primary mr-2"},c.a.createElement("i",{class:"fa-solid fa-plus"})," New Customer")),c.a.createElement("button",{className:"btn btn-primary mr-2"},c.a.createElement("i",{class:"fa-solid fa-upload"})," Import Customers"),c.a.createElement("button",{className:"btn btn-outline-secondary mr-2"},c.a.createElement("i",{class:"fa-regular fa-user"})," Contacts"))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row page-title-header"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h4",null,c.a.createElement("i",{class:"fa-regular fa-file-lines me-2"})," ","Customers summary"))),c.a.createElement("div",{className:"row page-title-header"},c.a.createElement("div",{className:"col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin"},c.a.createElement("p",null,c.a.createElement("span",{className:"text-black"},"15 "),"Import Customers")),c.a.createElement("div",{className:"col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin"},c.a.createElement("p",{className:"text-success"}," ",c.a.createElement("span",{className:"text-black"},"15 ")," Active Customers")),c.a.createElement("div",{className:"col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin"},c.a.createElement("p",{className:"text-danger"},c.a.createElement("span",{className:"text-black"},"15 "),"Inactive Customers")),c.a.createElement("div",{className:"col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin"},c.a.createElement("p",{className:"text-primary"},c.a.createElement("span",{className:"text-black"},"15 "),"Active Contacts")),c.a.createElement("div",{className:"col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin"},c.a.createElement("p",{className:"text-danger"},c.a.createElement("span",{className:"text-black"},"15 "),"Inactive Customers")),c.a.createElement("div",{className:"col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin"},c.a.createElement("p",null,c.a.createElement("span",{className:"text-black"},"15 "),"Contacts Logged.."))),c.a.createElement("hr",{style:{border:"1px #EAEDF1"}}),c.a.createElement("div",{className:"row page-title-header"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label text-muted"},c.a.createElement("input",{type:"checkbox",className:"form-check-input"}),c.a.createElement("i",{className:"input-helper"}),"Exclude Inactive Customers")),c.a.createElement("div",{class:"btn-group btn-group-toggle","data-toggle":"buttons"},c.a.createElement("label",{class:"btn active",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px"}},c.a.createElement("input",{type:"radio",name:"options",id:"option1",autocomplete:"off",checked:!0})," ","Export"),c.a.createElement("label",{class:"btn",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px"}},c.a.createElement("input",{type:"radio",name:"options",id:"option2",autocomplete:"off"})," ","Bulk Actions"),c.a.createElement("label",{class:"btn",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px"}},c.a.createElement("input",{type:"radio",name:"options",id:"option3",autocomplete:"off"}),c.a.createElement("i",{class:"fa-solid fa-rotate"}))),c.a.createElement("div",{class:"btn-group btn-group-toggle me-4","data-toggle":"buttons",style:{float:"right"}},c.a.createElement("label",{class:"btn active",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontSize:"12px",lineHeight:"14px"}},c.a.createElement("i",{class:"fa-solid fa-magnifying-glass"})),c.a.createElement("input",{type:"text",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px",border:"none",width:"100%",textAlign:"center"},placeholder:"Search...",value:h,onChange:function(e){v(e.target.value)}})))),c.a.createElement(p.a,{columns:O,data:x,pagination:20,selectableRows:!0,highlightOnHover:!0,subHeader:!0,customStyles:{headCells:{style:{borderRight:"0.1rem solid #D9D9D9 !important",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px"}},row:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px"}},paginationComponentOptions:{rowsPerPageText:"Showing 1 to 6 of 12 entries:"}})))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"row"})))))}}}]);
//# sourceMappingURL=39.a13a496f.chunk.js.map