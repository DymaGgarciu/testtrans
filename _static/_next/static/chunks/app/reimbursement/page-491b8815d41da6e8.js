(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{2521:function(e,r,t){Promise.resolve().then(t.bind(t,5175))},5175:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return T}});var n=t(9268),s=t(6006),a=t(353),i=t(9700),o=t(5695),l=t(337),c={src:"/_next/static/media/security.a55a3663.svg",height:24,width:24,blurWidth:0,blurHeight:0},u=t(7532),_=t.n(u);let d=[{value:"Осаго",id:"insurance1",name:"insurance"},{value:"Каско",id:"insurance2",name:"insurance"},{value:"Имущество",id:"insurance3",name:"insurance"},{value:"Медицина",id:"insurance4",name:"insurance"},{value:"Несчастный случай",id:"insurance5",name:"insurance"}],m=[{name:"name",placeholder:"Имя",type:"text",required:!0,errorMessage:"Name is required"},{name:"surname",placeholder:"Фамилия",type:"text",required:!0,errorMessage:"Surname is required"},{name:"insuranceNumber",placeholder:"Номер страхового полиса",type:"number",required:!0,errorMessage:"Insurance Number is required"},{name:"phoneNumber",placeholder:"Номер Телефона",type:"number",required:!0,errorMessage:"Phone Number is required"}];var p=t(5916),x=t.n(p),h=e=>{let{data:r}=e;return(0,n.jsx)("div",{className:x().RadioForm,children:r.map((e,r)=>(0,n.jsxs)("div",{className:x().radioBox,children:[(0,n.jsx)("input",{type:"radio",id:e.id,name:e.name,value:e.value}),(0,n.jsx)("label",{htmlFor:e.id,children:e.value})]},r))})},N=t(6632),j=t(3272),v=t.n(j),f=t(9791),g=()=>{let e=(0,s.useCallback)(e=>{console.log(e)},[]),{getRootProps:r,getInputProps:t,isDragActive:a}=(0,N.uI)({onDrop:e}),i=(0,f.Z)(v().MyDropzone,{[v()["dropzone-active"]]:a});return(0,n.jsx)("section",{className:"container",children:(0,n.jsxs)("div",{...r(),className:(0,f.Z)(v().MyDropzone,i),children:[(0,n.jsx)("input",{...t()}),a?(0,n.jsx)("p",{children:"Drop the files here..."}):(0,n.jsxs)("p",{children:["Перетащите файлы сюда или ",(0,n.jsx)("br",{})," нажмите, чтобы выбрать"]})]})})},y=t(6394),b=t.n(y),Z=()=>{var e,r;let t=a.Ry().shape({name:a.Z_().required(),surname:a.Z_().required(),insuranceNumber:a.Rx().required(),phoneNumber:a.Rx().required(),problemDate:a.Rx().required(),location:a.Rx().required(),description:a.Z_()}),{register:s,handleSubmit:u,formState:{errors:p},reset:x}=(0,i.cI)({resolver:(0,o.X)(t)});return(0,n.jsxs)("form",{className:_().Form,onSubmit:u(e=>{console.log({data:e}),x()}),noValidate:!0,children:[(0,n.jsx)(l.Z,{classNames:_().center,type:"black",text:"Сообщить о случае"}),(0,n.jsxs)("div",{className:_().content,children:[(0,n.jsx)(h,{data:d}),(0,n.jsx)(l.Z,{classNames:_().sectionTitle,type:"typography",text:"Данные заявителя"}),(0,n.jsxs)("div",{className:_().inputs,children:[m.map(e=>{let r=e.name;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:_().formInput,...s(r),placeholder:e.placeholder,type:e.type,required:!0}),(0,n.jsx)("p",{style:{opacity:"".concat(p[r]?1:0)},className:_().error,children:e.errorMessage})]})}),(0,n.jsx)(l.Z,{classNames:_().sectionTitle,type:"typography",text:"Детали проишествия"}),(0,n.jsx)("input",{className:_().formInput,...s("problemDate"),placeholder:"ДД/ММ/ГГГГ",type:"number",required:!0}),(0,n.jsx)("p",{style:{opacity:"".concat((null===(e=p.problemDate)||void 0===e?void 0:e.message)?1:0)},className:_().error,children:"Date is required"}),(0,n.jsx)("input",{className:_().formInput,...s("problemDate"),placeholder:"Место происшествия",type:"text",required:!0}),(0,n.jsx)("p",{style:{opacity:"".concat((null===(r=p.location)||void 0===r?void 0:r.message)?1:0)},className:_().error,children:"Location is required"}),(0,n.jsx)("textarea",{className:_().textArea,...s("problemDate"),placeholder:"Описание случая",required:!0}),(0,n.jsx)(g,{}),(0,n.jsxs)("div",{className:_().submitBox,children:[(0,n.jsxs)("div",{className:_().infoWithIcon,children:[(0,n.jsx)(b(),{src:c,alt:"security"}),(0,n.jsx)("p",{children:"Мы гарантируем безопасность и сохранность ваших данных"})]}),(0,n.jsx)("button",{type:"submit",children:"Отправить"})]})]})]})]})},w=t(2535),k=t(4804),q=t(6507),F=t.n(q),C=t(90),B=t(3047),T=()=>{let e=(0,C.Z)();return(0,n.jsxs)(w.Z,{children:[e&&(0,n.jsx)(B.Z,{redirectTo:"/",pageName:"Страховой случай"}),(0,n.jsx)(k.Z,{classnames:F().top,form:!0}),(0,n.jsx)(Z,{})]})}},3047:function(e,r,t){"use strict";var n=t(9268);t(6006);var s=t(5846),a=t.n(s),i=t(2018),o=t.n(i),l=t(9483),c=t(6394),u=t.n(c),_=t(2620);r.Z=e=>{let{redirectTo:r,pageName:t}=e;return(0,n.jsxs)(a(),{href:r,className:o().BackLink,children:[(0,n.jsx)(u(),{src:_.Z,alt:"card-image"}),(0,n.jsx)(l.Z,{text:t})]})}},2535:function(e,r,t){"use strict";var n=t(9268);t(6006);var s=t(2949),a=t.n(s),i=t(9791);r.Z=e=>{let{children:r,classNames:t}=e;return(0,n.jsx)("div",{className:(0,i.Z)(a().Container,t),children:r})}},90:function(e,r,t){"use strict";var n=t(6006);r.Z=function(){let[e,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{r(function(){{let e=window.innerWidth;return e<890}}())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e}},9483:function(e,r,t){"use strict";var n=t(9268);t(6006);var s=t(5588),a=t.n(s),i=t(9791);r.Z=e=>{let{text:r,classNames:t,type:s="Content_text"}=e,o=(0,i.Z)({[a().Content_text]:"Content_text"===s,[a().Card_text]:"Card_text"===s,[a().modalt]:"modal"===s});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{className:(0,i.Z)(o,t),children:r||""})})}},337:function(e,r,t){"use strict";var n=t(9268);t(6006);var s=t(8227),a=t.n(s),i=t(9791);r.Z=e=>{let{text:r,type:t="blue",classNames:s}=e,o=(0,i.Z)({[a().Blue]:"blue"===t,[a().Black]:"black"===t,[a().Card_Type]:"Card_Type"===t,[a().typography]:"typography"===t});return(0,n.jsx)("h3",{className:(0,i.Z)(a().Title,o,s),children:r||""})}},4804:function(e,r,t){"use strict";var n=t(9268);t(6006);var s=t(5846),a=t.n(s),i=t(3951),o=t.n(i),l=t(9483),c=t(6394),u=t.n(c),_=t(2620),d=t(9791);r.Z=e=>{let{one:r,title:t,classnames:s,form:i}=e;return(0,n.jsxs)("div",{className:(0,d.Z)(o().allNewsHeader,s),children:[(0,n.jsxs)(a(),{href:"/",className:(0,d.Z)(o().btnAllNews,o().orange),children:[(0,n.jsx)(l.Z,{text:"Главная"}),(0,n.jsx)(u(),{src:_.Z,alt:"card-image"})]}),(0,n.jsxs)(a(),{href:"/news",className:(0,d.Z)(o().btnAllNews,"".concat(r&&o().orange)),children:[(0,n.jsx)(l.Z,{text:"".concat(i?"Страховой случай":"Новости")}),r&&(0,n.jsx)(u(),{src:_.Z,alt:"card-image"})]}),t&&(0,n.jsx)(l.Z,{classNames:(0,d.Z)(o().btnAllNews),text:t})]})}},6507:function(e){e.exports={top:"pages_top__jaFz6"}},2018:function(e){e.exports={BackLink:"BackLink_BackLink__tCuo_",svg:"BackLink_svg__pVluN"}},2949:function(e){e.exports={Container:"Container_Container__G2fbY"}},3272:function(e){e.exports={MyDropzone:"Dropzone_MyDropzone__EnHlW"}},7532:function(e){e.exports={Form:"Form_Form__6HkKe",inputs:"Form_inputs__aKg8O",infoWithIcon:"Form_infoWithIcon__gWkN9",formInput:"Form_formInput__q6Hp1",content:"Form_content__Bs9f6",center:"Form_center__fVSxG",sectionTitle:"Form_sectionTitle__PFHmh",error:"Form_error__mHO6H",textArea:"Form_textArea__RVI1T",submitBox:"Form_submitBox__gUyuK"}},5916:function(e){e.exports={RadioForm:"RadioForm_RadioForm__5ZiR2",radioBox:"RadioForm_radioBox__MWCDd"}},5588:function(e){e.exports={Content_text:"Paragraph_Content_text__SzK4J",Card_text:"Paragraph_Card_text__XgE1p",icon:"Paragraph_icon__1Awqd",modal:"Paragraph_modal__zjo_N"}},8227:function(e){e.exports={Title:"Title_Title__A7dSE",Black:"Title_Black__DnZsS",Blue:"Title_Blue__aO2It",Card_Type:"Title_Card_Type__kByz_",typography:"Title_typography__9y9uR"}},3951:function(e){e.exports={News:"News_News__Wi8oq",NewsShort:"News_NewsShort__mNKQH",info:"News_info__Bh1cK",link:"News_link__KzK56",svg:"News_svg__LmtXM",btnAllNews:"News_btnAllNews__8v_QV",orange:"News_orange__vZpy3",wrapper:"News_wrapper__tJmIT",allNewsHeader:"News_allNewsHeader__uSeeh",navigate:"News_navigate__BExb2"}},2620:function(e,r){"use strict";r.Z={src:"/_next/static/media/arrow.7db138fd.svg",height:24,width:24,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[904,136,632,253,769,744],function(){return e(e.s=2521)}),_N_E=e.O()}]);