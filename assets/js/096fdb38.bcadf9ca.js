"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7696],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(k,s(s({ref:n},i),{},{components:t})):a.createElement(k,s({ref:n},i))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,s[1]=p;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={},s=void 0,p={unversionedId:"Kubernetes/Kubernetes \u5b89\u88c5\u8f6f\u4ef6",id:"Kubernetes/Kubernetes \u5b89\u88c5\u8f6f\u4ef6",title:"Kubernetes \u5b89\u88c5\u8f6f\u4ef6",description:"[TOC]",source:"@site/docs/Kubernetes/Kubernetes \u5b89\u88c5\u8f6f\u4ef6.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/Kubernetes \u5b89\u88c5\u8f6f\u4ef6",permalink:"/docs/Kubernetes/Kubernetes \u5b89\u88c5\u8f6f\u4ef6",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KubeSphere",permalink:"/docs/Kubernetes/KubeSphere"},next:{title:"Kubernetes \u5bb9\u5668\u7f16\u6392",permalink:"/docs/Kubernetes/Kubernetes \u5bb9\u5668\u7f16\u6392"}},l={},d=[{value:"1\u3001Dashboard",id:"1dashboard",level:3},{value:"2\u3001Kuboard",id:"2kuboard",level:3},{value:"3\u3001Nginx",id:"3nginx",level:3},{value:"4\u3001Redis",id:"4redis",level:3},{value:"5\u3001Zookeeper",id:"5zookeeper",level:3},{value:"6\u3001PostgreSQL(\u672a\u5b89\u88c5\u6210\u529f)",id:"6postgresql\u672a\u5b89\u88c5\u6210\u529f",level:3},{value:"7\u3001Minio",id:"7minio",level:3},{value:"8\u3001Jenkins",id:"8jenkins",level:3},{value:"9\u3001Prometheus",id:"9prometheus",level:3},{value:"9\u3001Grafana",id:"9grafana",level:3},{value:"10\u3001Kafka",id:"10kafka",level:3}],i={toc:d},c="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(c,(0,a.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("h1",{align:"center"},"Kubernetes \u5b89\u88c5\u8f6f\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,r.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.10.01",(0,r.kt)("br",{parentName:"p"}),"\n","Description\uff1aKubernetes")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.kubebiz.com/"},"kubebiz \u8f6f\u4ef6\u5217\u8868")),(0,r.kt)("h3",{id:"1dashboard"},"1\u3001Dashboard"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard UI \u4eea\u8868\u677f"),"\n\u4eea\u8868\u677f\u662f\u57fa\u4e8e Web \u7684Kubernetes \u7528\u6237\u754c\u9762\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard \u5b89\u88c5\u6559\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4e0b\u8f7d recommended.yaml\nwget https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml\n\n\u4e0b\u8f7d recommended.yaml \u5e76\u91cd\u547d\u540d\u4e3a dashboard.yaml\nwget https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml -O dashboard.yaml\n\n\u5b89\u88c5 k8s Dashboard\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml\n\n\u5f00\u542f\u672c\u673a\u8bbf\u95ee\u4ee3\u7406\uff08\u6ce8\u610f\u4e0d\u8981\u5173\u95ed \uff0c\u5173\u95ed\u4e86\u4e0b\u4e00\u6b65\u5c31\u6253\u4e0d\u5f00\u9875\u9762\u4e86\uff0c\u5b89\u88c5\u597d\u540e\u8bbf\u95ee\uff1a127.0.0.1:8001\uff09\nkubectl proxy\n\n\u8bbf\u95ee\nhttp://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/service/default/kubernetes?namespace=default\n\n\u521b\u5efa\u8d26\u6237\nvim admin-user-dashboard.yaml\n\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n  \nkubectl apply -f admin-user-dashboard.yaml\n\n\u521b\u5efa\u89d2\u8272\nvim admin-user-role-binding.yaml\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\n  \nkubectl apply -f admin-user-role-binding.yaml\n\n\u521b\u5efa token\uff0c\u62ff\u5230 token \u4e4b\u540e\u586b\u5165\u7b2c3\u6b65\u8bbf\u95ee\u7684\u7f51\u5740\uff0c\u5373\u53ef\u6210\u529f\u767b\u9646 k8s Dashboard\nkubectl -n kubernetes-dashboard create token admin-user\n")),(0,r.kt)("p",null,"\u8bc1\u4e66\u914d\u7f6e\uff08\u4ee5\u4e0a\u6559\u7a0b\u6ca1\u7528\u4e0a\u8bc1\u4e66\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\u3001\u521b\u5efa\u547d\u540d\u7a7a\u95f4\nkubectl create namespace kubernetes-dashboard\n\n2\u3001\u521b\u5efa key \u6587\u4ef6\nopenssl genrsa -out dashboard.key 2048\n\n3\u3001\u8bc1\u4e66\u8bf7\u6c42\nopenssl req -days 36000 -new -out dashboard.csr -key dashboard.key -subj '/CN=dashboard-cert'\n\n4\u3001\u81ea\u7b7e\u8bc1\u4e66\nopenssl x509 -req -in dashboard.csr -signkey dashboard.key -out dashboard.crt\n\n5\u3001\u521b\u5efa kubernetes-dashboard-certs \u5bf9\u8c61\nkubectl create secret generic kubernetes-dashboard-certs --from-file=dashboard.key --from-file=dashboard.crt -n kubernetes-dashboard\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard \u5b89\u88c5\u6559\u7a0b2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4e0b\u8f7d\nwget https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml -O dashboard.yaml\n\n\u4fee\u6539\u914d\u7f6e\uff0c\u6dfb\u52a0 type: NodePort \u548c nodePort: 31001\nvim dashboard.yaml\n\nkind: Service\napiVersion: v1\nmetadata:\n  labels:\n    k8s-app: kubernetes-dashboard\n  name: kubernetes-dashboard\n  namespace: kubernetes-dashboard\nspec:\n  type: NodePort\n  ports:\n    - port: 443\n      targetPort: 8443\n      nodePort: 31001\n  selector:\n    k8s-app: kubernetes-dashboard\n    \ndashborad-admin-rabc.yaml \u5185\u5bb9\u5982\u4e0b\uff1a\n\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\n\n\u521b\u5efa pod\nkubectl apply -f dashboard.yaml\nkubectl apply -f dashborad-admin-rabc.yaml\n\n\u8bbf\u95ee\u5730\u5740\nhttps://127.0.0.1:31001/#/login\n\n\u521b\u5efa token\nk3s kubectl -n kubernetes-dashboard create token admin-user\n")),(0,r.kt)("p",null,"\u8fdb\u5165 dashboard \u7684 deployment \u83dc\u5355\uff0c\u7f16\u8f91 kubernetes-dashboard\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"- '--auto-generate-certificates'"),"\n\u4e0b\u589e\u52a0\u4e00\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"- '--token-ttl=43200'")),(0,r.kt)("p",null,"![](./img/\u4fee\u6539 token \u6709\u6548\u65f6\u95f4.png)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard \u9875\u9762")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3666).Z,width:"3024",height:"1668"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard \u5220\u9664")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1\u3001\u67e5\u8be2 pod \nkubectl get pods --all-namespaces | grep "dashboard"\n\n2\u3001\u5220\u9664 pod\nkubectl delete deployment kubernetes-dashboard  --namespace=kubernetes-dashboard\nkubectl delete deployment dashboard-metrics-scraper --namespace=kubernetes-dashboard\n\n3\u3001\u67e5\u8be2 service\nkubectl get service -A\n\n4\u3001\u5220\u9664 service\nkubectl delete service kubernetes-dashboard  --namespace=kubernetes-dashboard\nkubectl delete service dashboard-metrics-scraper  --namespace=kubernetes-dashboard\n\n5\u3001\u5220\u9664\u8d26\u6237\u548c\u5bc6\u94a5\nkubectl delete sa kubernetes-dashboard --namespace=kubernetes-dashboard\nkubectl delete secret kubernetes-dashboard-certs --namespace=kubernetes-dashboard\nkubectl delete secret kubernetes-dashboard-key-holder --namespace=kubernetes-dashboard\n')),(0,r.kt)("h3",{id:"2kuboard"},"2\u3001Kuboard"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kuboard \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://kuboard.cn/overview/"},"Kuboard \u7b80\u4ecb"),"\nKuboard\uff0c\u662f\u4e00\u6b3e\u514d\u8d39\u7684 Kubernetes \u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177\uff0cKuboard \u529b\u56fe\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5728 Kubernetes \u4e0a\u843d\u5730\u5fae\u670d\u52a1\u3002\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u7ed3\u5408\u5df2\u6709\u6216\u65b0\u5efa\u7684\u4ee3\u7801\u4ed3\u5e93\u3001\u955c\u50cf\u4ed3\u5e93\u3001CI/CD \u5de5\u5177\u7b49\uff0c\u53ef\u4ee5\u4fbf\u6377\u7684\u642d\u5efa\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684 Kubernetes \u5bb9\u5668\u4e91\u5e73\u53f0\uff0c\u8f7b\u677e\u7ba1\u7406\u548c\u8fd0\u884c\u4e91\u539f\u751f\u5e94\u7528\u3002\n\u6837\u4f8b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://demo.kuboard.cn"},"https://demo.kuboard.cn"),(0,r.kt)("br",{parentName:"p"}),"\n","\u7528 \u6237\uff1ademo",(0,r.kt)("br",{parentName:"p"}),"\n","\u5bc6 \u7801\uff1ademo123"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kuboard \u5b89\u88c5\u6559\u7a0b"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://kuboard.cn/install/v3/install-in-k8s.html#%E5%AE%89%E8%A3%85"},"Kuboard \u5b89\u88c5\u6559\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\u3001\u5b89\u88c5 Kuboard\nkubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml\n\n2\u3001\u8bbf\u95ee Kuboard\n\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u94fe\u63a5 http://127.0.0.1:30080, \u8f93\u5165\u521d\u59cb\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u5e76\u767b\u5f55\n\u7528\u6237\u540d\uff1a admin\n\u5bc6\u7801\uff1a Kuboard123\n\n3\u3001\u8e29\u5751\n\u6267\u884c kubectl get pods -n kuboard\uff0c\u5982\u679c\u7ed3\u679c\u4e2d\u6ca1\u6709\u51fa\u73b0 kuboard-etcd-xxxxx \u7684\u5bb9\u5668, \u5c31\u6267\u884c\uff1akubectl label nodes docker-desktop k8s.kuboard.cn/role=etcd \n\n4\u3001\u521b\u5efa\u96c6\u7fa4\ncurl -k 'http://127.0.0.1:30080/kuboard-api/cluster/default/kind/KubernetesCluster/default/resource/installAgentToKubernetes?token=0vPAhlKn6zIcNfvDsUBKX7t64yV4R46d' > kuboard-agent.yaml\n\nkubectl apply -f ./kuboard-agent.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kuboard \u9875\u9762")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7605).Z,width:"3024",height:"1666"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kuboard \u5220\u9664")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1\u3001\u67e5\u8be2 pod\nkubectl get pods -n kuboard\nkubectl get pods --all-namespaces | grep "kuboard"\n\n2\u3001\u5220\u9664 pod\nkubectl delete pods kuboard-etcd-lmtz8 --namespace=kuboard\n\n3\u3001\u67e5\u8be2 service\nkubectl get service -A\n\n4\u3001\u5220\u9664 service\nkubectl delete service kuboard --namespace=kube-system\n\n5\u3001\u5378\u8f7d kuboard\nkubectl delete -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml\n\n6\u3001\u5220\u9664 namespace \u4e0b\u6240\u6709\u8d44\u6e90\nkubectl delete ns kuboard --force --grace-period=0\n\nkubectl get ns kuboard -o json > kuboard.json\uff0c\u5c06 finalizers \u5b57\u6bb5\u53bb\u6389\n\nkubectl proxy --port=8002\n\ncurl -k -H "Content-Type: application/json" -X PUT --data-binary @kuboard.json http://127.0.0.1:8002/api/v1/namespaces/kuboard/finalize\n')),(0,r.kt)("h3",{id:"3nginx"},"3\u3001Nginx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u65b9\u5f0f\u4e00\n1\u3001\u521b\u5efa\u8d44\u6e90\nkubectl apply -f NginxDemo.yml\n\n2\u3001\u67e5\u770b\u8d44\u6e90\nkubectl get pod,svc,deploy -n my-space |grep nginx\n\n3\u3001\u9a8c\u8bc1\nhttp://127.0.0.1:30004\n\n5\u3001\u8fdb\u5165\u5bb9\u5668\nkubectl exec -it pod/nginx-deployment-9456bbbf9-9g8zn -n my-space -- bash\n\n6\u3001\u5220\u9664\u8d44\u6e90\nkubectl delete -f NginxDemo.yml\n\n\n\u65b9\u5f0f\u4e8c\n1\u3001\u521b\u5efa\u4e00\u4e2a nginx \u670d\u52a1\nkubectl create deployment nginx  --image=nginx:1.14-alpine\n\n2\u3001\u66b4\u9732\u7aef\u53e3\nkubectl expose deploy nginx  --port=80 --target-port=80  --type=NodePort\n\n3\u3001\u67e5\u770b\u670d\u52a1\uff08\u62ff\u5230\u5bf9\u5916\u8bbf\u95ee\u7684\u7aef\u53e3\uff09\nkubectl get pod,svc\n\n4\u3001\u5728\u6d4f\u89c8\u5668\u8bbf\u95ee\nhttp://127.0.0.1:30319/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NginxDemo.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: my-space\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  namespace: my-space\nspec:\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n      nodePort: 30004\n  type: NodePort\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx \u89c6\u56fe")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5225).Z,width:"1512",height:"945"})),(0,r.kt)("h3",{id:"4redis"},"4\u3001Redis"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.kubebiz.com/KubeBiz/redis"},"Redis yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\u3001\u521b\u5efa\u8d44\u6e90\uff08\u4fee\u6539 Service.yml \u66b4\u9732\u7aef\u53e3\uff09\nkubectl apply -f RedisDemo.yml\n\n2\u3001\u67e5\u770b\u8d44\u6e90\nkubectl get pod,deploy,svc -n my-space |grep redis\n\n3\u3001\u67e5\u770b Redis pod \u7684\u5bb9\u5668\nkubectl get pod redis -o jsonpath=\"{.spec['containers','initContainers'][*].name}\" -n my-space\n\n4\u3001\u8fdb\u5165\u5bb9\u5668\nkubectl exec -it pod/redis -n my-space -- bash\n\n5\u3001\u9a8c\u8bc1\nredis-cli\nset name zhangsan\nget name\n\n6\u3001\u5220\u9664 Redis\nkubectl delete -f RedisDemo.yml\n\n7\u3001\u8e29\u5751\n\u62a5\u9519\uff1aWarning  FailedScheduling  54s   default-scheduler  0/1 nodes are available: 1 node(s) had taint {node-role.kubernetes.io/master: }, that the pod didn't tolerate\n\u539f\u56e0\uff1a\u4f7f\u7528 kubeadm \u521d\u59cb\u5316\u7684\u96c6\u7fa4\uff0c\u51fa\u4e8e\u5b89\u5168\u8003\u8651 Pod \u4e0d\u4f1a\u88ab\u8c03\u5ea6\u5230 Master Node \u4e0a\uff0c\u4e0d\u53c2\u4e0e\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5141\u8bb8 master \u8282\u70b9\u90e8\u7f72 pod \u5373\u53ef\u89e3\u51b3\u95ee\u9898\n\u89e3\u51b3\uff1akubectl taint nodes --all node-role.kubernetes.io/master-\n\n\u67e5\u770b\u662f\u5426\u4e3a master\nkubectl -n my-space exec -it pod/redis-master-0 -- redis-cli\ninfo replication\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RedisDemo.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: example-redis-config\n  namespace: my-space\ndata:\n  redis-config: |\n    maxmemory 2mb\n    maxmemory-policy allkeys-lru\n    dir /data\n    appendonly yes\n    save 900 1\n    save 300 10\n    save 60 10000\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis-master\n  namespace: my-space\n  labels:\n    app: redis\nspec:\n  selector:\n    app: redis\n  ports:\n    - port: 6379\n      nodePort: 30000\n      targetPort: 6379\n  type: NodePort\n\n---\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: redis\n  namespace: my-space\n  labels:\n    app: redis\nspec:\n  containers:\n    - name: redis\n      image: 'redis:6.2.5'\n      command:\n        - redis-server\n        - /redis-conf/redis.conf\n      env:\n        - name: MASTER\n          value: 'true'\n      ports:\n        - containerPort: 6379\n      resources:\n        limits:\n          cpu: '0.1'\n      volumeMounts:\n        - mountPath: /data\n          name: data\n        - mountPath: /redis-conf\n          name: config\n  volumes:\n    - name: data\n      emptyDir: {}\n    - name: config\n      configMap:\n        name: example-redis-config\n        items:\n          - key: redis-config\n            path: redis.conf\n")),(0,r.kt)("h3",{id:"5zookeeper"},"5\u3001Zookeeper"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.kubebiz.com/KubeBiz/zookeeper"},"zookeeper yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1\u3001\u521b\u5efa\u8d44\u6e90\nkubectl apply -f ZookeeperDemo.yml\n\n2\u3001\u67e5\u770b\u8d44\u6e90\nkubectl get pod,svc -n my-space\n\n3\u3001\u8fdb\u5165\u5bb9\u5668\nkubectl exec -it pod/<pod_name> -n my-space -- bash\n\n4\u3001\u542f\u52a8\u5ba2\u6237\u7aef\ncd bin/ && ./zkCli.sh (sh zkCli.sh \u4f1a\u62a5\u9519\uff0c\u4e0d\u660e\u767d\u4e3a\u5565)\nzookeeper \u5e38\u7528\u547d\u4ee4\n\u5217\u51fa zookeeper \u6839\u8282\u70b9\uff1als /\n\u5217\u51fa zookeeper dubbo \u8282\u70b9\uff1als /dubbo\n\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\uff1aget /dubbo  \n\u67e5\u770b\u67d0\u4e2a\u63a5\u53e3\u670d\u52a1\uff1als /dubbo/com.demo.service.DemoService \n\u67e5\u770b\u8282\u70b9\u72b6\u6001\uff1astat /dubbo\n\u521b\u5efa\u8282\u70b9\uff1acreate /tmp 123\uff08\u6ce8\uff1a\u8282\u70b9\u540e\u9762\u5f97\u6709\u503c\uff0c\u5982\uff1a123\uff0c\u8282\u70b9\u503c\u5c31\u662f123\uff0c\u53ef\u8bbe\u7f6e""\uff09  \n\u9000\u51fa zkCli\uff1aquit\n\n5\u3001\u5220\u9664\u8d44\u6e90\nkubectl delete -f ZookeeperDemo.yml\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZookeeperDemo.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: zookeeper\n  namespace: my-space\n  labels:\n    app: zk\nspec:\n  selector:\n    matchLabels:\n      app: zk\n  template:\n    metadata:\n      labels:\n        app: zk\n    spec:\n      nodeName: k8s-master\n      containers:\n        - name: zk\n          image: zookeeper\n          imagePullPolicy: IfNotPresent\n          ports:\n            - containerPort: 2181\n              name: zk\n          resources:\n            requests:\n              cpu: "0.1"\n              memory: "500Mi"\n            limits:\n              cpu: "0.1"\n              memory: "500Mi"\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: zk\n  name: zk-svc\n  namespace: my-space\nspec:\n  ports:\n    - port: 2181\n      nodePort: 30002\n      targetPort: 2181\n  selector:\n    app: zk\n  type: NodePort\n')),(0,r.kt)("h3",{id:"6postgresql\u672a\u5b89\u88c5\u6210\u529f"},"6\u3001PostgreSQL(\u672a\u5b89\u88c5\u6210\u529f)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.kubebiz.com/KubeBiz/PostgreSQL"},"PostgreSQL yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\u3001\u521b\u5efa\u8d44\u6e90\nkubectl apply -f PersistentVolumeClaim.yml\nkubectl apply -f Service.yml\nkubectl apply -f Deployment.yml\nkubectl apply -f PostgrepSQL.yml\n\n2\u3001\u5220\u9664\u8d44\u6e90\nkubectl delete -f PersistentVolumeClaim.yml\nkubectl delete -f Service.yml\nkubectl delete -f Deployment.yml\nkubectl delete -f PostgrepSQL.yml\n")),(0,r.kt)("h3",{id:"7minio"},"7\u3001Minio"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.kubebiz.com/KubeBiz/minio"},"Minio yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\u3001\u521b\u5efa\u8d44\u6e90\nkubectl apply -f MinioDemo.yml\n\n2\u3001\u67e5\u770b\u8d44\u6e90\nkubectl get pod,deploy,svc -n my-space |grep minio\n\n3\u3001\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:32075 minoadmin/minoadmin\n\n4\u3001\u5220\u9664\u8d44\u6e90\nkubectl delete -f MinioDemo.yml\n\n5\u3001\u8fdb\u5165 pod\nkubectl exec -it minio-0 -n my-space -- /bin/sh\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MinioDemo.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: minio\n  namespace: my-space\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: minio\n  template:\n    metadata:\n      labels:\n        app: minio\n    spec:\n      containers:\n        - name: minio\n          env:\n            - name: MINIO_ROOT_USER\n              value: "minioadmin"\n            - name: MINIO_ROOT_PASSWORD\n              value: "minioadmin"\n          image: minio/minio:latest\n          imagePullPolicy: IfNotPresent\n          command:\n            - /bin/sh\n            - -c\n            - minio server /data --console-address ":5000"\n          ports:\n            - name: data\n              containerPort: 9000\n              protocol: "TCP"\n            - name: console\n              containerPort: 5000\n              protocol: "TCP"\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: minio\n  namespace: my-space\nspec:\n  ports:\n    - name: data\n      port: 9000\n      targetPort: 9000\n      protocol: TCP\n    - name: console\n      port: 5000\n      targetPort: 5000\n      nodePort: 32075\n      protocol: TCP\n  selector:\n    app: minio\n  type: NodePort\n')),(0,r.kt)("h3",{id:"8jenkins"},"8\u3001Jenkins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\u3001\u521b\u5efa\u8d44\u6e90\nkubectl apply -f JenkinsDemo.yml\n\n2\u3001\u67e5\u770b\u8d44\u6e90\nkubectl get pod,svc,deploy -n my-space |grep jenkins\nkubectl get pod,svc,deploy -A |grep jenkins\n\n3\u3001\u9a8c\u8bc1\nhttp://127.0.0.1:32080\n\n4\u3001\u8fdb\u5165\u5bb9\u5668\nkubectl exec -it pod/jenkins-789c9b6b84-9drmq -n my-space -- bash \n\u6267\u884c\uff1acat /var/jenkins_home/secrets/initialAdminPassword\n\nkubectl exec -it pod/jenkins-789c9b6b84-9drmq -n my-space -- cat /var/jenkins_home/secrets/initialAdminPassword\n\n5\u3001\u5220\u9664\u8d44\u6e90\nkubectl delete -f JenkinsDemo.yml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JenkinsDemo.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: jenkins\n  namespace: my-space\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: jenkins\n  template:\n    metadata:\n      labels:\n        app: jenkins\n    spec:\n      containers:\n        - name: jenkins\n          image: jenkins/jenkins:lts-jdk11\n          ports:\n            - containerPort: 8080\n          volumeMounts:\n            - name: jenkins-home\n              mountPath: /var/jenkins_home\n      volumes:\n        - name: jenkins-home\n          emptyDir: { }\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: jenkins-export\n  namespace: my-space\nspec:\n  selector:\n    app: jenkins\n  type: NodePort\n  ports:\n    - name: http\n      port: 8080\n      targetPort: 8080\n      nodePort: 32080\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jenkins \u89c6\u56fe")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Jenkins",src:t(7076).Z,width:"1512",height:"945"})),(0,r.kt)("h3",{id:"9prometheus"},"9\u3001Prometheus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create ns kube-ops\n\nkubectl apply -f prom-configmap.yaml\nkubectl get configmap -n kube-ops\n\nkubectl apply -f prom-pvc.yaml\nkubectl get pvc -n kube-ops\n\nkubectl apply -f prom-rbac.yaml\nkubectl get sa -n kube-ops\n\nkubectl apply -f prom-deploy.yaml\nkubectl get deploy -n kube-ops\n\nkubctl apply -f prom-service.yaml\nkubectl get svc -n kube-ops\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:31966\n\ncurl 127.0.0.1:8080/metrics\n")),(0,r.kt)("h3",{id:"9grafana"},"9\u3001Grafana"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f grafana-deploy.yaml\nkubectl get deploy -n kube-ops\n\nkubectl apply -f grafana-volume.yaml\nkubectl get pvc -n kube-ops\n\nkubectl apply -f grafana-svc.yaml\nkubectl get svc -n kube-ops\n\nkubectl apply -f grafana-chown-job.yaml\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:32204\n")),(0,r.kt)("h3",{id:"10kafka"},"10\u3001Kafka"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl exec <kafka_pod_name> --cd kafka-topics --zookeeper <zookeeper_host>:<zookeeper_port> --list\n")))}m.isMDXComponent=!0},3666:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Dashboard-46f18cf6c1620c8115485f0cd2cb0128.png"},7076:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Jenkins-10bb1ca15fd7b75bad6d8dca7c734ef9.png"},7605:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Kuboard-8e62a2fc8ee416513b50c9e1c7b6f7a5.png"},5225:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Nginx-20582ffb91c005b763002836214d99ee.png"}}]);