!function(){"use strict";var n="https://"+(S=(w=document).currentScript||[].find.call(w.querySelectorAll("script"),(function(n){return/sdk-lite/.test(n.src)})),(w=w.createElement("a")).href=S.src,w.host+"/slardar/fe/sdk_lite/plugins"),t=(r.prototype.n=function(n){try{this.t?this.t(n):this.r.push(n)}catch(n){}},r.prototype.u=function(n){var t;for(this.t=n;void 0!==(t=this.r.shift());)n(t)},r);function r(){this.r=[]}function e(n){var r=new t;try{n(r.n.bind(r))}catch(n){}return r}function i(n){return n()}function o(t,r){void 0===r&&(r=!0);var o=window.SlardarLite;o.plugin||(o.plugin={});var c=[],a=!1,f=i,s=r?function(r,s){return e((function(e){u((function(){var l=document.createElement("script");l.defer=!0,l.src=(o.config.pluginPathPrefix||n)+"/"+t+".1.1.0.maliva.js",document.head.appendChild(l),l.onload=function(){f((function(){return u((function(){var n=o.plugin[t](r,s);n&&n.u(e),c.forEach(i),a=!0}))}))}}))}))}:function(n,t){return c.forEach(i),t};return s.i=function(n){c.push(n),!a&&r||n()},s.o=function(n){return f=n,s},s}var u=window.requestIdleCallback||function(n){return setTimeout(n,1)};function c(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,i,o=r.call(n),u=[];try{for(;(void 0===t||0<t--)&&!(e=o.next()).done;)u.push(e.value)}catch(n){i={error:n}}finally{try{e&&!e.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return u}function a(n,t,r){return function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];n[t]=r.apply(void 0,function(n,t,r){if(r||2===arguments.length)for(var e,i=0,o=t.length;i<o;i++)!e&&i in t||((e=e||Array.prototype.slice.call(t,0,i))[i]=t[i]);return n.concat(e||Array.prototype.slice.call(t))}([n[t]],c(e),!1))}}function f(n,t){return function(r,e){var i=n(r,e=void 0===e?{}:e),o={};t(o);var u=h(),c=function(n){var i=h();setTimeout((function(){(o.c||t)([7,[r,e,u,i-u,n,p(r.url||r)]])}),100)};return i.then((function(n){c(n)}),(function(){c(!1)})),i}}function s(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=(i=c(t,2))[0],i=i[1];return(this.e||(this.e={}))[e]=i,n&&n.apply(this,t)}}function l(n,t){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];try{var i={};d(this)(i,t),this.f=h(),this.r=r[0],t(i)}catch(r){}return n.apply(this,r)}}function v(n){return function(){for(var t,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return t=c(r,2),this.a=t[0],this.v=t[1],n.apply(this,r)}}var h=function(){return Date.now()},p=function(n){return performance.getEntriesByName(n).pop()},d=function(n){return a(n,"onreadystatechange",(function(t,r,e){return function(){for(var i=this,o=[],u=0;u<arguments.length;u++)o[u]=arguments[u];try{var c=h();4===this.readyState&&setTimeout((function(){(r.c||e)([1,[n,i.f,c-i.f,p(i.v)]])}),100)}catch(i){}return t&&t.apply(this,o)}}))};function g(){for(var n=new Array(16),t=0,r=0;r<16;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;n[6]=15&n[6]|64,n[8]=63&n[8]|128;for(var e=[],i=0;i<256;++i)e[i]=(i+256).toString(16).substr(1);var o=n.map((function(n){return e[n]}));return[4,7,10,13].forEach((function(n){return o.splice(n,0,"-")})),o.join("")}var y=window.SlardarLite;(E=y.config).userId||(E.userId=g()),E.deviceId||(E.deviceId=g()),E.sessionId=g(),E.viewId=E.pid+"_"+Date.now(),y.client&&y.client.set(E),y.$=t,y.s=e,y.h=o;var m=(b=E.plugins||(E.plugins={})).performance,w=void 0!==(S=b.pageview)&&S,S=void 0!==(E=b.resource)&&E,b=void 0!==(E=b.blankScreen)&&E,E=o("perf",m);m=o("report"),b=o("blankScreen",b);E.o(b.i),m.o(E.i),function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(t,r){return n.reduce((function(n,r){return r(t,n)}),r)}}(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(t,r){return t.s((function(e){return n.forEach((function(n){(n=n(t,r))&&n.u(e)}))}))}}(o("error"),(function(n){var t=void 0===(n=n.config.plugins.ajax)||n;return e((function(n){var r;t&&(a(r=XMLHttpRequest.prototype,"open",v)(),a(r,"send",l)(n),a(r,"setRequestHeader",s)())}))}),(function(n){var t=void 0===(n=n.config.plugins.fetch)||n;return e((function(n){t&&a(window,"fetch",f)(n)}))}),o("resource",S),o("route",w),(function(n){var t=n.config;return(0,n.s)((function(n){var r=t.plugins.pageview,e=t.pid;void 0===r&&e&&n([4,[e,"init"]])}))}),E,b),o("config",!!y.sf),m)(y)}();