"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(f,r(r({ref:n},s),{},{components:t})):a.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const l={},r="influx-cli",o={unversionedId:"Database/InfluxDB/influxdb2-client-2.4.0-linux-amd64/README",id:"Database/InfluxDB/influxdb2-client-2.4.0-linux-amd64/README",title:"influx-cli",description:"CLI for managing resources in InfluxDB v2",source:"@site/docs/Database/InfluxDB/influxdb2-client-2.4.0-linux-amd64/README.md",sourceDirName:"Database/InfluxDB/influxdb2-client-2.4.0-linux-amd64",slug:"/Database/InfluxDB/influxdb2-client-2.4.0-linux-amd64/",permalink:"/docs/Database/InfluxDB/influxdb2-client-2.4.0-linux-amd64/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InfluxDB\u65f6\u5e8f\u578b\u6570\u636e\u5e93",permalink:"/docs/Database/InfluxDB/InfluxDB\u65f6\u5e8f\u578b\u6570\u636e\u5e93"},next:{title:"MongoDB\u6570\u636e\u5e93",permalink:"/docs/Database/MongoDB/MongoDB\u6570\u636e\u5e93"}},p={},u=[{value:"Motivation",id:"motivation",level:2},{value:"Building the CLI",id:"building-the-cli",level:2},{value:"Updating openapi",id:"updating-openapi",level:3},{value:"Running the CLI",id:"running-the-cli",level:2},{value:"Enabling Completions",id:"enabling-completions",level:3},{value:"Testing",id:"testing",level:2}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"influx-cli"},"influx-cli"),(0,i.kt)("p",null,"CLI for managing resources in InfluxDB v2"),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"This repository decouples the ",(0,i.kt)("inlineCode",{parentName:"p"},"influx")," CLI from the OSS ",(0,i.kt)("inlineCode",{parentName:"p"},"influxdb")," codebase. Our goals are to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make it easier to keep the CLI up-to-date with InfluxDB Cloud API changes"),(0,i.kt)("li",{parentName:"ol"},"Enable faster turn-around on fixes/features that only affect the CLI"),(0,i.kt)("li",{parentName:"ol"},"Allow the CLI to be built & released for a wider range of platforms than the server can support")),(0,i.kt)("h2",{id:"building-the-cli"},"Building the CLI"),(0,i.kt)("p",null,"Follow these steps to build the CLI. If you're updating your CLI build, see ",(0,i.kt)("em",{parentName:"p"},"Updating openapi")," below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone this repo (influx-cli) and change to your ",(0,i.kt)("em",{parentName:"p"},"influx-cli")," directory."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"git clone git@github.com:influxdata/influx-cli.git\ncd influx-cli\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build the CLI. The ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"make influx")," commands write the new binary to ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/$(GOOS)/influx"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"make\n")))),(0,i.kt)("h3",{id:"updating-openapi"},"Updating openapi"),(0,i.kt)("p",null,"If you change or update your branch, you may also need to update ",(0,i.kt)("inlineCode",{parentName:"p"},"influx-cli/openapi")," and regenerate the client code.\n",(0,i.kt)("inlineCode",{parentName:"p"},"influx-cli/openapi")," is a Git submodule that contains the underlying API contracts and client used by the CLI.\nWe use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},(0,i.kt)("inlineCode",{parentName:"a"},"OpenAPITools/openapi-generator"))," to generate\nthe HTTP client."),(0,i.kt)("p",null,"To update, run the following commands in your ",(0,i.kt)("inlineCode",{parentName:"p"},"influx-cli")," repo:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the ",(0,i.kt)("em",{parentName:"p"},"openapi")," Git submodule. The following command pulls the latest commits for the branch and all submodules."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git pull --recurse-submodules"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"With ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," running locally, regenerate ",(0,i.kt)("em",{parentName:"p"},"openapi"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"make openapi"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rebuild the CLI"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"make")))),(0,i.kt)("h2",{id:"running-the-cli"},"Running the CLI"),(0,i.kt)("p",null,"After building, use ",(0,i.kt)("inlineCode",{parentName:"p"},"influx -h")," to see the list of available commands."),(0,i.kt)("h3",{id:"enabling-completions"},"Enabling Completions"),(0,i.kt)("p",null,"The CLI supports generating completions for ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell"),". To enable completions for a\nsingle shell session, run one of these commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# For bash:\nsource <(influx completion bash)\n# For zsh:\nsource <(influx completion zsh)\n# For pwsh:\nInvoke-Expression ((influx completion powershell) -join "`n`")\n')),(0,i.kt)("p",null,"To enable completions across sessions, add the appropriate line to your shell's login profile (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),")."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"make test")," to run unit tests."))}m.isMDXComponent=!0}}]);