(()=>{var e={};e.id=1931,e.ids=[1931],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},84770:e=>{"use strict";e.exports=require("crypto")},92048:e=>{"use strict";e.exports=require("fs")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},23578:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>o});var r=a(49442),s=a(10042),l=a(48190),n=a.n(l),i=a(63289),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);a.d(t,d);let o=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9894)),"E:\\Works\\Projects\\Web\\pandawa\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,50934)),"E:\\Works\\Projects\\Web\\pandawa\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\Works\\Projects\\Web\\pandawa\\src\\app\\page.js"],u={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},14467:(e,t,a)=>{"use strict";a.r(t),a.d(t,{"001ec17a9220e115ec3f334738866a5ea6de164619":()=>c,"40022f1651c85f33455275aab28493bd09a3621b58":()=>o,"40d7e5cea661ef937caaffcef0448103624d4f686e":()=>d});var r=a(63722);a(20453);var s=a(11185),l=a.n(s);let n=new(l()).Schema({name:{type:String,required:!1,default:""},companyEmail:{type:String,required:!1,default:""},phoneNumber:{type:String,required:!1,default:""},message:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),i=l().models.ContactForm||l().model("ContactForm",n);async function d(e){try{return await i.create(e),!0}catch(e){return!1}}async function o(e){try{return await i.deleteOne({_id:e}),!0}catch(e){return!1}}async function c(){return(await i.find().sort({createdAt:1}).select("_id -__v").lean()).map(e=>({...e,_id:e._id.toString()}))}(0,a(46309).h)([d,o,c]),(0,r.j)(d,"40d7e5cea661ef937caaffcef0448103624d4f686e",null),(0,r.j)(o,"40022f1651c85f33455275aab28493bd09a3621b58",null),(0,r.j)(c,"001ec17a9220e115ec3f334738866a5ea6de164619",null)},77120:(e,t,a)=>{"use strict";a.r(t),a.d(t,{"002ca469f8629a2a4e4596c41f7ad1286d13a6c1c7":()=>o.Bd,"00487840da3317b3cf58f1bbf9d54ad5567293d458":()=>r.fl,"005b2fc439d6dc78b9b95a92a3b21ad90ee7c1d9a9":()=>i.GJ,"0067a32fd7bebe3955fdb99f412e56c9ab7c6df4b8":()=>c.we,"008086b79417f5e8b4d3a2e54d35d6cf1e33b4b6c4":()=>l.F0,"009b0781247554a75d216c836bae8e12822e3638b8":()=>d.BZ,"00f2ddac19b4e3680e3521deaa3cf18c1a8dcafec6":()=>n.U2,"00f955cf59d66fbbcc2be0d240705f294df0c810d7":()=>u.wi,"40003797b0ff6c1da270eb1e6caf7178a6f3269016":()=>u.er,"40042eccafeb29c223268aa94acdb3564a5281f80b":()=>r.lX,"401b6e187e32411cd0752cce484b93407e10551f7b":()=>r.ki,"403d968e1ebce7ae8160e17c32e6d6ba0daf161f7b":()=>r.Gg,"404dbd3f423c22c44d56c3b13b5359925a21b97074":()=>s.I,"40cfb08fa71a40c8d4e8d73468b83b3f287adbed45":()=>n.wo,"40d3061f7fd731ae8f142669c8605b7478b835d8ff":()=>r.RX,"40d6f7d9aef486330d57659038ae82e8b3ece7a67e":()=>l.Cj,"40dd0835a43f22340b7ce6e61984455857d3a9b4a2":()=>c.Qz,"40e1dcc8aad67fa780f6800810f2988cac443a5abe":()=>r.cd,"40e2107d669bb930f6686604c21ade8dcf22b49904":()=>o.S0,"40eaf190d7b869bb23d0b6e24a2b878f03951ec62e":()=>d.IF,"40eb614e5d0bf39673f1e07f83982ebed124b691df":()=>i.vn,"40fd772f7ff854ee5a895346c498af595368e8969c":()=>r.vz,"60064a2f6433ef62f2022def337702b10408476b98":()=>c.pL,"600bdea5e13a1dec285514e403f3127c11ebe1646d":()=>i.DZ,"60495804de149b5be6e805e7d330e54d982cf551bb":()=>o.hc,"60583c1cedeccf59c85682ca2baaf3756676999a17":()=>n.Ae,"6073ea05b75d414a0349eec8da4125c443f238db2e":()=>u.f3,"60872eeb30642aac896e5ff403ff84fd6bb7e95394":()=>d.Zi,"60dae4fbd4fe25df1945590a647098ff798c33e1a5":()=>l.r0});var r=a(4567),s=a(68687),l=a(81171),n=a(56314),i=a(6866),d=a(8834),o=a(78453),c=a(67100),u=a(56196)},12757:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,60903,23)),Promise.resolve().then(a.t.bind(a,90821,23)),Promise.resolve().then(a.bind(a,81684)),Promise.resolve().then(a.bind(a,78257)),Promise.resolve().then(a.bind(a,40368)),Promise.resolve().then(a.bind(a,29710))},58770:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,62704,23)),Promise.resolve().then(a.t.bind(a,73510,23)),Promise.resolve().then(a.bind(a,75171)),Promise.resolve().then(a.bind(a,59910)),Promise.resolve().then(a.bind(a,53855)),Promise.resolve().then(a.bind(a,25443))},75171:(e,t,a)=>{"use strict";a.d(t,{default:()=>f});var r=a(20149),s=a(58430),l=a(75175),n=a(75469),i=a(404),d=a(85144),o=a(8412);let c=(0,o.createServerReference)("40d7e5cea661ef937caaffcef0448103624d4f686e",o.callServer,void 0,o.findSourceMapURL,"createContactForm");var u=a(63606),m=a(73310);let f=()=>{let{toast:e}=(0,d.pm)(),[t,a]=(0,u.useState)(!1),[o,f]=(0,u.useState)({name:"",companyEmail:"",phoneNumber:"",message:""});function p(e){let{id:t,value:a}=e.target;f({...o,[t]:a})}async function g(){let t={},r=!0;if(Object.keys(o).forEach(e=>{"phoneNumber"!==e&&""===o[e]&&(t[e]=!0,r=!1)}),!r){e({variant:"destructive",description:"Fill required form!"});return}a(!0);let s=await c(o);a(!1),e({variant:s?"primary":"destructive",description:s?"Success":"Error"})}return(0,r.jsxs)("div",{className:"flex-grow flex flex-col gap-y-[1rem] lg:gap-y-[2rem]",children:[(0,r.jsx)(s.I,{id:"name",value:o.name,type:"text",placeholder:"Input name here",className:"p-text-body-md rounded-lg",onChange:p}),(0,r.jsx)(s.I,{id:"companyEmail",value:o.companyEmail,type:"email",placeholder:"Input company email here",className:"p-text-body-md rounded-lg",onChange:p}),(0,r.jsx)(s.I,{id:"phoneNumber",type:"number",value:o.phoneNumber,placeholder:"Input phone number here",className:"p-text-body-md rounded-lg",onChange:p}),(0,r.jsx)(l.g,{id:"message",type:"text",value:o.message,placeholder:"Input message here",className:"p-text-body-md rounded-lg",onChange:p}),(0,r.jsxs)("span",{className:"p-text-body-sm lg:p-text-body-md text-[#343434]",children:["By completing this form, you agree that the information provided may be stored and handled in accordance with our ",(0,r.jsx)("u",{className:"cursor-pointer",children:"Privacy Policy"}),"."]}),(0,r.jsx)(n.z,{className:"w-[9.125rem] lg:w-[13.75rem] h-[3.188rem] lg:h-[4.188rem] p-text-body-md font-semibold rounded-xl lg:rounded-lg",onClick:g,children:"Send Inquiry"}),(0,r.jsx)(i.x,{}),(0,r.jsx)(m.Z,{loading:t})]})}},73310:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(20149);function s({loading:e}){return e&&(0,r.jsx)("div",{className:"loading-overlay",children:(0,r.jsx)("div",{className:"spinner"})})}},25443:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Carousel:()=>m,CarouselContent:()=>f,CarouselItem:()=>p,CarouselNext:()=>x,CarouselPrevious:()=>g});var r=a(20149),s=a(63606),l=a(53819),n=a(93579),i=a(10621),d=a(88346),o=a(75469);let c=s.createContext(null);function u(){let e=s.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=s.forwardRef(({orientation:e="horizontal",opts:t,setApi:a,plugins:n,className:i,children:o,...u},m)=>{let[f,p]=(0,l.Z)({...t,axis:"horizontal"===e?"x":"y"},n),[g,x]=s.useState(!1),[b,h]=s.useState(!1),y=s.useCallback(e=>{e&&(x(e.canScrollPrev()),h(e.canScrollNext()))},[]),v=s.useCallback(()=>{p?.scrollPrev()},[p]),w=s.useCallback(()=>{p?.scrollNext()},[p]),j=s.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),v()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[v,w]);return s.useEffect(()=>{p&&a&&a(p)},[p,a]),s.useEffect(()=>{if(p)return y(p),p.on("reInit",y),p.on("select",y),()=>{p?.off("select",y)}},[p,y]),(0,r.jsx)(c.Provider,{value:{carouselRef:f,api:p,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:v,scrollNext:w,canScrollPrev:g,canScrollNext:b},children:(0,r.jsx)("div",{ref:m,onKeyDownCapture:j,className:(0,d.cn)("relative",i),role:"region","aria-roledescription":"carousel",...u,children:o})})});m.displayName="Carousel";let f=s.forwardRef(({className:e,...t},a)=>{let{carouselRef:s,orientation:l}=u();return(0,r.jsx)("div",{ref:s,className:"overflow-hidden",children:(0,r.jsx)("div",{ref:a,className:(0,d.cn)("flex","horizontal"===l?"-ml-4":"-mt-4 flex-col",e),...t})})});f.displayName="CarouselContent";let p=s.forwardRef(({className:e,...t},a)=>{let{orientation:s}=u();return(0,r.jsx)("div",{ref:a,role:"group","aria-roledescription":"slide",className:(0,d.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===s?"pl-4":"pt-4",e),...t})});p.displayName="CarouselItem";let g=s.forwardRef(({className:e,variant:t="outline",size:a="icon",...s},l)=>{let{orientation:i,scrollPrev:c,canScrollPrev:m}=u();return(0,r.jsxs)(o.z,{ref:l,variant:t,size:a,className:(0,d.cn)("absolute  h-8 w-8 rounded-full","horizontal"===i?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!m,onClick:c,...s,children:[(0,r.jsx)(n.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});g.displayName="CarouselPrevious";let x=s.forwardRef(({className:e,variant:t="outline",size:a="icon",...s},l)=>{let{orientation:n,scrollNext:c,canScrollNext:m}=u();return(0,r.jsxs)(o.z,{ref:l,variant:t,size:a,className:(0,d.cn)("absolute h-8 w-8 rounded-full","horizontal"===n?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!m,onClick:c,...s,children:[(0,r.jsx)(i.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Next slide"})]})});x.displayName="CarouselNext"},58430:(e,t,a)=>{"use strict";a.d(t,{I:()=>n});var r=a(20149),s=a(63606),l=a(88346);let n=s.forwardRef(({className:e,type:t,...a},s)=>(0,r.jsx)("input",{type:t,className:(0,l.cn)("flex h-10 w-full rounded-md border border-[#ACAAAA] bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#BFBFBF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...a}));n.displayName="Input"},75175:(e,t,a)=>{"use strict";a.d(t,{g:()=>n});var r=a(20149),s=a(63606),l=a(88346);let n=s.forwardRef(({className:e,...t},a)=>(0,r.jsx)("textarea",{className:(0,l.cn)("flex min-h-[80px] w-full rounded-md border border-[#ACAAAA] bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-[#BFBFBF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));n.displayName="Textarea"},404:(e,t,a)=>{"use strict";a.d(t,{x:()=>b});var r=a(20149),s=a(85144),l=a(63606),n=a(13920),i=a(48917),d=a(54521),o=a(88346);let c=n.zt,u=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(n.l_,{ref:a,className:(0,o.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));u.displayName=n.l_.displayName;let m=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",primary:"green-500 group border-green-500 bg-green-500 text-white",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),f=l.forwardRef(({className:e,variant:t,...a},s)=>(0,r.jsx)(n.fC,{ref:s,className:(0,o.cn)(m({variant:t}),e),...a}));f.displayName=n.fC.displayName,l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(n.aU,{ref:a,className:(0,o.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.aU.displayName;let p=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(n.x8,{ref:a,className:(0,o.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:(0,r.jsx)(d.Z,{className:"h-4 w-4"})}));p.displayName=n.x8.displayName;let g=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(n.Dx,{ref:a,className:(0,o.cn)("text-sm font-semibold",e),...t}));g.displayName=n.Dx.displayName;let x=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(n.dk,{ref:a,className:(0,o.cn)("text-sm opacity-90",e),...t}));function b(){let{toasts:e}=(0,s.pm)();return(0,r.jsxs)(c,{children:[e.map(function({id:e,title:t,description:a,action:s,...l}){return(0,r.jsxs)(f,{...l,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[t&&(0,r.jsx)(g,{children:t}),a&&(0,r.jsx)(x,{children:a})]}),s,(0,r.jsx)(p,{})]},e)}),(0,r.jsx)(u,{})]})}x.displayName=n.dk.displayName},85144:(e,t,a)=>{"use strict";a.d(t,{pm:()=>m});var r=a(63606);let s=0,l=new Map,n=e=>{if(l.has(e))return;let t=setTimeout(()=>{l.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);l.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?n(a):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],o={toasts:[]};function c(e){o=i(o,e),d.forEach(e=>{e(o)})}function u({...e}){let t=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||a()}}}),{id:t,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function m(){let[e,t]=r.useState(o);return r.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},4284:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(66833);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:i="",children:d,iconNode:o,...c},u)=>(0,r.createElement)("svg",{ref:u,...n,width:t,height:t,stroke:e,strokeWidth:s?24*Number(a)/Number(t):a,className:l("lucide",i),...c},[...o.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(d)?d:[d]])),d=((e,t)=>{let a=(0,r.forwardRef)(({className:a,...n},d)=>(0,r.createElement)(i,{ref:d,iconNode:t,className:l(`lucide-${s(e)}`,a),...n}));return a.displayName=`${e}`,a})("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},23496:(e,t,a)=>{"use strict";a.d(t,{default:()=>s.a});var r=a(90821),s=a.n(r)},90821:(e,t,a)=>{let{createProxy:r}=a(16592);e.exports=r("E:\\Works\\Projects\\Web\\pandawa\\node_modules\\next\\dist\\client\\link.js")},9894:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q,dynamic:()=>I});var r=a(47705),s=a(78827),l=a(40368),n=a(76217),i=a(14207),d=a(4284),o=a(71908),c=a(23496);let u=({data:e})=>{let t=({data:e})=>(0,r.jsxs)("div",{className:"flex flex-col w-full lg:h-[21.125rem] border-[1px] border-primary rounded-[1rem] bg-ghost p-[1rem] lg:p-[1.5rem]",children:[(0,r.jsx)("div",{className:"w-[1.5rem] h-[1.5rem] max-w-[1.5rem] max-h-[1.5rem] lg:w-[2rem] lg:h-[2rem] relative mb-[0.75rem] lg:mb-[1rem]",children:(0,r.jsx)(n.default,{src:o._+e.image,layout:"fill",alt:"ic_services"})}),(0,r.jsx)("span",{className:"p-text-heading-sm lg:p-text-heading-lg text-dune mb-[0.25rem] lg:mb-[0.75rem] line-clamp-1",children:e.title}),(0,r.jsx)("span",{className:"p-text-body-sm lg:p-text-body-md leading-[1.25rem] lg:leading-[1.875rem] text-dune mb-[1rem] lg:mb-[1.5rem] text-carbon line-clamp-3 lg:line-clamp-4",children:e.description}),(0,r.jsx)(c.default,{href:"/services?q="+e.title,children:(0,r.jsxs)(i.z,{className:"w-[8.188rem] rounded-full p-text-body-sm font-semibold",children:["See details",(0,r.jsx)(d.Z,{className:"h-4 w-4"})]})})]});return(0,r.jsxs)("div",{className:"px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem] flex flex-col",children:[(0,r.jsx)("span",{className:"font-bold p-text-heading-sm lg:p-text-display-lg text-dune",children:e.title}),(0,r.jsx)("span",{className:"p-text-body-sm lg:p-text-body-md text-carbon mt-[1rem] lg:mt-[1.5rem] mb-[1.5rem] lg:mb-[3rem] leading-[1.5rem] lg:leading-[1.875rem]",children:e.description}),(0,r.jsx)("div",{className:"flex flex-col gap-y-[1rem] lg:grid lg:grid-cols-4 lg:gap-y-[0px] lg:gap-[1.5rem] overflow-x-auto",children:e.items.map((e,a)=>(0,r.jsx)(t,{data:e},a))})]})},m=({data:e})=>(0,r.jsxs)("div",{className:"flex flex-col px-[1.5rem] mt-[2.5rem] lg:mt-[0px] mb-[3.063rem] lg:px-[3.75rem] lg:mb-[6.25rem]",children:[(0,r.jsx)("span",{className:"text-center text-carbon p-text-body-md lg:p-text-heading-sm lg:h-[4rem] font-medium mb-[0.75rem] lg:mb-[0px]",children:e?.title}),(0,r.jsx)("div",{className:"grid grid-cols-2 gap-y-[0.313rem] gap-x-[0.75rem] lg:flex lg:flex-row lg:gap-x-[1.75rem] justify-center",children:e?.items?.map((e,t)=>r.jsx(n.default,{src:o._+e.image,width:240,height:100,className:"max-h-[100px]",alt:e.title},t))})]}),f=({data:e})=>{let t=({text:e})=>(0,r.jsx)("div",{className:"w-full lg:line-clamp-1 rounded-[16px] border border-[#3C61AC] bg-[rgba(25,66,149,0.5)] p-[1rem] text-white p-text-body-sm leading-[1.25rem] lg:p-text-body-lg",children:e});return(0,r.jsxs)("div",{className:"px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem] bg-gradient-1 flex flex-col lg:flex-row lg:gap-x-[3rem]",children:[(0,r.jsxs)("div",{className:"relative w-full lg:w-[23.938rem] h-[12.5rem] lg:h-[30.5rem]",children:[(0,r.jsx)(n.default,{src:o._+e?.image,layout:"fill",quality:100,objectFit:"cover",alt:"img_whyus",className:"rounded-xl"}),(0,r.jsx)("div",{className:"absolute bg-black opacity-20 inset-0 z-[1] rounded-xl"})]}),(0,r.jsxs)("div",{className:"flex-grow flex flex-col gap-y-[0.75rem] lg:gap-y-[1rem] pb-[0px] lg:pb-[1.438rem] pt-[2rem] lg:pt-[0.688rem]",children:[(0,r.jsx)("span",{className:"text-white p-text-heading-sm lg:p-text-display-lg",children:e?.heading}),e?.items.map((e,a)=>r.jsx(t,{text:`${a+1}. ${e.text}`},a))]})]})};var p=a(78257);let g=({data:e})=>{let t=({data:e})=>(0,r.jsxs)("div",{className:"flex flex-row gap-x-[1.5rem] lg:gap-x-[2rem]",children:[(0,r.jsx)("div",{className:"w-[5rem] h-[5rem] lg:w-[8.75rem] lg:h-[8.75rem] relative",children:(0,r.jsx)(n.default,{src:o._+e?.image,layout:"fill",quality:100,alt:e?.title})}),(0,r.jsxs)("div",{className:"flex flex-col gap-y-[0.5rem] lg:gap-y-[0.75rem] w-fit lg:w-[19.313rem]",children:[(0,r.jsx)("span",{className:"text-dune font-semibold p-text-body-md lg:p-text-heading-lg line-clamp-1",children:e?.title}),(0,r.jsx)("span",{className:"text-carbon p-text-body-sm lg:p-text-body-md line-clamp-5 lg:line-clamp-3 leading-[1.25rem] lg:leading-[1.875rem]",children:e?.description})]})]});return(0,r.jsxs)("div",{className:"flex flex-col mb-[0.688rem] lg:mb-[0px] py-[2.5rem] lg:py-[6.25rem] px-[1.5rem] lg:px-[3.75rem]",children:[(0,r.jsx)("div",{className:"h-[4rem] lg:h-fit flex items-center lg:mb-[3rem] mb-[1rem]",children:(0,r.jsx)("span",{className:"p-text-heading-sm lg:p-text-display-lg text-dune",children:e?.title})}),(0,r.jsx)("div",{className:"flex flex-col lg:grid lg:grid-cols-2 gap-y-[2rem] lg:gap-y-[0px]",children:e?.items?.map((e,a)=>r.jsx(t,{data:e},a))})]})};var x=a(29710);let b=({data:e})=>{let t=({data:e})=>(0,r.jsxs)("div",{className:"flex flex-col rounded-lg border border-[#EAEAEA] bg-white p-[1rem] lg:p-[2rem]",children:[(0,r.jsx)("div",{className:"font-semibold p-text-body-lg lg:p-text-heading-md h-[8.75rem] lg:h-[13.875rem] line-clamp-4 lg:line-clamp-6 mb-[1rem] leading-[2rem]",children:`“${e?.comment}”`}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[0.313rem] mb-[1rem]",children:[(0,r.jsx)(n.default,{src:"/icons/ic_star.svg",width:16,height:16,alt:"ic_star"}),(0,r.jsx)(n.default,{src:"/icons/ic_star.svg",width:16,height:16,alt:"ic_star"}),(0,r.jsx)(n.default,{src:"/icons/ic_star.svg",width:16,height:16,alt:"ic_star"}),(0,r.jsx)(n.default,{src:"/icons/ic_star.svg",width:16,height:16,alt:"ic_star"}),(0,r.jsx)(n.default,{src:"/icons/ic_star.svg",width:16,height:16,alt:"ic_star"})]}),(0,r.jsx)("span",{className:"text-dune p-text-body-lg font-semibold mb-[0.25rem]",children:e?.personName}),(0,r.jsx)("span",{className:"text-dune p-text-body-lg",children:e?.personJob})]});return(0,r.jsxs)("div",{className:"flex flex-col py-[3.75rem] lg:py-[6.25rem]",children:[(0,r.jsx)("span",{className:"p-text-heading-sm lg:p-text-display-lg text-dune mb-[1.5rem] lg:mb-[3rem] px-[1.5rem] lg:px-[3.75rem]",children:e?.title}),(0,r.jsx)(x.Carousel,{children:(0,r.jsx)(x.CarouselContent,{className:"px-[1.5rem] lg:px-[3.75rem]",children:e?.items?.map((e,a)=>r.jsx(x.CarouselItem,{className:"basis-11/12 lg:basis-1/3 shadow-[0px_90px_55px_0px_rgba(0,0,0,0.02),0px_10px_30px_0px_rgba(0,0,0,0.03)]",children:r.jsx(t,{data:e})},a))})})]})};var h=a(81684),y=a(22470),v=a(4567),w=a(81171),j=a(56314),N=a(6866),C=a(8834),_=a(78453),S=a(67100),A=a(56196);let I="force-dynamic";async function q(){let[e,t,a,n,i,d,o,c]=await Promise.all([(0,v.fl)(),(0,w.F0)(),(0,j.U2)(),(0,N.GJ)(),(0,C.BZ)(),(0,_.Bd)(),(0,S.we)(),(0,A.wi)()]),x={...e,partners:{...e?.partners,items:t},services:{...e?.services,items:a},certifcates:{...e?.certificates,items:n},testimonials:{...e?.testimonials,items:i},whyChooseUs:{...e?.whyChooseUs,items:d}};return(0,r.jsxs)("div",{className:"flex flex-col relative",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(s.l,{data:x?.hero}),(0,r.jsx)(u,{data:x?.services}),(0,r.jsx)(m,{data:x?.partners}),(0,r.jsx)(f,{data:x?.whyChooseUs}),(0,r.jsx)(g,{data:x?.certifcates}),(0,r.jsx)(y.Ri,{data:o}),(0,r.jsx)(b,{data:x?.testimonials}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row py-[2.5rem] px-[1.5rem] lg:py-[6.25rem] lg:px-[3.75rem] lg:gap-x-[3rem]",children:[(0,r.jsx)("span",{className:"lg:w-[50%] font-bold p-text-heading-sm lg:p-text-display-lg text-dune mb-[1.5rem] lg:mb-[3rem]",children:"Get in touch with us"}),(0,r.jsx)(h.default,{})]}),(0,r.jsx)(p.default,{data:c})]})}},81684:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});let r=(0,a(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\Works\\\\Projects\\\\Web\\\\pandawa\\\\src\\\\components\\\\layouts\\\\ContactForm.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Works\\Projects\\Web\\pandawa\\src\\components\\layouts\\ContactForm.js","default")},22470:(e,t,a)=>{"use strict";a.d(t,{P7:()=>o,Ri:()=>d,TW:()=>i});var r=a(47705),s=a(76217),l=a(29710),n=a(71908);let i=({url:e,alt:t,isRounded:a,height:l})=>(0,r.jsxs)("div",{className:`relative w-[full] ${l||"h-[15rem] lg:h-[41.25rem]"}`,children:[(0,r.jsx)(s.default,{src:e,alt:t,objectFit:"cover",layout:"fill",className:`${a?"rounded-xl":""}`}),(0,r.jsx)("div",{className:`${a?"rounded-xl":""} absolute inset-0 bg-black opacity-20 z-[1]`})]}),d=({data:e})=>(0,r.jsx)(l.Carousel,{children:(0,r.jsx)(l.CarouselContent,{className:"lg:gap-x-[2.5rem]",children:e.map((e,t)=>(0,r.jsx)(l.CarouselItem,{className:"basis-3/4",children:(0,r.jsx)(i,{alt:"gallery",url:n._+e.image})},t))})}),o=({data:e})=>(0,r.jsxs)("div",{className:"flex flex-col px-[1.5rem] py-[2.5rem] lg:p-[3.75rem]",children:[(0,r.jsx)("span",{className:"p-text-heading-sm lg:p-text-display-lg font-bold text-dune mb-[1.5rem] lg:mb-[3rem]",children:e?.heading}),(0,r.jsx)("div",{className:"columns-3 gap-3 space-y-4",children:e?.items?.map((e,t)=>r.jsx("img",{src:n._+e.image,className:"rounded-md"},t))})]})},29710:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Carousel:()=>s,CarouselContent:()=>l,CarouselItem:()=>n,CarouselNext:()=>d,CarouselPrevious:()=>i});var r=a(78105);let s=(0,r.registerClientReference)(function(){throw Error("Attempted to call Carousel() from the server but Carousel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Works\\Projects\\Web\\pandawa\\src\\components\\ui\\carousel.jsx","Carousel"),l=(0,r.registerClientReference)(function(){throw Error("Attempted to call CarouselContent() from the server but CarouselContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Works\\Projects\\Web\\pandawa\\src\\components\\ui\\carousel.jsx","CarouselContent"),n=(0,r.registerClientReference)(function(){throw Error("Attempted to call CarouselItem() from the server but CarouselItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Works\\Projects\\Web\\pandawa\\src\\components\\ui\\carousel.jsx","CarouselItem"),i=(0,r.registerClientReference)(function(){throw Error("Attempted to call CarouselPrevious() from the server but CarouselPrevious is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Works\\Projects\\Web\\pandawa\\src\\components\\ui\\carousel.jsx","CarouselPrevious"),d=(0,r.registerClientReference)(function(){throw Error("Attempted to call CarouselNext() from the server but CarouselNext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Works\\Projects\\Web\\pandawa\\src\\components\\ui\\carousel.jsx","CarouselNext")},6866:(e,t,a)=>{"use strict";a.d(t,{DZ:()=>o,vn:()=>c,GJ:()=>u});var r=a(64443);a(98356);var s=a(68687),l=a(11185),n=a.n(l);let i=new(n()).Schema({image:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""},description:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),d=n().models.Certificate||n().model("Certificate",i);async function o(e,t){try{let a=e.image.name?await (0,s.I)(e.image):e.imageUrl,r={...e,image:a};return t?await d.findByIdAndUpdate(t,r,{new:!0}):await d.create(r),!0}catch(e){return!1}}async function c(e){try{return await d.deleteOne({_id:e}),!0}catch(e){return!1}}async function u(){return(await d.find().sort({createdAt:1}).select("_id -__v").lean()).map(e=>({...e,_id:e._id.toString()}))}(0,a(35413).h)([o,c,u]),(0,r.j)(o,"600bdea5e13a1dec285514e403f3127c11ebe1646d",null),(0,r.j)(c,"40eb614e5d0bf39673f1e07f83982ebed124b691df",null),(0,r.j)(u,"005b2fc439d6dc78b9b95a92a3b21ad90ee7c1d9a9",null)},4567:(e,t,a)=>{"use strict";a.d(t,{fl:()=>x,RX:()=>m,lX:()=>c,vz:()=>f,Gg:()=>u,ki:()=>p,cd:()=>g});var r=a(64443);a(98356);var s=a(68687),l=a(11185),n=a.n(l);let i=new(n()).Schema({hero:{heading:{type:String,required:!1,default:""},highlight_1:{label:{type:String,required:!1,default:""},value:{type:String,required:!1,default:""}},highlight_2:{label:{type:String,required:!1,default:""},value:{type:String,required:!1,default:""}},highlight_3:{label:{type:String,required:!1,default:""},value:{type:String,required:!1,default:""}},image:{type:String,required:!1,default:""}},services:{title:{type:String,required:!1,default:""},description:{type:String,required:!1,default:""}},whyChooseUs:{image:{type:String,required:!1,default:""},heading:{type:String,required:!1,default:""}},partners:{title:{type:String,required:!1,default:""}},certificates:{title:{type:String,required:!1,default:""}},testimonials:{title:{type:String,required:!1,default:""}},createdAt:{type:Date,default:Date.now}}),d=n().models.Homepage||n().model("Homepage",i);async function o(e){let t=await d.findOne().sort({createdAt:1});t?await d.findByIdAndUpdate(t._id,e,{new:!0}):await d.create(e)}async function c(e){try{let t=e.image.name?await (0,s.I)(e.image):e.imageUrl,a={hero:{...e,image:t}};return await o(a),!0}catch(e){return!1}}async function u(e){let t={services:{...e}};return await o(t),!0}async function m(e){let t={certificates:{...e}};return await o(t),!0}async function f(e){let t={partners:{...e}};return await o(t),!0}async function p(e){let t={testimonials:{...e}};return await o(t),!0}async function g(e){try{let t=e.image.name?await (0,s.I)(e.image):e.imageUrl,a={whyChooseUs:{...e,image:t}};return await o(a),!0}catch(e){return!1}}async function x(){return await d.findOne().sort({createdAt:1}).select("-_id -__v").lean()}(0,a(35413).h)([c,u,m,f,p,g,x]),(0,r.j)(c,"40042eccafeb29c223268aa94acdb3564a5281f80b",null),(0,r.j)(u,"403d968e1ebce7ae8160e17c32e6d6ba0daf161f7b",null),(0,r.j)(m,"40d3061f7fd731ae8f142669c8605b7478b835d8ff",null),(0,r.j)(f,"40fd772f7ff854ee5a895346c498af595368e8969c",null),(0,r.j)(p,"401b6e187e32411cd0752cce484b93407e10551f7b",null),(0,r.j)(g,"40e1dcc8aad67fa780f6800810f2988cac443a5abe",null),(0,r.j)(x,"00487840da3317b3cf58f1bbf9d54ad5567293d458",null)},81171:(e,t,a)=>{"use strict";a.d(t,{r0:()=>o,Cj:()=>c,F0:()=>u});var r=a(64443);a(98356);var s=a(68687),l=a(11185),n=a.n(l);let i=new(n()).Schema({image:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),d=n().models.Partners||n().model("Partners",i);async function o(e,t){try{let a=e.image.name?await (0,s.I)(e.image):e.imageUrl,r={...e,image:a};return t?await d.findByIdAndUpdate(t,r,{new:!0}):await d.create(r),!0}catch(e){return!1}}async function c(e){try{return await d.deleteOne({_id:e}),!0}catch(e){return!1}}async function u(){return(await d.find().sort({createdAt:1}).select("_id -__v").lean()).map(e=>({...e,_id:e._id.toString()}))}(0,a(35413).h)([o,c,u]),(0,r.j)(o,"60dae4fbd4fe25df1945590a647098ff798c33e1a5",null),(0,r.j)(c,"40d6f7d9aef486330d57659038ae82e8b3ece7a67e",null),(0,r.j)(u,"008086b79417f5e8b4d3a2e54d35d6cf1e33b4b6c4",null)},78453:(e,t,a)=>{"use strict";a.d(t,{hc:()=>d,S0:()=>o,Bd:()=>c});var r=a(64443);a(98356);var s=a(11185),l=a.n(s);let n=new(l()).Schema({text:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),i=l().models.Reason||l().model("Reason",n);async function d(e,t){try{return t?await i.findByIdAndUpdate(t,e,{new:!0}):await i.create(e),!0}catch(e){return!1}}async function o(e){try{return await i.deleteOne({_id:e}),!0}catch(e){return!1}}async function c(){return(await i.find().sort({createdAt:1}).select("_id -__v").lean()).map(e=>({...e,_id:e._id.toString()}))}(0,a(35413).h)([d,o,c]),(0,r.j)(d,"60495804de149b5be6e805e7d330e54d982cf551bb",null),(0,r.j)(o,"40e2107d669bb930f6686604c21ade8dcf22b49904",null),(0,r.j)(c,"002ca469f8629a2a4e4596c41f7ad1286d13a6c1c7",null)},67100:(e,t,a)=>{"use strict";a.d(t,{pL:()=>o,Qz:()=>c,we:()=>u});var r=a(64443);a(98356);var s=a(68687),l=a(11185),n=a.n(l);let i=new(n()).Schema({image:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),d=n().models.ServiceGallery||n().model("ServiceGallery",i);async function o(e,t){try{let a=e.image.name?await (0,s.I)(e.image):e.imageUrl,r={...e,image:a};return t?await d.findByIdAndUpdate(t,r,{new:!0}):await d.create(r),!0}catch(e){return!1}}async function c(e){try{return await d.deleteOne({_id:e}),!0}catch(e){return!1}}async function u(){return(await d.find().sort({createdAt:1}).select("_id -__v").lean()).map(e=>({...e,_id:e._id.toString()}))}(0,a(35413).h)([o,c,u]),(0,r.j)(o,"60064a2f6433ef62f2022def337702b10408476b98",null),(0,r.j)(c,"40dd0835a43f22340b7ce6e61984455857d3a9b4a2",null),(0,r.j)(u,"0067a32fd7bebe3955fdb99f412e56c9ab7c6df4b8",null)},56314:(e,t,a)=>{"use strict";a.d(t,{Ae:()=>g,wo:()=>x,U2:()=>b});var r=a(64443);a(98356);var s=a(68687),l=a(11185),n=a.n(l);let i=new(n()).Schema({_id:{type:String,required:!0,unique:!0},image:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""},details:[{_id:{type:String,required:!0,unique:!0},title:{type:String,required:!1,default:""},html:{type:String,required:!1,default:""}}],description:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),d=n().models.Services||n().model("Services",i);var o=a(84770);let c={randomUUID:o.randomUUID},u=new Uint8Array(256),m=u.length,f=[];for(let e=0;e<256;++e)f.push((e+256).toString(16).slice(1));let p=function(e,t,a){if(c.randomUUID&&!t&&!e)return c.randomUUID();let r=(e=e||{}).random||(e.rng||function(){return m>u.length-16&&((0,o.randomFillSync)(u),m=0),u.slice(m,m+=16)})();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){a=a||0;for(let e=0;e<16;++e)t[a+e]=r[e];return t}return function(e,t=0){return(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase()}(r)};async function g(e,t){try{let a=e.image.name?await (0,s.I)(e.image):e.imageUrl,r={...e,_id:t||p(),image:a};return t?await d.findByIdAndUpdate(t,r,{new:!0}):await d.create(r),!0}catch(e){return!1}}async function x(e){try{return await d.deleteOne({_id:e}),!0}catch(e){return!1}}async function b(){return await d.find().sort({createdAt:1}).select("_id -__v").lean()}(0,a(35413).h)([g,x,b]),(0,r.j)(g,"60583c1cedeccf59c85682ca2baaf3756676999a17",null),(0,r.j)(x,"40cfb08fa71a40c8d4e8d73468b83b3f287adbed45",null),(0,r.j)(b,"00f2ddac19b4e3680e3521deaa3cf18c1a8dcafec6",null)},8834:(e,t,a)=>{"use strict";a.d(t,{Zi:()=>d,IF:()=>o,BZ:()=>c});var r=a(64443);a(98356),a(68687);var s=a(11185),l=a.n(s);let n=new(l()).Schema({comment:{type:String,required:!1,default:""},personName:{type:String,required:!1,default:""},personJob:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),i=l().models.Testimonial||l().model("Testimonial",n);async function d(e,t){try{return t?await i.findByIdAndUpdate(t,e,{new:!0}):await i.create(e),!0}catch(e){return!1}}async function o(e){try{return await i.deleteOne({_id:e}),!0}catch(e){return!1}}async function c(){return(await i.find().sort({createdAt:1}).select("_id -__v").lean()).map(e=>({...e,_id:e._id.toString()}))}(0,a(35413).h)([d,o,c]),(0,r.j)(d,"60872eeb30642aac896e5ff403ff84fd6bb7e95394",null),(0,r.j)(o,"40eaf190d7b869bb23d0b6e24a2b878f03951ec62e",null),(0,r.j)(c,"009b0781247554a75d216c836bae8e12822e3638b8",null)}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[8492,1146,7099,3832,5723,3987,241,5743,2602,8433],()=>a(23578));module.exports=r})();