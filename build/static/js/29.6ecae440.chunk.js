(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[29],{168:function(e,a,t){"use strict";a.a="https://qigenix.ixiono.com/apis"},211:function(e,a,t){"use strict";a.a=function(e){function a(e,a,r){var c=a.trim().split(h);a=c;var s=c.length,i=e.length;switch(i){case 0:case 1:var n=0;for(e=0===i?"":e[0]+" ";n<s;++n)a[n]=t(e,a[n],r).trim();break;default:var l=n=0;for(a=[];n<s;++n)for(var o=0;o<i;++o)a[l++]=t(e[o]+" ",c[n],r).trim()}return a}function t(e,a,t){var r=a.charCodeAt(0);switch(33>r&&(r=(a=a.trim()).charCodeAt(0)),r){case 38:return a.replace(m,"$1"+e.trim());case 58:return e.trim()+a.replace(m,"$1"+e.trim());default:if(0<1*t&&0<a.indexOf("\f"))return a.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+a}function r(e,a,t,s){var i=e+";",n=2*a+3*t+4*s;if(944===n){e=i.indexOf(":",9)+1;var l=i.substring(e,i.length-1).trim();return l=i.substring(0,e).trim()+l+";",1===j||2===j&&c(l,1)?"-webkit-"+l+l:l}if(0===j||2===j&&!c(i,1))return i;switch(n){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(E,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(l=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+l+i;case 1005:return f.test(i)?i.replace(d,":-webkit-")+i.replace(d,":-moz-")+i:i;case 1e3:switch(a=(l=i.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(a)){case 226:l=i.replace(w,"tb");break;case 232:l=i.replace(w,"tb-rl");break;case 220:l=i.replace(w,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+l+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(a=(i=e).length-10,n=(l=(33===i.charCodeAt(a)?i.substring(0,a):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:i=i.replace(l,"-webkit-"+l)+";"+i;break;case 207:case 102:i=i.replace(l,"-webkit-"+(102<n?"inline-":"")+"box")+";"+i.replace(l,"-webkit-"+l)+";"+i.replace(l,"-ms-"+l+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return l=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+l+"-ms-flex-"+l+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(A,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(A,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?r(e.replace("stretch","fill-available"),a,t,s).replace(":fill-available",":stretch"):i.replace(l,"-webkit-"+l)+i.replace(l,"-moz-"+l.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===t+s&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+i}return i}function c(e,a){var t=e.indexOf(1===a?":":"{"),r=e.substring(0,3!==a?t:10);return t=e.substring(t+1,e.length-1),R(2!==a?r:r.replace(x,"$1"),t,a)}function s(e,a){var t=r(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return t!==a+";"?t.replace(v," or ($1)").substring(4):"("+a+")"}function i(e,a,t,r,c,s,i,n,o,u){for(var d,f=0,b=a;f<G;++f)switch(d=z[f].call(l,e,b,t,r,c,s,i,n,o,u)){case void 0:case!1:case!0:case null:break;default:b=d}if(b!==a)return b}function n(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!==typeof e?j=1:(j=2,R=e):j=0),n}function l(e,t){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<G){var l=i(-1,t,n,n,S,y,0,0,0,0);void 0!==l&&"string"===typeof l&&(t=l)}var d=function e(t,n,l,d,f){for(var b,h,m,w,v,A=0,x=0,O=0,E=0,z=0,R=0,W=m=b=0,D=0,F=0,J=0,L=0,M=l.length,U=M-1,V="",q="",H="",P="";D<M;){if(h=l.charCodeAt(D),D===U&&0!==x+E+O+A&&(0!==x&&(h=47===x?10:47),E=O=A=0,M++,U++),0===x+E+O+A){if(D===U&&(0<F&&(V=V.replace(u,"")),0<V.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:V+=l.charAt(D)}h=59}switch(h){case 123:for(b=(V=V.trim()).charCodeAt(0),m=1,L=++D;D<M;){switch(h=l.charCodeAt(D)){case 123:m++;break;case 125:m--;break;case 47:switch(h=l.charCodeAt(D+1)){case 42:case 47:e:{for(W=D+1;W<U;++W)switch(l.charCodeAt(W)){case 47:if(42===h&&42===l.charCodeAt(W-1)&&D+2!==W){D=W+1;break e}break;case 10:if(47===h){D=W+1;break e}}D=W}}break;case 91:h++;case 40:h++;case 34:case 39:for(;D++<U&&l.charCodeAt(D)!==h;);}if(0===m)break;D++}switch(m=l.substring(L,D),0===b&&(b=(V=V.replace(o,"").trim()).charCodeAt(0)),b){case 64:switch(0<F&&(V=V.replace(u,"")),h=V.charCodeAt(1)){case 100:case 109:case 115:case 45:F=n;break;default:F=$}if(L=(m=e(n,F,m,h,f+1)).length,0<G&&(v=i(3,m,F=a($,V,J),n,S,y,L,h,f,d),V=F.join(""),void 0!==v&&0===(L=(m=v.trim()).length)&&(h=0,m="")),0<L)switch(h){case 115:V=V.replace(C,s);case 100:case 109:case 45:m=V+"{"+m+"}";break;case 107:m=(V=V.replace(k,"$1 $2"))+"{"+m+"}",m=1===j||2===j&&c("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=V+m,112===d&&(q+=m,m="")}else m="";break;default:m=e(n,a(n,V,J),m,d,f+1)}H+=m,m=J=F=W=b=0,V="",h=l.charCodeAt(++D);break;case 125:case 59:if(1<(L=(V=(0<F?V.replace(u,""):V).trim()).length))switch(0===W&&(b=V.charCodeAt(0),45===b||96<b&&123>b)&&(L=(V=V.replace(" ",":")).length),0<G&&void 0!==(v=i(1,V,n,t,S,y,q.length,d,f,d))&&0===(L=(V=v.trim()).length)&&(V="\0\0"),b=V.charCodeAt(0),h=V.charCodeAt(1),b){case 0:break;case 64:if(105===h||99===h){P+=V+l.charAt(D);break}default:58!==V.charCodeAt(L-1)&&(q+=r(V,b,h,V.charCodeAt(2)))}J=F=W=b=0,V="",h=l.charCodeAt(++D)}}switch(h){case 13:case 10:47===x?x=0:0===1+b&&107!==d&&0<V.length&&(F=1,V+="\0"),0<G*I&&i(0,V,n,t,S,y,q.length,d,f,d),y=1,S++;break;case 59:case 125:if(0===x+E+O+A){y++;break}default:switch(y++,w=l.charAt(D),h){case 9:case 32:if(0===E+A+x)switch(z){case 44:case 58:case 9:case 32:w="";break;default:32!==h&&(w=" ")}break;case 0:w="\\0";break;case 12:w="\\f";break;case 11:w="\\v";break;case 38:0===E+x+A&&(F=J=1,w="\f"+w);break;case 108:if(0===E+x+A+N&&0<W)switch(D-W){case 2:112===z&&58===l.charCodeAt(D-3)&&(N=z);case 8:111===R&&(N=R)}break;case 58:0===E+x+A&&(W=D);break;case 44:0===x+O+E+A&&(F=1,w+="\r");break;case 34:case 39:0===x&&(E=E===h?0:0===E?h:E);break;case 91:0===E+x+O&&A++;break;case 93:0===E+x+O&&A--;break;case 41:0===E+x+A&&O--;break;case 40:if(0===E+x+A){if(0===b)switch(2*z+3*R){case 533:break;default:b=1}O++}break;case 64:0===x+O+E+A+W+m&&(m=1);break;case 42:case 47:if(!(0<E+A+O))switch(x){case 0:switch(2*h+3*l.charCodeAt(D+1)){case 235:x=47;break;case 220:L=D,x=42}break;case 42:47===h&&42===z&&L+2!==D&&(33===l.charCodeAt(L+2)&&(q+=l.substring(L,D+1)),w="",x=0)}}0===x&&(V+=w)}R=z,z=h,D++}if(0<(L=q.length)){if(F=n,0<G&&(void 0!==(v=i(2,q,F,t,S,y,L,d,f,d))&&0===(q=v).length))return P+q+H;if(q=F.join(",")+"{"+q+"}",0!==j*N){switch(2!==j||c(q,2)||(N=0),N){case 111:q=q.replace(g,":-moz-$1")+q;break;case 112:q=q.replace(p,"::-webkit-input-$1")+q.replace(p,"::-moz-$1")+q.replace(p,":-ms-input-$1")+q}N=0}}return P+q+H}($,n,t,0,0);return 0<G&&(void 0!==(l=i(-2,d,n,n,S,y,d.length,0,0,0))&&(d=l)),"",N=0,y=S=1,d}var o=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,f=/zoo|gra/,b=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,k=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,g=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,v=/([\s\S]*?);/g,A=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,y=1,S=1,N=0,j=1,$=[],z=[],G=0,R=null,I=0;return l.use=function e(a){switch(a){case void 0:case null:G=z.length=0;break;default:if("function"===typeof a)z[G++]=a;else if("object"===typeof a)for(var t=0,r=a.length;t<r;++t)e(a[t]);else I=0|!!a}return e},l.set=n,void 0!==e&&n(e),l}},212:function(e,a,t){"use strict";a.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},310:function(e,a,t){"use strict";t.r(a);var r=t(14),c=t(64),s=t.n(c),i=t(250),n=(t(244),t(0)),l=t.n(n),o=t(161);t(168);a.default=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],c=a[1],u=Object(n.useState)([]),d=Object(r.a)(u,2),f=d[0],b=d[1],h=Object(n.useState)(""),m=Object(r.a)(h,2),k=m[0],p=m[1],g=Object(n.useState)([]),w=Object(r.a)(g,2),C=w[0],v=w[1];Object(n.useEffect)((function(){s.a.get("https://backend.klivepay.com/api/admin/get-merchant-list").then((function(e){for(var a=[],t=0;t<e.data.length;t++)a.push(e.data[t].email);c(a),console.log("sample")}))}),[]),Object(n.useEffect)((function(){s.a.get("https://backend.klivepay.com/api/admin/get-user-list").then((function(e){for(var a=[],t=0;t<e.data.length;t++)a.push(e.data[t].email);b(a),console.log("sampleUser")}))}),[]),console.log(t);return l.a.createElement("div",null,l.a.createElement("div",{className:"col-12 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-sample"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(o.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("label",null,"Select User :")," ",l.a.createElement("br",null),l.a.createElement(i.a,{isClearable:!0,value:[k],onChange:function(e){return function(e,a){console.log(e),p(e)}(e)},options:f,getOptionLabel:function(e){return e},getOptionValue:function(e){return e}})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(o.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12 "},l.a.createElement("label",{htmlFor:""},"Select Merchant :"),l.a.createElement(i.a,{isMulti:!0,className:"basic-multi-select",isClearable:!0,value:C,onChange:function(e){return function(e,a){console.log(e),v(e)}(e)},options:t,getOptionLabel:function(e){return e},getOptionValue:function(e){return e}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement("button",{onClick:function(e){e.preventDefault();try{s.a.patch("https://backend.klivepay.com/api/admin/assign-merchnat-to-user",JSON.stringify({merchantEmail:C,userEmail:k}),{headers:{"Content-Type":"application/json"}}).then((function(e){console.log("res",e.data),200===e.data.code?alert("Asssigned sucessfully!"):alert(e.data.message),p(""),v("")}))}catch(a){a&&alert("something went wrong!"),console.log(a)}console.log("merchantEmail",C),console.log("merch",t)},className:"btn btn-success btn-lg btn-block rounded-pill"},"Agree"))))))))}}}]);
//# sourceMappingURL=29.6ecae440.chunk.js.map