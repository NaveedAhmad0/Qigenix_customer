(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[13],{186:function(e,t,n){},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&!(e instanceof Array)}))},c=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},l=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(o(e),o(t)))}),[]))},u=t.jsons2arrays=function(e,t){var n=t=t||l(e),r=t;i(t)&&(n=t.map((function(e){return e.label})),r=t.map((function(e){return e.key})));var a=e.map((function(e){return r.map((function(t){return s(t,e)}))}));return[n].concat(o(a))},s=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var o=e[t];if(void 0!==o&&null!==o)return o;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},f=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},d=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return f(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,n,r){return d(t?[t].concat(o(e)):e,n,r)},h=t.jsons2csv=function(e,t,n,r){return d(u(e,t),n,r)},m=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},y=t.toCSV=function(e,t,n,r){if(i(e))return h(e,t,n,r);if(c(e))return p(e,t,n,r);if("string"===typeof e)return m(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,o){var i=y(e,n,r,o),c=a()?"application/csv":"text/csv",l=new Blob([t?"\ufeff":"",i],{type:c}),u="data:"+c+";charset=utf-8,"+(t?"\ufeff":"")+i,s=window.URL||window.webkitURL;return"undefined"===typeof s.createObjectURL?u:s.createObjectURL(l)}},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,o=n(0),a=((r=o)&&r.__esModule,n(2));t.propTypes={data:(0,a.oneOfType)([a.string,a.array,a.func]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool,enclosingCharacter:a.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]},241:function(e,t,n){e.exports=n(242)},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var r=a(n(243)),o=a(n(244));function a(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,t.CSVLink=o.default},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(212),l=n(213);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,i=e.target,c=e.specs,l=e.replace;this.state.page=window.open(this.buildURI(t,a,n,r,o),i,c,l)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);u.defaultProps=Object.assign(l.defaultProps,{target:"_blank"}),u.propTypes=l.propTypes,t.default=u},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=(r=i)&&r.__esModule?r:{default:r},l=n(212),u=n(213);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,o=n.headers,a=n.separator,i=n.filename,c=n.enclosingCharacter,u=n.uFEFF,s=t&&"function"===typeof r?r():r,f=new Blob([u?"\ufeff":"",(0,l.toCSV)(s,o,a,c)]);return window.navigator.msSaveBlob(f,i),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,a=t.separator,i=t.filename,l=t.uFEFF,u=t.children,s=(t.onClick,t.asyncOnClick,t.enclosingCharacter),f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),d="undefined"===typeof window?"":this.buildURI(n,l,r,a,s);return c.default.createElement("a",o({download:i},f,{ref:function(t){return e.link=t},target:"_self",href:d,onClick:this.handleClick()}),u)}}]),t}(c.default.Component);s.defaultProps=u.defaultProps,s.propTypes=u.propTypes,t.default=s},738:function(e,t,n){},860:function(e,t,n){"use strict";n.r(t);var r=n(66),o=n(10),a=n(28),i=n.n(a),c=n(0),l=n.n(c),u=(n(186),n(182)),s=n.n(u),f=n(216),d=n.n(f),p=n(241),h=n(111),m=n.n(h),y=n(315),v=n.n(y),g=n(6),b=n(40);n(738);function E(){E=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var s={};function f(){}function d(){}function p(){}var h={};c(h,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(_([])));y&&y!==t&&n.call(y,o)&&(h=y);var v=p.prototype=f.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(o,a){function i(){return new t((function(r,i){!function r(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,c(v,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),c(v,i,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],u=n[1],f=Object(c.useState)(),h=Object(o.a)(f,2),y=h[0],w=h[1],O=l.a.createRef(),x=Object(c.useState)(""),j=Object(o.a)(x,2),_=j[0],k=j[1],S=Object(c.useState)([]),C=Object(o.a)(S,2),N=C[0],L=C[1],P=Object(c.useState)(!1),R=Object(o.a)(P,2),D=R[0],A=(R[1],Object(c.useState)(!1)),F=Object(o.a)(A,2),T=F[0],I=F[1],M=localStorage.getItem("customerId"),U=localStorage.getItem("token"),H=(Object(g.useHistory)(),function(){var e=Object(r.a)(E().mark((function e(){var t;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t={method:"get",url:"".concat(b.a,"/users/getScan/").concat(M),headers:{"Content-Type":"application/json",Authorization:"".concat(U)}},i()(t).then((function(e){u(e.data.totalResponse),console.log(e.data.totalResponse),L(e.data.totalResponse)})).catch((function(e){console.log(e.response.data.totalResponse)}))}catch(n){console.log(n.response.data.totalResponse)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(c.useEffect)((function(){H()}),[]),Object(c.useEffect)((function(){}),[a]),Object(c.useEffect)((function(){var e=null===a||void 0===a?void 0:a.filter((function(e){return e.scan_id.toLowerCase().match(_.toLowerCase())}));L(e)}),[_]);var z=[{name:"Scan Id",selector:"scan_id",sortable:!1,style:{color:"#4E7AED"}},{name:"Customer Id",selector:"customer_id",sortable:!0,style:{color:"#4E7AED"}},{name:"Device Id",selector:"device_id",sortable:!1,style:{color:"#4E7AED"}},{name:"Tax",selector:"tax",sortable:!1,style:{color:"#4E7AED"}},{name:"Description",selector:"description",sortable:!1,style:{color:"#4E7AED"}},{name:"Product",style:{fontSize:"18px"},cell:function(e){return[l.a.createElement("p",{onClick:function(){I(!T),w(e)},class:"badge bg-warning",style:{cursor:"pointer"}},e.products.length)]}}];return l.a.createElement("div",null,D?l.a.createElement("div",{className:"row",style:{height:"500px"}},l.a.createElement("div",{className:"col-12 text-center my-auto"},l.a.createElement(s.a,{color:"#136be0",size:100,speedMultiplier:1}))):l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,"List Of Invoices"),l.a.createElement("div",{className:T?"col-md-12":"col-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row page-title-header"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{class:"btn-group btn-group-toggle","data-toggle":"buttons"},l.a.createElement("label",{class:"btn active",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px"}},l.a.createElement("input",{type:"radio",name:"options",id:"option1",autocomplete:"off",checked:!0})," ",l.a.createElement(p.CSVLink,{data:a},"Export")),l.a.createElement("label",{class:"btn",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px"}},l.a.createElement("input",{type:"radio",name:"options",id:"option3",autocomplete:"off"}),l.a.createElement("i",{class:"fa-solid fa-rotate"}))),l.a.createElement("div",{class:"btn-group btn-group-toggle me-4","data-toggle":"buttons",style:{float:"right"}},l.a.createElement("label",{class:"btn active",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontSize:"12px",lineHeight:"14px"}},l.a.createElement("i",{class:"fa-solid fa-magnifying-glass"})),l.a.createElement("input",{type:"text",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px",border:"none",width:"100%",textAlign:"center"},placeholder:"Search...",value:_,onChange:function(e){k(e.target.value)}})))),l.a.createElement(d.a,{columns:z,data:N,pagination:20,highlightOnHover:!0,subHeader:!0,customStyles:{headCells:{style:{borderRight:"0.1rem solid #D9D9D9 !important",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px"}},row:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px"}}})))))),l.a.createElement("div",{className:T?"col-12":"invoiceDisplay"},l.a.createElement("div",{className:"card",ref:O},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"col-12 grid-margin"},l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h5",{className:"text-primary"},"Scan Id :"),l.a.createElement("p",null,null===y||void 0===y?void 0:y.scan_id)),l.a.createElement("div",{className:"col-6 text-right"},l.a.createElement("p",{className:"font-weight-bold"},"Bill To :",l.a.createElement("p",{className:"text-primary"},null===y||void 0===y?void 0:y.customer_id)),l.a.createElement("p",{className:"font-weight-bold"},"Name :",l.a.createElement("span",{className:"font-weight-normal"}," ",null===y||void 0===y?void 0:y.firstName," ",null===y||void 0===y?void 0:y.lastName)))),l.a.createElement("div",{className:"row"},l.a.createElement("table",{class:"table table-responsive"},l.a.createElement("thead",{className:"bg-dark text-white"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#Product Id"),l.a.createElement("th",{scope:"col"},"Product Name"),l.a.createElement("th",{scope:"col"},"QR Code"),l.a.createElement("th",{scope:"col"},"Quantity"),l.a.createElement("th",{scope:"col"},"Price"),l.a.createElement("th",null,"Quantity Price"),l.a.createElement("th",{scope:"col"},"Created At"))),l.a.createElement("tbody",null,null===y||void 0===y||null===(e=y.products)||void 0===e?void 0:e.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.product_id),l.a.createElement("td",null,e.product_name),l.a.createElement("td",null,e.qr_code),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.quantityPrice),l.a.createElement("td",null,m()(e.createdAt).local().format("DD-MM-YYYY hh:mm:ss ")))})),l.a.createElement("tr",null,l.a.createElement("th",{className:"pt-5"},"Tax :"),l.a.createElement("td",{className:"pt-5"},null===y||void 0===y?void 0:y.tax)),l.a.createElement("tr",null,l.a.createElement("th",null,"Total Price"),l.a.createElement("td",null,null===y||void 0===y?void 0:y.total_amount)),l.a.createElement("tr",null,l.a.createElement("th",null,"Total Amount With Tax"),l.a.createElement("td",null,null===y||void 0===y?void 0:y.amountWithTax)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 "},l.a.createElement(v.a,{targetRef:O,filename:"invoice.pdf"},(function(e){var t=e.toPdf;return l.a.createElement("button",{className:"btn btn-success mt-4",onClick:t},"Generate Pdf")}))))))))))))}}}]);
//# sourceMappingURL=13.b43aea5b.chunk.js.map