"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4576],{25407:(e,a,s)=>{s.d(a,{Y:()=>t});const t="http://20.235.178.6:3007"},37222:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var t=s(72791),n=s(47022),r=s(89743),l=s(2677),c=s(28282),o=s(16157),i=s(33821),d=s(323),m=s(53392),u=s(74292),h=s(34782),x=s(11087),f=s(59565),j=(s(13162),s(88898)),_=s(25407),g=s(12165),b=s(80184);const p=()=>{const{user:e}=(0,t.useContext)(j.S),a=e.userId,[s,p]=(0,t.useState)([]),[Z,A]=(0,t.useState)(""),[y,N]=(0,t.useState)(""),[v,w]=(0,t.useState)([]),[C,k]=(0,t.useState)([]),[S,T]=(0,t.useState)(""),[E,F]=(0,t.useState)(""),[I,P]=(0,t.useState)(""),[U,B]=(0,t.useState)(""),[O,L]=(0,t.useState)(!1),[R,Y]=(0,t.useState)(!1),[K,M]=(0,t.useState)({}),[Q,V]=(0,t.useState)(!1),[X,z]=(0,t.useState)(""),[D,J]=(0,t.useState)(""),[H,q]=(0,t.useState)("");(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(_.Y,"/api/users/get_all_firms_by_user/").concat(a));if(!e.ok)throw new Error("Failed to show firms");const s=await e.json();p(s.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[a]);const W=async e=>{try{const a=await fetch("".concat(_.Y,"/api/users/get_general_ledgers/").concat(e));if(!a.ok)throw new Error("Failed to show GL list");return(await a.json()).data}catch(a){console.error("Error fetching GL list:",a)}};(0,t.useEffect)((()=>{(async()=>{if(Z){L(!0);const e=await W(Z);w(e),L(!1)}})()}),[Z]),(0,t.useEffect)((()=>{(async()=>{if(y){Y(!0);const e=await W(y);k(e),Y(!1)}})()}),[y]);return(0,b.jsxs)("div",{children:[(0,b.jsx)(f.gV,{}),(0,b.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,b.jsx)(f.Pm,{}),(0,b.jsx)(n.Z,{fluid:!0,className:"flex-grow-1 px-3 px-md-5",children:(0,b.jsx)(r.Z,{className:"justify-content-center mb-3",children:(0,b.jsx)(l.Z,{md:12,children:(0,b.jsxs)(c.Z,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,b.jsxs)(r.Z,{className:"allfirms_title_mainrow",children:[(0,b.jsx)(l.Z,{md:8,style:{marginLeft:"10px"},children:(0,b.jsxs)(r.Z,{className:"allfirms_title_row py-1 align-items-center",children:[(0,b.jsx)(l.Z,{md:1,children:(0,b.jsx)("img",{className:"",src:g,width:25,height:25,alt:"AllFirms Logo"})}),(0,b.jsx)(l.Z,{md:5,children:(0,b.jsx)("h4",{className:"mb-0",style:{color:"white"},children:"Make Transaction"})})]})}),(0,b.jsx)(l.Z,{md:3,className:"d-flex align-items-center justify-content-end",children:(0,b.jsx)(x.rU,{to:"/firm_transactions",children:(0,b.jsx)(o.Z,{id:"but_color",children:"All Transactions"})})})]}),(0,b.jsx)(r.Z,{className:"allfirms_table_row py-5 justify-content-center",children:(0,b.jsx)(l.Z,{className:"make_pay_block_col mb-3 mb-md-0",children:(0,b.jsx)(r.Z,{className:"justify-content-center",children:(0,b.jsxs)(l.Z,{md:12,children:[(0,b.jsx)(c.Z,{className:"bg_color_blue_white",children:(0,b.jsx)(c.Z.Body,{children:(0,b.jsxs)(i.Z,{children:[(0,b.jsx)(d.Z,{className:"mb-3",controlId:"formTransactionID",children:(0,b.jsx)(m.Z,{children:"Transaction :"})}),(0,b.jsxs)(d.Z,{as:r.Z,className:"mb-3",controlId:"formFrom",children:[(0,b.jsx)(m.Z,{column:!0,className:"make_pay_lable",md:3,children:"From:"}),(0,b.jsx)(l.Z,{className:"make_pay_select_firm",children:(0,b.jsxs)(i.Z.Control,{as:"select",value:Z,className:"form-select",onChange:e=>A(e.target.value),children:[(0,b.jsx)("option",{value:"",children:"Select Firm"}),s.map((e=>(0,b.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})}),(0,b.jsxs)(l.Z,{className:"make_pay_select_acc",children:[(0,b.jsxs)(i.Z.Control,{as:"select",value:S,className:"form-select",onChange:e=>T(e.target.value),disabled:!Z||O,children:[(0,b.jsx)("option",{value:"",children:"Select Your Firm Account"}),v.map((e=>(0,b.jsx)("option",{value:e.gl_id,children:e.gl_name},e.gl_id)))]}),O&&(0,b.jsx)("p",{children:"Loading..."})]})]}),(0,b.jsxs)(d.Z,{as:r.Z,className:"mb-3",controlId:"formTo",children:[(0,b.jsx)(m.Z,{column:!0,className:"make_pay_lable",md:3,children:"To:"}),(0,b.jsx)(l.Z,{className:"make_pay_select_firm",children:(0,b.jsxs)(i.Z.Control,{as:"select",value:y,className:"form-select",onChange:e=>N(e.target.value),children:[(0,b.jsx)("option",{value:"",children:"Select Firm"}),s.map((e=>(0,b.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})}),(0,b.jsxs)(l.Z,{className:"make_pay_select_acc",children:[(0,b.jsxs)(i.Z.Control,{as:"select",value:E,className:"form-select",onChange:e=>F(e.target.value),disabled:!y||R,children:[(0,b.jsx)("option",{value:"",children:"Select Your Firm Account"}),C.map((e=>(0,b.jsx)("option",{value:e.gl_id,children:e.gl_name},e.gl_id)))]}),R&&(0,b.jsx)("p",{children:"Loading..."})]})]}),(0,b.jsxs)(d.Z,{as:r.Z,className:"mb-3",controlId:"formAmount",children:[(0,b.jsx)(m.Z,{column:!0,sm:3,children:"Amount :"}),(0,b.jsxs)(l.Z,{sm:4,children:[(0,b.jsx)(u.Z,{type:"text",placeholder:"Enter Amount",value:I,onChange:e=>P(e.target.value),isInvalid:!!K.amount}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",children:K.amount})]})]}),(0,b.jsxs)(d.Z,{as:r.Z,className:"mb-3",controlId:"formRemark",children:[(0,b.jsx)(m.Z,{column:!0,sm:3,children:"Remark :"}),(0,b.jsx)(l.Z,{sm:9,children:(0,b.jsx)(u.Z,{type:"text",placeholder:"Enter Remark",value:U,onChange:e=>B(e.target.value)})})]})]})})}),(0,b.jsx)(r.Z,{className:"justify-content-center mt-3",children:(0,b.jsx)(o.Z,{className:"col-md-4 col-6",id:"but_color",onClick:()=>{const e=(e=>{const a={};return e?(isNaN(e)||e<=0)&&(a.amount="Amount must be a positive number"):a.amount="Amount is required",a})(I);Object.keys(e).length>0?M(e):(V(!0),z("Confirm Transaction"),J("Are you sure you want to proceed with this Transaction?"),q("Confirm Transaction"))},children:"Process Transaction"})})]})})})})]})})})})]}),(0,b.jsxs)(h.Z,{show:Q,onHide:()=>V(!1),centered:!0,children:[(0,b.jsx)(h.Z.Header,{closeButton:!0,children:(0,b.jsx)(h.Z.Title,{children:X})}),(0,b.jsx)(h.Z.Body,{children:D}),(0,b.jsx)(h.Z.Footer,{children:"Confirm Transaction"===H?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{variant:"secondary",onClick:()=>V(!1),children:"Cancel"}),(0,b.jsx)(o.Z,{id:"but_color",onClick:async()=>{try{const e={from_gl_id:S,to_gl_id:E,amount:Number(I),from_firm_id:Z,to_firm_id:y,remark:U},s=await fetch("".concat(_.Y,"/api/users/payment/").concat(a),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!s.ok)throw new Error("Failed to process this transaction");const t=await s.json();console.log(t),V(!0),z("Transaction Status"),J("Transaction Successful"),q("Close"),setTimeout((()=>{window.location.reload()}),1e3)}catch(e){console.error("Problem for processing transaction:",e),V(!0),z("Transaction Status"),J("Transaction Failed"),q("Close")}},children:H})]}):(0,b.jsx)(o.Z,{id:"but_color",onClick:()=>V(!1),children:H})})]})]})}},16157:(e,a,s)=>{s.d(a,{Z:()=>u});var t=s(81694),n=s.n(t),r=s(72791),l=s(80184);const c=["as","disabled"];function o(e){let{tagName:a,disabled:s,href:t,target:n,rel:r,role:l,onClick:c,tabIndex:o=0,type:i}=e;a||(a=null!=t||null!=n||null!=r?"a":"button");const d={tagName:a};if("button"===a)return[{type:i||"button",disabled:s},d];const m=e=>{(s||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),s?e.stopPropagation():null==c||c(e)};return"a"===a&&(t||(t="#"),s&&(t=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:s?void 0:o,href:t,target:"a"===a?n:void 0,"aria-disabled":s||void 0,rel:"a"===a?r:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const i=r.forwardRef(((e,a)=>{let{as:s,disabled:t}=e,n=function(e,a){if(null==e)return{};var s,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,c);const[r,{tagName:i}]=o(Object.assign({tagName:s,disabled:t},n));return(0,l.jsx)(i,Object.assign({},n,r,{ref:a}))}));i.displayName="Button";var d=s(10162);const m=r.forwardRef(((e,a)=>{let{as:s,bsPrefix:t,variant:r="primary",size:c,active:i=!1,disabled:m=!1,className:u,...h}=e;const x=(0,d.vE)(t,"btn"),[f,{tagName:j}]=o({tagName:s,disabled:m,...h}),_=j;return(0,l.jsx)(_,{...f,...h,ref:a,disabled:m,className:n()(u,x,i&&"active",r&&"".concat(x,"-").concat(r),c&&"".concat(x,"-").concat(c),h.href&&m&&"disabled")})}));m.displayName="Button";const u=m},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=4576.9e3fe0f1.chunk.js.map