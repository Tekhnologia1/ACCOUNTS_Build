"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3039],{17598:(e,s,a)=>{a.d(s,{T:()=>t});const t="http://65.0.139.50:3007"},2946:(e,s,a)=>{a.r(s),a.d(s,{default:()=>A});var t=a(65043),r=a(85049),l=a(93946),c=a(42645),o=(a(38421),a(35475)),n=a(67006),i=a(61072),d=a(78602),m=a(70702),h=a(59395),x=a(86213),f=a(17598),u=a(70579);const A=()=>{const{user:e}=(0,t.useContext)(h.R),s=e.userId,[a,A]=(0,t.useState)([]),[j,p]=(0,t.useState)(""),[g,b]=(0,t.useState)([]),[y,N]=(0,t.useState)(!1),[_,v]=(0,t.useState)({gl_id:"",gl_name:"",gl_status:""}),[w,F]=(0,t.useState)(!1),[C,k]=(0,t.useState)(null);(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(f.T,"/api/users/get_all_firms_by_user/").concat(s));if(!e.ok)throw new Error("Failed to fetch data");const a=await e.json();A(a.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[s]);const I=async e=>{try{const s=await fetch("".concat(f.T,"/api/users/get_general_ledgers/").concat(e));if(!s.ok)throw new Error("Failed to fetch data");const a=await s.json();b(a.data)}catch(s){console.error("Error fetching data:",s)}};(0,t.useEffect)((()=>{j&&I(j)}),[j]);return(0,u.jsxs)("div",{children:[(0,u.jsx)(c.ay,{}),(0,u.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,u.jsx)(c.DH,{}),(0,u.jsx)("div",{className:"body flex-grow-1 px-5",children:(0,u.jsx)(l.sK,{className:"justify-content-center mb-3",children:(0,u.jsx)(l.UF,{md:12,children:(0,u.jsxs)(l.E$,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,u.jsxs)(l.sK,{className:"allfirms_title_mainrow",children:[(0,u.jsx)(l.UF,{md:9,style:{marginLeft:"10px"},children:(0,u.jsxs)(l.sK,{className:"allfirms_title_row py-1 align-items-center",children:[(0,u.jsx)(l.UF,{md:1,children:(0,u.jsx)(l.t7,{className:"",src:r,width:25,height:25})}),(0,u.jsx)(l.UF,{md:5,children:(0,u.jsx)("h4",{children:"Firm Accounts"})})]})}),(0,u.jsx)(l.UF,{md:2,className:"align-content-center justify-content-end",children:(0,u.jsx)(o.N_,{to:"/create_ledger",children:(0,u.jsx)(l.Q_,{id:"but_color",children:"Create"})})})]}),(0,u.jsxs)(l.sK,{className:"allfirms_table_row py-5",children:[(0,u.jsxs)(n.A.Group,{as:i.A,className:"mb-3",controlId:"formFirmName",children:[(0,u.jsx)(n.A.Label,{column:!0,sm:2,children:"Firm Name"}),(0,u.jsx)(d.A,{sm:5,children:(0,u.jsxs)(n.A.Control,{as:"select",value:j,className:"form-select",onChange:e=>p(e.target.value),children:[(0,u.jsx)("option",{value:"",children:"Select Firm"}),a.map((e=>(0,u.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})})]}),(0,u.jsxs)(l._v,{hover:!0,responsive:!0,className:"custom-table",children:[(0,u.jsx)(l.wV,{className:"custom-table-header",children:(0,u.jsxs)(l.YI,{children:[(0,u.jsx)(l.$s,{children:"Sr. No."}),(0,u.jsx)(l.$s,{children:"Firm Account Name"}),(0,u.jsx)(l.$s,{children:"Status"}),(0,u.jsx)(l.$s,{children:"Curr. Balance"}),(0,u.jsx)(l.$s,{children:"Action"})]})}),(0,u.jsx)(l.jS,{children:g.map(((e,s)=>(0,u.jsxs)(l.YI,{children:[(0,u.jsx)(l.cC,{children:s+1}),(0,u.jsx)(l.cC,{children:e.gl_name}),(0,u.jsx)(l.cC,{children:e.gl_status}),(0,u.jsx)(l.cC,{children:e.balance}),(0,u.jsxs)(l.cC,{children:[(0,u.jsx)(l.Q_,{color:"warning",size:"sm",className:"me-2",onClick:()=>(e=>{v(e),N(!0)})(e),children:"Edit"}),(0,u.jsx)(l.Q_,{color:"danger",size:"sm",onClick:()=>(e=>{k(e),F(!0)})({firm_id:j,gl_id:e.gl_id}),children:"Delete"})]})]},s)))})]})]})]})})})})]}),(0,u.jsxs)(m.A,{show:y,onHide:()=>N(!1),children:[(0,u.jsx)(m.A.Header,{closeButton:!0,children:(0,u.jsx)(m.A.Title,{children:"Edit General Ledger"})}),(0,u.jsx)(m.A.Body,{children:(0,u.jsx)(n.A,{children:(0,u.jsxs)(n.A.Group,{controlId:"formGLName",children:[(0,u.jsx)(n.A.Label,{children:"Gen Ledger Name"}),(0,u.jsx)(n.A.Control,{type:"text",value:_.gl_name,onChange:e=>v({..._,gl_name:e.target.value})})]})})}),(0,u.jsxs)(m.A.Footer,{children:[(0,u.jsx)(l.Q_,{color:"secondary",onClick:()=>N(!1),children:"Close"}),(0,u.jsx)(l.Q_,{color:"primary",onClick:()=>{(async(e,s,a)=>{try{const t=await x.A.put("".concat(f.T,"/api/users/update_general_ledgers/").concat(e,"/").concat(s),a);if(200!==t.status)throw new Error("Failed to update data");alert(t.data.message),N(!1),I(e)}catch(t){console.error("Error updating data:",t)}})(j,_.gl_id,{gl_name:_.gl_name,gl_status:_.gl_status})},children:"Save changes"})]})]}),(0,u.jsxs)(m.A,{show:w,onHide:()=>F(!1),children:[(0,u.jsx)(m.A.Header,{closeButton:!0,children:(0,u.jsx)(m.A.Title,{children:"Confirm Deletion"})}),(0,u.jsx)(m.A.Body,{children:"Are you sure you want to delete this ledger?"}),(0,u.jsxs)(m.A.Footer,{children:[(0,u.jsx)(l.Q_,{color:"secondary",onClick:()=>F(!1),children:"Cancel"}),(0,u.jsx)(l.Q_,{color:"danger",onClick:async()=>{if(!C)return;const{firm_id:e,gl_id:s}=C;try{if(200!==(await x.A.delete("".concat(f.T,"/api/users/delete_general_ledgers/").concat(e,"/").concat(s))).status)throw new Error("Failed to delete data");F(!1),I(e)}catch(a){console.error("Error deleting data:",a)}},children:"Delete"})]})]})]})}},44765:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(98139),r=a.n(t),l=a(65043),c=a(65173),o=a.n(c),n=a(70579);const i={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef(((e,s)=>{let{as:a="div",className:t,type:l="valid",tooltip:c=!1,...o}=e;return(0,n.jsx)(a,{...o,ref:s,className:r()(t,"".concat(l,"-").concat(c?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const m=d},67006:(e,s,a)=>{a.d(s,{A:()=>P});var t=a(98139),r=a.n(t),l=a(65173),c=a.n(l),o=a(65043),n=a(44765),i=a(21068),d=a(5673),m=a(67852),h=a(70579);const x=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,htmlFor:l,...c}=e;const{controlId:n}=(0,o.useContext)(d.A);return a=(0,m.oU)(a,"form-check-label"),(0,h.jsx)("label",{...c,ref:s,htmlFor:l||n,className:r()(t,a)})}));x.displayName="FormCheckLabel";const f=x;var u=a(62663);const A=o.forwardRef(((e,s)=>{let{id:a,bsPrefix:t,bsSwitchPrefix:l,inline:c=!1,reverse:x=!1,disabled:A=!1,isValid:j=!1,isInvalid:p=!1,feedbackTooltip:g=!1,feedback:b,feedbackType:y,className:N,style:_,title:v="",type:w="checkbox",label:F,children:C,as:k="input",...I}=e;t=(0,m.oU)(t,"form-check"),l=(0,m.oU)(l,"form-switch");const{controlId:U}=(0,o.useContext)(d.A),E=(0,o.useMemo)((()=>({controlId:a||U})),[U,a]),S=!C&&null!=F&&!1!==F||(0,u.mf)(C,f),T=(0,h.jsx)(i.A,{...I,type:"switch"===w?"checkbox":w,ref:s,isValid:j,isInvalid:p,disabled:A,as:k});return(0,h.jsx)(d.A.Provider,{value:E,children:(0,h.jsx)("div",{style:_,className:r()(N,S&&t,c&&"".concat(t,"-inline"),x&&"".concat(t,"-reverse"),"switch"===w&&l),children:C||(0,h.jsxs)(h.Fragment,{children:[T,S&&(0,h.jsx)(f,{title:v,children:F}),b&&(0,h.jsx)(n.A,{type:y,tooltip:g,children:b})]})})})}));A.displayName="FormCheck";const j=Object.assign(A,{Input:i.A,Label:f});var p=a(86311);const g=o.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:l="div",...c}=e;return t=(0,m.oU)(t,"form-floating"),(0,h.jsx)(l,{ref:s,className:r()(a,t),...c})}));g.displayName="FormFloating";const b=g;var y=a(1433),N=a(42780);const _=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,id:l,...c}=e;const{controlId:n}=(0,o.useContext)(d.A);return a=(0,m.oU)(a,"form-range"),(0,h.jsx)("input",{...c,type:"range",ref:s,className:r()(t,a),id:l||n})}));_.displayName="FormRange";const v=_,w=o.forwardRef(((e,s)=>{let{bsPrefix:a,size:t,htmlSize:l,className:c,isValid:n=!1,isInvalid:i=!1,id:x,...f}=e;const{controlId:u}=(0,o.useContext)(d.A);return a=(0,m.oU)(a,"form-select"),(0,h.jsx)("select",{...f,size:l,ref:s,className:r()(c,a,t&&"".concat(a,"-").concat(t),n&&"is-valid",i&&"is-invalid"),id:x||u})}));w.displayName="FormSelect";const F=w,C=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,as:l="small",muted:c,...o}=e;return a=(0,m.oU)(a,"form-text"),(0,h.jsx)(l,{...o,ref:s,className:r()(t,a,c&&"text-muted")})}));C.displayName="FormText";const k=C,I=o.forwardRef(((e,s)=>(0,h.jsx)(j,{...e,ref:s,type:"switch"})));I.displayName="Switch";const U=Object.assign(I,{Input:j.Input,Label:j.Label}),E=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,children:l,controlId:c,label:o,...n}=e;return a=(0,m.oU)(a,"form-floating"),(0,h.jsxs)(y.A,{ref:s,className:r()(t,a),controlId:c,...n,children:[l,(0,h.jsx)("label",{htmlFor:c,children:o})]})}));E.displayName="FloatingLabel";const S=E,T={_ref:c().any,validated:c().bool,as:c().elementType},R=o.forwardRef(((e,s)=>{let{className:a,validated:t,as:l="form",...c}=e;return(0,h.jsx)(l,{...c,ref:s,className:r()(a,t&&"was-validated")})}));R.displayName="Form",R.propTypes=T;const P=Object.assign(R,{Group:y.A,Control:p.A,Floating:b,Check:j,Switch:U,Label:N.A,Text:k,Range:v,Select:F,FloatingLabel:S})},21068:(e,s,a)=>{a.d(s,{A:()=>d});var t=a(98139),r=a.n(t),l=a(65043),c=a(5673),o=a(67852),n=a(70579);const i=l.forwardRef(((e,s)=>{let{id:a,bsPrefix:t,className:i,type:d="checkbox",isValid:m=!1,isInvalid:h=!1,as:x="input",...f}=e;const{controlId:u}=(0,l.useContext)(c.A);return t=(0,o.oU)(t,"form-check-input"),(0,n.jsx)(x,{...f,ref:s,type:d,id:a||u,className:r()(i,t,m&&"is-valid",h&&"is-invalid")})}));i.displayName="FormCheckInput";const d=i},5673:(e,s,a)=>{a.d(s,{A:()=>t});const t=a(65043).createContext({})},86311:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(98139),r=a.n(t),l=a(65043),c=(a(96440),a(44765)),o=a(5673),n=a(67852),i=a(70579);const d=l.forwardRef(((e,s)=>{let{bsPrefix:a,type:t,size:c,htmlSize:d,id:m,className:h,isValid:x=!1,isInvalid:f=!1,plaintext:u,readOnly:A,as:j="input",...p}=e;const{controlId:g}=(0,l.useContext)(o.A);return a=(0,n.oU)(a,"form-control"),(0,i.jsx)(j,{...p,type:t,size:d,ref:s,readOnly:A,id:m||g,className:r()(h,u?"".concat(a,"-plaintext"):a,c&&"".concat(a,"-").concat(c),"color"===t&&"".concat(a,"-color"),x&&"is-valid",f&&"is-invalid")})}));d.displayName="FormControl";const m=Object.assign(d,{Feedback:c.A})},1433:(e,s,a)=>{a.d(s,{A:()=>o});var t=a(65043),r=a(5673),l=a(70579);const c=t.forwardRef(((e,s)=>{let{controlId:a,as:c="div",...o}=e;const n=(0,t.useMemo)((()=>({controlId:a})),[a]);return(0,l.jsx)(r.A.Provider,{value:n,children:(0,l.jsx)(c,{...o,ref:s})})}));c.displayName="FormGroup";const o=c},42780:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(98139),r=a.n(t),l=a(65043),c=(a(96440),a(78602)),o=a(5673),n=a(67852),i=a(70579);const d=l.forwardRef(((e,s)=>{let{as:a="label",bsPrefix:t,column:d=!1,visuallyHidden:m=!1,className:h,htmlFor:x,...f}=e;const{controlId:u}=(0,l.useContext)(o.A);t=(0,n.oU)(t,"form-label");let A="col-form-label";"string"===typeof d&&(A="".concat(A," ").concat(A,"-").concat(d));const j=r()(h,t,m&&"visually-hidden",d&&A);return x=x||u,d?(0,i.jsx)(c.A,{ref:s,as:"label",className:j,htmlFor:x,...f}):(0,i.jsx)(a,{ref:s,className:j,htmlFor:x,...f})}));d.displayName="FormLabel";const m=d},96440:e=>{var s=function(){};e.exports=s},85049:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=3039.2a78638c.chunk.js.map