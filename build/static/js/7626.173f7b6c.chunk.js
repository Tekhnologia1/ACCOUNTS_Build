"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7626],{25407:(e,s,t)=>{t.d(s,{Y:()=>a});const a="http://15.206.84.226:3007"},58861:(e,s,t)=>{t.r(s),t.d(s,{default:()=>_});var a=t(72791),r=t(47022),c=t(89743),n=t(2677),l=t(28282),o=t(16157),i=t(33821),d=t(323),m=t(53392),h=t(74292),u=t(34782),x=t(11087),j=t(13162),f=t(88898),A=t(25407),g=t(35109),Z=t(80184);const _=()=>{const{user:e}=(0,a.useContext)(f.S),s=e.userId,[t,_]=(0,a.useState)([]),[p,y]=(0,a.useState)([]),[b,w]=(0,a.useState)(""),[C,N]=(0,a.useState)(""),[v,S]=(0,a.useState)([]),[E,F]=(0,a.useState)([]),[k,T]=(0,a.useState)(""),[P,U]=(0,a.useState)(""),[I,Y]=(0,a.useState)(""),[B,L]=(0,a.useState)(!1),[Q,K]=(0,a.useState)(!1),[M,X]=(0,a.useState)(!1);(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(A.Y,"/api/users/get_all_firms_by_user/").concat(s));if(!e.ok)throw new Error("Failed to fetch data");const t=await e.json();_(t.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[s]),(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(A.Y,"/api/users/get_all_firms_by_adding_user/").concat(s));if(!e.ok)throw new Error("Failed to fetch data");const t=await e.json();y(t.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[s]);const J=async e=>{try{const s=await fetch("".concat(A.Y,"/api/users/get_general_ledgers/").concat(e));if(!s.ok)throw new Error("Failed to fetch data");return(await s.json()).data}catch(s){console.error("Error fetching data:",s)}};(0,a.useEffect)((()=>{(async()=>{if(b){L(!0);const e=await J(b);S(e),L(!1)}})()}),[b]),(0,a.useEffect)((()=>{(async()=>{if(C){K(!0);const e=await J(C);F(e),K(!1)}})()}),[C]);return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(g.LC,{}),(0,Z.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,Z.jsx)(g.WW,{}),(0,Z.jsx)(r.Z,{fluid:!0,className:"flex-grow-1 px-3 px-md-5",children:(0,Z.jsx)(c.Z,{className:"justify-content-center mb-3",children:(0,Z.jsx)(n.Z,{md:12,children:(0,Z.jsxs)(l.Z,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,Z.jsxs)(c.Z,{className:"allfirms_title_mainrow",children:[(0,Z.jsx)(n.Z,{md:9,style:{marginLeft:"10px"},children:(0,Z.jsxs)(c.Z,{className:"allfirms_title_row py-1 align-items-center",children:[(0,Z.jsx)(n.Z,{md:1,children:(0,Z.jsx)("img",{className:"",src:j,width:25,height:25,alt:"AllFirms Logo"})}),(0,Z.jsx)(n.Z,{md:4,children:(0,Z.jsx)("h4",{children:"Payments"})})]})}),(0,Z.jsx)(n.Z,{md:2,className:"d-flex align-items-center justify-content-end",children:(0,Z.jsx)(x.rU,{to:"/user_allpayments",children:(0,Z.jsx)(o.Z,{id:"but_color",children:"All Payments"})})})]}),(0,Z.jsx)(c.Z,{className:"allfirms_table_row py-5 justify-content-center",children:(0,Z.jsx)(n.Z,{md:8,className:"mb-3 mb-md-0",children:(0,Z.jsx)(c.Z,{className:"justify-content-center",children:(0,Z.jsxs)(n.Z,{md:12,children:[(0,Z.jsx)(l.Z,{className:"bg_color_blue_white",children:(0,Z.jsx)(l.Z.Body,{children:(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(d.Z,{className:"mb-3",controlId:"formTransactionID",children:(0,Z.jsx)(m.Z,{children:"Transaction :"})}),(0,Z.jsxs)(d.Z,{as:c.Z,className:"mb-3",controlId:"formFrom",children:[(0,Z.jsx)(m.Z,{column:!0,sm:3,children:"From:"}),(0,Z.jsx)(n.Z,{sm:5,children:(0,Z.jsxs)(i.Z.Control,{as:"select",value:b,className:"form-select",onChange:e=>w(e.target.value),children:[(0,Z.jsx)("option",{value:"",children:"Select Firm"}),t.map((e=>(0,Z.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})}),(0,Z.jsxs)(n.Z,{sm:4,children:[(0,Z.jsxs)(i.Z.Control,{as:"select",value:k,className:"form-select",onChange:e=>T(e.target.value),disabled:B,children:[(0,Z.jsx)("option",{value:"",children:"Select Your Firm Account"}),v.map((e=>(0,Z.jsx)("option",{value:e.gl_id,children:e.gl_name},e.gl_id)))]}),B&&(0,Z.jsx)("p",{children:"Loading..."})]})]}),(0,Z.jsxs)(d.Z,{as:c.Z,className:"mb-3",controlId:"formTo",children:[(0,Z.jsx)(m.Z,{column:!0,sm:3,children:"To:"}),(0,Z.jsx)(n.Z,{sm:5,children:(0,Z.jsxs)(i.Z.Control,{as:"select",value:C,className:"form-select",onChange:e=>N(e.target.value),children:[(0,Z.jsx)("option",{value:"",children:"Select Firm"}),p.map((e=>(0,Z.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})}),(0,Z.jsxs)(n.Z,{sm:4,children:[(0,Z.jsxs)(i.Z.Control,{as:"select",value:P,className:"form-select",onChange:e=>U(e.target.value),disabled:Q,children:[(0,Z.jsx)("option",{value:"",children:"Select Your Firm Account"}),E.map((e=>(0,Z.jsx)("option",{value:e.gl_id,children:e.gl_name},e.gl_id)))]}),Q&&(0,Z.jsx)("p",{children:"Loading..."})]})]}),(0,Z.jsxs)(d.Z,{as:c.Z,className:"mb-3",controlId:"formAmount",children:[(0,Z.jsx)(m.Z,{column:!0,sm:3,children:"Amount :"}),(0,Z.jsx)(n.Z,{sm:5,children:(0,Z.jsx)(h.Z,{type:"text",placeholder:"Amount",value:I,onChange:e=>Y(e.target.value)})})]})]})})}),(0,Z.jsx)(c.Z,{className:"justify-content-center mt-3",children:(0,Z.jsx)(o.Z,{className:"col-md-3 col-6",id:"but_color",onClick:async()=>{X(!0)},children:"Pay"})})]})})})})]})})})})]}),(0,Z.jsxs)(u.Z,{show:M,onHide:()=>X(!1),centered:!0,children:[(0,Z.jsx)(u.Z.Header,{closeButton:!0,children:(0,Z.jsx)(u.Z.Title,{children:"Confirm Payment"})}),(0,Z.jsx)(u.Z.Body,{children:"Are you sure you want to proceed with this payment?"}),(0,Z.jsxs)(u.Z.Footer,{children:[(0,Z.jsx)(o.Z,{variant:"secondary",onClick:()=>X(!1),children:"Cancel"}),(0,Z.jsx)(o.Z,{variant:"primary",onClick:async()=>{try{const e={from_gl_id:k,to_gl_id:P,amount:Number(I),from_firm_id:b,to_firm_id:C},t=await fetch("".concat(A.Y,"/api/users/payment/").concat(s),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to process payment");const a=await t.json();console.log(a),alert("Payment successful"),X(!1)}catch(e){console.error("Error processing payment:",e),alert("Payment failed")}},children:"Confirm Payment"})]})]})]})}},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=7626.173f7b6c.chunk.js.map