(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[36],{668:function(e,t,r){},839:function(e,t,r){"use strict";r.r(t);var n=r(66),a=r(10),o=r(0),i=r.n(o),c=(r(668),r(186),r(669),r(193),r(105)),l=r(864),s=r(840),u=r(183),d=r(6),f=r(28),h=r.n(f),m=r(40);r(670);function p(){p=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var u={};function d(){}function f(){}function h(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&r.call(y,a)&&(m=y);var g=h.prototype=d.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=h,c(g,"constructor",h),c(h,"constructor",f),f.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,r,f=Object(d.useHistory)(),v=localStorage.getItem("customerId"),y=localStorage.getItem("token"),g=Object(d.useLocation)(),w=Object(o.useState)(0),b=Object(a.a)(w,2),E=b[0],x=b[1],N=Object(o.useState)(""),j=Object(a.a)(N,2),L=j[0],k=j[1],O=Object(o.useState)(""),_=Object(a.a)(O,2),S=_[0],A=_[1],D=Object(o.useState)(),G=Object(a.a)(D,2),I=G[0],T=G[1],R=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.details,z=function(){var e=Object(n.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==R&&("0"!==R.device.status&&"Not Assigned"!==R.device||T(!0)),console.log(R);try{t={method:"get",url:"".concat(m.a,"/users/getScan/").concat(v),headers:{"Content-Type":"application/json",Authorization:"".concat(y)}},h()(t).then((function(e){x(e.data.count)})).catch((function(e){console.log(e)}))}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(n.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t={method:"get",url:"".concat(m.a,"/users/getAssignedDevice/").concat(v),headers:{"Content-Type":"application/json",Authorization:"".concat(y)}},h()(t).then((function(e){A(e.data.device.device_id),k("1"===e.data.device.status?"Active":"Not Active")})).catch((function(e){console.log(e)}))}catch(r){console.log(r)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){z(),F()}),[]),i.a.createElement("div",{className:"adminDashboard"},i.a.createElement(c.a,{variant:"primary",style:{display:"none"},onClick:function(){return T(!0)}}),i.a.createElement(l.a,{show:I,onHide:function(){return T(!0)},dialogClassName:"modal-90w","aria-labelledby":"contained-modal-title-vcenter"},i.a.createElement(l.a.Header,{className:"bg-dark text-secondary"},i.a.createElement(l.a.Title,{className:" text-center m-auto"},"0"===(null===R||void 0===R||null===(t=R.device)||void 0===t?void 0:t.status)&&"* Device Not Active"," \xa0 \xa0","Not Assigned"===(null===R||void 0===R?void 0:R.device)&&"*Device Not Assigned")),i.a.createElement(l.a.Body,null,i.a.createElement(s.a,{className:"text-center justify-content-center"},i.a.createElement(u.a,null,i.a.createElement("p",{className:" text-center m-auto p-3 bg-secondary",style:{width:"17%",borderRadius:"50%"}},i.a.createElement("i",{class:"fa-solid fa-triangle-exclamation text-warning ",style:{fontSize:"45px"}})),i.a.createElement("h6",{className:"mt-4 text-dark  p-2"},"0"===(null===R||void 0===R||null===(r=R.device)||void 0===r?void 0:r.status)&&"Your Device is not active. Kindly request admin to active your device"),i.a.createElement("h6",{className:"text-dark  p-2"},"Not Assigned"===(null===R||void 0===R?void 0:R.device)&&"You do not have any assigned device. Kindly request admin to assign ")))),i.a.createElement(l.a.Footer,{className:"bg-dark text-center"},i.a.createElement(s.a,{className:"text-center justify-content-center"},i.a.createElement(u.a,null,i.a.createElement("button",{className:"btn btn-secondary text-dark",onClick:function(){f.push("/users/login"),localStorage.clear()}},"Logout"))))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section"},i.a.createElement("div",{className:"top_stats_wrapper",style:{background:"#d7eaff",borderRight:"5px solid #2196f3"}},i.a.createElement("div",{className:"d-flex justify-content-between mt-2"},i.a.createElement("div",null,i.a.createElement("h4",{className:"text-primary"},"Number Of Invoices"),i.a.createElement("h5",{style:{color:"black"}},E)),i.a.createElement("p",{className:"text-white py-2 px-3 bg-primary",style:{fontSize:"28px",borderRadius:"10px"}},i.a.createElement("i",{class:"fa-solid fa-receipt"}))))),i.a.createElement("div",{className:" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section"},i.a.createElement("div",{className:"top_stats_wrapper",style:{background:"#d4ffd4d4",borderRight:"5px solid #19d895"}},i.a.createElement("div",{className:"d-flex justify-content-between mt-2"},i.a.createElement("div",null,i.a.createElement("h4",{className:"text-success"},"Device Status"),i.a.createElement("h5",{style:{color:"Active"===L?"black":"red"}},L)),i.a.createElement("p",{className:"text-white py-2 px-3 bg-success",style:{fontSize:"28px",borderRadius:"10px"}},i.a.createElement("i",{class:"fa-solid fa-chart-simple"}))))),i.a.createElement("div",{className:" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section"},i.a.createElement("div",{className:"top_stats_wrapper",style:{background:"#ffdfdd99",borderRight:"5px solid #ff6258"}},i.a.createElement("div",{className:"d-flex justify-content-between mt-2"},i.a.createElement("div",null,i.a.createElement("h4",{className:"text-danger"},"Device ID"),i.a.createElement("h5",{style:{color:"black"}},S)),i.a.createElement("p",{className:"text-white py-2 px-3 bg-danger",style:{fontSize:"28px",borderRadius:"10px"}},i.a.createElement("i",{class:"fa-solid fa-mobile-screen-button"}))))))))}}}]);
//# sourceMappingURL=36.28943bec.chunk.js.map