"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8782],{72246:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var i=o(11040),s=o(9236),n=o(16926),r=o(90293),d=o(91051),l=o(21041),a=o(64537),c=o(91218),u=o(72306),h=o(92118),g=o(50218),f=o(59050),p=o(48036),m=o(74472),_=o(52053),v=o(50427),y=o(44401),x=o(12085),L=o(59384),b=o(2734),j=o(34708),E=o(57155),w=o(17769),C=o(47063),k=o(86953),D=o(40207),I=o(59245),M=o.n(I),R=o(61453),B=o(83421),H=o(8721),O=o(43039),T=o(72240),S=o(55104),V=o(4139),A=o(27918);const K=(0,V.Z)("div",{target:"ec6jhlz0"})((({theme:{direction:e},expand:t})=>[t?null:(0,A.YJ)({direction:e,marginStart:16,marginEnd:16}),t?{minWidth:628,display:"flex",flex:1,alignItems:"center"}:{width:"692px",maxWidth:"692px",padding:"24px 0"},{position:"relative"}]),"label:DivMainContainer;"),N=(0,V.Z)("div",{target:"ec6jhlz1"})({padding:"210px 0"},"label:DivErrorWrapper;"),W=(0,i.jsx)(a.Z,{width:72,height:72,fill:"rgba(128, 130, 133, 1)"},void 0),Z=(0,u.l)((0,h.r)("foryou")((function(){const{search:e,pathname:t}=(0,l.TH)();!function(){let e;e="homepage_hot_csr"===window.specialPid?"homepage_hot_csr":void 0,(0,C.a)("homepage_hot",void 0,void 0,null!=e?e:"homepage_hot");const t=(0,n.fz)(c.n);(0,d.useEffect)((()=>{e&&t.sendPV("homepage_hot_csr")}),[])}();const o=function(){const[e,t]=(0,s.b7)(m.h,{selector:e=>{var t;return null!==(t=e.foryou)&&void 0!==t?t:{list:[],loading:!1,hasMore:!0}},dependencies:[]}),{loading:o,hasMore:i}=e;return(0,d.useCallback)((()=>{!o&&i&&t.getRecommendList({key:"foryou"})}),[t,i,o])}(),a=function(){const[e]=(0,s.b7)(m.h,{selector:e=>{var t;return null!==(t=e.foryou)&&void 0!==t?t:{list:[],loading:!1,hasMore:!0,statusCode:0}},dependencies:[]}),t=(0,s.qj)(R.r),{statusCode:o,hasMore:i}=e;return(0,d.useCallback)((()=>{i||10404!==o||t.openModal({isSignup:!1,query:{redirect_url:window.location.href,enter_method:"vv_limit"}})}),[t,o,i])}(),u=(0,g.Hg)(t);(0,f.Tl)({pageType:u?101:5}),(()=>{const{search:e}=(0,l.TH)(),t=(0,s.mp)(B.f,{selector:e=>{var t,o;return Number(null!==(o=null===(t=e.currentVideo)||void 0===t?void 0:t.index)&&void 0!==o?o:0)},dependencies:[]}),o=(0,r.stringifyUrl)({url:"/foryou",query:Object.assign(Object.assign({},M()((0,r.parse)(e),"sender_device","sender_web_id","item_id")),{is_from_webapp:"v1",is_copy_url:1})},{skipNull:!0});(0,d.useEffect)((()=>{t>0&&window.history.replaceState(window.history.state,"foryou",o)}),[o,t])})();const{isInVideoFeedRedesign:h}=(0,p.y7)(),[{list:I,loading:V,statusCode:A,hasMore:Z,preloadList:q},z]=(0,s.b7)(m.h,{selector:e=>{var t;return null!==(t=e.foryou)&&void 0!==t?t:{list:[],loading:!1,statusCode:0,hasMore:!0,preloadList:[]}},dependencies:[]}),F=(0,s.mp)(_.O),P=(0,d.useMemo)((()=>(0,r.parse)(e).item_id),[e]);(0,v.h)("homepage_hot"),(0,d.useEffect)((()=>{Z||10404!==A||I.length-F.currentIndex!=1?0===A&&0===I.length&&(h||I.length-F.currentIndex<=3)&&o():a()}),[F.currentIndex,z,o,a,Z,h,P,I.length,A]),(0,d.useEffect)((()=>()=>{z.dispose$(),z.resetItemList({key:"foryou",loading:!1})}),[]);const U=(0,y.JW)();(0,d.useEffect)((()=>{U()}),[U]),(0,x.s)(null!=q?q:[]);const G=(0,d.useCallback)((()=>{z.resetItemList({key:"foryou"}),z.getRecommendList({itemId:P,key:"foryou"})}),[z,P]);(0,L.nV)();const{isGoogleBot:J}=(0,b.m7)((0,j.L)((()=>["isGoogleBot"]),[])),Q=(({iconEle:e,handleRefresh:t})=>{const{isInVideoFeedRedesign:o}=(0,p.y7)(),s=(0,H.Q)();return o?(0,i.jsx)(S.T,{onRefresh:t},void 0):(0,i.jsx)(N,{children:(0,i.jsx)(O.T,{iconElem:e,title:s("server_error_title"),desc:s("server_error_sub"),buttonText:s("refresh"),onButtonClick:t},void 0)},void 0)})({iconEle:W,handleRefresh:G}),Y=(()=>{const{isInVideoFeedRedesign:e}=(0,p.y7)();return e?(0,i.jsx)(S.S,{},void 0):(0,i.jsx)(T.H,{},void 0)})(),{shouldRenderDirectory:$,directoryLinksList:X}=(0,f.VK)();return(0,i.jsxs)(K,Object.assign({expand:h},{children:[V&&!I.length?Y:V||I.length||0===A||10404===A?I.length?h?(0,i.jsx)(D.Z,{onHitBottom:o,itemListKey:"foryou"},void 0):(0,i.jsx)(k.SL,{hideCreateTime:!0,itemList:I,loading:V,onHitBottom:o,onPageBottom:a,ssrLimitDisable:J},void 0):Y:Q,$&&(0,i.jsx)(E.t,{directoryLinksList:X},void 0),(0,i.jsx)(w.vr,{},"static-fixed")]}),void 0)})))}}]);