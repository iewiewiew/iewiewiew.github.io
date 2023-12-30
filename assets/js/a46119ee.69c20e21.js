"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2908],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,b=u["".concat(l,".").concat(d)]||u[d]||h[d]||c;return t?n.createElement(b,o(o({ref:r},i),{},{components:t})):n.createElement(b,o({ref:r},i))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<c;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4179:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const c={},o=void 0,s={unversionedId:"Kubernetes/Rancher Kubernetes \u7ba1\u7406\u5de5\u5177",id:"Kubernetes/Rancher Kubernetes \u7ba1\u7406\u5de5\u5177",title:"Rancher Kubernetes \u7ba1\u7406\u5de5\u5177",description:"[TOC]",source:"@site/docs/Kubernetes/Rancher Kubernetes \u7ba1\u7406\u5de5\u5177.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/Rancher Kubernetes \u7ba1\u7406\u5de5\u5177",permalink:"/docs/Kubernetes/Rancher Kubernetes \u7ba1\u7406\u5de5\u5177",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MiniKube \u8f7b\u91cf\u7ea7 Kubernetes",permalink:"/docs/Kubernetes/MiniKube \u8f7b\u91cf\u7ea7 Kubernetes"},next:{title:"k0s \u8f7b\u91cf\u7ea7 Kubernetes",permalink:"/docs/Kubernetes/k0s \u8f7b\u91cf\u7ea7 Kubernetes"}},l={},p=[{value:"\u4e00\u3001Rancher \u7b80\u4ecb",id:"\u4e00rancher-\u7b80\u4ecb",level:3},{value:"\u4e8c\u3001Rancher \u642d\u5efa",id:"\u4e8crancher-\u642d\u5efa",level:3},{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:4},{value:"Helm \u5b89\u88c5\uff08\u5f85\u5b9e\u8df5\uff09",id:"helm-\u5b89\u88c5\u5f85\u5b9e\u8df5",level:4}],i={toc:p},u="wrapper";function h(e){let{components:r,...c}=e;return(0,a.kt)(u,(0,n.Z)({},i,c,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h1",{align:"center"},"Rancher Kubernetes \u7ba1\u7406\u5de5\u5177"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,a.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.10.01",(0,a.kt)("br",{parentName:"p"}),"\n","Description\uff1aRancher")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.rancher.cn/"},"Rancher \u5b98\u7f51"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"http://docs.rancher.cn/"},"Rancher \u6587\u6863"),"  "),(0,a.kt)("h3",{id:"\u4e00rancher-\u7b80\u4ecb"},"\u4e00\u3001Rancher \u7b80\u4ecb"),(0,a.kt)("p",null,"Rancher \u662f\u4e00\u4e2a Kubernetes \u7ba1\u7406\u5de5\u5177\uff0c\u8ba9\u4f60\u80fd\u5728\u4efb\u4f55\u5730\u65b9\u548c\u4efb\u4f55\u63d0\u4f9b\u5546\u4e0a\u90e8\u7f72\u548c\u8fd0\u884c\u96c6\u7fa4\u3002"),(0,a.kt)("h3",{id:"\u4e8crancher-\u642d\u5efa"},"\u4e8c\u3001Rancher \u642d\u5efa"),(0,a.kt)("h4",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8fd0\u884c\u5bb9\u5668\ndocker run --privileged \\\n--name rancher \\\n-d --restart=unless-stopped \\\n-p 8080:80 \\\n-p 8443:443 \\\n-v $HOME/docker/rancher:/var/lib/rancher \\\nrancher/rancher\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8080\nhttps://127.0.0.1:8443/dashboard/auth/login\n\n\u67e5\u770b\u5bc6\u7801 \u6ce8\uff1a\u5982\u679c\u65e0\u6cd5\u67e5\u770b\u5bc6\u7801\uff0c\u53ef\u4ee5\u9009\u62e9\u91cd\u7f6e\u5bc6\u7801\ndocker logs  <\u5bb9\u5668 ID>  2>&1 | grep "Bootstrap Password:"\n\n\u91cd\u7f6e\u5bc6\u7801 \u5bc6\u7801\uff1a123456\ndocker exec -it <\u5bb9\u5668 ID> reset-password <password>\n')),(0,a.kt)("h4",{id:"helm-\u5b89\u88c5\u5f85\u5b9e\u8df5"},"Helm \u5b89\u88c5\uff08\u5f85\u5b9e\u8df5\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n\nkubectl create namespace cattle-system\n\nhelm install rancher ./rancher-2.7.0.tgz --namespace cattle-system  --set hostname=vms81.liruilongs.github.io --set ingress.tls.source=secret  --set useBundledSystemChart=true\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8415).Z,width:"1506",height:"744"})))}h.isMDXComponent=!0},8415:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/Rancher-42fcb8b3d202625d0d4ed560603597aa.png"}}]);