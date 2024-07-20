"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[27],{17598:(e,s,r)=>{r.d(s,{T:()=>a});const a="http://65.0.139.50:3007"},57046:(e,s,r)=>{r.r(s),r.d(s,{default:()=>x});var a=r(65043),t=r(85049),l=r(93946),c=r(42645),o=(r(38421),r(35475)),i=r(59395),n=r(17598),d=r(86213),m=r(70702),f=r(67006),h=r(70579);const x=()=>{const{user:e}=(0,a.useContext)(i.R),s=e.userId;(0,a.useEffect)((()=>{console.log(s)}),[s]);const[r,x]=(0,a.useState)([]),[j,u]=(0,a.useState)(!1),[A,p]=(0,a.useState)({firm_id:"",firm_name:"",firm_email:"",firm_gstno:"",firm_address:"",firm_status:""}),[_,b]=(0,a.useState)(null),[y,N]=(0,a.useState)(!1),[g,w]=(0,a.useState)(null),[C,v]=(0,a.useState)(!1),[F,k]=(0,a.useState)({}),I=async()=>{try{const e=await fetch("".concat(n.T,"/api/users/get_all_firms_by_user/").concat(s));if(!e.ok)throw new Error("Failed to fetch data");const r=await e.json();x(r.data)}catch(e){console.error("Error fetching data:",e)}};(0,a.useEffect)((()=>{I(),(async()=>{try{const e=await fetch("".concat(n.T,"/api/users/total_bal_of_all_firms/").concat(s));if(!e.ok)throw new Error("Failed to fetch total balance");const r=await e.json();b(r.data)}catch(e){console.error("Error fetching total balance:",e)}})()}),[s]);const E=e=>{(async e=>{try{const s=await d.A.get("".concat(n.T,"/api/users/get_firm_details/").concat(e));if(200!==s.status)throw new Error("Failed to fetch firm details");const r=s.data;k(r.data),v(!0)}catch(s){console.error("Error fetching firm details:",s)}})(e)};return(0,h.jsxs)("div",{children:[(0,h.jsx)(c.ay,{}),(0,h.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,h.jsx)(c.DH,{}),(0,h.jsx)("div",{className:"body flex-grow-1 px-3 px-md-3",children:(0,h.jsx)(l.sK,{className:"justify-content-center mb-3",children:(0,h.jsx)(l.UF,{className:"col-md-12",children:(0,h.jsxs)(l.E$,{className:"card_border_color_change py-4",style:{borderColor:"white"},children:[(0,h.jsxs)(l.sK,{className:"allfirms_title_mainrow",children:[(0,h.jsx)(l.UF,{className:"col-md-8",style:{marginLeft:"11px"},children:(0,h.jsxs)(l.sK,{className:"allfirms_title_row py-1 align-items-center",children:[(0,h.jsx)(l.UF,{className:"col-md-1",children:(0,h.jsx)(l.t7,{className:"",src:t,width:25,height:25})}),(0,h.jsx)(l.UF,{className:"col-md-4",children:(0,h.jsx)("h4",{className:"mb-0",children:"All Firms"})})]})}),(0,h.jsx)(l.UF,{className:"col-md-3 text-start",children:(0,h.jsx)(o.N_,{to:"/create_firms",children:(0,h.jsx)(l.Q_,{id:"but_color",children:"Create Firm"})})})]}),(0,h.jsx)(l.sK,{className:"justify-content-center mt-4",children:(0,h.jsx)(l.UF,{md:11,className:"d-flex align-items-center justify-content-end",children:null!==_&&(0,h.jsxs)("div",{className:"mx-sm-4",style:{backgroundColor:"green",color:"white",padding:"10px",borderRadius:"5px"},children:["Cash in Hand: ",_]})})}),(0,h.jsx)(l.sK,{className:"allfirms_table_row py-3 px-3",children:(0,h.jsxs)(l._v,{hover:!0,responsive:!0,className:"custom-table",children:[(0,h.jsx)(l.wV,{className:"custom-table-header",children:(0,h.jsxs)(l.YI,{children:[(0,h.jsx)(l.$s,{children:"Sr. No."}),(0,h.jsx)(l.$s,{children:"Firm Name"}),(0,h.jsx)(l.$s,{children:"Address"}),(0,h.jsx)(l.$s,{children:"Status"}),(0,h.jsx)(l.$s,{children:"GST No."}),(0,h.jsx)(l.$s,{children:"Curr. Balance"}),(0,h.jsx)(l.$s,{children:"Action"}),(0,h.jsx)(l.$s,{children:"Details"})]})}),(0,h.jsx)(l.jS,{children:r.map(((e,s)=>(0,h.jsxs)(l.YI,{children:[(0,h.jsx)(l.cC,{children:s+1}),(0,h.jsx)(l.cC,{children:e.firm_name}),(0,h.jsx)(l.cC,{children:e.firm_address}),(0,h.jsx)(l.cC,{children:e.firm_status}),(0,h.jsx)(l.cC,{children:e.firm_gstno}),(0,h.jsx)(l.cC,{children:e.total_balance}),(0,h.jsxs)(l.cC,{children:[(0,h.jsx)(l.Q_,{color:"warning",size:"sm",className:"me-2",onClick:()=>(e=>{p(e),u(!0)})(e),children:"Edit"}),(0,h.jsx)(l.Q_,{color:"danger",size:"sm",onClick:()=>(e=>{w(e),N(!0)})(e),children:"Delete"})]}),(0,h.jsx)(l.cC,{children:(0,h.jsx)(l.Q_,{color:"info",size:"sm",onClick:()=>E(e.firm_id),children:"View"})})]},e.firm_id)))})]})})]})})})})]}),(0,h.jsxs)(m.A,{show:j,onHide:()=>u(!1),size:"lg",children:[(0,h.jsx)(m.A.Header,{closeButton:!0,children:(0,h.jsx)(m.A.Title,{children:"Edit Firm"})}),(0,h.jsx)(m.A.Body,{children:(0,h.jsxs)(f.A,{children:[(0,h.jsxs)(f.A.Group,{controlId:"formFirmName",children:[(0,h.jsx)(f.A.Label,{children:"Firm Name"}),(0,h.jsx)(f.A.Control,{type:"text",value:A.firm_name,onChange:e=>p({...A,firm_name:e.target.value})})]}),(0,h.jsxs)(f.A.Group,{controlId:"formFirmEmail",className:"mt-3",children:[(0,h.jsx)(f.A.Label,{children:"Email"}),(0,h.jsx)(f.A.Control,{type:"text",value:A.firm_email,onChange:e=>p({...A,firm_email:e.target.value})})]}),(0,h.jsxs)(f.A.Group,{controlId:"formFirmGstno",className:"mt-3",children:[(0,h.jsx)(f.A.Label,{children:"GST No."}),(0,h.jsx)(f.A.Control,{type:"text",value:A.firm_gstno,onChange:e=>p({...A,firm_gstno:e.target.value})})]}),(0,h.jsxs)(f.A.Group,{controlId:"formFirmAddress",className:"mt-3",children:[(0,h.jsx)(f.A.Label,{children:"Address"}),(0,h.jsx)(f.A.Control,{type:"text",value:A.firm_address,onChange:e=>p({...A,firm_address:e.target.value})})]})]})}),(0,h.jsxs)(m.A.Footer,{children:[(0,h.jsx)(l.Q_,{color:"secondary",onClick:()=>u(!1),children:"Close"}),(0,h.jsx)(l.Q_,{color:"primary",onClick:()=>{(async(e,s)=>{try{const r=await d.A.put("".concat(n.T,"/api/users/update_firm_details/").concat(e),s);if(200!==r.status)throw new Error("Failed to update data");const a=r.data;alert(a.message),u(!1),I()}catch(r){console.error("Error updating data:",r)}})(A.firm_id,{firm_name:A.firm_name,firm_email:A.firm_email,firm_gstno:A.firm_gstno,firm_address:A.firm_address,firm_status:"1"})},children:"Save changes"})]})]}),(0,h.jsxs)(m.A,{show:y,onHide:()=>N(!1),size:"sm",children:[(0,h.jsx)(m.A.Header,{closeButton:!0,children:(0,h.jsx)(m.A.Title,{children:"Delete Confirmation"})}),(0,h.jsx)(m.A.Body,{children:"Are you sure you want to delete this firm?"}),(0,h.jsxs)(m.A.Footer,{children:[(0,h.jsx)(l.Q_,{color:"secondary",onClick:()=>N(!1),children:"Cancel"}),(0,h.jsx)(l.Q_,{color:"danger",onClick:()=>{(async e=>{try{const s=await d.A.delete("".concat(n.T,"/api/users/delete_firm/").concat(e));if(200!==s.status)throw new Error("Failed to delete data");s.data,I()}catch(s){console.error("Error deleting data:",s)}})(g.firm_id),N(!1)},children:"Delete"})]})]}),(0,h.jsxs)(m.A,{show:C,onHide:()=>v(!1),size:"lg",children:[(0,h.jsx)(m.A.Header,{closeButton:!0,children:(0,h.jsx)(m.A.Title,{children:"Firm Details"})}),(0,h.jsx)(m.A.Body,{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("h5",{children:["Firm Name: ",F.firm_name]}),(0,h.jsxs)("p",{children:["Email: ",F.firm_email]}),(0,h.jsxs)("p",{children:["GST No: ",F.firm_gstno]}),(0,h.jsxs)("p",{children:["Address: ",F.firm_address]}),(0,h.jsxs)("p",{children:["Status: ",F.firm_status]}),(0,h.jsxs)("p",{children:["Current Balance: ",F.total_balance]})]})}),(0,h.jsx)(m.A.Footer,{children:(0,h.jsx)(l.Q_,{color:"secondary",onClick:()=>v(!1),children:"Close"})})]})]})}},44765:(e,s,r)=>{r.d(s,{A:()=>m});var a=r(98139),t=r.n(a),l=r(65043),c=r(65173),o=r.n(c),i=r(70579);const n={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef(((e,s)=>{let{as:r="div",className:a,type:l="valid",tooltip:c=!1,...o}=e;return(0,i.jsx)(r,{...o,ref:s,className:t()(a,"".concat(l,"-").concat(c?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=n;const m=d},67006:(e,s,r)=>{r.d(s,{A:()=>P});var a=r(98139),t=r.n(a),l=r(65173),c=r.n(l),o=r(65043),i=r(44765),n=r(21068),d=r(5673),m=r(67852),f=r(70579);const h=o.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,htmlFor:l,...c}=e;const{controlId:i}=(0,o.useContext)(d.A);return r=(0,m.oU)(r,"form-check-label"),(0,f.jsx)("label",{...c,ref:s,htmlFor:l||i,className:t()(a,r)})}));h.displayName="FormCheckLabel";const x=h;var j=r(62663);const u=o.forwardRef(((e,s)=>{let{id:r,bsPrefix:a,bsSwitchPrefix:l,inline:c=!1,reverse:h=!1,disabled:u=!1,isValid:A=!1,isInvalid:p=!1,feedbackTooltip:_=!1,feedback:b,feedbackType:y,className:N,style:g,title:w="",type:C="checkbox",label:v,children:F,as:k="input",...I}=e;a=(0,m.oU)(a,"form-check"),l=(0,m.oU)(l,"form-switch");const{controlId:E}=(0,o.useContext)(d.A),T=(0,o.useMemo)((()=>({controlId:r||E})),[E,r]),U=!F&&null!=v&&!1!==v||(0,j.mf)(F,x),S=(0,f.jsx)(n.A,{...I,type:"switch"===C?"checkbox":C,ref:s,isValid:A,isInvalid:p,disabled:u,as:k});return(0,f.jsx)(d.A.Provider,{value:T,children:(0,f.jsx)("div",{style:g,className:t()(N,U&&a,c&&"".concat(a,"-inline"),h&&"".concat(a,"-reverse"),"switch"===C&&l),children:F||(0,f.jsxs)(f.Fragment,{children:[S,U&&(0,f.jsx)(x,{title:w,children:v}),b&&(0,f.jsx)(i.A,{type:y,tooltip:_,children:b})]})})})}));u.displayName="FormCheck";const A=Object.assign(u,{Input:n.A,Label:x});var p=r(86311);const _=o.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l="div",...c}=e;return a=(0,m.oU)(a,"form-floating"),(0,f.jsx)(l,{ref:s,className:t()(r,a),...c})}));_.displayName="FormFloating";const b=_;var y=r(1433),N=r(42780);const g=o.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,id:l,...c}=e;const{controlId:i}=(0,o.useContext)(d.A);return r=(0,m.oU)(r,"form-range"),(0,f.jsx)("input",{...c,type:"range",ref:s,className:t()(a,r),id:l||i})}));g.displayName="FormRange";const w=g,C=o.forwardRef(((e,s)=>{let{bsPrefix:r,size:a,htmlSize:l,className:c,isValid:i=!1,isInvalid:n=!1,id:h,...x}=e;const{controlId:j}=(0,o.useContext)(d.A);return r=(0,m.oU)(r,"form-select"),(0,f.jsx)("select",{...x,size:l,ref:s,className:t()(c,r,a&&"".concat(r,"-").concat(a),i&&"is-valid",n&&"is-invalid"),id:h||j})}));C.displayName="FormSelect";const v=C,F=o.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,as:l="small",muted:c,...o}=e;return r=(0,m.oU)(r,"form-text"),(0,f.jsx)(l,{...o,ref:s,className:t()(a,r,c&&"text-muted")})}));F.displayName="FormText";const k=F,I=o.forwardRef(((e,s)=>(0,f.jsx)(A,{...e,ref:s,type:"switch"})));I.displayName="Switch";const E=Object.assign(I,{Input:A.Input,Label:A.Label}),T=o.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,children:l,controlId:c,label:o,...i}=e;return r=(0,m.oU)(r,"form-floating"),(0,f.jsxs)(y.A,{ref:s,className:t()(a,r),controlId:c,...i,children:[l,(0,f.jsx)("label",{htmlFor:c,children:o})]})}));T.displayName="FloatingLabel";const U=T,S={_ref:c().any,validated:c().bool,as:c().elementType},R=o.forwardRef(((e,s)=>{let{className:r,validated:a,as:l="form",...c}=e;return(0,f.jsx)(l,{...c,ref:s,className:t()(r,a&&"was-validated")})}));R.displayName="Form",R.propTypes=S;const P=Object.assign(R,{Group:y.A,Control:p.A,Floating:b,Check:A,Switch:E,Label:N.A,Text:k,Range:w,Select:v,FloatingLabel:U})},21068:(e,s,r)=>{r.d(s,{A:()=>d});var a=r(98139),t=r.n(a),l=r(65043),c=r(5673),o=r(67852),i=r(70579);const n=l.forwardRef(((e,s)=>{let{id:r,bsPrefix:a,className:n,type:d="checkbox",isValid:m=!1,isInvalid:f=!1,as:h="input",...x}=e;const{controlId:j}=(0,l.useContext)(c.A);return a=(0,o.oU)(a,"form-check-input"),(0,i.jsx)(h,{...x,ref:s,type:d,id:r||j,className:t()(n,a,m&&"is-valid",f&&"is-invalid")})}));n.displayName="FormCheckInput";const d=n},5673:(e,s,r)=>{r.d(s,{A:()=>a});const a=r(65043).createContext({})},86311:(e,s,r)=>{r.d(s,{A:()=>m});var a=r(98139),t=r.n(a),l=r(65043),c=(r(96440),r(44765)),o=r(5673),i=r(67852),n=r(70579);const d=l.forwardRef(((e,s)=>{let{bsPrefix:r,type:a,size:c,htmlSize:d,id:m,className:f,isValid:h=!1,isInvalid:x=!1,plaintext:j,readOnly:u,as:A="input",...p}=e;const{controlId:_}=(0,l.useContext)(o.A);return r=(0,i.oU)(r,"form-control"),(0,n.jsx)(A,{...p,type:a,size:d,ref:s,readOnly:u,id:m||_,className:t()(f,j?"".concat(r,"-plaintext"):r,c&&"".concat(r,"-").concat(c),"color"===a&&"".concat(r,"-color"),h&&"is-valid",x&&"is-invalid")})}));d.displayName="FormControl";const m=Object.assign(d,{Feedback:c.A})},1433:(e,s,r)=>{r.d(s,{A:()=>o});var a=r(65043),t=r(5673),l=r(70579);const c=a.forwardRef(((e,s)=>{let{controlId:r,as:c="div",...o}=e;const i=(0,a.useMemo)((()=>({controlId:r})),[r]);return(0,l.jsx)(t.A.Provider,{value:i,children:(0,l.jsx)(c,{...o,ref:s})})}));c.displayName="FormGroup";const o=c},42780:(e,s,r)=>{r.d(s,{A:()=>m});var a=r(98139),t=r.n(a),l=r(65043),c=(r(96440),r(78602)),o=r(5673),i=r(67852),n=r(70579);const d=l.forwardRef(((e,s)=>{let{as:r="label",bsPrefix:a,column:d=!1,visuallyHidden:m=!1,className:f,htmlFor:h,...x}=e;const{controlId:j}=(0,l.useContext)(o.A);a=(0,i.oU)(a,"form-label");let u="col-form-label";"string"===typeof d&&(u="".concat(u," ").concat(u,"-").concat(d));const A=t()(f,a,m&&"visually-hidden",d&&u);return h=h||j,d?(0,n.jsx)(c.A,{ref:s,as:"label",className:A,htmlFor:h,...x}):(0,n.jsx)(r,{ref:s,className:A,htmlFor:h,...x})}));d.displayName="FormLabel";const m=d},96440:e=>{var s=function(){};e.exports=s},85049:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=27.42f2878f.chunk.js.map