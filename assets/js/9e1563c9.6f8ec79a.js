"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1860],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>u});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),l=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=l(r),m=t,u=k["".concat(s,".").concat(m)]||k[m]||p[m]||a;return r?o.createElement(u,c(c({ref:n},d),{},{components:r})):o.createElement(u,c({ref:n},d))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[k]="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},238:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),t=(r(7294),r(3905));const a={},c=void 0,i={unversionedId:"Docker/Docker \u5b89\u88c5\u8f6f\u4ef6",id:"Docker/Docker \u5b89\u88c5\u8f6f\u4ef6",title:"Docker \u5b89\u88c5\u8f6f\u4ef6",description:"[TOC]",source:"@site/docs/Docker/Docker \u5b89\u88c5\u8f6f\u4ef6.md",sourceDirName:"Docker",slug:"/Docker/Docker \u5b89\u88c5\u8f6f\u4ef6",permalink:"/docs/Docker/Docker \u5b89\u88c5\u8f6f\u4ef6",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/Docker/"},next:{title:"Orbstack",permalink:"/docs/Docker/Orbstack"}},s={},l=[{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:2},{value:"Docker \u5b89\u88c5 MySQL",id:"docker-\u5b89\u88c5-mysql",level:3},{value:"Docker \u5b89\u88c5 Redis",id:"docker-\u5b89\u88c5-redis",level:3},{value:"Docker \u5b89\u88c5 redisinsight",id:"docker-\u5b89\u88c5-redisinsight",level:3},{value:"Docker \u5b89\u88c5 Postgres",id:"docker-\u5b89\u88c5-postgres",level:3},{value:"Docker \u5b89\u88c5 MongoDB",id:"docker-\u5b89\u88c5-mongodb",level:3},{value:"Docker \u5b89\u88c5 ClickHouse",id:"docker-\u5b89\u88c5-clickhouse",level:3},{value:"\u76d1\u63a7",id:"\u76d1\u63a7",level:2},{value:"Docker \u5b89\u88c5 Grafana",id:"docker-\u5b89\u88c5-grafana",level:3},{value:"Docker \u5b89\u88c5 Prometheus",id:"docker-\u5b89\u88c5-prometheus",level:3},{value:"Docker \u5b89\u88c5 Influxdb",id:"docker-\u5b89\u88c5-influxdb",level:3},{value:"Docker \u5b89\u88c5 node-exporter",id:"docker-\u5b89\u88c5-node-exporter",level:3},{value:"Docker \u5b89\u88c5 mysqld-exporter",id:"docker-\u5b89\u88c5-mysqld-exporter",level:3},{value:"\u6d88\u606f\u961f\u5217",id:"\u6d88\u606f\u961f\u5217",level:2},{value:"Docker \u5b89\u88c5 RocketMQ",id:"docker-\u5b89\u88c5-rocketmq",level:3},{value:"Docker \u5b89\u88c5 Rabbitmq",id:"docker-\u5b89\u88c5-rabbitmq",level:3},{value:"Docker \u5b89\u88c5 Zookeeper",id:"docker-\u5b89\u88c5-zookeeper",level:3},{value:"Docker \u5b89\u88c5 Kafka",id:"docker-\u5b89\u88c5-kafka",level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:2},{value:"Docker \u5b89\u88c5 Portainer",id:"docker-\u5b89\u88c5-portainer",level:3},{value:"Docker \u5b89\u88c5 Jenkins",id:"docker-\u5b89\u88c5-jenkins",level:3},{value:"Docker \u5b89\u88c5 Gitlab",id:"docker-\u5b89\u88c5-gitlab",level:3},{value:"Docker \u5b89\u88c5 Gitlab Runner",id:"docker-\u5b89\u88c5-gitlab-runner",level:3},{value:"Docker \u5b89\u88c5 Minio",id:"docker-\u5b89\u88c5-minio",level:3},{value:"Docker \u5b89\u88c5 xxl-job",id:"docker-\u5b89\u88c5-xxl-job",level:3},{value:"Docker \u5b89\u88c5 zentao",id:"docker-\u5b89\u88c5-zentao",level:3},{value:"Docker \u5b89\u88c5 Tomcat",id:"docker-\u5b89\u88c5-tomcat",level:3},{value:"Docker \u5b89\u88c5 Sonar",id:"docker-\u5b89\u88c5-sonar",level:3},{value:"Docker \u5b89\u88c5 JIRA",id:"docker-\u5b89\u88c5-jira",level:3},{value:"\u8e29\u5751",id:"\u8e29\u5751",level:2}],d={toc:l},k="wrapper";function p(e){let{components:n,...a}=e;return(0,t.kt)(k,(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"[TOC]"),(0,t.kt)("hr",null),(0,t.kt)("h1",{align:"center"},"Docker \u5b89\u88c5\u8f6f\u4ef6"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"By\uff1aweimenghua",(0,t.kt)("br",{parentName:"p"}),"\n","Date\uff1a2022.07.24",(0,t.kt)("br",{parentName:"p"}),"\n","Description\uff1aDocker")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("a",{parentName:"p",href:"https://www.yuque.com/coolops"},"\u4e54\u514b\u53d4\u53d4 DevOps")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u516c\u5171\u547d\u4ee4")),(0,t.kt)("p",null,"\u6ce8\u610f\uff1a\u7aef\u53e3\u6620\u5c04\u548c\u76ee\u5f55\u6620\u5c04\u5de6\u8fb9\u662f\u670d\u52a1\u5668"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u641c\u7d22\u955c\u50cf\ndocker search <\u955c\u50cf\u540d\u79f0>\ndocker search jenkins\n\n\u62c9\u53d6\u955c\u50cf\ndocker pull <\u6240\u5c5e\u7ec4\u7ec7\uff1f>/<\u955c\u50cf\u540d\u79f0>\ndocker pull jenkins/jenkins\n\n\u8fdb\u5165\u5bb9\u5668\ndocker exec -it <\u5bb9\u5668\u540d\u79f0> /bin/bash\ndocker exec -it mysql /bin/bash\n\n\u5728\u5bb9\u5668\u6267\u884c\u547d\u4ee4\ndocker exec -it <\u5bb9\u5668\u540d\u79f0> <\u6267\u884c\u547d\u4ee4>\ndocker exec -it mysql cat /etc/my.cnf\n\n\u67e5\u770b\u65e5\u5fd7\ndocker logs -f <\u5bb9\u5668\u540d\u79f0>\ndocker logs -f jenkins\n\n\u5220\u9664\u5bb9\u5668\ndocker rm -f <\u5bb9\u5668\u540d\u79f0>\ndocker rm -f jenkins\n\n\u5c06\u5bb9\u5668\u4e2d\u7684\u76ee\u5f55\u590d\u5236\u5230\u5bbf\u4e3b\u673a\u4e2d\ndocker cp <\u5bb9\u5668\u540d\u79f0>:<\u6587\u4ef6\u76ee\u5f55> <\u6587\u4ef6\u76ee\u5f55>\ndocker cp mysql:/var/lib/mysql /var/lib/mysql\n\n\u5c06\u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230\u5bbf\u4e3b\u673a\u4e2d\ndocker cp <\u5bb9\u5668\u540d\u79f0>:<\u6587\u4ef6\u540d\u79f0> <\u6587\u4ef6\u540d\u79f0>\ndocker cp mysql:/etc/my.cnf /etc/my.cnf\n")),(0,t.kt)("h2",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-mysql"},"Docker \u5b89\u88c5 MySQL"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/bitnami/bitnami-docker-mysql"},"MySQL \u5b89\u88c5\u6587\u6863")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name mysql \\\n--restart always \\\n-p 3306:3306 \\\n-v /var/lib/mysql:/var/lib/mysql \\\n-v /etc/my.conf:/etc/my.conf \\\n-e MYSQL_ROOT_PASSWORD=root \\\nmysql:8.0\n\n\u914d\u7f6e\nmysql -uroot -proot\nuse mysql;\nalter user 'root'@'%' identified with mysql_native_password by 'root';\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION;\nflush privileges;\nselect host,user,plugin,authentication_string from mysql.user;\n\n\u89e3\u51b3\u65f6\u5dee\u95ee\u9898\ndocker cp /usr/share/zoneinfo/Asia/Shanghai mysql:/etc/localtime\ndocker restart mysql\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-redis"},"Docker \u5b89\u88c5 Redis"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name redis \\\n-p 6379:6379 \\\n-v /root/redis/redis.conf:/etc/redis/redis.conf \\\n-v /root/redis/data:/data \\\nredis \\\nredis-server /etc/redis/redis.conf --appendonly yes --requirepass "root"\n\n\u53c2\u6570\u8bf4\u660e\nredis-server --appendonly yes --requirepass "root": \u5728\u5bb9\u5668\u6267\u884c redis-server \u542f\u52a8\u547d\u4ee4\uff0c\u5e76\u6253\u5f00 redis \u6301\u4e45\u5316\u914d\u7f6e, \u4ee5\u53ca\u8bbe\u7f6e\u5bc6\u7801\n\n\u8fdb\u5165 redis \u5ba2\u6237\u7aef\ndocker exec -it redis redis-cli\n')),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-redisinsight"},"Docker \u5b89\u88c5 redisinsight"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name redisinsight \\\n-v /etc/localtime:/etc/localtime \\\n-v /root/docker/redisinsight:/db  \\\n-p 8001:8001 \\\nredislabs/redisinsight:latest\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8001/\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:r(3921).Z,width:"1492",height:"746"})),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-postgres"},"Docker \u5b89\u88c5 Postgres"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name postgres \\\n--restart=always \\\n-p 5432:5432 \\\n-v /root/postgresql:/var/lib/postgresql/data \\\n-e POSTGRES_PASSWORD=postgres \\\npostgres\n\n\u7528\u6237\u540d\uff1apostgres\n\u5bc6\u7801\uff1apostgres\n\u6570\u636e\u5e93\u540d\uff1apostgres\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-mongodb"},"Docker \u5b89\u88c5 MongoDB"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\uff08\u65e0\u5bc6\u7801\uff09\ndocker run -d \\\n--name mongodb \\\n--restart always \\\n--privileged \\\n-p 27017:27017 \\\n-v /root/docker/mongo:/data/db \\\nmongo\n\n\u8fd0\u884c\u5bb9\u5668\uff08\u6709\u5bc6\u7801\uff09\ndocker run -d \\\n--name=mongodb \\\n--restart=always \\\n--privileged \\\n-p 27017:27017 \\\n-v /root/docker/mongo:/data/db \\\n-e MONGO_INITDB_ROOT_USERNAME=admin \\\n-e MONGO_INITDB_ROOT_PASSWORD=admin \\\nmongo --auth\n\n\u8fdb\u5165\u6570\u636e\u5e93\uff08MongoDB 6.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff09\ndocker exec -it mongodb mongosh admin\n\n\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a root\uff0c\u5bc6\u7801\u4e3a root \u7684\u7528\u6237\ndb.createUser({ user:'root',pwd:'root',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},\"readWriteAnyDatabase\"]});\n\n\u5c1d\u8bd5\u4f7f\u7528\u4e0a\u9762\u521b\u5efa\u7684\u7528\u6237\u4fe1\u606f\u8fdb\u884c\u8fde\u63a5\ndb.auth('root', 'root');\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-clickhouse"},"Docker \u5b89\u88c5 ClickHouse"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name ch-server \\\n--ulimit nofile=262144:262144 \\\n-p 9000:9000 \\\n-p 8123:8123 \\\nyandex/clickhouse-server\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8123/play\n\n\u8fdb\u5165\u5bb9\u5668\ndocker exec -it ch-server /bin/bash\n\n\u5b89\u88c5\u8f6f\u4ef6\napt-get update\napt-get install vim -y\n\n\u8fdb\u5165 clickhouse-client\nclickhouse-client\n\n\u67e5\u770b clickhouse \u6570\u636e\u5e93\nshow databases;\n\n\u4fee\u6539\u914d\u7f6e\nvim /etc/clickhouse-server/users.xml \n\n\u91c7\u7528 SHA256\u7684\u65b9\u5f0f\u52a0\u5bc6\uff0c\u751f\u6210\u660e\u7801\u5bc6\u6587\nPASSWORD=$(base64 < /dev/urandom | head -c8); echo \"root\"; echo -n \"root\" | sha256sum | tr -d '-'\nroot\n4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2\n\u5bc6\u6587\u5199\u5165\n<password_sha256_hex>4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2</password_sha256_hex>\n\u660e\u6587\u5199\u5165\n<password>root</password>\n\n\u5ba2\u6237\u7aef\u8bbf\u95ee\u670d\u52a1\u7aef\nclickhouse-client -h 127.0.0.1 -d default -m -u default --password 'root'\n\n\u67e5\u770b\u65e5\u5fd7\ndocker logs -f ch-server\n\n\u5220\u9664\u5bb9\u5668\ndocker rm -f ch-server\n")),(0,t.kt)("h2",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-grafana"},"Docker \u5b89\u88c5 Grafana"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name grafana \\\n-p 3000:3000 \\\ngrafana/grafana\n\n\u4ece\u5bb9\u5668\u590d\u5236\u6587\u4ef6\u5230\u5bbf\u4e3b\u673a\ncd /root/grafana && rm -rf *\ndocker cp grafana:/etc/grafana /root/grafana/conf\ndocker cp grafana:/var/lib/grafana /root/grafana/data\ndocker cp grafana:/var/log/grafana /root/grafana/log\n\n\u8e29\u5751\uff1a\u5fc5\u987b\u5f97\u5148\u8bbe\u7f6e\u5206\u914d\u7528\u6237\uff0c\u5426\u5219\u4f1a\u62a5\u6743\u9650\u9519\u8bef\u95ee\u9898\nuseradd grafana -g -472\ngroupadd grafana -g 472\nchown -R grafana:grafana grafana\n\n\u91cd\u65b0\u8fd0\u884c\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name grafana \\\n-p 3000:3000 \\\n-v /root/grafana/conf:/etc/grafana \\\n-v /root/grafana/data:/var/lib/grafana \\\n-v /root/grafana/log:/var/log/grafana \\\ngrafana/grafana\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:3000/login admin/admin\n\n\u4eea\u8868\u76d8\u6a21\u677f\u5730\u5740\nhttps://grafana.com/grafana/dashboards/\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-prometheus"},"Docker \u5b89\u88c5 Prometheus"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'\u5b98\u7f51\uff1ahttps://prometheus.io/\n\n\u6dfb\u52a0\u914d\u7f6e\nmkdir -vp /root/prometheus && cd /root/prometheus\ncat >> prometheus.yml <<EOF\nglobal:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: "prometheus"\n    static_configs:\n    - targets: ["localhost:9090","127.0.0.1:9100"]\n# 127.0.0.1:9100 \u662f xxx-exporter \u7684\u5730\u5740\nEOF\n\n\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name prometheus \\\n-p 9090:9090 \\\n-v /root/prometheus:/etc/prometheus \\\nprom/prometheus\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1/9090\n')),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-influxdb"},"Docker \u5b89\u88c5 Influxdb"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668 8083\u662f influxdb \u7684 web \u7ba1\u7406\u5de5\u5177\u7aef\u53e3\uff0c8086\u662f influxdb \u7684 HTTP API \u7aef\u53e3\ndocker run -d \\\n--name influxdb \\\n-p 8083:8083 \\\n-p 8086:8086 \\\n-v /root/influxdb:/var/lib/influxdb \\\ntutum/influxdb\n\ndocker run -d \\\n--name influxdb \\\n-p 8086:8086 \\\n-v /root/influxdb:/var/lib/influxdb \\\ninfluxdb:1.8\n\n\u8fdb\u5165\u5bb9\u5668\ndocker exec -it influxdb /bin/bash\ncd /usr/bin              # bin \u76ee\u5f55\u5b58\u5728\u5982\u4e0b\u6587\u4ef6\uff0c\u53ef\u4ee5\u5728\u4efb\u610f\u76ee\u5f55\u6267\u884c influxd\u3001influx\ninfluxd            # influxdb \u670d\u52a1\u7aef\ninflux             # influxdb \u547d\u4ee4\u884c\u5ba2\u6237\u7aef\ninflux_inspect     # \u67e5\u770b\u5de5\u5177\ninflux_stress      # \u538b\u529b\u6d4b\u8bd5\u5de5\u5177\ninflux_tsm         # \u6570\u636e\u5e93\u8f6c\u6362\u5de5\u5177\uff08\u5c06\u6570\u636e\u5e93\u4ece b1\u6216 bz1\u683c\u5f0f\u8f6c\u6362\u4e3a tsm1\u683c\u5f0f\uff09\n\ninfluxd config > /etc/influxdb/influxdb.conf    #\u53ef\u4e0d\u6267\u884c\ncat /etc/influxdb/influxdb.conf\ncat /usr/lib/influxdb/scripts/influxdb.service\n\ndocker cp influxdb:/etc/influxdb/influxdb.conf /root/docker/influxdb\ndocker cp /root/influxdb/influxdb.conf influxdb:/etc/influxdb/influxdb.conf\n\n\u521b\u5efa\u6570\u636e\nshow users;\ncreate user \"root\" with password 'root' with all privileges;\ncreate database jmeter;\nshow databases;\nuse jmeter;\nshow measurements;\ninsert jmeter,key=age value=\"18\";\nselect * from jmeter;\n\n\u542f\u52a8\u5ba2\u6237\u7aef\u6267\u884c sql\ninflux -host localhost -port 8086 -database jmeter -username 'root' -password 'root' -execute 'select * from jmeter'\ninflux -host localhost -port 8086 -database jmeter -username 'root' -password 'root' -execute 'create database jmeter;'\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8083/\n\n\n\u65b9\u5f0f\u4e8c\ndocker run --rm influxdb:2.1.1 influxd print-config > config.yml\n\ndocker run -d \\\n--name influxdb \\\n-p 8086:8086 \\\n-v /root/influxdb/config.yml:/etc/influxdb2/config.yml \\\n-v /root/influxdb:/var/lib/influxdb2 \\\ninfluxdb:2.1.1\n\ndocker exec -it influxdb /bin/bash\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8086/ admin/admin123456\n\ninflux config create -n default \\\n-u http://localhost:8086 \\\n-o my-org \\\n-t 0rTwpq3Nmh0XXGtH4yDo6uMj-m8TNaDC-U424Dwt8mLZCg6MM13Z7E-LewmS2T2z6YAbB4c-qLAlbTWNqZ-L7Q== \\\n-a\n\nexport INFLUX_TOKEN=0rTwpq3Nmh0XXGtH4yDo6uMj-m8TNaDC-U424Dwt8mLZCg6MM13Z7E-LewmS2T2z6YAbB4c-qLAlbTWNqZ-L7Q==\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-node-exporter"},"Docker \u5b89\u88c5 node-exporter"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name node-exporter \\\n-p 9100:9100 \\\n-v /root/node-exporter/proc:/host/proc:ro \\\n-v /root/node-exporter/sys:/host/sys:ro \\\n-v /root/node-exporter:/root/dockerfs:ro \\\nprom/node-exporter\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:9100\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-mysqld-exporter"},"Docker \u5b89\u88c5 mysqld-exporter"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'#DATA_SOURCE_NAME="\u7528\u6237\u540d:\u5bc6\u7801@(mysqlip:port)"\ndocker run -d \\\n  --name mysqld-exporter\n  -p 9104:9104 \\\n  --net="host" \\\n  --pid="host" \\\n  -e DATA_SOURCE_NAME="root:root@(127.0.0.1:3306)/" \\\n  prom/mysqld-exporter\n  \n\u5728 prometheus.yml \u6dfb\u52a0\uff1a\n  - job_name: "mysql"\n    static_configs:\n    - targets: ["127.0.0.1:9104"]\n\u6ce8\uff1a- job_name \u4e0a\u65b9\u7559\u7a7a\u884c\n\n\u8bbf\u95ee\nhttp://127.0.0.1:9104/metrics\n\n\u6dfb\u52a0\u6570\u636e\u6e90\uff1ahttp://127.0.0.1:9090\uff0c\u6ce8\uff1a\u4e0d\u662f9104\nMySQL \u76d1\u63a7\u6a21\u677f ID\uff1a7362\n')),(0,t.kt)("h2",{id:"\u6d88\u606f\u961f\u5217"},"\u6d88\u606f\u961f\u5217"),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-rocketmq"},"Docker \u5b89\u88c5 RocketMQ"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'\u4e00\u3001\u5b89\u88c5 RocketMQ\n1\u3001\u62c9\u53d6\u955c\u50cf\ndocker pull rocketmqinc/rocketmq\n\n2\u3001\u521b\u5efa\u6587\u4ef6\u5939\n\u5728 /root/docker/software \u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6\u5939 mq\nmkdir mq\n/root/docker/software/mq\n\n3\u3001\u542f\u52a8\u5bb9\u5668\ndocker run -d --restart=always \\\n-p 9876:9876  \\\n-v /root/docker/software/mq/data/namesrv/logs:/root/docker/logs \\\n-v /root/docker/software/mq/data/namesrv/store:/root/docker/store \\\n--name rmqnamesrv -e "MAX_POSSIBLE_HEAP=100000000" \\\nrocketmqinc/rocketmq sh mqnamesrv\n\n4\u3001\u67e5\u770b\u65e5\u5fd7\ndocker logs -f rmqnamesrv\n\n5\u3001\u5220\u9664\u5bb9\u5668\ndocker rm -f rmqnamesrv\n\n\n\n\u4e8c\u3001\u5b89\u88c5 broker\n1\u3001\u521b\u5efa broker.conf \u6587\u4ef6\ncd /root/docker/software/mq/conf\n\nvim broker.conf\nbrokerClusterName = DefaultCluster\nbrokerName = broker-a\nbrokerId = 0\ndeleteWhen = 04\nfileReservedTime = 48\nbrokerRole = ASYNC_MASTER\nflushDiskType = ASYNC_FLUSH\nbrokerIP1 = 127.0.0.1\n\ncat /root/docker/software/mq/conf/broker.conf\n\n2\u3001\u542f\u52a8\u5bb9\u5668\ndocker run -d --restart=always --name rmqbroker \\\n-p 10911:10911 -p 10909:10909 \\\n-v /root/docker/software/mq/data/broker/logs:/root/docker/logs \\\n-v /root/docker/software/mq/rocketmq/data/broker/store:/root/docker/store \\\n-v /root/docker/software/mq/conf/broker.conf:/opt/rocketmq-4.4.0/conf/broker.conf \\\n--link rmqnamesrv:namesrv -e "NAMESRV_ADDR=namesrv:9876" \\\n-e "MAX_POSSIBLE_HEAP=200000000" rocketmqinc/rocketmq:4.4.0 sh mqbroker \\\n-c /opt/rocketmq-4.4.0/conf/broker.conf\n\n3\u3001\u67e5\u770b\u65e5\u5fd7\ndocker logs -f rmqbroker\n\n4\u3001\u5220\u9664\u5bb9\u5668\ndocker rm -f rmqbroker\n\n\n\u4e09\u3001\u5b89\u88c5 rocketmq \u63a7\u5236\u53f0\n1\u3001\u62c9\u53d6\u955c\u50cf\ndocker pull styletang/rocketmq-console-ng\n\n2\u3001\u542f\u52a8 rocketmq \u63a7\u5236\u53f0\ndocker run -d --restart=always --name rocketmq-console-ng \\\n-p 8080:8080 \\\n-e "JAVA_OPTS=-Drocketmq.namesrv.addr=127.0.0.1:9876  \\\n-Dcom.rocketmq.sendMessageWithVIPChannel=false" \\\n-t styletang/rocketmq-console-ng\n\n3\u3001\u67e5\u770b\u65e5\u5fd7\ndocker logs -f rocketmq-console-ng\n\n4\u3001\u8bbf\u95ee\u63a7\u5236\u53f0\nhttp://127.0.0.1:8080/\n\n5\u3001\u5220\u9664\u5bb9\u5668\ndocker rm -f rocketmq-console-ng\n\n\u6ce8\u610f\uff1a\n1\u3001IP \u5730\u5740\u8981\u516c\u7f51\u7684\n2\u3001\u5f00\u653e\u7aef\u53e38080\u300110909\u300110911\u30019876\n')),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-rabbitmq"},"Docker \u5b89\u88c5 Rabbitmq"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u62c9\u53d6\u955c\u50cf\ndocker pull rabbitmq:management\n\n\u542f\u52a8\u5bb9\u5668\ndocker run -id --hostname my-rabbit \\\n--name rabbitmq \\\n-p 15672:15672 \\\n-p 5672:5672 \\\n-e RABBITMQ_DEFAULT_USER=admin \\\n-e RABBITMQ_DEFAULT_PASS=admin \\\nrabbitmq:management\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:15672 admin/admin\n\n\u67e5\u770b\u65e5\u5fd7\ndocker logs -f rabbitmq\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-zookeeper"},"Docker \u5b89\u88c5 Zookeeper"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'1\u3001\u641c\u7d22\u60ca\u559c\ndocker search zookeeper\n\n2\u3001\u62c9\u53d6\u955c\u50cf\ndocker pull zookeeper\n\n3\u3001\u8fd0\u884c\u5bb9\u5668\nmkdir data conf logs\ndocker run -d \\\n--name zookeeper \\\n--restart=always \\\n--privileged=true \\\n--net=kafka_zk_net \\\n--log-driver json-file --log-opt max-size=100m --log-opt max-file=2 \\\n-p 2181:2181 \\\n-v /root/docker/software/zookeeper/data:/data \\\n-v /root/docker/software/zookeeper/conf:/conf \\\n-v /root/docker/software/zookeeper/logs:/datalog \\\n-v /etc/localtime:/etc/localtime \\\nzookeeper\n\n4\u3001\u914d\u7f6e\n\u5728 conf \u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6 zoo.cfg\nvim zoo.cfg\n# The number of  milliseconds of each tick\ntickTime=2000\n# The number of ticks that the initial\n# synchronization phase can take\ninitLimit=10\n# The number of ticks that can pass between\n# sending a request and getting an acknowledgement\nsyncLimit=5\n# the directory where the snapshot is stored.\n# do not use /tmp for storage, /tmp here is just\n# example sakes.\ndataDir=/data\n# the port at which the clients will connect\nclientPort=2181\n# the maximum number of client connections.\n# increase this if you need to handle more clients\n#maxClientCnxns=60\n#\n# Be sure to read the maintenance section of the\n# administrator guide before turning on autopurge.\n#\n# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance\n#\n# The number of snapshots to retain in dataDir\n#autopurge.snapRetainCount=3\n# Purge task interval in hours\n# Set to "0" to disable auto purge feature\n#autopurge.purgeInterval=1\n \n## Metrics Providers\n#\n# https://prometheus.io Metrics Exporter\n#metricsProvider.className=org.apache.zookeeper.metrics.prometheus.PrometheusMetricsProvider\n#metricsProvider.httpPort=7000\n#metricsProvider.exportJvmInfo=true\n\n5\u3001\u67e5\u770b\u65e5\u5fd7\ndocker logs -f zookeeper\n\n6\u3001\u67e5\u770b\u5bb9\u5668\u72b6\u6001\ndocker exec -it zookeeper /bin/bash ./bin/zkServer.sh status\n\n7\u3001\u5220\u9664\u5bb9\u5668\ndocker rm -f zookeeper\n\n8\u3001\u8fd0\u884c\u5ba2\u6237\u7aef\ndocker exec -it zookeeper zkCli.sh\ndocker run -it --rm --link zookeeper:zookeeper zookeeper zkCli.sh -server zookeeper\n')),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-kafka"},"Docker \u5b89\u88c5 Kafka"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"1\u3001\u641c\u7d22\u955c\u50cf\ndocker search kafka\n\n2\u3001\u521b\u5efa\u901a\u4fe1\u7f51\u7edc\nzookeeper \u548c kafka \u4e4b\u95f4\u7684\u901a\u4fe1\ndocker network create kafka_zk_net\n\n\u67e5\u770b\u7f51\u7edc\ndocker network ls\ndocker network inspect kafka_zk_net\n\n3\u3001\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name kafka \\\n--net=kafka_zk_net \\\n-p 9092:9092 \\\n-e ALLOW_PLAINTEXT_LISTENER=yes \\\n-e KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181 \\\n-e KAFKA_ADVERTISED_HOST_NAME=127.0.0.1 \\\n-e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092 \\\nbitnami/kafka:latest\n\u6ce8\uff1a\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u7f51\u7edc\u94fe\u63a5\uff0czookeeper \u540d\u79f0\u9700\u66ff\u6362\u4e3a\u670d\u52a1\u5668 ip\n\n4\u3001\u67e5\u770b\u65e5\u5fd7\ndocker logs -f kafka\n\n5\u3001\u542f\u52a8\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\ndocker exec -it kafka bash\ncd /opt/bitnami/kafka/bin\n\u751f\u4ea7\u8005\n./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic topic1\n\u6d88\u8d39\u8005\n./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic1 --from-beginning\n\n6\u3001\u5220\u9664\u5bb9\u5668\ndocker rm -f kafka\n\n\n1\u3001\u8fd0\u884c kafka \u53ef\u89c6\u5316\u5bb9\u5668\uff08\u4e0d\u597d\u7528\uff09\ndocker run -d --name kafka-map \\\n-p 9001:8080 \\\n-v /root/docker/software/kafka/data:/usr/local/kafka-map/data \\\n-e DEFAULT_USERNAME=admin \\\n-e DEFAULT_PASSWORD=admin \\\n--restart always dushixiang/kafka-map:latest\n\n2\u3001\u8bbf\u95ee\nhttp://127.0.0.1:9001/#/\n")),(0,t.kt)("h2",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-portainer"},"Docker \u5b89\u88c5 Portainer"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name portainer \\\n--restart=always \\\n-p 9000:9000 \\\n-p 8000:8000 \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-v /root/docker/portainer/data:/data \\\n portainer/portainer\n\n\u8bbf\u95ee\u5730\u5740\uff1ahttp://127.0.0.1:9000/\n\u7b2c\u4e00\u6b21\u767b\u5f55\u7684\u65f6\u5019\u9700\u8981\u521b\u5efa\u7ba1\u7406\u5458\u8d26\u53f7\n\u8d26\u53f7\uff1aadmin\n\u5bc6\u7801\uff1aadmin12345678\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-jenkins"},"Docker \u5b89\u88c5 Jenkins"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u542f\u52a8\u5bb9\u5668\ndocker run -d \\\n--name=jenkins \\\n--restart=always \\\n-u root \\\n-p 5555:8080 \\\n-p 50000:50000 \\\n-v /var/jenkins_home:/var/jenkins_home \\\n-v /etc/localtime:/etc/localtime \\\njenkins/jenkins\n    \n\u547d\u4ee4\u8bf4\u660e\n-d\uff1a\u540e\u53f0\u8fd0\u884c\u5bb9\u5668\uff1b\n--name=jenkins\uff1a\u7ed9\u5bb9\u5668\u8d77\u522b\u540d\uff1b\n--restart=always\uff1a\u8bbe\u7f6e\u5bb9\u5668\u7684\u91cd\u542f\u7b56\u7565\u4e3a Docker \u91cd\u542f\u65f6\u81ea\u52a8\u91cd\u542f\uff1b\n-p 8888:8080\uff1a\u5c06\u5bb9\u5668\u7684 8080 \u7aef\u53e3\u6620\u5c04\u5230\u670d\u52a1\u5668\u7684 8888 \u7aef\u53e3\uff1b\n-p 50000:50000\uff1a\u5c06\u5bb9\u5668\u7684 50000 \u7aef\u53e3\u6620\u5c04\u5230\u670d\u52a1\u5668\u7684 50000 \u7aef\u53e3\uff1b\n-v /var/jenkins_home:/var/jenkins_home\uff1a\u5c06\u5bb9\u5668\u4e2d Jenkins \u7684\u5de5\u4f5c\u76ee\u5f55\u6302\u8f7d\u5230\u670d\u52a1\u5668\u7684 /var/jenkins_home\uff1b\n-v /etc/localtime:/etc/localtime\uff1a\u8ba9\u5bb9\u5668\u4f7f\u7528\u548c\u670d\u52a1\u5668\u540c\u6837\u7684\u65f6\u95f4\u8bbe\u7f6e\uff1b\n\n\u67e5\u770b\u65e5\u5fd7\ndocker logs jenkins\n\n\u8bbf\u95ee\u5730\u5740\uff0c\u8d26\u53f7\u5bc6\u7801\uff1aadmin/admin\nhttp://127.0.0.1:5555/\n\n\u8fdb\u5165\u5bb9\u5668\ndocker exec -it jenkins bash\n\n\u67e5\u770b Jenkins \u9ed8\u8ba4\u5bc6\u7801\ndocker exec -it jenkins bash -c 'cat /var/jenkins_home/secrets/initialAdminPassword'\n\u5982\u505a\u76ee\u5f55\u6302\u8f7d\uff0c\u76f4\u63a5\u5728\u5bbf\u4e3b\u673a\u6267\u884c\ncat /var/jenkins_home/secrets/initialAdminPassword\n\n\u8fdb\u5165\u5bb9\u5668\u628a\u914d\u7f6e\u62f7\u8d1d\u5230\u5bbf\u4e3b\u673a\ndocker cp jenkins:/var/jenkins_home /var/jenkins_home\n\n\u67e5\u770b\u76ee\u5f55\u6302\u8f7d\ndocker inspect jenkins | grep Mounts -A 20\n\n\u5220\u9664\u5bb9\u5668\ndocker rm -f jenkins\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-gitlab"},"Docker \u5b89\u88c5 Gitlab"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://docs.gitlab.cn/jh/install/docker.html"},"\u53c2\u8003\u8d44\u6599")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u641c\u7d22\u955c\u50cf\ndocker search gitlab\n\n\u62c9\u53d6\u955c\u50cf\ndocker pull gitlab/gitlab-ce\n\n\u521b\u5efa\u76ee\u5f55\nmkdir config logs data\n\n\u8fd0\u884c\u5bb9\u5668\ndocker run -d --restart always --name gitlab \\\n-p 443:443 \\\n-p 8082:80 \\\n-p 222:22  \\\n-v /root/docker/software/gitlab/config:/etc/gitlab \\\n-v /root/docker/software/gitlab/logs:/var/log/gitlab \\\n-v /root/docker/software/gitlab/data:/var/opt/gitlab \\\ngitlab/gitlab-ce\n\n\u914d\u7f6e\u6587\u4ef6\nvim /root/docker/software/gitlab/config/gitlab.rb\n# \u914d\u7f6e http \u534f\u8bae\u6240\u4f7f\u7528\u7684\u8bbf\u95ee\u5730\u5740,\u4e0d\u52a0\u7aef\u53e3\u53f7\u9ed8\u8ba4\u4e3a80\nexternal_url 'http://1.12.237.48'\n# \u914d\u7f6e ssh \u534f\u8bae\u6240\u4f7f\u7528\u7684\u8bbf\u95ee\u5730\u5740\u548c\u7aef\u53e3\ngitlab_rails['gitlab_ssh_host'] = '1.12.237.48'\n#\u914d\u7f6e\u8d85\u65f6\u8bbe\u7f6e\ngitlab_rails['webhook_timeout'] = 90 \ngitlab_rails['git_timeout']=90\ndocker restart gitlab\n\n\u67e5\u770b\u65e5\u5fd7\ndocker logs -f gitlab\n\n\u8bbf\u95ee\u5730\u5740\nhttp://1.12.237.48:8082\n\n\u67e5\u770b\u5bc6\u7801\ndocker exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password\nroot / 14u91F2B5/P4GoRxhjIWkslGoiL6xQ4SoBazO2gc520=\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-gitlab-runner"},"Docker \u5b89\u88c5 Gitlab Runner"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name gitlab-runner \\\n--restart always \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-v `pwd`/config:/etc/gitlab-runner \\\ngitlab/gitlab-runner:latest\n  \n\u8fdb\u5165\u5bb9\u5668\ndocker exec -it gitlab-runner /bin/bash\n\n\u6ce8\u518c GitLab Runner\ngitlab-runner register\ngitlab-runner register  --url https://jihulab.com  --token <token>\n\n\u67e5\u770b\u914d\u7f6e\u6587\u4ef6\ncat `pwd`/config/config.toml\n\n\u91cd\u542f\u5bb9\u5668\ndocker restart gitlab-runner\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-minio"},"Docker \u5b89\u88c5 Minio"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--restart=always \\\n--name minio \\\n-p 9090:9090 \\\n-p 9001:9001 \\\n-v /root/docker/minio/data:/data \\\n-e "MINIO_ROOT_USER=minioadmin" \\\n-e "MINIO_ROOT_PASSWORD=minioadmin" \\\nminio/minio server /data --console-address ":9090" -address ":9000"\n  \n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:9090/login minioadmin/minioadmin \n')),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-xxl-job"},"Docker \u5b89\u88c5 xxl-job"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u5b98\u65b9\u6587\u6863\nhttps://gitee.com/xuxueli0323/xxl-job/tree/master\nhttps://www.xuxueli.com/xxl-job/\n\n\u641c\u7d22\u955c\u50cf\ndocker search xxl-job\n\n\u62c9\u53d6\u955c\u50cf\ndocker pull xuxueli/xxl-job-admin:2.3.1\n\n\u4e0b\u8f7d sql \u6587\u4ef6\uff0c\u5bfc\u5165 mysql \u6570\u636e\u5e93\uff0c\u6267\u884c tables_xxl_job.sql\nwget https://raw.githubusercontent.com/xuxueli/xxl-job/2.3.1/doc/db/tables_xxl_job.sql\n\u6570\u636e\u5e93\u8bf4\u660e\nxxl_job_lock\uff1a\u4efb\u52a1\u8c03\u5ea6\u9501\u8868\uff1b\nxxl_job_group\uff1a\u6267\u884c\u5668\u4fe1\u606f\u8868\uff0c\u7ef4\u62a4\u4efb\u52a1\u6267\u884c\u5668\u4fe1\u606f\uff1b\nxxl_job_info\uff1a\u8c03\u5ea6\u6269\u5c55\u4fe1\u606f\u8868\uff1a\u7528\u4e8e\u4fdd\u5b58 XXL-JOB \u8c03\u5ea6\u4efb\u52a1\u7684\u6269\u5c55\u4fe1\u606f\uff0c\u5982\u4efb\u52a1\u5206\u7ec4\u3001\u4efb\u52a1\u540d\u3001\u673a\u5668\u5730\u5740\u3001\u6267\u884c\u5668\u3001\u6267\u884c\u5165\u53c2\u548c\u62a5\u8b66\u90ae\u4ef6\u7b49\u7b49\uff1b\nxxl_job_log\uff1a\u8c03\u5ea6\u65e5\u5fd7\u8868\uff1a\u7528\u4e8e\u4fdd\u5b58 XXL-JOB \u4efb\u52a1\u8c03\u5ea6\u7684\u5386\u53f2\u4fe1\u606f\uff0c\u5982\u8c03\u5ea6\u7ed3\u679c\u3001\u6267\u884c\u7ed3\u679c\u3001\u8c03\u5ea6\u5165\u53c2\u3001\u8c03\u5ea6\u673a\u5668\u548c\u6267\u884c\u5668\u7b49\u7b49\uff1b\nxxl_job_log_report\uff1a\u8c03\u5ea6\u65e5\u5fd7\u62a5\u8868\uff1a\u7528\u6237\u5b58\u50a8 XXL-JOB \u4efb\u52a1\u8c03\u5ea6\u65e5\u5fd7\u7684\u62a5\u8868\uff0c\u8c03\u5ea6\u4e2d\u5fc3\u62a5\u8868\u529f\u80fd\u9875\u9762\u4f1a\u7528\u5230\uff1b\nxxl_job_logglue\uff1a\u4efb\u52a1 GLUE \u65e5\u5fd7\uff1a\u7528\u4e8e\u4fdd\u5b58 GLUE \u66f4\u65b0\u5386\u53f2\uff0c\u7528\u4e8e\u652f\u6301 GLUE \u7684\u7248\u672c\u56de\u6eaf\u529f\u80fd\uff1b\nxxl_job_registry\uff1a\u6267\u884c\u5668\u6ce8\u518c\u8868\uff0c\u7ef4\u62a4\u5728\u7ebf\u7684\u6267\u884c\u5668\u548c\u8c03\u5ea6\u4e2d\u5fc3\u673a\u5668\u5730\u5740\u4fe1\u606f\uff1b\nxxl_job_user\uff1a\u7cfb\u7edf\u7528\u6237\u8868\uff1b\n\n\u4e0b\u8f7d application.properties \u6587\u4ef6\uff0c\u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e\nwget https://raw.githubusercontent.com/xuxueli/xxl-job/2.3.1/xxl-job-admin/src/main/resources/application.properties\n\n\u8fd0\u884c\u5bb9\u5668\ndocker run -d --name=xxl-job-admin \\\n--restart=always \\\n-p 18080:8080 \\\n-v /root/docker/xxl-job/application.properties:/application.properties \\\n-e PARAMS='--spring.config.location=/application.properties' xuxueli/xxl-job-admin:2.3.1\n\n\u8fd0\u884c\u5bb9\u5668\uff08\u6307\u5b9a\u6570\u636e\u5e93\u4fe1\u606f\uff09\ndocker run --name xxl-job-admin \\\n-e PARAMS=\"--spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xxl_job?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai\" \\\n--spring.datasource.username=root \\ \n--spring.datasource.password=root \\\n-p 18080:8080 \\\n-v /root/docker/xxl-job/data/applogs:/data/applogs \\\n-d xuxueli/xxl-job-admin:2.3.1\n\n\u67e5\u770b\u65e5\u5fd7\ndocker logs -f xxl-job-admin\n\n\u8bbf\u95ee\u5730\u5740 admin/123456\nhttp://127.0.0.1:18080/xxl-job-admin\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-zentao"},"Docker \u5b89\u88c5 zentao"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u5b98\u7f51\u5730\u5740\nhttps://www.zentao.net/\n\n\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name zentao \\\n-p 8888:80 \\\n-v /root/docker/zentao/zentaopms:/www/zentaopms \\\n-v /root/docker/zentao/mysql:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=123456 easysoft/zentao:latest\n\n\u67e5\u770b\u65e5\u5fd7\ndocker logs -f zentao\n\n\u5220\u9664\u5bb9\u5668\ndocker rm -f zentao\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8888\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-tomcat"},"Docker \u5b89\u88c5 Tomcat"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name tomcat \\\n-p 8888:8080 \\\ntomcat:latest\n\n\u8fdb\u5165\u5bb9\u5668\ndocker exec -it tomcat /bin/bash\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8888/\n\n\u8e29\u5751\n\u8bbf\u95ee\u95ee\u4e0d\u5230\u4e3b\u9875\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u5b58\u653e\u4e3b\u9875\u7684\u6587\u4ef6\u5939 webapps \u662f\u7a7a\u7684, docker \u7684 tomcat \u5c06\u8fd9\u4e9b\u6587\u4ef6\u653e\u5728\u4e86 webapps.dist \u6587\u4ef6\u5939\u4e2d,\u53ea\u9700\u8981\u5c06\u7a7a\u7684 webapps \u6587\u4ef6\u5939\u5220\u9664,\u7136\u540e\u5c06 webapps.dist \u91cd\u547d\u540d\u4e3a webapps \u5c31\u53ef\u4ee5\u4e86\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-sonar"},"Docker \u5b89\u88c5 Sonar"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/sonarqube"},"sonarqube")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run -d \\\n--name sonarqube \\ \n-p 9100:9000 \\\nsonarqube:8.9.2-community\n\n\u8bbf\u95ee\u5730\u5740 \u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\uff1aadmin/admin\uff0c\u66f4\u65b0\u8d26\u53f7\u5bc6\u7801\u4e3a admin/root\nhttp://127.0.0.1:9100/\n")),(0,t.kt)("h3",{id:"docker-\u5b89\u88c5-jira"},"Docker \u5b89\u88c5 JIRA"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u8fd0\u884c\u5bb9\u5668\ndocker run  --name=jira -d \\\n-v jiraVolume:/var/atlassian/application-data/jira \\\n-p 8084:8080 \\\natlassian/jira-software\n\n\u8bbf\u95ee\u5730\u5740\nhttp://127.0.0.1:8084\n")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://my.atlassian.com/product"},"\u83b7\u53d6\u8bb8\u53ef\u8bc1"),"  "),(0,t.kt)("h2",{id:"\u8e29\u5751"},"\u8e29\u5751"),(0,t.kt)("p",null,"\u5b89\u88c5\u81ea\u5e26 Nginx \u7684\u5bb9\u5668\uff0c\u8bbf\u95ee\u9875\u9762\u603b\u662f404\uff0c\u5c1d\u8bd5\u505a\u5220\u9664\u6240\u6709\u955c\u50cf\u548c\u6240\u6709\u5bb9\u5668\u8fd8\u662f\u4e0d\u6210\u529f\uff0c\u6700\u540e\u91cd\u88c5\u7cfb\u7edf\u518d\u91cd\u65b0\u8fd0\u884c\u5bb9\u5668\u624d\u6210\u529f\u3002"))}p.isMDXComponent=!0},3921:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/redisinsight-d71372d84c5f5fbe4852e26e711266de.png"}}]);