"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>M});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},T="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),T=u(n),s=a,M=T["".concat(o,".").concat(s)]||T[s]||c[s]||l;return n?r.createElement(M,i(i({ref:t},m),{},{components:n})):r.createElement(M,i({ref:t},m))}));function M(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[T]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},99:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,p={unversionedId:"Mixinfo/MQTT/MQTT",id:"Mixinfo/MQTT/MQTT",title:"MQTT",description:"[TOC]",source:"@site/docs/Mixinfo/MQTT/MQTT.md",sourceDirName:"Mixinfo/MQTT",slug:"/Mixinfo/MQTT/",permalink:"/docs/Mixinfo/MQTT/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IDEA",permalink:"/docs/Mixinfo/IDEA"},next:{title:"Mac",permalink:"/docs/Mixinfo/Mac"}},o={},u=[{value:"\u4e00\u3001MQTT \u534f\u8bae",id:"\u4e00mqtt-\u534f\u8bae",level:3},{value:"\u4e8c\u3001MQTT \u6d88\u606f\u670d\u52a1\u5668",id:"\u4e8cmqtt-\u6d88\u606f\u670d\u52a1\u5668",level:3},{value:"1\u3001EMQX \u7b80\u4ecb",id:"1emqx-\u7b80\u4ecb",level:4},{value:"2\u3001EMQX \u642d\u5efa",id:"2emqx-\u642d\u5efa",level:4},{value:"\u4e09\u3001JMeter \u6d4b\u8bd5 MQTT",id:"\u4e09jmeter-\u6d4b\u8bd5-mqtt",level:3}],m={toc:u},T="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(T,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h1",{align:"center"},"MQTT"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,a.kt)("br",{parentName:"p"}),"\n","Date\uff1a2023.07.18",(0,a.kt)("br",{parentName:"p"}),"\n","Description\uff1aMQTT \u534f\u8bae")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.emqx.io/zh/"},"EMQX \u5b98\u7f51"),"  "),(0,a.kt)("h3",{id:"\u4e00mqtt-\u534f\u8bae"},"\u4e00\u3001MQTT \u534f\u8bae"),(0,a.kt)("p",null,"MQTT \u662f\u4e00\u79cd\u57fa\u4e8e\u53d1\u5e03/ \u8ba2\u9605\u6a21\u5f0f\u7684\u8f7b\u91cf\u7ea7\u6d88\u606f\u4f20\u8f93\u534f\u8bae\uff08Message Queuing Telemetry Transport\uff0c\u6d88\u606f\u961f\u5217\u9065\u6d4b\u4f20\u8f93\u534f\u8bae\uff09\uff0c\u4e13\u95e8\u9488\u5bf9\u4f4e\u5e26\u5bbd\u548c\u4e0d\u7a33\u5b9a\u7f51\u7edc\u73af\u5883\u7684\u7269\u8054\u7f51\u5e94\u7528\u800c\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u7528\u6781\u5c11\u7684\u4ee3\u7801\u4e3a\u8054\u7f51\u8bbe\u5907\u63d0\u4f9b\u5b9e\u65f6\u53ef\u9760\u7684\u6d88\u606f\u670d\u52a1\u3002 MQTT \u534f\u8bae\u5e7f\u6cdb\u5e94\u7528\u4e8e\u7269\u8054\u7f51\u3001\u79fb\u52a8\u4e92\u8054\u7f51\u3001\u667a\u80fd\u786c\u4ef6\u3001\u8f66\u8054\u7f51\u3001\u667a\u6167\u57ce\u5e02\u3001\u8fdc\u7a0b\u533b\u7597\u3001\u7535\u529b\u3001\u77f3\u6cb9\u4e0e\u80fd\u6e90\u7b49\u9886\u57df\u3002"),(0,a.kt)("h3",{id:"\u4e8cmqtt-\u6d88\u606f\u670d\u52a1\u5668"},"\u4e8c\u3001MQTT \u6d88\u606f\u670d\u52a1\u5668"),(0,a.kt)("h4",{id:"1emqx-\u7b80\u4ecb"},"1\u3001EMQX \u7b80\u4ecb"),(0,a.kt)("p",null,"EMQX \u662f\u4e00\u6b3e\u5f00\u6e90 (opens new window)\u7684\u5927\u89c4\u6a21\u5206\u5e03\u5f0f MQTT \u6d88\u606f\u670d\u52a1\u5668\uff0c\u529f\u80fd\u4e30\u5bcc\uff0c\u4e13\u4e3a\u7269\u8054\u7f51\u548c\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528\u800c\u8bbe\u8ba1\u3002EMQX 5.0 \u5355\u96c6\u7fa4\u652f\u6301 MQTT \u5e76\u53d1\u8fde\u63a5\u6570\u9ad8\u8fbe 1 \u4ebf\u6761\uff0c\u5355\u670d\u52a1\u5668\u7684\u4f20\u8f93\u4e0e\u5904\u7406\u541e\u5410\u91cf\u53ef\u8fbe\u6bcf\u79d2\u767e\u4e07\u7ea7 MQTT \u6d88\u606f\uff0c\u5e76\u4fdd\u8bc1\u5ef6\u8fdf\u5728\u4e9a\u6beb\u79d2\u7ea7\u3002"),(0,a.kt)("p",null,"EMQX \u652f\u6301\u591a\u79cd\u534f\u8bae\uff0c\u5305\u62ec MQTT (3.1\u30013.1.1 \u548c 5.0)\u3001HTTP\u3001QUIC \u548c WebSocket \u7b49\uff0c\u4fdd\u8bc1\u5404\u79cd\u7f51\u7edc\u73af\u5883\u548c\u786c\u4ef6\u8bbe\u5907\u7684\u53ef\u8bbf\u95ee\u6027\u3002EMQX \u8fd8\u63d0\u4f9b\u4e86\u5168\u9762\u7684 SSL/TLS \u529f\u80fd\u652f\u6301\uff0c\u6bd4\u5982\u53cc\u5411\u8ba4\u8bc1\u4ee5\u53ca\u591a\u79cd\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236\uff0c\u4e3a\u7269\u8054\u7f51\u8bbe\u5907\u548c\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u53ef\u9760\u548c\u9ad8\u6548\u7684\u901a\u4fe1\u57fa\u7840\u8bbe\u65bd\u3002"),(0,a.kt)("h4",{id:"2emqx-\u642d\u5efa"},"2\u3001EMQX \u642d\u5efa"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.emqx.io/zh/downloads"},"Docker \u642d\u5efa emqx")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1883\uff1aMQTT \u534f\u8bae\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"8084\uff1aMQTT/SSL \u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"8083\uff1aMQTT/WebSocket \u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"8080\uff1aHTTP API \u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"18083\uff1aDashboard \u7ba1\u7406\u63a7\u5236\u53f0\u7aef\u53e3")),(0,a.kt)("p",null,"\u8fd0\u884c\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --name emqx -p 1883:1883 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083 emqx/emqx:5.1.1\n")),(0,a.kt)("p",null,"\u8bbf\u95ee Dashboard\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\uff1aadmin/public\uff0c\u4fee\u6539\u540e\u7684\u5bc6\u7801\uff1aadmin@123",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:18083")),(0,a.kt)("h3",{id:"\u4e09jmeter-\u6d4b\u8bd5-mqtt"},"\u4e09\u3001JMeter \u6d4b\u8bd5 MQTT"),(0,a.kt)("p",null,"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/emqx/mqtt-jmeter/releases"},"JMeter MQTT \u63d2\u4ef6")," \u653e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"$JMETER_HOME/lib/ext")," \u76ee\u5f55\u4e0b\u5e76\u91cd\u542f JMeter\u3002"),(0,a.kt)("p",null,"\u65b0\u5efa MQTT Connect\uff08MQTT \u8fde\u63a5\u91c7\u6837\u5668\uff09\u3001MQTT Pub Sampler\uff08MQTT \u6d88\u606f\u53d1\u5e03\u91c7\u6837\u5668\uff09\u3001MQTT Sub Sampler \u8bf7\u6c42\uff0c\u914d\u7f6e\u7ebf\u7a0b\u6570 10 \u4e2a\uff0c\u8fd0\u884c\u7ebf\u7a0b\u3002"),(0,a.kt)("p",null,"\u67e5\u770b EMQX \u96c6\u7fa4\u6982\u89c8"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2455).Z,width:"1512",height:"746"})),(0,a.kt)("p",null,"\u5728 MQTT \u8fde\u63a5\u91c7\u6837\u5668\u540e\u6dfb\u52a0 MQTT Pub Sampler\uff0c\u7528\u4e8e\u53d1\u5e03\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"QoS Level \u4e3a\u6d88\u606f\u7ea7\u522b\uff0c\u652f\u63010\u30011\u30012\uff0c\u5206\u522b\u4ee3\u8868 MQTT \u534f\u8bae\u89c4\u8303\u91cc\u7684\u81f3\u591a\u4e00\u6b21\uff08AT_MOST_ONCE\uff09\uff0c\u81f3\u5c11\u4e00\u6b21\uff08AT_LEAST_ONCE\uff09\uff0c\u7cbe\u786e\u4e00\u6b21\uff08EXACTLY_ONCE\uff09"),(0,a.kt)("li",{parentName:"ul"},"Retained Mesages \u4e3a\u662f\u5426\u4fdd\u7559\u6d88\u606f\uff0c\u652f\u6301 true\u3001false"),(0,a.kt)("li",{parentName:"ul"},"Topic name \u4e3a\u4e3b\u9898\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"Add timestamp in payload \u5728\u62a5\u6587\u4e2d\u52a0\u5165\u65f6\u95f4\u6233"),(0,a.kt)("li",{parentName:"ul"},"Message type : String \u53ef\u586b\u5199\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u62a5\u6587"),(0,a.kt)("li",{parentName:"ul"},"Message type : Hex string \u53ef\u586b\u5199\u81ea\u5b9a\u4e49\u5341\u516d\u8fdb\u5236\u62a5\u6587"),(0,a.kt)("li",{parentName:"ul"},"Message type : Randmom string with fixed length \u4e3a\u56fa\u5b9a\u957f\u5ea6\u968f\u673a\u5b57\u7b26\uff0c\u540e\u9762 Length \u4e3a\u6307\u5b9a\u957f\u5ea6")),(0,a.kt)("p",null,"\u5728 MQTT Connect \u540e\u6dfb\u52a0 MQTT Sub Sampler\uff0c\u6a21\u62df\u8ba2\u9605\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Qos Level \u6d88\u606f\u7ea7\u522b\uff0c\u652f\u63010\u30011\u30012"),(0,a.kt)("li",{parentName:"ul"},"Topic name(s) \u8ba2\u9605\u4e3b\u9898\u540d\u79f0\uff0c\u652f\u6301+/#\u901a\u914d\u7b26\u5171\u4eab\u8ba2\u9605"),(0,a.kt)("li",{parentName:"ul"},"Payload includes timestamp \u62a5\u6587\u662f\u5426\u5305\u542b\u65f6\u95f4\u6233"),(0,a.kt)("li",{parentName:"ul"},"Sample on : specified elapsed time(ms) \u6309\u6beb\u79d2\u65f6\u95f4\u7edf\u8ba1\u8ba2\u9605\u5230\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"Sample on : number of received messages \u6309\u6b21\u6570\u7edf\u8ba1\u8ba2\u9605\u5230\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"Debug response \u8c03\u8bd5\u8fd4\u56de\u4fe1\u606f\uff0c\u5373\u5728\u5bdf\u770b\u7ed3\u679c\u6811\u4e2d\u663e\u793a\u8be6\u7ec6\u8ba2\u9605\u62a5\u6587")))}c.isMDXComponent=!0},2455:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EMQX \u96c6\u7fa4\u6982\u89c8-006af8ea2dd46a84a257682e8efbbfbf.png"}}]);