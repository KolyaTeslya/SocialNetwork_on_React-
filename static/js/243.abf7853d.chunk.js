"use strict";(self.webpackChunkit_react_1=self.webpackChunkit_react_1||[]).push([[243],{5243:function(e,s,n){n.r(s),n.d(s,{default:function(){return M}});var i=n(2807),a=n(2791),t=n(6139),o=n(704),r={dialogs:"Dialogs_dialogs__oe96H",dialogsItems:"Dialogs_dialogsItems__zeEWD",active:"Dialogs_active__t8cjl",messages:"Dialogs_messages__Cg2l+",message:"Dialogs_message__ZEWo0",writeMessage:"Dialogs_writeMessage__38-Bo"},d=n(1241),l=n(184),u=function(e){var s="/dialogs/"+e.id;return(0,l.jsx)("div",{className:r.dialog+" "+r.active,children:(0,l.jsx)(d.Z,{to:s,children:e.name})})},c=function(e){return(0,l.jsx)("div",{className:r.dialog,children:e.message})},g=n(3019),m=(0,o.Z)({form:"dialogAddMessageForm"})((function(e){return(0,l.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(t.Z,{component:"textarea",name:"newMessageBody",placeholder:"Enter your message"})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"Send"})})]})})),h=function(e){var s=e.dialogsPage,n=s.dialogs.map((function(e){return(0,l.jsx)(u,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return(0,l.jsx)(c,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?(0,l.jsxs)("div",{className:r.dialogs,children:[(0,l.jsx)("div",{className:r.dialogsItems,children:n}),(0,l.jsx)("div",{className:r.messages,children:(0,l.jsxs)("div",{children:[" ",i," "]})}),(0,l.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):(0,l.jsx)(g.Z,{to:"./login"})},f=n(8687),_=n(1413),j=n(5671),x=n(3144),v=n(136),p=n(2882),Z=function(e){return{isAuth:e.auth.isAuth}},M=(0,n(7781).compose)((0,f.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,i.X)(s))}}})),(function(e){var s=function(s){(0,v.Z)(i,s);var n=(0,p.Z)(i);function i(){return(0,j.Z)(this,i),n.apply(this,arguments)}return(0,x.Z)(i,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,_.Z)({},this.props)):(0,l.jsx)(g.Z,{to:"/login"})}}]),i}(a.Component);return(0,f.$j)(Z)(s)}))(h)}}]);
//# sourceMappingURL=243.abf7853d.chunk.js.map