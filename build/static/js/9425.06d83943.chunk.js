"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9425],{25407:(e,t,s)=>{s.d(t,{Y:()=>a});const a="http://13.233.194.13:3007"},29425:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(72791),r=s(78983),n=s(35109),c=s(13162),l=s(33821),i=s(323),o=s(89743),d=s(2677),m=s(74292),h=s(28282),x=s(62591),j=s(11087),f=s(88898),u=s(25407),A=s(59513),_=s.n(A),b=(s(68639),s(80184));const g=()=>{const{user:e}=(0,a.useContext)(f.S),t=e.userId,[s,A]=(0,a.useState)([]),[g,p]=(0,a.useState)(""),[y,N]=(0,a.useState)([]),[w,D]=(0,a.useState)(!1),[C,E]=(0,a.useState)(null),[S,Z]=(0,a.useState)(!0),[F,T]=(0,a.useState)(null),[k,v]=(0,a.useState)(null);(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(u.Y,"/api/users/get_all_firms_by_user/").concat(t));if(!e.ok)throw new Error("Failed to fetch firms");const s=await e.json();A(s.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[t]),(0,a.useEffect)((()=>{U()}),[g,F,k]);const U=async()=>{if(g){D(!0);try{const e=g;let t="".concat(u.Y,"/api/users/show_firm_all_transactions/").concat(e,"/transactions");if(F){const e=F.toLocaleDateString("en-CA");t+="?startDate=".concat(e)}if(k){const e=new Date(k);e.setDate(e.getDate()+1);const s=e.toLocaleDateString("en-CA");t+=F?"&endDate=".concat(s):"?endDate=".concat(s)}const s=await fetch(t),a=await s.json();if(!s.ok||!1===a.status)return Z(!1),void N([]);N(a.data),Z(a.data.length>0)}catch(e){console.error("Error fetching transactions:",e),Z(!1)}finally{D(!1)}}};return(0,a.useEffect)((()=>{(async()=>{if(g)try{const e=g,t=await fetch("".concat(u.Y,"/api/users/firm_total_bal/").concat(e));if(!t.ok)throw new Error("Failed to fetch total balance");const s=await t.json();E(s.data.totalBalance)}catch(e){console.error("Error fetching total balance:",e)}})()}),[g]),(0,b.jsxs)("div",{children:[(0,b.jsx)(n.gV,{}),(0,b.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,b.jsx)(n.Pm,{}),(0,b.jsx)("div",{className:"body flex-grow-1 px-5",children:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.rb,{className:"justify-content-center mb-3",children:(0,b.jsx)(r.b7,{className:"col-md-12",children:(0,b.jsxs)(r.xH,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,b.jsxs)(r.rb,{className:"allfirms_title_mainrow",children:[(0,b.jsx)(r.b7,{className:"col-md-8",style:{marginLeft:"10px"},children:(0,b.jsxs)(r.rb,{className:"allfirms_title_row py-1 align-items-center",children:[(0,b.jsx)(r.b7,{className:"col-md-1",children:(0,b.jsx)(r.DW,{className:"",src:c,width:25,height:25})}),(0,b.jsx)(r.b7,{className:"col-md-5",children:(0,b.jsx)("h4",{children:"Firm Transactions"})})]})}),(0,b.jsx)(r.b7,{className:"col-md-3 align-content-center justify-content-end",children:(0,b.jsx)(j.rU,{to:"/make_transfer",children:(0,b.jsx)(r.u5,{id:"but_color",children:"Make A Transaction"})})})]}),(0,b.jsx)(r.rb,{className:"allfirms_table_row py-5 justify-content-center",children:(0,b.jsxs)(r.b7,{children:[(0,b.jsxs)(r.rb,{className:"justify-content-start mb-3",children:[(0,b.jsx)(r.b7,{md:8,className:"justify-content-start justify-content-md-start",style:{paddingLeft:"200px"},children:(0,b.jsx)(l.Z,{children:(0,b.jsx)(i.Z,{as:o.Z,className:"mb-3",children:(0,b.jsx)(d.Z,{md:11,className:"justify-content-start justify-content-md-start",children:(0,b.jsxs)(m.Z,{as:"select",value:g,className:"form-select",onChange:e=>p(e.target.value),style:{maxWidth:"100%"},children:[(0,b.jsx)("option",{value:"",children:"Select Firm"}),s.map((e=>(0,b.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})})})})}),(0,b.jsx)(r.b7,{md:4,className:"d-flex align-items-center justify-content-center justify-content-md-end mt-3 mt-md-0",children:null!==C&&(0,b.jsxs)("div",{style:{backgroundColor:"green",color:"white",padding:"10px",borderRadius:"5px"},children:["Firm Total Balance: ",C]})})]}),(0,b.jsx)(r.rb,{className:"justify-content-center mb-3",children:(0,b.jsxs)(r.b7,{md:9,className:"d-flex justify-content-md-between",children:[(0,b.jsx)(_(),{selected:F,onChange:e=>T(e),selectsStart:!0,startDate:F,endDate:k,placeholderText:"Start Date",className:"form-control",md:3}),(0,b.jsx)(_(),{selected:k,onChange:e=>v(e),selectsEnd:!0,startDate:F,endDate:k,minDate:F,placeholderText:"End Date",className:"form-control",md:3}),(0,b.jsx)(r.u5,{onClick:U,id:"but_color",md:2,children:"Filter"})]})}),(0,b.jsx)(r.rb,{children:(0,b.jsx)(d.Z,{md:12,children:(0,b.jsx)(l.Z,{children:(0,b.jsxs)(h.Z,{className:"mb-3",children:[(0,b.jsx)(h.Z.Header,{className:"text-white",id:"bg__color",children:"Firm Transactions"}),(0,b.jsx)(h.Z.Body,{children:w?(0,b.jsx)("p",{children:"Loading..."}):S?(0,b.jsxs)(x.Z,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Sr.No"}),(0,b.jsx)("th",{children:"Account"}),(0,b.jsx)("th",{children:"Transaction with Firm"}),(0,b.jsx)("th",{children:"Cr/Dr"}),(0,b.jsx)("th",{children:"Date"})]})}),(0,b.jsx)("tbody",{children:y.map(((e,t)=>(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:t+1}),e.to_firm_name?(0,b.jsx)("td",{children:e.from_gl_name}):(0,b.jsx)("td",{children:e.to_gl_name}),e.to_firm_name?(0,b.jsxs)("td",{children:[e.to_firm_name," - ",e.to_gl_name]}):(0,b.jsxs)("td",{children:[e.from_firm_name," - ",e.from_gl_name]}),(0,b.jsxs)("td",{style:{color:"payment"===e.type?"red":"green"},children:["payment"===e.type?"-":"+",e.amount]}),(0,b.jsx)("td",{children:new Date(e.transaction_date).toLocaleString()})]},e.transaction_id)))})]}):(0,b.jsx)("p",{children:"No Transactions for this firm"})})]})})})})]})})]})})})})})]})]})}},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=9425.06d83943.chunk.js.map