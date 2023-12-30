"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,d=c["".concat(o,".").concat(m)]||c[m]||v[m]||l;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,p={unversionedId:"DevOps/DevOps",id:"DevOps/DevOps",title:"DevOps",description:"[TOC]",source:"@site/docs/DevOps/DevOps.md",sourceDirName:"DevOps",slug:"/DevOps/",permalink:"/docs/DevOps/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5411\u91cf\u6570\u636e\u5e93",permalink:"/docs/Database/\u5411\u91cf\u6570\u636e\u5e93"},next:{title:"1Panel",permalink:"/docs/DevOps/1Panel"}},o={},u=[{value:"\u4e00\u3001DevOps",id:"\u4e00devops",level:2},{value:"\u4e8c\u3001CICD",id:"\u4e8ccicd",level:2},{value:"\u6301\u7eed\u96c6\u6210\uff08CI\uff0cContinuous integration\uff09",id:"\u6301\u7eed\u96c6\u6210cicontinuous-integration",level:3},{value:"\u6301\u7eed\u4ea4\u4ed8\uff08CD\uff0cContinuous delivery\uff09",id:"\u6301\u7eed\u4ea4\u4ed8cdcontinuous-delivery",level:3},{value:"\u6301\u7eed\u90e8\u7f72\uff08CD\uff0ccontinuous deployment\uff09",id:"\u6301\u7eed\u90e8\u7f72cdcontinuous-deployment",level:3},{value:"\u4e09\u3001\u4e91\u8ba1\u7b97",id:"\u4e09\u4e91\u8ba1\u7b97",level:2},{value:"IaaS\uff08Infrastructure as a Service\uff09\uff0c\u5373\u57fa\u7840\u8bbe\u65bd\u5373\u670d\u52a1\u3002",id:"iaasinfrastructure-as-a-service\u5373\u57fa\u7840\u8bbe\u65bd\u5373\u670d\u52a1",level:3},{value:"PaaS\uff08Platform as a Service\uff09\uff0c\u662f\u6307\u5e73\u53f0\u5373\u670d\u52a1\u3002",id:"paasplatform-as-a-service\u662f\u6307\u5e73\u53f0\u5373\u670d\u52a1",level:3},{value:"SaaS\uff08Software as a Service\uff09\uff0c\u610f\u601d\u4e3a\u8f6f\u4ef6\u5373\u670d\u52a1\uff0c\u5373\u901a\u8fc7\u7f51\u7edc\u63d0\u4f9b\u8f6f\u4ef6\u670d\u52a1\u3002",id:"saassoftware-as-a-service\u610f\u601d\u4e3a\u8f6f\u4ef6\u5373\u670d\u52a1\u5373\u901a\u8fc7\u7f51\u7edc\u63d0\u4f9b\u8f6f\u4ef6\u670d\u52a1",level:3},{value:"\u56db\u3001\u6301\u7eed\u96c6\u6210\u5de5\u5177",id:"\u56db\u6301\u7eed\u96c6\u6210\u5de5\u5177",level:2},{value:"\u4e94\u3001\u5236\u54c1\u5e93\u548c\u4ee3\u7801\u5e93",id:"\u4e94\u5236\u54c1\u5e93\u548c\u4ee3\u7801\u5e93",level:2},{value:"\u516d\u3001\u4ee3\u7801\u95e8\u7981",id:"\u516d\u4ee3\u7801\u95e8\u7981",level:2},{value:"\u4e03\u3001\u77e5\u8bc6\u788e\u7247",id:"\u4e03\u77e5\u8bc6\u788e\u7247",level:2},{value:"POC",id:"poc",level:3}],s={toc:u},c="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("h1",{align:"center"},"DevOps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,r.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.08.17",(0,r.kt)("br",{parentName:"p"}),"\n","Description\uff1aDevOps  ")),(0,r.kt)("h2",{id:"\u4e00devops"},"\u4e00\u3001DevOps"),(0,r.kt)("p",null,"DevOps\uff08Development \u548cOperations \u7684\u7ec4\u5408\u8bcd\uff09\u662f\u4e00\u7ec4\u8fc7\u7a0b\u3001\u65b9\u6cd5\u4e0e\u7cfb\u7edf\u7684\u7edf\u79f0\uff0c\u7528\u4e8e\u4fc3\u8fdb\u5f00\u53d1\uff08\u5e94\u7528\u7a0b\u5e8f/\u8f6f\u4ef6\u5de5\u7a0b\uff09\u3001\u6280\u672f\u8fd0\u8425\u548c\u8d28\u91cf\u4fdd\u969c\uff08QA\uff09\u90e8\u95e8\u4e4b\u95f4\u7684\u6c9f\u901a\u3001\u534f\u4f5c\u4e0e\u6574\u5408\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","DevOps \u7684\u57fa\u7840\u6838\u5fc3\u662f CICD\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","CICD \u7684\u57fa\u7840\u6838\u5fc3\u662f\u81ea\u52a8\u5316\u3002"),(0,r.kt)("h2",{id:"\u4e8ccicd"},"\u4e8c\u3001CICD"),(0,r.kt)("h3",{id:"\u6301\u7eed\u96c6\u6210cicontinuous-integration"},"\u6301\u7eed\u96c6\u6210\uff08CI\uff0cContinuous integration\uff09"),(0,r.kt)("p",null,"\u6301\u7eed\u96c6\u6210\u6307\u7684\u662f\uff0c\u9891\u7e41\u5730\uff08\u4e00\u5929\u591a\u6b21\uff09\u5c06\u4ee3\u7801\u96c6\u6210\u5230\u4e3b\u5e72\u3002\u5b83\u7684\u597d\u5904\u4e3b\u8981\u6709\u4e24\u4e2a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\uff081\uff09\u5feb\u901f\u53d1\u73b0\u9519\u8bef\u3002\u6bcf\u5b8c\u6210\u4e00\u70b9\u66f4\u65b0\uff0c\u5c31\u96c6\u6210\u5230\u4e3b\u5e72\uff0c\u53ef\u4ee5\u5feb\u901f\u53d1\u73b0\u9519\u8bef\uff0c\u5b9a\u4f4d\u9519\u8bef\u4e5f\u6bd4\u8f83\u5bb9\u6613\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\uff082\uff09\u9632\u6b62\u5206\u652f\u5927\u5e45\u504f\u79bb\u4e3b\u5e72\u3002\u5982\u679c\u4e0d\u662f\u7ecf\u5e38\u96c6\u6210\uff0c\u4e3b\u5e72\u53c8\u5728\u4e0d\u65ad\u66f4\u65b0\uff0c\u4f1a\u5bfc\u81f4\u4ee5\u540e\u96c6\u6210\u7684\u96be\u5ea6\u53d8\u5927\uff0c\u751a\u81f3\u96be\u4ee5\u96c6\u6210\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6301\u7eed\u96c6\u6210\u7684\u76ee\u7684\uff0c\u5c31\u662f\u8ba9\u4ea7\u54c1\u53ef\u4ee5\u5feb\u901f\u8fed\u4ee3\uff0c\u540c\u65f6\u8fd8\u80fd\u4fdd\u6301\u9ad8\u8d28\u91cf\u3002\u5b83\u7684\u6838\u5fc3\u63aa\u65bd\u662f\uff0c\u4ee3\u7801\u96c6\u6210\u5230\u4e3b\u5e72\u4e4b\u524d\uff0c\u5fc5\u987b\u901a\u8fc7\u81ea\u52a8\u5316\u6d4b\u8bd5\u3002\u53ea\u8981\u6709\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u5931\u8d25\uff0c\u5c31\u4e0d\u80fd\u96c6\u6210\u3002  "),(0,r.kt)("h3",{id:"\u6301\u7eed\u4ea4\u4ed8cdcontinuous-delivery"},"\u6301\u7eed\u4ea4\u4ed8\uff08CD\uff0cContinuous delivery\uff09"),(0,r.kt)("p",null,"\u6301\u7eed\u4ea4\u4ed8\u6307\u7684\u662f\uff0c\u9891\u7e41\u5730\u5c06\u8f6f\u4ef6\u7684\u65b0\u7248\u672c\uff0c\u4ea4\u4ed8\u7ed9\u8d28\u91cf\u56e2\u961f\u6216\u8005\u7528\u6237\uff0c\u4ee5\u4f9b\u8bc4\u5ba1\u3002\u5982\u679c\u8bc4\u5ba1\u901a\u8fc7\uff0c\u4ee3\u7801\u5c31\u8fdb\u5165\u751f\u4ea7\u9636\u6bb5\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6301\u7eed\u4ea4\u4ed8\u53ef\u4ee5\u770b\u4f5c\u6301\u7eed\u96c6\u6210\u7684\u4e0b\u4e00\u6b65\u3002\u5b83\u5f3a\u8c03\u7684\u662f\uff0c\u4e0d\u7ba1\u600e\u4e48\u66f4\u65b0\uff0c\u8f6f\u4ef6\u662f\u968f\u65f6\u968f\u5730\u53ef\u4ee5\u4ea4\u4ed8\u7684\u3002  "),(0,r.kt)("h3",{id:"\u6301\u7eed\u90e8\u7f72cdcontinuous-deployment"},"\u6301\u7eed\u90e8\u7f72\uff08CD\uff0ccontinuous deployment\uff09"),(0,r.kt)("p",null,"\u6301\u7eed\u90e8\u7f72\u662f\u6301\u7eed\u4ea4\u4ed8\u7684\u4e0b\u4e00\u6b65\uff0c\u6307\u7684\u662f\u4ee3\u7801\u901a\u8fc7\u8bc4\u5ba1\u4ee5\u540e\uff0c\u81ea\u52a8\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6301\u7eed\u90e8\u7f72\u7684\u76ee\u6807\u662f\uff0c\u4ee3\u7801\u5728\u4efb\u4f55\u65f6\u523b\u90fd\u662f\u53ef\u90e8\u7f72\u7684\uff0c\u53ef\u4ee5\u8fdb\u5165\u751f\u4ea7\u9636\u6bb5\u3002  "),(0,r.kt)("h2",{id:"\u4e09\u4e91\u8ba1\u7b97"},"\u4e09\u3001\u4e91\u8ba1\u7b97"),(0,r.kt)("p",null,"\u6839\u636e\u670d\u52a1\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u4e91\u8ba1\u7b97\u53ef\u4ee5\u5206\u4e3a\u4e09\u7c7b\uff0c\u5373\u57fa\u7840\u8bbe\u65bd\u5373\u670d\u52a1(IaaS)\u3001\u5e73\u53f0\u5373\u670d\u52a1(PaaS)\u548c\u8f6f\u4ef6\u5373\u670d\u52a1(SaaS)\u3002\u8fd93\u79cd\u4e91\u8ba1\u7b97\u670d\u52a1\u6709\u65f6\u79f0\u4e3a\u4e91\u8ba1\u7b97\u5806\u6808\uff0c\u56e0\u4e3a\u5b83\u4eec\u6784\u5efa\u5806\u6808\uff0c\u5b83\u4eec\u4f4d\u4e8e\u5f7c\u6b64\u4e4b\u4e0a\u3002"),(0,r.kt)("h3",{id:"iaasinfrastructure-as-a-service\u5373\u57fa\u7840\u8bbe\u65bd\u5373\u670d\u52a1"},"IaaS\uff08Infrastructure as a Service\uff09\uff0c\u5373\u57fa\u7840\u8bbe\u65bd\u5373\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u6307\u628a IT \u57fa\u7840\u8bbe\u65bd\u4f5c\u4e3a\u4e00\u79cd\u670d\u52a1\u901a\u8fc7\u7f51\u7edc\u5bf9\u5916\u63d0\u4f9b\uff0c\u5e76\u6839\u636e\u7528\u6237\u5bf9\u8d44\u6e90\u7684\u5b9e\u9645\u4f7f\u7528\u91cf\u6216\u5360\u7528\u91cf\u8fdb\u884c\u8ba1\u8d39\u7684\u4e00\u79cd\u670d\u52a1\u6a21\u5f0f\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6709\u4e86 IaaS \u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u63d0\u4f9b\u7684\u57fa\u7840\u8bbe\u65bd\u4e0a\u90e8\u7f72\u548c\u8fd0\u884c\u4efb\u4f55\u8f6f\u4ef6\uff0c\u5305\u62ec\u64cd\u4f5c\u7cfb\u7edf\u548c\u5e94\u7528\u8f6f\u4ef6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7528\u6237\u6ca1\u6709\u6743\u9650\u7ba1\u7406\u548c\u8bbf\u95ee\u5e95\u5c42\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5982\u670d\u52a1\u5668\u3001\u4ea4\u6362\u673a\u3001\u786c\u76d8\u7b49\uff0c\u4f46\u662f\u6709\u6743\u7ba1\u7406\u64cd\u4f5c\u7cfb\u7edf\u3001\u5b58\u50a8\u5185\u5bb9\uff0c\u53ef\u4ee5\u5b89\u88c5\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\uff0c\u751a\u81f3\u662f\u6709\u6743\u7ba1\u7406\u7f51\u7edc\u7ec4\u4ef6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7b80\u5355\u7684\u8bf4\u7528\u6237\u4f7f\u7528 IaaS\uff0c\u6709\u6743\u7ba1\u7406\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u4e0a\u7684\u4e00\u5207\u529f\u80fd\u3002\u6211\u4eec\u5e38\u89c1\u7684 IaaS \u670d\u52a1\u6709\u865a\u62df\u673a\u3001\u865a\u62df\u7f51\u7edc\u3001\u4ee5\u53ca\u5b58\u50a8\u3002"),(0,r.kt)("h3",{id:"paasplatform-as-a-service\u662f\u6307\u5e73\u53f0\u5373\u670d\u52a1"},"PaaS\uff08Platform as a Service\uff09\uff0c\u662f\u6307\u5e73\u53f0\u5373\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u662f\u4e00\u79cd\u4e91\u8ba1\u7b97\u670d\u52a1\uff0c\u63d0\u4f9b\u8fd0\u7b97\u5e73\u53f0\u4e0e\u89e3\u51b3\u65b9\u6848\u670d\u52a1\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","PaaS \u7ed9\u7528\u6237\u63d0\u4f9b\u7684\u80fd\u529b\u662f\u4f7f\u7528\u7531\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u652f\u6301\u7684\u7f16\u7a0b\u8bed\u8a00\u3001\u5e93\u3001\u670d\u52a1\u4ee5\u53ca\u5f00\u53d1\u5de5\u5177\u6765\u521b\u5efa\u3001\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\u5e76\u90e8\u7f72\u5728\u76f8\u5173\u7684\u57fa\u7840\u8bbe\u65bd\u4e0a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7528\u6237\u65e0\u9700\u7ba1\u7406\u5e95\u5c42\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5305\u62ec\u7f51\u7edc\u3001\u670d\u52a1\u5668\uff0c\u64cd\u4f5c\u7cfb\u7edf\u6216\u8005\u5b58\u50a8\u3002\u4ed6\u4eec\u53ea\u80fd\u63a7\u5236\u90e8\u7f72\u5728\u57fa\u7840\u8bbe\u65bd\u4e2d\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6240\u6258\u7ba1\u7684\u73af\u5883\u7684\u53ef\u914d\u7f6e\u53c2\u6570\u3002"),(0,r.kt)("h3",{id:"saassoftware-as-a-service\u610f\u601d\u4e3a\u8f6f\u4ef6\u5373\u670d\u52a1\u5373\u901a\u8fc7\u7f51\u7edc\u63d0\u4f9b\u8f6f\u4ef6\u670d\u52a1"},"SaaS\uff08Software as a Service\uff09\uff0c\u610f\u601d\u4e3a\u8f6f\u4ef6\u5373\u670d\u52a1\uff0c\u5373\u901a\u8fc7\u7f51\u7edc\u63d0\u4f9b\u8f6f\u4ef6\u670d\u52a1\u3002"),(0,r.kt)("p",null,"SaaS \u5e73\u53f0\u4f9b\u5e94\u5546\u5c06\u5e94\u7528\u8f6f\u4ef6\u7edf\u4e00\u90e8\u7f72\u5728\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u5ba2\u6237\u53ef\u4ee5\u6839\u636e\u5de5\u4f5c\u5b9e\u9645\u9700\u6c42\uff0c\u901a\u8fc7\u4e92\u8054\u7f51\u5411\u5382\u5546\u5b9a\u8d2d\u6240\u9700\u7684\u5e94\u7528\u8f6f\u4ef6\u670d\u52a1\uff0c\u6309\u5b9a\u8d2d\u7684\u670d\u52a1\u591a\u5c11\u548c\u65f6\u95f4\u957f\u77ed\u5411\u5382\u5546\u652f\u4ed8\u8d39\u7528\uff0c\u5e76\u901a\u8fc7\u4e92\u8054\u7f51\u83b7\u5f97 SaaS \u5e73\u53f0\u4f9b\u5e94\u5546\u63d0\u4f9b\u7684\u670d\u52a1\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","SaaS \u7ed9\u7528\u6237\u63d0\u4f9b\u7684\u80fd\u529b\u662f\u4f7f\u7528\u5728\u4e91\u57fa\u7840\u67b6\u6784\u4e0a\u8fd0\u884c\u7684\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u53ef\u4ee5\u901a\u8fc7\u8f7b\u91cf\u7684\u5ba2\u6237\u7aef\u63a5\u53e3\uff08\u8bf8\u5982 web \u6d4f\u89c8\u5668\uff08\u4f8b\u5982\uff0c\u57fa\u4e8e web \u7684\u7535\u5b50\u90ae\u4ef6\uff09\uff09\u6216\u7a0b\u5e8f\u63a5\u53e3\u4ece\u5404\u79cd\u5ba2\u6237\u7aef\u8bbe\u5907\u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7528\u6237\u65e0\u9700\u7ba1\u7406\u6216\u63a7\u5236\u5e95\u5c42\u4e91\u57fa\u7840\u67b6\u6784\uff0c\u5305\u62ec\u7f51\u7edc\uff0c\u670d\u52a1\u5668\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5b58\u50a8\u751a\u81f3\u5355\u72ec\u7684\u5e94\u7528\u7a0b\u5e8f\u529f\u80fd\uff0c\u53ef\u80fd\u7684\u4f8b\u5916\u662f\u6709\u9650\u7684\u7528\u6237\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u8bbe\u7f6e\u3002  "),(0,r.kt)("p",null,"\u4e91\u8ba1\u7b97\u7684\u672c\u8d28-\u670d\u52a1\u3002\u4e91\u7684\u6982\u5ff5\u8d77\u6e90\u4e8e\u201c\u5171\u4eab\u201d\uff0c\u7c7b\u4f3c\u4e8e\u7ec4\u7ec7\u5185\u7684\u6210\u5458\u5171\u4eab\u4e00\u4e2a\u8d85\u7ea7\u8ba1\u7b97\u673a\uff0c\u8d85\u7ea7\u8ba1\u7b97\u673a\u5c31\u662f\u4e2a\u201c\u8d44\u6e90\u6c60\u201d\uff0c\u8bf4\u767d\u4e86\u5c31\u662f\u4e00\u5806\u670d\u52a1\u5668\u8d44\u6e90\u3002"),(0,r.kt)("h2",{id:"\u56db\u6301\u7eed\u96c6\u6210\u5de5\u5177"},"\u56db\u3001\u6301\u7eed\u96c6\u6210\u5de5\u5177"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jenkins"),(0,r.kt)("li",{parentName:"ul"},"Gitee Go"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://flow.aliyun.com"},"\u963f\u91cc\u4e91\u6548")),(0,r.kt)("li",{parentName:"ul"},"\u817e\u8baf coding"),(0,r.kt)("li",{parentName:"ul"},"\u5609\u4e3a\u84dd\u9cb8"),(0,r.kt)("li",{parentName:"ul"},"\u6781\u72d0"),(0,r.kt)("li",{parentName:"ul"},"\u534e\u4e3a DevCloud"),(0,r.kt)("li",{parentName:"ul"},"\u767e\u5ea6\u6548\u7387\u4e91"),(0,r.kt)("li",{parentName:"ul"},"Ones.AI"),(0,r.kt)("li",{parentName:"ul"},"AzureDevOps")),(0,r.kt)("h2",{id:"\u4e94\u5236\u54c1\u5e93\u548c\u4ee3\u7801\u5e93"},"\u4e94\u3001\u5236\u54c1\u5e93\u548c\u4ee3\u7801\u5e93"),(0,r.kt)("p",null,"1\u3001\u5236\u54c1\u5e93\uff1a\u5236\u54c1\u5e93\u7528\u6765\u7edf\u4e00\u7ba1\u7406\u4e0d\u540c\u683c\u5f0f\u7684\u8f6f\u4ef6\u5236\u54c1\u3002 \u9664\u4e86\u57fa\u672c\u7684\u5b58\u50a8\u529f\u80fd\uff0c\u8fd8\u63d0\u4f9b\u4e86\u7248\u672c\u63a7\u5236\u3001\u8bbf\u95ee\u63a7\u5236\u3001\u5b89\u5168\u626b\u63cf\u3001\u4f9d\u8d56\u5206\u6790\u7b49\u91cd\u8981\u529f\u80fd\uff0c\u662f\u4e00\u79cd\u4f01\u4e1a\u5904\u7406\u8f6f\u4ef6\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u6240\u6709\u5305\u7c7b\u578b\u7684\u6807\u51c6\u5316\u65b9\u5f0f\u3002 \u5e76\u4e14\u5236\u54c1\u662f\u6307\u7531\u6e90\u7801\u7f16\u8bd1\u6253\u5305\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4e0d\u540c\u7684\u5f00\u53d1\u8bed\u8a00\u5bf9\u5e94\u7740\u4e0d\u540c\u683c\u5f0f\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8fd9\u4e9b\u4e8c\u8fdb\u5236\u901a\u5e38\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u5728\u670d\u52a1\u5668\u4e0a\u3002\n\u4e3b\u6d41\u5236\u54c1\u5e93\u7c7b\u578b\uff1aGeneric\u3001Docker\u3001Maven\u3001Helm\u3001Npm\u3001PyPI\u3001Composer\u3001RPM \u7b49\u3002"),(0,r.kt)("p",null,"2\u3001\u4ee3\u7801\u5e93\uff1a\u4ee3\u7801\u5e93\u5c31\u662f\u7f16\u8bd1\u6210 DLL \u7684\u7a0b\u5e8f\u96c6\uff0c\u5b83\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u5c06\u4ee3\u7801\u5c01\u88c5\u5728\u5355\u4e2a\u6587\u4ef6\u4e2d\u3001\u5141\u8bb8\u7ee7\u627f\u548c\u4fee\u6539\u8fd9\u4e9b\u6587\u4ef6\u5e76\u5141\u8bb8\u5206\u53d1\u79bb\u6563\u7684\u529f\u80fd\u5355\u5143\u7684\u53ef\u79fb\u690d\u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"\u516d\u4ee3\u7801\u95e8\u7981"},"\u516d\u3001\u4ee3\u7801\u95e8\u7981"),(0,r.kt)("p",null,"\u4ee3\u7801\u95e8\u7981\u5219\u662f\u5728\u4ee3\u7801\u5408\u5e76\u4e4b\u524d\u5c31\u9a8c\u8bc1\u4ee3\u7801\u6765\u4fdd\u62a4\u4e3b\u5e72\u5206\u652f\u7684\u5b8c\u6574\u6027\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4fdd\u62a4\u4e3b\u5206\u652f\u4ee3\u7801\u907f\u514d\u56e0\u5408\u7801\u5bfc\u81f4\u7684\u6784\u5efa\u4e2d\u65ad\uff0c\u4ee5\u786e\u4fdd master \u5206\u652f\u4ee3\u7801\u59cb\u7ec8\u662f\u53ef\u90e8\u7f72\u7684\u3002"),(0,r.kt)("h2",{id:"\u4e03\u77e5\u8bc6\u788e\u7247"},"\u4e03\u3001\u77e5\u8bc6\u788e\u7247"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://uejms.fit2cloud.com/core/download/"},"JumpServer \u5ba2\u6237\u7aef\u4e0b\u8f7d")),(0,r.kt)("h3",{id:"poc"},"POC"),(0,r.kt)("p",null,"\u5728\u6280\u672f\u9886\u57df\u4e2d\uff0cPOC\u901a\u5e38\u662f\u6307\u201cProof of Concept\u201d\uff08\u6982\u5ff5\u9a8c\u8bc1\uff09\u7684\u7f29\u5199\u3002\u6982\u5ff5\u9a8c\u8bc1\u662f\u6307\u4e3a\u4e86\u8bc1\u660e\u67d0\u4e2a\u60f3\u6cd5\u3001\u6982\u5ff5\u6216\u8005\u6280\u672f\u7684\u53ef\u884c\u6027\u800c\u8fdb\u884c\u7684\u5b9e\u9a8c\u6216\u9879\u76ee\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.alauda.cn/"},"\u7075\u96c0\u4e91")))}v.isMDXComponent=!0}}]);