"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[269],{17598:(e,t,s)=>{s.d(t,{T:()=>a});const a="http://3.111.33.23:3007"},37269:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=s(65043),n=s(93946),c=s(42645),r=s(85049),l=s(67006),i=s(1433),o=s(61072),d=s(78602),h=s(86311),m=s(88258),x=s(64196),j=s(35475),f=s(59395),A=s(17598),u=s(31899),_=s.n(u),g=(s(25015),s(70579));const p=()=>{const{user:e}=(0,a.useContext)(f.R),t=e.userId,[s,u]=(0,a.useState)([]),[p,y]=(0,a.useState)(""),[b,N]=(0,a.useState)([]),[w,F]=(0,a.useState)(!1),[E,C]=(0,a.useState)(null),[D,S]=(0,a.useState)(!0),[U,T]=(0,a.useState)(null),[v,K]=(0,a.useState)(null);(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(A.T,"/api/users/get_all_firms_by_user/").concat(t));if(!e.ok)throw new Error("Failed to fetch firms");const s=await e.json();u(s.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[t]),(0,a.useEffect)((()=>{k()}),[p,U,v]),(0,a.useEffect)((()=>{(async()=>{if(p)try{const e=p,t=await fetch("".concat(A.T,"/api/users/firm_total_bal/").concat(e));if(!t.ok)throw new Error("Failed to fetch total balance");const s=await t.json();C(s.data.totalBalance)}catch(e){console.error("Error fetching total balance:",e)}})()}),[p]);const k=async()=>{if(p){F(!0);try{const e=p;let t="".concat(A.T,"/api/users/show_receipt_transactions/").concat(e);if(U){const e=U.toLocaleDateString("en-CA");t+="?startDate=".concat(e)}if(v){const e=new Date(v);e.setDate(e.getDate()+1);const s=e.toLocaleDateString("en-CA");t+=U?"&endDate=".concat(s):"?endDate=".concat(s)}const s=await fetch(t),a=await s.json();if(!s.ok||!1===a.status)return S(!1),void N([]);N(a.data),S(a.data.length>0)}catch(e){console.error("Error fetching transactions:",e),S(!1)}finally{F(!1)}}};return(0,g.jsxs)("div",{children:[(0,g.jsx)(c.ay,{}),(0,g.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,g.jsx)(c.DH,{}),(0,g.jsx)("div",{className:"body flex-grow-1 px-5",children:(0,g.jsx)(n.sK,{className:"justify-content-center mb-3",children:(0,g.jsx)(n.UF,{md:12,children:(0,g.jsxs)(n.E$,{className:"card_border_color_change py-3",style:{borderColor:"white"},children:[(0,g.jsxs)(n.sK,{className:"allfirms_title_mainrow",children:[(0,g.jsx)(n.UF,{md:8,style:{marginLeft:"10px"},children:(0,g.jsxs)(n.sK,{className:"allfirms_title_row py-1 align-items-center",children:[(0,g.jsx)(n.UF,{xs:1,children:(0,g.jsx)(n.t7,{className:"",src:r,width:25,height:25})}),(0,g.jsx)(n.UF,{xs:4,children:(0,g.jsx)("h4",{children:"All Receipts"})})]})}),(0,g.jsx)(n.UF,{md:3,className:"align-items-center justify-content-end",children:(0,g.jsx)(j.N_,{to:"/create_receipt",children:(0,g.jsx)(n.Q_,{id:"but_color",children:"Create Receipt"})})})]}),(0,g.jsx)(n.sK,{className:"allfirms_table_row py-3 justify-content-center",children:(0,g.jsxs)(n.UF,{children:[(0,g.jsxs)(n.sK,{className:"justify-content-end mb-3",children:[(0,g.jsx)(n.UF,{md:8,className:"justify-content-end justify-content-md-end",style:{paddingLeft:"375px"},children:(0,g.jsx)(l.A,{children:(0,g.jsx)(i.A,{as:o.A,className:"mb-3",children:(0,g.jsx)(d.A,{md:11,className:"justify-content-end justify-content-md-end",children:(0,g.jsxs)(h.A,{as:"select",value:p,className:"form-select",onChange:e=>y(e.target.value),style:{maxWidth:"100%"},children:[(0,g.jsx)("option",{value:"",children:"Select Firm"}),s.map((e=>(0,g.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})})})})}),(0,g.jsx)(n.UF,{md:4,className:"d-flex align-items-center justify-content-center justify-content-md-end",children:null!==E&&(0,g.jsxs)("div",{style:{backgroundColor:"green",color:"white",padding:"8px",borderRadius:"5px",fontSize:"14px"},children:["Firm Total Balance: ",E]})})]}),(0,g.jsx)(n.sK,{className:"justify-content-center mb-3",children:(0,g.jsxs)(n.UF,{md:6,className:"d-flex justify-content-md-between",children:[(0,g.jsx)(_(),{selected:U,onChange:e=>T(e),selectsStart:!0,startDate:U,endDate:v,placeholderText:"Start Date",className:"form-control",md:3}),(0,g.jsx)(_(),{selected:v,onChange:e=>K(e),selectsEnd:!0,startDate:U,endDate:v,minDate:U,placeholderText:"End Date",className:"form-control",md:3}),(0,g.jsx)(n.Q_,{onClick:k,id:"but_color",md:2,children:"Filter"})]})}),(0,g.jsx)(n.sK,{children:(0,g.jsx)(d.A,{md:12,children:(0,g.jsxs)(m.A,{className:"mb-3",children:[(0,g.jsx)(m.A.Header,{className:"text-white",id:"bg__color",children:"Receipt Transactions"}),(0,g.jsx)(m.A.Body,{children:w?(0,g.jsx)("p",{children:"Loading..."}):D?(0,g.jsxs)(x.A,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Sr.No"}),(0,g.jsx)("th",{children:"To GL Name"}),(0,g.jsx)("th",{children:"From Firm & GL Name"}),(0,g.jsx)("th",{children:"Amount"}),(0,g.jsx)("th",{children:"Date"})]})}),(0,g.jsx)("tbody",{children:b.map(((e,t)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:t+1}),(0,g.jsx)("td",{children:e.to_gl_name}),(0,g.jsxs)("td",{children:[e.from_firm_name," - ",e.from_gl_name]}),(0,g.jsxs)("td",{style:{color:"green"},children:["+",e.amount]}),(0,g.jsx)("td",{children:new Date(e.transaction_date).toLocaleString()})]},e.transaction_id)))})]}):(0,g.jsx)("p",{children:"No Transactions for this firm"})})]})})})]})})]})})})})]})]})}},85049:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=269.3ae09998.chunk.js.map