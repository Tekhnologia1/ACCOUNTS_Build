"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[23],{49214:(e,a,s)=>{s.d(a,{X:()=>c});s(72791);var t=s(12903),l=s(25407);const c=()=>({REGISTER:async e=>{try{return(await t.Z.post("".concat(l.Y,"/api/users/register"),e)).data}catch(a){throw console.log("Error registering:",a),a}},LOGIN:async e=>{try{return(await t.Z.post("".concat(l.Y,"/api/users/login"),e)).data}catch(a){throw console.log("Invalid credentials:",a),a}}})},25407:(e,a,s)=>{s.d(a,{Y:()=>t});const t="http://192.168.29.141:3007"},11023:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(72791),l=s(47022),c=s(89743),r=s(2677),n=s(28282),o=s(33821),d=s(27098),i=s(16157),h=s(49214),m=s(11087),u=s(80184);const x=()=>{const[e,a]=(0,t.useState)(""),[s,x]=(0,t.useState)(""),[j,p]=(0,t.useState)(""),[g,Z]=(0,t.useState)(""),[N,_]=(0,t.useState)(""),[v,C]=(0,t.useState)(""),[f,w]=(0,t.useState)("");return(0,u.jsx)(l.Z,{className:"d-flex justify-content-center mt-5",children:(0,u.jsx)(c.Z,{className:"w-100",children:(0,u.jsx)(r.Z,{md:6,lg:5,className:"mx-auto",children:(0,u.jsx)(n.Z,{className:"p-4",id:"card_border_color_change",children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)("h1",{className:"text-center",children:"Sign Up now"}),(0,u.jsx)(d.Z,{className:"mb-3",children:(0,u.jsx)(o.Z.Control,{value:e,onChange:e=>a(e.target.value),type:"text",placeholder:"Name"})}),(0,u.jsx)(d.Z,{className:"mb-3",children:(0,u.jsx)(o.Z.Control,{value:s,onChange:e=>x(e.target.value),type:"email",placeholder:"Email"})}),(0,u.jsx)(d.Z,{className:"mb-3",children:(0,u.jsx)(o.Z.Control,{value:j,onChange:e=>p(e.target.value),type:"password",placeholder:"Password"})}),(0,u.jsx)(d.Z,{className:"mb-3",children:(0,u.jsx)(o.Z.Control,{value:g,onChange:e=>Z(e.target.value),type:"tel",placeholder:"Contact"})}),(0,u.jsx)(d.Z,{className:"mb-3",children:(0,u.jsx)(o.Z.Control,{value:N,onChange:e=>_(e.target.value),type:"text",placeholder:"Address"})}),(0,u.jsx)(c.Z,{className:"mt-3",children:(0,u.jsxs)(r.Z,{className:"text-center",children:[(0,u.jsx)(i.Z,{onClick:()=>{(0,h.X)().REGISTER({name:e,email:s,password:j,contact:g,address:N,status:"1",role:"1"}).then((e=>{console.log(e),C("Registered successfully!")})).catch((e=>{console.error("Please fill all details !!:",e),w("Please fill all details !!")}))},className:"px-4",id:"but_color",children:"Register"}),f&&(0,u.jsx)("div",{className:"text-danger mt-2",children:f}),v&&(0,u.jsx)("div",{className:"text-success mt-2",children:v})]})}),(0,u.jsx)(c.Z,{className:"mt-3",children:(0,u.jsx)(r.Z,{className:"text-center",children:(0,u.jsx)(m.rU,{to:"/",children:(0,u.jsx)(i.Z,{className:"px-4",id:"but_color",children:"Go for Login"})})})})]})})})})})}}}]);
//# sourceMappingURL=23.cb1d4629.chunk.js.map