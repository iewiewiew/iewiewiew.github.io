"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6176],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var k=n.createContext({}),s=function(e){var t=n.useContext(k),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(k.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,k=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(r),u=a,b=l["".concat(k,".").concat(u)]||l[u]||f[u]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,p={unversionedId:"Middleware/Kafka",id:"Middleware/Kafka",title:"Kafka",description:"[TOC]",source:"@site/docs/Middleware/Kafka.md",sourceDirName:"Middleware",slug:"/Middleware/Kafka",permalink:"/docs/Middleware/Kafka",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dubbo",permalink:"/docs/Middleware/Dubbo"},next:{title:"MQ",permalink:"/docs/Middleware/MQ"}},k={},s=[{value:"\u4e00\u3001\u73af\u5883\u642d\u5efa",id:"\u4e00\u73af\u5883\u642d\u5efa",level:2},{value:"\u4e8c\u3001Kafka Topic",id:"\u4e8ckafka-topic",level:2}],c={toc:s},l="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("hr",null),(0,a.kt)("h1",{align:"center"},"Kafka"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,a.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.03.30",(0,a.kt)("br",{parentName:"p"}),"\n","Description\uff1aKafka \u6d88\u606f\u961f\u5217")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://dunwu.github.io/bigdata-tutorial/kafka/"},"Kafka \u6559\u7a0b")),(0,a.kt)("h2",{id:"\u4e00\u73af\u5883\u642d\u5efa"},"\u4e00\u3001\u73af\u5883\u642d\u5efa"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u53ca\u89e3\u538b kafka  ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kafka.apache.org/downloads"},"Kafka \u4e0b\u8f7d\u5730\u5740")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://downloads.apache.org/kafka/3.5.0/kafka_2.12-3.5.0.tgz\n\ntar -xzvf kafka_2.12-2.4.0.tgz  \n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e kafka")),(0,a.kt)("p",null,"kafka \u7684\u914d\u7f6e\u6587\u4ef6\u5728 config/server.properties \u6587\u4ef6\u4e2d",(0,a.kt)("br",{parentName:"p"}),"\n","broker.id \u662f kafka broker \u7684\u7f16\u53f7\uff0c\u96c6\u7fa4\u91cc\u6bcf\u4e2a broker \u7684 id \u9700\u4e0d\u540c\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","broker.id=0"),(0,a.kt)("p",null,"listeners \u662f\u76d1\u542c\u5730\u5740\uff0c\u9700\u8981\u63d0\u4f9b\u5916\u7f51\u670d\u52a1\u7684\u8bdd\uff0c\u8981\u8bbe\u7f6e\u672c\u5730\u7684 IP \u5730\u5740\uff1a\nlisteners=PLAINTEXT://127.0.0.1:9092"),(0,a.kt)("p",null,"kafka \u8fd0\u884c\u65e5\u5fd7\u5b58\u653e\u7684\u8def\u5f84\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","log.dirs=/tmp/kafka_2.10-0.8.2.2/logs"),(0,a.kt)("p",null,"zookeeper \u914d\u7f6e\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","zookeeper.connect=127.0.0.1:2181,1127.0.0..2:2181,127.0.0.3:2181"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u53ca\u505c\u6b62 kafka")),(0,a.kt)("p",null,"3.1 \u542f\u52a8 kafka\n",(0,a.kt)("inlineCode",{parentName:"p"},"bin/kafka-server-start.sh -daemon config/server.properties"),(0,a.kt)("br",{parentName:"p"}),"\n","-daemon \u53c2\u6570\u4f1a\u5c06\u4efb\u52a1\u8f6c\u5165\u540e\u53f0\u8fd0\u884c\uff0c\u8f93\u51fa\u65e5\u5fd7\u4fe1\u606f\u5c06\u5199\u5165\u65e5\u5fd7\u6587\u4ef6\uff0c\u65e5\u5fd7\u6587\u4ef6\u5728\u6267\u884c\u547d\u4ee4\u7684\u76ee\u5f55\u4e0b\u7684 logs \u76ee\u5f55\u4e2d kafkaServer.out\uff0c\u7ed3\u5c3e\u8f93\u540c started \u8bf4\u660e\u542f\u52a8\u6210\u529f\u3002\n\u4e5f\u53ef\u4ee5\u7528 jps \u547d\u4ee4\uff0c\u770b\u6709\u6ca1\u6709 kafka \u7684\u8fdb\u7a0b"),(0,a.kt)("p",null,"3.2 \u505c\u6b62 kafka\n",(0,a.kt)("inlineCode",{parentName:"p"},"bin/kafka-server-stop.sh config/server.properties")),(0,a.kt)("h2",{id:"\u4e8ckafka-topic"},"\u4e8c\u3001Kafka Topic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u67e5\u770b topic \u5217\u8868  \n./kafka-topics.sh --list --zookeeper 127.0.0.1:2181  \n\n\u67e5\u770b\u7279\u5b9a\u4e3b\u9898\u7684\u8be6\u7ec6\u4fe1\u606f  \n./kafka-topics.sh --zookeeper 127.0.0.1:2181 --describe  --topic testTopic  \n\n\u521b\u5efa topic  \n./kafka-topics.sh --create --zookeeper 127.0.0.1:2181 --replication-factor 3 --partitions 3 --topic topicTest  \n\n\u53d1\u9001\u6d88\u606f  \nip \u5730\u5740\u5e94\u7528\u672c\u5730 ip\uff0c\u4f7f\u7528127.0.0.1\u4f1a\u62a5\u9519  \n./kafka-console-producer.sh --broker-list 127.0.0.1:9092 --topic topicTest  \n\n\u63a5\u6536\u6d88\u606f  \n\u57282.5.0\u7248\u672c\u4e4b\u524d\u53ea\u652f\u6301 --broker-list\uff1b\u57282.5.0\u7248\u672c\u4e4b\u540e\u652f\u6301 --bootstrap-server\uff0c\u5982\u679c\u7248\u672c\u8001\u4e8e2.2\uff0c\u5e94\u8be5\u7528--zookeeper\uff1b\u53ef\u4f7f\u7528127.0.0.1  \n./kafka-console-consumer.sh --broker-list 127.0.0.1:9092 --topic topicTest --from-beginning  \n./kafka-console-consumer.sh --zookeeper 127.0.0.1:2181 --topic topicTest --from-beginning\n\n\u5220\u9664 topic  \n./kafka-topics.sh --zookeeper 127.0.0.1:2181 --delete  --topic testTopic\n")),(0,a.kt)("p",null,"K8s Kafka"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8fdb\u5165 pod\nkubectl --insecure-skip-tls-verify exec -it -n <namespace> kafka-0 -- /bin/bash\n\n\u83b7\u53d6 ClusterIP\nkubectl --insecure-skip-tls-verify get services -n <namespace> |grep kafka\n\n\u67e5\u770b\u914d\u7f6e\nfind / -name server.properties\ncat /opt/kafka/config/server.properties\n\nKafka \u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u67e5\u770b topics\n/opt/kafka/bin/kafka-topics.sh --bootstrap-server <ClusterIP>:9092 --list\nkubectl --insecure-skip-tls-verify exec -it kafka-0 -n <namespace> -- /opt/kafka/bin/kafka-topics.sh --bootstrap-server <ClusterIP>:9092 --list\n\n\u67e5\u770b\u67d0\u4e2a topic \u4fe1\u606f\n/opt/kafka/bin/kafka-topics.sh --bootstrap-server <ClusterIP>:9092 --describe --topic <topic_name>\n\n\u67e5\u770b\u67d0\u4e2a topic \u5185\u5bb9\n/opt/kafka/bin/kafka-console-consumer.sh --bootstrap-server <ClusterIP>:9092 --topic <topic_name> --from-beginning\n\n\u521b\u5efa topic\nkubectl --insecure-skip-tls-verify exec -it kafka-0 -- /opt/kafka/bin/kafka-topics.sh --bootstrap-server <ClusterIP>:9092 --topic my-topic --create --partitions 3 --replication-factor 3\n\n\u53d1\u9001\u6d88\u606f\uff0c\u5728\u7ec8\u7aef\u4e2d\u9010\u884c\u8f93\u5165\u8981\u53d1\u9001\u7684\u6d88\u606f\uff0c\u6bcf\u6761\u6d88\u606f\u6309 Enter \u952e\u53d1\u9001\nkubectl --insecure-skip-tls-verify exec -it kafka-0 -n <namespace> -- /opt/kafka/bin/kafka-console-producer.sh --broker-list <ClusterIP>:9092 --topic my-topic\n")))}f.isMDXComponent=!0}}]);