"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4398],{95530:(e,t,n)=>{n.d(t,{rU:()=>m});var r=n(21041),a=(n(5498),n(91051)),i=n(16856),o=n(62848),c=n(79213),l=n(55408);a.Component,a.Component;var f=function(e,t){return"function"==typeof e?e(t):e},u=function(e,t){return"string"==typeof e?(0,i.ob)(e,null,null,t):e},s=function(e){return e},v=a.forwardRef;void 0===v&&(v=s);var p=v((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,l=(0,c.Z)(e,["innerRef","navigate","onClick"]),f=l.target,u=(0,o.Z)({},l,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||f&&"_self"!==f||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=s!==v&&t||n,a.createElement("a",u)})),m=v((function(e,t){var n=e.component,m=void 0===n?p:n,y=e.replace,_=e.to,h=e.innerRef,C=(0,c.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=e.history,r=u(f(_,e.location),e.location),c=r?n.createHref(r):"",p=(0,o.Z)({},C,{href:c,navigate:function(){var t=f(_,e.location),r=(0,i.Ep)(e.location)===(0,i.Ep)(u(t));(y||r?n.replace:n.push)(t)}});return s!==v?p.ref=t||h:p.innerRef=h,a.createElement(m,p)}))})),y=function(e){return e},_=a.forwardRef;void 0===_&&(_=y),_((function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,s=e.activeClassName,v=void 0===s?"active":s,p=e.activeStyle,h=e.className,C=e.exact,E=e.isActive,d=e.location,R=e.sensitive,A=e.strict,Z=e.style,g=e.to,D=e.innerRef,L=(0,c.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=d||e.location,c=u(f(g,n),n),s=c.pathname,N=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),K=N?(0,r.LX)(n.pathname,{path:N,exact:C,sensitive:R,strict:A}):null,w=!!(E?E(K,n):K),O="function"==typeof h?h(w):h,S="function"==typeof Z?Z(w):Z;w&&(O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(O,v),S=(0,o.Z)({},S,p));var k=(0,o.Z)({"aria-current":w&&i||null,className:O,style:S,to:c},L);return y!==_?k.ref=t||D:k.innerRef=D,a.createElement(m,k)}))}))}}]);