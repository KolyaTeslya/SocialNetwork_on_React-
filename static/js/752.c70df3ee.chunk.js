"use strict";(self.webpackChunkit_react_1=self.webpackChunkit_react_1||[]).push([[752],{752:function(s,e,t){t.r(e),t.d(e,{default:function(){return U}});var i=t(1413),o=t(5671),n=t(3144),r=t(136),a=t(2882),u=t(2791),l=t(6070),c=t(6139),d=t(704),h="MyPosts_postsBlock__lB-pf",p="MyPosts_posts__GSiZ2",f="Post_item__Yu4oG",x=t(184),j=function(s){return(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X1bnwLsxFXgAyBY00Kujl6PBKJ5t9fbVkg&usqp=CAU"}),s.message,(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"like"})," ",s.likesCount]})]})},v=t(5304),m=t(7492),b=(0,v.D)(10),g=(0,d.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,x.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,x.jsx)("div",{children:(0,x.jsx)(c.Z,{name:"newPostText",component:"Textarea",placeholder:"Post message",validate:[v.C,b]})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:" Add post"})})]})})),P=function(s){var e=s.posts.map((function(s){return(0,x.jsx)(j,{message:s.message,likesCount:s.likesCount})}));return(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("h3",{children:" My posts "}),(0,x.jsx)(g,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,x.jsx)("div",{className:p,children:e})]})},k=t(8687),_=(0,k.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(e){s((0,l.Wl)(e))}}}))(P),S=t(885),y=t(2733),A="ProfileInfo_descriptionBlock__XBXuJ",I="ProfileInfo_mainPhoto__QU8TO",Z="ProfileInfo_contact__sQB8W",w=function(s){var e=(0,u.useState)(!1),t=(0,S.Z)(e,2),i=t[0],o=t[1],n=(0,u.useState)(s.status),r=(0,S.Z)(n,2),a=r[0],l=r[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,x.jsxs)("div",{children:[!i&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Status: "}),(0,x.jsxs)("span",{onDoubleClick:function(){o(!0)},children:[" ",s.status||"----"," "]})]}),i&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),s.updateStatus(a)},value:a})})]})},C=t(4353),F=(0,d.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit;return(0,x.jsxs)("form",{onSubmit:e,children:[(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"save"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),": ",(0,m.Gr)("Full name","fullName",[],m.II)]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Lookig for a job"}),": ",(0,m.Gr)("","lookingForAJob",[],m.II,{type:"checkbox"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),":",(0,m.Gr)("My professional skills","lookingForAJobDescription",[],m.gx)]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),":",(0,m.Gr)("About me","aboutMe",[],m.gx)]})]})})),M=function(s){var e=s.profile,t=s.isOwner,i=s.goToEditMode;return(0,x.jsxs)("div",{children:[t&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:i,children:"edit"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),": ",e.fullName]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Lookig for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(e.contacts).map((function(s){return(0,x.jsx)(N,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},N=function(s){var e=s.contactTitle,t=s.contactValue;return(0,x.jsxs)("div",{className:Z,children:[(0,x.jsx)("b",{children:e}),": ",t]})},T=function(s){var e=s.profile,t=s.status,i=s.updateStatus,o=s.isOwner,n=s.savePhoto,r=s.saveProfile,a=(0,u.useState)(!1),l=(0,S.Z)(a,2),c=l[0],d=l[1];if(!e)return(0,x.jsx)(y.Z,{});return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:A,children:[(0,x.jsx)("img",{src:e.photos.large||C,className:I}),o&&(0,x.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&n(s.target.files[0])}}),c?(0,x.jsx)(F,{initialValues:e,profile:e,onSubmit:function(s){r(s)}}):(0,x.jsx)(M,{goToEditMode:function(){d(!0)},profile:e,isOwner:o}),(0,x.jsx)(w,{status:t,updateStatus:i})]})})},B=function(s){return(0,x.jsxs)("div",{children:[(0,x.jsx)(T,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,x.jsx)(_,{})]})},J=t(3679),O=t(7781),G=function(s){(0,r.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,o.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)(B,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(u.Component),U=(0,O.compose)((0,k.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:l.et,getStatus:l.lR,updateStatus:l.Nf,savePhoto:l.Ju,saveProfile:l.Ii}),J.Z)(G)}}]);
//# sourceMappingURL=752.c70df3ee.chunk.js.map