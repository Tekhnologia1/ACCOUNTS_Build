"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7241],{29534:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(72791),r=a(59565),l=(a(13162),a(89743)),n=a(2677),o=a(16157),c=a(33821),i=a(323),d=a(74292),m=a(11087),u=a(88898),f=(a(67135),a(29627)),h=a(80184);const x=()=>{const{user:e}=(0,s.useContext)(u.S),t=e.userId,[a,x]=(0,s.useState)(""),[b,p]=(0,s.useState)(""),[v,g]=(0,s.useState)(""),[j,N]=(0,s.useState)(""),[y,Z]=(0,s.useState)(""),[A,w]=(0,s.useState)(""),[_,C]=(0,s.useState)([]),[F,I]=(0,s.useState)(""),[S,k]=(0,s.useState)(""),[E,P]=(0,s.useState)(""),[R,T]=(0,s.useState)(""),[O,U]=(0,s.useState)(""),[z,L]=(0,s.useState)(""),[V,M]=(0,s.useState)(""),B=e=>{const t=e.target.value;if(x(t),t.length<2)return I("Name must be at least 2 characters long."),!1;return/^[a-zA-Z\s]+$/.test(t)?(I(""),!0):(I("Only letters and spaces are allowed."),!1)},K=e=>{const t=e.target.value;p(t);return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(k(""),!0):(k("Enter valid email address."),!1)},Q=e=>{const t=e.target.value;g(t);return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%`~#^&*()_=+*[\]{};:'",.<>*?&]{8,}$/.test(t)?(P(""),!0):(P("Password must be at least 8 characters long and contain both letters and numbers."),!1)},X=e=>{const t=e.target.value;N(t);return/^\d{10}$/.test(t)?(T(""),!0):(T("Contact number must be exactly 10 digits and contain only numbers."),!1)},J=e=>{const t=e.target.value;return Z(t),0===t.length?(U("Address cannot be blank."),!1):(U(""),!0)};(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("http://20.235.178.6:3007/api/users/get_all_firms_by_user/".concat(t));if(!e.ok)throw new Error("Failed to fetch data");const a=await e.json();C(a.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[t]);const D=async e=>{try{const a=await fetch("http://20.235.178.6:3007/api/users/assign_firm_to_user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e,firm_id:A,added_by_user_id:t})}),s=await a.json();return console.log(s.status),s.status}catch(a){return console.error("Error assigning firm to user:",a),M("Failed to assign firm to the user."),L(""),!1}};return(0,h.jsxs)("div",{children:[(0,h.jsx)(r.gV,{}),(0,h.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,h.jsx)(r.Pm,{}),(0,h.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,h.jsx)(l.Z,{className:"justify-content-center mb-3",children:(0,h.jsx)(n.Z,{xs:12,children:(0,h.jsxs)("div",{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,h.jsxs)(l.Z,{className:"align-items-center",children:[(0,h.jsx)(n.Z,{style:{marginLeft:"11px"},children:(0,h.jsxs)(l.Z,{className:"allfirms_icon_title_row align-items-center",children:[(0,h.jsx)(n.Z,{className:"col-2 col-md-1",children:(0,h.jsx)("img",{className:"sidebar_icon_color",src:f,width:25,height:25,alt:"All Firms Logo"})}),(0,h.jsx)(n.Z,{className:"col-9 col-md-9",children:(0,h.jsx)("h5",{className:"title_font mb-0",style:{color:"white"},children:"Add New User"})})]})}),(0,h.jsx)(n.Z,{className:"col-4 facc_crea_but_col",children:(0,h.jsx)(m.rU,{to:"/all_USERS",children:(0,h.jsx)(o.Z,{id:"but_color",className:"m-0",children:"All Users"})})})]}),(0,h.jsx)(l.Z,{className:"allfirms_table_row py-5 justify-content-center",children:(0,h.jsx)(n.Z,{xs:12,md:6,children:(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)(i.Z,{className:"mb-3",controlId:"formName",children:[(0,h.jsx)(d.Z,{type:"text",placeholder:"Name",value:a,onChange:B}),F&&(0,h.jsx)("div",{className:"text-danger mb-2",children:F})]}),(0,h.jsxs)(i.Z,{className:"mb-3",controlId:"formEmail",children:[(0,h.jsx)(d.Z,{type:"email",placeholder:"Email",value:b,onChange:K}),S&&(0,h.jsx)("div",{className:"text-danger mb-2",children:S})]}),(0,h.jsxs)(i.Z,{className:"mb-3",controlId:"formPassword",children:[(0,h.jsx)(d.Z,{type:"text",placeholder:"Password",value:v,onChange:Q}),E&&(0,h.jsx)("div",{className:"text-danger mb-2",children:E})]}),(0,h.jsxs)(i.Z,{className:"mb-3",controlId:"formContact",children:[(0,h.jsx)(d.Z,{type:"text",placeholder:"Contact",value:j,onChange:X}),R&&(0,h.jsx)("div",{className:"text-danger mb-2",children:R})]}),(0,h.jsxs)(i.Z,{className:"mb-3",controlId:"formAddress",children:[(0,h.jsx)(d.Z,{type:"text",placeholder:"Address",value:y,onChange:J}),O&&(0,h.jsx)("div",{className:"text-danger mb-2",children:O})]}),(0,h.jsxs)(c.Z.Group,{as:l.Z,className:"mb-3",controlId:"formFirmName",children:[(0,h.jsx)(c.Z.Label,{column:!0,sm:3,children:"Firm Name"}),(0,h.jsx)(n.Z,{sm:9,children:(0,h.jsxs)(c.Z.Control,{as:"select",value:A,className:"form-select",onChange:e=>w(e.target.value),children:[(0,h.jsx)("option",{value:"",children:"Select Firm"}),_.map((e=>(0,h.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})})]}),(0,h.jsxs)(l.Z,{className:"justify-content-center align-content-center cf_acc_bt_row",children:[(0,h.jsx)(o.Z,{onClick:async()=>{if(B({target:{value:a}})&&K({target:{value:b}})&&Q({target:{value:v}})&&X({target:{value:j}})&&J({target:{value:y}})&&(""===A?(M("Please select a firm for the user."),0):(M(""),1)))try{const e=await fetch("http://20.235.178.6:3007/api/users/add_user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:b,password:v,contact:j,address:y,status:"1",role:"2"})}),t=await e.json();if(console.log(t.data),t){const e=t.data;await D(e)?(L("User added successfully!"),M("")):(M("Failed to assign firm to the user."),L("")),setTimeout((()=>{window.location.reload()}),1e3)}else M("Please check the details and try again."),L("")}catch(e){console.error("Error adding user:",e),M("Please check the details and try again."),L("")}},id:"but_color",children:"Save"}),V&&(0,h.jsx)("div",{className:"text-danger mt-2 text-center",children:V}),z&&(0,h.jsx)("div",{className:"text-success mt-2 text-center",children:z})]})]})})})]})})})})]})]})}},16157:(e,t,a)=>{a.d(t,{Z:()=>u});var s=a(81694),r=a.n(s),l=a(72791),n=a(80184);const o=["as","disabled"];function c(e){let{tagName:t,disabled:a,href:s,target:r,rel:l,role:n,onClick:o,tabIndex:c=0,type:i}=e;t||(t=null!=s||null!=r||null!=l?"a":"button");const d={tagName:t};if("button"===t)return[{type:i||"button",disabled:a},d];const m=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),a?e.stopPropagation():null==o||o(e)};return"a"===t&&(s||(s="#"),a&&(s=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:a?void 0:c,href:s,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?l:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const i=l.forwardRef(((e,t)=>{let{as:a,disabled:s}=e,r=function(e,t){if(null==e)return{};var a,s,r={},l=Object.keys(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);const[l,{tagName:i}]=c(Object.assign({tagName:a,disabled:s},r));return(0,n.jsx)(i,Object.assign({},r,l,{ref:t}))}));i.displayName="Button";var d=a(10162);const m=l.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:l="primary",size:o,active:i=!1,disabled:m=!1,className:u,...f}=e;const h=(0,d.vE)(s,"btn"),[x,{tagName:b}]=c({tagName:a,disabled:m,...f}),p=b;return(0,n.jsx)(p,{...x,...f,ref:t,disabled:m,className:r()(u,h,i&&"active",l&&"".concat(h,"-").concat(l),o&&"".concat(h,"-").concat(o),f.href&&m&&"disabled")})}));m.displayName="Button";const u=m},70783:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(81694),r=a.n(s),l=a(72791),n=a(52007),o=a.n(n),c=a(80184);const i={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef(((e,t)=>{let{as:a="div",className:s,type:l="valid",tooltip:n=!1,...o}=e;return(0,c.jsx)(a,{...o,ref:t,className:r()(s,"".concat(l,"-").concat(n?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const m=d},33821:(e,t,a)=>{a.d(t,{Z:()=>T});var s=a(81694),r=a.n(s),l=a(52007),n=a.n(l),o=a(72791),c=a(70783),i=a(96882),d=a(84934),m=a(10162),u=a(80184);const f=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,htmlFor:l,...n}=e;const{controlId:c}=(0,o.useContext)(d.Z);return a=(0,m.vE)(a,"form-check-label"),(0,u.jsx)("label",{...n,ref:t,htmlFor:l||c,className:r()(s,a)})}));f.displayName="FormCheckLabel";const h=f;var x=a(11701);const b=o.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,bsSwitchPrefix:l,inline:n=!1,reverse:f=!1,disabled:b=!1,isValid:p=!1,isInvalid:v=!1,feedbackTooltip:g=!1,feedback:j,feedbackType:N,className:y,style:Z,title:A="",type:w="checkbox",label:_,children:C,as:F="input",...I}=e;s=(0,m.vE)(s,"form-check"),l=(0,m.vE)(l,"form-switch");const{controlId:S}=(0,o.useContext)(d.Z),k=(0,o.useMemo)((()=>({controlId:a||S})),[S,a]),E=!C&&null!=_&&!1!==_||(0,x.XW)(C,h),P=(0,u.jsx)(i.Z,{...I,type:"switch"===w?"checkbox":w,ref:t,isValid:p,isInvalid:v,disabled:b,as:F});return(0,u.jsx)(d.Z.Provider,{value:k,children:(0,u.jsx)("div",{style:Z,className:r()(y,E&&s,n&&"".concat(s,"-inline"),f&&"".concat(s,"-reverse"),"switch"===w&&l),children:C||(0,u.jsxs)(u.Fragment,{children:[P,E&&(0,u.jsx)(h,{title:A,children:_}),j&&(0,u.jsx)(c.Z,{type:N,tooltip:g,children:j})]})})})}));b.displayName="FormCheck";const p=Object.assign(b,{Input:i.Z,Label:h});var v=a(74292);const g=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:l="div",...n}=e;return s=(0,m.vE)(s,"form-floating"),(0,u.jsx)(l,{ref:t,className:r()(a,s),...n})}));g.displayName="FormFloating";const j=g;var N=a(323),y=a(53392);const Z=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,id:l,...n}=e;const{controlId:c}=(0,o.useContext)(d.Z);return a=(0,m.vE)(a,"form-range"),(0,u.jsx)("input",{...n,type:"range",ref:t,className:r()(s,a),id:l||c})}));Z.displayName="FormRange";const A=Z,w=o.forwardRef(((e,t)=>{let{bsPrefix:a,size:s,htmlSize:l,className:n,isValid:c=!1,isInvalid:i=!1,id:f,...h}=e;const{controlId:x}=(0,o.useContext)(d.Z);return a=(0,m.vE)(a,"form-select"),(0,u.jsx)("select",{...h,size:l,ref:t,className:r()(n,a,s&&"".concat(a,"-").concat(s),c&&"is-valid",i&&"is-invalid"),id:f||x})}));w.displayName="FormSelect";const _=w,C=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:l="small",muted:n,...o}=e;return a=(0,m.vE)(a,"form-text"),(0,u.jsx)(l,{...o,ref:t,className:r()(s,a,n&&"text-muted")})}));C.displayName="FormText";const F=C,I=o.forwardRef(((e,t)=>(0,u.jsx)(p,{...e,ref:t,type:"switch"})));I.displayName="Switch";const S=Object.assign(I,{Input:p.Input,Label:p.Label}),k=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,children:l,controlId:n,label:o,...c}=e;return a=(0,m.vE)(a,"form-floating"),(0,u.jsxs)(N.Z,{ref:t,className:r()(s,a),controlId:n,...c,children:[l,(0,u.jsx)("label",{htmlFor:n,children:o})]})}));k.displayName="FloatingLabel";const E=k,P={_ref:n().any,validated:n().bool,as:n().elementType},R=o.forwardRef(((e,t)=>{let{className:a,validated:s,as:l="form",...n}=e;return(0,u.jsx)(l,{...n,ref:t,className:r()(a,s&&"was-validated")})}));R.displayName="Form",R.propTypes=P;const T=Object.assign(R,{Group:N.Z,Control:v.Z,Floating:j,Check:p,Switch:S,Label:y.Z,Text:F,Range:A,Select:_,FloatingLabel:E})},96882:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(81694),r=a.n(s),l=a(72791),n=a(84934),o=a(10162),c=a(80184);const i=l.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,className:i,type:d="checkbox",isValid:m=!1,isInvalid:u=!1,as:f="input",...h}=e;const{controlId:x}=(0,l.useContext)(n.Z);return s=(0,o.vE)(s,"form-check-input"),(0,c.jsx)(f,{...h,ref:t,type:d,id:a||x,className:r()(i,s,m&&"is-valid",u&&"is-invalid")})}));i.displayName="FormCheckInput";const d=i},84934:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a(72791).createContext({})},74292:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(81694),r=a.n(s),l=a(72791),n=(a(42391),a(70783)),o=a(84934),c=a(10162),i=a(80184);const d=l.forwardRef(((e,t)=>{let{bsPrefix:a,type:s,size:n,htmlSize:d,id:m,className:u,isValid:f=!1,isInvalid:h=!1,plaintext:x,readOnly:b,as:p="input",...v}=e;const{controlId:g}=(0,l.useContext)(o.Z);return a=(0,c.vE)(a,"form-control"),(0,i.jsx)(p,{...v,type:s,size:d,ref:t,readOnly:b,id:m||g,className:r()(u,x?"".concat(a,"-plaintext"):a,n&&"".concat(a,"-").concat(n),"color"===s&&"".concat(a,"-color"),f&&"is-valid",h&&"is-invalid")})}));d.displayName="FormControl";const m=Object.assign(d,{Feedback:n.Z})},323:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(72791),r=a(84934),l=a(80184);const n=s.forwardRef(((e,t)=>{let{controlId:a,as:n="div",...o}=e;const c=(0,s.useMemo)((()=>({controlId:a})),[a]);return(0,l.jsx)(r.Z.Provider,{value:c,children:(0,l.jsx)(n,{...o,ref:t})})}));n.displayName="FormGroup";const o=n},53392:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(81694),r=a.n(s),l=a(72791),n=(a(42391),a(2677)),o=a(84934),c=a(10162),i=a(80184);const d=l.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:s,column:d=!1,visuallyHidden:m=!1,className:u,htmlFor:f,...h}=e;const{controlId:x}=(0,l.useContext)(o.Z);s=(0,c.vE)(s,"form-label");let b="col-form-label";"string"===typeof d&&(b="".concat(b," ").concat(b,"-").concat(d));const p=r()(u,s,m&&"visually-hidden",d&&b);return f=f||x,d?(0,i.jsx)(n.Z,{ref:t,as:"label",className:p,htmlFor:f,...h}):(0,i.jsx)(a,{ref:t,className:p,htmlFor:f,...h})}));d.displayName="FormLabel";const m=d},42391:e=>{var t=function(){};e.exports=t},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=7241.82ebb945.chunk.js.map