(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[22],{398:function(e,t,r){e.exports={registerHeading:"registration_registerHeading__3ktsP",registercardbody:"registration_registercardbody__PVuH9",registerLabel:"registration_registerLabel__36-H8",registerInputs:"registration_registerInputs__2JwPC",registerBtn:"registration_registerBtn__30AC3","pwd-icon":"registration_pwd-icon__3rVO1"}},704:function(e,t,r){},858:function(e,t,r){"use strict";r.r(t);var a=r(66),n=r(10),o=r(0),c=r.n(o),i=r(828),s=r(398),l=r.n(s),u=r(9),m=r(28),f=r.n(m),d=r(394),p=(r(704),r(222)),h=r.n(p),g=r(113),v=r(77);r(40);function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(S){i=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),c=new j(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return L()}for(r.method=n,r.arg=o;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var s=l(e,t,r);if("normal"===s.type){if(a=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a="completed",r.method="throw",r.arg=s.arg)}}}(e,r,c),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var u={};function m(){}function f(){}function d(){}var p={};i(p,n,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(x([])));g&&g!==t&&r.call(g,n)&&(p=g);var v=d.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;this._invoke=function(n,o){function c(){return new t((function(a,c){!function a(n,o,c,i){var s=l(e[n],e,o);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,c,i)}),(function(e){a("throw",e,c,i)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return a("throw",e,c,i)}))}i(s.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=l(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=d,i(v,"constructor",d),i(d,"constructor",f),f.displayName=i(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var c=new E(s(t,r,a,n),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(v),i(v,c,"Generator"),i(v,n,(function(){return this})),i(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return c.type="throw",c.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var y=/^[A-z][A-z0-9-_]{3,23}$/,E=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,w=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,N=/^[0-9]{8,}$/;t.default=function(){var e=Object(o.useRef)(),t=Object(o.useRef)(),r=Object(o.useRef)(),s=Object(o.useState)(""),m=Object(n.a)(s,2),p=m[0],O=m[1],j=Object(o.useState)(!1),x=Object(n.a)(j,2),L=x[0],S=x[1],_=Object(o.useState)(!1),k=Object(n.a)(_,2),F=k[0],P=k[1],A=Object(o.useState)(""),C=Object(n.a)(A,2),I=C[0],G=C[1],$=Object(o.useState)(!1),T=Object(n.a)($,2),B=T[0],M=T[1],q=Object(o.useState)(!1),J=Object(n.a)(q,2),R=J[0],U=J[1],z=Object(o.useState)(""),H=Object(n.a)(z,2),Z=H[0],K=H[1],V=Object(o.useState)(!1),Y=Object(n.a)(V,2),D=Y[0],Q=Y[1],W=Object(o.useState)(!1),X=Object(n.a)(W,2),ee=X[0],te=X[1],re=Object(o.useState)(""),ae=Object(n.a)(re,2),ne=ae[0],oe=ae[1],ce=Object(o.useState)(!1),ie=Object(n.a)(ce,2),se=ie[0],le=ie[1],ue=Object(o.useState)(!1),me=Object(n.a)(ue,2),fe=me[0],de=me[1],pe=Object(o.useState)(""),he=Object(n.a)(pe,2),ge=he[0],ve=he[1],be=Object(o.useState)(!1),ye=Object(n.a)(be,2),Ee=ye[0],we=ye[1],Ne=Object(o.useState)(!1),Oe=Object(n.a)(Ne,2),je=Oe[0],xe=Oe[1],Le=Object(o.useState)(!1),Se=Object(n.a)(Le,2),_e=(Se[0],Se[1],Object(o.useState)(!1)),ke=Object(n.a)(_e,2),Fe=(ke[0],ke[1],Object(o.useState)(!1)),Pe=Object(n.a)(Fe,2),Ae=(Pe[0],Pe[1],Object(o.useState)("")),Ce=Object(n.a)(Ae,2),Ie=Ce[0],Ge=Ce[1],$e=Object(o.useState)(!1),Te=Object(n.a)($e,2),Be=Te[0],Me=Te[1],qe=Object(o.useState)(!1),Je=Object(n.a)(qe,2),Re=Je[0],Ue=(Je[1],Object(o.useState)(!1)),ze=Object(n.a)(Ue,2),He=ze[0],Ze=(ze[1],Object(o.useState)(!1)),Ke=Object(n.a)(Ze,2),Ve=Ke[0],Ye=Ke[1];Object(o.useEffect)((function(){e.current.focus()}),[]),Object(o.useEffect)((function(){var e=y.test(p);console.log(e),console.log(p),S(e)}),[p]),Object(o.useEffect)((function(){var e=w.test(Z);console.log(e),console.log(Z),Q(e)}),[Z]),Object(o.useEffect)((function(){var e=N.test(I);console.log(e),console.log(I),M(e)}),[I]),Object(o.useEffect)((function(){var e=E.test(ne);console.log(e),console.log(ne),le(e),we(ne===ge)}),[ne,ge]),Object(o.useEffect)((function(){Ge("")}),[ne,p,ge]);var De=function(){var e=Object(a.a)(b().mark((function e(r){var a,n,o,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a=y.test(p),n=E.test(ne),a&&n){e.next=6;break}return Ge("Invalid Entry"),e.abrupt("return");case 6:return e.prev=6,e.next=9,f.a.post("https://qigenix.ixiono.com/apis/users/register",JSON.stringify({username:p,mobile:I.toString(),email:Z,password:ne}),{headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&(alert(e.data.message),Me(!0))}));case 9:o=e.sent,console.log(null===o||void 0===o?void 0:o.data),console.log(JSON.stringify(o)),O(""),K(""),oe(""),ve(""),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),(null===e.t0||void 0===e.t0?void 0:e.t0.response)?409===(null===(c=e.t0.response)||void 0===c?void 0:c.status)?Ge("Username Taken"):Ge("Registration Failed"):Ge("No Server Response"),t.current.focus();case 22:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,Be?c.a.createElement(d.a,null):c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex align-items-center auth px-0"},c.a.createElement("div",{className:"row w-100 mx-0"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:h.a,alt:"",className:"loginLogo"})),c.a.createElement("div",{className:"text-center mb-5"},c.a.createElement("h4",{className:"signTittleM"},"Sign Up")),c.a.createElement("div",{className:"col-lg-6 mx-auto"},c.a.createElement("div",{className:"auth-form-light text-left py-4 px-4 px-sm-5"},c.a.createElement("p",{ref:t,className:Ie?"errmsg":"offscreen","aria-live":"assertive"},Ie),c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"pt-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"signFormLabel"},"Enter your Email address"," ",c.a.createElement("span",{className:"text-danger"},"*")," ",ee&&D?c.a.createElement(v.a,{icon:g.a,className:"text-success"}):"",ee&&!D?c.a.createElement(v.a,{icon:g.c,className:"text-danger"}):""),c.a.createElement("input",{type:"email",id:"email",onChange:function(e){return K(e.target.value)},value:Z,"aria-invalid":D?"false":"true",required:!0,onFocus:function(){return te(!0)},onBlur:function(){return te(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"Email"}),ee&&!D?c.a.createElement("p",{id:"uidnote",className:ee&&Z&&!D?"instructions":"offscreen"},c.a.createElement(v.a,{icon:g.b}),"must be a proper email address."):""))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"signFormLabel"},"User Name ",c.a.createElement("span",{className:"text-danger"},"*")," ",F&&L?c.a.createElement(v.a,{icon:g.a,className:"text-success"}):"",F&&!L?c.a.createElement(v.a,{icon:g.c,className:"text-danger"}):""),c.a.createElement("input",{type:"text",id:"username",ref:e,autoComplete:"off",onChange:function(e){return O(e.target.value)},value:p,required:!0,"aria-invalid":L?"false":"true","aria-describedby":"uidnote",onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},placeholder:"Username",className:"form-control form-control-lg $ ".concat(l.a.registerInputs)}),F&&!L?c.a.createElement("p",{id:"uidnote",className:F&&p&&!L?"instructions":"offscreen"},c.a.createElement(v.a,{icon:g.b}),"4 to 24 characters.",c.a.createElement("br",null),"Must begin with a letter.",c.a.createElement("br",null),"Letters, numbers, underscores, hyphens allowed."):""))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"signFormLabel"},"Mobile Number ",c.a.createElement("span",{className:"text-danger"},"*"),"",R&&B?c.a.createElement(v.a,{icon:g.a,className:"text-success"}):"",R&&!B?c.a.createElement(v.a,{icon:g.c,className:"text-danger"}):""),c.a.createElement("input",{type:"number",id:"mobileNumber",onChange:function(e){return G(parseInt(e.target.value))},value:I,pattern:"[0-9]*","aria-invalid":B?"false":"true",required:!0,onFocus:function(){return U(!0)},onBlur:function(){return U(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"mobile"}),R&&!B?c.a.createElement("p",{id:"uidnote",className:R&&I&&!B?"instructions":"offscreen"},c.a.createElement(v.a,{icon:g.b}),"must be atleast 8 digits."):"")))),c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"pt-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"signFormLabel"},"Password ",c.a.createElement("span",{className:"text-danger"},"*")," ",fe&&se?c.a.createElement(v.a,{icon:g.a,className:"text-success"}):"",fe&&!se?c.a.createElement(v.a,{icon:g.c,className:"text-danger"}):""),c.a.createElement("input",{type:Re?"text":"password",id:"password",onChange:function(e){return oe(e.target.value)},value:ne,required:!0,"aria-invalid":se?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return de(!0)},onBlur:function(){return de(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"Password"}),fe&&!se?c.a.createElement("p",{id:"uidnote",className:F&&p&&!se?"instructions":"offscreen"},c.a.createElement(v.a,{icon:g.b}),"Must contain a capital letter.",c.a.createElement("br",null),"Must contain a small letter.",c.a.createElement("br",null),"Must contain a number",c.a.createElement("br",null),"Must contain a special letter(! @ # $ % )."):""),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"signFormLabel"},"Confirm Password ","",c.a.createElement("span",{className:"text-danger"},"*")," ",je&&Ee?c.a.createElement(v.a,{icon:g.a,className:"text-success"}):"",je&&!Ee?c.a.createElement(v.a,{icon:g.c,className:"text-danger"}):""),c.a.createElement("input",{type:He?"text":"password",id:"Confirm-password",onChange:function(e){return ve(e.target.value)},value:ge,required:!0,"aria-invalid":Ee?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return xe(!0)},onBlur:function(){return xe(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"Confirm Password"}),je&&!Ee?c.a.createElement("p",{className:"text-danger"}," Paswwords do not match"):""))),c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"pt-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement(i.a,{className:"recap",sitekey:"6LdKlLglAAAAAJhUFcG_6yGx7o0nKgOwnM5yJ5jy",onChange:function(e){return function(e){console.log("Token : ",e);var t={token:e};f.a.post("https://qigenix.ixiono.com/apis/admin/verify-captcha",t).then((function(e){console.log("Response : ",e.data),"Human"===e.data.message?Ye(!0):(r.current.reset(),Ye(!1))})).catch((function(e){console.log(e),r.current.reset(),Ye(!1)}))}(e)},ref:r})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"mt-3"},c.a.createElement("button",{type:"submit",href:"/users/login",onClick:De,disabled:!(L&&se&&B&&D&&Ee&&Ve),className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn ".concat(l.a.registerBtn)},c.a.createElement(u.b,{to:"/users/login",className:"text-white"},"SIGN UP")))),c.a.createElement("div",{className:"row d-flex justify-content-between"},c.a.createElement("div",{className:"text-left mt-4 font-weight-light"},"Already have an account?"," ",c.a.createElement(u.b,{to:"/admin/login",className:"text-primary"},"Login")))))))))}}}]);
//# sourceMappingURL=22.c8a57f2b.chunk.js.map