(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3158],{6407:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/migrate-an-existing-validator/confirm-configuration",function(){return i(67311)}])},67311:function(e,n,i){"use strict";i.r(n);var r=i(85893),t=i(24967),o=i(48900),s=i(85281),c=i(87536),a=i(11163),u=i.n(a),l=i(67294),d=i(91997),f=i(88887);let ConfirmConfiguration=()=>{let{handleSubmit:e}=(0,c.cI)({mode:"onChange"}),[n,i]=(0,l.useState)(!1),a=(0,s.o)(e=>e.clusterDefinition),m=(0,s.o)(e=>e.completeMigrateClusterStep),g=(0,s.o)(e=>e.enableMigrateClusterStep);if(!a)return(0,r.jsx)(o.xv,{children:"No cluster data ..."});let onSubmit=async()=>{m("confirm-configuration-migrate");let e=g("create-cluster-migrate");i(!1),u().push({pathname:e.href,query:{flow:"migrate"}})};return(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(o.xv,{variant:"h3",children:"Confirm Configuration"}),(0,r.jsx)(t.l0,{onSubmit:e(onSubmit),children:(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(o.W2,{className:"cluster-details",alignItems:"start",children:(0,r.jsx)(o.kC,{direction:"column",css:{gap:"$2xl"},children:(0,r.jsx)(d.uo,{})})}),(0,r.jsx)(f.EJ,{feeRecipientAddress:null==a?void 0:a.feeRecipientAddress}),(0,r.jsx)(o.kC,{direction:"column",children:(0,r.jsx)(o.zx,{color:"primary",type:"submit",css:{"& div":{m:0}},children:(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(o.yC,{}),"Continue"]})})})]})})]})};n.default=ConfirmConfiguration,ConfirmConfiguration.layout="MigrateProgressTrackerLayout"}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=6407)}),_N_E=e.O()}]);