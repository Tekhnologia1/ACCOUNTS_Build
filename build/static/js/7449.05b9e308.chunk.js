"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7449],{49214:(e,s,t)=>{t.d(s,{X:()=>n});t(72791);var a=t(12903),r=t(25407);const n=()=>({REGISTER:async e=>{try{return(await a.Z.post("".concat(r.Y,"/api/users/register"),e)).data}catch(s){throw console.log("Error registering:",s),s}},LOGIN:async e=>{try{return(await a.Z.post("".concat(r.Y,"/api/users/login"),e)).data}catch(s){throw console.log("Invalid credentials:",s),s}}})},25407:(e,s,t)=>{t.d(s,{Y:()=>a});const a="http://65.1.108.30:3007"},7449:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var a=t(72791),r=t(78983),n=t(57689),l=t(11087),c=t(49214),o=t(80184);const i=()=>{const{contactNoReg:e}=(0,n.UO)(),[s,t]=(0,a.useState)(""),[i,d]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[g,x]=(0,a.useState)(""),[m,w]=(0,a.useState)(""),[j,_]=(0,a.useState)(""),p=()=>{s.length>=8?(0,c.X)().RESET_PASS({mobileNo:e,newPassword:s}).then((e=>{console.log(e),w("New Password saved successfully!"),setTimeout((()=>{window.location.reload()}),1e3)})).catch((e=>{console.error("Something went wrong:",e),_("Something went wrong. Please try again later.")})):h("Please use atleast 8-digit passwordddd.")};return(0,o.jsx)("div",{children:(0,o.jsxs)(r.rb,{children:[(0,o.jsxs)(r.b7,{className:"login_left col-md-4",children:[(0,o.jsx)(r.u5,{className:"login_left_login_button",children:"Login"}),(0,o.jsx)("br",{}),(0,o.jsx)(l.rU,{to:"/signup",children:(0,o.jsx)(r.u5,{className:"login_left_signup_button",children:"Sign Up"})})]}),(0,o.jsx)(r.b7,{className:"login_right col-md-8",children:(0,o.jsxs)(r.lx,{children:[(0,o.jsx)("h1",{className:"text-center defaultcolor",children:"New Password "}),"Password",(0,o.jsx)(r.YR,{className:"mb-2",children:(0,o.jsx)(r.jO,{value:s,onChange:e=>{const s=e.target.value;t(s),s.length<8?h("Password must be at least 8 characters long."):h("")},style:{borderRadius:"25px"},type:"text"})}),u&&(0,o.jsx)("div",{className:"text-danger mb-2",children:u}),"Confirm Paassword",(0,o.jsx)(r.YR,{className:"mb-2",children:(0,o.jsx)(r.jO,{value:i,onChange:e=>{const t=e.target.value;d(t),x(t===s?"":"Password doesn't match")},style:{borderRadius:"25px"},type:"text"})}),g&&(0,o.jsx)("div",{className:"text-danger mb-2",children:g}),(0,o.jsx)(r.rb,{className:"mt-5",children:(0,o.jsxs)(r.b7,{xs:12,className:"text-center",children:[(0,o.jsx)(r.u5,{onClick:()=>{p()},className:"login_submit_button px-4",type:"button",shape:"rounded-pill",children:"Save New Password"}),j&&(0,o.jsx)("div",{className:"text-danger",children:j}),m&&(0,o.jsx)("div",{className:"text-success",children:m})]})})]})})]})})}}}]);
//# sourceMappingURL=7449.05b9e308.chunk.js.map