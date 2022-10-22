"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={title:"\u6846\u67b6\u589e\u5f3a"},o=void 0,i={unversionedId:"framework",id:"version-1.0.0/framework",title:"\u6846\u67b6\u589e\u5f3a",description:"\u6846\u67b6\u589e\u5f3a\u6ce8\u5165",source:"@site/versioned_docs/version-1.0.0/framework.md",sourceDirName:".",slug:"/framework",permalink:"/docs/1.0.0/framework",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/framework.md",tags:[],version:"1.0.0",frontMatter:{title:"\u6846\u67b6\u589e\u5f3a"},sidebar:"common",previous:{title:"\u9ad8\u7ea7\u88c5\u9970\u5668 API",permalink:"/docs/1.0.0/decorator"},next:{title:"\u4f9d\u8d56\u6ce8\u5165\u624b\u518c",permalink:"/docs/1.0.0/injection"}},l={},c=[{value:"\u6846\u67b6\u589e\u5f3a\u6ce8\u5165",id:"\u6846\u67b6\u589e\u5f3a\u6ce8\u5165",level:2},{value:"\u6846\u67b6\u9ed8\u8ba4\u6ce8\u5165",id:"\u6846\u67b6\u9ed8\u8ba4\u6ce8\u5165",level:3},{value:"\u6ce8\u5165\u63d2\u4ef6",id:"\u6ce8\u5165\u63d2\u4ef6",level:3},{value:"\u6ce8\u5165\u914d\u7f6e",id:"\u6ce8\u5165\u914d\u7f6e",level:3},{value:"\u6ce8\u518c\u5b9a\u65f6\u4efb\u52a1",id:"\u6ce8\u518c\u5b9a\u65f6\u4efb\u52a1",level:3},{value:"\u6ce8\u5165\u65e5\u5fd7\u5bf9\u8c61",id:"\u6ce8\u5165\u65e5\u5fd7\u5bf9\u8c61",level:3},{value:"\u8bf7\u6c42\u4f5c\u7528\u57df\u4e2d\u7684\u65e5\u5fd7",id:"\u8bf7\u6c42\u4f5c\u7528\u57df\u4e2d\u7684\u65e5\u5fd7",level:3},{value:"\u6846\u67b6\u6269\u5c55\u65b9\u6cd5",id:"\u6846\u67b6\u6269\u5c55\u65b9\u6cd5",level:2},{value:"Application \u6269\u5c55",id:"application-\u6269\u5c55",level:3},{value:"Context \u6269\u5c55",id:"context-\u6269\u5c55",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6846\u67b6\u589e\u5f3a\u6ce8\u5165"},"\u6846\u67b6\u589e\u5f3a\u6ce8\u5165"),(0,a.kt)("p",null,"midway \u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"http://web.npm.alibaba-inc.com/package/injection"},"injection")," \u8fd9\u4e2a\u5305\u6765\u505a\u4f9d\u8d56\u6ce8\u5165\uff0c\u867d\u7136 ",(0,a.kt)("inlineCode",{parentName:"p"},"@inject")," \u88c5\u9970\u5668\u80fd\u6ee1\u8db3\u5927\u591a\u6570\u4e1a\u52a1\u7684\u9700\u6c42\uff0c\u4f46\u662f\u5bf9\u4e8e\u6846\u67b6\u6765\u8bf4\uff0c\u8fd8\u6709\u9700\u8981\u6269\u5c55\u548c\u4f7f\u7528\u7684\u5730\u65b9\uff0c\u6bd4\u5982\u63d2\u4ef6\uff0c\u914d\u7f6e\u7b49\u7b49\u3002"),(0,a.kt)("h3",{id:"\u6846\u67b6\u9ed8\u8ba4\u6ce8\u5165"},"\u6846\u67b6\u9ed8\u8ba4\u6ce8\u5165"),(0,a.kt)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6846\u67b6\u4f1a\u6ce8\u5165\u4e00\u4e9b\u5c5e\u6027\uff0c\u65b9\u4fbf\u5f00\u53d1\uff0c\u8fd9\u4e9b\u5c5e\u6027\u90fd\u80fd\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@inject")," \u88c5\u9970\u5668\u6765\u6ce8\u5165\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@inject()\nappDir; // \u5f53\u524d\u9879\u76ee\u7684\u6839\u76ee\u5f55\n\n@inject()\nbaseDir;  // \u5f53\u524d\u9879\u76ee\u57fa\u7840\u76ee\u5f55 src \u6216\u8005 dist\uff0c\u7edd\u5bf9\u8def\u5f84\n\n@inject()\nctx; // \u8bf7\u6c42\u4f5c\u7528\u57df\uff0ckoa ctx\n\n@inject()\nlogger; // \u8bf7\u6c42\u4f5c\u7528\u57df\uff0cContextLogger\n")),(0,a.kt)("h3",{id:"\u6ce8\u5165\u63d2\u4ef6"},"\u6ce8\u5165\u63d2\u4ef6"),(0,a.kt)("p",null,"midway \u9664\u4e86\u652f\u6301 eggjs \u539f\u672c\u7684 app.xx \u7684\u63d2\u4ef6\u7528\u6cd5\uff0c\u4e3a\u4e86\u548c\u6846\u67b6\u89e3\u8026\uff0c\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@plugin")," \u88c5\u9970\u5668\u6765\u6ce8\u5165\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"egg-jwt")," \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.jwt")," \u5bf9\u8c61\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"@plugin")," \u88c5\u9970\u5668\uff0c\u5219\u662f\u7c7b\u4f3c\u4e8e\u76f4\u63a5\u4ece app \u5bf9\u8c61\u4e0a\u62ff\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"@plugin('jwt')"),"\uff0c\u5176\u5b9e\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"app['jwt']"),"\uff0c\u8fd9\u6837\u7684\u5199\u6cd5\uff0c\u5c31\u53ef\u4ee5\u548c app \u5bf9\u8c61\u8fdb\u884c\u89e3\u8026\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { provide, plugin } from 'midway';\n\n@provide()\nexport class BaseService {\n  @plugin()\n  jwt;\n}\n")),(0,a.kt)("h3",{id:"\u6ce8\u5165\u914d\u7f6e"},"\u6ce8\u5165\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 midway \u4e2d\u4e0d\u540c\u73af\u5883\u7684 config \u90fd\u4f1a\u6302\u8f7d\u5230 app.config \u4e2d\uff0c\u4f46\u662f\u4e0d\u662f\u6240\u6709\u7684\u4e1a\u52a1\u903b\u8f91\u90fd\u4f1a\u4f9d\u8d56 app \u5bf9\u8c61\uff0c\u6240\u4ee5\u6211\u4eec\u6784\u9020\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@config")," \u88c5\u9970\u5668\u6765\u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u5047\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.default.ts")," \u4e2d\u6709\u4e00\u4e9b\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const hello = 1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { provide, config } from 'midway';\n\n@provide()\nexport class BaseService {\n  @config('hello')\n  config; // 1\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u628a config \u4e2d\u7684\u503c\u76f4\u63a5\u6ce8\u5165\u5230\u4e1a\u52a1\u903b\u8f91\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u6ce8\u518c\u5b9a\u65f6\u4efb\u52a1"},"\u6ce8\u518c\u5b9a\u65f6\u4efb\u52a1"),(0,a.kt)("p",null,"midway \u7684\u5b9a\u65f6\u4efb\u52a1\u662f\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/schedule.html"},"egg \u5b9a\u65f6\u4efb\u52a1"),"\u63d0\u4f9b\u4e86\u66f4\u591a typescript \u4ee5\u53ca\u88c5\u9970\u5668\u65b9\u9762\u7684\u652f\u6301\u3002\u5b9a\u65f6\u4efb\u52a1\u53ef\u4ee5\u5b58\u653e\u5728\u4efb\u610f\u76ee\u5f55\uff0c\u4f8b\u5982 src/schedule \u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u914d\u7f6e\u5b9a\u65f6\u4efb\u52a1\u7684\u5c5e\u6027\u548c\u8981\u6267\u884c\u7684\u65b9\u6cd5\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/schedule/hello.ts\nimport { provide, schedule, CommonSchedule } from 'midway';\n\n@provide()\n@schedule({\n  interval: 2333, // 2.333s \u95f4\u9694\n  type: 'worker', // \u6307\u5b9a\u67d0\u4e00\u4e2a worker \u6267\u884c\n})\nexport class HelloCron implements CommonSchedule {\n  // \u5b9a\u65f6\u6267\u884c\u7684\u5177\u4f53\u4efb\u52a1\n  async exec(ctx) {\n    ctx.logger.info(process.pid, 'hello');\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"CommonSchedule")," \u63a5\u53e3\u6765\u89c4\u8303\u4f60\u7684\u8ba1\u5212\u4efb\u52a1\u7c7b\u3002")),(0,a.kt)("h3",{id:"\u6ce8\u5165\u65e5\u5fd7\u5bf9\u8c61"},"\u6ce8\u5165\u65e5\u5fd7\u5bf9\u8c61"),(0,a.kt)("p",null,"\u5728\u539f\u6709\u903b\u8f91\u4e2d\uff0c\u65e5\u5fd7\u5bf9\u8c61\u4e5f\u90fd\u6302\u8f7d\u5728 app.loggers \u4e2d\uff0c\u901a\u8fc7\u5728 config \u4e2d\u914d\u7f6e\u7684 key \u6765\u751f\u6210\u4e0d\u540c\u7684\u65e5\u5fd7\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u6bd4\u5982\u63d2\u4ef6\u7684\u65e5\u5fd7\uff0c\u94fe\u8def\u7684\u65e5\u5fd7\u7b49\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u81ea\u5b9a\u4e49\u4e00\u4e2a\u65e5\u5fd7 ",(0,a.kt)("inlineCode",{parentName:"p"},"myLogger"),"\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u65e5\u5fd7\u7684 key \u5219\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"myLogger")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = (appInfo) => {\n  return {\n    customLogger: {\n      myLogger: {\n        file: path.join(appInfo.root, 'logs/xx.log'),\n      },\n    },\n  };\n};\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@logger")," \u6765\u83b7\u53d6\u65e5\u5fd7\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { provide, logger } from 'midway';\n\n@provide()\nexport class BaseService {\n  @logger('myLogger')\n  logger;\n}\n")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u4f5c\u7528\u57df\u4e2d\u7684\u65e5\u5fd7"},"\u8bf7\u6c42\u4f5c\u7528\u57df\u4e2d\u7684\u65e5\u5fd7"),(0,a.kt)("p",null,"midway \u5728\u65b0\u7248\u672c\u4e2d\u9ed8\u8ba4\u5bf9\u6240\u6709\u5bf9\u8c61\u5f00\u542f\u4e86\u8bf7\u6c42\u4f5c\u7528\u57df\uff0c\u5904\u4e8e\u8be5\u4f5c\u7528\u57df\u4e0b\u7684\u5bf9\u8c61\uff0c\u90fd\u4f1a\u5305\u542b\u4e00\u4e2a\u9ed8\u8ba4\u7684\u65e5\u5fd7\u5bf9\u8c61\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5 logger \u5bf9\u8c61\u662f\u5728\u8bf7\u6c42\u94fe\u8def\u5f00\u59cb\u5c31\u57cb\u5165\u5230 IoC \u5bb9\u5668\u4e2d\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/inject"},"@inject ")," \u53ef\u4ee5\u83b7\u53d6\u8be5\u5bf9\u8c61\uff0c key \u5c31\u4e3a logger\uff0c\u5982\u679c\u548c\u5c5e\u6027\u540c\u540d\u5219\u53ef\u4ee5\u4e0d\u586b\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide()\nexport class BaseService {\n  @inject()\n  logger;\n\n  // \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165 key // @inject('logger')\n  // logger;\n}\n")),(0,a.kt)("h2",{id:"\u6846\u67b6\u6269\u5c55\u65b9\u6cd5"},"\u6846\u67b6\u6269\u5c55\u65b9\u6cd5"),(0,a.kt)("p",null,"\u629b\u5f00 eggjs \u5bf9 koa \u7684 application/context/request/response \u7684\u6269\u5c55\u70b9\uff0cmidway \u5728 IoC \u65b9\u9762\u4e5f\u505a\u4e86\u4e00\u4e9b\u6269\u5c55\u3002"),(0,a.kt)("h3",{id:"application-\u6269\u5c55"},"Application \u6269\u5c55"),(0,a.kt)("p",null,"\u5177\u4f53\u63a5\u53e3\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://midwayjs.org/midway/api-reference/classes/midwayapplication.html"},"API \u6587\u6863")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"baseDir")),(0,a.kt)("p",null,"\u7531\u4e8e typescript \u7684\u5173\u7cfb\uff0cmidway \u7684 app.baseDir \u5728\u5f00\u53d1\u65f6\u671f\u6307\u5411\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"/src")," \u76ee\u5f55\uff0c\u800c\u5728\u6784\u5efa\u4e4b\u540e\u90e8\u7f72\u9636\u6bb5\u6307\u5411\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"/dist")," \u76ee\u5f55\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"appDir")),(0,a.kt)("p",null,"\u9488\u5bf9 baseDir \u4fee\u6539\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.appDir")," \u5c5e\u6027\uff0c\u7528\u4e8e\u6307\u5411\u5e94\u7528\u6839\u76ee\u5f55\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"applicationContext")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app.applicationContext")," \u7528\u4e8e\u5168\u5c40\u4f5c\u7528\u57df\u7684 IoC \u5bb9\u5668\uff0c\u6240\u6709\u7684\u5355\u4f8b\u5bf9\u8c61\u90fd\u5b58\u653e\u4e8e\u8be5\u5c5e\u6027\uff0c\u53ef\u4ee5\u4ece\u4e2d\u83b7\u53d6\u5230\u5355\u4f8b\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await app.applicationContext.getAsync('xxx');\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"pluginContext")),(0,a.kt)("p",null,"\u63d2\u4ef6\u5bb9\u5668\uff0c\u7528\u4e8e\u5b58\u5728\u73b0\u6709\u7684\u6240\u6709\u6302\u8f7d\u5728 app \u4e0a\u7684\u63d2\u4ef6\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await app.pluginContext.getAsync('\u63d2\u4ef6\u540d');\n")),(0,a.kt)("h3",{id:"context-\u6269\u5c55"},"Context \u6269\u5c55"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestContext")),(0,a.kt)("p",null,"\u9488\u5bf9\u8bf7\u6c42\u4f5c\u7528\u57df\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u5728 context \u5bf9\u8c61\u4e0a\u6269\u5c55\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"requestContext")," \u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationContext")," \u76f8\u540c\uff0c\u4e5f\u662f IoC \u5bb9\u5668\uff0c\u7528\u4e8e\u5b58\u653e\u4e00\u6b21\u8bf7\u6c42\u94fe\u8def\u4e0a\u7684\u5bf9\u8c61\uff0c\u5f53\u8bf7\u6c42\u7ed3\u675f\u540e\uff0c\u8be5\u5bb9\u5668\u4f1a\u88ab\u6e05\u7a7a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await ctx.requestContext.getAsync('xxx');\n")))}m.isMDXComponent=!0}}]);