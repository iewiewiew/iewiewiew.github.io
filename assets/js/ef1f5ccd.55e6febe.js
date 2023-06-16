"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},i=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),c=s(r),i=a,k=c["".concat(l,".").concat(i)]||c[i]||p[i]||o;return r?n.createElement(k,u(u({ref:t},d),{},{components:r})):n.createElement(k,u({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=i;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b[c]="string"==typeof e?e:a,u[1]=b;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}i.displayName="MDXCreateElement"},1774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>b,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},u=void 0,b={unversionedId:"Kubernetes/Kuboard Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177",id:"Kubernetes/Kuboard Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177",title:"Kuboard Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177",description:"[TOC]",source:"@site/docs/Kubernetes/Kuboard Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/Kuboard Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177",permalink:"/docs/Kubernetes/Kuboard Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u5bb9\u5668\u7f16\u6392",permalink:"/docs/Kubernetes/Kubernetes \u5bb9\u5668\u7f16\u6392"},next:{title:"MiniKube \u8f7b\u91cf\u7ea7 Kubernetes",permalink:"/docs/Kubernetes/MiniKube \u8f7b\u91cf\u7ea7 Kubernetes"}},l={},s=[{value:"Kuboard \u7b80\u4ecb",id:"kuboard-\u7b80\u4ecb",level:3},{value:"Kuboard \u642d\u5efa",id:"kuboard-\u642d\u5efa",level:2}],d={toc:s},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h1",{align:"center"},"Kuboard Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua\nDate\uff1a2022.10.02\nDescription\uff1a")),(0,a.kt)("h3",{id:"kuboard-\u7b80\u4ecb"},"Kuboard \u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kuboard.cn/overview/"},"Kuboard\u7b80\u4ecb"),"*\nKuboard\uff0c\u662f\u4e00\u6b3e\u514d\u8d39\u7684 Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177\uff0cKuboard \u529b\u56fe\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5728 Kubernetes \u4e0a\u843d\u5730\u5fae\u670d\u52a1\u3002\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u7ed3\u5408\u5df2\u6709\u6216\u65b0\u5efa\u7684\u4ee3\u7801\u4ed3\u5e93\u3001\u955c\u50cf\u4ed3\u5e93\u3001CI/CD\u5de5\u5177\u7b49\uff0c\u53ef\u4ee5\u4fbf\u6377\u7684\u642d\u5efa\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684 Kubernetes \u5bb9\u5668\u4e91\u5e73\u53f0\uff0c\u8f7b\u677e\u7ba1\u7406\u548c\u8fd0\u884c\u4e91\u539f\u751f\u5e94\u7528\u3002\n\u6837\u4f8b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://demo.kuboard.cn"},"https://demo.kuboard.cn"),(0,a.kt)("br",{parentName:"p"}),"\n","\u7528 \u6237\uff1ademo",(0,a.kt)("br",{parentName:"p"}),"\n","\u5bc6 \u7801\uff1ademo123"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7605).Z,width:"3024",height:"1666"})),(0,a.kt)("h2",{id:"kuboard-\u642d\u5efa"},"Kuboard \u642d\u5efa"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kuboard.cn/install/v3/install-in-k8s.html#%E5%AE%89%E8%A3%85"},"Kuboard \u5b89\u88c5\u6559\u7a0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\u3001\u5b89\u88c5 Kuboard\nkubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml\n\n2\u3001\u8bbf\u95ee Kuboard\n\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u94fe\u63a5 http://127.0.0.1:30080, \u8f93\u5165\u521d\u59cb\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u5e76\u767b\u5f55\n\u7528\u6237\u540d\uff1a admin\n\u5bc6\u7801\uff1a Kuboard123\n\n3\u3001\u8e29\u5751\n\u6267\u884c\uff1akubectl get pods -n kuboard\n\u5982\u679c\u7ed3\u679c\u4e2d\u6ca1\u6709\u51fa\u73b0 kuboard-etcd-xxxxx \u7684\u5bb9\u5668, \u5c31\u6267\u884c\uff1akubectl label nodes docker-desktop k8s.kuboard.cn/role=etcd \n\n4\u3001\u521b\u5efa\u96c6\u7fa4\uff0c\u767b\u9646kuboard\u62ff\u5230\u5982\u4e0b\u547d\u4ee4\ncurl -k 'http://127.0.0.1:30080/kuboard-api/cluster/default/kind/KubernetesCluster/default/resource/installAgentToKubernetes?token=0vPAhlKn6zIcNfvDsUBKX7t64yV4R46d' > kuboard-agent.yaml\n\nkubectl apply -f ./kuboard-agent.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.3.3\u3001Kuboard \u5220\u9664")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1\u3001\u67e5\u8be2pod\nkubectl get pods -n kuboard\nkubectl get pods --all-namespaces | grep "kuboard"\n\n2\u3001\u5220\u9664pod\nkubectl delete pods kuboard-etcd-lmtz8 --ns=kuboard\n\n3\u3001\u67e5\u8be2service\nkubectl get service -A\n\n4\u3001\u5220\u9664service\nkubectl delete service kuboard --ns=kube-system\n\n5\u3001\u5378\u8f7dkuboard\nkubectl delete -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml\n\n6\u3001\u5220\u9664ns\u4e0b\u6240\u6709\u8d44\u6e90\nkubectl delete ns kuboard --force --grace-period=0\nkubectl get ns kuboard -o json > kuboard.json\uff0c\u5c06finalizers\u5b57\u6bb5\u53bb\u6389\nkubectl proxy --port=8002\ncurl -k -H "Content-Type: application/json" -X PUT --data-binary @kuboard.json http://127.0.0.1:8002/api/v1/namespaces/kuboard/finalize\n')))}p.isMDXComponent=!0},7605:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Kuboard-8e62a2fc8ee416513b50c9e1c7b6f7a5.png"}}]);