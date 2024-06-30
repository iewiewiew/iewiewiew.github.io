"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=c,k=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[p]="string"==typeof e?e:c,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7462),c=(n(7294),n(3905));const o={},l=void 0,u={unversionedId:"Kubernetes/\u7ec8\u7aef\u767b\u5f55 k8s",id:"Kubernetes/\u7ec8\u7aef\u767b\u5f55 k8s",title:"\u7ec8\u7aef\u767b\u5f55 k8s",description:"[TOC]",source:"@site/docs/Kubernetes/\u7ec8\u7aef\u767b\u5f55 k8s.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/\u7ec8\u7aef\u767b\u5f55 k8s",permalink:"/docs/Kubernetes/\u7ec8\u7aef\u767b\u5f55 k8s",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes_Other",permalink:"/docs/Kubernetes/Kubernetes_Other"},next:{title:"Linux",permalink:"/docs/Linux/"}},a={},s=[{value:"1\u3001\u5b89\u88c5 kubectl",id:"1\u5b89\u88c5-kubectl",level:3},{value:"2\u3001\u914d\u7f6e",id:"2\u914d\u7f6e",level:3},{value:"3\u3001\u6dfb\u52a0\u811a\u672c",id:"3\u6dfb\u52a0\u811a\u672c",level:3}],i={toc:s},p="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"[TOC]"),(0,c.kt)("h1",{align:"center"},"\u7ec8\u7aef\u767b\u5f55 k8s"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,c.kt)("br",{parentName:"p"}),"\n","Date\uff1a2023.05.31",(0,c.kt)("br",{parentName:"p"}),"\n","Description\uff1a")),(0,c.kt)("h3",{id:"1\u5b89\u88c5-kubectl"},"1\u3001\u5b89\u88c5 kubectl"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'\u4e0b\u8f7d\ncurl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n\n\u5b89\u88c5\nsudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n\n\u9a8c\u8bc1\nkubectl -h\n')),(0,c.kt)("h3",{id:"2\u914d\u7f6e"},"2\u3001\u914d\u7f6e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u67e5\u770b\u4e0a\u4e0b\u6587\u83b7\u53d6<cluster_name>\nkubectl config current-context\n\u4e3e\u4f8b\uff1a<cluster_name>=default\n\n\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\u83b7\u53d6<cluster_ip>\nkubectl cluster-info\n\u4e3e\u4f8b\uff1a<cluster_ip>=127.0.0.1\n\n\u83b7\u53d6<username>\nkubectl config view --minify --output 'jsonpath={..name}'\n\u4e3e\u4f8b\uff1a<username>=default\n\n\u83b7\u53d6<token>\nk3s kubectl -n kubernetes-dashboard create token admin-user\n\n\u83b7\u53d6\u4e0a\u4e0b\u6587\u5217\u8868\nkubectl config get-contexts\n\n\u914d\u7f6e\nkubectl config set-cluster <cluster_name> --server=https://<cluster_ip>:6443 --insecure-skip-tls-verify=true\nkubectl config set-credentials <username> --token=<token>\nkubectl config set-context <cluster_name> --user=<username> --cluster=<cluster_name>\nkubectl config use-context <cluster_name>\n\n\u4e3e\u4f8b\nkubectl config set-cluster default --server=https://127.0.0.1:6443 --insecure-skip-tls-verify=true\nkubectl config set-credentials default --token=`k3s kubectl -n kubernetes-dashboard create token admin-user\n`\nkubectl config set-context default --user=default --cluster=default\nkubectl config use-context default\n\n\u67e5\u770b\u672c\u5730 config\ncat ~/.kube/config\n")),(0,c.kt)("h3",{id:"3\u6dfb\u52a0\u811a\u672c"},"3\u3001\u6dfb\u52a0\u811a\u672c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"#!/bin/bash\n\n\n# \u65b9\u5f0f\u4e00\uff1avim ~/.bashrc\uff0c\u6dfb\u52a0\uff1afunction \u811a\u672c \u548c alias='pod' alias='log' \u540e\u6267\u884c\uff1asource ~/.bashrc\n# \u65b9\u5f0f\u4e8c\uff1a\u628a login_k8s.sh \u4e0a\u4f20\u5230 /etc/profile.d \u540e\u6267\u884c\uff1asource /etc/profile.d\n\n\nfunction pod() {\n  if [ -z \"$1\" ]; then\n    echo -e \"\\033[32m kubectl get pod -A \\033[0m\"\n    kubectl get pod -A\n  else\n    kubectl config set-context --current --namespace=$1\n\n    echo -e \"\\033[32m \u83b7\u53d6\u7b2c1\u4e2a pod \u540d\u79f0: kubectl get pod -n $1 |grep $2 |awk '{print \\$1}' |head -n 1 \\033[0m\"\n    pod_name=`kubectl get pod -n $1 |grep $2 |awk  '{print \\$1}' |head -n 1`\n\n    echo -e \"\\033[32m \u8fdb\u5165\u7b2c1\u4e2a pod: kubectl exec -it pod/$pod_name -n $1 -- sh \\033[0m\"\n    kubectl exec -it pod/$pod_name -n $1 -- sh\n  fi\n}\n\n\nfunction log() {\n  if [ -z \"$1\" ]; then\n    echo -e \"\\033[32m kubectl get pod -A \\033[0m\"\n    kubectl get pod -A\n  else\n    kubectl config set-context --current --namespace=$1\n\n    echo -e \"\\033[32m \u83b7\u53d6\u7b2c1\u4e2a pod \u540d\u79f0: kubectl get pod -n $1 |grep $2 |awk '{print \\$1}' |head -n 1 \\033[0m\"\n    pod_name=`kubectl get pod -n $1 |grep $2 |awk  '{print \\$1}' |head -n 1`\n\n    kubectl logs -f $pod_name -n $1\n  fi\n}\n\nalias pod='pod'\nalias log='log'\n")))}b.isMDXComponent=!0}}]);