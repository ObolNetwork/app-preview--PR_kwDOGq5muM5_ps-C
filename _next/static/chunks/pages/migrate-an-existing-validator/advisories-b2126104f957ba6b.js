(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1160],{14242:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/migrate-an-existing-validator/advisories",function(){return s(95902)}])},10912:function(e,t,s){"use strict";var n=s(85893),i=s(48900),a=s(67294),r=s(42830),o=s(42298);t.Z=e=>{let{advisoriesData:t,onSubmit:s}=e,[u,c]=(0,a.useState)(t.map((e,t)=>{let{contentTitle:i,texts:a,links:u,terms:c,enableNextStep:l,rank:d,title:p,value:m}=e;return{content:(e,t,o,l)=>(0,n.jsx)(r.B,{onSubmit:s,title:i,texts:a,links:u,terms:c,rank:e,enableNextStep:t,onAccept:o,onBack:l}),enableNextStep:l,rank:d,state:(0,o.d$)(t),title:p,value:m}})),[l,d]=(0,a.useState)(u[0]);return(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,n.jsx)(i.xv,{variant:"h3",children:"Advisories"}),(0,n.jsx)(i.I,{itemSelected:l,items:u,onItemChange:e=>{d(e)},onComplete:()=>{},onUpdateState:e=>{c(u.map(t=>t.rank===e+1?(d(t),{...t,state:"enabled"}):t))},onBack:e=>{c(u.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=u.find(t=>t.rank===e-1);t&&d(t)}})]})}},95902:function(e,t,s){"use strict";s.r(t);var n=s(85893),i=s(85281),a=s(67294),r=s(11163),o=s(10912),u=s(86105);let Advisories=()=>{let e=(0,r.useRouter)(),t=(0,i.o)((0,a.useCallback)(e=>e.completeMigrateClusterStep,[])),s=(0,i.o)(e=>e.enableMigrateClusterStep);return(0,n.jsx)(o.Z,{advisoriesData:u.Op,onSubmit:()=>{t("advisories-migrate");let n=s("config-cluster-migrate");e.push(n.href)}})};t.default=Advisories,Advisories.cssLayout={px:"15%"},Advisories.layout="MigrateProgressTrackerLayout"}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=14242)}),_N_E=e.O()}]);