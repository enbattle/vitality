(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5114:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,1728,23)),Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.bind(s,7277)),Promise.resolve().then(s.bind(s,9508))},6046:(e,t,s)=>{"use strict";var r=s(6658);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useSearchParams")&&s.d(t,{useSearchParams:function(){return r.useSearchParams}})},7277:(e,t,s)=>{"use strict";s.d(t,{SiteHeader:()=>z});var r=s(5155),a=s(2115),n=s(8173),o=s.n(n),i=s(6046),d=s(4710),l=s(9234),c=s(9656),u=s(7249);class f extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,s=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=s-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function m(e){let{children:t,isPresent:s,anchorX:n}=e,o=(0,a.useId)(),i=(0,a.useRef)(null),d=(0,a.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,a.useContext)(u.Q);return(0,a.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:a,right:c}=d.current;if(s||!i.current||!e||!t)return;i.current.dataset.motionPopId=o;let u=document.createElement("style");return l&&(u.nonce=l),document.head.appendChild(u),u.sheet&&u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===n?"left: ".concat(a):"right: ".concat(c),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(u)}},[s]),(0,r.jsx)(f,{isPresent:s,childRef:i,sizeRef:d,children:a.cloneElement(t,{ref:i})})}let h=e=>{let{children:t,initial:s,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:d,mode:u,anchorX:f}=e,h=(0,l.M)(p),x=(0,a.useId)(),g=(0,a.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;o&&o()},[h,o]),v=(0,a.useMemo)(()=>({id:x,initial:s,isPresent:n,custom:i,onExitComplete:g,register:e=>(h.set(e,!1),()=>h.delete(e))}),d?[Math.random(),g]:[n,g]);return(0,a.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[n]),a.useEffect(()=>{n||h.size||!o||o()},[n]),"popLayout"===u&&(t=(0,r.jsx)(m,{isPresent:n,anchorX:f,children:t})),(0,r.jsx)(c.t.Provider,{value:v,children:t})};function p(){return new Map}var x=s(5087);let g=e=>e.key||"";function v(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}var y=s(5403);let b=e=>{let{children:t,custom:s,initial:n=!0,onExitComplete:o,presenceAffectsLayout:i=!0,mode:c="sync",propagate:u=!1,anchorX:f="left"}=e,[m,p]=(0,x.xQ)(u),b=(0,a.useMemo)(()=>v(t),[t]),j=u&&!m?[]:b.map(g),w=(0,a.useRef)(!0),N=(0,a.useRef)(b),k=(0,l.M)(()=>new Map),[S,E]=(0,a.useState)(b),[M,A]=(0,a.useState)(b);(0,y.E)(()=>{w.current=!1,N.current=b;for(let e=0;e<M.length;e++){let t=g(M[e]);j.includes(t)?k.delete(t):!0!==k.get(t)&&k.set(t,!1)}},[M,j.length,j.join("-")]);let T=[];if(b!==S){let e=[...b];for(let t=0;t<M.length;t++){let s=M[t],r=g(s);j.includes(r)||(e.splice(t,0,s),T.push(s))}return"wait"===c&&T.length&&(e=T),A(v(e)),E(b),null}let{forceRender:_}=(0,a.useContext)(d.L);return(0,r.jsx)(r.Fragment,{children:M.map(e=>{let t=g(e),a=(!u||!!m)&&(b===M||j.includes(t));return(0,r.jsx)(h,{isPresent:a,initial:(!w.current||!!n)&&void 0,custom:s,presenceAffectsLayout:i,mode:c,onExitComplete:a?void 0:()=>{if(!k.has(t))return;k.set(t,!0);let e=!0;k.forEach(t=>{t||(e=!1)}),e&&(null==_||_(),A(N.current),u&&(null==p||p()),o&&o())},anchorX:f,children:e},t)})})};var j=s(6423),w=s(3312),N=s(3900),k=s(4029),S=s(5121),E=s(7401);let M=(0,E.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var A=s(853);let T=(0,E.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),_=(0,E.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),P=(0,E.A)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);var R=s(8474);let C=[{name:"Home",href:"/"},{name:"Products",href:"/products"},{name:"About",href:"/about"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact"}];function z(){let e=(0,i.usePathname)(),[t,s]=(0,a.useState)(!1),[n,d]=(0,a.useState)(!1),[l,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{s(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.useEffect)(()=>{c(document.documentElement.classList.contains("dark"))},[]),(0,r.jsx)("header",{className:"sticky top-0 z-50 w-full transition-all duration-200 ".concat(t?"bg-background/80 backdrop-blur-md shadow-sm":"bg-transparent"),children:(0,r.jsx)("div",{className:"container px-4 md:px-6",children:(0,r.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)(k.cj,{children:[(0,r.jsx)(k.CG,{asChild:!0,children:(0,r.jsxs)(w.$,{variant:"ghost",size:"icon",className:"md:hidden",children:[(0,r.jsx)(M,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle menu"})]})}),(0,r.jsx)(k.h,{side:"left",className:"w-[240px] sm:w-[300px]",children:(0,r.jsx)("nav",{className:"flex flex-col gap-4 mt-8",children:C.map(t=>(0,r.jsx)(o(),{href:t.href,className:"text-lg font-medium ".concat(e===t.href?"text-green-600 dark:text-green-400":"text-foreground"),children:t.name},t.name))})})]}),(0,r.jsx)(o(),{href:"/",className:"flex items-center mr-6",children:(0,r.jsx)("span",{className:"text-xl font-bold",children:"Vitality"})}),(0,r.jsx)("nav",{className:"hidden md:flex items-center gap-6",children:C.map(t=>(0,r.jsx)(o(),{href:t.href,className:"text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ".concat(e===t.href?"text-green-600 dark:text-green-400":"text-foreground"),children:t.name},t.name))})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(b,{children:n?(0,r.jsx)(j.P.div,{initial:{width:0,opacity:0},animate:{width:"auto",opacity:1},exit:{width:0,opacity:0},className:"relative",children:(0,r.jsx)(N.p,{type:"search",placeholder:"Search...",className:"w-[200px] rounded-full",autoFocus:!0,onBlur:()=>d(!1)})}):(0,r.jsxs)(w.$,{variant:"ghost",size:"icon",onClick:()=>d(!0),children:[(0,r.jsx)(A.A,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Search"})]})}),(0,r.jsxs)(w.$,{variant:"ghost",size:"icon",onClick:()=>{c(!l),document.documentElement.classList.toggle("dark")},children:[l?(0,r.jsx)(T,{className:"h-5 w-5"}):(0,r.jsx)(_,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]}),(0,r.jsxs)(w.$,{variant:"ghost",size:"icon",children:[(0,r.jsx)(P,{className:"h-5 w-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Account"})]}),(0,r.jsxs)(w.$,{variant:"ghost",size:"icon",className:"relative",children:[(0,r.jsx)(R.A,{className:"h-5 w-5"}),(0,r.jsx)(S.E,{className:"absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs",children:"3"}),(0,r.jsx)("span",{className:"sr-only",children:"Cart"})]})]})]})})})}},5121:(e,t,s)=>{"use strict";s.d(t,{E:()=>i});var r=s(5155);s(2115);var a=s(1027),n=s(1567);let o=(0,a.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:s,...a}=e;return(0,r.jsx)("div",{className:(0,n.cn)(o({variant:s}),t),...a})}},3312:(e,t,s)=>{"use strict";s.d(t,{$:()=>l});var r=s(5155),a=s(2115),n=s(2317),o=s(1027),i=s(1567);let d=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef((e,t)=>{let{className:s,variant:a,size:o,asChild:l=!1,...c}=e,u=l?n.DX:"button";return(0,r.jsx)(u,{className:(0,i.cn)(d({variant:a,size:o,className:s})),ref:t,...c})});l.displayName="Button"},3900:(e,t,s)=>{"use strict";s.d(t,{p:()=>o});var r=s(5155),a=s(2115),n=s(1567);let o=a.forwardRef((e,t)=>{let{className:s,type:a,...o}=e;return(0,r.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...o})});o.displayName="Input"},4029:(e,t,s)=>{"use strict";s.d(t,{CG:()=>c,Fm:()=>x,Qs:()=>v,cj:()=>l,h:()=>p,kN:()=>u,qp:()=>g});var r=s(5155),a=s(2115),n=s(6217),o=s(1027),i=s(767),d=s(1567);let l=n.bL,c=n.l9,u=n.bm,f=n.ZL,m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.hJ,{className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...a,ref:t})});m.displayName=n.hJ.displayName;let h=(0,o.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),p=a.forwardRef((e,t)=>{let{side:s="right",className:a,children:o,...l}=e;return(0,r.jsxs)(f,{children:[(0,r.jsx)(m,{}),(0,r.jsxs)(n.UC,{ref:t,className:(0,d.cn)(h({side:s}),a),...l,children:[(0,r.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(i.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]}),o]})]})});p.displayName=n.UC.displayName;let x=e=>{let{className:t,...s}=e;return(0,r.jsx)("div",{className:(0,d.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...s})};x.displayName="SheetHeader";let g=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.hE,{ref:t,className:(0,d.cn)("text-lg font-semibold text-foreground",s),...a})});g.displayName=n.hE.displayName;let v=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.VY,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",s),...a})});v.displayName=n.VY.displayName},2133:(e,t,s)=>{"use strict";s.d(t,{Qg:()=>m,Sb:()=>p,US:()=>c,aD:()=>x,eC:()=>h,tE:()=>l,y8:()=>f});var r=s(5155),a=s(2115),n=s(9930),o=s(1027),i=s(767),d=s(1567);let l=n.Kq,c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.LM,{ref:t,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})});c.displayName=n.LM.displayName;let u=(0,o.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),f=a.forwardRef((e,t)=>{let{className:s,variant:a,...o}=e;return(0,r.jsx)(n.bL,{ref:t,className:(0,d.cn)(u({variant:a}),s),...o})});f.displayName=n.bL.displayName;let m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.rc,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})});m.displayName=n.rc.displayName;let h=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.bm,{ref:t,className:(0,d.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(i.A,{className:"h-4 w-4"})})});h.displayName=n.bm.displayName;let p=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.hE,{ref:t,className:(0,d.cn)("text-sm font-semibold [&+div]:text-xs",s),...a})});p.displayName=n.hE.displayName;let x=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.VY,{ref:t,className:(0,d.cn)("text-sm opacity-90",s),...a})});x.displayName=n.VY.displayName},9508:(e,t,s)=>{"use strict";s.d(t,{Toaster:()=>o});var r=s(5155),a=s(5564),n=s(2133);function o(){let{toasts:e}=(0,a.dj)();return(0,r.jsxs)(n.tE,{children:[e.map(function(e){let{id:t,title:s,description:a,action:o,...i}=e;return(0,r.jsxs)(n.y8,{...i,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(n.Sb,{children:s}),a&&(0,r.jsx)(n.aD,{children:a})]}),o,(0,r.jsx)(n.eC,{})]},t)}),(0,r.jsx)(n.US,{})]})}},5564:(e,t,s)=>{"use strict";s.d(t,{dj:()=>f,oR:()=>u});var r=s(2115);let a=0,n=new Map,o=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?o(s):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],l={toasts:[]};function c(e){l=i(l,e),d.forEach(e=>{e(l)})}function u(e){let{...t}=e,s=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:s});return c({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function f(){let[e,t]=r.useState(l);return r.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},1567:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var r=s(3463),a=s(9795);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.QP)((0,r.$)(t))}},347:()=>{},1728:e=>{e.exports={style:{fontFamily:"'Mona Sans', 'Mona Sans Fallback'",fontStyle:"normal"},className:"__className_2c8354",variable:"__variable_2c8354"}}},e=>{var t=t=>e(e.s=t);e.O(0,[756,173,345,563,893,949,930,441,517,358],()=>t(5114)),_N_E=e.O()}]);