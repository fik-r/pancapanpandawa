(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8457],{60143:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});let r=(0,n(78030).Z)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]])},57818:(e,t,n)=>{"use strict";n.d(t,{default:()=>o.a});var r=n(50551),o=n.n(r)},50551:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(99920)._(n(40148));function o(e,t){var n;let o={};"function"==typeof e&&(o.loader=e);let a={...o,...t};return(0,r.default)({...a,modules:null==(n=a.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10912:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(55592);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},40148:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let r=n(57437),o=n(2265),a=n(10912),i=n(85025);function l(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},c=function(e){let t={...u,...e},n=(0,o.lazy)(()=>t.loader().then(l)),c=t.loading;function s(e){let l=c?(0,r.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,u=!t.ssr||!!t.loading,s=u?o.Suspense:o.Fragment,d=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(i.PreloadChunks,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(s,{...u?{fallback:l}:{},children:d})}return s.displayName="LoadableComponent",s}},85025:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return l}});let r=n(57437),o=n(54887),a=n(98011),i=n(35759);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=a.workAsyncStorage.getStore();if(void 0===n)return null;let l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;l.push(...t)}}return 0===l.length?null:(0,r.jsx)(r.Fragment,{children:l.map(e=>{let t=n.assetPrefix+"/_next/"+(0,i.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,o.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},65979:()=>{},40882:(e,t,n)=>{"use strict";n.d(t,{Fw:()=>C,fC:()=>j,wy:()=>w});var r=n(2265),o=n(78149),a=n(98324),i=n(91715),l=n(1336),u=n(1584),c=n(25171),s=n(31383),d=n(53201),f=n(57437),p="Collapsible",[v,h]=(0,a.b)(p),[g,m]=v(p),y=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:o,defaultOpen:a,disabled:l,onOpenChange:u,...s}=e,[p=!1,v]=(0,i.T)({prop:o,defaultProp:a,onChange:u});return(0,f.jsx)(g,{scope:n,disabled:l,contentId:(0,d.M)(),open:p,onOpenToggle:r.useCallback(()=>v(e=>!e),[v]),children:(0,f.jsx)(c.WV.div,{"data-state":R(p),"data-disabled":l?"":void 0,...s,ref:t})})});y.displayName=p;var b="CollapsibleTrigger",w=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,a=m(b,n);return(0,f.jsx)(c.WV.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":R(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...r,ref:t,onClick:(0,o.M)(e.onClick,a.onOpenToggle)})});w.displayName=b;var x="CollapsibleContent",C=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=m(x,e.__scopeCollapsible);return(0,f.jsx)(s.z,{present:n||o.open,children:e=>{let{present:n}=e;return(0,f.jsx)(E,{...r,ref:t,present:n})}})});C.displayName=x;var E=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:o,children:a,...i}=e,s=m(x,n),[d,p]=r.useState(o),v=r.useRef(null),h=(0,u.e)(t,v),g=r.useRef(0),y=g.current,b=r.useRef(0),w=b.current,C=s.open||d,E=r.useRef(C),j=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>E.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.b)(()=>{let e=v.current;if(e){j.current=j.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();g.current=t.height,b.current=t.width,E.current||(e.style.transitionDuration=j.current.transitionDuration,e.style.animationName=j.current.animationName),p(o)}},[s.open,o]),(0,f.jsx)(c.WV.div,{"data-state":R(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!C,...i,ref:h,style:{"--radix-collapsible-content-height":y?"".concat(y,"px"):void 0,"--radix-collapsible-content-width":w?"".concat(w,"px"):void 0,...e.style},children:C&&a})});function R(e){return e?"open":"closed"}var j=y},24717:(e,t,n)=>{"use strict";n.d(t,{x8:()=>eX,VY:()=>eV,dk:()=>eY,aV:()=>eB,h_:()=>eA,fC:()=>eF,Dx:()=>ez,xz:()=>eW,jm:()=>eS,p8:()=>el});var r,o=n(2265),a=n(78149),i=n(1584),l=n(98324),u=n(53201),c=n(91715),s=n(53938),d=n(80467),f=n(56935),p=n(31383),v=n(25171),h=n(20589),g=n(11735),m="right-scroll-bar-position",y="width-before-scroll-bar";function b(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var w="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,x=new WeakMap;function C(e){return e}var E=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=C),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=(0,g.pi)({async:!0,ssr:!1},e),o}(),R=function(){},j=o.forwardRef(function(e,t){var n,r,a,i,l=o.useRef(null),u=o.useState({onScrollCapture:R,onWheelCapture:R,onTouchMoveCapture:R}),c=u[0],s=u[1],d=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,h=e.enabled,m=e.shards,y=e.sideCar,C=e.noIsolation,j=e.inert,M=e.allowPinchZoom,T=e.as,k=e.gapMode,D=(0,g._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=(n=[l,t],r=function(e){return n.forEach(function(t){return b(t,e)})},(a=(0,o.useState)(function(){return{value:null,callback:r,facade:{get current(){return a.value},set current(value){var e=a.value;e!==value&&(a.value=value,a.callback(value,e))}}}})[0]).callback=r,i=a.facade,w(function(){var e=x.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||b(e,null)}),r.forEach(function(e){t.has(e)||b(e,o)})}x.set(i,n)},[n]),i),N=(0,g.pi)((0,g.pi)({},D),c);return o.createElement(o.Fragment,null,h&&o.createElement(y,{sideCar:E,removeScrollBar:v,shards:m,noIsolation:C,inert:j,setCallbacks:s,allowPinchZoom:!!M,lockRef:l,gapMode:k}),d?o.cloneElement(o.Children.only(f),(0,g.pi)((0,g.pi)({},N),{ref:P})):o.createElement(void 0===T?"div":T,(0,g.pi)({},N,{className:p,ref:P}),f))});j.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},j.classNames={fullWidth:y,zeroRight:m};var M=function(e){var t=e.sideCar,n=(0,g._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return o.createElement(r,(0,g.pi)({},n))};M.isSideCarExport=!0;var T=n(5905),k=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=(0,T.V)();return t&&e.setAttribute("nonce",t),e}())){var r,o;(r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},D=function(){var e=k();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},P=function(){var e=D();return function(t){return e(t.styles,t.dynamic),null}},N={left:0,top:0,right:0,gap:0},_=function(e){return parseInt(e||"",10)||0},S=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[_(n),_(r),_(o)]},L=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return N;var t=S(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},I=P(),O="data-scroll-locked",F=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(O,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(m," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(y," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(m," .").concat(m," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(y," .").concat(y," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(O,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},W=function(){var e=parseInt(document.body.getAttribute(O)||"0",10);return isFinite(e)?e:0},A=function(){o.useEffect(function(){return document.body.setAttribute(O,(W()+1).toString()),function(){var e=W()-1;e<=0?document.body.removeAttribute(O):document.body.setAttribute(O,e.toString())}},[])},B=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r;A();var i=o.useMemo(function(){return L(a)},[a]);return o.createElement(I,{styles:F(i,!t,a,n?"":"!important")})},V=!1;if("undefined"!=typeof window)try{var z=Object.defineProperty({},"passive",{get:function(){return V=!0,!0}});window.addEventListener("test",z,z),window.removeEventListener("test",z,z)}catch(e){V=!1}var Y=!!V&&{passive:!1},X=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},Z=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),H(e,r)){var o=q(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},H=function(e,t){return"v"===e?X(t,"overflowY"):X(t,"overflowX")},q=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},K=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),l=i*r,u=n.target,c=t.contains(u),s=!1,d=l>0,f=0,p=0;do{var v=q(e,u),h=v[0],g=v[1]-v[2]-i*h;(h||g)&&H(e,u)&&(f+=g,p+=h),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!c&&u!==document.body||c&&(t.contains(u)||t===u));return d&&(o&&1>Math.abs(f)||!o&&l>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-l>p)&&(s=!0),s},U=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},G=function(e){return[e.deltaX,e.deltaY]},J=function(e){return e&&"current"in e?e.current:e},Q=0,$=[];let ee=(r=function(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),a=o.useState(Q++)[0],i=o.useState(P)[0],l=o.useRef(e);o.useEffect(function(){l.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=(0,g.ev)([e.lockRef.current],(e.shards||[]).map(J),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!l.current.allowPinchZoom;var o,a=U(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(u)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=Z(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=Z(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||c)&&(r.current=o),!o)return!0;var p=r.current||o;return K(p,t,e,"h"===p?u:c,!0)},[]),c=o.useCallback(function(e){if($.length&&$[$.length-1]===i){var n="deltaY"in e?G(e):U(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(l.current.shards||[]).map(J).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=o.useCallback(function(e){n.current=U(e),r.current=void 0},[]),f=o.useCallback(function(t){s(t.type,G(t),t.target,u(t,e.lockRef.current))},[]),p=o.useCallback(function(t){s(t.type,U(t),t.target,u(t,e.lockRef.current))},[]);o.useEffect(function(){return $.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,Y),document.addEventListener("touchmove",c,Y),document.addEventListener("touchstart",d,Y),function(){$=$.filter(function(e){return e!==i}),document.removeEventListener("wheel",c,Y),document.removeEventListener("touchmove",c,Y),document.removeEventListener("touchstart",d,Y)}},[]);var v=e.removeScrollBar,h=e.inert;return o.createElement(o.Fragment,null,h?o.createElement(i,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,v?o.createElement(B,{gapMode:e.gapMode}):null)},E.useMedium(r),M);var et=o.forwardRef(function(e,t){return o.createElement(j,(0,g.pi)({},e,{ref:t,sideCar:ee}))});et.classNames=j.classNames;var en=n(78369),er=n(71538),eo=n(57437),ea="Dialog",[ei,el]=(0,l.b)(ea),[eu,ec]=ei(ea),es=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:l=!0}=e,s=o.useRef(null),d=o.useRef(null),[f=!1,p]=(0,c.T)({prop:r,defaultProp:a,onChange:i});return(0,eo.jsx)(eu,{scope:t,triggerRef:s,contentRef:d,contentId:(0,u.M)(),titleId:(0,u.M)(),descriptionId:(0,u.M)(),open:f,onOpenChange:p,onOpenToggle:o.useCallback(()=>p(e=>!e),[p]),modal:l,children:n})};es.displayName=ea;var ed="DialogTrigger",ef=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ec(ed,n),l=(0,i.e)(t,o.triggerRef);return(0,eo.jsx)(v.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eN(o.open),...r,ref:l,onClick:(0,a.M)(e.onClick,o.onOpenToggle)})});ef.displayName=ed;var ep="DialogPortal",[ev,eh]=ei(ep,{forceMount:void 0}),eg=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,i=ec(ep,t);return(0,eo.jsx)(ev,{scope:t,forceMount:n,children:o.Children.map(r,e=>(0,eo.jsx)(p.z,{present:n||i.open,children:(0,eo.jsx)(f.h,{asChild:!0,container:a,children:e})}))})};eg.displayName=ep;var em="DialogOverlay",ey=o.forwardRef((e,t)=>{let n=eh(em,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ec(em,e.__scopeDialog);return a.modal?(0,eo.jsx)(p.z,{present:r||a.open,children:(0,eo.jsx)(eb,{...o,ref:t})}):null});ey.displayName=em;var eb=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ec(em,n);return(0,eo.jsx)(et,{as:er.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,eo.jsx)(v.WV.div,{"data-state":eN(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),ew="DialogContent",ex=o.forwardRef((e,t)=>{let n=eh(ew,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ec(ew,e.__scopeDialog);return(0,eo.jsx)(p.z,{present:r||a.open,children:a.modal?(0,eo.jsx)(eC,{...o,ref:t}):(0,eo.jsx)(eE,{...o,ref:t})})});ex.displayName=ew;var eC=o.forwardRef((e,t)=>{let n=ec(ew,e.__scopeDialog),r=o.useRef(null),l=(0,i.e)(t,n.contentRef,r);return o.useEffect(()=>{let e=r.current;if(e)return(0,en.Ry)(e)},[]),(0,eo.jsx)(eR,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault())})}),eE=o.forwardRef((e,t)=>{let n=ec(ew,e.__scopeDialog),r=o.useRef(!1),a=o.useRef(!1);return(0,eo.jsx)(eR,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,i;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var o,i;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),eR=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:l,...u}=e,c=ec(ew,n),f=o.useRef(null),p=(0,i.e)(t,f);return(0,h.EW)(),(0,eo.jsxs)(eo.Fragment,{children:[(0,eo.jsx)(d.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:l,children:(0,eo.jsx)(s.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":eN(c.open),...u,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),(0,eo.jsxs)(eo.Fragment,{children:[(0,eo.jsx)(eI,{titleId:c.titleId}),(0,eo.jsx)(eO,{contentRef:f,descriptionId:c.descriptionId})]})]})}),ej="DialogTitle",eM=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ec(ej,n);return(0,eo.jsx)(v.WV.h2,{id:o.titleId,...r,ref:t})});eM.displayName=ej;var eT="DialogDescription",ek=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ec(eT,n);return(0,eo.jsx)(v.WV.p,{id:o.descriptionId,...r,ref:t})});ek.displayName=eT;var eD="DialogClose",eP=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ec(eD,n);return(0,eo.jsx)(v.WV.button,{type:"button",...r,ref:t,onClick:(0,a.M)(e.onClick,()=>o.onOpenChange(!1))})});function eN(e){return e?"open":"closed"}eP.displayName=eD;var e_="DialogTitleWarning",[eS,eL]=(0,l.k)(e_,{contentName:ew,titleName:ej,docsSlug:"dialog"}),eI=e=>{let{titleId:t}=e,n=eL(e_),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},eO=e=>{let{contentRef:t,descriptionId:n}=e,r=eL("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return o.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},eF=es,eW=ef,eA=eg,eB=ey,eV=ex,ez=eM,eY=ek,eX=eP},38364:(e,t,n)=>{"use strict";n.d(t,{_:()=>i,f:()=>l});var r=n(2265),o=n(25171),a=n(57437),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=i},48484:(e,t,n)=>{"use strict";n.d(t,{f:()=>c});var r=n(2265),o=n(25171),a=n(57437),i="horizontal",l=["horizontal","vertical"],u=r.forwardRef((e,t)=>{let{decorative:n,orientation:r=i,...u}=e,c=l.includes(r)?r:i;return(0,a.jsx)(o.WV.div,{"data-orientation":c,...n?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...u,ref:t})});u.displayName="Separator";var c=u},27071:(e,t,n)=>{"use strict";n.d(t,{VY:()=>z,fC:()=>B,xz:()=>V,zt:()=>A});var r=n(2265),o=n(78149),a=n(1584),i=n(98324),l=n(53938),u=n(53201),c=n(41893),s=(n(56935),n(31383)),d=n(25171),f=n(71538),p=n(91715),v=n(31725),h=n(57437),[g,m]=(0,i.b)("Tooltip",[c.D7]),y=(0,c.D7)(),b="TooltipProvider",w="tooltip.open",[x,C]=g(b),E=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:a=!1,children:i}=e,[l,u]=r.useState(!0),c=r.useRef(!1),s=r.useRef(0);return r.useEffect(()=>{let e=s.current;return()=>window.clearTimeout(e)},[]),(0,h.jsx)(x,{scope:t,isOpenDelayed:l,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(s.current),u(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(()=>u(!0),o)},[o]),isPointerInTransitRef:c,onPointerInTransitChange:r.useCallback(e=>{c.current=e},[]),disableHoverableContent:a,children:i})};E.displayName=b;var R="Tooltip",[j,M]=g(R),T=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:a=!1,onOpenChange:i,disableHoverableContent:l,delayDuration:s}=e,d=C(R,e.__scopeTooltip),f=y(t),[v,g]=r.useState(null),m=(0,u.M)(),b=r.useRef(0),x=null!=l?l:d.disableHoverableContent,E=null!=s?s:d.delayDuration,M=r.useRef(!1),[T=!1,k]=(0,p.T)({prop:o,defaultProp:a,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(w))):d.onClose(),null==i||i(e)}}),D=r.useMemo(()=>T?M.current?"delayed-open":"instant-open":"closed",[T]),P=r.useCallback(()=>{window.clearTimeout(b.current),b.current=0,M.current=!1,k(!0)},[k]),N=r.useCallback(()=>{window.clearTimeout(b.current),b.current=0,k(!1)},[k]),_=r.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{M.current=!0,k(!0),b.current=0},E)},[E,k]);return r.useEffect(()=>()=>{b.current&&(window.clearTimeout(b.current),b.current=0)},[]),(0,h.jsx)(c.fC,{...f,children:(0,h.jsx)(j,{scope:t,contentId:m,open:T,stateAttribute:D,trigger:v,onTriggerChange:g,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?_():P()},[d.isOpenDelayed,_,P]),onTriggerLeave:r.useCallback(()=>{x?N():(window.clearTimeout(b.current),b.current=0)},[N,x]),onOpen:P,onClose:N,disableHoverableContent:x,children:n})})};T.displayName=R;var k="TooltipTrigger",D=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...i}=e,l=M(k,n),u=C(k,n),s=y(n),f=r.useRef(null),p=(0,a.e)(t,f,l.onTriggerChange),v=r.useRef(!1),g=r.useRef(!1),m=r.useCallback(()=>v.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),(0,h.jsx)(c.ee,{asChild:!0,...s,children:(0,h.jsx)(d.WV.button,{"aria-describedby":l.open?l.contentId:void 0,"data-state":l.stateAttribute,...i,ref:p,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"===e.pointerType||g.current||u.isPointerInTransitRef.current||(l.onTriggerEnter(),g.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{l.onTriggerLeave(),g.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{v.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{v.current||l.onOpen()}),onBlur:(0,o.M)(e.onBlur,l.onClose),onClick:(0,o.M)(e.onClick,l.onClose)})})});D.displayName=k;var[P,N]=g("TooltipPortal",{forceMount:void 0}),_="TooltipContent",S=r.forwardRef((e,t)=>{let n=N(_,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...a}=e,i=M(_,e.__scopeTooltip);return(0,h.jsx)(s.z,{present:r||i.open,children:i.disableHoverableContent?(0,h.jsx)(F,{side:o,...a,ref:t}):(0,h.jsx)(L,{side:o,...a,ref:t})})}),L=r.forwardRef((e,t)=>{let n=M(_,e.__scopeTooltip),o=C(_,e.__scopeTooltip),i=r.useRef(null),l=(0,a.e)(t,i),[u,c]=r.useState(null),{trigger:s,onClose:d}=n,f=i.current,{onPointerInTransitChange:p}=o,v=r.useCallback(()=>{c(null),p(!1)},[p]),g=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,o,a)){case a:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());c(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),p(!0)},[p]);return r.useEffect(()=>()=>v(),[v]),r.useEffect(()=>{if(s&&f){let e=e=>g(e,f),t=e=>g(e,s);return s.addEventListener("pointerleave",e),f.addEventListener("pointerleave",t),()=>{s.removeEventListener("pointerleave",e),f.removeEventListener("pointerleave",t)}}},[s,f,g,v]),r.useEffect(()=>{if(u){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==s?void 0:s.contains(t))||(null==f?void 0:f.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let i=t[e].x,l=t[e].y,u=t[a].x,c=t[a].y;l>r!=c>r&&n<(u-i)*(r-l)/(c-l)+i&&(o=!o)}return o}(n,u);r?v():o&&(v(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[s,f,u,d,v]),(0,h.jsx)(F,{...e,ref:l})}),[I,O]=g(R,{isInside:!1}),F=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":a,onEscapeKeyDown:i,onPointerDownOutside:u,...s}=e,d=M(_,n),p=y(n),{onClose:g}=d;return r.useEffect(()=>(document.addEventListener(w,g),()=>document.removeEventListener(w,g)),[g]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&g()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,g]),(0,h.jsx)(l.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:g,children:(0,h.jsxs)(c.VY,{"data-state":d.stateAttribute,...p,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,h.jsx)(f.A4,{children:o}),(0,h.jsx)(I,{scope:n,isInside:!0,children:(0,h.jsx)(v.f,{id:d.contentId,role:"tooltip",children:a||o})})]})})});S.displayName=_;var W="TooltipArrow";r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=y(n);return O(W,n).isInside?null:(0,h.jsx)(c.Eh,{...o,...r,ref:t})}).displayName=W;var A=E,B=T,V=D,z=S}}]);