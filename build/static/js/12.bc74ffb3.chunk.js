(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[12],{459:function(e,t,s){"use strict";var a=s(462),r=s.n(a),n=s(18),i=s(463).a(),c=s(29),o=s(270),l=r.a.create({baseURL:n.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(c.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(i.push(u),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(c.b),i.push(u),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var d=l,m={login:function(e){return d({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return d({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=m},470:function(e,t,s){"use strict";var a=s(2),r=s(74),n=s(0),i=s(38),c=s(448),o=s(525),l=s(517),u=s(521),d=s(433),m=s(106),j=s(53),h=s(42),g=s(465),b=s(459),p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},f={showAuthMessage:j.c,hideAuthMessage:j.b,showLoading:j.d,authenticated:j.a};t.a=Object(i.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),f)((function(e){var t=e.showLoading,s=e.token,i=e.loading,f=e.redirect,x=e.message,O=e.showMessage,w=e.hideAuthMessage,v=e.authenticated,y=e.allowRedirect,k=l.a.useForm(),P=Object(r.a)(k,1)[0],F=Object(h.g)();return Object(n.useEffect)((function(){null!==s&&y&&F.push(f),O&&setTimeout((function(){w()}),3e3)})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(a.jsx)(u.a,{type:"error",showIcon:!0,message:x})}),Object(a.jsxs)(l.a,{form:P,layout:"vertical",name:"register-form",onFinish:function(){P.validateFields().then((function(e){t();b.a.signUp(e).then((function(e){v("fakeToken")})).then((function(e){Object(j.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(a.jsx)(l.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(a.jsx)(d.a,{prefix:Object(a.jsx)(c.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(a.jsx)(d.a.Password,{prefix:Object(a.jsx)(o.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(a.jsx)(d.a.Password,{prefix:Object(a.jsx)(o.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{children:Object(a.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:i,children:"Sign Up"})})]})]})}))},509:function(e,t,s){"use strict";s.r(t);var a=s(17),r=s(2),n=(s(0),s(470)),i=s(466),c=s(467),o=s(516),l=s(38),u={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(l.c)((function(e){return e.theme.currentTheme}));return Object(r.jsx)("div",{className:"h-100",style:u,children:Object(r.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(r.jsx)(i.a,{justify:"center",children:Object(r.jsx)(c.a,{xs:20,sm:20,md:20,lg:7,children:Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),Object(r.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(r.jsx)(i.a,{justify:"center",children:Object(r.jsx)(c.a,{xs:24,sm:24,md:20,lg:20,children:Object(r.jsx)(n.a,Object(a.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=12.bc74ffb3.chunk.js.map