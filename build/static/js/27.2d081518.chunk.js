(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[27],{182:function(e,a,t){"use strict";var l=t(1),s=t(3),r=t(4),c=t.n(r),n=t(0),i=t.n(n),o=t(5),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,u=void 0===n?"div":n,b=Object(s.a)(e,m),f=Object(o.a)(t,"col"),v=[],p=[];return d.forEach((function(e){var a,t,l,s=b[e];if(delete b[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var c="xs"!==e?"-"+e:"";a&&v.push(!0===a?""+f+c:""+f+c+"-"+a),null!=l&&p.push("order"+c+"-"+l),null!=t&&p.push("offset"+c+"-"+t)})),v.length||v.push(f),i.a.createElement(u,Object(l.a)({},b,{ref:a,className:c.a.apply(void 0,[r].concat(v,p))}))}));u.displayName="Col",a.a=u},197:function(e,a,t){"use strict";var l=t(1),s=t(3),r=t(4),c=t.n(r),n=t(0),i=t.n(n),o=(t(110),t(2)),m=t.n(o),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},b=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,n=e.className,o=e.type,m=void 0===o?"valid":o,u=e.tooltip,b=void 0!==u&&u,f=Object(s.a)(e,d);return i.a.createElement(r,Object(l.a)({},f,{ref:a,className:c()(n,m+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=u;var f=b,v=i.a.createContext({controlId:void 0}),p=t(5),E=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],N=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,b=e.isValid,f=void 0!==b&&b,N=e.isInvalid,h=void 0!==N&&N,x=e.isStatic,y=e.as,O=void 0===y?"input":y,w=Object(s.a)(e,E),j=Object(n.useContext)(v),P=j.controlId,g=j.custom?[o,"custom-control-input"]:[r,"form-check-input"],C=g[0],F=g[1];return r=Object(p.a)(C,F),i.a.createElement(O,Object(l.a)({},w,{ref:a,type:u,id:t||P,className:c()(m,r,f&&"is-valid",h&&"is-invalid",x&&"position-static")}))}));N.displayName="FormCheckInput";var h=N,x=["bsPrefix","bsCustomPrefix","className","htmlFor"],y=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(s.a)(e,x),u=Object(n.useContext)(v),b=u.controlId,f=u.custom?[r,"custom-control-label"]:[t,"form-check-label"],E=f[0],N=f[1];return t=Object(p.a)(E,N),i.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:c()(o,t)}))}));y.displayName="FormCheckLabel";var O=y,w=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],j=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,b=void 0!==u&&u,E=e.isValid,N=void 0!==E&&E,x=e.isInvalid,y=void 0!==x&&x,j=e.feedbackTooltip,P=void 0!==j&&j,g=e.feedback,C=e.className,F=e.style,k=e.title,I=void 0===k?"":k,S=e.type,R=void 0===S?"checkbox":S,G=e.label,L=e.children,V=e.custom,T=e.as,A=void 0===T?"input":T,J=Object(s.a)(e,w),z="switch"===R||V,M=z?[o,"custom-control"]:[r,"form-check"],H=M[0],B=M[1];r=Object(p.a)(H,B);var D=Object(n.useContext)(v).controlId,Q=Object(n.useMemo)((function(){return{controlId:t||D,custom:z}}),[D,z,t]),W=z||null!=G&&!1!==G&&!L,X=i.a.createElement(h,Object(l.a)({},J,{type:"switch"===R?"checkbox":R,ref:a,isValid:N,isInvalid:y,isStatic:!W,disabled:b,as:A}));return i.a.createElement(v.Provider,{value:Q},i.a.createElement("div",{style:F,className:c()(C,r,z&&"custom-"+R,d&&r+"-inline")},L||i.a.createElement(i.a.Fragment,null,X,W&&i.a.createElement(O,{title:I},G),(N||y)&&i.a.createElement(f,{type:N?"valid":"invalid",tooltip:P},g))))}));j.displayName="FormCheck",j.Input=h,j.Label=O;var P=j,g=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],C=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,b=e.lang,f=e.as,E=void 0===f?"input":f,N=Object(s.a)(e,g),h=Object(n.useContext)(v),x=h.controlId,y=h.custom?[o,"custom-file-input"]:[r,"form-control-file"],O=y[0],w=y[1];return r=Object(p.a)(O,w),i.a.createElement(E,Object(l.a)({},N,{ref:a,id:t||x,type:"file",lang:b,className:c()(m,r,d&&"is-valid",u&&"is-invalid")}))}));C.displayName="FormFileInput";var F=C,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],I=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(s.a)(e,k),u=Object(n.useContext)(v),b=u.controlId,f=u.custom?[r,"custom-file-label"]:[t,"form-file-label"],E=f[0],N=f[1];return t=Object(p.a)(E,N),i.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:c()(o,t),"data-browse":d["data-browse"]}))}));I.displayName="FormFileLabel";var S=I,R=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],G=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,b=void 0!==u&&u,E=e.isInvalid,N=void 0!==E&&E,h=e.feedbackTooltip,x=void 0!==h&&h,y=e.feedback,O=e.className,w=e.style,j=e.label,P=e.children,g=e.custom,C=e.lang,k=e["data-browse"],I=e.as,G=void 0===I?"div":I,L=e.inputAs,V=void 0===L?"input":L,T=Object(s.a)(e,R),A=g?[o,"custom"]:[r,"form-file"],J=A[0],z=A[1];r=Object(p.a)(J,z);var M=Object(n.useContext)(v).controlId,H=Object(n.useMemo)((function(){return{controlId:t||M,custom:g}}),[M,g,t]),B=null!=j&&!1!==j&&!P,D=i.a.createElement(F,Object(l.a)({},T,{ref:a,isValid:b,isInvalid:N,disabled:d,as:V,lang:C}));return i.a.createElement(v.Provider,{value:H},i.a.createElement(G,{style:w,className:c()(O,r,g&&"custom-file")},P||i.a.createElement(i.a.Fragment,null,g?i.a.createElement(i.a.Fragment,null,D,B&&i.a.createElement(S,{"data-browse":k},j)):i.a.createElement(i.a.Fragment,null,B&&i.a.createElement(S,null,j),D),(b||N)&&i.a.createElement(f,{type:b?"valid":"invalid",tooltip:x},y))))}));G.displayName="FormFile",G.Input=F,G.Label=S;var L=G,V=(t(48),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),T=i.a.forwardRef((function(e,a){var t,r,o=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,b=e.htmlSize,f=e.id,E=e.className,N=e.isValid,h=void 0!==N&&N,x=e.isInvalid,y=void 0!==x&&x,O=e.plaintext,w=e.readOnly,j=e.custom,P=e.as,g=void 0===P?"input":P,C=Object(s.a)(e,V),F=Object(n.useContext)(v).controlId,k=j?[m,"custom"]:[o,"form-control"],I=k[0],S=k[1];if(o=Object(p.a)(I,S),O)(r={})[o+"-plaintext"]=!0,t=r;else if("file"===d){var R;(R={})[o+"-file"]=!0,t=R}else if("range"===d){var G;(G={})[o+"-range"]=!0,t=G}else if("select"===g&&j){var L;(L={})[o+"-select"]=!0,L[o+"-select-"+u]=u,t=L}else{var T;(T={})[o]=!0,T[o+"-"+u]=u,t=T}return i.a.createElement(g,Object(l.a)({},C,{type:d,size:b,ref:a,readOnly:w,id:f||F,className:c()(E,t,h&&"is-valid",y&&"is-invalid")}))}));T.displayName="FormControl";var A=Object.assign(T,{Feedback:f}),J=["bsPrefix","className","children","controlId","as"],z=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,b=Object(s.a)(e,J);t=Object(p.a)(t,"form-group");var f=Object(n.useMemo)((function(){return{controlId:m}}),[m]);return i.a.createElement(v.Provider,{value:f},i.a.createElement(u,Object(l.a)({},b,{ref:a,className:c()(r,t)}),o))}));z.displayName="FormGroup";var M=z,H=t(182),B=["as","bsPrefix","column","srOnly","className","htmlFor"],D=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,o=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,b=e.htmlFor,f=Object(s.a)(e,B),E=Object(n.useContext)(v).controlId;o=Object(p.a)(o,"form-label");var N="col-form-label";"string"===typeof m&&(N=N+" "+N+"-"+m);var h=c()(u,o,d&&"sr-only",m&&N);return b=b||E,m?i.a.createElement(H.a,Object(l.a)({ref:a,as:"label",className:h,htmlFor:b},f)):i.a.createElement(r,Object(l.a)({ref:a,className:h,htmlFor:b},f))}));D.displayName="FormLabel",D.defaultProps={column:!1,srOnly:!1};var Q=D,W=["bsPrefix","className","as","muted"],X=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,o=void 0===n?"small":n,m=e.muted,d=Object(s.a)(e,W);return t=Object(p.a)(t,"form-text"),i.a.createElement(o,Object(l.a)({},d,{ref:a,className:c()(r,t,m&&"text-muted")}))}));X.displayName="FormText";var q=X,K=i.a.forwardRef((function(e,a){return i.a.createElement(P,Object(l.a)({},e,{ref:a,type:"switch"}))}));K.displayName="Switch",K.Input=P.Input,K.Label=P.Label;var U=K,Y=t(49),Z=["bsPrefix","inline","className","validated","as"],$=Object(Y.a)("form-row"),_=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,n=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(s.a)(e,Z);return t=Object(p.a)(t,"form"),i.a.createElement(d,Object(l.a)({},u,{ref:a,className:c()(n,o&&"was-validated",r&&t+"-inline")}))}));_.displayName="Form",_.defaultProps={inline:!1},_.Row=$,_.Group=M,_.Control=A,_.Check=P,_.File=L,_.Switch=U,_.Label=Q,_.Text=q;a.a=_},240:function(e,a,t){"use strict";var l=t(0),s=t.n(l),r=t(197);a.a=function(){return s.a.createElement("div",{className:"col-12 grid-margin"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("form",{className:"form-sample"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-check"},s.a.createElement("label",{className:"form-check-label text-muted"},s.a.createElement("input",{type:"checkbox",className:"form-check-input"}),s.a.createElement("i",{className:"input-helper"}),"Transaction Date"))),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-check"},s.a.createElement("label",{className:"form-check-label text-muted"},s.a.createElement("input",{type:"checkbox",className:"form-check-input"}),s.a.createElement("i",{className:"input-helper"}),"Payment Date")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"Keywords"})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"All Channel"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("select",{className:"form-control"},s.a.createElement("option",null,"Male"),s.a.createElement("option",null,"Female"))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"Trans. Status"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("select",{className:"form-control"},s.a.createElement("option",null,"Category1"),s.a.createElement("option",null,"Category2"),s.a.createElement("option",null,"Category3"),s.a.createElement("option",null,"Category4"))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"text",placeholder:"Trans. Status"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"date"})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(r.a.Group,{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement(r.a.Control,{type:"date"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree")),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree")))))))}},846:function(e,a,t){"use strict";t.r(a),t.d(a,"AdminVoid",(function(){return x}));var l=t(24),s=t(25),r=t(26),c=t(27),n=t(0),i=t.n(n),o=(t(186),t(198)),m=t.n(o),d=t(199),u=t.n(d),b=t(193),f=t.n(b),v=t(240),p=b.Search.SearchBar,E=[{dataField:"id",text:"Order number",sort:!0,classes:"deal-row",headerClasses:"deal-header"},{dataField:"code",text:"Voucher code",classes:"deal-row-2",headerClasses:"deal-header"},{dataField:"purchasedate",text:"Purchase date",classes:"deal-row",headerClasses:"deal-header"},{dataField:"status",text:"Status",classes:"deal-row",headerClasses:"deal-header"},{dataField:"branchredeem",text:"Branch redeemed",headerClasses:"deal-header"},{dataField:"redemptiondate",text:"Redemption date",headerClasses:"deal-header"}],N=[{id:1003,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1004,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"},{id:1005,code:"5Q2H-MWXF-36HE",purchasedate:"Jul. 8, 2022",status:"used",branchredeem:"Glorietta - GLO101",redemptiondate:"Jul. 10, 2022 at 4:30pm"}],h={paginationSize:4,pageStartIndex:1,alwaysShowAllBtns:!0,withFirstAndLast:!1,hideSizePerPage:!0,hidePageListOnlyOnePage:!0,showTotal:!1,disablePageTitle:!0},x=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={inputValue:"",active:""},s}return Object(s.a)(t,[{key:"toggleProBanner",value:function(){document.querySelector(".proBanner").classList.toggle("hide")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"row page-title-header"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"page-header"},i.a.createElement("h4",{className:"page-title"},"Refund")))),i.a.createElement(v.a,null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("h4",{className:"card-title mb-0"},"Invoice"),i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},i.a.createElement("small",null,"Show All"))),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quod cupiditate esse fuga"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement(f.a,{keyField:"id",data:N,columns:E,search:!0},(function(e){return i.a.createElement("div",null,i.a.createElement("h3",null,"Input something at below input field:"),i.a.createElement(p,Object.assign({},e.searchProps,{className:"custome-search-field",style:{color:"white"},delay:500,placeholder:"Search Something!!!"})),i.a.createElement("hr",null),i.a.createElement(m.a,Object.assign({},e.baseProps,{pagination:u()(h)})))})))))))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"row"}))))}}]),t}(n.Component);a.default=x}}]);
//# sourceMappingURL=27.2d081518.chunk.js.map