(this.webpackJsonpagentsblog=this.webpackJsonpagentsblog||[]).push([[3],{105:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(18),c=t.n(o);t(84),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(12),u=t(42),l=t(4),s=t(5),m=t(55),d=t(11),b=t(25),f=t(110),g=t(109),p=t(13);function h(){var e=Object(l.a)(["\n  mutation logUserOut {\n    logUserOut @client\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(l.a)(["\n  mutation logUserIn($token: String!) {\n    logUserIn(token: $token) @client\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(l.a)(["\n  mutation confirmSecret($secret: String!, $email: String!) {\n    confirmSecret(secret: $secret, email: $email)\n  }\n"]);return x=function(){return e},e}function O(){var e=Object(l.a)(["\n  mutation createAccount($username: String!, $email: String!) {\n    createAccount(username: $username, email: $email)\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(l.a)(["\n  mutation requestSecret($email: String!) {\n    requestSecret(email: $email)\n  }\n"]);return j=function(){return e},e}var E=Object(p.b)(j()),w=Object(p.b)(O()),k=Object(p.b)(x()),y=Object(p.b)(v()),S=Object(p.b)(h()),C=t(66),z=t.n(C),A=t(67),I=t(68),D=t(77),B=t(75);function F(){var e=Object(l.a)(["\n  width: 100%;\n  height: 20rem;\n  font-size: 3rem;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return F=function(){return e},e}var L=function(e){Object(D.a)(t,e);var n=Object(B.a)(t);function t(e){var r;return Object(A.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(I.a)(t,[{key:"componentDidCatch",value:function(e,n){console.error(e),console.error(n)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(M,null,"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component),M=s.c.div(F()),P=L;function T(){var e=Object(l.a)(["\n  width: 100%;\n  height: 20rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return T=function(){return e},e}function q(){var e=Object(l.a)(["\n  {\n    checkToken\n  }\n"]);return q=function(){return e},e}var G=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,255))})),U=Object(r.lazy)((function(){return t.e(12).then(t.bind(null,250))})),J=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(9)]).then(t.bind(null,256))})),V=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,258))})),W=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(10)]).then(t.bind(null,257))})),R=Object(r.lazy)((function(){return t.e(14).then(t.bind(null,251))})),N=Object(r.lazy)((function(){return t.e(13).then(t.bind(null,252))})),Z=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,253))})),X=Object(r.lazy)((function(){return Promise.all([t.e(1),t.e(8)]).then(t.bind(null,254))})),H=Object(p.b)(q()),K=[{path:"/",component:G},{path:"/recent",component:G},{path:"/auth",component:U},{path:"/@:username",component:V},{path:"/@:username/:posturl",component:J},{path:"/search",component:Z},{path:"/tags/:tagname",component:X}],Q=[{path:"/write",component:W},{path:"/setting",component:R}],Y=s.c.div(T()),$=function(e){var n=e.isLoggedIn,t=Object(f.a)(H).data,o=Object(g.a)(S),c=Object(d.a)(o,1)[0];n&&t&&!1===t.checkToken&&c();var i=Object(b.h)();return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[i]),a.a.createElement(P,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(Y,null,a.a.createElement(z.a,{size:15,color:"#36D7B7"}))},a.a.createElement(b.d,null,K.map((function(e,n){return a.a.createElement(b.b,Object.assign({exact:!0},e,{key:n}))})),Q.map((function(e,n){return a.a.createElement(b.b,Object.assign({exact:!0},e,{key:n,onUpdate:function(){return window.scrollTo(0,0)}}))})),a.a.createElement(b.b,{path:"/",component:N}),a.a.createElement(b.a,{from:"*",to:"/"}))))},_=t(16);t(103);function ee(){var e=Object(l.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }  \n\n  body {\n    background-color: rgba(33, 37, 41, 0.008);\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n\n  *:focus {\n    outline: none;\n  }\n"]);return ee=function(){return e},e}var ne=Object(s.b)(ee());function te(){var e=Object(l.a)(["\n  {\n    me {\n      id\n      avatar\n      bio\n      blogname\n      email\n      posts {\n        id\n        url\n        title\n        description\n        thumbnail\n        likeCount\n        createdAt\n        commentCount\n      }\n      username\n    }\n  }\n"]);return te=function(){return e},e}var re="me/SET",ae={id:"",avatar:"",bio:"",blogname:"",email:"",posts:[],username:""};var oe=Object(p.b)(te()),ce=t(29),ie=t(73),ue=t.n(ie);function le(){var e=Object(l.a)(["\n  background: none;\n  border: none;\n"]);return le=function(){return e},e}var se=s.c.button(le()),me=function(e){return a.a.createElement(se,e,a.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"24px",width:"24px",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},de=function(e){var n=e.children,t=e.elementId,a=Object(r.useMemo)((function(){return document.getElementById(t)}),[t]);return null===a?null:Object(o.createPortal)(n,a)};function be(){var e=Object(l.a)(["\n  @media (max-width: 768px) {\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n  }\n  width: 600px;\n  height: fit-content;\n\n  box-sizing: border-box;\n  position: relative;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);\n  background-color: #fff;\n  border-radius: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 auto;\n  padding: 30px 20px;\n"]);return be=function(){return e},e}function fe(){var e=Object(l.a)(["\n  box-sizing: border-box;\n  display: ",";\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n  outline: 0;\n"]);return fe=function(){return e},e}function ge(){var e=Object(l.a)(["\n  background-color: rgba(255, 255, 255, 0.6);\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n"]);return ge=function(){return e},e}function pe(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]);return pe=function(){return e},e}var he=s.c.div(pe()),ve=s.c.div(ge(),(function(e){return e.visible?"flex":"none"})),xe=s.c.div(fe(),(function(e){return e.visible?"block":"none"})),Oe=s.c.div(be()),je=function(e){var n=e.className,t=e.onClose,r=e.maskClosable,o=e.closable,c=e.visible,i=e.children;return a.a.createElement(de,{elementId:"modal-root"},a.a.createElement(ve,{visible:!0}),a.a.createElement(xe,{className:n,onClick:r?function(e){e.target===e.currentTarget&&t(e)}:void 0,visible:c},a.a.createElement(Oe,{className:"modal-inner"},a.a.createElement(he,null,o&&a.a.createElement(me,{className:"modal-close",onClick:function(e){t&&t(e)}})),i)))},Ee=t(48),we=t.n(Ee),ke=t(58),ye=t(30),Se=t(28),Ce=t(49);function ze(){var e=Object(l.a)(["\n  @media (max-width: 768px) {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n  max-width: 450px;\n  padding: 40px;\n  padding-bottom: 30px;\n  margin-bottom: 15px;\n  form {\n    width: 100%;\n    input {\n      width: 100%;\n      &:not(:last-child) {\n        margin-bottom: 7px;\n      }\n    }\n    button {\n      width: 100%;\n      margin-top: 10px;\n    }\n  }\n"]);return ze=function(){return e},e}function Ae(){var e=Object(l.a)(["\n  color: ",";\n  font-weight: bold;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return Ae=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  text-align: center;\n  padding: 10px 0px;\n"]);return Ie=function(){return e},e}function De(){var e=Object(l.a)(["\n  width: 100%;\n"]);return De=function(){return e},e}function Be(){var e=Object(l.a)(["\n  font-size: 16px;\n  margin-bottom: 18px;\n  display: block;\n"]);return Be=function(){return e},e}function Fe(){var e=Object(l.a)(["\n  font-size: 20px;\n  margin-bottom: 18px;\n  display: block;\n"]);return Fe=function(){return e},e}function Le(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return Le=function(){return e},e}var Me=s.c.div(Le()),Pe=Object(s.c)(Ce.a)(Fe()),Te=Object(s.c)(Ce.a)(Be()),qe=s.c.div(De()),Ge=Object(s.c)(qe)(Ie()),Ue=Object(s.c)(i.b)(Ae(),(function(e){return e.theme.greenColor})),Je=Object(s.c)(qe)(ze()),Ve=function(e){var n=e.action,t=e.setAction,r=e.username,o=e.email,c=e.secret,i=e.onSummit,u=e.btnDisable;return a.a.createElement(Me,null,a.a.createElement(Je,null,"logIn"===n&&a.a.createElement("form",null,a.a.createElement(Pe,{text:"\ub85c\uadf8\uc778"}),a.a.createElement(Te,{text:"\uc774\uba54\uc77c\ub85c \ub85c\uadf8\uc778",color:"grey"}),a.a.createElement(ye.a,Object.assign({placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694."},o,{type:"email"})),a.a.createElement(Se.a,{text:"\ub85c\uadf8\uc778",onClick:i,disabled:u})),"signUp"===n&&a.a.createElement("form",null,a.a.createElement(Pe,{text:"\ud68c\uc6d0\uac00\uc785"}),a.a.createElement(Te,{text:"\uc774\uba54\uc77c\ub85c \ud68c\uc6d0\uac00\uc785",color:"grey"}),a.a.createElement(ye.a,Object.assign({placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694."},r)),a.a.createElement(ye.a,Object.assign({placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694."},o,{type:"email"})),a.a.createElement(Se.a,{text:"\ud68c\uc6d0\uac00\uc785",onClick:i,disabled:u})),"confirm"===n&&a.a.createElement("form",null,a.a.createElement(ye.a,Object.assign({placeholder:"\uc778\uc99d\ucf54\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694.",required:!0},c)),a.a.createElement(Se.a,{text:"\ud655\uc778",onClick:i,disabled:u}))),"confirm"!==n&&a.a.createElement(Ge,null,"logIn"===n?a.a.createElement(a.a.Fragment,null,"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uc2e0\uac00\uc694?","  ",a.a.createElement(Ue,{onClick:function(){return t("signUp")},to:""},"\ud68c\uc6d0\uac00\uc785")):a.a.createElement(a.a.Fragment,null,"\uacc4\uc815\uc774 \uc774\ubbf8 \uc788\uc73c\uc2e0\uac00\uc694?","  ",a.a.createElement(Ue,{onClick:function(){return t("logIn")},to:""},"\ub85c\uadf8\uc778"))))},We=function(e){var n=Object(r.useState)(""),t=Object(d.a)(n,2),a=t[0],o=t[1];return{value:a,onChange:function(e){o(e.target.value)}}},Re=function(e){var n=e.closeModal,t=Object(r.useState)("logIn"),o=Object(d.a)(t,2),c=o[0],i=o[1],u=Object(r.useState)(!1),l=Object(d.a)(u,2),s=l[0],m=l[1],b=We(),f=We(),p=We(),h=Object(g.a)(E,{variables:{email:p.value}}),v=Object(d.a)(h,1)[0],x=Object(g.a)(w,{variables:{email:p.value,username:b.value}}),O=Object(d.a)(x,1)[0],j=Object(g.a)(k,{variables:{email:p.value,secret:f.value}}),S=Object(d.a)(j,1)[0],C=Object(g.a)(y),z=Object(d.a)(C,1)[0],A=function(){var e=Object(ke.a)(we.a.mark((function e(t){var r,a,o,u;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m(!0),"logIn"!==c){e.next=20;break}if(""!==p.value){e.next=7;break}_.b.error("\uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."),e.next=18;break;case 7:return e.prev=7,e.next=10,v();case 10:r=e.sent,r.data.requestSecret?(_.b.success("\uba54\uc77c\ud568\uc5d0\uc11c \ub85c\uadf8\uc778 \ucf54\ub4dc\ub97c \ud655\uc778\ud558\uc138\uc694!"),i("confirm")):_.b.error("\uacc4\uc815\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud68c\uc6d0\uac00\uc785\uc744 \ud574\uc8fc\uc138\uc694."),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),_.b.error("\uc694\uccad\uc744 \uc644\ub8cc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 18:e.next=59;break;case 20:if("signUp"!==c){e.next=38;break}if(""!==p.value&&""!==b.value){e.next=25;break}_.b.error("\ubaa8\ub4e0 \ube48\uce78\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694."),e.next=36;break;case 25:return e.prev=25,e.next=28,O();case 28:a=e.sent,a.data.createAccount?(_.b.success("\uacc4\uc815\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc0dd\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4! \uc774\uc81c \ub85c\uadf8\uc778\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),setTimeout((function(){return i("logIn")}),1200)):_.b.error("\uacc4\uc815\uc744 \uc0dd\uc131\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4!"),e.next=36;break;case 33:e.prev=33,e.t1=e.catch(25),_.b.error(e.t1.toString().split(":")[2]);case 36:e.next=59;break;case 38:if("confirm"!==c){e.next=59;break}if(""!==f.value){e.next=43;break}_.b.error("\ub85c\uadf8\uc778 \uc2dc\ud06c\ub9bf\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.next=59;break;case 43:return e.prev=43,e.next=46,S();case 46:if(o=e.sent,u=o.data.confirmSecret){e.next=52;break}throw Error();case 52:z({variables:{token:u}});case 53:n(),e.next=59;break;case 56:e.prev=56,e.t2=e.catch(43),_.b.error("\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."+e.t2);case 59:m(!1);case 60:case"end":return e.stop()}}),e,null,[[7,15],[25,33],[43,56]])})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(Ve,{setAction:i,action:c,username:b,email:p,btnDisable:s,secret:f,onSummit:A})},Ne=t(46),Ze=t(54);function Xe(){var e=Object(l.a)(["\n  color: rgb(33, 37, 41);\n  line-height: 1.5;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 0.75rem 1rem;\n  &:hover {\n    background: rgb(248, 249, 250);\n  }\n"]);return Xe=function(){return e},e}function He(){var e=Object(l.a)(["\n  position: relative;\n  width: 12rem;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;\n  background: white;\n"]);return He=function(){return e},e}function Ke(){var e=Object(l.a)(["\n  position: absolute;\n  top: 100%;\n  right: 0px;\n  margin-top: 1rem;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(l.a)(["\n  position: relative;\n  z-index: 10;\n"]);return Qe=function(){return e},e}var Ye=a.a.forwardRef((function(e,n){var t=e.items,r=e.isVisible;return a.a.createElement($e,{style:{display:r?"block":"none"},ref:n},a.a.createElement(_e,null,a.a.createElement(en,null,t.map((function(e,n){return e.callback?a.a.createElement(nn,{onClick:e.callback},e.name):a.a.createElement(i.b,{to:e.to,key:n},a.a.createElement(nn,null,e.name))})))))})),$e=s.c.div(Qe()),_e=s.c.div(Ke()),en=s.c.div(He()),nn=s.c.div(Xe()),tn=Ye;function rn(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 40px;\n"]);return rn=function(){return e},e}function an(){var e=Object(l.a)(["\n  width: 40px;\n  height: 40px;\n  margin-left: 0.5rem;\n"]);return an=function(){return e},e}function on(){var e=Object(l.a)(["\n  display: flex;\n  cursor: pointer;\n"]);return on=function(){return e},e}function cn(){var e=Object(l.a)(["\n  @media (max-width: 1024px) {\n    display: none;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 2rem;\n  padding: 0px 15px;\n  align-self: center;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 30px;\n  background-color: ",";\n  text-decoration: none;\n\n  transition: background-color 0.08s ease-out 0s;\n  &:hover {\n    background-color: ",";\n  }\n"]);return cn=function(){return e},e}function un(){var e=Object(l.a)(["\n  width: auto;\n  height: 2rem;\n  padding: 0px 15px;\n  align-self: center;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 30px;\n  background-color: ",";\n  text-decoration: none;\n\n  transition: background-color 0.08s ease-out 0s;\n  &:hover {\n    background-color: ",";\n  }\n"]);return un=function(){return e},e}function ln(){var e=Object(l.a)(["\n  align-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 0.5rem;\n  background-color: inherit;\n  width: 37px;\n  height: 37px;\n  border-radius: 10rem;\n  &:hover {\n    background-color: rgb(240, 240, 240);\n  }\n"]);return ln=function(){return e},e}function sn(){var e=Object(l.a)([""]);return sn=function(){return e},e}function mn(){var e=Object(l.a)([""]);return mn=function(){return e},e}function dn(){var e=Object(l.a)(["\n  display: flex;\n"]);return dn=function(){return e},e}function bn(){var e=Object(l.a)(["\n  ","\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  padding-bottom: 0;\n"]);return bn=function(){return e},e}var fn=s.c.header(bn(),(function(e){return e.theme.responsiveContainer})),gn=s.c.nav(dn()),pn=Object(s.c)(i.b)(mn()),hn=s.c.img(sn()),vn=Object(s.c)(i.b)(ln()),xn=Object(s.c)(Se.a)(un(),(function(e){return e.theme.deepDarkGreyColor}),(function(e){return e.theme.greyColor})),On=Object(s.c)(i.b)(cn(),(function(e){return e.theme.deepDarkGreyColor}),(function(e){return e.theme.greyColor})),jn=s.c.div(on()),En=Object(s.c)(Ze.a)(an()),wn=s.c.div(rn()),kn=function(e){var n=e.modalVisible,t=e.openModal,o=e.closeModal,c=e.isLoggedIn,i=e.isDropdown,u=e.setIsDropdown,l=e.username,s=e.localLogOutMutation;return Object(r.useEffect)((function(){var e=function(){return u(!1)};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}),[]),a.a.createElement(fn,null,a.a.createElement(pn,{to:"/"},a.a.createElement(hn,{src:ue.a,alt:"logo"})),a.a.createElement(gn,null,a.a.createElement(vn,{to:"/search"},a.a.createElement(Ne.a,{type:"search",size:20})),c?a.a.createElement(a.a.Fragment,null,a.a.createElement(On,{to:"/write"},"\uc0c8 \uae00 \uc791\uc131"),a.a.createElement(jn,{onClick:function(){return u(!0)}},a.a.createElement(En,{size:"md",url:""}),a.a.createElement(wn,null,a.a.createElement(Ne.a,{type:"down",size:9}))),a.a.createElement(tn,{items:[{name:"\ub0b4\ube14\ub85c\uadf8(".concat(l,")"),to:"/@".concat(l)},{name:"\uc124\uc815",to:"/setting"},{name:"\ub85c\uadf8\uc544\uc6c3",to:"",callback:s}],isVisible:i&&""!==l&&void 0!==l})):a.a.createElement(xn,{text:"\ub85c\uadf8\uc778",onClick:t})),n&&a.a.createElement(je,{visible:n,closable:!0,maskClosable:!1,onClose:o},a.a.createElement(Re,{closeModal:o})))},yn=a.a.memo((function(e){var n=e.isLoggedIn,t=Object(ce.c)((function(e){return e.me.username})),o=Object(b.g)(),c=Object(r.useState)(!1),i=Object(d.a)(c,2),u=i[0],l=i[1],s=Object(r.useState)(window.location.pathname),m=Object(d.a)(s,2),f=m[0],p=m[1],h=Object(r.useState)(!1),v=Object(d.a)(h,2),x=v[0],O=v[1],j=Object(g.a)(S),E=Object(d.a)(j,1)[0];Object(r.useEffect)((function(){var e=o.listen((function(e,n){p(e.pathname)}));return function(){return e()}}));return a.a.createElement(a.a.Fragment,null,"/write"!==f&&a.a.createElement(kn,{modalVisible:u,openModal:function(){l(!0)},closeModal:function(){l(!1)},isLoggedIn:n,isDropdown:x,setIsDropdown:O,username:t,localLogOutMutation:E}))}),(function(e,n){return e.isLoggedIn!==n.isLoggedIn}));function Sn(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Sn=function(){return e},e}function Cn(){var e=Object(l.a)(["\n  {\n    isLoggedIn @client\n  }\n"]);return Cn=function(){return e},e}var zn=Object(p.b)(Cn()),An=s.c.div(Sn()),In=function(){var e=Object(f.a)(zn).data.isLoggedIn,n=Object(f.a)(oe).data,t=Object(ce.b)();return n&&n.me&&t(function(e){return{type:re,payload:e}}(n.me)),a.a.createElement(s.a,{theme:m.a},a.a.createElement(ne,null),a.a.createElement(An,null,a.a.createElement(yn,{isLoggedIn:e}),a.a.createElement($,{isLoggedIn:e})),a.a.createElement(_.a,{position:"bottom-left",autoClose:3e3}))},Dn=t(62),Bn=t(27),Fn=t(21),Ln=[];var Mn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ln,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"todos/ADD_TODO":return e.concat(n.todo);case"todos/TOGGLE_TODO":return e.map((function(e){return e.id===n.id?Object(Fn.a)(Object(Fn.a)({},e),{},{done:!e.done}):e}));default:return e}},Pn="counter/SET_DIFF",Tn="counter/INCREASE",qn="counter/DECREASE",Gn={number:0,diff:1};var Un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Pn:return Object(Fn.a)(Object(Fn.a)({},e),{},{diff:n.diff});case Tn:return Object(Fn.a)(Object(Fn.a)({},e),{},{number:e.number+e.diff});case qn:return Object(Fn.a)(Object(Fn.a)({},e),{},{number:e.number-e.diff});default:return e}},Jn=Object(Bn.combineReducers)({me:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case re:return n.payload;case"me/CLEAR":return ae;default:return e}},counter:Un,todos:Mn}),Vn=t(74),Wn=function(){return Object(Bn.createStore)(Jn,Object(Vn.composeWithDevTools)())}(),Rn=function(){return a.a.createElement(u.a,{client:Dn.a},a.a.createElement(ce.a,{store:Wn},a.a.createElement(i.a,null,a.a.createElement(In,null))))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Rn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,n,t){"use strict";var r=t(4),a=t(0),o=t.n(a);function c(){var e=Object(r.a)(["\n  width: 380px;\n  border: 0px;\n  border-radius: ",";\n  color: white;\n  font-weight: 600;\n  font-size: 15px;\n  background-color: ",";\n  text-align: center;\n  padding: 10px 15px;\n  height: 40px;\n  cursor: pointer;\n"]);return c=function(){return e},e}var i=t(5).c.button(c(),(function(e){return e.theme.borderRadius}),(function(e){return e.disabled?e.theme.darkGreyColor:e.theme.greenColor}));n.a=function(e){var n=e.text,t=e.className,r=e.onClick,a=e.disabled;return o.a.createElement(i,{className:t,onClick:r,disabled:a},n)}},30:function(e,n,t){"use strict";var r=t(4),a=t(0),o=t.n(a);function c(){var e=Object(r.a)(["\n  width: 300px;\n  border: none;\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n  height: 40px;\n  font-size: 15px;\n  padding: 5px 15px;\n"]);return c=function(){return e},e}var i=t(5).c.input(c(),(function(e){return e.theme.boxBorder}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.bgColor}));n.a=function(e){var n=Object.assign({},e);return o.a.createElement(i,n)}},46:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0),a=t.n(r),o=function(e){var n=e.type,t=e.size,r=void 0===t?24:t,o=e.color,c={search:a.a.createElement("path",{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"}),trend:a.a.createElement("path",{d:"M5 20v2h-2v-2h2zm2-2h-6v6h6v-6zm6-1v5h-2v-5h2zm2-2h-6v9h6v-9zm6-2v9h-2v-9h2zm2-2h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z"}),time:a.a.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"}),back:a.a.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),redHeart:a.a.createElement("path",{fill:"currentColor",d:"M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"}),blackHeart:a.a.createElement("path",{fill:"currentColor",d:"M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"}),down:a.a.createElement("path",{d:"M12 21l-12-18h24z"})};return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:o},c[n])}},49:function(e,n,t){"use strict";var r=t(4),a=t(56),o=t(0),c=t.n(o);function i(){var e=Object(r.a)(["\n  font-weight: 600;\n  color: ",";\n"]);return i=function(){return e},e}var u=t(5).c.span(i(),(function(e){return e.color}));n.a=function(e){var n=e.text,t=Object(a.a)(e,["text"]);return c.a.createElement(u,t,n)}},54:function(e,n,t){"use strict";var r=t(4),a=t(0),o=t.n(a),c=t(5),i=t(12);function u(){var e=Object(r.a)(["\n    ","\n    background-image: url(",");\n    background-size: cover;\n    border-radius: 50%;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);\n"]);return u=function(){return e},e}var l=c.c.div(u(),(function(e){return s(e.size)}),(function(e){return e.url})),s=function(e){var n=0;return"sm"===e?n=30:"md"===e?n=48:"lg"===e&&(n=150),"\n          width: ".concat(n,"px;\n          height: ").concat(n,"px;\n          ")};n.a=function(e){var n=e.size,t=void 0===n?"md":n,r=e.url,a=e.className,c=e.link;return r||(r="http://noavatar.be/get/jklk/200"),c?o.a.createElement(i.b,{to:c},o.a.createElement(l,{size:t,url:r,className:a})):o.a.createElement(l,{size:t,url:r,className:a})}},55:function(e,n,t){"use strict";var r={bgColor:"rgba(33, 37, 41, 0.008)",homeBgColor:"rgba(33, 37, 41, 0.028)",maxWidth:"100%",blackColor:"#262626",deepDarkGreyColor:"rgb(33, 37, 41)",darkGreyColor:"#999",greyColor:"rgb(73, 80, 87)",lightGreyColor:"#c7c7c7",blueColor:"#3897f0",greenColor:"rgb(32, 201, 151)",redColor:"#ED4956",darkBlueColor:"#003569",boxBorder:"1px solid #e6e6e6",borderRadius:"4px",whiteBox:"border-radius:".concat("4px",";\n            border:").concat("1px solid #e6e6e6",";\n            background-color:white;\n  "),responsiveContainer:"\n  @media (max-width: 1919px) {\n    width: 1376px;\n  }\n  @media (max-width: 1440px) {\n    width: 1280px;\n  }\n  @media (max-width: 1312px) {\n    width: 912px;\n  }\n  @media (max-width: 944px) {\n    width: calc(100% - 2rem);\n  }\n  @media (max-width: 767px) {\n    width: calc(100% - 2rem);\n  }\n  width: 1728px;\n  margin-left: auto;\n  margin-right: auto;\n  "};n.a=r},62:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));var r=t(13),a={isLoggedIn:Boolean(localStorage.getItem("token"))||!1},o={Mutation:{logUserIn:function(e,n,t){var r=n.token;t.cache;return localStorage.setItem("token",r),window.location.reload(),null},logUserOut:function(e,n,t){t.cache;return localStorage.removeItem("token"),window.location.assign("/"),null}}},c="https://agent-blog.herokuapp.com";n.a=new r.a({uri:c,clientState:{defaults:a,resolvers:o},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},73:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAXCAYAAAA/SGz6AAAEwklEQVRoge1a3ZGiQBDusy4BLgQuBHniiQc2BA3BCwFD0BA0BAlBHnjiCUNYQlhD2Kve6/E+2h7UXXDZLb8qqmSGmenp7um/8Qc9MBpEcTIlotqgJ6+rcv5ZdP60GqM42RHRTF6PdVX+ui9ZXxdRnARE9NKxgYKfuirXX2WTE097Cr+DKE4Wd6JnULAAozh5lcc6sfcA83YlB1GjIaI1PKPAmSWJ4oQtSKCap19AB8aIIxFtga4pHMAZ87quytx11lXJ3y/pv0XKxrAny92kRhsrzp870PPtUFflEvcUxcmGiJxlZqXJx77na5WEzXRaV2VhTSLWJ1MWZyltQVdcE8XJSpiG1ovXWdZVeVDf8nwreV3LSV11jesIBqfsdjQ5es0B0Awxqewzg1jSYSs8OXrGZSAnEvq2wNd8ogawgoTyqk2lXtyNYQHvDJe0MtwWjgujOHlWBDowHbUonw8LpSAk4/ZiqkcH2Q/Gd6bgboXIrfbIaCG8DHWHWDUtp1DzVVsStCJ8Kg+ePrdIoCZsxHxOPRYJsfMoJI7dRHFSeE6B29hWfs+gfUH/A7+G2kFgBu3a1Pd9ygPDWjn0meFs1Psa+EDCZ+Z35D4wFNbJO9UHXisJaiJvYivugBcMDZeDQe6hrkokYqOIIOibASG8zpPqz0DDF+SP9J8cPUKnU4DTJjuCwaOOF+4IS0HfBbHkeNjYZTayX15j73jCLgncKR7ibV2Vp5hTMr8TDyfQMVWLuU2gNdEuBd+3qq/rlCCBKaSlr3Ly0Dr5MqtCKSz+PjOtn4SjSmkLoG/TU2kB95o7BaF/B6RQfEFeogy0rFqyREuCgw5g4nPo06cafVkr4GNiozg5euKSPmIG7Rp68e99w8huFuAeMuNw3QqvDAQFyA+/db+PqFjWPKgk6GpSjy9llxMak34E2wsC9q01SqW4BMOFB77M40qg4AfhyZuSSOR7bcFs5nEl77UOuS+1/sZogN+hxwJcCzxElpt9j+ttydLFJGhFDsqPrpVfS9W3VruvcmuN60pzh8RnpskouGtOfxetON7iJcoFFcrJIDBKDS1ZToxGPtlLfFS1NYWcG4WdSVbiFETXMBAY2S/4HgPzeJ4nipO9BLK9XQmIWXdMDR2994LUhvYX4gGL1rSjZtQKTN2dkNxT7TEZwSsANW7l5ofi2gkTSQunnsGO4EZpYUp29LySWGbXZeZkPgzomMBnld1cqrO8F2f0wtP3HVWgsrbnC1mFBtK6g7lOt8yS0raKnrLWyxUZjJNp6Oa3DvdE1TqajrK0r/o6txRLCPCaUikkXapTFAMUuJZDlcZvxPqKYtqfa+IVqXF0xXVna4mlmnt40Wr7CTHIWadCjmZSLfakizpMFGq8Z3NvMY+YuFaU7mFgAbRq5mFltUs5+bvfxprUh/IwP6I46RK+b2/mXOwBLP4Y3z6Jy9a1l7UvexKDoHnhvIYrwtFg/0yT+wS30FlV9YHxQl2kLs1/pt2oDJlob+60Vny7vp19YGSQIDfAeyTxCBi4Hj6sJIJQJuasRPc1PVQVHxgOqWRPVjb6dvXh+/viLSg6YgBWkPkHK4oPDIeuoLiQwLa/mETd7JJkSg8L8gVgBMZcK/unQET0FytFIy+55OG1AAAAAElFTkSuQmCC"},79:function(e,n,t){e.exports=t(105)},84:function(e,n,t){}},[[79,4,5]]]);
//# sourceMappingURL=main.0ccb8816.chunk.js.map