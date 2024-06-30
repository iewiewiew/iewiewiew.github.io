"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),c=i(r),m=o,s=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(s,p(p({ref:t},u),{},{components:r})):n.createElement(s,p({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b[c]="string"==typeof e?e:o,p[1]=b;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>b,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},p=void 0,b={unversionedId:"Middleware/Dubbo",id:"Middleware/Dubbo",title:"Dubbo",description:"[TOC]",source:"@site/docs/Middleware/Dubbo.md",sourceDirName:"Middleware",slug:"/Middleware/Dubbo",permalink:"/docs/Middleware/Dubbo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apollo",permalink:"/docs/Middleware/Apollo/"},next:{title:"Kafka",permalink:"/docs/Middleware/Kafka"}},l={},i=[{value:"\u4e00\u3001Dubbo \u7b80\u4ecb",id:"\u4e00dubbo-\u7b80\u4ecb",level:2},{value:"1\u3001Dubbo \u7b80\u4ecb",id:"1dubbo-\u7b80\u4ecb",level:3},{value:"2\u3001RPC \u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528",id:"2rpc-\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528",level:3},{value:"3\u3001Dubbo \u8282\u70b9\u89d2\u8272\u8bf4\u660e",id:"3dubbo-\u8282\u70b9\u89d2\u8272\u8bf4\u660e",level:3},{value:"4\u3001Dubbo \u7684\u914d\u7f6e",id:"4dubbo-\u7684\u914d\u7f6e",level:3},{value:"5\u3001\u4ec0\u4e48\u662f\u5206\u5e03\u5f0f",id:"5\u4ec0\u4e48\u662f\u5206\u5e03\u5f0f",level:3},{value:"\u4e8c\u3001dubbo-telnet",id:"\u4e8cdubbo-telnet",level:2},{value:"1\u3001\u8fde\u63a5 dubbo \u670d\u52a1",id:"1\u8fde\u63a5-dubbo-\u670d\u52a1",level:3},{value:"2\u3001\u67e5\u770b dubbo \u670d\u52a1",id:"2\u67e5\u770b-dubbo-\u670d\u52a1",level:3},{value:"3\u3001invoke \u8c03\u7528\u63a5\u53e3\u65b9\u6cd5",id:"3invoke-\u8c03\u7528\u63a5\u53e3\u65b9\u6cd5",level:3},{value:"4\u3001count \u7edf\u8ba1\u670d\u52a1\u8c03\u7528\u60c5\u51b5",id:"4count-\u7edf\u8ba1\u670d\u52a1\u8c03\u7528\u60c5\u51b5",level:3},{value:"5\u3001trace \u8ddf\u8e2a\u65b9\u6cd5",id:"5trace-\u8ddf\u8e2a\u65b9\u6cd5",level:3},{value:"6\u3001status \u663e\u793a\u6c47\u603b\u72b6\u6001",id:"6status-\u663e\u793a\u6c47\u603b\u72b6\u6001",level:3}],u={toc:i},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[TOC]"),(0,o.kt)("hr",null),(0,o.kt)("h1",{align:"center"},"Dubbo"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,o.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.03.28",(0,o.kt)("br",{parentName:"p"}),"\n","Description\uff1aDubbo \u9ad8\u6027\u80fd\u3001\u8f7b\u91cf\u7ea7\u7684\u5f00\u6e90 Java RPC \u6846\u67b6")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://dubbo.apache.org/zh-cn/index.html"},"Dubbo \u5b98\u7f51"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://dubbo.apache.org/zh-cn/index.html"},"Dubbo \u4e2d\u6587\u6587\u6863")),(0,o.kt)("h2",{id:"\u4e00dubbo-\u7b80\u4ecb"},"\u4e00\u3001Dubbo \u7b80\u4ecb"),(0,o.kt)("h3",{id:"1dubbo-\u7b80\u4ecb"},"1\u3001Dubbo \u7b80\u4ecb"),(0,o.kt)("p",null,"Dubbo \u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u3001\u8f7b\u91cf\u7ea7\u7684\u5f00\u6e90 Java RPC \u6846\u67b6\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e09\u5927\u6838\u5fc3\u80fd\u529b\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001\u9762\u5411\u63a5\u53e3\u7684\u8fdc\u7a0b\u65b9\u6cd5\u8c03\u7528",(0,o.kt)("br",{parentName:"p"}),"\n","2\u3001\u667a\u80fd\u5bb9\u9519\u548c\u8d1f\u8f7d\u5747\u8861",(0,o.kt)("br",{parentName:"p"}),"\n","3\u3001\u4ee5\u53ca\u670d\u52a1\u81ea\u52a8\u6ce8\u518c\u548c\u53d1\u73b0"),(0,o.kt)("h3",{id:"2rpc-\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528"},"2\u3001RPC \u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528"),(0,o.kt)("p",null,"Dubbo \u539f\u7406\uff1aA \u7cfb\u7edf\u8c03\u7528 B \u7cfb\u7edf\u63a5\u53e3\u670d\u52a1\uff0c \u5b9e\u73b0\u52a8\u6001\u5316(zookeeper \u901a\u77e5)\u3001\u6743\u9650\u5316\u3001\u914d\u7f6e\u5316\u3001\u4f4e\u8026\u5408\u5316\u3001\u81ea\u52a8\u5316\u3002\nRPC \u7684\u82f1\u6587\u5168\u79f0\u662f Remote Procedure Call\uff0c\u7ffb\u8bd1\u4e3a\u4e2d\u6587\u53eb\u201c\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\u201d\u3002\u5176\u4e2d\u7a0d\u663e\u6666\u6da9\u7684\u5176\u5b9e\u5c31\u662f\u201c\u8fc7\u7a0b\u201d\uff0c\u8fc7\u7a0b\u5176\u5b9e\u5c31\u662f\u65b9\u6cd5\u3002\u6240\u4ee5\uff0c\u53ef\u4ee5\u628a RPC \u7406\u89e3\u4e3a\u201c\u8fdc\u7a0b\u65b9\u6cd5\u8c03\u7528\u201d\u3002"),(0,o.kt)("h3",{id:"3dubbo-\u8282\u70b9\u89d2\u8272\u8bf4\u660e"},"3\u3001Dubbo \u8282\u70b9\u89d2\u8272\u8bf4\u660e"),(0,o.kt)("p",null,"Provider: \u66b4\u9732\u670d\u52a1\u7684\u670d\u52a1\u63d0\u4f9b\u65b9",(0,o.kt)("br",{parentName:"p"}),"\n","Consumer: \u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u7684\u670d\u52a1\u6d88\u8d39\u65b9",(0,o.kt)("br",{parentName:"p"}),"\n","Registry: \u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0\u7684\u6ce8\u518c\u4e2d\u5fc3",(0,o.kt)("br",{parentName:"p"}),"\n","Monitor: \u7edf\u8ba1\u670d\u52a1\u7684\u8c03\u7528\u6b21\u8c03\u548c\u8c03\u7528\u65f6\u95f4\u7684\u76d1\u63a7\u4e2d\u5fc3",(0,o.kt)("br",{parentName:"p"}),"\n","Container: \u670d\u52a1\u8fd0\u884c\u5bb9\u5668"),(0,o.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\uff08Registry\uff09\uff1a\u670d\u52a1\u76ee\u5f55\u6846\u67b6\uff0c\u7528\u4e8e\u670d\u52a1\u7684\u6ce8\u518c\u548c\u670d\u52a1\u65f6\u95f4\u53d1\u5e03\u548c\u8ba2\u9605\u3002Dubbo \u4e2d\u7f3a\u7701\u91c7\u7528 appache \u7684 zookeeper \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u63d0\u4f9b\u65b9\uff08Provider\uff09\uff1a\u66b4\u9732\u670d\u52a1\u65b9\u79f0\u4e4b\u4e3a\u201c\u670d\u52a1\u63d0\u4f9b\u65b9\u201d",(0,o.kt)("br",{parentName:"p"}),"\n","\u6d88\u8d39\u65b9\uff08Consumer\uff09\uff1a\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u65b9\u79f0\u4e4b\u4e3a\u201c\u670d\u52a1\u6d88\u8d39\u8005\u201d",(0,o.kt)("br",{parentName:"p"}),"\n","\u76d1\u63a7\u4e2d\u5fc3\uff08Monitor\uff09\uff1a\u7edf\u8ba1\u670d\u52a1\u7684\u8c03\u7528\u6b21\u6570\u548c\u8c03\u7528\u65f6\u95f4\u7684\u65e5\u5fd7\u670d\u52a1\u79f0\u4e4b\u4e3a\u201c\u670d\u52a1\u76d1\u63a7\u4e2d\u5fc3\u201d",(0,o.kt)("br",{parentName:"p"}),"\n","\u670d\u52a1\u5206\u7ec4\uff1a\u670d\u52a1\u5206\u7ec4\u662f dubbo \u7528\u6765\u533a\u5206\u76f8\u540c\u63a5\u53e3\u540d,\u4f46\u662f\u65b9\u6cd5\u5177\u4f53\u5b9e\u73b0\u4e0d\u540c\u7684\u4e00\u79cd\u6a21\u5f0f"),(0,o.kt)("p",null,"\u8c03\u7528\u5173\u7cfb\u8bf4\u660e\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001\u670d\u52a1\u5bb9\u5668\u8d1f\u8d23\u542f\u52a8\uff0c\u52a0\u8f7d\uff0c\u8fd0\u884c\u670d\u52a1\u63d0\u4f9b\u8005\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","2\u3001\u670d\u52a1\u63d0\u4f9b\u8005\u5728\u542f\u52a8\u65f6\uff0c\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u81ea\u5df1\u63d0\u4f9b\u7684\u670d\u52a1\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","3\u3001\u670d\u52a1\u6d88\u8d39\u8005\u5728\u542f\u52a8\u65f6\uff0c\u5411\u6ce8\u518c\u4e2d\u5fc3\u8ba2\u9605\u81ea\u5df1\u6240\u9700\u7684\u670d\u52a1\u5e76\u63d0\u4f9b\u81ea\u5df1\u7684\u5730\u5740\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","4\u3001\u6ce8\u518c\u4e2d\u5fc3\u8fd4\u56de\u670d\u52a1\u63d0\u4f9b\u8005\u5730\u5740\u5217\u8868\u7ed9\u6d88\u8d39\u8005\uff0c\u5982\u679c\u6709\u53d8\u66f4\uff0c\u6ce8\u518c\u4e2d\u5fc3\u5c06\u7ed9\u4e88\u957f\u8fde\u63a5\u63a8\u9001\u53d8\u66f4\u6570\u636e\u7ed9\u6d88\u8d39\u8005\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","5\u3001\u670d\u52a1\u6d88\u8d39\u8005\u4ece\u63d0\u4f9b\u8005\u5217\u8868\u4e2d\uff0c\u57fa\u4e8e\u8f6f\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0c\u9009\u4e00\u53f0\u63d0\u4f9b\u8005\u8fdb\u884c\u8c03\u7528\uff0c\u5982\u679c\u8c03\u7528\u5931\u8d25\uff0c\u518d\u9009\u53e6\u4e00\u53f0\u8c03\u7528\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","6\u3001\u670d\u52a1\u63d0\u4f9b\u8005\u548c\u6d88\u8d39\u8005\uff0c\u5728\u5185\u5b58\u4e2d\u7d2f\u8ba1\u8c03\u7528\u6b21\u6570\u548c\u8c03\u7528\u65f6\u95f4\uff0c\u5b9a\u65f6\u6bcf\u5206\u949f\u53d1\u9001\u4e00\u6b21\u7edf\u8ba1\u6570\u636e\u5230\u76d1\u63a7\u4e2d\u5fc3\u3002"),(0,o.kt)("p",null,"Container \u5bb9\u5668\uff0c\u5c31\u662f spring \u7684\u5b50\u5bb9\u5668\uff0c\u4f9d\u8d56 spring\uff0c\u542f\u52a8\u540e\u5c06\u670d\u52a1\u6ce8\u518c\u5230\u6ce8\u518c\u4e2d\u5fc3\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Provider\uff0c\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u66b4\u9732\u670d\u52a1\u7684\u670d\u52a1\u63d0\u4f9b\u65b9\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Consumer\uff0c\u670d\u52a1\u6d88\u8d39\u8005\uff0c\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u7684\u670d\u52a1\u6d88\u8d39\u65b9\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Registry\uff0c \u6ce8\u518c\u4e2d\u5fc3\uff0c\u6211\u4eec\u516c\u53f8\u73b0\u5728\u7528\u7684\u6ce8\u518c\u4e2d\u5fc3\u662f zookper\uff0c\u670d\u52a1\u53d1\u5e03\u7684\u65f6\u5019\u5c06\u670d\u52a1\u5730\u5740\u548c\u6709\u4e9b\u65b9\u6cd5\u544a\u8bc9\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6ce8\u518c\u4e2d\u5fc3\u4fdd\u5b58\u8fd9\u4e9b\u5730\u5740\uff0c\u670d\u52a1\u8005\u53bb\u6d88\u8d39\u7684\u65f6\u5019\u4ece\u6ce8\u518c\u4e2d\u5fc3\u53bb\u83b7\u53d6\u670d\u52a1\uff0c\u6ce8\u518c\u4e2d\u5fc3\u8fd4\u56de\u7ed9\u6d88\u8d39\u8005\u7684\u65f6\u5019\u4e0e\u6d88\u8d39\u8005\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u6d88\u8d39\u8005\u5efa\u7acb\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u4fdd\u5b58\u6ce8\u518c\u4e2d\u5fc3\u8fd4\u56de\u7684\u5730\u5740\u7b49\u4fe1\u606f\uff0c\u4e34\u65f6\u6587\u4ef6\u53ef\u4ee5\u51cf\u5c11\u5bf9\u6ce8\u518c\u4e2d\u5fc3\u7684\u8bbf\u95ee\uff0c\u51cf\u5c11\u670d\u52a1\u538b\u529b\u63d0\u9ad8\u6548\u7387\u7b49\uff0c\u53ea\u6709\u5f53\u670d\u52a1\u8005\u53d1\u9001\u5f02\u5e38\u6ce8\u518c\u4e2d\u5fc3\u901a\u77e5\u6d88\u8d39\u8005\u7684\u65f6\u5019\u4e34\u65f6\u6587\u4ef6\u624d\u4f1a\u6539\u53d8\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Monitor\uff0c\u670d\u52a1\u76d1\u63a7\u4e2d\u5fc3\uff0c\u8bb0\u5f55\u670d\u52a1\u8c03\u7528\u7684\u6b21\u6570\u548c\u8c03\u7528\u65f6\u95f4\uff0c\u8d1f\u8f7d\u5747\u8861\u3002\u7edf\u8ba1\u73b0\u5728\u5185\u5b58\u6c47\u603b\u540e\u6bcf\u5206\u949f\u4e00\u6b21\u53d1\u9001\u5230\u76d1\u63a7\u4e2d\u5fc3\u670d\u52a1\u5668\uff0c\u5e76\u4ee5\u62a5\u8868\u5c55\u793a\u3002\u53e6\u5916\uff0cMonitor \u53ef\u4ee5\u4e0d\u5b89\u88c5\uff0c\u5373\u4f7f\u6302\u6389\u4e86\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5230 consumer \u548c Provider \u4e4b\u95f4\u7684\u8c03\u7528\uff0c\u53ea\u662f\u4e22\u5931\u90e8\u5206\u91c7\u6837\u6570\u636e\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Container \u4e0d\u7528\u5b89\u88c5\uff0cspring \u5bb9\u5668 spring \u5c01\u88c5\u597d\u7684\uff1bProvider\u3001Consumer \u76f8\u5bf9\u4e8e\u4e24\u4e2a\u7cfb\u7edf\uff0c\u901a\u8fc7\u7f16\u7a0b\u5199\u4ee3\u7801\u5b9e\u73b0\uff1b\u6ce8\u518c\u4e2d\u5fc3\u548c Monitor \u9700\u8981\u5b89\u88c5\u3002"),(0,o.kt)("h3",{id:"4dubbo-\u7684\u914d\u7f6e"},"4\u3001Dubbo \u7684\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1\u3001\u66b4\u9732\u670d\u52a1\uff0c\u5b9a\u4e49\u670d\u52a1\u4fe1\u606f  \n\u670d\u52a1\u914d\u7f6e\uff0c\u7528\u4e8e\u66b4\u9732\u4e00\u4e2a\u670d\u52a1\uff0c\u5b9a\u4e49\u670d\u52a1\u7684\u5143\u4fe1\u606f\uff0c\u4e00\u4e2a\u670d\u52a1\u53ef\u4ee5\u7528\u591a\u4e2a\u534f\u8bae\u66b4\u9732\uff0c\u4e00\u4e2a\u670d\u52a1\u4e5f\u53ef\u4ee5\u6ce8\u518c\u5230\u591a\u4e2a\u6ce8\u518c\u4e2d\u5fc3\u3002  \n\x3c!-- \u670d\u52a1\u7aef\uff1adubbo:service --\x3e                \n<dubbo:service ref="lonApplicationService" interface="com.demo.service.LonApplicationService" group="${dubbo.protocol.group}" version="${dubbo.protocol.version}"timeout="${dubbo.protocol.timeout}"  protocol="dubbo" retries="0"/>\n\n2\u3001\u5f15\u7528\u670d\u52a1\u914d\u7f6e  \n\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8fdc\u7a0b\u670d\u52a1\u4ee3\u7406\u3002  \n\x3c!-- \u6d88\u8d39\u7aef\uff1adubbo:reference --\x3e\n<dubbo:reference id="lonApplicationService" interface="com.demo.service.LonApplicationService" group="${dubbo.protocol.group}" version="${dubbo.protocol.version}" timeout="${dubbo.protocol.timeout}" registry="registry" check="false"/> \n')),(0,o.kt)("p",null,"\u6d41\u7a0b\uff1a\u670d\u52a1\u7aef\u63d0\u4f9b\u63a5\u53e3\u4f9b\u5ba2\u6237\u7aef\u8c03\u7528\u3002\u7406\u8bba\u4e0a\u662f\u670d\u52a1\u7aef\u63d0\u4f9b\u7684\u63a5\u53e3\u5916\u4eba\u662f\u4e0d\u77e5\u9053\u7684\uff0c\u4e5f\u4e0d\u77e5\u9053\u9879\u76ee\u7684\u771f\u5b9e\u67b6\u6784\u6d41\u7a0b\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u6ce8\u610f\uff1a\u670d\u52a1\u7aef\u5ba2\u6237\u7aef\u7684\u533a\u5206"),(0,o.kt)("h3",{id:"5\u4ec0\u4e48\u662f\u5206\u5e03\u5f0f"},"5\u3001\u4ec0\u4e48\u662f\u5206\u5e03\u5f0f"),(0,o.kt)("p",null,"\u5206\u5e03\u5f0f\u6216\u8005\u8bf4 SOA \u5206\u5e03\u5f0f\u91cd\u8981\u7684\u5c31\u662f\u9762\u5411\u670d\u52a1\uff0c\u8bf4\u7b80\u5355\u7684\u5206\u5e03\u5f0f\u5c31\u662f\u6211\u4eec\u628a\u6574\u4e2a\u7cfb\u7edf\u62c6\u5206\u6210\u4e0d\u540c\u7684\u670d\u52a1\u7136\u540e\u5c06\u8fd9\u4e9b\u670d\u52a1\u653e\u5728\u4e0d\u540c\u7684\u670d\u52a1\u5668\u4e0a\u51cf\u8f7b\u5355\u4f53\u670d\u52a1\u7684\u538b\u529b\u63d0\u9ad8\u5e76\u53d1\u91cf\u548c\u6027\u80fd\u3002\u6bd4\u5982\u7535\u5546\u7cfb\u7edf\u53ef\u4ee5\u7b80\u5355\u5730\u62c6\u5206\u6210\u8ba2\u5355\u7cfb\u7edf\u3001\u5546\u54c1\u7cfb\u7edf\u3001\u767b\u5f55\u7cfb\u7edf\u7b49\u7b49\uff0c\u62c6\u5206\u4e4b\u540e\u7684\u6bcf\u4e2a\u670d\u52a1\u53ef\u4ee5\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u673a\u5668\u4e0a\uff0c\u5982\u679c\u67d0\u4e00\u4e2a\u670d\u52a1\u7684\u8bbf\u95ee\u91cf\u6bd4\u8f83\u5927\u7684\u8bdd\u4e5f\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u670d\u52a1\u540c\u65f6\u90e8\u7f72\u5728\u591a\u53f0\u673a\u5668\u4e0a\u3002"),(0,o.kt)("h2",{id:"\u4e8cdubbo-telnet"},"\u4e8c\u3001dubbo","-","telnet"),(0,o.kt)("h3",{id:"1\u8fde\u63a5-dubbo-\u670d\u52a1"},"1\u3001\u8fde\u63a5 dubbo \u670d\u52a1"),(0,o.kt)("p",null,"telnet ","[","ip] ","[\u7aef\u53e3]","\n\u4e3e\u4f8b\uff1atelnet 127.0.0.1 66666",(0,o.kt)("br",{parentName:"p"}),"\n","\u56de\u8f66\u540e\u5982\u679c\u663e\u793a \uff1aEscape character is '^]'.",(0,o.kt)("br",{parentName:"p"}),"\n","\u4ee3\u8868\u8fde\u63a5\u6210\u529f\uff0c\u6b63\u5728\u76d1\u542c dubbo \u670d\u52a1\u3002"),(0,o.kt)("h3",{id:"2\u67e5\u770b-dubbo-\u670d\u52a1"},"2\u3001\u67e5\u770b dubbo \u670d\u52a1"),(0,o.kt)("p",null,"\u4f7f\u7528 ls \u547d\u4ee4\uff0c\u67e5\u770b\u67e5\u770b\u8be5 ip \u7aef\u53e3\u4e0b\u7684\u6240\u6709\u670d\u52a1\u540d\u79f0",(0,o.kt)("br",{parentName:"p"}),"\n","\u67e5\u770b\u8be5 ip \u7aef\u53e3\u4e0b\u6240\u6709\u63a5\u53e3\uff1als",(0,o.kt)("br",{parentName:"p"}),"\n","\u67e5\u770b\u8be5 ip \u7aef\u53e3\u4e0b\u6240\u6709\u63a5\u53e3\u7684\u8be6\u7ec6\u4fe1\u606f\uff1als -l",(0,o.kt)("br",{parentName:"p"}),"\n","\u67e5\u770b\u67d0\u4e2a\u63a5\u53e3\u4e0b\u7684\u65b9\u6cd5\uff1als ","[\u63a5\u53e3\u540d]",(0,o.kt)("br",{parentName:"p"}),"\n","\u67e5\u770b\u67d0\u4e2a\u63a5\u53e3\u4e0b\u7684\u65b9\u6cd5\u7684\u8be6\u7ec6\u4fe1\u606f\uff1als -l ","[\u63a5\u53e3\u540d]",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e3e\u4f8b\uff1als -l com.dubbo.demo.UserService"),(0,o.kt)("h3",{id:"3invoke-\u8c03\u7528\u63a5\u53e3\u65b9\u6cd5"},"3\u3001invoke \u8c03\u7528\u63a5\u53e3\u65b9\u6cd5"),(0,o.kt)("p",null,"invoke ","[\u5b8c\u6574\u5305\u540d]",".","[\u63a5\u53e3\u540d]",".\u65b9\u6cd5\u540d",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e3e\u4f8b\uff1ainvoke com.dubbo.demo.UserService.findUserById(1L)",(0,o.kt)("br",{parentName:"p"}),"\n",'\u5982\u679c\u5bf9\u8c61\u91cc\u9762\u8fd8\u6709\u5bf9\u8c61\uff0c\u53ef\u80fd\u4f1a\u62a5\u8f6c\u6362\u5bf9\u8c61\u51fa\u9519\uff0cdubbo \u9ed8\u8ba4\u4f1a\u5e8f\u5217\u5316\u4e3a JSONObject \u5bf9\u8c61\uff0c\u91cc\u9762\u4e5f\u6307\u5b9a class \u5373\u53ef\uff0c\u5982\uff1ainvoke ls -l com.dubbo.demo.UserService.queryMethodDemo({"class":"com.demo.demoRequest","custNo":"123456","type":1})'),(0,o.kt)("h3",{id:"4count-\u7edf\u8ba1\u670d\u52a1\u8c03\u7528\u60c5\u51b5"},"4\u3001count \u7edf\u8ba1\u670d\u52a1\u8c03\u7528\u60c5\u51b5"),(0,o.kt)("p",null,"\u7edf\u8ba11\u6b21\u670d\u52a1\u4efb\u610f\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1acount XxxService",(0,o.kt)("br",{parentName:"p"}),"\n","\u7edf\u8ba110\u6b21\u670d\u52a1\u4efb\u610f\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1acount XxxService 10",(0,o.kt)("br",{parentName:"p"}),"\n","\u7edf\u8ba11\u6b21\u670d\u52a1\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1acount XxxService xxxMethod",(0,o.kt)("br",{parentName:"p"}),"\n","\u7edf\u8ba110\u6b21\u670d\u52a1\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1acount XxxService xxxMethod 10"),(0,o.kt)("h3",{id:"5trace-\u8ddf\u8e2a\u65b9\u6cd5"},"5\u3001trace \u8ddf\u8e2a\u65b9\u6cd5"),(0,o.kt)("p",null,"\u8ddf\u8e2a 1 \u6b21\u670d\u52a1\u4efb\u610f\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1atrace XxxService",(0,o.kt)("br",{parentName:"p"}),"\n","\u8ddf\u8e2a 10 \u6b21\u670d\u52a1\u4efb\u610f\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1atrace XxxService 10",(0,o.kt)("br",{parentName:"p"}),"\n","\u8ddf\u8e2a 1 \u6b21\u670d\u52a1\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1atrace XxxService xxxMethod",(0,o.kt)("br",{parentName:"p"}),"\n","\u8ddf\u8e2a 10 \u6b21\u670d\u52a1\u65b9\u6cd5\u7684\u8c03\u7528\u60c5\u51b5\uff1atrace XxxService xxxMethod 10"),(0,o.kt)("h3",{id:"6status-\u663e\u793a\u6c47\u603b\u72b6\u6001"},"6\u3001status \u663e\u793a\u6c47\u603b\u72b6\u6001"),(0,o.kt)("p",null,"\u8be5\u72b6\u6001\u5c06\u6c47\u603b\u6240\u6709\u8d44\u6e90\u7684\u72b6\u6001\uff0c\u5f53\u5168\u90e8 OK \u65f6\u5219\u663e\u793a OK\uff0c\u53ea\u8981\u6709\u4e00\u4e2a ERROR \u5219\u663e\u793a ERROR\uff0c\u53ea\u8981\u6709\u4e00\u4e2a WARN \u5219\u663e\u793a WARN\uff1astatus -l"))}d.isMDXComponent=!0}}]);