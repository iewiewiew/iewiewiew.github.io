"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,f=u["".concat(l,".").concat(k)]||u[k]||b[k]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,p={unversionedId:"DevOps/Kibana",id:"DevOps/Kibana",title:"Kibana",description:"[TOC]",source:"@site/docs/DevOps/Kibana.md",sourceDirName:"DevOps",slug:"/DevOps/Kibana",permalink:"/docs/DevOps/Kibana",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jfrog",permalink:"/docs/DevOps/Jfrog"},next:{title:"Tekton",permalink:"/docs/DevOps/Tekton"}},l={},c=[{value:"Kibana \u642d\u5efa",id:"kibana-\u642d\u5efa",level:2}],s={toc:c},u="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h1",{align:"center"},"Kibana"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,a.kt)("br",{parentName:"p"}),"\n","Date\uff1a2023.10.11",(0,a.kt)("br",{parentName:"p"}),"\n","Description\uff1a  ")),(0,a.kt)("p",null,"@todo \u672a\u5b89\u88c5\u6210\u529f"),(0,a.kt)("h2",{id:"kibana-\u642d\u5efa"},"Kibana \u642d\u5efa"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/downloads/kibana"},"kibana \u4e0b\u8f7d\u5730\u5740")),(0,a.kt)("p",null,"Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://artifacts.elastic.co/downloads/kibana/kibana-8.10.2-linux-x86_64.tar.gz\ntar -zxvf kibana-8.10.2-linux-x86_64.tar.gz\ncd kibana-8.10.2 && ./bin/kibana\n\n\u62a5\u9519\uff1aKibana should not be run as root.  Use --allow-root to continue.\n\u89e3\u51b3\uff1a./bin/kibana --allow-root\n")),(0,a.kt)("p",null,"Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker network create my-network\ndocker run -d --name kibana -p 5601:5601 --network my-network docker.elastic.co/kibana/kibana:7.15.1\n")),(0,a.kt)("p",null,"\u8bbf\u95ee\u5730\u5740\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:5601"},"http://127.0.0.1:5601")),(0,a.kt)("p",null,"\u68c0\u67e5 Kibana \u72b6\u6001",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:5601/status"},"http://127.0.0.1:5601/status"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:5601/api/status"},"http://127.0.0.1:5601/api/status")," \u8fd4\u56de JSON \u683c\u5f0f\u72b6\u6001\u4fe1\u606f"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKibana\u8fde\u63a5\u5141\u8bb8\u5728localhost\u4e0a\u7684Elasticsearch\u5b9e\u4f8b\u3002\u4e3a\u4e86\u8fde\u63a5\u5230\u4e00\u4e2a\u4e0d\u540c\u7684Elasticsearch\u5b9e\u4f8b\uff0c\u4fee\u6539kabana.yml\u4e2dElasticsearch\u7684URL\uff0c\u7136\u540e\u91cd\u542fKibana\u3002"))}b.isMDXComponent=!0}}]);