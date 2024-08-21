"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2283],{25407:(e,t,a)=>{a.d(t,{Y:()=>r});const r="http://20.235.178.6:3007"},55306:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(72791),s=a(78983),n=a(59565),l=(a(13162),a(33821)),c=a(89743),i=a(2677),o=a(16157),d=a(34782),m=a(12903),u=a(88898),h=a(25407),b=a(68446),x=a(80184);const f=()=>{const{user:e}=(0,r.useContext)(u.S),t=e.userId,[a,f]=(0,r.useState)([]),[g,A]=(0,r.useState)(""),[j,N]=(0,r.useState)(""),[p,v]=(0,r.useState)(""),[y,_]=(0,r.useState)(""),[Z,w]=(0,r.useState)(!1),[C,F]=(0,r.useState)(""),[S,E]=(0,r.useState)(""),k=e=>{if(N(e.target.value),v(""),0===j.length)return _("Name must be at least 2 characters long."),!1;_("");return j.length<2?(_("Name must be at least 2 characters long."),!1):/^[a-zA-Z\s]+$/.test(j)?(_(""),!0):(_("Only letters and spaces are allowed."),!1)};(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(h.Y,"/api/users/get_all_firms_by_user/").concat(t));if(!e.ok)throw new Error("Failed to fetch data");const a=await e.json();f(a.data)}catch(e){console.error("Error fetching firms:",e)}})()}),[t]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(n.LC,{}),(0,x.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,x.jsx)(n.WW,{}),(0,x.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,x.jsx)(s.rb,{className:"justify-content-center mb-3",children:(0,x.jsx)(s.b7,{md:12,children:(0,x.jsxs)(s.xH,{className:"card_border_color_change py-5",style:{borderColor:"white"},children:[(0,x.jsx)(s.rb,{className:"align-items-center",children:(0,x.jsx)(s.b7,{style:{marginLeft:"11px"},className:"col-9",children:(0,x.jsxs)(s.rb,{className:"allfirms_icon_title_row align-items-center",children:[(0,x.jsx)(s.b7,{className:"col-2 col-md-1",children:(0,x.jsx)("img",{className:"sidebar_icon_color",src:b,width:25,height:25,alt:"All Firms Logo"})}),(0,x.jsx)(s.b7,{className:"col-8 col-md-7",children:(0,x.jsx)("h5",{className:"title_font mb-0",style:{color:"white"},children:"Create Firm Account"})})]})})}),(0,x.jsx)(s.rb,{className:"allfirms_table_row py-5 justify-content-center",children:(0,x.jsx)(s.b7,{md:10,children:(0,x.jsxs)(l.Z,{children:[(0,x.jsxs)(l.Z.Group,{as:c.Z,className:"mb-3",controlId:"formFirmName",children:[(0,x.jsx)(l.Z.Label,{column:!0,sm:3,children:"Firm Name"}),(0,x.jsx)(i.Z,{sm:6,children:(0,x.jsxs)(l.Z.Control,{as:"select",value:g,className:"form-select",onChange:e=>A(e.target.value),children:[(0,x.jsx)("option",{value:"",children:"Select Firm"}),a.map((e=>(0,x.jsx)("option",{value:e.firm_id,children:e.firm_name},e.firm_id)))]})})]}),(0,x.jsxs)(l.Z.Group,{as:c.Z,className:"mb-3",controlId:"formGeneralLedgerName",children:[(0,x.jsx)(l.Z.Label,{column:!0,sm:3,children:"Firm Account Name"}),(0,x.jsxs)(i.Z,{sm:6,children:[(0,x.jsx)(l.Z.Control,{type:"text",value:j,onChange:k}),(0,x.jsx)("div",{style:{color:"green",fontSize:"14px"},children:"[Firm Account Name can be Expense or Salary or Person Name like 'Aditya', 'Megha']"}),y&&(0,x.jsx)("div",{className:"text-danger mb-2",children:y})]})]}),p&&(0,x.jsx)("div",{className:"text-danger mb-2",children:p}),(0,x.jsx)(c.Z,{className:"cf_acc_bt_row justify-content-center align-content-center",children:(0,x.jsx)(o.Z,{variant:"primary",id:"but_color",onClick:async()=>{try{if(g&&v(""),!g||!j)return void v("Please select a firm and enter a firm account name");if(!k({target:{value:j}}))return v(""),void _("Enter valid firm account name.");const e=g;201===(await m.Z.post("".concat(h.Y,"/api/users/create_general_ledgers/").concat(e),{gl_name:j})).status?(E("Firm Account Status"),F("Firm account created successfully !!"),N("")):(E("Firm Account Status"),F("Please try again !!"))}catch(e){console.error("Error creating general ledger:",e),E("Firm Account Status"),F("Something went wrong !!")}finally{w(!0)}},children:"Create"})})]})})})]})})})})]}),(0,x.jsxs)(d.Z,{show:Z,onHide:()=>w(!1),centered:!0,children:[(0,x.jsx)(d.Z.Header,{closeButton:!0,children:(0,x.jsx)(d.Z.Title,{children:S})}),(0,x.jsx)(d.Z.Body,{children:C}),(0,x.jsx)(d.Z.Footer,{children:(0,x.jsx)(o.Z,{variant:"secondary",onClick:()=>w(!1),children:"Close"})})]})]})}},16157:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(81694),s=a.n(r),n=a(72791),l=a(80184);const c=["as","disabled"];function i(e){let{tagName:t,disabled:a,href:r,target:s,rel:n,role:l,onClick:c,tabIndex:i=0,type:o}=e;t||(t=null!=r||null!=s||null!=n?"a":"button");const d={tagName:t};if("button"===t)return[{type:o||"button",disabled:a},d];const m=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),a?e.stopPropagation():null==c||c(e)};return"a"===t&&(r||(r="#"),a&&(r=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:a?void 0:i,href:r,target:"a"===t?s:void 0,"aria-disabled":a||void 0,rel:"a"===t?n:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const o=n.forwardRef(((e,t)=>{let{as:a,disabled:r}=e,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,c);const[n,{tagName:o}]=i(Object.assign({tagName:a,disabled:r},s));return(0,l.jsx)(o,Object.assign({},s,n,{ref:t}))}));o.displayName="Button";var d=a(10162);const m=n.forwardRef(((e,t)=>{let{as:a,bsPrefix:r,variant:n="primary",size:c,active:o=!1,disabled:m=!1,className:u,...h}=e;const b=(0,d.vE)(r,"btn"),[x,{tagName:f}]=i({tagName:a,disabled:m,...h}),g=f;return(0,l.jsx)(g,{...x,...h,ref:t,disabled:m,className:s()(u,b,o&&"active",n&&"".concat(b,"-").concat(n),c&&"".concat(b,"-").concat(c),h.href&&m&&"disabled")})}));m.displayName="Button";const u=m},13162:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZZPTsJAFMbfDEVJMdob2KUxttYb4A28gRyhobovezF4AuEEegPxBBJWLucILghRUjtMaUlK2xmmfxJY9Ldok29e3tfO+5IZgD2AkkLz0rYaGDSoCg/I7/eQxCUlZao03tnrHKriiPbZ041LGPaAIlgbY4xGUBDfpyPg7JjAlJL5dDCBgqimw107uO1dI0xzlMytmoy05jcVpTlK5lZNRlqTHOb2sgR3eWseNEmyZqOVMv1bej/8mXrpmkgrZVrPNKCeKdQzlTWdT58mVdTEEW6vptuaajh3ZXVpU0rR9fIUf7Fb1Jtq9F5bF7Ye6K0ruyOjM+mM1zt1MWOHL4GMtFJ2qCNKPwHhexk9VtFfzJ5dkPnTsCEQ9hqHX4f0TWMZXQTXFIH/coz/bxazQdf30S2EDXPrUrQN5+PEeugkdc2ytbb1aOXSTWeomj0XdhEUQ4VU3a8wK4sKsQsFva6bAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=2283.499fce3c.chunk.js.map