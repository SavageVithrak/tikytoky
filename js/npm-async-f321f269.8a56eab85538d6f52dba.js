"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2143],{48071:(n,t,o)=>{o.d(t,{pF:()=>a,zi:()=>i,xv:()=>c,Av:()=>r});var a="right-scroll-bar-position",i="width-before-scroll-bar",c="with-scroll-bars-hidden",r="--removed-body-scroll-bar-size"},74710:(n,t,o)=>{o.d(t,{jp:()=>l});var a=o(91051),i=o(93677),c=o(48071),r={left:0,top:0,right:0,gap:0},e=function(n){return parseInt(n||"",10)||0},d=function(n){if(void 0===n&&(n="margin"),"undefined"==typeof window)return r;var t=function(n){var t=window.getComputedStyle(document.body),o=t["padding"===n?"paddingLeft":"marginLeft"],a=t["padding"===n?"paddingTop":"marginTop"],i=t["padding"===n?"paddingRight":"marginRight"];return[e(o),e(a),e(i)]}(n),o=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-o+t[2]-t[0])}},p=(0,i.Ws)(),g=function(n,t,o,a){var i=n.left,r=n.top,e=n.right,d=n.gap;return void 0===o&&(o="margin"),"\n  .".concat(c.xv," {\n   overflow: hidden ").concat(a,";\n   padding-right: ").concat(d,"px ").concat(a,";\n  }\n  body {\n    overflow: hidden ").concat(a,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(a,";"),"margin"===o&&"\n    padding-left: ".concat(i,"px;\n    padding-top: ").concat(r,"px;\n    padding-right: ").concat(e,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d,"px ").concat(a,";\n    "),"padding"===o&&"padding-right: ".concat(d,"px ").concat(a,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c.pF," {\n    right: ").concat(d,"px ").concat(a,";\n  }\n  \n  .").concat(c.zi," {\n    margin-right: ").concat(d,"px ").concat(a,";\n  }\n  \n  .").concat(c.pF," .").concat(c.pF," {\n    right: 0 ").concat(a,";\n  }\n  \n  .").concat(c.zi," .").concat(c.zi," {\n    margin-right: 0 ").concat(a,";\n  }\n  \n  body {\n    ").concat(c.Av,": ").concat(d,"px;\n  }\n")},l=function(n){var t=a.useState(d(n.gapMode)),o=t[0],i=t[1];a.useEffect((function(){i(d(n.gapMode))}),[n.gapMode]);var c=n.noRelative,r=n.noImportant,e=n.gapMode,l=void 0===e?"margin":e;return a.createElement(p,{styles:g(o,!c,l,r?"":"!important")})}}}]);