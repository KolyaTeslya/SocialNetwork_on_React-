"use strict";(self.webpackChunkit_react_1=self.webpackChunkit_react_1||[]).push([[752],{752:function(s,e,t){t.r(e),t.d(e,{default:function(){return D}});var i=t(1413),n=t(5671),o=t(3144),r=t(136),a=t(2882),l=t(2791),u=t(6070),c=t(6139),d=t(704),h="MyPosts_postsBlock__lB-pf",f="MyPosts_posts__GSiZ2",p="Post_item__Yu4oG",x=t(184),j=function(s){return(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X1bnwLsxFXgAyBY00Kujl6PBKJ5t9fbVkg&usqp=CAU"}),s.message,(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"like"})," ",s.likesCount]})]})},m=t(5304),v=t(7492),b=(0,m.D)(20),g=(0,d.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,x.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,x.jsx)("div",{children:(0,x.jsx)(c.Z,{name:"newPostText",component:"Textarea",placeholder:"Post message",validate:[m.C,b]})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:" Add post"})})]})})),P=function(s){var e=s.posts.map((function(s){return(0,x.jsx)(j,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("h3",{children:" My posts "}),(0,x.jsx)(g,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,x.jsx)("div",{className:f,children:e})]})},k=t(8687),S=(0,k.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(e){s((0,u.Wl)(e))}}}))(P),_=t(885),y=t(2733),I="ProfileInfo_descriptionBlock__XBXuJ",Z="ProfileInfo_mainPhoto__QU8TO",A="ProfileInfo_contact__sQB8W",w=function(s){var e=(0,l.useState)(!1),t=(0,_.Z)(e,2),i=t[0],n=t[1],o=(0,l.useState)(s.status),r=(0,_.Z)(o,2),a=r[0],u=r[1];(0,l.useEffect)((function(){u(s.status)}),[s.status]);return(0,x.jsxs)("div",{children:[!i&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Status: "}),(0,x.jsxs)("span",{onDoubleClick:function(){n(!0)},children:[" ",s.status||"----"," "]})]}),i&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:function(s){u(s.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),s.updateStatus(a)},value:a})})]})},C=t(4353),N=t(9234),F=(0,d.Z)({form:"edit-profile",enableReinitialize:!0,destroyOnUnmount:!1})((function(s){var e=s.handleSubmit,t=s.profile,i=s.error;return(0,x.jsxs)("form",{onSubmit:e,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{children:"save"}),i&&(0,x.jsx)("div",{className:N.Z.formSummaryError,children:i})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),": ",(0,v.Gr)("Full name","fullName",[],v.II)]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Lookig for a job"}),": ",(0,v.Gr)("","lookingForAJob",[],v.II,{type:"checkbox"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),":",(0,v.Gr)("My professional skills","lookingForAJobDescription",[],v.gx)]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),":",(0,v.Gr)("About me","aboutMe",[],v.gx)]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(t.contacts).map((function(s){return(0,x.jsx)("div",{className:A,children:(0,x.jsxs)("b",{children:[s,": ",(0,v.Gr)(s,"contacts."+s,[],v.II)]})},s)}))]})]})})),M=function(s){var e=s.profile,t=s.isOwner,i=s.goToEditMode;return(0,x.jsxs)("div",{children:[t&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:i,children:"edit"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),": ",e.fullName]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Lookig for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(e.contacts).map((function(s){return(0,x.jsx)(T,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},T=function(s){var e=s.contactTitle,t=s.contactValue;return(0,x.jsxs)("div",{className:A,children:[(0,x.jsx)("b",{children:e}),": ",t]})},O=function(s){var e=s.profile,t=s.status,i=s.updateStatus,n=s.isOwner,o=s.savePhoto,r=s.saveProfile,a=(0,l.useState)(!1),u=(0,_.Z)(a,2),c=u[0],d=u[1];if(!e)return(0,x.jsx)(y.Z,{});return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)("img",{src:e.photos.large||C,className:Z}),n&&(0,x.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&o(s.target.files[0])}}),c?(0,x.jsx)(F,{initialValues:e,profile:e,onSubmit:function(s){r(s).then((function(s){d(!1)}))}}):(0,x.jsx)(M,{goToEditMode:function(){d(!0)},profile:e,isOwner:n}),(0,x.jsx)(w,{status:t,updateStatus:i})]})})},B=function(s){return(0,x.jsxs)("div",{children:[(0,x.jsx)(O,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,x.jsx)(S,{})]})},G=t(3679),J=t(7781),U=function(s){(0,r.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,o.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)(B,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),D=(0,J.compose)((0,k.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:u.et,getStatus:u.lR,updateStatus:u.Nf,savePhoto:u.Ju,saveProfile:u.Ii}),G.Z)(U)}}]);
//# sourceMappingURL=752.8842fa66.chunk.js.map