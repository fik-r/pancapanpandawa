(()=>{var e={};e.id=1010,e.ids=[1010],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},92048:e=>{"use strict";e.exports=require("fs")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},47261:e=>{"use strict";e.exports=require("node:util")},12103:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var a=r(49442),s=r(10042),n=r(48190),o=r.n(n),i=r(63289),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["cms",{children:["testimonials",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,94002)),"E:\\Works\\Projects\\Web\\pandawa\\src\\app\\cms\\testimonials\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,50934)),"E:\\Works\\Projects\\Web\\pandawa\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["E:\\Works\\Projects\\Web\\pandawa\\src\\app\\cms\\testimonials\\page.js"],u={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/cms/testimonials/page",pathname:"/cms/testimonials",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},25146:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"009b0781247554a75d216c836bae8e12822e3638b8":()=>a.BZ,"404dbd3f423c22c44d56c3b13b5359925a21b97074":()=>s.I,"40eaf190d7b869bb23d0b6e24a2b878f03951ec62e":()=>a.IF,"60872eeb30642aac896e5ff403ff84fd6bb7e95394":()=>a.Zi});var a=r(8834),s=r(68687)},65134:(e,t,r)=>{Promise.resolve().then(r.bind(r,53406)),Promise.resolve().then(r.bind(r,5532))},97040:(e,t,r)=>{Promise.resolve().then(r.bind(r,95767)),Promise.resolve().then(r.bind(r,54808))},31522:(e,t,r)=>{"use strict";r.d(t,{Q:()=>d,t:()=>u});var a=r(20149),s=r(63606),n=r(62451),o=r(75469),i=r(74027),l=r(85723),c=r(8863);function d({title:e="Testimonials",initialData:t={},action:r}){let[d,u]=(0,s.useState)({}),[p,m]=(0,s.useState)({title:t?.title||""});return(0,a.jsx)(n.Z,{title:e,children:(0,a.jsxs)("form",{className:"grid w-full items-center gap-4",onSubmit:function(e){e.preventDefault();let t={},a=!0;Object.keys(p).forEach(e=>{""===p[e]&&(t[e]=!0,a=!1)}),u(t),a&&r&&r(p)},children:[(0,a.jsx)(i.Z,{id:"title",placeholder:"Input title text here..",value:p.title,isError:d?.title,label:"Title",onChange:function(e){let{id:t,value:r}=e.target;m({...p,[t]:r}),r&&""!==r.trim()?u({...d,[t]:!1}):u({...d,[t]:!0})}}),(0,a.jsx)(l.default,{href:"/cms/testimonials",children:(0,a.jsxs)(o.z,{className:"rounded-md p-text-body-sm font-semibold",children:["Go to Testimonials",(0,a.jsx)(c.Z,{className:"h-4 w-4"})]})}),(0,a.jsx)("div",{className:"text-end",children:(0,a.jsx)(o.z,{type:"submit",children:"Update"})})]})})}function u({title:e="Testimonials",initialData:t={},action:r}){let[l,c]=(0,s.useState)({}),[d,u]=(0,s.useState)({personName:t?.personName||"",personJob:t?.personJob||"",comment:t?.comment||""});function p(e){let{id:t,value:r}=e.target;u({...d,[t]:r}),r&&""!==r.trim()?c({...l,[t]:!1}):c({...l,[t]:!0})}return(0,a.jsx)(n.Z,{title:e,children:(0,a.jsxs)("form",{className:"grid w-full items-center gap-4",onSubmit:function(e){e.preventDefault();let a={},s=!0;if(Object.keys(d).forEach(e=>{""===d[e]&&(a[e]=!0,s=!1)}),c(a),!s)return;let n={personName:d.personName,personJob:d.personJob,comment:d.comment};r&&r(n,t._id)},children:[(0,a.jsx)(i.Z,{id:"personName",placeholder:"Input name here..",value:d.personName,isError:l?.personName,label:"Name",onChange:p}),(0,a.jsx)(i.Z,{id:"personJob",placeholder:"Input job here..",value:d.personJob,isError:l?.personJob,label:"Job",onChange:p}),(0,a.jsx)(i.Z,{id:"comment",placeholder:"Input comment here..",value:d.comment,isError:l?.comment,label:"Comment",onChange:p,type:"textarea"}),(0,a.jsx)("div",{className:"text-end",children:(0,a.jsx)(o.z,{type:"submit",children:t?._id?"Update":"Add"})})]})})}},54808:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var a=r(20149),s=r(63606),n=r(34231),o=r(31522),i=r(8412);let l=(0,i.createServerReference)("40eaf190d7b869bb23d0b6e24a2b878f03951ec62e",i.callServer,void 0,i.findSourceMapURL,"deleteTestimonial"),c=(0,i.createServerReference)("60872eeb30642aac896e5ff403ff84fd6bb7e95394",i.callServer,void 0,i.findSourceMapURL,"createOrUpdateTestimonial");var d=r(4619),u=r(73310),p=r(85144);function m({data:e}){let[t,r]=(0,s.useState)(!1),[i,m]=(0,s.useState)({}),[f,b]=(0,s.useState)(!1),h=(0,d.useRouter)(),{toast:x}=(0,p.pm)();return(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)(u.Z,{loading:t}),(0,a.jsx)(n.Z,{title:"Testimonials",dialogOpen:f,setDialogOpen:b,setLoading:r,setFormData:m,data:e,initialColumns:[{accessorKey:"personName",header:"Name"},{accessorKey:"personJob",header:"Job"},{accessorKey:"comment",header:"Comment"}],deleteAction:l,form:(0,a.jsx)(o.t,{initialData:i,action:async(e,t)=>{r(!0);let a=await c(e,t);r(!1),b(!1),x({variant:a?"primary":"destructive",description:a?"Success":"Error"}),a&&h.refresh()}})})]})}},94002:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,dynamic:()=>i});var a=r(47705),s=r(8834),n=r(53406),o=r(5532);let i="force-dynamic";async function l(){let e=await (0,s.BZ)();return(0,a.jsx)(n.default,{children:(0,a.jsx)("div",{className:"lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]",children:(0,a.jsx)(o.default,{data:e})})})}},5532:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\Works\\\\Projects\\\\Web\\\\pandawa\\\\src\\\\components\\\\layouts\\\\cms\\\\table\\\\DatatableTestimonial.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Works\\Projects\\Web\\pandawa\\src\\components\\layouts\\cms\\table\\DatatableTestimonial.js","default")},8834:(e,t,r)=>{"use strict";r.d(t,{Zi:()=>l,IF:()=>c,BZ:()=>d});var a=r(64443);r(98356),r(68687);var s=r(11185),n=r.n(s);let o=new(n()).Schema({comment:{type:String,required:!1,default:""},personName:{type:String,required:!1,default:""},personJob:{type:String,required:!1,default:""},createdAt:{type:Date,default:Date.now}}),i=n().models.Testimonial||n().model("Testimonial",o);async function l(e,t){try{return t?await i.findByIdAndUpdate(t,e,{new:!0}):await i.create(e),!0}catch(e){return!1}}async function c(e){try{return await i.deleteOne({_id:e}),!0}catch(e){return!1}}async function d(){return(await i.find().sort({createdAt:1}).select("_id -__v").lean()).map(e=>({...e,_id:e._id.toString()}))}(0,r(35413).h)([l,c,d]),(0,a.j)(l,"60872eeb30642aac896e5ff403ff84fd6bb7e95394",null),(0,a.j)(c,"40eaf190d7b869bb23d0b6e24a2b878f03951ec62e",null),(0,a.j)(d,"009b0781247554a75d216c836bae8e12822e3638b8",null)},68687:(e,t,r)=>{"use strict";r.d(t,{I:()=>l});var a=r(64443);r(98356);var s=r(92048),n=r.n(s),o=r(55315),i=r.n(o);async function l(e){let t=i().join(process.cwd(),"public/uploads");if(n().existsSync(t)||n().mkdirSync(t,{recursive:!0}),!e)throw Error("No file provided");let r=e.name.replace(/\s+/g,"_").replace(/[^a-zA-Z0-9._-]/g,""),a=new Date().toISOString().replace(/[-:.]/g,""),s=`${a}_${r}`,o=i().join(t,s),l=Buffer.from(await e.arrayBuffer());return n().writeFileSync(o,l),`/uploads/${s}`}(0,r(35413).h)([l]),(0,a.j)(l,"404dbd3f423c22c44d56c3b13b5359925a21b97074",null)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8492,1146,7099,3832,5723,3987,241,8519,609,1005,2314,838,8506,5767,4856],()=>r(12103));module.exports=a})();