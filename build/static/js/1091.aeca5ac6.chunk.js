"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1091],{25407:(e,t,s)=>{s.d(t,{Y:()=>a});const a="http://13.233.194.13:3007"},41091:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=s(72791),r=s(78983),n=s(35109),c=s(13162),l=s(33821),i=s(323),o=s(89743),d=s(2677),h=s(74292),m=s(28282),x=s(62591),j=s(11087),f=s(88898),u=s(25407),A=s(59513),b=s.n(A),g=(s(68639),s(80184));const p=()=>{const{user:e}=(0,a.useContext)(f.S),t=e.userId,[s,A]=(0,a.useState)([]),[p,_]=(0,a.useState)(""),[y,w]=(0,a.useState)([]),[N,C]=(0,a.useState)(!1),[S,D]=(0,a.useState)(null),[E,Z]=(0,a.useState)(!0),[v,F]=(0,a.useState)(null),[T,k]=(0,a.useState)(null);(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(u.Y,"/api/users/get_all_firms_by_user/").concat(t));if(!e.ok)throw new Error("Failed to fetch firms");const s=await e.json();A(s.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[t]),(0,a.useEffect)((()=>{L()}),[p,v,T]),(0,a.useEffect)((()=>{(async()=>{if(p)try{const e=p,t=await fetch("".concat(u.Y,"/api/users/firm_total_bal/").concat(e));if(!t.ok)throw new Error("Failed to fetch total balance");const s=await t.json();D(s.data.totalBalance)}catch(e){console.error("Error fetching total balance:",e)}})()}),[p]);const L=async()=>{if(p){C(!0);try{const e=p;let t="".concat(u.Y,"/api/users/show_receipt_transactions/").concat(e);if(v){const e=v.toLocaleDateString("en-CA");t+="?startDate=".concat(e)}if(T){const e=new Date(T);e.setDate(e.getDate()+1);const s=e.toLocaleDateString("en-CA");t+=v?"&endDate=".concat(s):"?endDate=".concat(s)}const s=await fetch(t),a=await s.json();if(!s.ok||!1===a.status)return Z(!1),void w([]);w(a.data),Z(a.data.length>0)}catch(e){console.error("Error fetching transactions:",e),Z(!1)}finally{C(!1)}}};return(0,g.jsxs)("div",{children:[(0,g.jsx)(n.LC,{}),(0,g.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,g.jsx)(n.WW,{}),(0,g.jsx)("div",{className:"body flex-grow-1 px-5",children:(0,g.jsx)(r.rb,{className:"justify-content-center mb-3",children:(0,g.jsx)(r.b7,{md:12,children:(0,g.jsxs)(r.xH,{className:"card_border_color_change py-3",style:{borderColor:"white"},children:[(0,g.jsxs)(r.rb,{className:"allfirms_title_mainrow",children:[(0,g.jsx)(r.b7,{md:8,style:{marginLeft:"10px"},children:(0,g.jsxs)(r.rb,{className:"allfirms_title_row py-1 align-items-center",children:[(0,g.jsx)(r.b7,{xs:1,children:(0,g.jsx)(r.DW,{className:"",src:c,width:25,height:25})}),(0,g.jsx)(r.b7,{xs:4,children:(0,g.jsx)("h4",{children:"All Receipts"})})]})}),(0,g.jsx)(r.b7,{md:3,className:"align-items-center justify-content-end",children:(0,g.jsx)(j.rU,{to:"/user_createreceipt",children:(0,g.jsx)(r.u5,{id:"but_color",children:"Create Receipt"})})})]}),(0,g.jsx)(r.rb,{className:"allfirms_table_row py-3 justify-content-center",children:(0,g.jsxs)(r.b7,{children:[(0,g.jsxs)(r.rb,{className:"justify-content-end mb-3",children:[(0,g.jsx)(r.b7,{md:8,className:"justify-content-end justify-content-md-end",style:{paddingLeft:"375px"},children:(0,g.jsx)(l.Z,{children:(0,g.jsx)(i.Z,{as:o.Z,className:"mb-3",children:(0,g.jsx)(d.Z,{md:11,className:"justify-content-end justify-content-md-end",children:(0,g.jsxs)(h.Z,{as:"select",value:p,className:"form-select",onChange:e=>_(e.target.value),style:{maxWidth:"100%"},children:[(0,g.jsx)("option",{value:"",children:"Select Firm"}),s.map((e=>(0,g.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})})})})}),(0,g.jsx)(r.b7,{md:4,className:"d-flex align-items-center justify-content-center justify-content-md-end",children:null!==S&&(0,g.jsxs)("div",{style:{backgroundColor:"green",color:"white",padding:"8px",borderRadius:"5px",fontSize:"14px"},children:["Firm Total Balance: ",S]})})]}),(0,g.jsx)(r.rb,{className:"justify-content-center mb-3",children:(0,g.jsxs)(r.b7,{md:6,className:"d-flex justify-content-md-between",children:[(0,g.jsx)(b(),{selected:v,onChange:e=>F(e),selectsStart:!0,startDate:v,endDate:T,placeholderText:"Start Date",className:"form-control",md:3}),(0,g.jsx)(b(),{selected:T,onChange:e=>k(e),selectsEnd:!0,startDate:v,endDate:T,minDate:v,placeholderText:"End Date",className:"form-control",md:3}),(0,g.jsx)(r.u5,{onClick:L,id:"but_color",md:2,children:"Filter"})]})}),(0,g.jsx)(r.rb,{children:(0,g.jsx)(d.Z,{md:12,children:(0,g.jsxs)(m.Z,{className:"mb-3",children:[(0,g.jsx)(m.Z.Header,{className:"text-white",id:"bg__color",children:"Receipt Transactions"}),(0,g.jsx)(m.Z.Body,{children:N?(0,g.jsx)("p",{children:"Loading..."}):E?(0,g.jsxs)(x.Z,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Sr.No"}),(0,g.jsx)("th",{children:"To GL Name"}),(0,g.jsx)("th",{children:"From Firm & GL Name"}),(0,g.jsx)("th",{children:"Amount"}),(0,g.jsx)("th",{children:"Date"})]})}),(0,g.jsx)("tbody",{children:y.map(((e,t)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:t+1}),(0,g.jsx)("td",{children:e.to_gl_name}),(0,g.jsxs)("td",{children:[e.from_firm_name," - ",e.from_gl_name]}),(0,g.jsxs)("td",{style:{color:"green"},children:["+",e.amount]}),(0,g.jsx)("td",{children:new Date(e.transaction_date).toLocaleString()})]},e.transaction_id)))})]}):(0,g.jsx)("p",{children:"No Transactions for this firm"})})]})})})]})})]})})})})]})]})}},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=1091.aeca5ac6.chunk.js.map