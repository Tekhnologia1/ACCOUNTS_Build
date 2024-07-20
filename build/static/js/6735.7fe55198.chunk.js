"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6735],{30786:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});var a=r(65043),t=r(85049),l=r(93946),c=r(42645),i=(r(38421),r(35475)),d=r(59395),n=r(70579);const o=()=>{const{user:e}=(0,a.useContext)(d.R),s=e.userId,[r,o]=(0,a.useState)([]),[m,h]=(0,a.useState)(!0),[u,x]=(0,a.useState)(null),[j,_]=(0,a.useState)(!1),[A,p]=(0,a.useState)(!1),[f,g]=(0,a.useState)(""),[w,C]=(0,a.useState)(""),[b,y]=(0,a.useState)({name:"",email:"",password:"",contact:"",address:"",status:"",role:"",firmId:""}),v=async()=>{try{const e=await fetch((e=>"http://13.126.48.224:3007/api/users/users_added_by_user/".concat(e))(s));if(e.ok){const s=await e.json(),r=await Promise.all(s.data.map((async e=>{const s=await fetch((e=>"http://13.126.48.224:3007/api/users/total_bal_of_all_firms/".concat(e))(e.user_id)),r=await s.json();return{...e,currbal:r.data}})));o(r)}else console.error("Failed to fetch users")}catch(e){console.error("Error fetching users:",e)}finally{h(!1)}};(0,a.useEffect)((()=>{v(),j||(g(""),C(""))}),[s,j]);const N=async e=>{console.log("Fetching user details for:",e);try{const r=await fetch((s=e.user_id,"http://13.126.48.224:3007/api/users/user_details/".concat(s)));if(r.ok){const s=await r.json();console.log("User details:",s),y({name:s.data.usr_name,email:s.data.usr_email,password:"",contact:s.data.usr_contact||"",address:s.data.usr_address,status:"Active"===s.data.usr_status?"1":"0",role:s.data.usr_role,firmId:e.firm_name}),x(e),_(!0)}else console.error("Failed to fetch user details")}catch(r){console.error("Error fetching user details:",r)}var s};return m?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsxs)("div",{children:[(0,n.jsx)(c.ay,{}),(0,n.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,n.jsx)(c.DH,{}),(0,n.jsx)("div",{className:"body flex-grow-1 px-3 px-md-2",children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.sK,{className:"justify-content-center mb-3",children:(0,n.jsx)(l.UF,{className:"col-md-12",children:(0,n.jsxs)(l.E$,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,n.jsxs)(l.sK,{className:"allfirms_title_mainrow",children:[(0,n.jsx)(l.UF,{className:"col-md-9",style:{marginLeft:"10px"},children:(0,n.jsxs)(l.sK,{className:"allfirms_title_row py-1 align-items-center",children:[(0,n.jsx)(l.UF,{className:"col-md-1",children:(0,n.jsx)(l.t7,{className:"",src:t,width:25,height:25})}),(0,n.jsx)(l.UF,{className:"col-md-4",children:(0,n.jsx)("h4",{children:"All Users"})})]})}),(0,n.jsx)(l.UF,{className:"col-md-2 align-content-center justify-content-end",children:(0,n.jsx)(i.N_,{to:"/add_users",children:(0,n.jsx)(l.Q_,{id:"but_color",children:"Add New User"})})})]}),(0,n.jsx)(l.sK,{className:"allfirms_table_row py-5 px-1",children:(0,n.jsxs)(l._v,{hover:!0,responsive:!0,className:"custom-table",children:[(0,n.jsx)(l.wV,{className:"custom-table-header",children:(0,n.jsxs)(l.YI,{children:[(0,n.jsx)(l.$s,{id:"sss",children:"Sr. No."}),(0,n.jsx)(l.$s,{id:"sss",children:"Name"}),(0,n.jsx)(l.$s,{id:"sss",children:"Address"}),(0,n.jsx)(l.$s,{id:"sss",children:"Email Id"}),(0,n.jsx)(l.$s,{id:"sss",children:"Assigned Firm"}),(0,n.jsx)(l.$s,{id:"sss",children:"Curr. Balance"}),(0,n.jsx)(l.$s,{id:"sss",children:"Action"}),(0,n.jsx)(l.$s,{id:"sss",children:"Details"})]})}),(0,n.jsx)(l.jS,{children:r.map(((e,s)=>(0,n.jsxs)(l.YI,{children:[(0,n.jsx)(l.cC,{children:s+1}),(0,n.jsx)(l.cC,{children:e.usr_name}),(0,n.jsx)(l.cC,{children:e.usr_address}),(0,n.jsx)(l.cC,{children:e.usr_email}),(0,n.jsx)(l.cC,{children:e.firm_name}),(0,n.jsx)(l.cC,{children:e.currbal}),(0,n.jsxs)(l.cC,{children:[(0,n.jsx)(l.Q_,{color:"warning",size:"sm",className:"me-2",onClick:()=>N(e),children:"Edit"}),(0,n.jsx)(l.Q_,{color:"danger",size:"sm",onClick:()=>(e=>{x(e),p(!0)})(e),children:"Delete"})]}),(0,n.jsx)(l.cC,{children:(0,n.jsx)(l.Q_,{color:"info",size:"sm",onClick:()=>N(e),children:"View"})})]},e.user_id)))})]})})]})})})})})]}),(0,n.jsxs)(l.zS,{visible:j,onClose:()=>_(!1),children:[(0,n.jsx)(l.E4,{closeButton:!0,children:(0,n.jsx)(l.lb,{children:"Edit User"})}),(0,n.jsx)(l.Tc,{children:(0,n.jsxs)(l.qI,{children:[(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(l.A6,{htmlFor:"name",children:"Name"}),(0,n.jsx)(l.OG,{id:"name",value:b.name,onChange:e=>y({...b,name:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(l.A6,{htmlFor:"email",children:"Email"}),(0,n.jsx)(l.OG,{id:"email",type:"email",value:b.email,onChange:e=>y({...b,email:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(l.A6,{htmlFor:"password",children:"Password"}),(0,n.jsx)(l.OG,{id:"password",type:"password",value:b.password,onChange:e=>y({...b,password:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(l.A6,{htmlFor:"contact",children:"Contact"}),(0,n.jsx)(l.OG,{id:"contact",value:b.contact,onChange:e=>y({...b,contact:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(l.A6,{htmlFor:"address",children:"Address"}),(0,n.jsx)(l.OG,{id:"address",value:b.address,onChange:e=>y({...b,address:e.target.value})})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(l.A6,{htmlFor:"firmId",children:"Assigned Firm"}),(0,n.jsx)(l.OG,{id:"firmId",value:b.firmId,onChange:e=>y({...b,firmId:e.target.value})})]})]})}),(0,n.jsxs)(l.If,{children:[(0,n.jsx)(l.Q_,{color:"primary",onClick:async()=>{try{const r=await fetch((s=u.user_id,"http://13.126.48.224:3007/api/users/update_user_details/".concat(s)),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:b.name,email:b.email,password:b.password,contact:b.contact,address:b.address,status:"1",role:"2"})}),a=await r.json();console.log("Update user: ",a);const t=await fetch((e=u.uf_id,"http://13.126.48.224:3007/api/users/update_firm_user/".concat(e)),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:u.user_id,firm_id:b.firmId})}),l=await t.json();console.log("Update userFirm: ",l),r.ok&&t.ok?(g("User details updated successfully !!"),_(!1),h(!0),v()):(C("Something went wrong !!"),console.error("Failed to update user details or firm"))}catch(r){console.error("Error updating user details or firm:",r)}var e,s},children:"Save"}),(0,n.jsx)(l.Q_,{color:"secondary",onClick:()=>_(!1),children:"Cancel"}),w&&(0,n.jsx)("div",{className:"text-danger mt-2 text-center",children:w}),f&&(0,n.jsx)("div",{className:"text-success mt-2 text-center",children:f})]})]}),(0,n.jsxs)(l.zS,{visible:A,onClose:()=>p(!1),children:[(0,n.jsx)(l.E4,{closeButton:!0,children:(0,n.jsx)(l.lb,{children:u?"Delete User ".concat(u.usr_name):""})}),(0,n.jsx)(l.Tc,{children:u&&(0,n.jsxs)("p",{children:["Are you sure you want to delete user ",u.usr_name,"?"]})}),(0,n.jsxs)(l.If,{children:[(0,n.jsx)(l.Q_,{color:"danger",onClick:async()=>{try{(await fetch((e=u.uf_id,"http://13.126.48.224:3007/api/users/delete_firm_user/".concat(e)),{method:"DELETE"})).ok?(p(!1),h(!0),v()):(C("Failed to delete user !!"),console.error("Failed to delete user"))}catch(s){console.error("Error deleting user:",s)}var e},children:"Delete"}),(0,n.jsx)(l.Q_,{color:"secondary",onClick:()=>p(!1),children:"Cancel"})]})]})]})}},85049:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=6735.7fe55198.chunk.js.map