(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{644:function(e,r,t){"use strict";t.r(r),function(e){var n,o=t(661);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,l,i=o.a;r.default=i,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(i,"default","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/routes/register/index.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}.call(this,t(11)(e))},650:function(e,r,t){"use strict";(function(e){t.d(r,"b",(function(){return g})),t.d(r,"c",(function(){return j})),t.d(r,"d",(function(){return v})),t.d(r,"e",(function(){return y})),t.d(r,"a",(function(){return G})),t.d(r,"f",(function(){return L}));var n,o=t(5),a=t.n(o),l=t(4);function i(){var e=a()(["\n  width: 100%;\n  height: 55px;\n  font-size: 20px;\n  letter-spacing: .33px;\n  color: #fff;\n  line-height: 55px;\n  text-align: center;\n  background-color: #ff6f89;\n  box-shadow: 0 3px 15px 0 #d06a74;\n  border: none;\n  padding: 0;\n"]);return i=function(){return e},e}function s(){var e=a()([""]);return s=function(){return e},e}function c(){var e=a()(["\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  padding-top: 10px;\n"]);return c=function(){return e},e}function d(){var e=a()(["\n  width: 100%;\n  height: 35px;\n  line-height: 35px;\n  font-size: 18px;\n  letter-spacing: .3px;\n  color: #f1828d;\n  text-align: center;\n  border-width: 0;\n  -webkit-text-fill-color: #f1828d;\n  &::placeholder {\n    color: #f1828d;\n    text-align: center;\n  }\n"]);return d=function(){return e},e}function u(){var e=a()(["\n              border: 2px solid #ff6f89;\n              box-shadow: 0 0 10px 1px #fff;\n            "]);return u=function(){return e},e}function f(){var e=a()(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 55px;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  background-color: #fff;\n  ",";\n"]);return f=function(){return e},e}function p(){var e=a()(["\n  width: 100%;\n  margin-bottom: 20px;\n"]);return p=function(){return e},e}function m(){var e=a()(["\n  width: 100%;\n  padding: 0 10%;\n"]);return m=function(){return e},e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,h,g=l.default.form(m()),j=l.default.div(p()),v=l.default.div(f(),(function(e){if(e.isError)return Object(l.css)(u())})),y=l.default.input(d()),x=l.default.div(c()),G=Object(l.default)(j)(s()),L=l.default.button(i());(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(g,"Form","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/styles/form-style.js"),b.register(j,"FormGroup","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/styles/form-style.js"),b.register(v,"InputGroup","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/styles/form-style.js"),b.register(y,"InputText","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/styles/form-style.js"),b.register(x,"ValidateErrorMsg","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/styles/form-style.js"),b.register(G,"ButtonGroup","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/styles/form-style.js"),b.register(L,"SubmitBtn","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/styles/form-style.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,t(11)(e))},661:function(e,r,t){"use strict";(function(e){var n,o=t(0),a=t.n(o),l=t(641),i=t(28),s=t(101),c=t(650),d=t(33),u=t(347);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(){var e=Object(i.d)(),r=Object(i.e)((function(e){return e.personal})),t=r.id,n=r.avatar,f=Object(o.useCallback)((function(e){return d.a.push(e)}),[]),p=Object(l.a)(),m=p.register,b=p.handleSubmit,h=p.errors;return a.a.createElement(s.b,null,a.a.createElement(s.c,null,a.a.createElement(s.d,null)),a.a.createElement(c.b,{onSubmit:b((function(r){e(Object(u.b)({id:t,author:r.name,avatar:n,isGuest:!1})),f("pay")})),autoComplete:"off",noValidate:!0},a.a.createElement(c.c,null,a.a.createElement(c.d,{isError:!!h.name},a.a.createElement(c.e,{name:"name",placeholder:"name",ref:m({required:!0})})),a.a.createElement(c.d,{isError:!!h.mobile},a.a.createElement(c.e,{type:"tel",name:"mobile",maxLength:"10",placeholder:"mobile",ref:m({required:!0})})),a.a.createElement(c.d,{isError:!!h.email},a.a.createElement(c.e,{type:"email",name:"email",placeholder:"e-mail",ref:m({required:!0})}))),a.a.createElement(c.a,null,a.a.createElement(c.f,{type:"submit"},"sign up"))))};f(p,"useDispatch{dispatch}\nuseSelector{{ id, avatar }}\nuseCallback{linkTo}\nuseForm{{\n        register, handleSubmit, errors\n    }}",(function(){return[i.d,i.e,l.a]}));var m,b,h=p;r.a=h,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(p,"Register","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/routes/register/containers/register.js"),m.register(h,"default","/Users/james/Documents/personal-project/hacknroll-irepair-frontend/src/routes/register/containers/register.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,t(11)(e))}}]);