"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6722],{66722:(e,a,t)=>{t.d(a,{default:()=>ee});var r=t(57437),i=t(2265),s=t(71538),d=t(12218),n=t(60143),l=t(58214),o=t(12200),c=t(17147),u=t(48484);let f=i.forwardRef((e,a)=>{let{className:t,orientation:i="horizontal",decorative:s=!0,...d}=e;return(0,r.jsx)(u.f,{ref:a,decorative:s,orientation:i,className:(0,l.cn)("shrink-0 bg-border","horizontal"===i?"h-[1px] w-full":"h-full w-[1px]",t),...d})});f.displayName=u.f.displayName;var b=t(24717),m=t(74697);let p=b.fC;b.xz,b.x8;let g=b.h_,h=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(b.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...i,ref:a})});h.displayName=b.aV.displayName;let x=(0,d.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),v=i.forwardRef((e,a)=>{let{side:t="right",className:i,children:s,...d}=e;return(0,r.jsxs)(g,{children:[(0,r.jsx)(h,{}),(0,r.jsxs)(b.VY,{ref:a,className:(0,l.cn)(x({side:t}),i),...d,children:[s,(0,r.jsxs)(b.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(m.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});function w(e){let{className:a,...t}=e;return(0,r.jsx)("div",{className:(0,l.cn)("animate-pulse rounded-md bg-muted",a),...t})}v.displayName=b.VY.displayName,i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(b.Dx,{ref:a,className:(0,l.cn)("text-lg font-semibold text-foreground",t),...i})}).displayName=b.Dx.displayName,i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(b.dk,{ref:a,className:(0,l.cn)("text-sm text-muted-foreground",t),...i})}).displayName=b.dk.displayName;var N=t(27071);let j=N.zt,y=N.fC,S=N.xz,k=i.forwardRef((e,a)=>{let{className:t,sideOffset:i=4,...s}=e;return(0,r.jsx)(N.VY,{ref:a,sideOffset:i,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...s})});k.displayName=N.VY.displayName;let z=i.createContext(null);function R(){let e=i.useContext(z);if(!e)throw Error("useSidebar must be used within a SidebarProvider.");return e}let C=i.forwardRef((e,a)=>{let{defaultOpen:t=!0,open:s,onOpenChange:d,className:n,style:o,children:c,...u}=e,f=function(){let[e,a]=i.useState(void 0);return i.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(767,"px)")),t=()=>{a(window.innerWidth<768)};return e.addEventListener("change",t),a(window.innerWidth<768),()=>e.removeEventListener("change",t)},[]),!!e}(),[b,m]=i.useState(!1),[p,g]=i.useState(t),h=null!=s?s:p,x=i.useCallback(e=>{let a="function"==typeof e?e(h):e;d?d(a):g(a),document.cookie="".concat("sidebar:state","=").concat(a,"; path=/; max-age=").concat(604800)},[d,h]),v=i.useCallback(()=>f?m(e=>!e):x(e=>!e),[f,x,m]);i.useEffect(()=>{let e=e=>{"b"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),v())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[v]);let w=h?"expanded":"collapsed",N=i.useMemo(()=>({state:w,open:h,setOpen:x,isMobile:f,openMobile:b,setOpenMobile:m,toggleSidebar:v}),[w,h,x,f,b,m,v]);return(0,r.jsx)(z.Provider,{value:N,children:(0,r.jsx)(j,{delayDuration:0,children:(0,r.jsx)("div",{style:{"--sidebar-width":"16rem","--sidebar-width-icon":"3rem",...o},className:(0,l.cn)("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",n),ref:a,...u,children:c})})})});C.displayName="SidebarProvider";let _=i.forwardRef((e,a)=>{let{side:t="left",variant:i="sidebar",collapsible:s="offcanvas",className:d,children:n,...o}=e,{isMobile:c,state:u,openMobile:f,setOpenMobile:b}=R();return"none"===s?(0,r.jsx)("div",{className:(0,l.cn)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",d),ref:a,...o,children:n}):c?(0,r.jsx)(p,{open:f,onOpenChange:b,...o,children:(0,r.jsx)(v,{"data-sidebar":"sidebar","data-mobile":"true",className:"w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",style:{"--sidebar-width":"18rem"},side:t,children:(0,r.jsx)("div",{className:"flex h-full w-full flex-col",children:n})})}):(0,r.jsxs)("div",{ref:a,className:"group peer hidden md:block text-sidebar-foreground","data-state":u,"data-collapsible":"collapsed"===u?s:"","data-variant":i,"data-side":t,children:[(0,r.jsx)("div",{className:(0,l.cn)("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180","floating"===i||"inset"===i?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon]")}),(0,r.jsx)("div",{className:(0,l.cn)("duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex","left"===t?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]","floating"===i||"inset"===i?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",d),...o,children:(0,r.jsx)("div",{"data-sidebar":"sidebar",className:"flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",children:n})})]})});_.displayName="Sidebar";let M=i.forwardRef((e,a)=>{let{className:t,onClick:i,...s}=e,{toggleSidebar:d}=R();return(0,r.jsxs)(o.z,{ref:a,"data-sidebar":"trigger",variant:"ghost",size:"icon",className:(0,l.cn)("h-7 w-7",t),onClick:e=>{null==i||i(e),d()},...s,children:[(0,r.jsx)(n.Z,{}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle Sidebar"})]})});M.displayName="SidebarTrigger",i.forwardRef((e,a)=>{let{className:t,...i}=e,{toggleSidebar:s}=R();return(0,r.jsx)("button",{ref:a,"data-sidebar":"rail","aria-label":"Toggle Sidebar",tabIndex:-1,onClick:s,title:"Toggle Sidebar",className:(0,l.cn)("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex","[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize","[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar","[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",t),...i})}).displayName="SidebarRail",i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("main",{ref:a,className:(0,l.cn)("relative flex min-h-svh flex-1 flex-col bg-background","peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",t),...i})}).displayName="SidebarInset",i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(c.I,{ref:a,"data-sidebar":"input",className:(0,l.cn)("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",t),...i})}).displayName="SidebarInput",i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"header",className:(0,l.cn)("flex flex-col gap-2 p-2",t),...i})}).displayName="SidebarHeader",i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"footer",className:(0,l.cn)("flex flex-col gap-2 p-2",t),...i})}).displayName="SidebarFooter",i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(f,{ref:a,"data-sidebar":"separator",className:(0,l.cn)("mx-2 w-auto bg-sidebar-border",t),...i})}).displayName="SidebarSeparator";let V=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"content",className:(0,l.cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",t),...i})});V.displayName="SidebarContent";let E=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"group",className:(0,l.cn)("relative flex w-full min-w-0 flex-col p-2",t),...i})});E.displayName="SidebarGroup";let Z=i.forwardRef((e,a)=>{let{className:t,asChild:i=!1,...d}=e,n=i?s.g7:"div";return(0,r.jsx)(n,{ref:a,"data-sidebar":"group-label",className:(0,l.cn)("duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",t),...d})});Z.displayName="SidebarGroupLabel",i.forwardRef((e,a)=>{let{className:t,asChild:i=!1,...d}=e,n=i?s.g7:"button";return(0,r.jsx)(n,{ref:a,"data-sidebar":"group-action",className:(0,l.cn)("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","group-data-[collapsible=icon]:hidden",t),...d})}).displayName="SidebarGroupAction";let L=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"group-content",className:(0,l.cn)("w-full text-sm",t),...i})});L.displayName="SidebarGroupContent";let P=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("ul",{ref:a,"data-sidebar":"menu",className:(0,l.cn)("flex w-full min-w-0 flex-col gap-1",t),...i})});P.displayName="SidebarMenu";let I=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("li",{ref:a,"data-sidebar":"menu-item",className:(0,l.cn)("group/menu-item relative",t),...i})});I.displayName="SidebarMenuItem";let T=(0,d.j)("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:!p-0"}},defaultVariants:{variant:"default",size:"default"}}),D=i.forwardRef((e,a)=>{let{asChild:t=!1,isActive:i=!1,variant:d="default",size:n="default",tooltip:o,className:c,...u}=e,f=t?s.g7:"button",{isMobile:b,state:m}=R(),p=(0,r.jsx)(f,{ref:a,"data-sidebar":"menu-button","data-size":n,"data-active":i,className:(0,l.cn)(T({variant:d,size:n}),c),...u});return o?("string"==typeof o&&(o={children:o}),(0,r.jsxs)(y,{children:[(0,r.jsx)(S,{asChild:!0,children:p}),(0,r.jsx)(k,{side:"right",align:"center",hidden:"collapsed"!==m||b,...o})]})):p});D.displayName="SidebarMenuButton",i.forwardRef((e,a)=>{let{className:t,asChild:i=!1,showOnHover:d=!1,...n}=e,o=i?s.g7:"button";return(0,r.jsx)(o,{ref:a,"data-sidebar":"menu-action",className:(0,l.cn)("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",d&&"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",t),...n})}).displayName="SidebarMenuAction",i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"menu-badge",className:(0,l.cn)("absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none","peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",t),...i})}).displayName="SidebarMenuBadge",i.forwardRef((e,a)=>{let{className:t,showIcon:s=!1,...d}=e,n=i.useMemo(()=>"".concat(Math.floor(40*Math.random())+50,"%"),[]);return(0,r.jsxs)("div",{ref:a,"data-sidebar":"menu-skeleton",className:(0,l.cn)("rounded-md h-8 flex gap-2 px-2 items-center",t),...d,children:[s&&(0,r.jsx)(w,{className:"size-4 rounded-md","data-sidebar":"menu-skeleton-icon"}),(0,r.jsx)(w,{className:"h-4 flex-1 max-w-[--skeleton-width]","data-sidebar":"menu-skeleton-text",style:{"--skeleton-width":n}})]})}).displayName="SidebarMenuSkeleton";let G=i.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("ul",{ref:a,"data-sidebar":"menu-sub",className:(0,l.cn)("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5","group-data-[collapsible=icon]:hidden",t),...i})});G.displayName="SidebarMenuSub",i.forwardRef((e,a)=>{let{...t}=e;return(0,r.jsx)("li",{ref:a,...t})}).displayName="SidebarMenuSubItem";let O=i.forwardRef((e,a)=>{let{asChild:t=!1,size:i="md",isActive:d,className:n,...o}=e,c=t?s.g7:"a";return(0,r.jsx)(c,{ref:a,"data-sidebar":"menu-sub-button","data-size":i,"data-active":d,className:(0,l.cn)("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground","data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground","sm"===i&&"text-xs","md"===i&&"text-sm","group-data-[collapsible=icon]:hidden",n),...o})});O.displayName="SidebarMenuSubButton";var A=t(87592),F=t(42421),Y=t(40882);let B=Y.fC,W=Y.wy,q=Y.Fw;var H=t(16463),K=t(58064);let U=(0,K.createServerReference)("00cc3855869585d32679662b723544deb1ed3d9127",K.callServer,void 0,K.findSourceMapURL,"logout"),J=[{title:"Pages",menus:[{title:"Home",url:"/cms",icon:A.Z},{title:"About",url:"/cms/about",icon:A.Z},{title:"Service",url:"/cms/service",icon:A.Z},{title:"Contact",url:"/cms/contact",icon:A.Z},{title:"Career",url:"/cms/career",icon:A.Z}]},{title:"Datatables",menus:[{title:"Partners",url:"/cms/partners"},{title:"Services",url:"/cms/services"},{title:"Certificates",url:"/cms/certificates"},{title:"Testimonials",url:"/cms/testimonials"},{title:"Core Values",url:"/cms/corevalues"},{title:"Visi Mission",url:"/cms/missions"},{title:"Why Us",url:"/cms/whyus"},{title:"Our Teams",url:"/cms/ourteams"},{title:"Gallery of Services",url:"/cms/servicegallery"},{title:"Contacts",url:"/cms/contacts"},{title:"Careers",url:"/cms/careers"},{title:"Social Media",url:"/cms/socmed"},{title:"Contact Form",url:"/cms/contact_form"}]},{title:"Account",menus:[{title:"Change Password",url:"/cms/change_password"},{title:"Logout",url:"logout"}]}],Q=()=>{let e=(0,H.useRouter)();return(0,r.jsx)(_,{children:(0,r.jsx)(V,{children:(0,r.jsxs)(E,{children:[(0,r.jsx)(Z,{className:"text-white",children:"CMS - Pandawa"}),(0,r.jsx)(L,{children:(0,r.jsx)(P,{children:J.map(a=>(0,r.jsx)(B,{defaultOpen:!0,className:"group/collapsible",children:(0,r.jsxs)(I,{children:[(0,r.jsx)(W,{asChild:!0,children:(0,r.jsx)(D,{children:(0,r.jsxs)("div",{className:"flex flex-row justify-between w-full items-center",children:[a.title," ",(0,r.jsx)(F.Z,{className:"w-5 h-5"})]})})}),(0,r.jsx)(q,{children:a.menus.map(a=>(0,r.jsx)(G,{children:(0,r.jsx)(O,{asChild:!0,children:(0,r.jsx)("a",{href:"logout"==a.url?"#":a.url,onClick:async()=>{"logout"==a.url&&(await U(),e.replace("/login"))},children:(0,r.jsx)("span",{children:a.title})})})},a.title))})]})},a.title))})})]})})})};var X=t(75649),$=t(73970);let ee=e=>{let{children:a,loading:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(C,{children:[(0,r.jsx)(Q,{}),(0,r.jsxs)("main",{className:"flex flex-col w-full bg-accent",children:[(0,r.jsx)(M,{}),a]})]}),(0,r.jsx)(X.Z,{loading:t}),(0,r.jsx)($.x,{})]})}}}]);