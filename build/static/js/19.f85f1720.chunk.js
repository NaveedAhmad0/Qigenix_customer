(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[19],{173:function(e,t,a){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,o){void 0===o&&(o=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,o,n)}:function(e,t,a,o){void 0===o&&(o=a),e[o]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},l=this&&this.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var s=i(a(0)),c=a(174),m=(0,a(175).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,a=void 0===t||t,n=e.color,r=void 0===n?"#000000":n,i=e.speedMultiplier,d=void 0===i?1:i,p=e.cssOverride,u=void 0===p?{}:p,g=e.size,h=void 0===g?35:g,y=l(e,["loading","color","speedMultiplier","cssOverride","size"]),f=o({background:"transparent !important",width:(0,c.cssValue)(h),height:(0,c.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:r,borderBottomColor:"transparent",borderLeftColor:r,borderRightColor:r,display:"inline-block",animation:"".concat(m," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},u);return a?s.createElement("span",o({style:f},y)):null}},174:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var o={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return o[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}},175:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var o="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return o;var n=document.createElement("style");document.head.appendChild(n);var r=n.sheet,i="\n    @keyframes ".concat(o," {\n      ").concat(t,"\n    }\n  ");return r&&r.insertRule(i,0),o}},688:function(e,t,a){},859:function(e,t,a){"use strict";a.r(t);var o=a(9),n=a(0),r=a.n(n),i=(a(181),a(186)),l=a(173),s=a.n(l),c=a(212),m=a.n(c),d=[{id:1,title:"Beetlejuice",year:"1988",runtime:"92",genres:["Comedy","Fantasy"],director:"Tim Burton",actors:"Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",plot:'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"},{id:2,title:"The Cotton Club",year:"1984",runtime:"127",genres:["Crime","Drama","Music"],director:"Francis Ford Coppola",actors:"Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",plot:"The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"},{id:3,title:"The Shawshank Redemption",year:"1994",runtime:"142",genres:["Crime","Drama"],director:"Frank Darabont",actors:"Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",plot:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"},{id:4,title:"Crocodile Dundee",year:"1986",runtime:"97",genres:["Adventure","Comedy"],director:"Peter Faiman",actors:"Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",plot:"An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"},{id:5,title:"Valkyrie",year:"2008",runtime:"121",genres:["Drama","History","Thriller"],director:"Bryan Singer",actors:"Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",plot:"A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",posterUrl:"http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"},{id:6,title:"Ratatouille",year:"2007",runtime:"111",genres:["Animation","Comedy","Family"],director:"Brad Bird, Jan Pinkava",actors:"Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",plot:"A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"},{id:7,title:"City of God",year:"2002",runtime:"130",genres:["Crime","Drama"],director:"Fernando Meirelles, K\xe1tia Lund",actors:"Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",plot:"Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"},{id:8,title:"Memento",year:"2000",runtime:"113",genres:["Mystery","Thriller"],director:"Christopher Nolan",actors:"Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",plot:"A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{id:9,title:"The Intouchables",year:"2011",runtime:"112",genres:["Biography","Comedy","Drama"],director:"Olivier Nakache, Eric Toledano",actors:"Fran\xe7ois Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",plot:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",posterUrl:"http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"},{id:10,title:"Stardust",year:"2007",runtime:"127",genres:["Adventure","Family","Fantasy"],director:"Matthew Vaughn",actors:"Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",plot:"In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"},{id:11,title:"Apocalypto",year:"2006",runtime:"139",genres:["Action","Adventure","Drama"],director:"Mel Gibson",actors:"Rudy Youngblood, Dalia Hern\xe1ndez, Jonathan Brewer, Morris Birdyellowhead",plot:"As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"},{id:12,title:"Taxi Driver",year:"1976",runtime:"113",genres:["Crime","Drama"],director:"Martin Scorsese",actors:"Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",plot:"A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{id:13,title:"No Country for Old Men",year:"2007",runtime:"122",genres:["Crime","Drama","Thriller"],director:"Ethan Coen, Joel Coen",actors:"Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",plot:"Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"},{id:14,title:"Planet 51",year:"2009",runtime:"91",genres:["Animation","Adventure","Comedy"],director:"Jorge Blanco, Javier Abad, Marcos Mart\xednez",actors:"Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",plot:"An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",posterUrl:"http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg"}],p=a(6);a(688);t.default=function(){i.CSVExport.ExportCSVButton;var e=Object(n.useState)(d),t=Object(o.a)(e,2),a=t[0],l=(t[1],Object(p.useHistory)(),Object(n.useState)(!1)),c=Object(o.a)(l,2),u=c[0],g=(c[1],Object(n.useState)([])),h=Object(o.a)(g,2),y=h[0];h[1],console.log("list of item",y);var f=[{name:"Payment #",selector:"id",sortable:!1,style:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px"}},{name:"Invoice #",selector:"runtime",sortable:!0,style:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px",color:"#4E7AED"}},{name:"Payment Mode",selector:"director",sortable:!1,style:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px",color:"#4E7AED"}},{name:"Transaction ID",selector:"year",sortable:!1,style:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px",color:"#4E7AED"}},{name:"Customer\t",selector:"year",sortable:!1,style:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"18px",color:"#4E7AED"}},{name:"Amount",cell:function(e){return[r.a.createElement("div",{class:"form-check form-switch text-center"},r.a.createElement("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",checked:!0}))]},sortable:!1},{name:"Date",selector:"year",sortable:!1}];return Object(n.useEffect)((function(){}),[a]),r.a.createElement("div",null,u?r.a.createElement("div",{className:"row",style:{height:"500px"}},r.a.createElement("div",{className:"col-12 text-center my-auto"},r.a.createElement(s.a,{color:"#136be0",size:100,speedMultiplier:1}))):r.a.createElement("div",null,r.a.createElement("div",{className:"row bg-light p-3 "},r.a.createElement("div",{className:"col-md-12 "},r.a.createElement("div",{class:"btn-group btn-group-toggle ","data-toggle":"buttons"},r.a.createElement("label",{class:"btn active",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px"}},r.a.createElement("input",{type:"radio",name:"options",id:"option1",autocomplete:"off",checked:!0})," ","Export"),r.a.createElement("label",{class:"btn",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px"}},r.a.createElement("input",{type:"radio",name:"options",id:"option3",autocomplete:"off"}),r.a.createElement("i",{class:"fa-solid fa-rotate"}))),r.a.createElement("div",{style:{float:"right",width:"20%"},class:"btn-group btn-group-toggle ","data-toggle":"buttons"},r.a.createElement("label",{class:"btn active",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontSize:"12px",lineHeight:"14px"}},r.a.createElement("i",{class:"fa-solid fa-magnifying-glass"})),r.a.createElement("input",{type:"text",style:{borderRight:"1px solid #D9D9D9",color:"#475569",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"14px",border:"none",width:"100%",textAlign:"center"},placeholder:"Search..."})),r.a.createElement(m.a,{className:"pt-3",columns:f,data:a,pagination:20,highlightOnHover:!0,subHeader:!0,customStyles:{headCells:{style:{borderRight:"0.1rem solid #D9D9D9 !important"}}},paginationComponentOptions:{rowsPerPageText:"Showing 1 to 6 of 12 entries:"}})))))}}}]);
//# sourceMappingURL=19.f85f1720.chunk.js.map