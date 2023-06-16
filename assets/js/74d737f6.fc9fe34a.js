"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),u=l,b=p["".concat(o,".").concat(u)]||p[u]||h[u]||a;return n?r.createElement(b,m(m({ref:t},c),{},{components:n})):r.createElement(b,m({ref:t},c))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,m=new Array(a);m[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,m[1]=s;for(var i=2;i<a;i++)m[i]=n[i];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),l=(n(7294),n(3905));const a={},m=void 0,s={unversionedId:"Kubernetes/Helm \u5305\u7ba1\u7406\u5668",id:"Kubernetes/Helm \u5305\u7ba1\u7406\u5668",title:"Helm \u5305\u7ba1\u7406\u5668",description:"[TOC]",source:"@site/docs/Kubernetes/Helm \u5305\u7ba1\u7406\u5668.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/Helm \u5305\u7ba1\u7406\u5668",permalink:"/docs/Kubernetes/Helm \u5305\u7ba1\u7406\u5668",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipeline\u6d41\u6c34\u7ebf",permalink:"/docs/Jenkins/Pipeline/Pipeline\u6d41\u6c34\u7ebf"},next:{title:"Helm \u5b89\u88c5\u8f6f\u4ef6",permalink:"/docs/Kubernetes/Helm \u5b89\u88c5\u8f6f\u4ef6"}},o={},i=[{value:"\u4e00\u3001Helm \u7b80\u4ecb",id:"\u4e00helm-\u7b80\u4ecb",level:2},{value:"\u4e8c\u3001Helm \u5b89\u88c5",id:"\u4e8chelm-\u5b89\u88c5",level:2},{value:"\u4e09\u3001Helm \u4f7f\u7528",id:"\u4e09helm-\u4f7f\u7528",level:2}],c={toc:i},p="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[TOC]"),(0,l.kt)("hr",null),(0,l.kt)("h1",{align:"center"},"Helm \u5305\u7ba1\u7406\u5668"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,l.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.10.01",(0,l.kt)("br",{parentName:"p"}),"\n","Description\uff1aHelm")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/zh/docs/"},"Helm\u5b98\u65b9\u6587\u6863"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"Helm\u4ed3\u5e93"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://charts.bitnami.com/"},"bitnami charts"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"http://mirror.azure.cn/kubernetes/charts/"},"\u5fae\u8f6fazure\u6e90"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/Kubernetes/Helm%20%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6"},"Helm\u5b89\u88c5\u8f6f\u4ef6")),(0,l.kt)("h2",{id:"\u4e00helm-\u7b80\u4ecb"},"\u4e00\u3001Helm \u7b80\u4ecb"),(0,l.kt)("p",null,"Chart \u4ee3\u8868\u7740 Helm \u5305\u3002\u5b83\u5305\u542b\u5728 Kubernetes \u96c6\u7fa4\u5185\u90e8\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff0c\u5de5\u5177\u6216\u670d\u52a1\u6240\u9700\u7684\u6240\u6709\u8d44\u6e90\u5b9a\u4e49\u3002\u4f60\u53ef\u4ee5\u628a\u5b83\u770b\u4f5c\u662f Homebrew formula\uff0cApt dpkg\uff0c\u6216 Yum RPM \u5728Kubernetes \u4e2d\u7684\u7b49\u4ef7\u7269\u3002\nRepository\uff08\u4ed3\u5e93\uff09 \u662f\u7528\u6765\u5b58\u653e\u548c\u5171\u4eab charts \u7684\u5730\u65b9\u3002\u5b83\u5c31\u50cf Perl \u7684 CPAN \u6863\u6848\u5e93\u7f51\u7edc \u6216\u662f Fedora \u7684 \u8f6f\u4ef6\u5305\u4ed3\u5e93\uff0c\u53ea\u4e0d\u8fc7\u5b83\u662f\u4f9b Kubernetes \u5305\u6240\u4f7f\u7528\u7684\u3002\nRelease \u662f\u8fd0\u884c\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u7684 chart \u7684\u5b9e\u4f8b\u3002\u4e00\u4e2a chart \u901a\u5e38\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u5b89\u88c5\u591a\u6b21\u3002\u6bcf\u4e00\u6b21\u5b89\u88c5\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 release\u3002\u4ee5 MySQL chart\u4e3a\u4f8b\uff0c\u5982\u679c\u4f60\u60f3\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e24\u4e2a\u6570\u636e\u5e93\uff0c\u4f60\u53ef\u4ee5\u5b89\u88c5\u8be5chart\u4e24\u6b21\u3002\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u90fd\u4f1a\u62e5\u6709\u5b83\u81ea\u5df1\u7684 release \u548c release name\u3002\n\u5728\u4e86\u89e3\u4e86\u4e0a\u8ff0\u8fd9\u4e9b\u6982\u5ff5\u4ee5\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8fd9\u6837\u6765\u89e3\u91ca Helm\uff1a\nHelm \u5b89\u88c5 charts \u5230 Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u6bcf\u6b21\u5b89\u88c5\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 release\u3002\u4f60\u53ef\u4ee5\u5728 Helm \u7684 chart repositories \u4e2d\u5bfb\u627e\u65b0\u7684 chart\u3002"),(0,l.kt)("h2",{id:"\u4e8chelm-\u5b89\u88c5"},"\u4e8c\u3001Helm \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1\u3001Linux\u5b89\u88c5Helm\n\u65b9\u5f0f\u4e00\ncurl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\ncurl https://raw.githubusercontent.com/helm/helm/master/scripts/get |bash\n\n\u65b9\u5f0f\u4e8c\nwget -c https://get.helm.sh/helm-v3.10.1-linux-amd64.tar.gz\ntar -zxvf helm-v3.10.1-linux-amd64.tar.gz\n\n\u65b9\u5f0f\u4e09\nwget https://mirrors.huaweicloud.com/helm/v3.7.2/helm-v3.7.2-linux-amd64.tar.gz\ntar -zxvf helm-v3.7.2-linux-amd64.tar.gz\n\nchmod 755 linux-amd64/helm\ncp linux-amd64/helm /usr/local/bin/\nls /usr/local/bin/\n\ncat >> /etc/profile << EOF\nsource <(helm completion bash)\nEOF\nsource /etc/profile\ncat /etc/profile\n\n2\u3001Mac\u5b89\u88c5Helm\nbrew install helm\n\n3\u3001\u9a8c\u8bc1\nhelm version\n")),(0,l.kt)("h2",{id:"\u4e09helm-\u4f7f\u7528"},"\u4e09\u3001Helm \u4f7f\u7528"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57fa\u672c\u64cd\u4f5c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1\u3001'helm search'\uff1a\u67e5\u627e Charts\nHelm \u81ea\u5e26\u4e00\u4e2a\u5f3a\u5927\u7684\u641c\u7d22\u547d\u4ee4\uff0c\u53ef\u4ee5\u7528\u6765\u4ece\u4e24\u79cd\u6765\u6e90\u4e2d\u8fdb\u884c\u641c\u7d22\uff1a\nhelm search hub \u4ece Artifact Hub \u4e2d\u67e5\u627e\u5e76\u5217\u51fa helm charts\u3002 Artifact Hub\u4e2d\u5b58\u653e\u4e86\u5927\u91cf\u4e0d\u540c\u7684\u4ed3\u5e93\u3002\nhelm search repo \u4ece\u4f60\u6dfb\u52a0\uff08\u4f7f\u7528 helm repo add\uff09\u5230\u672c\u5730 helm \u5ba2\u6237\u7aef\u4e2d\u7684\u4ed3\u5e93\u4e2d\u8fdb\u884c\u67e5\u627e\u3002\u8be5\u547d\u4ee4\u57fa\u4e8e\u672c\u5730\u6570\u636e\u8fdb\u884c\u641c\u7d22\uff0c\u65e0\u9700\u8fde\u63a5\u4e92\u8054\u7f51\u3002\n\n\u5c55\u793a\u6240\u6709\u53ef\u7528\u7684 charts\nhelm search hub\n\n2\u3001\u67e5\u770b\u5e94\u7528\uff08helm list --all \u4f1a\u5c55\u793a Helm \u4fdd\u7559\u7684\u6240\u6709 release \u8bb0\u5f55\uff0c\u5305\u62ec\u5931\u8d25\u6216\u5220\u9664\u7684\u6761\u76ee\uff08\u6307\u5b9a\u4e86 --keep-history\uff09\uff09\nheml list\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ed3\u5e93\u7ba1\u7406")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1\u3001\u6dfb\u52a0chart\u4ed3\u5e93\n\u547d\u4ee4\uff1ahelm repo add <\u4ed3\u5e93\u540d\u79f0> <\u4ed3\u5e93URL>\n\u4e3e\u4f8b\uff1ahelm repo add bitnami https://charts.bitnami.com/bitnami\n\u4e3e\u4f8b\uff1ahelm repo add azure http://mirror.azure.cn/kubernetes/charts/\n\u4e3e\u4f8b\uff1ahelm repo add stable https://charts.helm.sh/stable\n\u4e3e\u4f8b\uff1ahelm repo add stable https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\n\n2\u3001\u67e5\u770b\u914d\u7f6e\u7684\u4ed3\u5e93\nhelm repo list\n\n3\u3001\u79fb\u9664\u4ed3\u5e93\n\u547d\u4ee4\uff1ahelm repo remove <\u4ed3\u5e93\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm repo remove bitnami\n\u4e3e\u4f8b\uff1ahelm repo remove azure\n\n4\u3001\u66f4\u65b0chart\u5217\u8868\nhelm repo update\n\n5\u3001\u67e5\u770b\u5e94\u7528\uff1f\nhelm list\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"chart\u7ba1\u7406")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1\u3001\u67e5\u770bchart\u5217\u8868\n\u547d\u4ee4\uff1ahelm search repo <chart\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm search repo mysql\n\n2\u3001\u66f4\u65b0chart\u5217\u8868\nhelm repo update\n\n3\u3001\u67e5\u770bchart\u4fe1\u606f\n\u547d\u4ee4\uff1ahelm show chart <\u4ed3\u5e93\u540d\u79f0>/<chart\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm show chart bitnami/mysql\n\n4\u3001\u62c9\u53d6chart\u5305\n\u547d\u4ee4\uff1ahelm pull <\u4ed3\u5e93\u540d\u79f0>/<chart\u540d\u79f0> --version=<chart\u7248\u672c>\n\u4e3e\u4f8b\uff1ahelm pull bitnami/mysql --version=9.4.1\n\n5\u3001\u5b89\u88c5Chart\n\u547d\u4ee4\uff1ahelm install <release\u540d\u79f0> <\u4ed3\u5e93\u540d\u79f0>/<chart\u540d\u79f0> --version=<chart\u7248\u672c>\n\u4e3e\u4f8b\uff1ahelm install my-release bitnami/mysql --version=9.4.1\n\u547d\u4ee4\uff1ahelm install <\u4ed3\u5e93\u540d\u79f0>/<chart\u540d\u79f0> --generate-name //\u751f\u6210\u968f\u673a<release\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm install bitnami/mysql --generate-name\n\n5\u3001\u67e5\u770b\u53d1\u5e03\u4fe1\u606f\n\u547d\u4ee4\uff1ahelm status <release\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm status my-release\n\n6\u3001\u67e5\u770b\u53d1\u5e03\u5386\u53f2\n\u547d\u4ee4\uff1ahelm history <release\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm history my-release\n\n7\u3001\u56de\u6eda\u7248\u672c\uff08\u6bcf\u5f53\u53d1\u751f\u4e86\u4e00\u6b21\u5b89\u88c5\u3001\u5347\u7ea7\u6216\u56de\u6eda\u64cd\u4f5c\uff0crevision \u7684\u503c\u5c31\u4f1a\u52a01\u3002\u7b2c\u4e00\u6b21 revision \u7684\u503c\u6c38\u8fdc\u662f1\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 helm history [RELEASE] \u547d\u4ee4\u6765\u67e5\u770b\u4e00\u4e2a\u7279\u5b9a release \u7684\u4fee\u8ba2\u7248\u672c\u53f7\u3002\uff09\n\u547d\u4ee4\uff1ahelm rollback <release\u540d\u79f0> 1\n\u4e3e\u4f8b\uff1ahelm rollback my-release 1\n\n8\u3001\u5378\u8f7dchart\uff08\u8be5\u547d\u4ee4\u4f1a\u4eceKubernetes\u5378\u8f7d my-release\uff0c \u5b83\u5c06\u5220\u9664\u548c\u8be5\u7248\u672c\u76f8\u5173\u7684\u6240\u6709\u76f8\u5173\u8d44\u6e90\uff08service\u3001deployment\u3001 pod\u7b49\u7b49\uff09\u751a\u81f3\u7248\u672c\u5386\u53f2\u3002\uff09\n\u547d\u4ee4\uff1ahelm uninstall <release\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm uninstall my-release\n\n9\u3001\u5220\u9664chart\uff08heml list\u67e5\u770b\u53d1\u5e03\u7684chart\uff09\n\u547d\u4ee4\uff1ahelm delete --purge <release\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm delete --purge my-release\n\n10\u3001\u521b\u5efachart\u5305\n\u547d\u4ee4\uff1ahelm create <chart\u540d\u79f0>\n\u4e3e\u4f8b\uff1ahelm create my-chart\n\n11\u3001\u5176\u5b83\n\u5b89\u88c5MySQL\u5ba2\u6237\u7aef\uff08\u672a\u6210\u529f\uff09\nyum install mariadb -y\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"template")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u62c9\u53d6chart\u5305\n\u547d\u4ee4\uff1ahelm pull <\u4ed3\u5e93\u540d\u79f0>/<chart\u540d\u79f0> --version=<chart\u7248\u672c>\n\u4e3e\u4f8b\uff1ahelm pull bitnami/mysql --version=9.4.1\n\n\u4e0b\u8f7dmysql-9.4.1.tgz\u5230\u672c\u5730\uff0c\u6267\u884c\uff1atar -zxvf mysql-9.4.1.tgz\u89e3\u538bmysql-9.4.1.tgz\u5230mysql\n\n\u4fee\u6539\u6587\u4ef6\u540e\u6267\u884c\uff1ahelm package mysql/ \u91cd\u65b0\u6253\u5305\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Helm\u5b89\u88c5\u8d44\u6e90\u987a\u5e8f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ns\nNetworkPolicy\nResourceQuota\nLimitRange\nPodSecurityPolicy\nPodDisruptionBudget\nServiceAccount\nSecret\nSecretList\nConfigMap\nStorageClass\nPersistentVolume\nPersistentVolumeClaim\nCustomResourceDefinition\nClusterRole\nClusterRoleList\nClusterRoleBinding\nClusterRoleBindingList\nRole\nRoleList\nRoleBinding\nRoleBindingList\nService\nDaemonSet\nPod\nReplicationController\nReplicaSet\nDeployment\nHorizontalPodAutoscaler\nStatefulSet\nJob\nCronJob\nIngress\nAPIService\n")))}h.isMDXComponent=!0}}]);