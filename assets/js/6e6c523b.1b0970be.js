"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2434],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>y});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),m=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=m(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=o,y=s["".concat(c,".").concat(u)]||s[u]||p[u]||a;return n?t.createElement(y,i(i({ref:r},d),{},{components:n})):t.createElement(y,i({ref:r},d))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4140:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var t=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"JMeter/file/beanshell-random",id:"JMeter/file/beanshell-random",title:"beanshell-random",description:"",source:"@site/docs/JMeter/file/beanshell-random.md",sourceDirName:"JMeter/file",slug:"/JMeter/file/beanshell-random",permalink:"/docs/JMeter/file/beanshell-random",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker \u8fd0\u884c JMeter",permalink:"/docs/JMeter/docker/Docker \u8fd0\u884c JMeter"},next:{title:"CICD_Tool",permalink:"/docs/Jenkins/CICD_Tool"}},c={},m=[],d={toc:m},s="wrapper";function p(e){let{components:r,...n}=e;return(0,o.kt)(s,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'${__time(yyyyMMddHHmmss,time)}\n${__Random(100000,999999,)}\n\nString orderNo = "orderNo" + ${__Random(10000,99999,)};\nvars.put("orderNo",orderNo);\n\n{\n"curDate":"${__time(yyyyMMdd,time)}",  //\u5f53\u5929\n"curtime":"${__time(yyyyMMddHHmmss,time)}", //\u5f53\u524d\u65f6\u95f4\n"curtimeAndRandom":"${__time(yyyyMMddHHmmss,time)}${__Random(10,99,)}", //\u5f53\u524d\u65f6\u95f4+\u968f\u673a\n"randomDate":"${__RandomDate(yyyyMMdd,19800101,20211231,,)}", //\u968f\u673a\u65e5\u671f\n"randomNum":"0${__Random(100,999,)}", //\u968f\u673a\u6570\u503c,\u53ef\u5728\u503c\u524d\u9762\u52a0\u4efb\u610f\u5b57\u7b26\n"randomString":"${__RandomString(1,YN,)}" //\u968f\u673a\u5b57\u7b26\u4e32,\u53ef\u5728\u503c\u524d\u9762\u52a0\u4efb\u610f\u5b57\u7b26\n}\n\nRandom random = new Random();\n\n//1\u8eab\u4efd\u8bc1 2\u62a4\u7167 3\u6e2f\u6fb3\u53f0\u5c45\u6c11\u8eab\u4efd\u8bc1 Z \u5176\u4ed6\nString[] str= new String[]{"1", "2", "3", "Z"};\nint a = random.nextInt(str.length);\nvars.put("idType",str[a]);\nlog.info("\u968f\u673a\u5b57\u7b26:" + str[a]);\n')))}p.isMDXComponent=!0}}]);