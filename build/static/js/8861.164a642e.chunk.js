"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8861],{25407:(e,a,t)=>{t.d(a,{Y:()=>s});const s="http://20.235.178.6:3007"},58861:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Z});var s=t(72791),r=t(47022),n=t(89743),l=t(2677),c=t(28282),o=t(16157),i=t(33821),d=t(323),m=t(53392),u=t(74292),h=t(34782),f=t(11087),x=t(59513),j=t.n(x),g=(t(68639),t(13162),t(88898)),_=t(25407),y=(t(44331),t(59565)),p=t(47665),b=t(80184);const Z=()=>{const{user:e}=(0,s.useContext)(g.S),a=e.userId;(0,s.useEffect)((()=>{console.log(a)}),[a]);const[t,x]=(0,s.useState)([]),[Z,A]=(0,s.useState)([]),[N,v]=(0,s.useState)(""),[w,C]=(0,s.useState)(""),[k,S]=(0,s.useState)([]),[E,F]=(0,s.useState)([]),[P,T]=(0,s.useState)(""),[I,M]=(0,s.useState)(""),[U,Y]=(0,s.useState)(""),[B,D]=(0,s.useState)(""),[L,O]=(0,s.useState)(new Date),[R,K]=(0,s.useState)(!1),[Q,X]=(0,s.useState)(!1),[z,J]=(0,s.useState)(!1),[V,W]=(0,s.useState)(""),[H,q]=(0,s.useState)(""),[G,$]=(0,s.useState)(""),[ee,ae]=(0,s.useState)("");(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(_.Y,"/api/users/get_all_firms_by_user/").concat(a));if(!e.ok)throw new Error("Failed to fetch data");const t=await e.json();x(t.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[a]),(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(_.Y,"/api/users/get_all_firms_by_adding_user/").concat(a));if(!e.ok)throw new Error("Failed to fetch data");const t=await e.json();A(t.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[a]);const te=async e=>{try{const a=await fetch("".concat(_.Y,"/api/users/get_general_ledgers/").concat(e));if(!a.ok)throw new Error("Failed to fetch data");return(await a.json()).data}catch(a){console.error("Error fetching data:",a)}};(0,s.useEffect)((()=>{(async()=>{if(N){K(!0);const e=await te(N);S(e),K(!1)}})()}),[N]),(0,s.useEffect)((()=>{(async()=>{if(w){X(!0);const e=await te(w);F(e),X(!1)}})()}),[w]);return(0,b.jsxs)("div",{children:[(0,b.jsx)(y.LC,{}),(0,b.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,b.jsx)(y.WW,{}),(0,b.jsx)(r.Z,{fluid:!0,className:"flex-grow-1 px-3 px-md-5",children:(0,b.jsx)(n.Z,{className:"justify-content-center mb-3",children:(0,b.jsx)(l.Z,{md:12,children:(0,b.jsxs)(c.Z,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,b.jsxs)(n.Z,{className:"align-items-center",children:[(0,b.jsx)(l.Z,{style:{marginLeft:"11px"},children:(0,b.jsxs)(n.Z,{className:"allfirms_icon_title_row align-items-center",children:[(0,b.jsx)(l.Z,{className:"col-2 col-md-1",children:(0,b.jsx)("img",{className:"sidebar_icon_color",src:p,width:25,height:25,alt:"All Firms Logo"})}),(0,b.jsx)(l.Z,{className:"col-9 col-md-9",children:(0,b.jsx)("h5",{className:"title_font mb-0",style:{color:"white"},children:"Make Payment"})})]})}),(0,b.jsx)(l.Z,{className:"col-5 makepay_allpay_but_col",children:(0,b.jsx)(f.rU,{to:"/user_allpayments",children:(0,b.jsx)(o.Z,{id:"but_color",className:"m-0",children:"All Payments"})})})]}),(0,b.jsx)(n.Z,{className:"allfirms_table_row py-5 justify-content-center",children:(0,b.jsx)(l.Z,{className:"make_pay_block_col mb-3 mb-md-0",children:(0,b.jsx)(n.Z,{className:"justify-content-center",children:(0,b.jsxs)(l.Z,{md:12,children:[(0,b.jsx)(c.Z,{className:"bg_color_blue_white",children:(0,b.jsx)(c.Z.Body,{children:(0,b.jsxs)(i.Z,{children:[(0,b.jsx)(d.Z,{className:"mb-3",controlId:"formTransactionID",children:(0,b.jsx)(m.Z,{children:"Transaction :"})}),(0,b.jsxs)(d.Z,{as:n.Z,className:"mb-3",controlId:"formFrom",children:[(0,b.jsx)(m.Z,{column:!0,className:"make_pay_lable",md:3,children:"From:"}),(0,b.jsx)(l.Z,{className:"make_pay_select_firm",children:(0,b.jsxs)(i.Z.Control,{as:"select",value:N,className:"form-select",onChange:e=>v(e.target.value),children:[(0,b.jsx)("option",{value:"",children:"Select Firm"}),t.map((e=>(0,b.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})}),(0,b.jsxs)(l.Z,{className:"make_pay_select_acc",children:[(0,b.jsxs)(i.Z.Control,{as:"select",value:P,className:"form-select",onChange:e=>T(e.target.value),disabled:!N||R,children:[(0,b.jsx)("option",{value:"",children:"Select Your Firm Account"}),k.map((e=>(0,b.jsx)("option",{value:e.gl_id,children:e.gl_name},e.gl_id)))]}),R&&(0,b.jsx)("p",{children:"Loading..."})]})]}),(0,b.jsxs)(d.Z,{as:n.Z,className:"mb-3",controlId:"formTo",children:[(0,b.jsx)(m.Z,{column:!0,className:"make_pay_lable",md:3,children:"To:"}),(0,b.jsx)(l.Z,{className:"make_pay_select_firm",children:(0,b.jsxs)(i.Z.Control,{as:"select",value:w,className:"form-select",onChange:e=>C(e.target.value),children:[(0,b.jsx)("option",{value:"",children:"Select Firm"}),Z.map((e=>(0,b.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})}),(0,b.jsxs)(l.Z,{className:"make_pay_select_acc",children:[(0,b.jsxs)(i.Z.Control,{as:"select",value:I,className:"form-select",onChange:e=>M(e.target.value),disabled:!w||Q,children:[(0,b.jsx)("option",{value:"",children:"Select Your Firm Account"}),E.map((e=>(0,b.jsx)("option",{value:e.gl_id,children:e.gl_name},e.gl_id)))]}),Q&&(0,b.jsx)("p",{children:"Loading..."})]})]}),(0,b.jsxs)(d.Z,{as:n.Z,className:"mb-3",controlId:"formAmount",children:[(0,b.jsx)(m.Z,{column:!0,sm:3,children:"Amount :"}),(0,b.jsx)(l.Z,{sm:4,children:(0,b.jsx)(u.Z,{type:"text",placeholder:"Enter Amount",value:U,onChange:e=>Y(e.target.value)})})]}),(0,b.jsxs)(d.Z,{as:n.Z,className:"mb-3",controlId:"formDate",children:[(0,b.jsx)(m.Z,{column:!0,className:"make_pay_lable",md:3,children:"Date:"}),(0,b.jsx)(l.Z,{sm:4,children:(0,b.jsx)(j(),{selected:L,onChange:e=>O(e),showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa",className:"form-control"})})]}),(0,b.jsxs)(d.Z,{as:n.Z,className:"mb-3",controlId:"formRemark",children:[(0,b.jsx)(m.Z,{column:!0,sm:3,children:"Remark :"}),(0,b.jsx)(l.Z,{sm:9,children:(0,b.jsx)(u.Z,{type:"text",placeholder:"Enter Remark",value:B,onChange:e=>D(e.target.value)})})]}),ee&&(0,b.jsx)("p",{style:{color:"red"},children:ee})]})})}),(0,b.jsx)(n.Z,{className:"justify-content-center align-content-center mt-3 cf_acc_bt_row",children:(0,b.jsx)(o.Z,{id:"but_color",onClick:()=>{!U||isNaN(U)||Number(U)<=0?ae("Please enter a valid, positive amount."):(ae(""),W("Confirm Payment"),q("Are you sure you want to proceed with this payment?"),$("Confirm Payment"),J(!0))},children:"Pay now"})})]})})})})]})})})})]}),(0,b.jsxs)(h.Z,{show:z,onHide:()=>J(!1),centered:!0,children:[(0,b.jsx)(h.Z.Header,{closeButton:!0,children:(0,b.jsx)(h.Z.Title,{children:V})}),(0,b.jsx)(h.Z.Body,{children:H}),(0,b.jsxs)(h.Z.Footer,{children:[(0,b.jsx)(o.Z,{variant:"secondary",onClick:()=>J(!1),children:"Confirm Payment"===G?"Cancel":"Close"}),"Confirm Payment"===G&&(0,b.jsx)(o.Z,{id:"but_color",variant:"primary",onClick:async()=>{if("Close"===G)J(!1);else try{const e={from_gl_id:P,to_gl_id:I,amount:Number(U),from_firm_id:N,to_firm_id:w,remark:B,trans_type:"payment",transaction_date:L.toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},t=await fetch("".concat(_.Y,"/api/users/payment/").concat(a),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to process payment");const s=await t.json();console.log(s),console.log(L),console.log(L.toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})),W("Payment Successful"),q("Your payment has been successfully processed."),$("Close")}catch(e){console.error("Error processing payment:",e),W("Payment Failed"),q("There was an error processing your payment. Please try again."),$("Close")}finally{J(!0)}},children:G})]})]})]})}},16157:(e,a,t)=>{t.d(a,{Z:()=>u});var s=t(81694),r=t.n(s),n=t(72791),l=t(80184);const c=["as","disabled"];function o(e){let{tagName:a,disabled:t,href:s,target:r,rel:n,role:l,onClick:c,tabIndex:o=0,type:i}=e;a||(a=null!=s||null!=r||null!=n?"a":"button");const d={tagName:a};if("button"===a)return[{type:i||"button",disabled:t},d];const m=e=>{(t||"a"===a&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),t?e.stopPropagation():null==c||c(e)};return"a"===a&&(s||(s="#"),t&&(s=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:o,href:s,target:"a"===a?r:void 0,"aria-disabled":t||void 0,rel:"a"===a?n:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const i=n.forwardRef(((e,a)=>{let{as:t,disabled:s}=e,r=function(e,a){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,c);const[n,{tagName:i}]=o(Object.assign({tagName:t,disabled:s},r));return(0,l.jsx)(i,Object.assign({},r,n,{ref:a}))}));i.displayName="Button";var d=t(10162);const m=n.forwardRef(((e,a)=>{let{as:t,bsPrefix:s,variant:n="primary",size:c,active:i=!1,disabled:m=!1,className:u,...h}=e;const f=(0,d.vE)(s,"btn"),[x,{tagName:j}]=o({tagName:t,disabled:m,...h}),g=j;return(0,l.jsx)(g,{...x,...h,ref:a,disabled:m,className:r()(u,f,i&&"active",n&&"".concat(f,"-").concat(n),c&&"".concat(f,"-").concat(c),h.href&&m&&"disabled")})}));m.displayName="Button";const u=m},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=8861.164a642e.chunk.js.map