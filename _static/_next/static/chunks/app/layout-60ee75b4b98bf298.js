(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1308:function(e,t,n){Promise.resolve().then(n.bind(n,3493)),Promise.resolve().then(n.bind(n,3778)),Promise.resolve().then(n.t.bind(n,5962,23)),Promise.resolve().then(n.bind(n,3968)),Promise.resolve().then(n.bind(n,9404)),Promise.resolve().then(n.bind(n,5487)),Promise.resolve().then(n.bind(n,6759)),Promise.resolve().then(n.t.bind(n,7977,23)),Promise.resolve().then(n.t.bind(n,6784,23)),Promise.resolve().then(n.t.bind(n,86,23)),Promise.resolve().then(n.t.bind(n,2949,23)),Promise.resolve().then(n.t.bind(n,6626,23)),Promise.resolve().then(n.t.bind(n,8227,23)),Promise.resolve().then(n.t.bind(n,5588,23)),Promise.resolve().then(n.t.bind(n,7059,23)),Promise.resolve().then(n.t.bind(n,6150,23)),Promise.resolve().then(n.t.bind(n,5685,23))},9979:function(e,t,n){"use strict";n.r(t);var a=n(9268);n(6006);var r=n(1844),s=n.n(r),i=n(9791);t.default=function(e){let{children:t,classNames:n,onClick:r,type:o="default",active:l}=e,c=(0,i.Z)({[s().head]:"head"===o,[s().collapse]:"collapse"===o,[s().Button]:"default"===o,[s().activeBtn]:l});return(0,a.jsx)("button",{onClick:r,className:(0,i.Z)(c,n),children:t})}},2535:function(e,t,n){"use strict";var a=n(9268);n(6006);var r=n(2949),s=n.n(r),i=n(9791);t.Z=e=>{let{children:t,classNames:n}=e;return(0,a.jsx)("div",{className:(0,i.Z)(s().Container,n),children:t})}},3493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return et}});var a=n(9268),r=n(6006),s=n(5846),i=n.n(s),o=n(3241),l=n.n(o),c=n(6394),d=n.n(c),u={src:"/_next/static/media/Logo.a87c7267.svg",height:13,width:128,blurWidth:0,blurHeight:0},_={src:"/_next/static/media/phone.34a20b0f.svg",height:24,width:24,blurWidth:0,blurHeight:0},h={src:"/_next/static/media/arrowDropDown.24ae71f9.svg",height:20,width:20,blurWidth:0,blurHeight:0},m=n(163),f=n.n(m),v=n(9979),b=n(5995),x=n.n(b);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},j=function(e){var t,n=e.children,a=e.onClickAway,s=e.focusEvent,i=void 0===s?"focusin":s,o=e.mouseEvent,l=void 0===o?"click":o,c=e.touchEvent,d=void 0===c?"touchend":c,u=(0,r.useRef)(null),_=(0,r.useRef)(null),h=(0,r.useRef)(!1);(0,r.useEffect)(function(){return setTimeout(function(){h.current=!0},0),function(){h.current=!1}},[]);var m=function(e){return function(t){_.current=t.target;var a=null==n?void 0:n.props[e];a&&a(t)}};(0,r.useEffect)(function(){var e,t,n=null!==(e=null===(t=u.current)||void 0===t?void 0:t.ownerDocument)&&void 0!==e?e:document,r=function(e){h.current&&(u.current&&u.current.contains(e.target)||_.current===e.target||!n.contains(e.target)||a(e))};return n.addEventListener(l,r),n.addEventListener(d,r),n.addEventListener(i,r),function(){n.removeEventListener(l,r),n.removeEventListener(d,r),n.removeEventListener(i,r)}},[i,l,a,d]);var f=g[l],v=g[d],b=g[i];return r.Children.only((0,r.cloneElement)(n,(p(t={ref:function(e){u.current=e;var t=n.ref;"function"==typeof t?t(e):t&&(t.current=e)}},b,m(b)),p(t,f,m(f)),p(t,v,m(v)),t)))};j.displayName="ClickAwayListener";var N=n(337),y=n(9700),C=n(353),k=n(5695),w=n(9483),B=e=>{let{onChange:t}=e,n=C.Ry().shape({name:C.Z_().required("Name is required"),phoneNumber:C.Rx().required("Phone Number is required"),call:C.O7().required("Checkbox is required")}),{register:r,handleSubmit:s,formState:{errors:i},reset:o}=(0,y.cI)({resolver:(0,k.X)(n)});return(0,a.jsxs)("form",{onSubmit:s(e=>{console.log({data:e}),o(),t()}),children:[(0,a.jsx)("input",{className:x().modalInput,...r("name"),placeholder:"Имя",type:"name",required:!0}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{className:x().modalInput,...r("phoneNumber"),placeholder:"Номер",type:"number",inputMode:"numeric",pattern:"[0-9]",required:!0}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:x().label,children:[(0,a.jsx)("input",{...r("call"),placeholder:"call",required:!0,className:x().checkInput,type:"checkbox"}),(0,a.jsx)(w.Z,{type:"modal",text:"Нажимая кнопку “Заказать звонок”, я даю согласие на обработку моих данных"})]}),(0,a.jsx)("button",{className:x().btn,type:"submit",children:"Заказать звонок"})]})},A=function(e){let{onClick:t}=e,n=()=>{t(!1),document.body.style.overflow=""};return(0,a.jsx)("div",{className:x().modalBackground,children:(0,a.jsx)(j,{onClickAway:n,children:(0,a.jsxs)("div",{className:x().modalContainer,children:[(0,a.jsx)(N.Z,{type:"typography",classNames:x().titleModal,text:"Заказать звонок"}),(0,a.jsx)(B,{onChange:n})]})})})},P=function(){let[e,t]=(0,r.useState)(!1);return(0,a.jsxs)("div",{className:f().Phone,children:[(0,a.jsxs)(v.default,{type:"head",onClick:()=>{t(!0),document.body.style.overflow="hidden"},children:[(0,a.jsx)(d(),{src:_,alt:"phone-icon"})," +373 69 00 00 00",(0,a.jsx)(d(),{src:h,alt:"dd-icon"})]}),e&&(0,a.jsx)(A,{onClick:t})]})},I=n(5966),T=n.n(I),H=()=>(0,a.jsxs)("div",{className:T().Languages,children:[(0,a.jsx)("input",{type:"radio",id:"Lang1",name:"Lang",value:"Ro"}),(0,a.jsx)("label",{htmlFor:"Lang1",children:"Ro"}),(0,a.jsx)("input",{type:"radio",id:"Lang2",name:"Lang",value:"Ру"}),(0,a.jsx)("label",{htmlFor:"Lang2",children:"Ру"}),(0,a.jsx)("input",{type:"radio",id:"Lang3",name:"Lang",value:"En"}),(0,a.jsx)("label",{htmlFor:"Lang3",children:"En"})]}),E=()=>{let[e,t]=(0,r.useState)("private"),n=e=>{t(e)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.default,{active:"private"===e,onClick:()=>n("private"),type:"head",children:"Частный клиент"}),(0,a.jsx)(v.default,{active:"business"===e,onClick:()=>n("business"),type:"head",children:"Бизнес клиент"})]})},L=()=>(0,a.jsxs)("div",{className:l().Navbar,children:[(0,a.jsxs)("div",{className:l().options,children:[(0,a.jsx)(i(),{className:l().logo,href:"/",children:(0,a.jsx)(d(),{src:u,width:200,height:50,alt:"Transelit-Logo"})}),(0,a.jsx)(E,{})]}),(0,a.jsxs)("div",{className:l().info,children:[(0,a.jsx)(P,{}),(0,a.jsx)(H,{})]})]}),Z=n(2535),S=n(9740),F=n.n(S),R=n(2373),M=n.n(R),W={src:"/_next/static/media/about.a43fd907.svg",height:24,width:24,blurWidth:0,blurHeight:0},q={src:"/_next/static/media/insurance.eefb1517.svg",height:24,width:24,blurWidth:0,blurHeight:0},O={src:"/_next/static/media/local_fire.a4d49eb1.svg",height:24,width:24,blurWidth:0,blurHeight:0},D={src:"/_next/static/media/phone.d13e3e7c.svg",height:24,width:24,blurWidth:0,blurHeight:0},z={src:"/_next/static/media/reimbursement.9ee009c4.svg",height:24,width:24,blurWidth:0,blurHeight:0},K=n(90),Q=e=>{let{handleRouteChange:t}=e,[n,s]=(0,r.useState)("Insurance"),o=(0,K.Z)(),l=e=>{s(e)};return(0,a.jsx)("div",{className:M().SecondNav,children:(0,a.jsxs)("div",{className:M().options,children:[(0,a.jsxs)("div",{className:M().secondNavs,children:[(0,a.jsx)(i(),{onClick:t,href:"/",children:(0,a.jsxs)(v.default,{active:"Insurance"===n,onClick:()=>l("Insurance"),type:"head",children:[(0,a.jsx)(d(),{src:q,alt:"insurance"}),"Страхование"]})}),(0,a.jsx)(i(),{onClick:t,href:"/compensate",children:(0,a.jsxs)(v.default,{active:"Refunds"===n,onClick:()=>l("Refunds"),type:"head",children:[(0,a.jsx)(d(),{src:z,alt:"reimbursement"}),"Возмещения"]})}),(0,a.jsx)(i(),{onClick:t,href:"#about-us",scroll:!0,children:(0,a.jsxs)(v.default,{type:"head",children:[(0,a.jsx)(d(),{src:W,alt:"about"}),"О нас"]})}),(0,a.jsx)(i(),{onClick:t,href:"#contact",children:(0,a.jsxs)(v.default,{type:"head",children:[(0,a.jsx)(d(),{src:D,alt:"phone"}),"Контакты"]})})]}),!o&&(0,a.jsxs)(i(),{className:M().toForm,href:"/reimbursement",children:[(0,a.jsx)(d(),{src:O,alt:"local_fire"}),"Страховой случай"]})]})})},U={src:"/_next/static/media/menu.b8f0af3a.svg",height:24,width:24,blurWidth:0,blurHeight:0},V=n(4851),J=n.n(V),Y=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(E,{})}),G=n(4575),X=n.n(G),$=()=>(0,a.jsxs)("div",{className:X().InfoNav,children:[(0,a.jsx)(P,{}),(0,a.jsx)(H,{})]}),ee=()=>{let[e,t]=(0,r.useState)(!1),n=e=>{document.body.style.overflow="".concat(e?"":"hidden"),t(!e)},s=()=>{document.body.style.overflow="",t(!1)};return(0,a.jsxs)("div",{className:J().BurgerHead,children:[(0,a.jsxs)("div",{className:J().Burger,children:[(0,a.jsx)(i(),{onClick:s,className:J().logo,href:"/",children:(0,a.jsx)(d(),{src:u,width:128,height:50,alt:"Transelit-Logo"})}),(0,a.jsxs)("div",{className:J().menu,children:[(0,a.jsxs)(i(),{onClick:s,className:M().toForm,href:"/reimbursement",children:[(0,a.jsx)(d(),{src:O,alt:"local_fire"}),"Страховой случай"]}),(0,a.jsx)(v.default,{onClick:()=>{n(e)},classNames:J().btn,children:(0,a.jsx)(d(),{src:U,alt:"burgerIcon"})})]})]}),(0,a.jsxs)("div",{className:J().fullPageMenu,style:{display:"".concat(e?"block":"none")},children:[(0,a.jsx)("div",{className:J().firstHead,children:(0,a.jsx)(Y,{})}),(0,a.jsx)(Q,{handleRouteChange:s}),(0,a.jsx)("div",{className:J().lastHead,children:(0,a.jsx)($,{})})]})]})},et=function(){let e=(0,K.Z)();return(0,a.jsxs)("header",{children:[(0,a.jsx)("div",{className:F().Header,children:(0,a.jsxs)(Z.Z,{classNames:F().wrapper,children:[!e&&(0,a.jsx)(L,{}),e&&(0,a.jsx)(ee,{})]})}),(0,a.jsx)(Z.Z,{children:!e&&(0,a.jsx)(Q,{})})]})}},90:function(e,t,n){"use strict";var a=n(6006);t.Z=function(){let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{t(function(){{let e=window.innerWidth;return e<890}}())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e}},9483:function(e,t,n){"use strict";var a=n(9268);n(6006);var r=n(5588),s=n.n(r),i=n(9791);t.Z=e=>{let{text:t,classNames:n,type:r="Content_text"}=e,o=(0,i.Z)({[s().Content_text]:"Content_text"===r,[s().Card_text]:"Card_text"===r,[s().modalt]:"modal"===r});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{className:(0,i.Z)(o,n),children:t||""})})}},3778:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(9268),r=n(6006),s=n(9791),i=n(4601),o=n.n(i),l=e=>{let{value:t,onTabSelect:n,checked:r,tabStyles:i}=e,l=(0,s.Z)({[null===o()||void 0===o()?void 0:o().active]:!i,[null==i?void 0:i.active]:i}),c=(0,s.Z)({[null===o()||void 0===o()?void 0:o().tabHeader]:!i,[null==i?void 0:i.tabHeader]:i});return(0,a.jsx)("div",{onClick:n,className:(0,s.Z)(r?l:c),children:t})},c=n(337),d=e=>{var t,n;let{tabsData:i,defaultTab:d,tabStyles:u,withTitle:_,scrollId:h,noDivider:m=!0}=e,[f,v]=(0,r.useState)(0),b=(0,s.Z)({[o().TabsBox]:!u,[null==u?void 0:u.TabsBox]:u}),x=(0,s.Z)({[o().Tabs]:!u,[null==u?void 0:u.Tabs]:u}),p=(0,s.Z)({[o().tabPanel]:!u,[null==u?void 0:u.tabPanel]:u}),g=e=>{v(e)};return(0,a.jsxs)("div",{className:b,children:[_&&(0,a.jsx)(c.Z,{classNames:o().top,text:null===(t=i.tabs[f])||void 0===t?void 0:t.name}),(0,a.jsx)("div",{id:h,className:x,children:i.tabs.map((e,t)=>(0,a.jsx)(l,{tabStyles:u,value:e.name,onTabSelect:()=>g(t),checked:f===t},e.id))}),m&&(0,a.jsx)("div",{className:o().divider}),(0,a.jsx)("div",{className:p,children:null===(n=i.tabPanel[f])||void 0===n?void 0:n.content})]})}},337:function(e,t,n){"use strict";var a=n(9268);n(6006);var r=n(8227),s=n.n(r),i=n(9791);t.Z=e=>{let{text:t,type:n="blue",classNames:r}=e,o=(0,i.Z)({[s().Blue]:"blue"===n,[s().Black]:"black"===n,[s().Card_Type]:"Card_Type"===n,[s().typography]:"typography"===n});return(0,a.jsx)("h3",{className:(0,i.Z)(s().Title,o,r),children:t||""})}},7977:function(){},1844:function(e){e.exports={Button:"Button_Button__AqDze",head:"Button_head__ToCVv",activeBtn:"Button_activeBtn__Jv9Vo"}},2949:function(e){e.exports={Container:"Container_Container__G2fbY"}},6626:function(e){e.exports={Footer:"Footer_Footer__0JIWi",top:"Footer_top__qEiyn"}},6150:function(e){e.exports={Contacts:"Contacts_Contacts__b5pq_",title:"Contacts_title__Ip83C",social:"Contacts_social__3ASEk"}},5685:function(e){e.exports={Copyright:"Copyright_Copyright__wybmY",title:"Copyright_title__yTmN1"}},7059:function(e){e.exports={Information:"Information_Information__4VpQI",content:"Information_content__8UR8Z",name:"Information_name__xPng_",info:"Information_info__s5rbD",infoImg:"Information_infoImg__L_X_q",infoContent:"Information_infoContent__Py3yw"}},9740:function(e){e.exports={Header:"Header_Header__ATyIU",wrapper:"Header_wrapper__7eLx6"}},4851:function(e){e.exports={BurgerHead:"Burger_BurgerHead__Hi1RH",Burger:"Burger_Burger__zRoYG",logo:"Burger_logo__f_QPN",menu:"Burger_menu__bsQ9C",firstHead:"Burger_firstHead__yFfm0",fullPageMenu:"Burger_fullPageMenu__3z_FL",btn:"Burger_btn__htvtP",lastHead:"Burger_lastHead__N0NaA"}},5966:function(e){e.exports={Languages:"Languages_Languages__OEIT4"}},5995:function(e){e.exports={modalBackground:"Modal_modalBackground__tq1OD",modalContainer:"Modal_modalContainer__WDKEl",titleModal:"Modal_titleModal__Ya4ke",modalInput:"Modal_modalInput__4o7pN",checkInput:"Modal_checkInput__loblZ",label:"Modal_label__9OMJj",btn:"Modal_btn__mhs6a"}},3241:function(e){e.exports={Navbar:"Navbar_Navbar___Qh_z",info:"Navbar_info__fHIO6",pages:"Navbar_pages__uWWMv",logo:"Navbar_logo__pG_ec",options:"Navbar_options__UnOnT",list:"Navbar_list__aD538"}},4575:function(e){e.exports={InfoNav:"InfoNav_InfoNav__y80I6"}},2373:function(e){e.exports={SecondNav:"SecondNav_SecondNav__KiOlK",options:"SecondNav_options__4RA2h",secondNavs:"SecondNav_secondNavs__yQyZC",toForm:"SecondNav_toForm__D7dLX"}},163:function(e){e.exports={Phone:"Phone_Phone__pTaAD"}},5588:function(e){e.exports={Content_text:"Paragraph_Content_text__SzK4J",Card_text:"Paragraph_Card_text__XgE1p",icon:"Paragraph_icon__1Awqd",modal:"Paragraph_modal__zjo_N"}},4601:function(e){e.exports={TabsBox:"Tabs_TabsBox__9VH_e",Tabs:"Tabs_Tabs__89JNl",tabHeader:"Tabs_tabHeader__EaZcC",active:"Tabs_active__79JhN",tabPanel:"Tabs_tabPanel__NfAoG",wrap:"Tabs_wrap__HEUBl",top:"Tabs_top__LVO1j"}},8227:function(e){e.exports={Title:"Title_Title__A7dSE",Black:"Title_Black__DnZsS",Blue:"Title_Blue__aO2It",Card_Type:"Title_Card_Type__kByz_",typography:"Title_typography__9y9uR"}},9404:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/facebook.fbe30e08.svg",height:32,width:32,blurWidth:0,blurHeight:0}},5487:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/instagram.b74b5fe0.svg",height:32,width:32,blurWidth:0,blurHeight:0}},6759:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/whatsapp.87f50f5a.svg",height:32,width:32,blurWidth:0,blurHeight:0}},3968:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/map.3d4cd7b4.png",height:284,width:380,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAf0lEQVR42hXNSRLCIBAAQP7/LO/ePLjEVMoKBAYYZmFAb1b6A+18be8Ez+i/BsOokkBcab+4QlxYGqN2EpsZyX8e6VidjSHa1QaVigU7bl0y288FbKydbbY98OvKmKgpI7mbjwFpzglpkXJo6xIzZ3RwHgox8HLnTMKiY8Kx/QEBCIUxa1wIgQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},86:function(e){e.exports={style:{fontFamily:"'__Manrope_9fa6e6', '__Manrope_Fallback_9fa6e6'",fontStyle:"normal"},className:"__className_9fa6e6",variable:"__variable_9fa6e6"}},6784:function(e){e.exports={style:{fontFamily:"'__Roboto_e320fa', '__Roboto_Fallback_e320fa'",fontStyle:"normal"},className:"__className_e320fa",variable:"__variable_e320fa"}}},function(e){e.O(0,[904,136,253,769,744],function(){return e(e.s=1308)}),_N_E=e.O()}]);