(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{665:function(e,r,t){"use strict";t.r(r),function(e){var n,a=t(678);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,l,i=a.a;r.default=i,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(i,"default","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/routes/register/index.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}.call(this,t(10)(e))},671:function(e,r,t){"use strict";(function(e){t.d(r,"b",(function(){return y})),t.d(r,"c",(function(){return g})),t.d(r,"d",(function(){return h})),t.d(r,"e",(function(){return v})),t.d(r,"g",(function(){return G})),t.d(r,"a",(function(){return j})),t.d(r,"f",(function(){return x}));var n,a=t(5),o=t.n(a),l=t(4);function i(){var e=o()(["\n  width: 100%;\n  height: 55px;\n  font-size: 20px;\n  letter-spacing: .33px;\n  color: #fff;\n  line-height: 55px;\n  text-align: center;\n  background-color: #ff6f89;\n  box-shadow: 0 3px 15px 0 #d06a74;\n  border: none;\n  padding: 0;\n"]);return i=function(){return e},e}function u(){var e=o()([""]);return u=function(){return e},e}function s(){var e=o()(["\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  padding-top: 10px;\n"]);return s=function(){return e},e}function d(){var e=o()(["\n  width: 100%;\n  height: 55px;\n  line-height: 55px;\n  font-size: 18px;\n  letter-spacing: .3px;\n  color: #f1828d;\n  text-align: center;\n  border-width: 0;\n  &::placeholder {\n    color: #f1828d;\n    text-align: center;\n  }\n"]);return d=function(){return e},e}function c(){var e=o()(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 55px;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 20px;\n"]);return c=function(){return e},e}function f(){var e=o()(["\n  width: 100%;\n  margin-bottom: 20px;\n"]);return f=function(){return e},e}function m(){var e=o()(["\n  width: 100%;\n  padding: 0 10%;\n"]);return m=function(){return e},e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,y=l.default.form(m()),g=l.default.div(f()),h=l.default.div(c()),v=l.default.input(d()),G=l.default.div(s()),j=Object(l.default)(g)(u()),x=l.default.button(i());(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(y,"Form","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/styles/form-style.js"),p.register(g,"FormGroup","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/styles/form-style.js"),p.register(h,"InputGroup","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/styles/form-style.js"),p.register(v,"InputText","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/styles/form-style.js"),p.register(G,"ValidateErrorMsg","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/styles/form-style.js"),p.register(j,"ButtonGroup","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/styles/form-style.js"),p.register(x,"SubmitBtn","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/styles/form-style.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,t(10)(e))},678:function(e,r,t){"use strict";(function(e){var n,a=t(0),o=t.n(a),l=t(662),i=t(104),u=t(671),s=t(34),d=t(28),c=t(352);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(){var e=Object(d.d)(),r=Object(d.e)((function(e){return e.personal})),t=r.id,n=r.avatar,f=Object(a.useCallback)((function(e){return s.a.push(e)}),[]),m=Object(l.a)(),p=m.register,b=m.handleSubmit,y=m.errors;return o.a.createElement(i.b,null,o.a.createElement(i.c,null,o.a.createElement(i.d,null)),o.a.createElement(u.b,{onSubmit:b((function(r){e(Object(c.b)({id:t,author:r.name,avatar:n})),f("pay")})),autoComplete:"off"},o.a.createElement(u.c,null,o.a.createElement(u.d,null,o.a.createElement(u.e,{name:"name",placeholder:"name",ref:p({required:!0})}),y.name&&o.a.createElement(u.g,null,"Name is required")),o.a.createElement(u.d,null,o.a.createElement(u.e,{type:"tel",name:"mobile",maxLength:"10",placeholder:"mobile",ref:p({required:!0})}),y.mobile&&o.a.createElement(u.g,null,"Mobile is required")),o.a.createElement(u.d,null,o.a.createElement(u.e,{type:"email",name:"email",placeholder:"e-mail",ref:p({required:!0})}),y.email&&o.a.createElement(u.g,null,"Email is required"))),o.a.createElement(u.a,null,o.a.createElement(u.f,{type:"submit"},"sign up"))))};f(m,"useDispatch{dispatch}\nuseSelector{{ id, avatar }}\nuseCallback{linkTo}\nuseForm{{\n        register, handleSubmit, errors\n    }}",(function(){return[d.d,d.e,l.a]}));var p,b,y=m;r.a=y,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(m,"Register","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/routes/register/containers/register.js"),p.register(y,"default","/Users/jamesyu/Documents/my-personal/hacknroll-irepair-frontend/src/routes/register/containers/register.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,t(10)(e))}}]);