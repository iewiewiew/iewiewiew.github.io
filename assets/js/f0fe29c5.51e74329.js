"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7896],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>m});var l=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function t(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?t(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function p(e,o){if(null==e)return{};var n,l,r=function(e,o){if(null==e)return{};var n,l,r={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),c=function(e){var o=l.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},d=function(e){var o=c(e.components);return l.createElement(i.Provider,{value:o},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return l.createElement(l.Fragment,{},o)}},A=l.forwardRef((function(e,o){var n=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),A=r,m=s["".concat(i,".").concat(A)]||s[A]||u[A]||t;return n?l.createElement(m,a(a({ref:o},d),{},{components:n})):l.createElement(m,a({ref:o},d))}));function m(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var t=n.length,a=new Array(t);a[0]=A;var p={};for(var i in o)hasOwnProperty.call(o,i)&&(p[i]=o[i]);p.originalType=e,p[s]="string"==typeof e?e:r,a[1]=p;for(var c=2;c<t;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}A.displayName="MDXCreateElement"},7395:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>p,toc:()=>c});var l=n(7462),r=(n(7294),n(3905));const t={},a=void 0,p={unversionedId:"Middleware/Apollo/Apollo",id:"Middleware/Apollo/Apollo",title:"Apollo",description:"[TOC]",source:"@site/docs/Middleware/Apollo/Apollo.md",sourceDirName:"Middleware/Apollo",slug:"/Middleware/Apollo/",permalink:"/docs/Middleware/Apollo/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u77e5\u8bc6\u788e\u7247",permalink:"/docs/Linux/\u77e5\u8bc6\u788e\u7247"},next:{title:"Dubbo",permalink:"/docs/Middleware/Dubbo"}},i={},c=[{value:"\u4e00\u3001Apollo \u7b80\u4ecb",id:"\u4e00apollo-\u7b80\u4ecb",level:2},{value:"\u4e8c\u3001Apollo \u5b89\u88c5",id:"\u4e8capollo-\u5b89\u88c5",level:2},{value:"\u4e09\u3001Appllo \u6a21\u5757",id:"\u4e09appllo-\u6a21\u5757",level:2},{value:"ConfigService",id:"configservice",level:3},{value:"AdminService",id:"adminservice",level:3},{value:"Client",id:"client",level:3},{value:"Portal",id:"portal",level:3},{value:"Eureka",id:"eureka",level:3},{value:"MetaServer",id:"metaserver",level:3},{value:"NginxLB",id:"nginxlb",level:3}],d={toc:c},s="wrapper";function u(e){let{components:o,...t}=e;return(0,r.kt)(s,(0,l.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("hr",null),(0,r.kt)("h1",{align:"center"},"Apollo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,r.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.12.07",(0,r.kt)("br",{parentName:"p"}),"\n","Description\uff1aApollo \u5206\u5e03\u5f0f\u914d\u7f6e\u7ba1\u7406\u4e2d\u5fc3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.apolloconfig.com/#/zh/README"},"Apollo \u6587\u6863"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apolloconfig/apollo"},"Apollo \u6e90\u7801")),(0,r.kt)("h2",{id:"\u4e00apollo-\u7b80\u4ecb"},"\u4e00\u3001Apollo \u7b80\u4ecb"),(0,r.kt)("p",null,"Apollo\uff08\u963f\u6ce2\u7f57\uff09\u662f\u4e00\u6b3e\u53ef\u9760\u7684\u5206\u5e03\u5f0f\u914d\u7f6e\u7ba1\u7406\u4e2d\u5fc3\uff0c\u8bde\u751f\u4e8e\u643a\u7a0b\u6846\u67b6\u7814\u53d1\u90e8\uff0c\u80fd\u591f\u96c6\u4e2d\u5316\u7ba1\u7406\u5e94\u7528\u4e0d\u540c\u73af\u5883\u3001\u4e0d\u540c\u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u914d\u7f6e\u4fee\u6539\u540e\u80fd\u591f\u5b9e\u65f6\u63a8\u9001\u5230\u5e94\u7528\u7aef\uff0c\u5e76\u4e14\u5177\u5907\u89c4\u8303\u7684\u6743\u9650\u3001\u6d41\u7a0b\u6cbb\u7406\u7b49\u7279\u6027\uff0c\u9002\u7528\u4e8e\u5fae\u670d\u52a1\u914d\u7f6e\u7ba1\u7406\u573a\u666f\u3002\n\u670d\u52a1\u7aef\u57fa\u4e8e Spring Boot \u548c Spring Cloud \u5f00\u53d1\uff0c\u6253\u5305\u540e\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\uff0c\u4e0d\u9700\u8981\u989d\u5916\u5b89\u88c5 Tomcat \u7b49\u5e94\u7528\u5bb9\u5668\u3002\nJava \u5ba2\u6237\u7aef\u4e0d\u4f9d\u8d56\u4efb\u4f55\u6846\u67b6\uff0c\u80fd\u591f\u8fd0\u884c\u4e8e\u6240\u6709 Java \u8fd0\u884c\u65f6\u73af\u5883\uff0c\u540c\u65f6\u5bf9 Spring/Spring Boot \u73af\u5883\u4e5f\u6709\u8f83\u597d\u7684\u652f\u6301\u3002\n.Net \u5ba2\u6237\u7aef\u4e0d\u4f9d\u8d56\u4efb\u4f55\u6846\u67b6\uff0c\u80fd\u591f\u8fd0\u884c\u4e8e\u6240\u6709.Net \u8fd0\u884c\u65f6\u73af\u5883\u3002"),(0,r.kt)("h2",{id:"\u4e8capollo-\u5b89\u88c5"},"\u4e8c\u3001Apollo \u5b89\u88c5"),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e00\n",(0,r.kt)("a",{parentName:"p",href:"https://www.apolloconfig.com/#/zh/deployment/quick-start-docker"},"docker-compose \u90e8\u7f72")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4e0b\u8f7d docker-compose.yml \u548c sql \u6587\u4ef6\u5939\u5230\u672c\u5730\u76ee\u5f55\uff0c\u5982 docker-quick-start\u3002\n- docker-quick-start\n  - docker-compose.yml\n  - sql\n    - apolloconfigdb.sql\n    - apolloportaldb.sql\n    \n\u5728 docker-quick-start \u76ee\u5f55\u4e0b\u6267\u884c docker-compose up\uff0c\u7b2c\u4e00\u6b21\u6267\u884c\u4f1a\u89e6\u53d1\u4e0b\u8f7d\u955c\u50cf\u7b49\u64cd\u4f5c\uff0c\u9700\u8981\u8010\u5fc3\u7b49\u5f85\u4e00\u4e9b\u65f6\u95f4\u3002\n\u540e\u53f0\u8fd0\u884c\uff1adocker-compose up -d\n\ndocker exec -it apollo-db /bin/bash\nmysql\nshow dbs;\nuse ApolloConfigDB;\nshow tables;\nselect * from App;\n")),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e8c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1\u3001\u914d\u7f6e sql\nhttps://github.com/apolloconfig/apollo/tree/master/scripts/sql\nselect * from ApolloConfigDB.ServerConfig WHERE `key` = \'eureka.service.url\';\n\u4fee\u6539 value \u4e3a\u5b9e\u9645 ip+port\n\n2\u3001\u62c9\u53d6\u955c\u50cf\ndocker pull apolloconfig/apollo-portal:latest\ndocker pull apolloconfig/apollo-adminservice:latest\ndocker pull apolloconfig/apollo-configservice:latest\n\n3\u3001\u8fd0\u884c\u955c\u50cf\n3.1\u3001Apollo Config Service\ndocker run -d -p 8080:8080 \\\n-e SPRING_DATASOURCE_URL="jdbc:mysql://127.0.0.1:3306/ApolloConfigDB?characterEncoding=utf8" \\\n-e SPRING_DATASOURCE_USERNAME=root \\\n-e SPRING_DATASOURCE_PASSWORD=root \\\n-e "EUREKA_INSTANCE_PREFERIPADDRESS=true" \\\n-e "EUREKA_INSTANCE_IPADDRESS=127.0.0.1" \\\n-e "EUREKA_INSTANCE_NONSECUREPORT=8080" \\\n-e "EUREKA_INSTANCE_INSTANCEID=127.0.0.1:8080" \\\n-v /tmp/logs:/opt/logs  \\\n--name apollo-configservice apolloconfig/apollo-configservice\n\n3.2\u3001Apollo Admin Service\ndocker run -d -p 8090:8090 \\\n-e SPRING_DATASOURCE_URL="jdbc:mysql://127.0.0.1:3306/ApolloConfigDB?characterEncoding=utf8" \\\n-e SPRING_DATASOURCE_USERNAME=root \\\n-e SPRING_DATASOURCE_PASSWORD=root \\\n-e "EUREKA_INSTANCE_PREFERIPADDRESS=true" \\\n-e "EUREKA_INSTANCE_IPADDRESS=127.0.0.1" \\\n-e "EUREKA_INSTANCE_NONSECUREPORT=8090" \\\n-e "EUREKA_INSTANCE_INSTANCEID=127.0.0.1:8090" \\\n-v /tmp/logs:/opt/logs \\\n--name apollo-adminservice apolloconfig/apollo-adminservice\n\n3.3\u3001Apollo Portal\ndocker run -d -p 8070:8070 \\\n-e SPRING_DATASOURCE_URL="jdbc:mysql://127.0.0.1:3306/ApolloPortalDB?characterEncoding=utf8" \\\n-e SPRING_DATASOURCE_USERNAME=root \\\n-e SPRING_DATASOURCE_PASSWORD=root \\\n-e APOLLO_PORTAL_ENVS=pro \\\n-e PRO_META=http://127.0.0.1:8080 \\\n-v /tmp/logs:/opt/logs \\\n--name apollo-portal apolloconfig/apollo-portal\n\n\u53c2\u6570\u8bf4\u660e\nSPRING_DATASOURCE_URL: \u5bf9\u5e94\u73af\u5883 ApolloConfigDB \u7684\u5730\u5740\nSPRING_DATASOURCE_USERNAME: \u5bf9\u5e94\u73af\u5883 ApolloConfigDB \u7684\u7528\u6237\u540d\nSPRING_DATASOURCE_PASSWORD: \u5bf9\u5e94\u73af\u5883 ApolloConfigDB \u7684\u5bc6\u7801\nAPOLLO_PORTAL_ENVS(\u53ef\u9009): \u5bf9\u5e94 ApolloPortalDB \u4e2d\u7684 apollo.portal.envs \u914d\u7f6e\u9879\uff0c\u5982\u679c\u6ca1\u6709\u5728\u6570\u636e\u5e93\u4e2d\u914d\u7f6e\u7684\u8bdd\uff0c\u53ef\u4ee5\u901a\u8fc7\u6b64\u73af\u5883\u53c2\u6570\u914d\u7f6e\nDEV_META/PRO_META(\u53ef\u9009): \u914d\u7f6e\u5bf9\u5e94\u73af\u5883\u7684 Meta Service \u5730\u5740\uff0c\u4ee5${ENV}_META \u547d\u540d\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u5982\u679c\u914d\u7f6e\u4e86 ApolloPortalDB \u4e2d\u7684 apollo.portal.meta.servers \u914d\u7f6e\uff0c\u5219\u4ee5 apollo.portal.meta.servers \u4e2d\u7684\u914d\u7f6e\u4e3a\u51c6\n\n4\u3001\u6d4b\u8bd5\nApollo \u8bbf\u95ee\u5730\u5740\uff1a http://127.0.0.1:8070/signn\n\u7528\u6237\u540d/\u5bc6\u7801\uff1aapollo/admin\n\nEureka \u8bbf\u95ee\u5730\u5740\uff1ahttp://127.0.0.1:8080/\n\n5\u3001\u67e5\u770b\u65e5\u5fd7\ndocker logs -f apollo-configservice\ndocker logs -f apollo-adminservice\ndocker logs -f apollo-portal\n\n6\u3001\u5220\u9664\ndocker rm -f apollo-configservice\ndocker rm -f apollo-adminservice\ndocker rm -f apollo-portal\n\n\u6ce8\uff1a\u4ee5\u4e0a\u65b9\u5f0f\u90e8\u7f72\uff0c\u8bbf\u95ee\u9875\u9762\u4f1a\u62a5\u9519\uff0c\u6682\u672a\u627e\u5230\u89e3\u51b3\u65b9\u5f0f\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2542).Z,width:"1512",height:"749"})),(0,r.kt)("h2",{id:"\u4e09appllo-\u6a21\u5757"},"\u4e09\u3001Appllo \u6a21\u5757"),(0,r.kt)("p",null,"\u56db\u4e2a\u6838\u5fc3\u6a21\u5757\u53ca\u5176\u4e3b\u8981\u529f\u80fd"),(0,r.kt)("h3",{id:"configservice"},"ConfigService"),(0,r.kt)("p",null,"\u63d0\u4f9b\u914d\u7f6e\u83b7\u53d6\u63a5\u53e3\n\u63d0\u4f9b\u914d\u7f6e\u63a8\u9001\u63a5\u53e3\n\u670d\u52a1\u4e8e Apollo \u5ba2\u6237\u7aef"),(0,r.kt)("h3",{id:"adminservice"},"AdminService"),(0,r.kt)("p",null,"\u63d0\u4f9b\u914d\u7f6e\u7ba1\u7406\u63a5\u53e3\n\u63d0\u4f9b\u914d\u7f6e\u4fee\u6539\u53d1\u5e03\u63a5\u53e3\n\u670d\u52a1\u4e8e\u7ba1\u7406\u754c\u9762 Portal"),(0,r.kt)("h3",{id:"client"},"Client"),(0,r.kt)("p",null,"\u4e3a\u5e94\u7528\u83b7\u53d6\u914d\u7f6e\uff0c\u652f\u6301\u5b9e\u65f6\u66f4\u65b0\n\u901a\u8fc7 MetaServer \u83b7\u53d6 ConfigService \u7684\u670d\u52a1\u5217\u8868\n\u4f7f\u7528\u5ba2\u6237\u7aef\u8f6f\u8d1f\u8f7d SLB \u65b9\u5f0f\u8c03\u7528 ConfigService"),(0,r.kt)("h3",{id:"portal"},"Portal"),(0,r.kt)("p",null,"\u914d\u7f6e\u7ba1\u7406\u754c\u9762\n\u901a\u8fc7 MetaServer \u83b7\u53d6 AdminService \u7684\u670d\u52a1\u5217\u8868\n\u4f7f\u7528\u5ba2\u6237\u7aef\u8f6f\u8d1f\u8f7d SLB \u65b9\u5f0f\u8c03\u7528 AdminService\n\u4e09\u4e2a\u8f85\u52a9\u670d\u52a1\u53d1\u73b0\u6a21\u5757"),(0,r.kt)("h3",{id:"eureka"},"Eureka"),(0,r.kt)("p",null,"\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u548c\u6ce8\u518c\nConfig/AdminService \u6ce8\u518c\u5b9e\u4f8b\u5e76\u5b9a\u671f\u62a5\u5fc3\u8df3\n\u548c ConfigService \u4f4f\u5728\u4e00\u8d77\u90e8\u7f72"),(0,r.kt)("h3",{id:"metaserver"},"MetaServer"),(0,r.kt)("p",null,"Portal \u901a\u8fc7\u57df\u540d\u8bbf\u95ee MetaServer \u83b7\u53d6 AdminService \u7684\u5730\u5740\u5217\u8868\nClient \u901a\u8fc7\u57df\u540d\u8bbf\u95ee MetaServer \u83b7\u53d6 ConfigService \u7684\u5730\u5740\u5217\u8868\n\u76f8\u5f53\u4e8e\u4e00\u4e2a Eureka Proxy\n\u903b\u8f91\u89d2\u8272\uff0c\u548c ConfigService \u4f4f\u5728\u4e00\u8d77\u90e8\u7f72"),(0,r.kt)("h3",{id:"nginxlb"},"NginxLB"),(0,r.kt)("p",null,"\u548c\u57df\u540d\u7cfb\u7edf\u914d\u5408\uff0c\u534f\u52a9 Portal \u8bbf\u95ee MetaServer \u83b7\u53d6 AdminService \u5730\u5740\u5217\u8868\n\u548c\u57df\u540d\u7cfb\u7edf\u914d\u5408\uff0c\u534f\u52a9 Client \u8bbf\u95ee MetaServer \u83b7\u53d6 ConfigService \u5730\u5740\u5217\u8868\n\u548c\u57df\u540d\u7cfb\u7edf\u914d\u5408\uff0c\u534f\u52a9\u7528\u6237\u8bbf\u95ee Portal \u8fdb\u884c\u914d\u7f6e\u7ba1\u7406"))}u.isMDXComponent=!0},2542:(e,o,n)=>{n.d(o,{Z:()=>l});const l=n.p+"assets/images/Apollo-111e01aa0815ff9ad92b3a56b0f7d57d.png"}}]);