(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3915],{62367:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-cluster",function(){return r(43270)}])},20479:function(e,s,r){"use strict";r.d(s,{N:function(){return SectionTitle}});var t=r(85893);r(67294);var i=r(48900);let SectionTitle=e=>{let{children:s}=e;return(0,t.jsx)(i.kC,{direction:"column",children:(0,t.jsx)(i.xv,{variant:"h4",children:s})})}},17177:function(e,s,r){"use strict";r.d(s,{M:function(){return SubmitButton}});var t=r(85893),i=r(48900);let SubmitButton=e=>{let{disabled:s}=e;return(0,t.jsx)(i.kC,{direction:"column",children:(0,t.jsx)(i.zx,{color:"primary",type:"submit",disabled:s,children:"Create Cluster Configuration"})})}},56736:function(e,s,r){"use strict";r.d(s,{dG:function(){return getMigrateDefaultFormValues},q0:function(){return getSoloDefaultFormValues},uZ:function(){return getDefaultFormValues}});var t=r(25426);let getDefaultFormValues=e=>({operators:(null==e?void 0:e.operators)?e.operators:t.fI,recipients:(null==e?void 0:e.recipients)?e.recipients:t.tT,singleAddress:(null==e?void 0:e.singleAddress)?e.singleAddress:"",feeRecipientAddress:(null==e?void 0:e.feeRecipientAddress)?e.feeRecipientAddress:"",principal:(null==e?void 0:e.principal)?e.principal:"",enr:(null==e?void 0:e.enr)?e.enr:"",name:(null==e?void 0:e.name)?e.name:""}),getSoloDefaultFormValues=e=>({singleAddress:(null==e?void 0:e.singleAddress)?e.singleAddress:"",feeRecipientAddress:(null==e?void 0:e.feeRecipientAddress)?e.feeRecipientAddress:"",name:(null==e?void 0:e.name)?e.name:""}),getMigrateDefaultFormValues=e=>({feeRecipientAddress:(null==e?void 0:e.feeRecipientAddress)?e.feeRecipientAddress:"",name:(null==e?void 0:e.name)?e.name:""})},43270:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return C}});var t=r(85893),i=r(48900),n=r(91997),a=r(17177),l=r(24967),d=r(20479);let GreenTextButton=e=>{let{children:s,onClick:r}=e;return(0,t.jsx)(i.zx,{ghost:!0,css:{color:"$obolGreen",fontSize:"$1",p:0,height:"100%",textTransform:"uppercase"},onClick:e=>{e.preventDefault(),r()},children:s})},OperatorInputLabel=e=>{let{index:s,clusterSize:r,handleOnSetAccountAsOperator:n}=e;return(0,t.jsxs)(i.kC,{css:{gap:"$sm",justifyContent:"space-between"},children:[(0,t.jsx)(i.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Operator ".concat(s+1,"/").concat(r)}),0===s&&(0,t.jsx)(GreenTextButton,{onClick:n,children:"use my address"})]})};var o=r(59346),c=r(87536),u=r(67294),p=r(84769),h=r(92321);let NodeOperatorsSection=e=>{let{clusterSize:s}=e,{address:r}=(0,h.m)(),{setValue:n,control:a,trigger:l,getValues:m,formState:{errors:x}}=(0,c.Gc)(),{fields:f,append:v,remove:g}=(0,c.Dq)({control:a,name:"operators"}),j=(0,p.Z)(s),handleOnSetAccountAsOperator=()=>{n("operators.0",{address:r}),l("operators.0")};return(0,u.useEffect)(()=>{j&&j<s&&v({address:""},{shouldFocus:!1}),j&&j>s&&g(s-1)},[j,s,v,g]),(0,t.jsxs)(i.W2,{className:"cluster-operators",alignItems:"start",children:[(0,t.jsx)(d.N,{children:"Node Operators"}),f.map((e,r)=>{var n,a,l;return(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$sm","& div > input":{color:"$obolGreen"}},children:[(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$sm"},children:[(0,t.jsx)(OperatorInputLabel,{index:r,clusterSize:s,handleOnSetAccountAsOperator:handleOnSetAccountAsOperator}),(0,t.jsx)(o.bQ,{"data-testid":"Operator ".concat(r+1),name:"operators.".concat(r,".address"),items:m().operators,wrapperCSS:{border:"2px solid $bg04",backgroundColor:"$bg03",borderRadius:"$1",px:"$sm",py:"$xs","&:focus-within":{backgroundColor:"$bg02"}}})]}),(null===(n=x.operators)||void 0===n?void 0:n[r])&&(0,t.jsx)(i.xv,{variant:"metadata",color:"test",children:null===(l=x.operators)||void 0===l?void 0:null===(a=l[r].address)||void 0===a?void 0:a.message})]},":op".concat(e?e.id:r,":"))})]})},CharonClientENRSection=()=>{var e;let{address:s}=(0,h.m)(),{control:r,getValues:n}=(0,c.Gc)();return(0,t.jsx)(t.Fragment,{children:(null===(e=n().operators)||void 0===e?void 0:e.some(e=>e.address===s))&&(0,t.jsxs)(i.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$sm"},children:[(0,t.jsxs)(i.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,t.jsx)(i.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"What is your Charon Client's ENR?"}),(0,t.jsx)(i.KZ,{content:"An ENR is a public key and encoded networking info starting with enr:-...",children:(0,t.jsx)(i.xu,{css:{display:"flex"},children:(0,t.jsx)(i.by,{})})})]}),(0,t.jsx)(o.iA,{control:r,name:"enr"})]}),(0,t.jsxs)(i.rU,{href:"https://docs.obol.org/docs/start/quickstart_group#step-1-generate-an-enr",target:"_blank",children:["How to generate your ENR ",(0,t.jsx)(i.ZJ,{})]})]})})};var m=r(70521);let TabsList=e=>{let{validatorsSize:s}=e;return(0,t.jsxs)(i.mQ.TabsList,{"aria-label":"Configure Withdrawal",children:[(0,t.jsx)(m.T,{name:"reward_split_withdrawal_flow",children:(0,t.jsx)(i.mQ.TabsTrigger,{value:"reward_splitter",disabled:!(0,m.c)("reward_split_withdrawal_flow"),children:"Split Only Rewards"})}),(0,t.jsx)(m.T,{name:"split_withdrawal_flow",children:(0,t.jsx)(i.mQ.TabsTrigger,{value:"splitter",disabled:!(0,m.c)("split_withdrawal_flow"),children:"Split Everything"})}),(0,t.jsx)(m.T,{name:"lido_withdrawal_flow",children:(0,t.jsx)(i.mQ.TabsTrigger,{value:"lido",disabled:!(0,m.c)("lido_withdrawal_flow"),children:"Lido CSM"})}),(0,t.jsx)(m.T,{name:"single_withdrawal_address_flow",children:(0,t.jsx)(i.mQ.TabsTrigger,{value:"custom",disabled:!(0,m.c)("single_withdrawal_address_flow")||s>1,children:"Custom"})})]})},CustomTab=()=>{let{address:e}=(0,h.m)(),{setValue:s,control:r,trigger:a,formState:{errors:d}}=(0,c.Gc)();return(0,t.jsx)(i.mQ.TabsContent,{value:"custom",children:(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$md",paddingTop:"$sm"},children:[(0,t.jsx)(n.AN,{control:r,trigger:a,errors:d,handleOnSetAddress:r=>{r.preventDefault(),s("singleAddress",e),a("singleAddress")},heading:"Withdrawal Address",description:"Address to receive skimming rewards and validator principal at exit.",fieldName:"singleAddress",className:"single-address-section"}),(0,t.jsx)(n.AN,{control:r,trigger:a,errors:d,handleOnSetAddress:r=>{r.preventDefault(),s("feeRecipientAddress",e),a("feeRecipientAddress")},heading:"Fee Recipient",description:"Enter the Fee Recipient Address to receive MEV rewards (if enabled), block proposal and priority fees.",fieldName:"feeRecipientAddress",className:"fee-recipient-address-section"}),(0,t.jsx)(l.fz,{content:"For clusters of only one validator, the contribution to retroactive funding is optional, but you won't have a say in Obol Retroactive Funding Governance without it."})]})})},LidoTab=()=>{let{getValues:e}=(0,c.Gc)();return(0,t.jsxs)(i.mQ.TabsContent,{value:"lido",children:[(0,t.jsxs)(i.xv,{color:"body",variant:"body",children:["Clusters deploying validators on Lido’s Community Staking Module (CSM) will use this configuration to set the required Withdrawal and Fee Recipient addresses. More info can be found",(0,t.jsxs)(i.rU,{href:"https://operatorportal.lido.fi/modules/community-staking-module#block-ebec1cfea6e34c9f9e335ab2cbc2556c",css:{display:"inline"},target:"_blank",children:[" ","here",(0,t.jsx)(i._j,{size:"md"})]}),"."]}),(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$md",paddingTop:"$sm"},children:[(0,t.jsx)(n.nB,{heading:"Withdrawal Address",description:"Lido Withdrawal Vault.",value:e().singleAddress,className:"lido-single-address-section"}),(0,t.jsx)(n.nB,{heading:"Fee Recipient Address",description:"Lido Execution Layer Rewards Vault..",value:e().feeRecipientAddress,className:"lido-fee-recipient-address-section"})]})]})};var x=r(68667),f=r(34695),v=r(86105);let SplitInfoText=e=>{let{isOnlyRewardsSplit:s}=e;return(0,t.jsxs)(i.kC,{css:{justifyContent:"space-between"},direction:"column",children:[(0,t.jsx)(i.xv,{color:"body",variant:"body",css:{mb:"$lg"},children:"Enter each recipients address and their share. Ownership must add to 100%."}),s?(0,t.jsxs)(i.xv,{color:"body",variant:"body",children:["A contribution is allocated to Obol's ‘1% for Decentralisation’",(0,t.jsxs)(i.rU,{href:"https://blog.obol.org/1-percent-for-decentralisation/",css:{display:"inline"},target:"_blank",children:[" ","retroactive fund"," "]}),"."]}):(0,t.jsxs)(i.xv,{color:"body",variant:"body",children:["A contribution of 0.1% of validator principal and rewards are allocated to Obol's ‘1% for Decentralisation’",(0,t.jsxs)(i.rU,{href:"https://blog.obol.org/1-percent-for-decentralisation/",css:{display:"inline"},target:"_blank",children:[" ","retroactive fund"," "]}),"."]})]})},SplitOnlyRewardsTab=e=>{var s,r;let{recipientFields:a,handleOnAddRecipientRow:l,handleOnRemoveRecipient:d,handlePasteOperatorAddresses:o}=e,{formState:{errors:u}}=(0,c.Gc)();return(0,t.jsx)(i.mQ.TabsContent,{value:"reward_splitter",children:(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$md",paddingTop:"$sm"},children:[(0,t.jsx)(n.CF,{}),(0,t.jsxs)(i.kC,{direction:"column",className:"splitter-reward-recipients-section",css:{gap:"$xs"},children:[(0,t.jsx)(i.xv,{variant:"h5",children:"Rewards Split"}),(0,t.jsx)(SplitInfoText,{isOnlyRewardsSplit:!0}),(0,t.jsx)(i.kC,{css:{justifyContent:"start"},children:(0,t.jsx)(GreenTextButton,{onClick:o,children:"PASTE all operator addresses"})}),(0,t.jsx)(n.Cl,{isOnlyRewardsSplit:!0,rows:a,onAddRow:l,onRemoveRow:d}),(null===(s=u.recipients)||void 0===s?void 0:s.some(e=>{var s;return null==e?void 0:null===(s=e.address)||void 0===s?void 0:s.message}))&&(0,t.jsx)(i.xv,{variant:"metadata",color:"test",children:v.gv}),(null===(r=u.recipients)||void 0===r?void 0:r.some(e=>{var s;return null==e?void 0:null===(s=e.split)||void 0===s?void 0:s.message}))&&(0,t.jsx)(i.xv,{variant:"metadata",color:"test",children:"Split value should be greater than 0%"})]})]})})},SplitEverythingTab=e=>{var s,r;let{recipientFields:a,handleOnAddRecipientRow:l,handleOnRemoveRecipient:d,handlePasteOperatorAddresses:o}=e,{formState:{errors:u}}=(0,c.Gc)();return(0,t.jsx)(i.mQ.TabsContent,{value:"splitter",children:(0,t.jsx)(i.kC,{direction:"column",css:{gap:"$md",paddingTop:"$sm"},children:(0,t.jsxs)(i.kC,{direction:"column",className:"splitter-reward-recipients-section",css:{gap:"$xs"},children:[(0,t.jsx)(i.xv,{variant:"h5",children:"Principal & Rewards Split"}),(0,t.jsx)(SplitInfoText,{isOnlyRewardsSplit:!1}),(0,t.jsx)(i.kC,{css:{justifyContent:"start"},children:(0,t.jsx)(GreenTextButton,{onClick:o,children:"PASTE all operator addresses"})}),(0,t.jsx)(n.Cl,{isOnlyRewardsSplit:!1,rows:a,onAddRow:l,onRemoveRow:d}),(null===(s=u.recipients)||void 0===s?void 0:s.some(e=>{var s;return null==e?void 0:null===(s=e.address)||void 0===s?void 0:s.message}))&&(0,t.jsx)(i.xv,{variant:"metadata",color:"test",children:v.gv}),(null===(r=u.recipients)||void 0===r?void 0:r.some(e=>{var s;return null==e?void 0:null===(s=e.split)||void 0===s?void 0:s.message}))&&(0,t.jsx)(i.xv,{variant:"metadata",color:"test",children:"Split value should be greater than 0%"})]})})})};var g=r(25426);let TabsComponent=()=>{let{withdrawalConfigType:e,setWithdrawalConfigType:s,setMaxSplit:r,validatorsSize:n}=(0,x.M)(),{control:a,getValues:l,resetField:d,setValue:o,trigger:p}=(0,c.Gc)(),{fields:h,append:m,insert:j,remove:w}=(0,c.Dq)({control:a,name:"recipients"}),b=(0,c.qo)({name:"recipients"}),handleOnAddRecipientRow=()=>{m({address:"",split:"0"})},handleOnRemoveRecipient=e=>{w(e)},handlePasteOperatorAddresses=()=>{let e=[...b.keys()];b[0].address===g.rw&&e.shift(),w(e);let s=l().operators.map(e=>({address:e.address,split:"0"}));m(s)};return(0,u.useEffect)(()=>{let e=b.reduce((e,s)=>s.split?parseFloat(s.split)+e:e,0);r(e)},[b,r]),(0,u.useEffect)(()=>{let s=l().recipients[0];s.address!==g.rw&&("splitter"===e?j(0,{address:g.rw,split:"0.1"}):"reward_splitter"===e&&j(0,{address:g.rw,split:"1"}))},[e,j,w,l,n]),(0,t.jsxs)(i.mQ.Tabs,{value:e,defaultValue:e,onValueChange:e=>{s(f.oS[e]),d("recipients",{defaultValue:g.tT}),d("principal",{defaultValue:""}),d("singleAddress",{defaultValue:""}),d("feeRecipientAddress",{defaultValue:""}),o("singleAddress",""),o("feeRecipientAddress",""),"lido"===e&&(o("singleAddress",v.Ey),p("singleAddress"),o("feeRecipientAddress",v.UA),p("feeRecipientAddress"))},"aria-label":"View density",css:{width:"100%"},children:[(0,t.jsx)(TabsList,{validatorsSize:n}),(0,t.jsx)(SplitOnlyRewardsTab,{recipientFields:h,handleOnAddRecipientRow:handleOnAddRecipientRow,handleOnRemoveRecipient:handleOnRemoveRecipient,handlePasteOperatorAddresses:handlePasteOperatorAddresses}),(0,t.jsx)(SplitEverythingTab,{recipientFields:h,handleOnAddRecipientRow:handleOnAddRecipientRow,handleOnRemoveRecipient:handleOnRemoveRecipient,handlePasteOperatorAddresses:handlePasteOperatorAddresses}),(0,t.jsx)(LidoTab,{}),(0,t.jsx)(CustomTab,{})]})},WithdrawalConfigurationSection=()=>(0,t.jsxs)(i.W2,{className:"withdrawal-section",css:{gap:"$lg"},alignItems:"start",children:[(0,t.jsx)(d.N,{children:"Withdrawal Configuration"}),(0,t.jsx)(TabsComponent,{})]});var j=r(85281),w=r(11163),b=r(56736);let ConfigClusterForm=()=>{let{address:e}=(0,h.m)(),{clusterSize:s,setClusterSize:r,validatorsSize:d,setValidatorsSize:o,withdrawalConfigType:u,maxSplit:p}=(0,x.M)(),m=(0,w.useRouter)(),f=(0,j.o)(e=>e.clusterDefinition),v=(0,j.o)(e=>e.completeLeaderStep),C=(0,j.o)(e=>e.enableLeaderStep),A=(0,j.o)(e=>e.updateClusterDefinition),R=(0,c.cI)({mode:"onChange",defaultValues:(0,b.uZ)(f)}),{formState:{isDirty:S,isValid:T}}=R;return(0,t.jsx)(c.RV,{...R,children:(0,t.jsx)(l.l0,{onSubmit:R.handleSubmit(s=>{v("config-cluster"),A({...s,recipients:null==s?void 0:s.recipients.map(e=>({...e,split:parseFloat(e.split).toFixed(2)})),creator:{address:e},validatorsEthAmount:32*d,validators:Array(d).fill({feeRecipientAddress:s.feeRecipientAddress,withdrawalAddress:s.singleAddress}),withdrawalConfigType:u});let r=C("confirm-configuration");m.push(r.href)},e=>{console.debug(e,"form errors")}),children:(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,t.jsx)(i.W2,{className:"cluster-details",alignItems:"start",children:(0,t.jsx)(n.PQ,{register:R.register,clusterSize:s,setClusterSize:r,control:R.control,min:g.dd})}),(0,t.jsx)(NodeOperatorsSection,{clusterSize:s}),(0,t.jsx)(n.J1,{control:R.control,withdrawalConfigType:u,validatorsSize:d,setValidatorsSize:o}),(0,t.jsx)(CharonClientENRSection,{}),(0,t.jsx)(WithdrawalConfigurationSection,{}),(0,t.jsx)(a.M,{disabled:!S||!T||!e||100!==p&&("reward_splitter"===u||"splitter"===u)})]})})})},ConfigCluster=()=>(0,t.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,t.jsx)(i.xv,{variant:"h3",children:"Configure Cluster"}),(0,t.jsx)(x.O,{children:(0,t.jsx)(ConfigClusterForm,{})})]});var C=ConfigCluster;ConfigCluster.layout="ProgressTrackerLayout"}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=62367)}),_N_E=e.O()}]);