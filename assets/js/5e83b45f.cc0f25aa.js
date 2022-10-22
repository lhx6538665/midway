"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6416],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,p=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||p;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},769:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const p={},o="HTTP \u4ee3\u7406",i={unversionedId:"extensions/http-proxy",id:"extensions/http-proxy",title:"HTTP \u4ee3\u7406",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684 HTTP \u8bf7\u6c42\u4ee3\u7406\u7ec4\u4ef6\uff0c\u652f\u6301 GET\u3001POST \u7b49\u591a\u79cd\u8bf7\u6c42\u65b9\u6cd5\u3002",source:"@site/docs/extensions/http-proxy.md",sourceDirName:"extensions",slug:"/extensions/http-proxy",permalink:"/docs/extensions/http-proxy",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/http-proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u8de8\u57df",permalink:"/docs/extensions/cross_domain"},next:{title:"TypeORM",permalink:"/docs/extensions/orm"}},l={},s=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u542f\u7528\u7ec4\u4ef6",id:"\u542f\u7528\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u793a\u4f8b\uff1a\u4f7f\u7528 host \u914d\u7f6e\u4ee3\u7406",id:"\u793a\u4f8b\u4f7f\u7528-host-\u914d\u7f6e\u4ee3\u7406",level:2},{value:"\u793a\u4f8b\uff1a\u4f7f\u7528 target \u914d\u7f6e\u4ee3\u7406",id:"\u793a\u4f8b\u4f7f\u7528-target-\u914d\u7f6e\u4ee3\u7406",level:2}],m={toc:s};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"http-\u4ee3\u7406"},"HTTP \u4ee3\u7406"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684 HTTP \u8bf7\u6c42\u4ee3\u7406\u7ec4\u4ef6\uff0c\u652f\u6301 GET\u3001POST \u7b49\u591a\u79cd\u8bf7\u6c42\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/http-proxy@3 --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/http-proxy": "^3.0.0"\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"\u542f\u7528\u7ec4\u4ef6"},"\u542f\u7528\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u5f15\u5165\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nimport * as proxy from '@midwayjs/http-proxy';\n\n@Configuration({\n  imports: [\n    // ...other components\n    proxy,\n  ],\n})\nexport class MainConfiguration {}\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u4ee3\u7406\u914d\u7f6e\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u4ee3\u7406\u914d\u7f6e\u7c7b\u578b\nexport interface HttpProxyConfig {\n  // \u5339\u914d\u8981\u4ee3\u7406\u7684 URL \u6b63\u5219\u8868\u8fbe\u5f0f\n  match: RegExp;\n  // \u66ff\u6362\u5339\u914d\u5230\u7684\u94fe\u63a5\u7684 host\uff0c\u5c06\u8bf7\u6c42\u4ee3\u7406\u5230\u6b64\u5730\u5740\n  host?: string;\n  // \u901a\u8fc7\u6b63\u5219\u7684\u8868\u8fbe\u5f0f\u6355\u83b7\u7ec4\u5904\u7406\u4ee3\u7406\u5730\u5740\n  target?: string;\n  // \u8f6c\u53d1\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a0\u4e0d\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\n  proxyTimeout?: number;\n  // \u5ffd\u7565\u4ee3\u7406\u8bf7\u6c42\u8f6c\u53d1\u7684 header \u4e2d\u7684\u5b57\u6bb5\n  ignoreHeaders?: {\n    [key: string]: boolean;\n  };\n}\n")),(0,r.kt)("p",null,"\u4ee3\u7406\u652f\u6301\u5355\u4e2a\u4ee3\u7406\u548c\u591a\u4e2a\u4ee3\u7406\u3002"),(0,r.kt)("p",null,"\u5355\u4e2a\u4ee3\u7406\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\nexport default {\n  httpProxy: {\n    match: /\\/tfs\\//,\n    host: 'https://gw.alicdn.com',\n  },\n};\n")),(0,r.kt)("p",null,"\u591a\u4e2a\u4ee3\u7406\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\n// \u4ee3\u7406\u914d\u7f6e\u7c7b\u578b\nexport default {\n  default: {\n    // \u4e00\u4e9b\u6bcf\u4e2a\u7b56\u7565\u590d\u7528\u7684\u503c\uff0c\u4f1a\u548c\u5e95\u4e0b\u7684\u7b56\u7565\u8fdb\u884c\u5408\u5e76\n  },\n  strategy: {\n    gw: {\n      // https://gw.alicdn.com/tfs/TB1.1EzoBBh1e4jSZFhXXcC9VXa-48-48.png\n      match: /\\/tfs\\//,\n      host: 'https://gw.alicdn.com',\n    },\n    g: {\n      // https://g.alicdn.com/mtb/lib-mtop/2.6.1/mtop.js\n      match: /\\/bdimg\\/(.*)$/,\n      target: 'https://sm.bdimg.com/$1',\n    },\n    httpBin: {\n      // https://httpbin.org/\n      match: /\\/httpbin\\/(.*)$/,\n      target: 'https://httpbin.org/$1',\n    },\n  },\n};\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u4f7f\u7528-host-\u914d\u7f6e\u4ee3\u7406"},"\u793a\u4f8b\uff1a\u4f7f\u7528 host \u914d\u7f6e\u4ee3\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  httpProxy: {\n    match: /\\/tfs\\//,\n    host: 'https://gw.alicdn.com',\n  },\n};\n")),(0,r.kt)("p",null,"\u5f53\u8bf7\u6c42\u60a8\u7684\u7ad9\u70b9\u8def\u5f84\u4e3a\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com/tfs/test.png")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u5b57\u6bb5\u914d\u7f6e\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6210\u529f\u5339\u914d\uff0c\u90a3\u4e48\u5c31\u5c06\u539f\u59cb\u8bf7\u6c42\u8def\u5f84\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," \u90e8\u5206 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com")," \u66ff\u6362\u4e3a\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://gw.alicdn.com"),"\uff0c\u4ece\u800c\u53d1\u8d77\u4ee3\u7406\u8bf7\u6c42\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://gw.alicdn.com/tfs/test.png"),"\uff0c\u5e76\u628a\u54cd\u5e94\u7ed3\u679c\u8fd4\u56de\u7ed9\u8bf7\u6c42\u60a8\u7ad9\u70b9\u7684\u7528\u6237\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b\u4f7f\u7528-target-\u914d\u7f6e\u4ee3\u7406"},"\u793a\u4f8b\uff1a\u4f7f\u7528 target \u914d\u7f6e\u4ee3\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  httpProxy: {\n    match: /\\/httpbin\\/(.*)$/,\n    target: 'https://httpbin.org/$1',\n  },\n};\n")),(0,r.kt)("p",null,"\u5f53\u8bf7\u6c42\u60a8\u7684\u7ad9\u70b9\u8def\u5f84\u4e3a\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com/httpbin/get?name=midway")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u5b57\u6bb5\u914d\u7f6e\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6210\u529f\u5339\u914d\uff0c\u540c\u65f6\u6b63\u5219\u7684\u6355\u83b7\u7ec4\u4e2d\u6709\u7ed3\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"['get?name=midway']")," \uff0c\u90a3\u4e48\u5c31\u5c06\u539f\u59cb\u8bf7\u6c42\u8def\u5f84\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"$1")," \u90e8\u5206\u66ff\u6362\u4e3a\u6355\u83b7\u7ec4\u4e2d\u7684\u7b2c 1 \u4e2a\u6570\u636e\uff08index: 0\uff09\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"get?name=midway"),"\uff0c\u4ece\u800c\u53d1\u8d77\u4ee3\u7406\u8bf7\u6c42\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://httpbin.org/get?name=midway"),"\uff0c\u5e76\u628a\u54cd\u5e94\u7ed3\u679c\u8fd4\u56de\u7ed9\u8bf7\u6c42\u60a8\u7ad9\u70b9\u7684\u7528\u6237\u3002"))}c.isMDXComponent=!0}}]);