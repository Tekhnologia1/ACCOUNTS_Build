"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[352],{57632:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});var a=r(72791),l=r(13162),t=r(78983),i=r(35109),c=(r(77632),r(11087)),d=r(88898),n=r(80184);const o=()=>{const{user:e}=(0,a.useContext)(d.S),s=e.userId,[r,o]=(0,a.useState)([]),[h,m]=(0,a.useState)(!0),[u,x]=(0,a.useState)(null),[j,f]=(0,a.useState)(!1),[p,A]=(0,a.useState)(!1),[_,g]=(0,a.useState)(""),[N,b]=(0,a.useState)(""),[w,y]=(0,a.useState)({name:"",email:"",password:"",contact:"",address:"",status:"",role:"",firmId:""}),v=async()=>{try{const e=await fetch((e=>"http://13.233.105.76:3007/api/users/users_added_by_user/".concat(e))(s));if(e.ok){const s=await e.json(),r=await Promise.all(s.data.map((async e=>{const s=await fetch((e=>"http://13.233.105.76:3007/api/users/total_bal_of_all_firms/".concat(e))(e.user_id)),r=await s.json();return{...e,currbal:r.data}})));o(r)}else console.error("Failed to fetch users")}catch(e){console.error("Error fetching users:",e)}finally{m(!1)}};(0,a.useEffect)((()=>{v(),j||(g(""),b(""))}),[s,j]);const C=async e=>{console.log("Fetching user details for:",e);try{const r=await fetch((s=e.user_id,"http://13.233.105.76:3007/api/users/user_details/".concat(s)));if(r.ok){const s=await r.json();console.log("User details:",s),y({name:s.data.usr_name,email:s.data.usr_email,password:"",contact:s.data.usr_contact||"",address:s.data.usr_address,status:"Active"===s.data.usr_status?"1":"0",role:s.data.usr_role,firmId:e.firm_name}),x(e),f(!0)}else console.error("Failed to fetch user details")}catch(r){console.error("Error fetching user details:",r)}var s};return h?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsxs)("div",{children:[(0,n.jsx)(i.gV,{}),(0,n.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,n.jsx)(i.Pm,{}),(0,n.jsx)("div",{className:"body flex-grow-1 px-5",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.rb,{className:"justify-content-center mb-3",children:(0,n.jsx)(t.b7,{className:"col-md-12",children:(0,n.jsxs)(t.xH,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,n.jsxs)(t.rb,{className:"allfirms_title_mainrow",children:[(0,n.jsx)(t.b7,{className:"col-md-9",style:{marginLeft:"10px"},children:(0,n.jsxs)(t.rb,{className:"allfirms_title_row py-1 align-items-center",children:[(0,n.jsx)(t.b7,{className:"col-md-1",children:(0,n.jsx)(t.DW,{className:"",src:l,width:25,height:25})}),(0,n.jsx)(t.b7,{className:"col-md-2",children:(0,n.jsx)("h4",{children:"All Users"})})]})}),(0,n.jsx)(t.b7,{className:"col-md-2 align-content-center justify-content-end",children:(0,n.jsx)(c.rU,{to:"/add_users",children:(0,n.jsx)(t.u5,{id:"but_color",children:"Add New User"})})})]}),(0,n.jsx)(t.rb,{className:"allfirms_table_row py-5",children:(0,n.jsxs)(t.Sx,{hover:!0,responsive:!0,className:"custom-table",children:[(0,n.jsx)(t.V,{className:"custom-table-header",children:(0,n.jsxs)(t.T6,{children:[(0,n.jsx)(t.is,{id:"sss",children:"Sr. No."}),(0,n.jsx)(t.is,{id:"sss",children:"Name"}),(0,n.jsx)(t.is,{id:"sss",children:"Address"}),(0,n.jsx)(t.is,{id:"sss",children:"Email Id"}),(0,n.jsx)(t.is,{id:"sss",children:"Status"}),(0,n.jsx)(t.is,{id:"sss",children:"Assigned Firm"}),(0,n.jsx)(t.is,{id:"sss",children:"Curr. Balance"}),(0,n.jsx)(t.is,{id:"sss",children:"Action"}),(0,n.jsx)(t.is,{id:"sss",children:"Details"})]})}),(0,n.jsx)(t.NR,{children:r.map(((e,s)=>(0,n.jsxs)(t.T6,{children:[(0,n.jsx)(t.NN,{children:s+1}),(0,n.jsx)(t.NN,{children:e.usr_name}),(0,n.jsx)(t.NN,{children:e.usr_address}),(0,n.jsx)(t.NN,{children:e.usr_email}),(0,n.jsx)(t.NN,{children:e.usr_status}),(0,n.jsx)(t.NN,{children:e.firm_name}),(0,n.jsx)(t.NN,{children:e.currbal}),(0,n.jsxs)(t.NN,{children:[(0,n.jsx)(t.u5,{color:"warning",size:"sm",className:"me-2",onClick:()=>C(e),children:"Edit"}),(0,n.jsx)(t.u5,{color:"danger",size:"sm",onClick:()=>(e=>{x(e),A(!0)})(e),children:"Delete"})]}),(0,n.jsx)(t.NN,{children:(0,n.jsx)(t.u5,{color:"info",size:"sm",onClick:()=>C(e),children:"View"})})]},e.user_id)))})]})})]})})})})})]}),(0,n.jsxs)(t.Tk,{visible:j,onClose:()=>f(!1),children:[(0,n.jsx)(t.p0,{closeButton:!0,children:(0,n.jsx)(t.fl,{children:"Edit User"})}),(0,n.jsx)(t.sD,{children:(0,n.jsxs)(t.lx,{children:[(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(t.L8,{htmlFor:"name",children:"Name"}),(0,n.jsx)(t.jO,{id:"name",value:w.name,onChange:e=>y({...w,name:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(t.L8,{htmlFor:"email",children:"Email"}),(0,n.jsx)(t.jO,{id:"email",type:"email",value:w.email,onChange:e=>y({...w,email:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(t.L8,{htmlFor:"password",children:"Password"}),(0,n.jsx)(t.jO,{id:"password",type:"password",value:w.password,onChange:e=>y({...w,password:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(t.L8,{htmlFor:"contact",children:"Contact"}),(0,n.jsx)(t.jO,{id:"contact",value:w.contact,onChange:e=>y({...w,contact:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(t.L8,{htmlFor:"address",children:"Address"}),(0,n.jsx)(t.jO,{id:"address",value:w.address,onChange:e=>y({...w,address:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(t.L8,{htmlFor:"firmId",children:"Assigned Firm"}),(0,n.jsx)(t.jO,{id:"firmId",value:w.firmId,onChange:e=>y({...w,firmId:e.target.value})})]})]})}),(0,n.jsxs)(t.Ym,{children:[(0,n.jsx)(t.u5,{color:"primary",onClick:async()=>{try{const r=await fetch((s=u.user_id,"http://13.233.105.76:3007/api/users/update_user_details/".concat(s)),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:w.name,email:w.email,password:w.password,contact:w.contact,address:w.address,status:"1",role:"2"})}),a=await fetch((e=u.uf_id,"http://13.233.105.76:3007/api/users/update_firm_user/".concat(e)),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:u.user_id,firm_id:w.firmId})});r.ok&&a.ok?(g("User details updated successfully !!"),f(!1),m(!0),v()):(b("Something went wrong !!"),console.error("Failed to update user details or firm"))}catch(r){console.error("Error updating user details or firm:",r)}var e,s},children:"Save"}),(0,n.jsx)(t.u5,{color:"secondary",onClick:()=>f(!1),children:"Cancel"}),N&&(0,n.jsx)("div",{className:"text-danger mt-2 text-center",children:N}),_&&(0,n.jsx)("div",{className:"text-success mt-2 text-center",children:_})]})]}),(0,n.jsxs)(t.Tk,{visible:p,onClose:()=>A(!1),children:[(0,n.jsx)(t.p0,{closeButton:!0,children:(0,n.jsx)(t.fl,{children:u?"Delete User ".concat(u.usr_name):""})}),(0,n.jsx)(t.sD,{children:u&&(0,n.jsxs)("p",{children:["Are you sure you want to delete user ",u.usr_name,"?"]})}),(0,n.jsxs)(t.Ym,{children:[(0,n.jsx)(t.u5,{color:"danger",onClick:async()=>{try{(await fetch((e=u.uf_id,"http://13.233.105.76:3007/api/users/delete_firm_user/".concat(e)),{method:"DELETE"})).ok?(A(!1),m(!0),v()):(b("Failed to delete user !!"),console.error("Failed to delete user"))}catch(s){console.error("Error deleting user:",s)}var e},children:"Delete"}),(0,n.jsx)(t.u5,{color:"secondary",onClick:()=>A(!1),children:"Cancel"})]})]})]})}},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=352.e54c7b9b.chunk.js.map