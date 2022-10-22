"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4947],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||s;return t?r.createElement(y,o(o({ref:n},d),{},{components:t})):r.createElement(y,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const s={title:"Redis"},o=void 0,a={unversionedId:"extensions/redis",id:"version-2.0.0/extensions/redis",title:"Redis",description:"\u8fd9\u91cc\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5728 Midway \u4e2d\u4f7f\u7528 Redis\u3002",source:"@site/versioned_docs/version-2.0.0/extensions/redis.md",sourceDirName:"extensions",slug:"/extensions/redis",permalink:"/en/docs/2.0.0/extensions/redis",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/extensions/redis.md",tags:[],version:"2.0.0",frontMatter:{title:"Redis"},sidebar:"component",previous:{title:"MongoDB",permalink:"/en/docs/2.0.0/extensions/mongo"},next:{title:"GraphQL",permalink:"/en/docs/2.0.0/extensions/graphql"}},p={},l=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e Redis",id:"\u914d\u7f6e-redis",level:2},{value:"\u4f7f\u7528 Redis \u670d\u52a1",id:"\u4f7f\u7528-redis-\u670d\u52a1",level:2}],d={toc:l};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5728 Midway \u4e2d\u4f7f\u7528 Redis\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/redis")," \u662f\u4e3b\u8981\u7684\u529f\u80fd\u5305\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"@types/ioredis")," \u662f \u5b9a\u4e49\u5305\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/redis@2 --save\n$ npm i @types/ioredis --save-dev           // \u5b89\u88c5\u5230 dev \u4f9d\u8d56\n")),(0,i.kt)("p",null,"\u5982\u679c\u53d1\u73b0 RedisService \u6ca1\u6709\u65b9\u6cd5\u5b9a\u4e49\uff0c\u8bf7\u52a1\u5fc5\u68c0\u67e5\u6b64\u9879\u3002"),(0,i.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),"\xa0 \u4e2d\u5bfc\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as redis from '@midwayjs/redis';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    redis, // \u5bfc\u5165 redis \u7ec4\u4ef6\n  ],\n  importConfigs: [join(__dirname, 'config')],\n})\nexport class ContainerLifeCycle {}\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e-redis"},"\u914d\u7f6e Redis"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5355\u5ba2\u6237\u7aef\u914d\u7f6e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config.default\n\n// Single Redis\nexport const redis = {\n  client: {\n    port: 6379, // Redis port\n    host: '127.0.0.1', // Redis host\n    password: 'auth',\n    db: 0,\n  },\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sentinel \u914d\u7f6e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const redis = {\n  client: {\n    sentinels: [\n      {\n        // Sentinel instances\n        port: 26379, // Sentinel port\n        host: '127.0.0.1', // Sentinel host\n      },\n    ],\n    name: 'mymaster', // Master name\n    password: 'auth',\n    db: 0,\n  },\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cluster \u6a21\u5f0f\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e\u591a\u4e2a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Cluster Redis\nexport const redis = {\n  client: {\n    cluster: true,\n    nodes: [{\n      host: 'host',\n      port: 'port',\n      password: 'password',\n      db: 'db',\n    },{\n      host: 'host',\n      port: 'port',\n      password: 'password',\n      db: 'db',\n    },\n  }\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e\u591a\u4e2a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Multi Redis\nexport const redis = {\n  clients: {\n    instance1: {\n      host: 'host',\n      port: 'port',\n      password: 'password',\n      db: 'db',\n    },\n    instance2: {\n      host: 'host',\n      port: 'port',\n      password: 'password',\n      db: 'db',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u53ef\u4ee5\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luin/ioredis/blob/master/API.md#new_Redis_new"},"ioredis \u6587\u6863"),"\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528-redis-\u670d\u52a1"},"\u4f7f\u7528 Redis \u670d\u52a1"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4efb\u610f\u7684\u4ee3\u7801\u4e2d\u6ce8\u5165\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/decorator';\nimport { RedisService } from '@midwayjs/redis';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  redisService: RedisService;\n\n  async invoke() {\n    await this.redisService.set('foo', 'bar');\n    const result = await this.redisService.get('foo');\n\n    // result => bar\n  }\n}\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"RedisServiceFactory")," \u83b7\u53d6\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedisServiceFactory } from '@midwayjs/redis';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  redisServiceFactory: RedisServiceFactory;\n\n  async save() {\n    const redis1 = await this.redisServiceFactory.get('instance1');\n    const redis2 = await this.redisServiceFactory.get('instance3');\n\n    //...\n  }\n}\n")))}c.isMDXComponent=!0}}]);