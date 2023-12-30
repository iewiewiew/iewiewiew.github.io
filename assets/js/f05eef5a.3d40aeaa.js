"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5578],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),k=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},o=function(e){var n=k(e.components);return i.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=k(t),c=a,m=u["".concat(p,".").concat(c)]||u[c]||d[c]||s;return t?i.createElement(m,r(r({ref:n},o),{},{components:t})):i.createElement(m,r({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var k=2;k<s;k++)r[k]=t[k];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>k});var i=t(7462),a=(t(7294),t(3905));const s={},r=void 0,l={unversionedId:"Jenkins/Jenkins \u6301\u7eed\u96c6\u6210\u5de5\u5177",id:"Jenkins/Jenkins \u6301\u7eed\u96c6\u6210\u5de5\u5177",title:"Jenkins \u6301\u7eed\u96c6\u6210\u5de5\u5177",description:"[TOC]",source:"@site/docs/Jenkins/Jenkins \u6301\u7eed\u96c6\u6210\u5de5\u5177.md",sourceDirName:"Jenkins",slug:"/Jenkins/Jenkins \u6301\u7eed\u96c6\u6210\u5de5\u5177",permalink:"/docs/Jenkins/Jenkins \u6301\u7eed\u96c6\u6210\u5de5\u5177",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CICD_Tool",permalink:"/docs/Jenkins/CICD_Tool"},next:{title:"Pipeline \u6d41\u6c34\u7ebf",permalink:"/docs/Jenkins/Pipeline/Pipeline \u6d41\u6c34\u7ebf"}},p={},k=[{value:"\u4e00\u3001Jenkins \u4ecb\u7ecd",id:"\u4e00jenkins-\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001Jenkins \u642d\u5efa",id:"\u4e8cjenkins-\u642d\u5efa",level:2},{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:3},{value:"Linux war \u5305\u5b89\u88c5",id:"linux-war-\u5305\u5b89\u88c5",level:3},{value:"Windows war \u5305\u5b89\u88c5",id:"windows-war-\u5305\u5b89\u88c5",level:3},{value:"Jenkins \u670d\u52a1\u5e38\u7528\u64cd\u4f5c",id:"jenkins-\u670d\u52a1\u5e38\u7528\u64cd\u4f5c",level:3},{value:"\u4e09\u3001Jenkins \u6559\u7a0b",id:"\u4e09jenkins-\u6559\u7a0b",level:2},{value:"\u521b\u5efa job \u7684\u5b8c\u6574\u6d41\u7a0b",id:"\u521b\u5efa-job-\u7684\u5b8c\u6574\u6d41\u7a0b",level:3},{value:"Jenkins \u51ed\u636e\u7ba1\u7406",id:"jenkins-\u51ed\u636e\u7ba1\u7406",level:3},{value:"Jenkins \u7528\u6237\u7ba1\u7406",id:"jenkins-\u7528\u6237\u7ba1\u7406",level:3},{value:"Jenkins \u6743\u9650\u63a7\u5236",id:"jenkins-\u6743\u9650\u63a7\u5236",level:3},{value:"Jenkins \u7cfb\u7edf\u914d\u7f6e",id:"jenkins-\u7cfb\u7edf\u914d\u7f6e",level:3},{value:"\u90ae\u4ef6\u901a\u77e5",id:"\u90ae\u4ef6\u901a\u77e5",level:4},{value:"Jenkins \u63d2\u4ef6\u7ba1\u7406",id:"jenkins-\u63d2\u4ef6\u7ba1\u7406",level:3},{value:"<strong>Publish Over SSH</strong>",id:"publish-over-ssh",level:4},{value:"<strong>Maven Integration</strong>",id:"maven-integration",level:4},{value:"<strong>Blue Ocean</strong>",id:"blue-ocean",level:4},{value:"Jenkins \u96c6\u6210 Sonar",id:"jenkins-\u96c6\u6210-sonar",level:3},{value:"Jenkins \u96c6\u6210 Pytest + Allure",id:"jenkins-\u96c6\u6210-pytest--allure",level:3},{value:"Jenkins \u96c6\u6210 JMeter + Ant",id:"jenkins-\u96c6\u6210-jmeter--ant",level:3},{value:"\u56db\u3001Jenkins \u793a\u4f8b",id:"\u56dbjenkins-\u793a\u4f8b",level:2},{value:"Java Maven \u9879\u76ee\u6784\u5efa",id:"java-maven-\u9879\u76ee\u6784\u5efa",level:3},{value:"\u4e94\u3001Jenkins API",id:"\u4e94jenkins-api",level:2},{value:"\u516d\u3001\u77e5\u8bc6\u788e\u7247",id:"\u516d\u77e5\u8bc6\u788e\u7247",level:2}],o={toc:k},u="wrapper";function d(e){let{components:n,...s}=e;return(0,a.kt)(u,(0,i.Z)({},o,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("hr",null),(0,a.kt)("h1",{align:"center"},"Jenkins \u6301\u7eed\u96c6\u6210\u5de5\u5177"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,a.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.11.11",(0,a.kt)("br",{parentName:"p"}),"\n","Description\uff1aJenkins")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/"},"Jenkins \u5b98\u7f51"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.processon.com/mindmap/6479bee1e840aa69e0ec8790"},"Jenkins \u56fe\u8c31")),(0,a.kt)("h2",{id:"\u4e00jenkins-\u4ecb\u7ecd"},"\u4e00\u3001Jenkins \u4ecb\u7ecd"),(0,a.kt)("p",null,"Jenkins \u662f\u4e00\u4e2a\u6d41\u884c\u7684\u5f00\u6e90\u81ea\u52a8\u5316\u670d\u52a1\u5668\uff0c\u53ef\u7528\u4e8e\u81ea\u52a8\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u8f6f\u4ef6\u3002\u5b83\u652f\u6301\u8bb8\u591a\u4e0d\u540c\u7684\u63d2\u4ef6\u548c\u96c6\u6210\uff0c\u53ef\u4ee5\u4e0e\u5176\u4ed6\u5de5\u5177\u548c\u5e73\u53f0\u96c6\u6210\uff0c\u4f8b\u5982 Git\u3001Docker\u3001Kubernetes \u548c AWS \u7b49\u3002Jenkins \u5177\u6709\u5e7f\u6cdb\u7684\u5e94\u7528\u573a\u666f\uff0c\u5e76\u4e14\u88ab\u5e7f\u6cdb\u7528\u4e8e DevOps \u5b9e\u8df5\u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Jenkins \u539f\u7406")),(0,a.kt)("p",null,"1\u3001\u6784\u5efa\u524d\uff08\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u6784\u5efa\u65f6\uff09\uff0cjenkins \u4e3a\u6bcf\u4e2a job \u521b\u5efa\u5355\u72ec\u5de5\u4f5c\u7a7a\u95f4\u76ee\u5f55\uff0c\u6bcf\u6b21\u6784\u5efa\u901a\u8fc7 git \u5c06\u4ee3\u7801\u62c9\u53d6\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u76ee\u5f55\uff08workspace\uff09\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001\u6784\u5efa\u65f6\uff0cjenkins \u6267\u884c build \u811a\u672c\uff0c\u811a\u672c\u4e00\u822c\u62c9\u53d6\u4ee3\u7801\uff0c\u524d\u7aef\u6253\u5305\uff0c\u540e\u7aef\u6253\u5305\uff0c\u5c06\u6253\u5305\u540e\u7684\u6587\u4ef6\u53d1\u9001\u5230\u76ee\u6807\u673a\u5668\uff0c\u91cd\u542f\u5e94\u7528\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","3\u3001\u6784\u5efa\u540e\uff0c\u53d1\u9001\u90ae\u4ef6\u7ed9\u89e6\u53d1\u8005\u6216\u8005\u751f\u6210\u6d4b\u8bd5\u62a5\u544a\u3002"),(0,a.kt)("h2",{id:"\u4e8cjenkins-\u642d\u5efa"},"\u4e8c\u3001Jenkins \u642d\u5efa"),(0,a.kt)("h3",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4e0b\u8f7d\u811a\u672c\nwget https://raw.githubusercontent.com/iewiewiew/wei-notebook/master/Docker/script/install_software.sh\n\n\u6267\u884c\u811a\u672c\nchmod u+x 777 install_software.sh && sh install_software.sh jenkins\n")),(0,a.kt)("p",null,"\u83b7\u53d6\u521d\u59cb\u5316\u5bc6\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8fdb\u5165\u5bb9\u5668\u67e5\u770b\u521d\u59cb\u5316\u5bc6\u7801\ndocker exec -it jenkins bash -c 'cat /var/jenkins_home/secrets/initialAdminPassword'\n\n\u5982\u505a\u76ee\u5f55\u6302\u8f7d\uff0c\u76f4\u63a5\u5728\u5bbf\u4e3b\u673a\u6267\u884c\ncat /var/jenkins_home/secrets/initialAdminPassword\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(573).Z,width:"1511",height:"748"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u3010\u5b89\u88c5\u63a8\u8350\u7684\u63d2\u4ef6\u3011\uff0c\u540e\u7eed\u9700\u8981\u6dfb\u52a0\u63d2\u4ef6\u8bdd\u53ef\u5728\u3010\u63d2\u4ef6\u7ba1\u7406\u3011\u8fdb\u884c\u6dfb\u52a0"),(0,a.kt)("p",null,"![](./img/\u81ea\u5b9a\u4e49 Jenkins.png)"),(0,a.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6 ing"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3956).Z,width:"1511",height:"747"})),(0,a.kt)("p",null,"\u521b\u5efa\u7b2c\u4e00\u4e2a\u7ba1\u7406\u5458\u7528\u6237\uff0c\u8fd9\u91cc\u8d26\u53f7\u5bc6\u7801\u8bbe\u7f6e\u4e3a admin/admin"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1719).Z,width:"1511",height:"749"})),(0,a.kt)("p",null,"\u9ed8\u8ba4\u4f7f\u7528\u5b9e\u4f8b\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(280).Z,width:"1511",height:"748"})),(0,a.kt)("p",null,"\u8fdb\u5165  Jenkins \u5de5\u4f5c\u53f0"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3436).Z,width:"1511",height:"748"})),(0,a.kt)("h3",{id:"linux-war-\u5305\u5b89\u88c5"},"Linux war \u5305\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://updates.jenkins-ci.org/download/war/"},"Jenkins war \u5305\u4e0b\u8f7d\u5730\u5740"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/download/thank-you-downloading-windows-installer-stable"},"Jenkins msi \u5305\u4e0b\u8f7d\u5730\u5740"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u542f\u52a8 Jenkins"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"nohup java -Xmx3072m -Xms3072m -Xmn768m -XX:PermSize=128m -XX:MaxPermSize=256M -Xss512k -jar jenkins.war &")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JVM \u53c2\u6570\u542b\u4e49\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-Xms: \u4f7f\u7528\u7684\u6700\u5c0f\u5806\u5185\u5b58\u5927\u5c0f\n-Xmx: \u4f7f\u7528\u7684\u6700\u5927\u5806\u5185\u5b58\u5927\u5c0f\n-XX:PermSize: \u5185\u5b58\u7684\u6c38\u4e45\u4fdd\u5b58\u533a\u57df\u5927\u5c0f\n-XX:MaxPermSize: \u6700\u5927\u5185\u5b58\u7684\u6c38\u4e45\u4fdd\u5b58\u533a\u57df\u5927\u5c0f\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1 Jenkins"),"\n\u8bbf\u95ee\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/"},"http://127.0.0.1:8080/"),"  "),(0,a.kt)("h3",{id:"windows-war-\u5305\u5b89\u88c5"},"Windows war \u5305\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u542f\u52a8 Jenkins"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"java -jar jenkins.war"),"\n\u6ce8\uff1a\u5982\u679c Jenkins \u7ed9\u63d0\u793a\u7684\u8def\u5f84\u4e0d\u5bf9\uff0c\u53ef\u7528 everything \u76f4\u63a5\u641c\u7d22 initialAdminPassword\n\u8def\u5f841\uff1aC:\\Windows\\SysWOW64\\config\\systemprofile\\AppData\\Local\\Jenkins",".","jenkins\\secrets\\initialAdminPassword\n\u8def\u5f842\uff1aC:\\Users\\user",".","jenkins\\secrets\\initialAdminPassword"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1 Jenkins"),"\n\u8bbf\u95ee\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/"},"http://127.0.0.1:8080/"),"  "),(0,a.kt)("h3",{id:"jenkins-\u670d\u52a1\u5e38\u7528\u64cd\u4f5c"},"Jenkins \u670d\u52a1\u5e38\u7528\u64cd\u4f5c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"windows")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u505c\u6b62\u670d\u52a1\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"jenkins.exe stop")),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8\u670d\u52a1\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"jenkins.exe start")),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"jenkins.exe restart"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"windows \u548c Linux")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed jenkins \u670d\u52a1\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/exit")),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u542f\u52a8 jenkins \u670d\u52a1\u5668\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/restart")),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u4fe1\u606f\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/reload"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"curl \u8c03\u7528 Jenkins \u63a5\u53e3"),(0,a.kt)("br",{parentName:"p"}),"\n","\u683c\u5f0f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"curl -X POST http://{JekinsUrl} --user username:APItoken"),(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5b50\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"curl -X POST http://localhost:8080 --user admin:1167fe0098226d9f8fc89e74b235d4bf65")),(0,a.kt)("h2",{id:"\u4e09jenkins-\u6559\u7a0b"},"\u4e09\u3001Jenkins \u6559\u7a0b"),(0,a.kt)("h3",{id:"\u521b\u5efa-job-\u7684\u5b8c\u6574\u6d41\u7a0b"},"\u521b\u5efa job \u7684\u5b8c\u6574\u6d41\u7a0b"),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u65b0\u5efa Item\u3011> \u8f93\u5165\u4e00\u4e2a\u4efb\u52a1\u540d\u79f0\uff0c\u5982\uff1ajob-demo > \u9009\u62e9\u3010\u6d41\u6c34\u7ebf\u3011> \u70b9\u51fb\u3010\u786e\u5b9a\u3011"),(0,a.kt)("p",null,"![](./img/\u521b\u5efa job.png)"),(0,a.kt)("p",null,"\u8fdb\u5165 job \u914d\u7f6e\u9875\u9762\uff0c\u9009\u62e9\u3010Pipeline script\u3011\uff0c\u9009\u62e9\u3010try sample Pipeline\u3011\uff0c\u70b9\u51fb\u3010\u4fdd\u5b58\u3011"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7999).Z,width:"1511",height:"748"})),(0,a.kt)("p",null,"\u521b\u5efa job \u540e\u70b9\u51fb\u3010\u7acb\u5373\u6784\u5efa\u3011\u5373\u53ef\u8fd0\u884c job"),(0,a.kt)("p",null,"![](./img/\u8fd0\u884c job.png)"),(0,a.kt)("p",null,"\u70b9\u51fb\u65e5\u5fd7 ID\uff0c\u5982\uff1a#1\uff0c\u8fdb\u5165\u63a7\u5236\u53f0\u67e5\u770b\u65e5\u5fd7"),(0,a.kt)("p",null,"![](./img/\u67e5\u770b job \u65e5\u5fd7.png)"),(0,a.kt)("h3",{id:"jenkins-\u51ed\u636e\u7ba1\u7406"},"Jenkins \u51ed\u636e\u7ba1\u7406"),(0,a.kt)("p",null,"\u4ece\u5de5\u4f5c\u53f0\u8fdb\u5165\u7cfb\u7edf\u7ba1\u7406 > \u51ed\u636e > \u7cfb\u7edf > \u5168\u5c40\u51ed\u636e\uff0c\u53ef\u4ee5\u67e5\u770b Jenkins \u51ed\u636e\u7c7b\u578b\u6709\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528\u6237\u540d\u548c\u5bc6\u7801\uff08Username with password\uff09\uff1a\u6700\u57fa\u672c\u7684\u51ed\u636e\u7c7b\u578b\uff0c\u5305\u542b\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"),(0,a.kt)("li",{parentName:"ol"},"GitHub \u51ed\u636e\uff08GitHub App\uff09\uff1a\u7528\u4e8e\u8bbf\u95ee GitHub \u5e94\u7528\u7a0b\u5e8f\u7684\u51ed\u636e\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ol"},"SSH \u7528\u6237\u540d\u548c\u79c1\u94a5\uff08SSH Username with private key\uff09\uff1a\u7528\u4e8e SSH \u8bbf\u95ee\u7684\u51ed\u636e\u7c7b\u578b\uff0c\u5305\u542b\u7528\u6237\u540d\u548c\u79c1\u94a5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bc6\u94a5\u5bf9\uff08Secret file\uff09\uff1a\u5305\u542b\u673a\u5bc6\u4fe1\u606f\u6216\u5bc6\u7801\u7b49\u654f\u611f\u6570\u636e\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ee4\u724c\uff08Secret text\uff09\uff1a\u5305\u542b\u5355\u4e2a\u673a\u5bc6\u5b57\u7b26\u4e32\u7684\u51ed\u636e\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bc1\u4e66\uff08Certificate\uff09\uff1a\u7528\u4e8e\u5728 Jenkins \u4e2d\u4e0e\u5176\u4ed6\u7cfb\u7edf\u6216\u670d\u52a1\u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u3002\u5b83\u901a\u5e38\u5305\u542b\u4e00\u4e2a\u516c\u94a5\u548c\u4e00\u4e2a\u79c1\u94a5\uff0c\u7528\u4e8e\u52a0\u5bc6\u548c\u89e3\u5bc6\u6570\u636e\u3002\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5255).Z,width:"1511",height:"749"})),(0,a.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a SSH Username with private key \u51ed\u636e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9448).Z,width:"1511",height:"749"})),(0,a.kt)("h3",{id:"jenkins-\u7528\u6237\u7ba1\u7406"},"Jenkins \u7528\u6237\u7ba1\u7406"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4170).Z,width:"1511",height:"748"})),(0,a.kt)("h3",{id:"jenkins-\u6743\u9650\u63a7\u5236"},"Jenkins \u6743\u9650\u63a7\u5236"),(0,a.kt)("p",null,"1\u3001Jenkins \u6743\u9650",(0,a.kt)("br",{parentName:"p"}),"\n","\u4ee5 dev_base \u5f00\u5934\uff1adev_base.*  "),(0,a.kt)("p",null,"2\u3001Jenkins \u89c6\u56fe\u8fc7\u6ee4",(0,a.kt)("br",{parentName:"p"}),"\n","\u4ee5 common \u5f00\u5934\u4e14\u4e0d\u5305\u542b pro\uff1a^common((?!pro).)",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("br",{parentName:"em"}),"\u4ee5 dev_common \u5f00\u5934\uff1a^(dev_common)."),(0,a.kt)("br",{parentName:"p"}),"\n","\u4ee5 sonar_fb \u6216\u8005 sonar_jly \u5f00\u5934\uff1a^(sonar_fb|sonar_jly).*  "),(0,a.kt)("h3",{id:"jenkins-\u7cfb\u7edf\u914d\u7f6e"},"Jenkins \u7cfb\u7edf\u914d\u7f6e"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Jenkins \u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1a/var/jenkins_home/config.xml\njob \u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1a/var/jenkins_home/jobs/*/config.xml\n\u4fee\u6539\u8be5\u6587\u4ef6\u540e\u9700\u91cd\u542f jenkins \u624d\u80fd\u751f\u6548"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u66f4\u6539 Jenkins \u5de5\u4f5c\u76ee\u5f55")),(0,a.kt)("p",null,"\u505c\u6b62 Jenkins \u670d\u52a1\uff1a\u6ce8\uff1arestart \u91cd\u542f\u65e0\u6548\u7684\u8bdd\uff0ckill -9 \u7ed3\u675f\u8fdb\u7a0b\u518d\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim /etc/profile\uff0c\u6dfb\u52a0\uff1a\nexport JENKINS_HOME=/data/.jenkins\n\ncd /etc && source profile\n")),(0,a.kt)("p",null,"\u67e5\u770b\u914d\u7f6e\u53d8\u66f4\uff1aJenkins > \u7cfb\u7edf\u8bbe\u7f6e\uff1a\u4e3b\u76ee\u5f55 \u5df2\u53d8\u66f4\u4e3a\u65b0\u7684\u76ee\u5f55"),(0,a.kt)("p",null,"\u5c06\u539f\u6709\u5de5\u4f5c\u7a7a\u76f8\u5173\u5185\u5bb9\u62f7\u8d1d\u5230\u65b0\u7684\u5de5\u4f5c\u7a7a\u95f4"),(0,a.kt)("h4",{id:"\u90ae\u4ef6\u901a\u77e5"},"\u90ae\u4ef6\u901a\u77e5"),(0,a.kt)("h3",{id:"jenkins-\u63d2\u4ef6\u7ba1\u7406"},"Jenkins \u63d2\u4ef6\u7ba1\u7406"),(0,a.kt)("p",null,"\u4ece\u5de5\u4f5c\u53f0\u8fdb\u5165\u7cfb\u7edf\u7ba1\u7406 > \u63d2\u4ef6\u7ba1\u7406\uff0c\u5728 Avaliable plugins \u641c\u7d22\u63d2\u4ef6\u5e76\u8fdb\u884c\u5b89\u88c5\uff0c\u5b89\u88c5\u5b8c\u6210\u540e\u9700\u91cd\u542f Jenkins \u624d\u4f1a\u751f\u6548\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(730).Z,width:"1511",height:"748"})),(0,a.kt)("h4",{id:"publish-over-ssh"},(0,a.kt)("strong",{parentName:"h4"},"Publish Over SSH")),(0,a.kt)("p",null,"\u4ece\u5de5\u4f5c\u53f0\u8fdb\u5165\u7cfb\u7edf\u7ba1\u7406 > \u7cfb\u7edf\uff0c\u627e\u5230 Publish Over SSH\uff0c\u586b\u5199\u5bc6\u7801/\u516c\u94a5\u3001\u540d\u79f0\u3001\u4e3b\u673a IP\u3001\u7528\u6237\u540d\u3001\u8fdc\u7a0b\u673a\u5668\u53ef\u8bbf\u95ee\u7684\u76ee\u5f55\uff0c\u70b9\u51fb\u3010Test Configuration\u3011\u8fdb\u884c\u6d4b\u8bd5\uff0c\u8fd4\u56de success \u8868\u793a\u8fde\u63a5\u6210\u529f\uff0c\u70b9\u51fb\u3010\u4fdd\u5b58\u3011"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9362).Z,width:"1511",height:"748"})),(0,a.kt)("h4",{id:"maven-integration"},(0,a.kt)("strong",{parentName:"h4"},"Maven Integration")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9357).Z,width:"1511",height:"748"})),(0,a.kt)("h4",{id:"blue-ocean"},(0,a.kt)("strong",{parentName:"h4"},"Blue Ocean")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/zh/doc/book/blueocean/"},"Blue Ocean \u5e2e\u52a9\u6587\u6863")),(0,a.kt)("p",null,"\u8fdb\u5165\u5de5\u4f5c\u53f0\uff0c\u5c55\u793a Blue Ocean \u7684\u5165\u53e3"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4125).Z,width:"1511",height:"748"})),(0,a.kt)("p",null,"\u8fdb\u5165 Blue Ocean \u9875\u9762"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9484).Z,width:"1511",height:"747"})),(0,a.kt)("h3",{id:"jenkins-\u96c6\u6210-sonar"},"Jenkins \u96c6\u6210 Sonar"),(0,a.kt)("h3",{id:"jenkins-\u96c6\u6210-pytest--allure"},"Jenkins \u96c6\u6210 Pytest + Allure"),(0,a.kt)("p",null,"1\u3001\u5b89\u88c5 Allure \u63d2\u4ef6"),(0,a.kt)("p",null,"2\u3001\u4ece\u5de5\u4f5c\u53f0\u8fdb\u5165\u7cfb\u7edf\u7ba1\u7406 > \u5168\u5c40\u5de5\u5177\u914d\u7f6e\uff0c\u53ef\u9009\u62e9\u624b\u52a8\u5b89\u88c5\u6216\u8005\u81ea\u52a8\u5b89\u88c5\uff0c\u6b64\u5904\u4f7f\u7528\u81ea\u52a8\u5b89\u88c5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2940).Z,width:"1512",height:"749"})),(0,a.kt)("p",null,"3\u3001"),(0,a.kt)("p",null,"4\u3001\u8fdb\u5165 job \u7684\u914d\u7f6e\u9875\uff0c\u5728\u3010\u6784\u5efa\u540e\u64cd\u4f5c\u3011\u9009\u62e9 Allure Report"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6133).Z,width:"1512",height:"749"})),(0,a.kt)("h3",{id:"jenkins-\u96c6\u6210-jmeter--ant"},"Jenkins \u96c6\u6210 JMeter + Ant"),(0,a.kt)("h2",{id:"\u56dbjenkins-\u793a\u4f8b"},"\u56db\u3001Jenkins \u793a\u4f8b"),(0,a.kt)("h3",{id:"java-maven-\u9879\u76ee\u6784\u5efa"},"Java Maven \u9879\u76ee\u6784\u5efa"),(0,a.kt)("p",null,"1\u3001\u65b0\u5efa Maven \u9879\u76ee"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9357).Z,width:"1511",height:"748"})),(0,a.kt)("p",null,"2\u3001\u6e90\u7801\u7ba1\u7406"),(0,a.kt)("p",null,"\u914d\u7f6e\u6e90\u7801\uff0c\u586b\u5199\u4ed3\u5e93\u5730\u5740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jenkins-docs/simple-java-maven-app"},"simple-java-maven-app"),"\uff0c\u5982\u679c\u8bbf\u95ee github \u5931\u8d25\u53ef\u5207\u6362 gitee\uff0c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/gitee-go/spring-boot"},"spring-boot")," \u5982\u679c\u662f\u79c1\u6709\u4ed3\u5e93\u9700\u8981\u914d\u7f6e\u51ed\u8bc1\uff0c\u6b64\u5904\u662f\u5f00\u6e90\u4ed3\u5e93\uff0c\u65e0\u9700\u914d\u7f6e\u51ed\u8bc1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6805).Z,width:"1511",height:"749"})),(0,a.kt)("p",null,"3\u3001\u914d\u7f6e Maven"),(0,a.kt)("p",null,"\u8fdb\u5165\u7cfb\u7edf\u7ba1\u7406 > \u5168\u5c40\u5de5\u4f5c\u914d\u7f6e\uff0c\u5b89\u88c5 Maven"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2247).Z,width:"1511",height:"746"})),(0,a.kt)("p",null,"\u914d\u7f6e pom.xml"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6879).Z,width:"1511",height:"748"})),(0,a.kt)("p",null,"4\u3001\u6784\u5efa\u540e\u64cd\u4f5c"),(0,a.kt)("p",null,"\u589e\u51cf\u6784\u5efa\u540e\u64cd\u4f5c\u6b65\u9aa4\uff0c\u9009\u62e9 Send build artifacts over SSH\uff0c\u9009\u62e9 \u670d\u52a1\u5668\u540d\u79f0"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6794).Z,width:"1511",height:"749"})),(0,a.kt)("p",null,"5\u3001\u67e5\u770b\u63a7\u5236\u53f0\u8f93\u51fa"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5420).Z,width:"1511",height:"747"})),(0,a.kt)("h2",{id:"\u4e94jenkins-api"},"\u4e94\u3001Jenkins API"),(0,a.kt)("p",null,"\u67e5\u770b api"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u683c\u5f0f\uff1ahttp://<Jenkins-Server-Address>/api\n\u4e3e\u4f8b\uff1ahttp://127.0.0.1:5555/api\n\n\u83b7\u53d6 job \u4fe1\u606f\n\u683c\u5f0f\uff1ahttp://<Jenkins-Server-Address>/job/<Job-Name>/api/\n\u4e3e\u4f8b\uff1ahttp://127.0.0.1:5555/job/test-demo/api\n\n\u67e5\u770b Jenkins\n\u683c\u5f0f\uff1acurl -X POST http://<Jenkins-Server-Address> --user <username>:<token>\n\u4e3e\u4f8b\uff1acurl -X POST http://127.0.0.1:5555 --user admin:119d5182970d1ea6610d3590a07d131b39\n\n\u67e5\u770b Job \u5217\u8868\n\u683c\u5f0f\uff1acurl -u <\u7528\u6237\u540d>:<\u5bc6\u7801> -g "http://127.0.0.1:5555/api/json?pretty=true&tree=jobs[name]"\n\u4e3e\u4f8b\uff1acurl -u admin:admin -g "http://127.0.0.1:5555/api/json?pretty=true&tree=jobs[name]"\n\u83b7\u53d6 Crumb Data\n\u65b9\u5f0f\u4e00\uff1a\nhttp://127.0.0.1:5555/crumbIssuer/api/xml?tree=crumb#\n\u65b9\u5f0f\u4e8c\uff1a\ncurl -u admin:admin "http://127.0.0.1:5555/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,%22:%22,//crumb)"\n\u65b9\u5f0f\u4e09\uff1a\ncurl -u admin:119d5182970d1ea6610d3590a07d131b39 "http://127.0.0.1:5555/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,%22:%22,//crumb)"\n\n\u542f\u52a8\u4e0d\u5e26\u53c2\u6570\u7684 job\ncrumb=$(curl -u admin:119d5182970d1ea6610d3590a07d131b39 "http://127.0.0.1:5555/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,%22:%22,//crumb)")\ncurl -H ${crumb} http://127.0.0.1:5555/job/test-demo/build --user admin:119d5182970d1ea6610d3590a07d131b39\ncurl -H ${crumb} -u admin:admin -X POST "http://127.0.0.1:5555/job/test-demo/build"\n\n\u542f\u52a8\u5e26\u53c2\u6570\u7684 job\ncurl -X post http://127.0.0.1:5555/job/test-demo-param2/buildWithParameters?token=119d5182970d1ea6610d3590a07d131b39\n')),(0,a.kt)("h2",{id:"\u516d\u77e5\u8bc6\u788e\u7247"},"\u516d\u3001\u77e5\u8bc6\u788e\u7247"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IDEA \u96c6\u6210 Jenkins")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. IDEA \u5b89\u88c5 Jenkins Control \u63d2\u4ef6\uff1aFile > Settings > Plugins\n2. IDEA \u8bbe\u7f6e Jenkins \u670d\u52a1\u5668\u4fe1\u606f\uff1aFile > Settings > Tools > Jenkins Plugin\n- Server Address\uff1aip+\u7aef\u53e3\uff1ahttp://localhost:8080 \u6216\u8005 \u57df\u540d\uff1ahttps://jenkins.xxx.com\u3002\u6ce8\uff1a\u4f7f\u7528 ip+\u7aef\u53e3\u8fd8\u662f\u57df\u540d\u53d6\u51b3\u4e8e Manage Jenkins > Configuration System  > Jenkins Location \u7684\u8bbe\u7f6e\uff0c\u4e00\u5b9a\u8981\u548c Jenkins URL \u7684\u8bbe\u7f6e\u4fdd\u6301\u4e00\u81f4\u3002\n- Username\uff1aadmin\u3002\n- Password\uff1a\u5728 Jenkins > \u7528\u6237\u540d > \u8bbe\u7f6e > \u83b7\u53d6 API Token\u3002\n- Crumb Data\uff1a\u8bbf\u95ee http://localhost:8080/crumbIssuer/api/xml?tree=crumb# \u83b7\u53d6 Crumb Data\u3002\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6124).Z,width:"1559",height:"1011"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker \u5bb9\u5668\u4e2d\u9ad8\u7248\u672c Jenkins \u5173\u95ed\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u4fdd\u62a4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u65b9\u5f0f\u4e00\uff1a\n\u5173\u95ed \u7cfb\u7edf\u7ba1\u7406->\u5168\u5c40\u5b89\u5168\u914d\u7f6e->\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u4fdd\u62a4 \u9009\u9879\uff08\u6ce8\uff1a\u9ad8\u7248\u672c\u65e0\uff09\n\u8bbe\u7f6e \u7cfb\u7edf\u7ba1\u7406->\u7cfb\u7edf\u8bbe\u7f6e->Jenkins Location \u7684 URL \u548c Jenkins \u8bbf\u95ee\u5730\u5740\u4fdd\u6301\u4e00\u81f4\n\n\u65b9\u5f0f\u4e8c\uff1a\n\u8fdb\u5165 \u7cfb\u7edf\u7ba1\u7406 > \u811a\u672c\u63a7\u5236\u53f0\uff0c\u6267\u884c\uff1a\n\u65b0\u7248 Jenkins \u5173\u95ed CSRF\nhudson.security.csrf.GlobalCrumbIssuerConfiguration.DISABLE_CSRF_PROTECTION = true\n\u65b0\u7248 Jenkins \u6253\u5f00 CSRF\nhudson.security.csrf.GlobalCrumbIssuerConfiguration.DISABLE_CSRF_PROTECTION = false\n\n\u65b9\u5f0f\u4e09\uff1a\n1\u3001\u5c06 jenkins.sh \u590d\u5236\u5230\u5bbf\u4e3b\u673a\ndocker cp jenkins:/usr/local/bin/jenkins.sh /tmp\n\n2\u3001\u4fee\u6539 jenkins.sh\uff0c\u5728 exec java -Duser.home="$JENKINS_HOME" \u52a0\u4e0a\uff1a\n-Dhudson.security.csrf.GlobalCrumbIssuerConfiguration.DISABLE_CSRF_PROTECTION=true\n\u7ed3\u679c\uff1a\nexec java -Duser.home="$JENKINS_HOME" \n"-Dhudson.security.csrf.GlobalCrumbIssuerConfiguration.DISABLE_CSRF_PROTECTION=true \n${java_opts_array[@]}" -jar ${JENKINS_WAR} "${jenkins_opts_array[@]}" "$@"\n\n3\u3001\u5c06 jenkins.sh \u590d\u5236\u5230\u5bb9\u5668\u4e2d\ndocker cp /tmp/jenkins.sh jenkins:/usr/local/bin/jenkins.sh\n\n4\u3001\u91cd\u542f jenkins\ndocker restart jenkins\n\n5\u3001\u68c0\u67e5\ndocker exec -it jenkins bash -c \'cat /usr/local/bin/jenkins.sh\'\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Jenkins \u6784\u5efa\u65f6\u95f4\u548c\u670d\u52a1\u5668\u65f6\u95f4\u4e0d\u4e00\u81f4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8fdb\u5165 \u7cfb\u7edf\u7ba1\u7406 > \u811a\u672c\u547d\u4ee4\u884c\uff0c\u6267\u884c\uff1a\nSystem.setProperty('org.apache.commons.jelly.tags.fmt.timeZone','Asia/Shanghai')\n")),(0,a.kt)("p",null,"Jenkins SSH \u8d85\u65f6\uff0c\u5728\u9ad8\u7ea7\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"))}d.isMDXComponent=!0},6133:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Allure Report-a6fa9f55cb9029e9b6558445a373d473.png"},9484:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Blue Ocean-e245e77323baf97103c25260ec4db4d1.png"},6124:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/IDEA+Jenkins-909398a8b683febde680ccd11320e4f5.png"},9362:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Publish Over SSH-2814de682f722b6baba70329663f8677.png"},3436:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins_dashboard-5b535b936ae32f6df118a68556faf6ea.png"},573:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins_login-224e2a225de5713712287cb44b1bd285.png"},6879:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/maven build-65c96550d562160c190b6c567fbf9025.png"},2247:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/maven \u5b89\u88c5-f5e4fd4acaf23f288f17554e69dd9ef4.png"},7999:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/pipeline_job_demo-0d64aa4bbe033383d8cd5cd501b9bd68.png"},1719:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u521b\u5efa\u7b2c\u4e00\u4e2a\u7ba1\u7406\u5458\u7528\u6237-3604176a63e63b524476b9385312bb5f.png"},2940:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u5b89\u88c5 Allure-fa3b117a9e044ece446b1507ce97a1b4.png"},280:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u5b9e\u4f8b\u914d\u7f6e-9b7fbcdd7408e05c1f793f58d7fb2392.png"},4125:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u6253\u5f00 Blue Ocean-94ea24f7da0a9a78cbe090f85d80f5f0.png"},5420:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u63a7\u5236\u53f0\u8f93\u51fa-4a13df76e9ce710bb356bbb23a1fcf4a.png"},730:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u63d2\u4ef6\u7ba1\u7406-01b662d8cc7d2d0e23216c5e220f2fde.png"},5255:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u65b0\u589e\u51ed\u636e-74128abbaa9918d83a20753a2f9c0b5d.png"},9357:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u65b0\u5efa maven \u9879\u76ee-3dc9aee0a041183f5d4638ae902a840c.png"},9448:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u65b0\u5efa\u51ed\u636e-7fe91c33e2ed6b1a0a9170ec99be9ec8.png"},3956:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u65b0\u624b\u5165\u95e8-a4c7dfd91bef1ef225d3c48ee345bac2.png"},6794:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u6784\u5efa\u540e\u64cd\u4f5c-c684847a16dda3300cc6c4223563969f.png"},4170:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u7528\u6237\u5217\u8868-2a428f0b7d70871787e2d1094487f22f.png"},6805:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/\u914d\u7f6e\u6e90\u7801-58aca206eea63dc9f4985b85869ede20.png"}}]);