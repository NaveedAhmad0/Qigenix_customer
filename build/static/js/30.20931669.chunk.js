(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[30],{658:function(t,e,r){},823:function(t,e,r){"use strict";r.r(e);var n=r(65),o=r(10),a=r(0),i=r.n(a),c=(r(658),r(181),r(659),r(184),r(28)),s=r.n(c),l=r(40);function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var m={};c(m,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,o)&&(m=y);var g=p.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}e.default=function(){var t=localStorage.getItem("customerId"),e=localStorage.getItem("token"),r=Object(a.useState)(0),c=Object(o.a)(r,2),f=c[0],h=c[1],d=Object(a.useState)(""),p=Object(o.a)(d,2),m=p[0],v=p[1],y=Object(a.useState)(""),g=Object(o.a)(y,2),w=g[0],b=g[1],x=function(){var r=Object(n.a)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{n={method:"get",url:"".concat(l.a,"/users/getScan/").concat(t),headers:{"Content-Type":"application/json",Authorization:"".concat(e)}},s()(n).then((function(t){h(t.data.count)})).catch((function(t){console.log(t)}))}catch(o){console.log(o)}case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),E=function(){var r=Object(n.a)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{n={method:"get",url:"".concat(l.a,"/users/getAssignedDevice/").concat(t),headers:{"Content-Type":"application/json",Authorization:"".concat(e)}},s()(n).then((function(t){b(t.data.device.device_id),v("1"===t.data.device.status?"Active":"Not Active")})).catch((function(t){console.log(t)}))}catch(o){console.log(o)}case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(a.useEffect)((function(){x(),E()}),[]),i.a.createElement("div",{className:"adminDashboard"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section"},i.a.createElement("div",{className:"top_stats_wrapper",style:{background:"#d7eaff",borderRight:"5px solid #2196f3"}},i.a.createElement("div",{className:"d-flex justify-content-between mt-2"},i.a.createElement("div",null,i.a.createElement("h4",{className:"text-primary"},"Number Of Invoices"),i.a.createElement("h5",{style:{color:"black"}},f)),i.a.createElement("p",{className:"text-white py-2 px-3 bg-primary",style:{fontSize:"28px",borderRadius:"10px"}},i.a.createElement("i",{class:"fa-solid fa-receipt"}))))),i.a.createElement("div",{className:" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section"},i.a.createElement("div",{className:"top_stats_wrapper",style:{background:"#d4ffd4d4",borderRight:"5px solid #19d895"}},i.a.createElement("div",{className:"d-flex justify-content-between mt-2"},i.a.createElement("div",null,i.a.createElement("h4",{className:"text-success"},"Device Status"),i.a.createElement("h5",{style:{color:"Active"===m?"black":"red"}},m)),i.a.createElement("p",{className:"text-white py-2 px-3 bg-success",style:{fontSize:"28px",borderRadius:"10px"}},i.a.createElement("i",{class:"fa-solid fa-chart-simple"}))))),i.a.createElement("div",{className:" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section"},i.a.createElement("div",{className:"top_stats_wrapper",style:{background:"#ffdfdd99",borderRight:"5px solid #ff6258"}},i.a.createElement("div",{className:"d-flex justify-content-between mt-2"},i.a.createElement("div",null,i.a.createElement("h4",{className:"text-danger"},"Device ID"),i.a.createElement("h5",{style:{color:"black"}},w)),i.a.createElement("p",{className:"text-white py-2 px-3 bg-danger",style:{fontSize:"28px",borderRadius:"10px"}},i.a.createElement("i",{class:"fa-solid fa-mobile-screen-button"}))))))))}}}]);
//# sourceMappingURL=30.20931669.chunk.js.map