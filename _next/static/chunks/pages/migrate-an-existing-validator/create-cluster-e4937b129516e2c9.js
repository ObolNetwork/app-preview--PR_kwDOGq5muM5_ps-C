(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7194],{52481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/migrate-an-existing-validator/create-cluster",function(){return n(8397)}])},8397:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(48900),i=n(67294),s=n(30874),o=n(85281),c=n(42298),u=n(86105);let CreateMigrateCluster=()=>{let e=(0,o.o)((0,i.useCallback)(e=>e.completeMigrateClusterStep,[])),t=(0,o.o)(e=>e.clusterDefinition),onSubmit=()=>{e("create-cluster-migrate")},[n,l]=(0,i.useState)(u.VQ.map((e,n)=>{let{contentTitle:r,contentSection:i,enableNextStep:o,rank:u,term:l,value:d,title:m,cta:p}=e;return{content:(e,n,o,c)=>(0,a.jsx)(s.ns,{contentTitle:r,title:m,contentSection:i,commandsToReplace:[t.name,t.validators[0].withdrawalAddress,t.feeRecipientAddress,t.clusterSize.toString()],rank:e,onAccept:o,onBack:c,enableNextStep:n,term:l,onSubmit:onSubmit,cta:p}),enableNextStep:o,rank:u,state:(0,c.d$)(n),value:d,title:m,term:l,cta:p}})),[d,m]=(0,i.useState)(n[0]);return(0,a.jsxs)(r.kC,{direction:"column",css:{gap:"$2xl",width:"auto",margin:"0 -12.5%","& .advisory-content":{width:"700px"}},children:[(0,a.jsx)(r.xv,{variant:"h3",children:"Create Cluster"}),(0,a.jsx)(r.I,{itemSelected:d,items:n,onItemChange:e=>{m(e)},onComplete:()=>{},onUpdateState:e=>{l(n.map(t=>t.rank===e+1?(m(t),{...t,state:"enabled"}):t))},onBack:e=>{l(n.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=n.find(t=>t.rank===e-1);t&&m(t)}})]})};t.default=CreateMigrateCluster,CreateMigrateCluster.layout="MigrateProgressTrackerLayout"}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=52481)}),_N_E=e.O()}]);