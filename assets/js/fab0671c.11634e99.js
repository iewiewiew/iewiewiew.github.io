"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,f=u["".concat(c,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,p={unversionedId:"SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5/Yapi",id:"SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5/Yapi",title:"Yapi",description:"[TOC]",source:"@site/docs/SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5/Yapi.md",sourceDirName:"SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5",slug:"/SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5/Yapi",permalink:"/docs/SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5/Yapi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postman",permalink:"/docs/SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5/Postman"},next:{title:"\u6293\u5305\u6d4b\u8bd5",permalink:"/docs/SoftwareTest/\u63a5\u53e3\u6d4b\u8bd5/\u6293\u5305\u6d4b\u8bd5"}},c={},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[TOC]"),(0,o.kt)("h1",{align:"center"},"Yapi"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,o.kt)("br",{parentName:"p"}),"\n","Date\uff1a2024.01.08",(0,o.kt)("br",{parentName:"p"}),"\n","Description\uff1a  ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://yapi.mglicai.com/"},"Yapi \u5b98\u7f51")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --name mongo-yapi mongo\ndocker pull registry.cn-hangzhou.aliyuncs.com/anoy/yapi\ndocker run -it --rm  --link mongo-yapi:mongo --entrypoint npm --workdir /api/vendors registry.cn-hangzhou.aliyuncs.com/anoy/yapi run install-server\ndocker run -d --name yapi --link mongo-yapi:mongo --workdir /api/vendors -p 7777:3000 registry.cn-hangzhou.aliyuncs.com/anoy/yapi server/app.js\n\n\u8bbf\u95eehttp://IP:77777\n\u767b\u5f55\u8d26\u53f7\uff1aadmin@admin.com\n\u5bc6\u7801\uff1aymfe.org\n")))}m.isMDXComponent=!0}}]);