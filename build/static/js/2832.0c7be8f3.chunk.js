/*! For license information please see 2832.0c7be8f3.chunk.js.LICENSE.txt */
(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2832],{81694:(e,r)=>{var t;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var n=typeof t;if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)){if(t.length){var c=a.apply(null,t);c&&e.push(c)}}else if("object"===n){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)s.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()},80888:(e,r,t)=>{"use strict";var s=t(79047);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,n,c){if(c!==s){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:a};return t.PropTypes=t,t}},52007:(e,r,t)=>{e.exports=t(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},28282:(e,r,t)=>{"use strict";t.d(r,{Z:()=>I});var s=t(81694),a=t.n(s),n=t(72791),c=t(10162),o=t(80184);const i=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n="div",...i}=e;return s=(0,c.vE)(s,"card-body"),(0,o.jsx)(n,{ref:r,className:a()(t,s),...i})}));i.displayName="CardBody";const l=i,d=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n="div",...i}=e;return s=(0,c.vE)(s,"card-footer"),(0,o.jsx)(n,{ref:r,className:a()(t,s),...i})}));d.displayName="CardFooter";const f=d,u=n.createContext(null);u.displayName="CardHeaderContext";const p=u,m=n.forwardRef(((e,r)=>{let{bsPrefix:t,className:s,as:i="div",...l}=e;const d=(0,c.vE)(t,"card-header"),f=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,o.jsx)(p.Provider,{value:f,children:(0,o.jsx)(i,{ref:r,...l,className:a()(s,d)})})}));m.displayName="CardHeader";const x=m,v=n.forwardRef(((e,r)=>{let{bsPrefix:t,className:s,variant:n,as:i="img",...l}=e;const d=(0,c.vE)(t,"card-img");return(0,o.jsx)(i,{ref:r,className:a()(n?"".concat(d,"-").concat(n):d,s),...l})}));v.displayName="CardImg";const y=v,N=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n="div",...i}=e;return s=(0,c.vE)(s,"card-img-overlay"),(0,o.jsx)(n,{ref:r,className:a()(t,s),...i})}));N.displayName="CardImgOverlay";const b=N,h=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n="a",...i}=e;return s=(0,c.vE)(s,"card-link"),(0,o.jsx)(n,{ref:r,className:a()(t,s),...i})}));h.displayName="CardLink";const C=h;var j=t(27472);const g=(0,j.Z)("h6"),P=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n=g,...i}=e;return s=(0,c.vE)(s,"card-subtitle"),(0,o.jsx)(n,{ref:r,className:a()(t,s),...i})}));P.displayName="CardSubtitle";const E=P,w=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n="p",...i}=e;return s=(0,c.vE)(s,"card-text"),(0,o.jsx)(n,{ref:r,className:a()(t,s),...i})}));w.displayName="CardText";const R=w,_=(0,j.Z)("h5"),k=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n=_,...i}=e;return s=(0,c.vE)(s,"card-title"),(0,o.jsx)(n,{ref:r,className:a()(t,s),...i})}));k.displayName="CardTitle";const T=k,O=n.forwardRef(((e,r)=>{let{bsPrefix:t,className:s,bg:n,text:i,border:d,body:f=!1,children:u,as:p="div",...m}=e;const x=(0,c.vE)(t,"card");return(0,o.jsx)(p,{ref:r,...m,className:a()(s,x,n&&"bg-".concat(n),i&&"text-".concat(i),d&&"border-".concat(d)),children:f?(0,o.jsx)(l,{children:u}):u})}));O.displayName="Card";const I=Object.assign(O,{Img:y,Title:T,Subtitle:E,Body:l,Link:C,Text:R,Header:x,Footer:f,ImgOverlay:b})},2677:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(81694),a=t.n(s),n=t(72791),c=t(10162),o=t(80184);const i=n.forwardRef(((e,r)=>{const[{className:t,...s},{as:n="div",bsPrefix:i,spans:l}]=function(e){let{as:r,bsPrefix:t,className:s,...n}=e;t=(0,c.vE)(t,"col");const o=(0,c.pi)(),i=(0,c.zG)(),l=[],d=[];return o.forEach((e=>{const r=n[e];let s,a,c;delete n[e],"object"===typeof r&&null!=r?({span:s,offset:a,order:c}=r):s=r;const o=e!==i?"-".concat(e):"";s&&l.push(!0===s?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(s)),null!=c&&d.push("order".concat(o,"-").concat(c)),null!=a&&d.push("offset".concat(o,"-").concat(a))})),[{...n,className:a()(s,...l,...d)},{as:r,bsPrefix:t,spans:l}]}(e);return(0,o.jsx)(n,{...s,ref:r,className:a()(t,!l.length&&i)})}));i.displayName="Col";const l=i},47022:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(81694),a=t.n(s),n=t(72791),c=t(10162),o=t(80184);const i=n.forwardRef(((e,r)=>{let{bsPrefix:t,fluid:s=!1,as:n="div",className:i,...l}=e;const d=(0,c.vE)(t,"container"),f="string"===typeof s?"-".concat(s):"-fluid";return(0,o.jsx)(n,{ref:r,...l,className:a()(i,s?"".concat(d).concat(f):d)})}));i.displayName="Container";const l=i},11701:(e,r,t)=>{"use strict";t.d(r,{UI:()=>a,XW:()=>n});var s=t(72791);function a(e,r){let t=0;return s.Children.map(e,(e=>s.isValidElement(e)?r(e,t++):e))}function n(e,r){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===r))}},27098:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var s=t(81694),a=t.n(s),n=t(72791),c=t(10162),o=t(96882);const i=n.createContext(null);i.displayName="InputGroupContext";const l=i;var d=t(80184);const f=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:s,as:n="span",...o}=e;return s=(0,c.vE)(s,"input-group-text"),(0,d.jsx)(n,{ref:r,className:a()(t,s),...o})}));f.displayName="InputGroupText";const u=f,p=n.forwardRef(((e,r)=>{let{bsPrefix:t,size:s,hasValidation:o,className:i,as:f="div",...u}=e;t=(0,c.vE)(t,"input-group");const p=(0,n.useMemo)((()=>({})),[]);return(0,d.jsx)(l.Provider,{value:p,children:(0,d.jsx)(f,{ref:r,...u,className:a()(i,t,s&&"".concat(t,"-").concat(s),o&&"has-validation")})})}));p.displayName="InputGroup";const m=Object.assign(p,{Text:u,Radio:e=>(0,d.jsx)(u,{children:(0,d.jsx)(o.Z,{type:"radio",...e})}),Checkbox:e=>(0,d.jsx)(u,{children:(0,d.jsx)(o.Z,{type:"checkbox",...e})})})},89743:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(81694),a=t.n(s),n=t(72791),c=t(10162),o=t(80184);const i=n.forwardRef(((e,r)=>{let{bsPrefix:t,className:s,as:n="div",...i}=e;const l=(0,c.vE)(t,"row"),d=(0,c.pi)(),f=(0,c.zG)(),u="".concat(l,"-cols"),p=[];return d.forEach((e=>{const r=i[e];let t;delete i[e],null!=r&&"object"===typeof r?({cols:t}=r):t=r;const s=e!==f?"-".concat(e):"";null!=t&&p.push("".concat(u).concat(s,"-").concat(t))})),(0,o.jsx)(n,{ref:r,...i,className:a()(s,l,...p)})}));i.displayName="Row";const l=i},10162:(e,r,t)=>{"use strict";t.d(r,{SC:()=>u,pi:()=>d,vE:()=>l,zG:()=>f});var s=t(72791);t(80184);const a=["xxl","xl","lg","md","sm","xs"],n="xs",c=s.createContext({prefixes:{},breakpoints:a,minBreakpoint:n}),{Consumer:o,Provider:i}=c;function l(e,r){const{prefixes:t}=(0,s.useContext)(c);return e||t[r]||r}function d(){const{breakpoints:e}=(0,s.useContext)(c);return e}function f(){const{minBreakpoint:e}=(0,s.useContext)(c);return e}function u(){const{dir:e}=(0,s.useContext)(c);return"rtl"===e}},27472:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(72791),a=t(81694),n=t.n(a),c=t(80184);const o=e=>s.forwardRef(((r,t)=>(0,c.jsx)("div",{...r,ref:t,className:n()(r.className,e)})))}}]);
//# sourceMappingURL=2832.0c7be8f3.chunk.js.map