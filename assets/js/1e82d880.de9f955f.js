"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[324],{3905:(e,r,o)=>{o.d(r,{Zo:()=>i,kt:()=>u});var n=o(7294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?c(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function d(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var k=n.createContext({}),l=function(e){var r=n.useContext(k),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},i=function(e){var r=l(e.components);return n.createElement(k.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,c=e.originalType,k=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=l(o),m=t,u=p["".concat(k,".").concat(m)]||p[m]||s[m]||c;return o?n.createElement(u,a(a({ref:r},i),{},{components:o})):n.createElement(u,a({ref:r},i))}));function u(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=o.length,a=new Array(c);a[0]=m;var d={};for(var k in r)hasOwnProperty.call(r,k)&&(d[k]=r[k]);d.originalType=e,d[p]="string"==typeof e?e:t,a[1]=d;for(var l=2;l<c;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7780:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>k,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var n=o(7462),t=(o(7294),o(3905));const c={},a=void 0,d={unversionedId:"Docker/Docker \u5bb9\u5668",id:"Docker/Docker \u5bb9\u5668",title:"Docker \u5bb9\u5668",description:"[TOC]",source:"@site/docs/Docker/Docker \u5bb9\u5668.md",sourceDirName:"Docker",slug:"/Docker/Docker \u5bb9\u5668",permalink:"/docs/Docker/Docker \u5bb9\u5668",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker \u5b89\u88c5\u8f6f\u4ef6",permalink:"/docs/Docker/Docker \u5b89\u88c5\u8f6f\u4ef6"},next:{title:"IDEA",permalink:"/docs/Docs/IDEA"}},k={},l=[{value:"\u4e00\u3001Docker\u7b80\u4ecb",id:"\u4e00docker\u7b80\u4ecb",level:2},{value:"1\u3001Docker\u7b80\u4ecb",id:"1docker\u7b80\u4ecb",level:3},{value:"2\u3001\u73af\u5883\u642d\u5efa",id:"2\u73af\u5883\u642d\u5efa",level:3},{value:"\u4e8c\u3001Docker\u955c\u50cf",id:"\u4e8cdocker\u955c\u50cf",level:2},{value:"1\u3001\u5e38\u7528\u547d\u4ee4",id:"1\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u4e09\u3001Docker\u5bb9\u5668",id:"\u4e09docker\u5bb9\u5668",level:2},{value:"1\u3001\u5e38\u7528\u547d\u4ee4",id:"1\u5e38\u7528\u547d\u4ee4-1",level:3},{value:"2\u3001\u5bb9\u5668\u72b6\u6001",id:"2\u5bb9\u5668\u72b6\u6001",level:3},{value:"3\u3001\u67e5\u770b\u65e5\u5fd7",id:"3\u67e5\u770b\u65e5\u5fd7",level:3},{value:"4\u3001\u6587\u4ef6\u590d\u5236",id:"4\u6587\u4ef6\u590d\u5236",level:3},{value:"5\u3001\u5220\u9664\u5bb9\u5668",id:"5\u5220\u9664\u5bb9\u5668",level:3},{value:"6\u3001\u76ee\u5f55\u6302\u8f7d",id:"6\u76ee\u5f55\u6302\u8f7d",level:3},{value:"\u56db\u3001Dockerfile",id:"\u56dbdockerfile",level:2},{value:"1\u3001\u4f8b\u5b50",id:"1\u4f8b\u5b50",level:3},{value:"2\u3001\u8bf4\u660e",id:"2\u8bf4\u660e",level:3},{value:"\u4e94\u3001Docker-Compose",id:"\u4e94docker-compose",level:2},{value:"1\u3001\u5b89\u88c5",id:"1\u5b89\u88c5",level:3},{value:"2\u3001\u547d\u4ee4",id:"2\u547d\u4ee4",level:3},{value:"\u516d\u3001Docker\u4ed3\u5e93",id:"\u516ddocker\u4ed3\u5e93",level:2},{value:"1\u3001Harbor\u4ed3\u5e93",id:"1harbor\u4ed3\u5e93",level:3},{value:"2\u3001DockerHub\u4ed3\u5e93",id:"2dockerhub\u4ed3\u5e93",level:3},{value:"3\u3001\u963f\u91cc\u4e91\u4ed3\u5e93",id:"3\u963f\u91cc\u4e91\u4ed3\u5e93",level:3},{value:"4\u3001\u767e\u5ea6\u4e91\u4ed3\u5e93",id:"4\u767e\u5ea6\u4e91\u4ed3\u5e93",level:3},{value:"5\u3001\u817e\u8baf\u4e91\u4ed3\u5e93",id:"5\u817e\u8baf\u4e91\u4ed3\u5e93",level:3},{value:"\u4e03\u3001\u5176\u5b83",id:"\u4e03\u5176\u5b83",level:2},{value:"1\u3001portainer",id:"1portainer",level:3},{value:"2\u3001\u78c1\u76d8\u7a7a\u95f4",id:"2\u78c1\u76d8\u7a7a\u95f4",level:3},{value:"3\u3001entrypoint.sh",id:"3entrypointsh",level:3}],i={toc:l},p="wrapper";function s(e){let{components:r,...o}=e;return(0,t.kt)(p,(0,n.Z)({},i,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"[TOC]"),(0,t.kt)("hr",null),(0,t.kt)("h1",{align:"center"},"Docker \u5bb9\u5668"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,t.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.07.24",(0,t.kt)("br",{parentName:"p"}),"\n","Description\uff1aDocker")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/dockerfile"},"dockfile \u96c6\u5408"),(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/mirror/"},"\u963f\u91cc\u4e91\u5b98\u65b9\u955c\u50cf\u7ad9")),(0,t.kt)("h2",{id:"\u4e00docker\u7b80\u4ecb"},"\u4e00\u3001Docker\u7b80\u4ecb"),(0,t.kt)("h3",{id:"1docker\u7b80\u4ecb"},"1\u3001Docker\u7b80\u4ecb"),(0,t.kt)("p",null,"1\u3001\u955c\u50cf\uff08Image\uff09\uff1aDocker \u955c\u50cf\uff08Image\uff09\uff0c\u5c31\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a root \u6587\u4ef6\u7cfb\u7edf\u3002\u6bd4\u5982\u5b98\u65b9\u955c\u50cf ubuntu:16.04 \u5c31\u5305\u542b\u4e86\u5b8c\u6574\u7684\u4e00\u5957 Ubuntu16.04 \u6700\u5c0f\u7cfb\u7edf\u7684 root \u6587\u4ef6\u7cfb\u7edf\u3002\n2\u3001\u5bb9\u5668\uff08Container\uff09\uff1a\u955c\u50cf\uff08Image\uff09\u548c\u5bb9\u5668\uff08Container\uff09\u7684\u5173\u7cfb\uff0c\u5c31\u50cf\u662f\u9762\u5411\u5bf9\u8c61\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d\u7684\u7c7b\u548c\u5b9e\u4f8b\u4e00\u6837\uff0c\u955c\u50cf\u662f\u9759\u6001\u7684\u5b9a\u4e49\uff0c\u5bb9\u5668\u662f\u955c\u50cf\u8fd0\u884c\u65f6\u7684\u5b9e\u4f53\u3002\u5bb9\u5668\u53ef\u4ee5\u88ab\u521b\u5efa\u3001\u542f\u52a8\u3001\u505c\u6b62\u3001\u5220\u9664\u3001\u6682\u505c\u7b49\u3002\n3\u3001\u4ed3\u5e93\uff08Repository\uff09\uff1a\u4ed3\u5e93\u53ef\u770b\u7740\u4e00\u4e2a\u4ee3\u7801\u63a7\u5236\u4e2d\u5fc3\uff0c\u7528\u6765\u4fdd\u5b58\u955c\u50cf\u3002\n4\u3001Dockerfile\uff1aDockerfile \u662f\u4e00\u4e2a\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684\u6587\u672c\u6587\u4ef6\uff0c\u6587\u672c\u5185\u5bb9\u5305\u542b\u4e86\u4e00\u6761\u6761\u6784\u5efa\u955c\u50cf\u6240\u9700\u7684\u6307\u4ee4\u548c\u8bf4\u660e\u3002\n5\u3001docker-compose\uff1aDocker\u63d0\u4f9b\u7684\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,t.kt)("h3",{id:"2\u73af\u5883\u642d\u5efa"},"2\u3001\u73af\u5883\u642d\u5efa"),(0,t.kt)("p",null,"1\u3001\u5b89\u88c5\nLinux\u5b89\u88c5Docker\uff1ayum install docker\u3002",(0,t.kt)("br",{parentName:"p"}),"\n","Mac\u5b89\u88c5Docker\uff1a\u4e0b\u8f7d ",(0,t.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"https://www.docker.com/products/docker-desktop/")," dmg\u5b89\u88c5\u5305\u4e4b\u540e\u8fdb\u884c\u5b89\u88c5\u3002  "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"service docker start                #\u542f\u52a8docker\ndocker -v                           #\u67e5\u770bdocker\u7248\u672c\nsystemctl enable docker             #\u5f00\u673a\u542f\u52a8docker\nsystemctl restart docker            #\u91cd\u542fdocker\nsystemctl stop docker               #\u505c\u6b62docker\ndocker info                         #\u67e5\u770bdocker\u7cfb\u7edf\u4fe1\u606f\nrm -rf /var/lib/docker              #\u5220\u9664\u955c\u50cf/\u5bb9\u5668\u7b49\n")),(0,t.kt)("p",null,"\u8e29\u5751\uff1aMac\u5b89\u88c5Docker\uff0c\u5982\u679c\u53cc\u51fb\u65e0\u6cd5\u542f\u52a8Docker\uff0c\u53ef\u8fdb\u5165\u63a7\u5236\u53f0\uff0cps\u67e5\u770bDocker\u8fdb\u7a0b\u518dkill\u6389\uff0c\u6700\u540e\u518d\u53cc\u51fbDocker\uff0c\u7136\u540e\u8fdb\u5165Mac\u7ec8\u7aef\uff0c\u6267\u884cdocker -version\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"),(0,t.kt)("p",null,"linux-ubuntu\u5b89\u88c5Docker"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"apt-get remove docker docker-engine docker.io containerd runc\n\napt update\n\napt install docker.io\n\ndocker run hello-world\n")),(0,t.kt)("p",null,"2\u3001\u914d\u7f6e\u955c\u50cf\u6e90\n\u65b9\u5f0f\u4e00\uff1avim /etc/docker/daemon.json(Linux) / vim ~/.docker/daemon.json(Mac)\n\u65b9\u5f0f\u4e8c\uff1a\u5728Docker\u5ba2\u6237\u7aef\uff0c\u70b9\u51fb\u8bbe\u7f6e\u6309\u94ae\uff0c\u5728Docker Enging\u8bbe\u7f6e\u3002\n\u4e2d\u79d1\u9662\u7684\u955c\u50cf"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'{\n "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]\n}\n')),(0,t.kt)("p",null,"\u963f\u91cc\u4e91\u7684\u955c\u50cf"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'{\n "registry-mirrors":["https://6kx4zyno.mirror.aliyuncs.com"]\n}\n')),(0,t.kt)("p",null,"3\u3001\u5f00\u653e\u7aef\u53e3"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u4fee\u6539/usr/lib/systemd/system/docker.service\uff0c\u5728","[service]","\u7684ExecStart \uff0c\u6dfb\u52a0 -H tcp://0.0.0.0:2375\nExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock"),(0,t.kt)("li",{parentName:"ol"},"\u5237\u65b0\u914d\u7f6e\u6587\u4ef6\uff0c\u91cd\u542fdocker\nsystemctl daemon-reload\nsystemctl restart docker"),(0,t.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u9632\u706b\u58992375/tcp \uff0c\u5e76\u91cd\u8f7d\u9632\u706b\u5899\nfirewall-cmd --zone=public --add-port=2375/tcp --permanent\nfirewall-cmd --reload"),(0,t.kt)("li",{parentName:"ol"},"\u67e5\u770b\u7cfb\u7edf\u7f51\u7edc\u7aef\u53e32375\u662f\u5426\u88abdocker\u6240\u76d1\u542c\nnetstat -tulp")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"\u4e8cdocker\u955c\u50cf"},"\u4e8c\u3001Docker\u955c\u50cf"),(0,t.kt)("h3",{id:"1\u5e38\u7528\u547d\u4ee4"},"1\u3001\u5e38\u7528\u547d\u4ee4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker images                                           #\u5217\u51fa\u672c\u5730\u955c\u50cf\ndocker images java                                      #\u5217\u51fa\u672c\u5730\u955c\u50cf\u4e2dREPOSITORY\u4e3ajava\u7684\u955c\u50cf\u5217\u8868\ndocker search java                                      #\u4eceDocker Hub\u67e5\u627e\u6240\u6709\u955c\u50cf\u540d\u5305\u542bjava\u7684\u955c\u50cf\ndocker search -f stars=10 java                          #\u4eceDocker Hub\u67e5\u627e\u6240\u6709\u955c\u50cf\u540d\u5305\u542bjava,\u5e76\u4e14\u6536\u85cf\u6570\u5927\u4e8e10\u7684\u955c\u50cf\ndocker pull java                                        #\u4eceDocker Hub\u4e0b\u8f7djava\u6700\u65b0\u7248\u955c\u50cf\ndocker pull -a java                                     #\u4eceDocker Hub\u4e0b\u8f7dREPOSITORY\u4e3ajava\u7684\u6240\u6709\u955c\u50cf\ndocker tag redis:alpine redis:v1                        #docker tag\uff1a\u6807\u8bb0\u672c\u5730\u955c\u50cf,\u5c06\u5176\u5f52\u5165\u67d0\u4e00\u4ed3\u5e93\ndocker push myapache:v1                                 #\u5c06\u672c\u5730\u7684\u955c\u50cf\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93,\u8981\u5148\u767b\u9646\u5230\u955c\u50cf\u4ed3\u5e93docker push\ndocker rmi -f nginx:latest                              #docker rmi:\u5220\u9664\u672c\u5730\u4e00\u4e2a\u6216\u591a\u5c11\u955c\u50cf\ndocker history redis:alpine                             #docker history\uff1a\u67e5\u770b\u6307\u5b9a\u955c\u50cf\u7684\u521b\u5efa\u5386\u53f2\ndocker export <\u5bb9\u5668ID> > redis_latest.tar                #docker export\uff1a\u5c06\u6307\u5b9a\u955c\u50cf\u4fdd\u5b58\u6210tar\u5f52\u6863\u6587\u4ef6\ndocker save -o redis_latest.tar redis:alpine            #docker save\uff1a\u5c06\u6307\u5b9a\u955c\u50cf\u4fdd\u5b58\u6210tar\u5f52\u6863\u6587\u4ef6\ndocker load < redis_latest.tar                          #docker load\uff1a\u5bfc\u5165\u4f7f\u7528 docker save \u547d\u4ee4\u5bfc\u51fa\u7684\u955c\u50cf\ndocker load -i redis_latest.tar                         #docker load\uff1a\u5bfc\u5165\u4f7f\u7528 docker save \u547d\u4ee4\u5bfc\u51fa\u7684\u955c\u50cf\n")),(0,t.kt)("h2",{id:"\u4e09docker\u5bb9\u5668"},"\u4e09\u3001Docker\u5bb9\u5668"),(0,t.kt)("h3",{id:"1\u5e38\u7528\u547d\u4ee4-1"},"1\u3001\u5e38\u7528\u547d\u4ee4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker run  #\u542f\u52a8\u5bb9\u5668\ndocker run -d \\\n--name mysql \\\n-p 3306:3306 \\\n-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \\\n-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\nmysql:5.7\n\n\u5f53\u5229\u7528 docker run \u6765\u521b\u5efa\u5bb9\u5668\u65f6\uff0cDocker \u5728\u540e\u53f0\u8fd0\u884c\u7684\u6807\u51c6\u64cd\u4f5c\u5305\u62ec\uff1a\n1\u3001\u68c0\u67e5\u672c\u5730\u662f\u5426\u5b58\u5728\u6307\u5b9a\u7684\u955c\u50cf\uff0c\u4e0d\u5b58\u5728\u5c31\u4ece\u516c\u6709\u4ed3\u5e93\u4e0b\u8f7d\n2\u3001\u5229\u7528\u955c\u50cf\u521b\u5efa\u5e76\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\n3\u3001\u5206\u914d\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\uff0c\u5e76\u5728\u53ea\u8bfb\u7684\u955c\u50cf\u5c42\u5916\u9762\u6302\u8f7d\u4e00\u5c42\u53ef\u8bfb\u5199\u5c42\n4\u3001\u4ece\u5bbf\u4e3b\u4e3b\u673a\u914d\u7f6e\u7684\u7f51\u6865\u63a5\u53e3\u4e2d\u6865\u63a5\u4e00\u4e2a\u865a\u62df\u63a5\u53e3\u5230\u5bb9\u5668\u4e2d\u53bb\n5\u3001\u4ece\u5730\u5740\u6c60\u914d\u7f6e\u4e00\u4e2a ip \u5730\u5740\u7ed9\u5bb9\u5668\n6\u3001\u6267\u884c\u7528\u6237\u6307\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\n7\u3001\u6267\u884c\u5b8c\u6bd5\u540e\u5bb9\u5668\u88ab\u7ec8\u6b62\n\n\u521b\u5efa\u5bb9\u5668\u65f6\u6dfb\u52a0\u53c2\u6570  --restart=always \u540e\uff0c\u5f53 docker \u91cd\u542f\u65f6\uff0c\u5bb9\u5668\u81ea\u52a8\u542f\u52a8\u3002\ndocker \u5e94\u7528\u5bb9\u5668 \u83b7\u53d6\u5bbf\u4e3b\u673aroot\u6743\u9650\uff08\u7279\u6b8a\u6743\u9650-\uff09 --privileged=true \n\u89e3\u51b3docker \u5bb9\u5668\u65f6\u533a\u4e0d\u540c\u6b65\u7684\u65b9\u6cd5\uff1adocker run -v /etc/localtime:/etc/localtime\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'docker start <\u5bb9\u5668\u540d\u79f0>                             #docker start <\u5bb9\u5668\u540d\u79f0>\uff1a\u542f\u52a8\u5bb9\u5668\ndocker stop <\u5bb9\u5668\u540d\u79f0>                              #docker stop <\u5bb9\u5668\u540d\u79f0>\uff1a\u505c\u6b62\u5bb9\u5668\ndocker restart <\u5bb9\u5668\u540d\u79f0>                           #docker restart <\u5bb9\u5668\u540d\u79f0>\uff1a\u91cd\u542f\u5bb9\u5668\ndocker kill -s KILL <\u5bb9\u5668\u540d\u79f0>                      #docker kill <\u5bb9\u5668\u540d\u79f0>\uff1a\u6740\u6389\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668\ndocker pause <\u5bb9\u5668\u540d\u79f0>                             #docker pause\uff1a\u6682\u505c<\u5bb9\u5668\u540d\u79f0>\u63d0\u4f9b\u670d\u52a1\ndocker unpause <\u5bb9\u5668\u540d\u79f0>                           #docker unpause\uff1a\u6062\u590d<\u5bb9\u5668\u540d\u79f0>\u63d0\u4f9b\u670d\u52a1\ndocker create --name <\u5bb9\u5668\u540d\u79f0> <\u955c\u50cf\u540d\u79f0>:<\u7248\u672c\u53f7>   #docker create\uff1a\u521b\u5efa\u5bb9\u5668\u4f46\u662f\u4e0d\u542f\u52a8\ndocker exec -it <\u5bb9\u5668ID> /bin/bash                 #docker exec\uff1a\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u4e2d\u6267\u884c\u547d\u4ee4 (\u67e5\u770b\u5bb9\u5668ID\uff1adocker ps -a)\ndocker diff <\u5bb9\u5668\u540d\u79f0>                              #docker diff\uff1a\u68c0\u67e5\u5bb9\u5668\u91cc\u6587\u4ef6\u7ed3\u6784\u7684\u66f4\u6539 \ndocker port <\u5bb9\u5668ID>                               #\u67e5\u770b\u5bb9\u5668<\u5bb9\u5668ID>\u7aef\u53e3\ndocker inspect mysql:5.7                          #\u83b7\u53d6\u955c\u50cfmysql:5.7\u7684\u5143\u4fe1\u606f\ndocker top <\u5bb9\u5668\u540d\u79f0>                               #\u67e5\u770b\u5bb9\u5668<\u5bb9\u5668\u540d\u79f0>\u7684\u8fdb\u7a0b\u4fe1\u606f\ndocker top <\u5bb9\u5668ID>                                #\u67e5\u770b\u5bb9\u5668<\u5bb9\u5668ID>\u7684\u8fdb\u7a0b\u4fe1\u606f\ndocker stats                                      #\u67e5\u770b\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5                                                                   #\u67e5\u770b\u5bb9\u5668\u5360\u7528\u8d44\u6e90\u60c5\u51b5\n\ndocker exec -it <\u5bb9\u5668ID> /bin/bash\ndocker exec -it $(docker ps |grep -v pause |grep \u5e94\u7528\u540d\u79f0 |awk -F " " \'{print $1}\') /bin/bash\n\nfor i in  `docker ps |grep Up|awk \'{print $1}\'`;do echo \\ &&docker top $i; done     #\u67e5\u770b\u6240\u6709\u8fd0\u884c\u5bb9\u5668\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002\n\ndocker export -o mysql-`date +%Y%m%d`.tar <\u5bb9\u5668ID>  #docker export\uff1a\u5c06\u6587\u4ef6\u7cfb\u7edf\u4f5c\u4e3a\u4e00\u4e2atar\u5f52\u6863\u6587\u4ef6\u5bfc\u51fa\u5230STDOUT \n\ndocker commit -a "runoob.com" -m "my apache" a404c6c174a2  mymysql:v1  #\u4ece\u5bb9\u5668\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\uff0c\u5c06\u5bb9\u5668a404c6c174a2 \u4fdd\u5b58\u4e3a\u65b0\u7684\u955c\u50cf,\u5e76\u6dfb\u52a0\u63d0\u4ea4\u4eba\u4fe1\u606f\u548c\u8bf4\u660e\u4fe1\u606f\n-a :\u63d0\u4ea4\u7684\u955c\u50cf\u4f5c\u8005\uff1b\n-c :\u4f7f\u7528Dockerfile\u6307\u4ee4\u6765\u521b\u5efa\u955c\u50cf\uff1b\n-m :\u63d0\u4ea4\u65f6\u7684\u8bf4\u660e\u6587\u5b57\uff1b\n-p :\u5728commit\u65f6\uff0c\u5c06\u5bb9\u5668\u6682\u505c\u3002\n')),(0,t.kt)("p",null,"docker\u91cd\u542f\u7b56\u7565"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--restart=no \u9ed8\u8ba4\u7b56\u7565\uff0c\u5728\u5bb9\u5668\u9000\u51fa\u65f6\u4e0d\u91cd\u542f\u5bb9\u5668\n--restart=on-failure \u5728\u5bb9\u5668\u975e\u6b63\u5e38\u9000\u51fa\u65f6\uff08\u9000\u51fa\u72b6\u6001\u975e0\uff09\uff0c\u624d\u4f1a\u91cd\u542f\u5bb9\u5668\n--restart=on-failure:3 \u6307\u5b9a\u542f\u52a8\u7684\u6b21\u6570\uff0c\u5728\u5bb9\u5668\u975e\u6b63\u5e38\u9000\u51fa\u65f6\u91cd\u542f\u5bb9\u5668\uff0c\u6700\u591a\u91cd\u542f3\u6b21\n--restart=always \u5728\u5bb9\u5668\u9000\u51fa\u65f6\u603b\u662f\u91cd\u542f\u5bb9\u5668\n--restart=unless-stopped \u5728\u5bb9\u5668\u9000\u51fa\u65f6\u603b\u662f\u91cd\u542f\u5bb9\u5668\uff0c\u4f46\u662f\u4e0d\u8003\u8651\u5728Docker\u5b88\u62a4\u8fdb\u7a0b\u542f\u52a8\u65f6\u5c31\u5df2\u7ecf\u505c\u6b62\u4e86\u7684\u5bb9\u5668\n")),(0,t.kt)("h3",{id:"2\u5bb9\u5668\u72b6\u6001"},"2\u3001\u5bb9\u5668\u72b6\u6001"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker ps                                    #\u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\ndocker ps -a                                 #\u67e5\u770b\u6240\u6709\u5bb9\u5668\ndocker ps -n 5                               #\u5217\u51fa\u6700\u8fd1\u521b\u5efa\u76845\u4e2a\u5bb9\u5668\u4fe1\u606f\ndocker ps -a -q                              #\u5217\u51fa\u6240\u6709\u521b\u5efa\u7684\u5bb9\u5668ID\n\nSTATUS\u5bb9\u5668\u72b6\u6001,7\u79cd\uff1a\ncreated                                     \uff08\u5df2\u521b\u5efa\uff09\nrestarting                                  \uff08\u91cd\u542f\u4e2d\uff09\nrunning                                     \uff08\u8fd0\u884c\u4e2d\uff09\nremoving                                    \uff08\u8fc1\u79fb\u4e2d\uff09\npaused                                      \uff08\u6682\u505c\uff09\nexited                                      \uff08\u505c\u6b62\uff09\ndead                                        \uff08\u6b7b\u4ea1\uff09\n")),(0,t.kt)("h3",{id:"3\u67e5\u770b\u65e5\u5fd7"},"3\u3001\u67e5\u770b\u65e5\u5fd7"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker logs <\u5bb9\u5668\u540d\u79f0>                         #\u83b7\u53d6<\u5bb9\u5668\u540d\u79f0>\u7684\u65e5\u5fd7\ndocker logs -f --tail=10 <\u5bb9\u5668ID>             #\u83b7\u53d6<\u5bb9\u5668ID>\u7684\u65e5\u5fd7\ndocker logs -f --tail=10 $(docker ps |grep -v pause |grep \u5e94\u7528\u540d\u79f0 |awk -F \" \" '{print $1}')\n")),(0,t.kt)("h3",{id:"4\u6587\u4ef6\u590d\u5236"},"4\u3001\u6587\u4ef6\u590d\u5236"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker cp /aaa/bbb <\u5bb9\u5668ID>:/ccc/             #\u5c06\u4e3b\u673a/aaa/bbb\u76ee\u5f55\u62f7\u8d1d\u5230\u5bb9\u5668<\u5bb9\u5668ID>\u7684/ccc\u76ee\u5f55\u4e0b\ndocker cp /aaa/bbb <\u5bb9\u5668ID>:/ccc              #\u5c06\u4e3b\u673a/aaa/bbb\u76ee\u5f55\u62f7\u8d1d\u5230\u5bb9\u5668<\u5bb9\u5668ID>\u4e2d\uff0c\u76ee\u5f55\u91cd\u547d\u540d\u4e3accc\ndocker cp <\u5bb9\u5668ID>:/aaa /bbb/                 #\u5c06<\u5bb9\u5668ID>\u7684/aaa\u76ee\u5f55\u62f7\u8d1d\u5230\u4e3b\u673a\u7684/ccc\u76ee\u5f55\u4e2d\n")),(0,t.kt)("h3",{id:"5\u5220\u9664\u5bb9\u5668"},"5\u3001\u5220\u9664\u5bb9\u5668"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'docker rm -f <\u5bb9\u5668\u540d\u79f01> <\u5bb9\u5668\u540d\u79f02>                       #docker rm \uff1a\u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668rm -f <\u5bb9\u5668\u540d\u79f0> \ndocker rm -v <\u5bb9\u5668\u540d\u79f0>                                  #\u5220\u9664\u5bb9\u5668<\u5bb9\u5668\u540d\u79f0>,\u5e76\u5220\u9664\u5bb9\u5668\u6302\u8f7d\u7684\u6570\u636e\u5377\ndocker rm $(docker ps -a -q)                            #\u5220\u9664\u6240\u6709\u5df2\u7ecf\u505c\u6b62\u7684\u5bb9\u5668(-q\uff1a\u53ea\u5c55\u793a\u5bb9\u5668ID)\ndocker stop $(docker ps -a -q)                          #stop\u505c\u6b62\u6240\u6709\u5bb9\u5668\ndocker start e5ee4a252828                               #start\u542f\u52a8\u5bb9\u5668<\u5bb9\u5668ID>\ndocker rm $(docker ps -a -q)                            #remove\u5220\u9664\u6240\u6709\u5bb9\u5668\ndocker container prune                                  #\u5220\u9664\u6240\u6709\u505c\u6b62\u7684\u5bb9\u5668\ndocker rmi $(docker images -q)                          #\u5220\u9664\u6240\u6709\u7684\u955c\u50cf\ndocker rmi -f $(docker images -f "dangling=true" -q)    #\u5220\u9664\u6240\u6709\u65e0\u540d\u79f0\u7684\u955c\u50cf\uff08\u60ac\u7a7a\u955c\u50cf\uff09 -f\uff1a\u5f3a\u5236\u5220\u9664\ndocker rm $(sudo docker ps -qf status=exited)           #\u6839\u636e\u5bb9\u5668\u7684\u72b6\u6001,\u5220\u9664Exited\u72b6\u6001\u7684\u5bb9\u5668\ndocker rmi -f $(docker images MySQL -q)                 #\u901a\u8fc7docker images MySQL -q\u67e5\u8be2\u51fa MySQL \u7684\u6240\u6709\u955c\u50cf id\uff0c-q\u8868\u793a\u4ec5\u67e5\u8be2 id\uff0c\u5e76\u5c06\u8fd9\u4e9b id \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9docker rmi -f\u6307\u4ee4\uff0c\u8fd9\u6837\u6240\u6709\u7684 MySQL \u955c\u50cf\u5c31\u90fd\u88ab\u5220\u9664\u4e86\ndocker volume rm $(docker volume ls -q)                 #\u5220\u9664\u4e0d\u518d\u4f7f\u7528\u7684\u6570\u636e\u5377\ndocker volume prune                                     #\u5220\u9664\u4e0d\u518d\u4f7f\u7528\u7684\u6570\u636e\u5377\ndocker builder prune                                    #\u5220\u9664 build cache\n')),(0,t.kt)("h3",{id:"6\u76ee\u5f55\u6302\u8f7d"},"6\u3001\u76ee\u5f55\u6302\u8f7d"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker run -d -it --name demo --mount source=/tmp1, destination=/tmp2\n")),(0,t.kt)("h2",{id:"\u56dbdockerfile"},"\u56db\u3001Dockerfile"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/dockerfile"},"Dockerfile\u4ed3\u5e93")),(0,t.kt)("h3",{id:"1\u4f8b\u5b50"},"1\u3001\u4f8b\u5b50"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"FROM nginx\nRUN echo '\u8fd9\u662f\u4e00\u4e2a\u672c\u5730\u6784\u5efa\u7684nginx\u955c\u50cf'\n  \ndocker build . -f Dockfile -t images_demo:v1.0.0 \n")),(0,t.kt)("h3",{id:"2\u8bf4\u660e"},"2\u3001\u8bf4\u660e"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'docker build -t redis:v2 .\n\ndocker build --pull centos:v2 -f Dockerfile \n\u52a0\u4e0a --pull \u65f6\uff0cDockerfile \u6587\u4ef6\u4e2d \u7684 From \u57fa\u7840\u955c\u50cf \u53ef\u80fd\u4e0d\u4f1a\u4f7f\u7528\u672c\u5730\u5df2\u4e0b\u8f7d\u597d\u7684\u955c\u50cf\uff0c\u800c\u662f\u4f1a\u53bb\u8fdc\u7a0b docker \u4ed3\u5e93\u68c0\u67e5 Dockerfile \u4e2d\u7684\u57fa\u7840\u955c\u50cf \u662f\u4e0d\u662f latest \u7684\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u5c31\u4f1a\u4e0b\u8f7d \u6700\u65b0\u7684\u955c\u50cf\u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\u3002\n\nFROM nginx\nRUN echo \'\u8fd9\u662f\u4e00\u4e2a\u672c\u5730\u6784\u5efa\u7684nginx\u955c\u50cf\' > /usr/share/nginx/html/index.html\n\n. \u4e0a\u4e0b\u6587\u8def\u5f84\uff0c\u662f\u6307 docker \u5728\u6784\u5efa\u955c\u50cf\uff0c\u6709\u65f6\u5019\u60f3\u8981\u4f7f\u7528\u5230\u672c\u673a\u7684\u6587\u4ef6\uff08\u6bd4\u5982\u590d\u5236\uff09\uff0cdocker build \u547d\u4ee4\u5f97\u77e5\u8fd9\u4e2a\u8def\u5f84\u540e\uff0c\u4f1a\u5c06\u8def\u5f84\u4e0b\u7684\u6240\u6709\u5185\u5bb9\u6253\u5305\u3002\ndocker build -t nginx:v3 .\n\n#shell \u683c\u5f0f\uff1aRUN <\u547d\u4ee4\u884c\u547d\u4ee4>\n#<\u547d\u4ee4\u884c\u547d\u4ee4> \u7b49\u540c\u4e8e\u5728\u7ec8\u7aef\u64cd\u4f5c\u7684shell\u547d\u4ee4\n\n#exec \u683c\u5f0f\uff1aRUN ["\u53ef\u6267\u884c\u6587\u4ef6", "\u53c2\u65701", "\u53c2\u65702"]\n#RUN ["./test.php", "dev", "offline"] \u7b49\u4ef7\u4e8eRUN ./test.php dev offline\n\nRUN\nRUN\u547d\u4ee4\u662f\u521b\u5efaDocker\u955c\u50cf\uff08image\uff09\u7684\u6b65\u9aa4\uff0cRUN\u547d\u4ee4\u5bf9Docker\u5bb9\u5668\uff08 container\uff09\u9020\u6210\u7684\u6539\u53d8\u662f\u4f1a\u88ab\u53cd\u6620\u5230\u521b\u5efa\u7684Docker\u955c\u50cf\u4e0a\u7684\u3002\u4e00\u4e2aDockerfile\u4e2d\u53ef\u4ee5\u6709\u8bb8\u591a\u4e2aRUN\u547d\u4ee4\u3002\n\nCMD\nCMD\u547d\u4ee4\u662f\u5f53Docker\u955c\u50cf\u88ab\u542f\u52a8\u540eDocker\u5bb9\u5668\u5c06\u4f1a\u9ed8\u8ba4\u6267\u884c\u7684\u547d\u4ee4\u3002\u4e00\u4e2aDockerfile\u4e2d\u53ea\u80fd\u6709\u4e00\u4e2aCMD\u547d\u4ee4\u3002\u901a\u8fc7\u6267\u884cdocker run imageother_command\u542f\u52a8\u955c\u50cf\u53ef\u4ee5\u91cd\u8f7dCMD\u547d\u4ee4\u3002\n')),(0,t.kt)("h2",{id:"\u4e94docker-compose"},"\u4e94\u3001Docker-Compose"),(0,t.kt)("h3",{id:"1\u5b89\u88c5"},"1\u3001\u5b89\u88c5"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'https://github.com/docker/compose/releases/tag/v2.16.0\n\ncurl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose #\u4e0b\u8f7ddocker-compose\nchmod +x /usr/local/bin/docker-compose                          #\u6dfb\u52a0\u6267\u884c\u6743\u9650\nln -s /usr/local/bin/docker-compose /usr/bin/docker-compose     #\u8bbe\u7f6e\u8f6f\u8fde\u63a5\ndocker-compose --version                                        #\u67e5\u770b\u7248\u672c\n')),(0,t.kt)("h3",{id:"2\u547d\u4ee4"},"2\u3001\u547d\u4ee4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker-compose ps                       #ps\uff1a\u5217\u51fa\u6240\u6709\u8fd0\u884c\u5bb9\u5668\ndocker-compose logs                     #logs\uff1a\u67e5\u770b\u670d\u52a1\u65e5\u5fd7\u8f93\u51fa\ndocker-compose port <\u5bb9\u5668\u540d\u79f0> 8761      #port\uff1a\u6253\u5370\u7ed1\u5b9a\u7684\u516c\u5171\u7aef\u53e3\uff0c\u4e0b\u9762\u547d\u4ee4\u53ef\u4ee5\u8f93\u51fa<\u5bb9\u5668\u540d\u79f0> \u670d\u52a18761\u7aef\u53e3\u6240\u7ed1\u5b9a\u7684\u516c\u5171\u7aef\u53e3\ndocker-compose build                    #build\uff1a\u6784\u5efa\u6216\u8005\u91cd\u65b0\u6784\u5efa\u670d\u52a1\ndocker-compose start <\u5bb9\u5668\u540d\u79f0>          #start\uff1a\u542f\u52a8\u6307\u5b9a\u670d\u52a1\u5df2\u5b58\u5728\u7684\u5bb9\u5668\ndocker-compose stop <\u5bb9\u5668\u540d\u79f0>           #stop\uff1a\u505c\u6b62\u5df2\u8fd0\u884c\u7684\u670d\u52a1\u7684\u5bb9\u5668\ndocker-compose stop                     #stop\uff1a\u505c\u6b62\u5bb9\u5668\ndocker-compose up                       #up\uff1a\u6784\u5efa\u3001\u542f\u52a8\u5bb9\u5668\ndocker-compose up -d                    #-d\uff1a\u540e\u53f0\u8fd0\u884c\ndocker-compose rm <\u5bb9\u5668\u540d\u79f0>             #rm\uff1a\u5220\u9664\u6307\u5b9a\u670d\u52a1\u7684\u5bb9\u5668\ndocker-compose kill <\u5bb9\u5668\u540d\u79f0>           #kill\uff1a\u901a\u8fc7\u53d1\u9001SIGKILL\u4fe1\u53f7\u6765\u505c\u6b62\u6307\u5b9a\u670d\u52a1\u7684\u5bb9\u5668\ndocker-compose scale user=3 movie=3     #pull\uff1a\u4e0b\u8f7d\u670d\u52a1\u955c\u50cf, scale\uff1a\u8bbe\u7f6e\u6307\u5b9a\u670d\u52a1\u8fd0\u884c\u5bb9\u5668\u7684\u4e2a\u6570\uff0c\u4ee5 service=num \u5f62\u5f0f\u6307\u5b9a\ndocker-compose run web bash             #run\uff1a\u5728\u4e00\u4e2a\u670d\u52a1\u4e0a\u6267\u884c\u4e00\u4e2a\u547d\u4ee4\ndocker-compose --version                #\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f\n")),(0,t.kt)("p",null,"\u8e29\u5751\uff1adocker\u6302\u8f7d\u76ee\u5f55\u540e\u65e0\u6743\u9650\u8bbf\u95ee\u76ee\u5f55\uff0c\u539f\u56e0\u662fdocker\u521b\u5efa\u76ee\u5f55\u9ed8\u8ba4\u7528\u6237id\u662f1000\uff0c\u9700\u5728\u5bbf\u4e3b\u673a\u521b\u5efa\u4e00\u4e2a\u7528\u6237id\u548c\u7ec4id\u4e3a1000\u7684\u7528\u6237\u624d\u884c\u3002"),(0,t.kt)("h2",{id:"\u516ddocker\u4ed3\u5e93"},"\u516d\u3001Docker\u4ed3\u5e93"),(0,t.kt)("h3",{id:"1harbor\u4ed3\u5e93"},"1\u3001Harbor\u4ed3\u5e93"),(0,t.kt)("p",null,"\u542f\u52a8"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"cd /usr/local/harbor && docker-compose up -d    #\u540e\u53f0\u91cd\u542f\ncd /usr/local/harbor && docker-compose ps       #\u8fdb\u5165\u5230\u6709docker-compose.yml\u624d\u80fd\u6267\u884cdocker-compose ps\n")),(0,t.kt)("p",null,"\u767b\u9646/\u767b\u51fa"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker login -u\u7528\u6237\u540d -p\u5bc6\u7801                   #\u767b\u9646\ndocker logout -u\u7528\u6237\u540d -p\u5bc6\u7801                  #\u767b\u51fa\n")),(0,t.kt)("h3",{id:"2dockerhub\u4ed3\u5e93"},"2\u3001DockerHub\u4ed3\u5e93"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://hub.docker.com/search?q="},"Dockerhub\u4ed3\u5e93"),"\uff1a\u5b89\u88c5\u8f6f\u4ef6\uff0c\u5728\u8fd9\u91cc\u627e\uff01\n",(0,t.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/wwweeeiii/"},"DockerHub-wwweeeiii\u4ed3\u5e93")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker login -u\u7528\u6237\u540d -p\u5bc6\u7801                                   #\u767b\u9646 \u6267\u884c\uff1adocker login -uwwweeeiii\ndocker logout -u\u7528\u6237\u540d -p\u5bc6\u7801                                  #\u767b\u51fa\ndocker tag images_demo:v1.0.0 wwweeeiii/images_demo:v1.0.0   #docker tag \u672c\u5730\u955c\u50cf:\u672c\u5730\u955c\u50cftag \u8fdc\u7a0b\u4ed3\u5e93/\u8fdc\u7a0b\u955c\u50cf:\u8fdc\u7a0b\u955c\u50cftag\ndocker push wwweeeiii/images_demo:v1.0.0                     #docker push \u8fdc\u7a0b\u4ed3\u5e93/\u8fdc\u7a0b\u955c\u50cf:\u8fdc\u7a0b\u955c\u50cftag\n")),(0,t.kt)("h3",{id:"3\u963f\u91cc\u4e91\u4ed3\u5e93"},"3\u3001\u963f\u91cc\u4e91\u4ed3\u5e93"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://cr.console.aliyun.com/cn-hangzhou/instance/repositories"},"\u963f\u91cc\u4e91\u4ed3\u5e93\u5730\u5740")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker login --username=weimenghua123 --password=root registry.cn-hangzhou.aliyuncs.com\ndocker tag mongo registry.cn-hangzhou.aliyuncs.com/weimmmhhh/images_demo:v1.0.0\ndocker push registry.cn-hangzhou.aliyuncs.com/weimmmhhh/images_demo:v1.0.0\n")),(0,t.kt)("h3",{id:"4\u767e\u5ea6\u4e91\u4ed3\u5e93"},"4\u3001\u767e\u5ea6\u4e91\u4ed3\u5e93"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker login --username=20fe83c825d94766815bfeae696cb954 --password=root registry.baidubce.com\ndocker tag portainer/portainer registry.baidubce.com/wwweeeiii/images_demo:v1.0.0\ndocker push registry.baidubce.com/wwweeeiii/images_demo:v1.0.0\n")),(0,t.kt)("h3",{id:"5\u817e\u8baf\u4e91\u4ed3\u5e93"},"5\u3001\u817e\u8baf\u4e91\u4ed3\u5e93"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://console.cloud.tencent.com/tcr/repository"},"\u817e\u8baf\u4e91\u4ed3\u5e93\u5730\u5740")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u767b\u5f55\u817e\u8baf\u4e91\u5bb9\u5668\u955c\u50cf\u670d\u52a1 Docker Registry\ndocker login ccr.ccs.tencentyun.com --username=100026920351\n\n\u4ece Registry \u62c9\u53d6\u955c\u50cf\ndocker pull ccr.ccs.tencentyun.com/weimmmhhh/demo:[tag]\n\n\u5411 Registry \u4e2d\u63a8\u9001\u955c\u50cf\ndocker tag [imageId] ccr.ccs.tencentyun.com/weimmmhhh/demo:[tag]\ndocker push ccr.ccs.tencentyun.com/weimmmhhh/demo:[tag]\n")),(0,t.kt)("h2",{id:"\u4e03\u5176\u5b83"},"\u4e03\u3001\u5176\u5b83"),(0,t.kt)("h3",{id:"1portainer"},"1\u3001portainer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker search portainer                         #\u641c\u7d22\u955c\u50cf\ndocker pull portainer/portainer                 #\u4e0b\u8f7d\u955c\u50cf\n\ndocker run -p 9000:9000 -p 8000:8000 --name portainer \\\n--restart=always \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-v /usr/local/docker/portainer/data:/data \\\n-d portainer/portainer\n\nhttp://127.0.0.1:9000/#!/home                   #\u8bbf\u95ee\n")),(0,t.kt)("h3",{id:"2\u78c1\u76d8\u7a7a\u95f4"},"2\u3001\u78c1\u76d8\u7a7a\u95f4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker system df        #\u67e5\u770bDocker\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\ndocker system prune     #\u4e00\u952e\u6e05\u7406docker\u7a7a\u95f4\n")),(0,t.kt)("p",null,"TYPE \u4f7f\u7528\u78c1\u76d8\u7684 4 \u79cd\u7c7b\u578b\uff1a",(0,t.kt)("br",{parentName:"p"}),"\n","Images\uff1a\u6240\u6709\u955c\u50cf\u5360\u7528\u7684\u7a7a\u95f4\uff0c\u5305\u62ec\u62c9\u53d6\u4e0b\u6765\u7684\u955c\u50cf\uff0c\u548c\u672c\u5730\u6784\u5efa\u7684\u3002",(0,t.kt)("br",{parentName:"p"}),"\n","Containers\uff1a\u8fd0\u884c\u7684\u5bb9\u5668\u5360\u7528\u7684\u7a7a\u95f4\uff0c\u8868\u793a\u6bcf\u4e2a\u5bb9\u5668\u7684\u8bfb\u5199\u5c42\u7684\u7a7a\u95f4\u3002",(0,t.kt)("br",{parentName:"p"}),"\n","Local Volumes\uff1a\u5bb9\u5668\u6302\u8f7d\u672c\u5730\u6570\u636e\u5377\u7684\u7a7a\u95f4\u3002",(0,t.kt)("br",{parentName:"p"}),"\n","Build Cache\uff1a\u955c\u50cf\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u7f13\u5b58\u7a7a\u95f4\uff08\u53ea\u6709\u5728\u4f7f\u7528 BuildKit \u65f6\u624d\u6709\uff0cDocker 18.09 \u4ee5\u540e\u53ef\u7528\uff09\u3002     "),(0,t.kt)("h3",{id:"3entrypointsh"},"3\u3001entrypoint.sh"),(0,t.kt)("p",null,"\u5728Docker\u4e2d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"entrypoint"),"\u662f\u7528\u4e8e\u8bbe\u7f6e\u5bb9\u5668\u542f\u52a8\u65f6\u8981\u8fd0\u884c\u7684\u9ed8\u8ba4\u547d\u4ee4\u6216\u811a\u672c\u7684\u6307\u4ee4\u3002\u5b83\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u6216\u811a\u672c\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u5bb9\u5668\u7684\u5165\u53e3\u70b9\u3002\u5f53\u5bb9\u5668\u542f\u52a8\u65f6\uff0c\u8be5\u811a\u672c\u4f1a\u88ab\u81ea\u52a8\u6267\u884c\u3002\n",(0,t.kt)("inlineCode",{parentName:"p"},"entrypoint")," \u6307\u4ee4\u901a\u5e38\u7528\u4e8e\u8bbe\u7f6e\u5bb9\u5668\u7684\u4e3b\u8981\u8fdb\u7a0b\u6216\u670d\u52a1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u521b\u5efa\u4e86\u4e00\u4e2a\u57fa\u4e8eNodeJS\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"entrypoint")," \u6307\u5b9a\u542f\u52a8 Node \u8fdb\u7a0b\u7684\u547d\u4ee4\u548c\u53c2\u6570\u3002\u5f53\u5bb9\u5668\u542f\u52a8\u65f6\uff0cNode \u8fdb\u7a0b\u5c06\u81ea\u52a8\u542f\u52a8\u5e76\u5f00\u59cb\u63d0\u4f9b\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u670d\u52a1\u3002\n\u53e6\u5916\uff0c\u901a\u8fc7\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"docker run")," \u547d\u4ee4\u4e2d\u6307\u5b9a\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6 ",(0,t.kt)("inlineCode",{parentName:"p"},"entrypoint")," \u4e2d\u5b9a\u4e49\u7684\u9ed8\u8ba4\u547d\u4ee4\u6216\u811a\u672c\uff0c\u4ece\u800c\u5728\u542f\u52a8\u5bb9\u5668\u65f6\u8fd0\u884c\u4e0d\u540c\u7684\u547d\u4ee4\u6216\u811a\u672c\u3002"))}s.isMDXComponent=!0}}]);