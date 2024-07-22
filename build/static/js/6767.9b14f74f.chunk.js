"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6767],{25407:(e,s,r)=>{r.d(s,{Y:()=>a});const a="http://65.1.108.30:3007"},70388:(e,s,r)=>{r.r(s),r.d(s,{default:()=>h});var a=r(72791),t=r(13162),l=r(78983),i=r(35109),c=(r(77632),r(11087)),o=r(88898),n=r(25407),d=r(12903),m=r(34782),f=r(33821),x=r(80184);const h=()=>{const{user:e}=(0,a.useContext)(o.S),s=e.userId;(0,a.useEffect)((()=>{console.log(s)}),[s]);const[r,h]=(0,a.useState)([]),[u,j]=(0,a.useState)(!1),[p,b]=(0,a.useState)({firm_id:"",firm_name:"",firm_email:"",firm_gstno:"",firm_address:"",firm_status:""}),[N,y]=(0,a.useState)(null),[g,_]=(0,a.useState)(!1),[v,Z]=(0,a.useState)(null),[w,A]=(0,a.useState)(!1),[C,F]=(0,a.useState)({}),E=async()=>{try{const e=await fetch("".concat(n.Y,"/api/users/get_all_firms_by_user/").concat(s));if(!e.ok)throw new Error("Failed to fetch data");const r=await e.json();h(r.data)}catch(e){console.error("Error fetching data:",e)}};(0,a.useEffect)((()=>{E(),(async()=>{try{const e=await fetch("".concat(n.Y,"/api/users/total_bal_of_all_firms/").concat(s));if(!e.ok)throw new Error("Failed to fetch total balance");const r=await e.json();y(r.data)}catch(e){console.error("Error fetching total balance:",e)}})()}),[s]);const k=e=>{(async e=>{try{const s=await d.Z.get("".concat(n.Y,"/api/users/get_firm_details/").concat(e));if(200!==s.status)throw new Error("Failed to fetch firm details");const r=s.data;F(r.data),A(!0)}catch(s){console.error("Error fetching firm details:",s)}})(e)};return(0,x.jsxs)("div",{children:[(0,x.jsx)(i.gV,{}),(0,x.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,x.jsx)(i.Pm,{}),(0,x.jsx)("div",{className:"body flex-grow-1 px-3 px-md-3",children:(0,x.jsx)(l.rb,{className:"justify-content-center mb-3",children:(0,x.jsx)(l.b7,{className:"col-md-12",children:(0,x.jsxs)(l.xH,{className:"card_border_color_change py-4",style:{borderColor:"white"},children:[(0,x.jsxs)(l.rb,{className:"allfirms_title_mainrow",children:[(0,x.jsx)(l.b7,{className:"col-md-8",style:{marginLeft:"11px"},children:(0,x.jsxs)(l.rb,{className:"allfirms_title_row py-1 align-items-center",children:[(0,x.jsx)(l.b7,{className:"col-md-1",children:(0,x.jsx)(l.DW,{className:"",src:t,width:25,height:25})}),(0,x.jsx)(l.b7,{className:"col-md-4",children:(0,x.jsx)("h4",{className:"mb-0",children:"All Firms"})})]})}),(0,x.jsx)(l.b7,{className:"col-md-3 text-start",children:(0,x.jsx)(c.rU,{to:"/create_firms",children:(0,x.jsx)(l.u5,{id:"but_color",children:"Create Firm"})})})]}),(0,x.jsx)(l.rb,{className:"justify-content-center mt-4",children:(0,x.jsx)(l.b7,{md:11,className:"d-flex align-items-center justify-content-end",children:null!==N&&(0,x.jsxs)("div",{className:"mx-sm-4",style:{backgroundColor:"green",color:"white",padding:"10px",borderRadius:"5px"},children:["Cash in Hand: ",N]})})}),(0,x.jsx)(l.rb,{className:"allfirms_table_row py-3 px-3",children:(0,x.jsxs)(l.Sx,{hover:!0,responsive:!0,className:"custom-table",children:[(0,x.jsx)(l.V,{className:"custom-table-header",children:(0,x.jsxs)(l.T6,{children:[(0,x.jsx)(l.is,{children:"Sr. No."}),(0,x.jsx)(l.is,{children:"Firm Name"}),(0,x.jsx)(l.is,{children:"Address"}),(0,x.jsx)(l.is,{children:"Status"}),(0,x.jsx)(l.is,{children:"GST No."}),(0,x.jsx)(l.is,{children:"Curr. Balance"}),(0,x.jsx)(l.is,{children:"Action"}),(0,x.jsx)(l.is,{children:"Details"})]})}),(0,x.jsx)(l.NR,{children:r.map(((e,s)=>(0,x.jsxs)(l.T6,{children:[(0,x.jsx)(l.NN,{children:s+1}),(0,x.jsx)(l.NN,{children:e.firm_name}),(0,x.jsx)(l.NN,{children:e.firm_address}),(0,x.jsx)(l.NN,{children:e.firm_status}),(0,x.jsx)(l.NN,{children:e.firm_gstno}),(0,x.jsx)(l.NN,{children:e.total_balance}),(0,x.jsxs)(l.NN,{children:[(0,x.jsx)(l.u5,{color:"warning",size:"sm",className:"me-2",onClick:()=>(e=>{b(e),j(!0)})(e),children:"Edit"}),(0,x.jsx)(l.u5,{color:"danger",size:"sm",onClick:()=>(e=>{Z(e),_(!0)})(e),children:"Delete"})]}),(0,x.jsx)(l.NN,{children:(0,x.jsx)(l.u5,{color:"info",size:"sm",onClick:()=>k(e.firm_id),children:"View"})})]},e.firm_id)))})]})})]})})})})]}),(0,x.jsxs)(m.Z,{show:u,onHide:()=>j(!1),size:"lg",children:[(0,x.jsx)(m.Z.Header,{closeButton:!0,children:(0,x.jsx)(m.Z.Title,{children:"Edit Firm"})}),(0,x.jsx)(m.Z.Body,{children:(0,x.jsxs)(f.Z,{children:[(0,x.jsxs)(f.Z.Group,{controlId:"formFirmName",children:[(0,x.jsx)(f.Z.Label,{children:"Firm Name"}),(0,x.jsx)(f.Z.Control,{type:"text",value:p.firm_name,onChange:e=>b({...p,firm_name:e.target.value})})]}),(0,x.jsxs)(f.Z.Group,{controlId:"formFirmEmail",className:"mt-3",children:[(0,x.jsx)(f.Z.Label,{children:"Email"}),(0,x.jsx)(f.Z.Control,{type:"text",value:p.firm_email,onChange:e=>b({...p,firm_email:e.target.value})})]}),(0,x.jsxs)(f.Z.Group,{controlId:"formFirmGstno",className:"mt-3",children:[(0,x.jsx)(f.Z.Label,{children:"GST No."}),(0,x.jsx)(f.Z.Control,{type:"text",value:p.firm_gstno,onChange:e=>b({...p,firm_gstno:e.target.value})})]}),(0,x.jsxs)(f.Z.Group,{controlId:"formFirmAddress",className:"mt-3",children:[(0,x.jsx)(f.Z.Label,{children:"Address"}),(0,x.jsx)(f.Z.Control,{type:"text",value:p.firm_address,onChange:e=>b({...p,firm_address:e.target.value})})]})]})}),(0,x.jsxs)(m.Z.Footer,{children:[(0,x.jsx)(l.u5,{color:"secondary",onClick:()=>j(!1),children:"Close"}),(0,x.jsx)(l.u5,{color:"primary",onClick:()=>{(async(e,s)=>{try{const r=await d.Z.put("".concat(n.Y,"/api/users/update_firm_details/").concat(e),s);if(200!==r.status)throw new Error("Failed to update data");const a=r.data;alert(a.message),j(!1),E()}catch(r){console.error("Error updating data:",r)}})(p.firm_id,{firm_name:p.firm_name,firm_email:p.firm_email,firm_gstno:p.firm_gstno,firm_address:p.firm_address,firm_status:"1"})},children:"Save changes"})]})]}),(0,x.jsxs)(m.Z,{show:g,onHide:()=>_(!1),size:"sm",children:[(0,x.jsx)(m.Z.Header,{closeButton:!0,children:(0,x.jsx)(m.Z.Title,{children:"Delete Confirmation"})}),(0,x.jsx)(m.Z.Body,{children:"Are you sure you want to delete this firm?"}),(0,x.jsxs)(m.Z.Footer,{children:[(0,x.jsx)(l.u5,{color:"secondary",onClick:()=>_(!1),children:"Cancel"}),(0,x.jsx)(l.u5,{color:"danger",onClick:()=>{(async e=>{try{const s=await d.Z.delete("".concat(n.Y,"/api/users/delete_firm/").concat(e));if(200!==s.status)throw new Error("Failed to delete data");s.data,E()}catch(s){console.error("Error deleting data:",s)}})(v.firm_id),_(!1)},children:"Delete"})]})]}),(0,x.jsxs)(m.Z,{show:w,onHide:()=>A(!1),size:"lg",children:[(0,x.jsx)(m.Z.Header,{closeButton:!0,children:(0,x.jsx)(m.Z.Title,{children:"Firm Details"})}),(0,x.jsx)(m.Z.Body,{children:(0,x.jsxs)("div",{children:[(0,x.jsxs)("h5",{children:["Firm Name: ",C.firm_name]}),(0,x.jsxs)("p",{children:["Email: ",C.firm_email]}),(0,x.jsxs)("p",{children:["GST No: ",C.firm_gstno]}),(0,x.jsxs)("p",{children:["Address: ",C.firm_address]}),(0,x.jsxs)("p",{children:["Status: ",C.firm_status]}),(0,x.jsxs)("p",{children:["Current Balance: ",C.total_balance]})]})}),(0,x.jsx)(m.Z.Footer,{children:(0,x.jsx)(l.u5,{color:"secondary",onClick:()=>A(!1),children:"Close"})})]})]})}},70783:(e,s,r)=>{r.d(s,{Z:()=>m});var a=r(81694),t=r.n(a),l=r(72791),i=r(52007),c=r.n(i),o=r(80184);const n={type:c().string,tooltip:c().bool,as:c().elementType},d=l.forwardRef(((e,s)=>{let{as:r="div",className:a,type:l="valid",tooltip:i=!1,...c}=e;return(0,o.jsx)(r,{...c,ref:s,className:t()(a,"".concat(l,"-").concat(i?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=n;const m=d},33821:(e,s,r)=>{r.d(s,{Z:()=>P});var a=r(81694),t=r.n(a),l=r(52007),i=r.n(l),c=r(72791),o=r(70783),n=r(96882),d=r(84934),m=r(10162),f=r(80184);const x=c.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,htmlFor:l,...i}=e;const{controlId:o}=(0,c.useContext)(d.Z);return r=(0,m.vE)(r,"form-check-label"),(0,f.jsx)("label",{...i,ref:s,htmlFor:l||o,className:t()(a,r)})}));x.displayName="FormCheckLabel";const h=x;var u=r(11701);const j=c.forwardRef(((e,s)=>{let{id:r,bsPrefix:a,bsSwitchPrefix:l,inline:i=!1,reverse:x=!1,disabled:j=!1,isValid:p=!1,isInvalid:b=!1,feedbackTooltip:N=!1,feedback:y,feedbackType:g,className:_,style:v,title:Z="",type:w="checkbox",label:A,children:C,as:F="input",...E}=e;a=(0,m.vE)(a,"form-check"),l=(0,m.vE)(l,"form-switch");const{controlId:k}=(0,c.useContext)(d.Z),I=(0,c.useMemo)((()=>({controlId:r||k})),[k,r]),S=!C&&null!=A&&!1!==A||(0,u.XW)(C,h),T=(0,f.jsx)(n.Z,{...E,type:"switch"===w?"checkbox":w,ref:s,isValid:p,isInvalid:b,disabled:j,as:F});return(0,f.jsx)(d.Z.Provider,{value:I,children:(0,f.jsx)("div",{style:v,className:t()(_,S&&a,i&&"".concat(a,"-inline"),x&&"".concat(a,"-reverse"),"switch"===w&&l),children:C||(0,f.jsxs)(f.Fragment,{children:[T,S&&(0,f.jsx)(h,{title:Z,children:A}),y&&(0,f.jsx)(o.Z,{type:g,tooltip:N,children:y})]})})})}));j.displayName="FormCheck";const p=Object.assign(j,{Input:n.Z,Label:h});var b=r(74292);const N=c.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l="div",...i}=e;return a=(0,m.vE)(a,"form-floating"),(0,f.jsx)(l,{ref:s,className:t()(r,a),...i})}));N.displayName="FormFloating";const y=N;var g=r(323),_=r(53392);const v=c.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,id:l,...i}=e;const{controlId:o}=(0,c.useContext)(d.Z);return r=(0,m.vE)(r,"form-range"),(0,f.jsx)("input",{...i,type:"range",ref:s,className:t()(a,r),id:l||o})}));v.displayName="FormRange";const Z=v,w=c.forwardRef(((e,s)=>{let{bsPrefix:r,size:a,htmlSize:l,className:i,isValid:o=!1,isInvalid:n=!1,id:x,...h}=e;const{controlId:u}=(0,c.useContext)(d.Z);return r=(0,m.vE)(r,"form-select"),(0,f.jsx)("select",{...h,size:l,ref:s,className:t()(i,r,a&&"".concat(r,"-").concat(a),o&&"is-valid",n&&"is-invalid"),id:x||u})}));w.displayName="FormSelect";const A=w,C=c.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,as:l="small",muted:i,...c}=e;return r=(0,m.vE)(r,"form-text"),(0,f.jsx)(l,{...c,ref:s,className:t()(a,r,i&&"text-muted")})}));C.displayName="FormText";const F=C,E=c.forwardRef(((e,s)=>(0,f.jsx)(p,{...e,ref:s,type:"switch"})));E.displayName="Switch";const k=Object.assign(E,{Input:p.Input,Label:p.Label}),I=c.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,children:l,controlId:i,label:c,...o}=e;return r=(0,m.vE)(r,"form-floating"),(0,f.jsxs)(g.Z,{ref:s,className:t()(a,r),controlId:i,...o,children:[l,(0,f.jsx)("label",{htmlFor:i,children:c})]})}));I.displayName="FloatingLabel";const S=I,T={_ref:i().any,validated:i().bool,as:i().elementType},R=c.forwardRef(((e,s)=>{let{className:r,validated:a,as:l="form",...i}=e;return(0,f.jsx)(l,{...i,ref:s,className:t()(r,a&&"was-validated")})}));R.displayName="Form",R.propTypes=T;const P=Object.assign(R,{Group:g.Z,Control:b.Z,Floating:y,Check:p,Switch:k,Label:_.Z,Text:F,Range:Z,Select:A,FloatingLabel:S})},96882:(e,s,r)=>{r.d(s,{Z:()=>d});var a=r(81694),t=r.n(a),l=r(72791),i=r(84934),c=r(10162),o=r(80184);const n=l.forwardRef(((e,s)=>{let{id:r,bsPrefix:a,className:n,type:d="checkbox",isValid:m=!1,isInvalid:f=!1,as:x="input",...h}=e;const{controlId:u}=(0,l.useContext)(i.Z);return a=(0,c.vE)(a,"form-check-input"),(0,o.jsx)(x,{...h,ref:s,type:d,id:r||u,className:t()(n,a,m&&"is-valid",f&&"is-invalid")})}));n.displayName="FormCheckInput";const d=n},84934:(e,s,r)=>{r.d(s,{Z:()=>a});const a=r(72791).createContext({})},74292:(e,s,r)=>{r.d(s,{Z:()=>m});var a=r(81694),t=r.n(a),l=r(72791),i=(r(42391),r(70783)),c=r(84934),o=r(10162),n=r(80184);const d=l.forwardRef(((e,s)=>{let{bsPrefix:r,type:a,size:i,htmlSize:d,id:m,className:f,isValid:x=!1,isInvalid:h=!1,plaintext:u,readOnly:j,as:p="input",...b}=e;const{controlId:N}=(0,l.useContext)(c.Z);return r=(0,o.vE)(r,"form-control"),(0,n.jsx)(p,{...b,type:a,size:d,ref:s,readOnly:j,id:m||N,className:t()(f,u?"".concat(r,"-plaintext"):r,i&&"".concat(r,"-").concat(i),"color"===a&&"".concat(r,"-color"),x&&"is-valid",h&&"is-invalid")})}));d.displayName="FormControl";const m=Object.assign(d,{Feedback:i.Z})},323:(e,s,r)=>{r.d(s,{Z:()=>c});var a=r(72791),t=r(84934),l=r(80184);const i=a.forwardRef(((e,s)=>{let{controlId:r,as:i="div",...c}=e;const o=(0,a.useMemo)((()=>({controlId:r})),[r]);return(0,l.jsx)(t.Z.Provider,{value:o,children:(0,l.jsx)(i,{...c,ref:s})})}));i.displayName="FormGroup";const c=i},53392:(e,s,r)=>{r.d(s,{Z:()=>m});var a=r(81694),t=r.n(a),l=r(72791),i=(r(42391),r(2677)),c=r(84934),o=r(10162),n=r(80184);const d=l.forwardRef(((e,s)=>{let{as:r="label",bsPrefix:a,column:d=!1,visuallyHidden:m=!1,className:f,htmlFor:x,...h}=e;const{controlId:u}=(0,l.useContext)(c.Z);a=(0,o.vE)(a,"form-label");let j="col-form-label";"string"===typeof d&&(j="".concat(j," ").concat(j,"-").concat(d));const p=t()(f,a,m&&"visually-hidden",d&&j);return x=x||u,d?(0,n.jsx)(i.Z,{ref:s,as:"label",className:p,htmlFor:x,...h}):(0,n.jsx)(r,{ref:s,className:p,htmlFor:x,...h})}));d.displayName="FormLabel";const m=d},42391:e=>{var s=function(){};e.exports=s},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=6767.9b14f74f.chunk.js.map