"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4976],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},y="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),y=c(r),m=a,b=y["".concat(p,".").concat(m)]||y[m]||s[m]||i;return r?n.createElement(b,l(l({ref:e},u),{},{components:r})):n.createElement(b,l({ref:e},u))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[y]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3754:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},l=void 0,o={unversionedId:"Git/Gitaly",id:"Git/Gitaly",title:"Gitaly",description:"[TOC]",source:"@site/docs/Git/Gitaly.md",sourceDirName:"Git",slug:"/Git/Gitaly",permalink:"/docs/Git/Gitaly",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git \u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf",permalink:"/docs/Git/Git \u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf"},next:{title:"Gitea \u4ee3\u7801\u6258\u7ba1",permalink:"/docs/Git/Gitea \u4ee3\u7801\u6258\u7ba1"}},p={},c=[{value:"Gitaly \u7b80\u4ecb",id:"gitaly-\u7b80\u4ecb",level:2}],u={toc:c},y="wrapper";function s(t){let{components:e,...r}=t;return(0,a.kt)(y,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h1",{align:"center"},"Gitaly"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,a.kt)("br",{parentName:"p"}),"\n","Date\uff1a2023.06.03",(0,a.kt)("br",{parentName:"p"}),"\n","Description\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/administration/gitaly/"},"Gitaly \u6587\u6863")),(0,a.kt)("h2",{id:"gitaly-\u7b80\u4ecb"},"Gitaly \u7b80\u4ecb"),(0,a.kt)("p",null,"Gitaly \u63d0\u4f9b\u5bf9 Git \u5b58\u50a8\u5e93\u7684\u9ad8\u7ea7 RPC \u8bbf\u95ee\u3002 GitLab \u4f7f\u7528\u5b83\u6765\u8bfb\u53d6\u548c\u5199\u5165 Git \u6570\u636e\u3002 Gitaly \u5b58\u5728\u4e8e\u6bcf\u4e2a GitLab \u5b89\u88c5\u4e2d\uff0c\u5e76\u534f\u8c03 Git \u5b58\u50a8\u5e93\u7684\u5b58\u50a8\u548c\u68c0\u7d22\u3002 Gitaly \u53ef\u4ee5\u662f\uff1a\u5728\u5355\u4e2a\u5b9e\u4f8b\u4e0a\u8fd0\u884c\u7684\u540e\u53f0\u670d\u52a1 Omnibus GitLab\uff08\u4e00\u53f0\u673a\u5668\u4e0a\u7684\u6240\u6709 GitLab\uff09\u3002 \u6839\u636e\u6269\u5c55\u548c\u53ef\u7528\u6027\u8981\u6c42\uff0c\u5206\u79bb\u5230\u81ea\u5df1\u7684\u5b9e\u4f8b\u5e76\u914d\u7f6e\u4e3a\u5b8c\u6574\u7684\u96c6\u7fa4\u914d\u7f6e\u3002\n\u5728 Gitaly \u6587\u6863\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gitaly \u670d\u52a1\u5668\u662f\u6307\u4efb\u4f55\u672c\u8eab\u8fd0\u884c Gitaly \u7684\u8282\u70b9."),(0,a.kt)("li",{parentName:"ul"},"Gitaly \u5ba2\u6237\u7aef\u6307\u7684\u662f\u4efb\u4f55\u8fd0\u884c\u5411 Gitaly \u670d\u52a1\u5668\u53d1\u51fa\u8bf7\u6c42\u7684\u8fdb\u7a0b\u7684\u8282\u70b9. \u6d41\u7a0b\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GitLab Rails \u5e94\u7528\u7a0b\u5e8f .",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GitLab \u5916\u58f3 ."),(0,a.kt)("li",{parentName:"ul"},"\u4e9a\u640f\u4f53\u80b2 app Labhorse .\nGitLab \u6700\u7ec8\u7528\u6237\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee Gitaly. Gitaly \u4ec5\u7ba1\u7406 GitLab \u7684 Git \u5b58\u50a8\u5e93\u8bbf\u95ee. \u5176\u4ed6\u7c7b\u578b\u7684 GitLab \u6570\u636e\u65e0\u6cd5\u4f7f\u7528 Gitaly \u8bbf\u95ee.")))))))}s.isMDXComponent=!0}}]);