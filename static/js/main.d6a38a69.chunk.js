(this["webpackJsonpredux-github-viewer"]=this["webpackJsonpredux-github-viewer"]||[]).push([[0],{35:function(e,t,n){e.exports=n(57)},40:function(e,t,n){},41:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),o=(n(40),n(41),n(14)),u=n.n(o),l=n(17),d=n(5),s=n(15),p=n(34),f=[{id:"ore-gorira",title:"ore",detail:"meshi kuu",status:"banana",author:"umai",createdDate:"gorira",updatedDate:"gorira"},{id:"are-gorira",title:"are",detail:"meshi kuu",status:"banana",author:"umai",createdDate:"gorira",updatedDate:"gorira"},{id:"ure-gorira",title:"ure",detail:"meshi kuu",status:"banana",author:"umai",createdDate:"gorira",updatedDate:"gorira"}],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ISSUE":return[].concat(Object(p.a)(e),[t.issue]);case"DELETE_ISSUE":return e.filter((function(e){return e.id!==t.id}));case"EDIT_ISSUE":return e.map((function(e){return e.id===t.issue.id?t.issue:e}));default:return e}},x=Object(s.b)(m),E=n(3),h=n(1),b=n(8),g=n(4),v=n(2),w={SMALL:12,DEFAULT:14,MIDDLE:16,LARGE:21,HEADER:28},y="'Lato', sans-serif",O={DARK:"#586069",WHITE:"#fff"},k={PRIMARY:"rgb(66, 195, 96)",SECONDARY:"rgb(215, 58, 73)"},I={DARK:"#333",LIGHT:"#fafafa",BLUE:"#0266d6",LIGHTBLUE:"#f0f8ff"},j="rgb(225, 228, 232)",D="6px";function C(){var e=Object(h.a)(["\n  display: block;\n  margin: 1px;\n  padding: 8px 4px;\n  width: ",";\n  color: #000;\n  font-size: ","px;\n  font-family: ",";\n  border-bottom: 1px solid ",";\n"]);return C=function(){return e},e}var S=function(e){var t=e.text,n=e.width;return r.a.createElement(R,{width:n},t)},A=function(e){var t=e.onClick,n=e.checked,a=e.width;return r.a.createElement(R,{onClick:t,width:a},r.a.createElement("input",{type:"checkbox",checked:n}))},R=v.a.div(C(),(function(e){return e.width?e.width:"120px"}),w.DEFAULT,y,j);function L(){var e=Object(h.a)(["\n  display: block;\n  cursor: pointer;\n  min-width: 70px;\n  padding: 6px 16px;\n  margin: 6px 4px;\n  text-align: center;\n  font-family: ",";\n  font-size: ","px;\n  font-weight: 600;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  border-bottom: ",";\n"]);return L=function(){return e},e}var T=function(e){var t=e.text,n=e.onClick,a=e.type;return r.a.createElement(V,{onClick:n,type:a},t)},V=v.a.div(L(),y,w.DEFAULT,D,(function(e){return"primary"===e.type||"secondary"===e.type?"#fff":"#000"}),(function(e){return"primary"===e.type?k.PRIMARY:"secondary"===e.type?k.SECONDARY:null}),(function(e){return" primary"===e.type?"2px solid rgb(40, 167, 69)":"secondary"===e.type?"2px solid rgb(175, 28, 42)":null}));function U(){var e=Object(h.a)(["\n  padding: 4px;\n  margin: 4px;\n  text-decoration: none;\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: 600;\n"]);return U=function(){return e},e}function W(){var e=Object(h.a)(["\n  padding: 4px;\n  margin: 4px;\n  text-decoration: none;\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: 800;\n"]);return W=function(){return e},e}function M(){var e=Object(h.a)(["\n  padding: 4px 0px;\n  margin: 4px;\n  color: #000;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: 700;\n"]);return M=function(){return e},e}var z=function(e){var t=e.text;return r.a.createElement(H,null,t)},P=function(){return r.a.createElement(N,{href:""},"Github Viewer")},q=function(e){var t=e.text;return r.a.createElement(G,{href:""},t)},H=v.a.h2(M(),w.LARGE,y),N=v.a.a(W(),O.WHITE,w.HEADER,y),G=v.a.a(U(),O.WHITE,w.MIDDLE,y);function B(){var e=Object(h.a)(["\n  margin: 4px 16px;\n  padding: 8px;\n  color: #000;\n  width: 100%;\n  font-size: ","px;\n  font-family: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n"]);return B=function(){return e},e}var F=v.a.textarea(B(),w.DEFAULT,y,D,j),Y=function(e){var t=e.getTheValue,n=e.placeholder,i=e.text,c=Object(a.useState)(i),o=Object(g.a)(c,2),u=o[0],l=o[1];return r.a.createElement(F,{placeholder:n,id:"userInput",name:"userInput",value:u,onChange:function(e){var n=e.target.value;l(n),t(n)}})};function _(){var e=Object(h.a)(["\n  margin: 4px 16px;\n  padding: 8px;\n  color: #000;\n  width: 100%;\n  font-size: ","px;\n  font-family: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n"]);return _=function(){return e},e}var K=v.a.input(_(),w.DEFAULT,y,D,j),J=function(e){var t=e.getTheValue,n=e.placeholder,i=e.text,c=Object(a.useState)(i),o=Object(g.a)(c,2),u=o[0],l=o[1];return r.a.createElement(K,{placeholder:n,type:"text",name:"userInput",value:u,onChange:function(e){var n=e.target.value;l(n),t(n)}})};function $(){var e=Object(h.a)(["\n  display: ",";\n  margin: 8px;\n  padding: 0px;\n  width: 100%;\n  color: #000;\n  font-weight: ",";\n"]);return $=function(){return e},e}var Q={content:{display:"block",width:"600px",height:"60vh",padding:"50px",margin:"40vh auto",transform:"translate(-50%, -50%)"}},X={id:"",title:"",detail:"",status:"open",author:"",createdDate:"",updatedDate:""},Z=v.a.div($(),(function(e){return e.hide?"none":"flex"}),(function(e){return e.header?800:400})),ee=function(e){var t=e.handleSubmit,n=e.editIssue,i=e.isModalOpen,c=e.setIsModalOpen,o=Object(a.useState)(n||X),l=Object(g.a)(o,2),d=l[0],s=l[1],p=n?"Issue\u3092\u7de8\u96c6":"Issue\u3092\u8ffd\u52a0",f=n?"\u66f4\u65b0":"New",m="close"===d.status,x=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement(u.a,{isOpen:i,onRequestClose:x,style:Q},r.a.createElement(z,{text:p}),r.a.createElement(z,{text:"\u30bf\u30a4\u30c8\u30eb"}),r.a.createElement(J,{id:"title",getTheValue:function(e){var t=Object(b.a)({},d);t.title=e,s(t)},text:d.title,placeholder:"\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),r.a.createElement(z,{text:"\u8aac\u660e"}),r.a.createElement(Y,{id:"detail",getTheValue:function(e){var t=Object(b.a)({},d);t.detail=e,s(t)},text:d.detail,placeholder:"\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),r.a.createElement(Z,{hide:!n},"\u30b9\u30c6\u30fc\u30bf\u30b9",r.a.createElement("select",{name:"status",onChange:function(e){var t=e.target.value,n=Object(b.a)({},d);n.status=t,s(n)}},r.a.createElement("option",{value:"open"},"Open"),r.a.createElement("option",{value:"close",selected:m},"Close"))),r.a.createElement(Z,null,r.a.createElement(T,{onClick:function(){var e=Object(b.a)({},d);n||(e.status="go",e.author="gi",e.createdDate="uma",e.id=e.title+e.createdDate),e.updatedDate="\u4eca\u65e5",t(e),x()},text:f,type:"primary"}),r.a.createElement(T,{onClick:x,text:"\u9589\u3058\u308b"}))))};function te(){var e=Object(h.a)(["\n  position: relative;\n  padding: 0 16px;\n  margin: 16px;\n  overflow: scroll;\n  white-space: nowrap;\n  border: 1px solid ",";\n  border-radius: ",";\n  background: #fff;\n  ::after {\n    position: absolute;\n    height: calc(90% + 12px);\n    width: calc(80%);\n    top: 0px;\n    left: 0px;\n    background: ",";\n    border: 1px solid ",";\n    content: '';\n    z-index: -5;\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(h.a)(["\n  margin: 0;\n  padding: 3px;\n  min-width: 700px;\n  :hover {\n    background: ",";\n  }\n"]);return ne=function(){return e},e}function ae(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 98%;\n  color: #000;\n  font-weight: ",";\n  margin: 1px 0px;\n"]);return ae=function(){return e},e}var re=function(e){var t=e.issues,n=e.checkedIssue,i=e.researchWord,c=e.handleCheckIssue,o=e.uploadEditIssue,u=Object(a.useState)(),l=Object(g.a)(u,2),d=(l[0],l[1],Object(a.useState)(!1)),s=Object(g.a)(d,2),p=s[0],f=s[1],m=t.filter((function(e){return-1!==e.title.toLowerCase().indexOf(i)&&e})),x=m.map((function(e){var t=e.title,a=e.status,i=e.author,u=e.createdDate,l=e.updatedDate;return r.a.createElement(oe,null,r.a.createElement(A,{onClick:function(){c(e)},checked:n[e.id],width:"50px"}),r.a.createElement(ce,{key:t,onClick:function(){console.log(e),f(!0)}},r.a.createElement(S,{text:t,width:"50%"}),r.a.createElement(S,{text:a}),r.a.createElement(S,{text:i}),r.a.createElement(S,{text:u}),r.a.createElement(S,{text:l})),r.a.createElement(ee,{handleSubmit:o,isModalOpen:p,setIsModalOpen:f,type:"edit",editIssue:e}))}));if(0===m.length){return r.a.createElement(ce,null,r.a.createElement(S,{text:"\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093",width:"100%"}))}return x},ie=function(e){var t=e.onWholeCheck,n=Object(a.useState)(!1),i=Object(g.a)(n,2),c=i[0],o=i[1];return r.a.createElement(oe,null,r.a.createElement(A,{onClick:function(){t(!c),o(!c)},checked:c,width:"50px"}),r.a.createElement(ce,{header:!0},r.a.createElement(S,{text:"",width:"50%"}),r.a.createElement(S,{text:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),r.a.createElement(S,{text:"\u4f5c\u6210\u8005"}),r.a.createElement(S,{text:"\u4f5c\u6210\u65e5\u4ed8"}),r.a.createElement(S,{text:"\u66f4\u65b0\u65e5\u4ed8"})))},ce=v.a.div(ae(),(function(e){return e.header?800:400})),oe=Object(v.a)(ce)(ne(),I.LIGHTBLUE),ue=v.a.div(te(),j,D,I.LIGHT,j),le=function(e){var t=e.issues,n=e.researchWord,a=e.checkedIssue,i=e.handleCheckAll,c=e.handleCheckIssue,o=e.uploadEditIssue;return r.a.createElement(ue,null,r.a.createElement(ie,{onWholeCheck:function(e){var n=Object(b.a)({},a);e?t.forEach((function(e){return n[e.id]=e})):n={},i(n)}}),r.a.createElement(re,{issues:t,checkedIssue:a,researchWord:n,handleCheckIssue:c,uploadEditIssue:o}))};function de(){var e=Object(h.a)(["\n  display: flex;\n  margin: 8px;\n  padding: 0px;\n  width: 100%;\n  color: #000;\n  font-weight: ",";\n"]);return de=function(){return e},e}var se=v.a.div(de(),(function(e){return e.header?800:400})),pe=function(e){var t=e.setNewResearchWord,n=e.submitAddNewIssue,i=e.submitDeleteIssue,c=Object(a.useState)(!1),o=Object(g.a)(c,2),u=o[0],l=o[1];return r.a.createElement(se,null,r.a.createElement(z,{text:"Issue"}),r.a.createElement(J,{getTheValue:t,placeholder:"issue\u540d\u3067\u691c\u7d22"}),r.a.createElement(T,{onClick:function(){l(!0)},text:"Open",type:"primary"}),r.a.createElement(ee,{handleSubmit:n,isModalOpen:u,setIsModalOpen:l,type:"new"}),r.a.createElement(T,{onClick:i,text:"Delete",type:"secondary"}))};function fe(){var e=Object(h.a)(["\n  max-width: 896px;\n  margin: 0 auto;\n"]);return fe=function(){return e},e}var me=v.a.div(fe()),xe=function(e){var t=e.issues,n=e.addNewIssue,i=e.deleteChosenIssue,c=e.uploadEditIssue,o=Object(a.useState)(""),u=Object(g.a)(o,2),l=u[0],d=u[1],s=Object(a.useState)({}),p=Object(g.a)(s,2),f=p[0],m=p[1];return r.a.createElement(me,null,r.a.createElement(pe,{setNewResearchWord:function(e){var t=e.toLowerCase();d(t)},submitDeleteIssue:function(){Object.keys(f).map((function(e){return i(e)}))},submitAddNewIssue:function(e){n(e)}}),r.a.createElement(le,{issues:t,checkedIssue:f,researchWord:l,handleCheckAll:m,handleCheckIssue:function(e){var t=Object(b.a)({},f);t[e.id]?delete t[e.id]:t[e.id]=e,m(t)},uploadEditIssue:c}))},Ee=Object(l.b)((function(e){return{issues:e}}),(function(e){return{addNewIssue:function(t){e(function(e){return{type:"ADD_ISSUE",issue:e}}(t))},deleteChosenIssue:function(t){e({type:"DELETE_ISSUE",id:t})},uploadEditIssue:function(t){e(function(e){return{type:"EDIT_ISSUE",issue:e}}(t))}}}))(xe),he=function(){return r.a.createElement(z,{text:"Pull Request"})};function be(){var e=Object(h.a)(["\n  display: flex;\n  min-width: 400px;\n  width: 80%;\n  max-width: 600px;\n  margin: 50px auto;\n  border: 1px solid ",";\n"]);return be=function(){return e},e}function ge(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  padding: 10px;\n  font-size: 0.95em;\n  color: ",";\n  flex-direction: ",";\n"]);return ge=function(){return e},e}var ve=v.a.div(ge(),(function(e){return e.bold?"#000":"#444"}),(function(e){return"column"===e.direction?"column":"row"})),we=v.a.div(be(),j),ye=function(){return r.a.createElement("div",null,r.a.createElement(z,{text:"Profile"}),r.a.createElement(we,null,r.a.createElement(ve,{direction:"column"},r.a.createElement(ve,null,"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb"),r.a.createElement(ve,null,r.a.createElement("img",{src:"../img/ui.png",alt:"icon"}))),r.a.createElement(ve,{direction:"column"},r.a.createElement(ve,null,"\u30e6\u30fc\u30b6\u540d"),r.a.createElement(ve,{bold:!0},"Tomona"),r.a.createElement(ve,null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),r.a.createElement(ve,{bold:!0},"kari@example.com"))))};function Oe(){var e=Object(h.a)(["\n  padding: 16px;\n  margin: 20px 0px;\n  width: 100%;\n  min-width: 100px;\n  text-decoration: none;\n  color: ",";\n  text-align: center;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: 600;\n  border-radius: "," "," 0px 0px;\n  border-style: solid;\n  border-color: ",";\n  border-width: ",";\n"]);return Oe=function(){return e},e}var ke={textDecoration:"none",color:"#000"},Ie=v.a.a(Oe(),O.DARK,w.MIDDLE,y,D,D,j,(function(e){return e.selected?"1px 1px 0 1px":"0 0 1px 0px"})),je=function(e){var t=e.text,n=e.selected,a=e.to,i=e.changeSelected;return r.a.createElement(Ie,{selected:n,onClick:i},r.a.createElement(d.b,{to:a,style:ke},t))};function De(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  max-width: 1000px;\n  padding: 0px 16px;\n  margin: 16px auto;\n"]);return De=function(){return e},e}var Ce=v.a.div(De()),Se=function(e){var t=Object(a.useState)(!0),n=Object(g.a)(t,2),i=n[0],c=n[1],o=e.changeCurrent,u=function(){c(!i),o(i?"PullRequest":"IssueContainer")};return r.a.createElement(Ce,null,r.a.createElement(je,{text:"Issue",selected:i,id:"IssueContainer",changeSelected:u}),r.a.createElement(je,{text:"Pull Request",id:"PullRequest",changeSelected:u,selected:!i}))},Ae=function(){var e=Object(a.useState)("IssueContainer"),t=Object(g.a)(e,2),n=t[0],i=t[1];return r.a.createElement("div",null,r.a.createElement(Se,{changeCurrent:i}),"IssueContainer"===n?r.a.createElement(Ee,null):r.a.createElement(he,null))},Re=function(){return r.a.createElement("div",null,r.a.createElement(E.a,{exact:!0,path:"/react-redux-githubViewer",component:Ae}),r.a.createElement(E.a,{exact:!0,path:"/react-redux-githubViewer/issue",component:Ee}),r.a.createElement(E.a,{exact:!0,path:"/react-redux-githubViewer/pullRequest",component:he}),r.a.createElement(E.a,{exact:!0,path:"/react-redux-githubViewer/profile",component:ye}))};function Le(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 8px 16px;\n"]);return Le=function(){return e},e}var Te={textDecoration:"none"},Ve=function(){return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/react-redux-githubViewer/issue",style:Te},r.a.createElement(q,{text:"Issue"})),r.a.createElement(d.b,{to:"/react-redux-githubViewer/pullRequest",style:Te},r.a.createElement(q,{text:"Pull Request"})))},Ue=v.a.div(Le()),We=function(){return r.a.createElement(Ue,null,r.a.createElement(d.b,{to:"/react-redux-githubViewer",style:Te},r.a.createElement(P,null)),r.a.createElement(Ve,null))};function Me(){var e=Object(h.a)(["\n  display: block;\n  cursor: pointer;\n  padding: 10px 8px;\n  text-decolation: none;\n  margin: 0px;\n  text-align: left;\n  font-family: ",";\n  font-size: ","px;\n  font-weight: 600;\n  color: ",";\n  background: #fff;\n  :hover {\n    background: ",";\n    color: ",";\n  }\n"]);return Me=function(){return e},e}var ze=v.a.div(Me(),y,w.DEFAULT,O.DARK,I.BLUE,O.WHITE),Pe=function(e){var t=e.text,n=e.onClick;return r.a.createElement(ze,{onClick:n},t)};function qe(){var e=Object(h.a)(["\n  position: absolute;\n  right: 8px;\n  top: 50px;\n  padding: 8px 0px;\n  width: 200px;\n  background: #fff;\n  box-shadow: 3px 3px 3px #eee;\n  display: ",";\n  z-index: 500;\n"]);return qe=function(){return e},e}var He={textDecoration:"none"},Ne=function(e){var t=e.onClick;return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/react-redux-githubViewer/",style:He},r.a.createElement(Pe,{text:"Top",key:"Top",onClick:t})),r.a.createElement(d.b,{to:"/react-redux-githubViewer/profile",style:He},r.a.createElement(Pe,{text:"Your Profile",key:"Your Profile",onClick:t})),r.a.createElement(d.b,{to:"/react-redux-githubViewer/issue",style:He},r.a.createElement(Pe,{text:"Issue",key:"Issue",onClick:t})),r.a.createElement(d.b,{to:"/react-redux-githubViewer/pullRequest",style:He},r.a.createElement(Pe,{text:"Pull Request",key:"Pull Request",onClick:t})))},Ge=v.a.div(qe(),(function(e){return e.hidden?"none":"block"})),Be=function(e){var t=e.toggle,n=e.onClick;return t?r.a.createElement(Ge,null,r.a.createElement(Ne,{onClick:n})):r.a.createElement(Ge,{hidden:!0},r.a.createElement(Ne,null))};function Fe(){var e=Object(h.a)(["\n  display: block;\n  padding: 16px;\n  font-size: ",";\n"]);return Fe=function(){return e},e}function Ye(){var e=Object(h.a)(["\n  display: flex;\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  background: ",";\n  color: ",";\n"]);return Ye=function(){return e},e}var _e=v.a.div(Ye(),I.DARK,O.WHITE),Ke=v.a.div(Fe(),w.MIDDLE),Je=function(){var e=Object(a.useState)(!1),t=Object(g.a)(e,2),n=t[0],i=t[1];return r.a.createElement(_e,null,r.a.createElement(We,null),r.a.createElement(Ke,{onClick:function(){i(!n)}},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement(Be,{toggle:n,onClick:function(){i(!1)}}))};u.a.setAppElement("#root");var $e=function(){return r.a.createElement(l.a,{store:x},r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(Je,null),r.a.createElement(Re,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.d6a38a69.chunk.js.map