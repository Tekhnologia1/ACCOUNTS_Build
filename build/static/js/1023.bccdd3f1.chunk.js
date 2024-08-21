"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1023],{49214:(e,t,s)=>{s.d(t,{X:()=>n});s(72791);var a=s(12903),r=s(25407);const n=()=>({REGISTER:async e=>{try{return(await a.Z.post("".concat(r.Y,"/api/users/register"),e)).data}catch(t){throw console.log("Error registering:",t),t}},LOGIN:async e=>{try{return(await a.Z.post("".concat(r.Y,"/api/users/login"),e)).data}catch(t){throw console.log("Invalid credentials:",t),t}}})},25407:(e,t,s)=>{s.d(t,{Y:()=>a});const a="http://20.235.178.6:3007"},11023:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var a=s(72791),r=s(47022),n=s(89743),l=s(2677),o=s(28282),c=s(33821),i=s(27098),d=s(16157),u=s(49214),m=s(57689),g=s(11087),h=s(13071),x=s(80184);const b=()=>{const[e,t]=(0,a.useState)(""),[s,b]=(0,a.useState)(""),[p,j]=(0,a.useState)(""),[_,v]=(0,a.useState)(""),[N,Z]=(0,a.useState)(""),[w,f]=(0,a.useState)(""),[y,S]=(0,a.useState)(""),[C,k]=(0,a.useState)(""),[E,A]=(0,a.useState)(""),[I,R]=(0,a.useState)(""),[T,U]=(0,a.useState)(""),[$,G]=(0,a.useState)(""),[P,q]=(0,a.useState)(!1),z=((0,m.s0)(),s=>{if(t(s.target.value),0===e.length)return f("Name must be at least 2 characters long."),!1;f("");return e.length<1?(f("Name must be at least 2 characters long."),!1):/^[a-zA-Z\s]+$/.test(e)?(f(""),!0):(f("Only letters and spaces are allowed."),!1)}),Y=e=>{if(e.target.value.length>=0){b(e.target.value),S("");return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)?(S(""),!0):(S("Enter valid email address."),!1)}return S("Email address must not be blank."),!1},L=e=>{const t=e.target.value;j(t),A("");return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%`~#^&*()-_+={};:'",.<>*?&]{8,}$/.test(t)?(A(""),!0):(A("Password must be at least 8 characters long and contain both letters and numbers."),!1)},O=e=>{const t=e.target.value;v(t),k("");return/^\d{10}$/.test(t)?(k(""),!0):(0===t.length?k("Contact number must not be blank."):k("Contact number must be exactly 10 digits and contain only numbers."),!1)},X=e=>e.target.value.length>=0?(Z(e.target.value),R(""),!0):(R("Address cannot be blank."),!1);return(0,x.jsx)("div",{className:"signup_background",children:(0,x.jsx)(r.Z,{className:"d-flex justify-content-center mt-5",children:(0,x.jsx)(n.Z,{className:"w-100",children:(0,x.jsx)(l.Z,{md:6,lg:5,className:"mx-auto",children:(0,x.jsx)(o.Z,{className:"p-4",id:"card_border_color_change",style:{boxShadow:"4px 4px 80px rgb(5, 5, 5)"},children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)("h1",{className:"text-center",children:"Sign Up now"}),(0,x.jsx)(i.Z,{className:"mb-3",children:(0,x.jsx)(c.Z.Control,{value:e,onChange:z,type:"text",placeholder:"Name"})}),w&&(0,x.jsx)("div",{className:"text-danger mb-2",children:w}),(0,x.jsx)(i.Z,{className:"mb-3",children:(0,x.jsx)(c.Z.Control,{value:s,onChange:Y,type:"email",placeholder:"Email"})}),y&&(0,x.jsx)("div",{className:"text-danger mb-2",children:y}),(0,x.jsxs)(i.Z,{className:"mb-3",children:[(0,x.jsx)(c.Z.Control,{value:p,onChange:L,type:P?"text":"password",placeholder:"Password"}),(0,x.jsxs)(i.Z.Text,{onClick:()=>q(!P),style:{cursor:"pointer"},children:[P?(0,x.jsx)(h.dSq,{}):(0,x.jsx)(h.tgn,{})," "]})]}),E&&(0,x.jsx)("div",{className:"text-danger mb-2",children:E}),(0,x.jsx)(i.Z,{className:"mb-3",children:(0,x.jsx)(c.Z.Control,{value:_,onChange:O,type:"tel",placeholder:"Contact"})}),C&&(0,x.jsx)("div",{className:"text-danger mb-2",children:C}),(0,x.jsx)(i.Z,{className:"mb-3",children:(0,x.jsx)(c.Z.Control,{value:N,onChange:X,type:"text",placeholder:"Address"})}),I&&(0,x.jsx)("div",{className:"text-danger mb-2",children:I}),(0,x.jsx)(n.Z,{className:"login_log_bt_row justify-content-center align-content-center mt-3",children:(0,x.jsxs)(l.Z,{className:"login_log_bt_col text-center",children:[(0,x.jsx)(d.Z,{onClick:()=>{z({target:{value:e}})?Y({target:{value:s}})?L({target:{value:p}})?O({target:{value:_}})?X({target:{value:N}})?(0,u.X)().REGISTER({name:e,email:s,password:p,contact:_,address:N,status:"1",role:"1"}).then((e=>{console.log(e),e.status&&"User registered successfully"===e.message?(U("Registered successfully!"),G(""),setTimeout((()=>{window.location.reload()}),1e3)):(G("Unexpected response from server"),U(""))})).catch((e=>{if(console.error("Some error, solve it: ",e),e.response&&e.response.data){const t=e.response.data.message;G("All fields are required"===t?"Please fill out all fields":"User already exists"===t?"Email or Contact No. is already used":"Firm ID is required for firm_user role"===t||"This firm is already assigned to another user"===t?t:"Something went wrong !!")}else G("Something went wrong !!");U(""),setTimeout((()=>{window.location.reload()}),1e3)})):R("Address cannot be blank."):k("Contact number must be 10 digits."):A("Password must be at least 8 characters long and contain both letters and numbers."):S("Invalid Email."):f("Enter valid name.")},className:"login_log_bt",id:"but_color",children:"Register"}),$&&(0,x.jsx)("div",{className:"text-danger mt-2",children:$}),T&&(0,x.jsx)("div",{className:"text-success mt-2",children:T})]})}),(0,x.jsx)(n.Z,{className:"login_signup_bt_row justify-content-center align-content-center mt-3",children:(0,x.jsx)(l.Z,{className:"login_signup_bt_col text-center",children:(0,x.jsx)(g.rU,{to:"/",children:(0,x.jsx)(d.Z,{className:"login_signup_bt",id:"but_color",children:"Go for Login"})})})})]})})})})})})}}}]);
//# sourceMappingURL=1023.bccdd3f1.chunk.js.map