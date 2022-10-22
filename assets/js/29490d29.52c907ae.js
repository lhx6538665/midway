"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||p;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const p={title:"\u8bf7\u6c42\u3001\u54cd\u5e94\u3001\u5e94\u7528"},a=void 0,i={unversionedId:"req_res_app",id:"version-2.0.0/req_res_app",title:"\u8bf7\u6c42\u3001\u54cd\u5e94\u3001\u5e94\u7528",description:"Midway \u6846\u67b6\u4f1a\u6839\u636e\u4e0d\u540c\u7684\u573a\u666f\u6765\u542f\u52a8\u4e0d\u540c\u7684\u5e94\u7528\uff0c\u524d\u6587\u63d0\u5230\uff0c\u6211\u4eec\u9ed8\u8ba4\u9009\u7528 EggJS \u4f5c\u4e3a\u6211\u4eec\u7684 Web \u6846\u67b6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 Express \u6216\u8005 Koa\u3002",source:"@site/versioned_docs/version-2.0.0/req_res_app.md",sourceDirName:".",slug:"/req_res_app",permalink:"/docs/2.0.0/req_res_app",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/req_res_app.md",tags:[],version:"2.0.0",frontMatter:{title:"\u8bf7\u6c42\u3001\u54cd\u5e94\u3001\u5e94\u7528"},sidebar:"common",previous:{title:"\u670d\u52a1\u548c\u6ce8\u5165",permalink:"/docs/2.0.0/service"},next:{title:"Web \u4e2d\u95f4\u4ef6",permalink:"/docs/2.0.0/web_middleware"}},l={},s=[{value:"\u4e0a\u4e0b\u6587\u548c\u5e94\u7528\u5b9a\u4e49\u7ea6\u5b9a",id:"\u4e0a\u4e0b\u6587\u548c\u5e94\u7528\u5b9a\u4e49\u7ea6\u5b9a",level:2},{value:"\u8bf7\u6c42\u548c\u54cd\u5e94",id:"\u8bf7\u6c42\u548c\u54cd\u5e94",level:2},{value:"\u5e94\u7528\u5b9e\u4f8b",id:"\u5e94\u7528\u5b9e\u4f8b",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Midway \u6846\u67b6\u4f1a\u6839\u636e\u4e0d\u540c\u7684\u573a\u666f\u6765\u542f\u52a8\u4e0d\u540c\u7684\u5e94\u7528\uff0c\u524d\u6587\u63d0\u5230\uff0c\u6211\u4eec\u9ed8\u8ba4\u9009\u7528 EggJS \u4f5c\u4e3a\u6211\u4eec\u7684 Web \u6846\u67b6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 Express \u6216\u8005 Koa\u3002"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u4f7f\u7528\u7684 Web \u6846\u67b6\u4f1a\u63d0\u4f9b\u81ea\u5df1\u72ec\u7279\u7684\u80fd\u529b\uff0c\u8fd9\u4e9b\u72ec\u7279\u7684\u80fd\u529b\u90fd\u4f1a\u4f53\u73b0\u5728\u5404\u81ea\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u548c\u54cd\u5e94"),"\uff08Context\uff09\u548c ",(0,o.kt)("strong",{parentName:"p"},"\u5e94\u7528"),"\uff08Application\uff09\u4e4b\u4e0a\u3002"),(0,o.kt)("h2",{id:"\u4e0a\u4e0b\u6587\u548c\u5e94\u7528\u5b9a\u4e49\u7ea6\u5b9a"},"\u4e0a\u4e0b\u6587\u548c\u5e94\u7528\u5b9a\u4e49\u7ea6\u5b9a"),(0,o.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u4f7f\u7528\uff0c\u6240\u6709\u7684\u4e0a\u5c42\u6846\u67b6\u5bfc\u51fa ",(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u548c\u54cd\u5e94"),"\uff08Context\uff09\u548c ",(0,o.kt)("strong",{parentName:"p"},"\u5e94\u7528"),"\uff08Application\uff09\u5b9a\u4e49\uff0c\u6211\u4eec\u90fd\u4fdd\u6301\u4e00\u81f4\u3002\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\xa0 \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"\xa0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context } from 'egg';\nimport { Application, Context } from '@midwayjs/koa';\nimport { Application, Context } from '@midwayjs/express';\n")),(0,o.kt)("p",null,"\u4e14\u975e Web \u6846\u67b6\uff0c\u6211\u4eec\u4e5f\u4fdd\u6301\u4e86\u4e00\u81f4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context } from '@midwayjs/socketio';\nimport { Application, Context } from '@midwayjs/grpc';\nimport { Application, Context } from '@midwayjs/rabbitmq';\n")),(0,o.kt)("h2",{id:"\u8bf7\u6c42\u548c\u54cd\u5e94"},"\u8bf7\u6c42\u548c\u54cd\u5e94"),(0,o.kt)("p",null,"\u6bcf\u4e2a Web \u6846\u67b6\u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61\u662f\u4e0d\u540c\u7684\uff0cEggJS \u548c Koa \u90fd\u662f\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),"\xa0 \u5bf9\u8c61\uff0c\u800c Express \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"req"),"\xa0\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"res"),"\xa0 \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u5728 Midway \u63d0\u4f9b\u7684\u88c5\u9970\u5668\u4e0d\u591f\uff0c\u6216\u8005\u9700\u8981\u590d\u6742\u4e1a\u52a1\u903b\u8f91\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c31\u9700\u8981\u539f\u751f\u6846\u67b6\u7684\u5bf9\u8c61\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u7684\u8bf7\u6c42\u4f5c\u7528\u57df "),"\u4e2d\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728 \u63a7\u5236\u5668\uff08Controller\uff09\u6216\u8005\u666e\u901a\u7684 \u670d\u52a1\uff08Service\uff09\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject"),"\xa0 \u6765\u6ce8\u5165\u5bf9\u5e94\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u5728\u4ee5 EggJS \u4e3a\u4e0a\u5c42 Web \u6846\u67b6\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u83b7\u53d6\u5230\u5bf9\u5e94\u7684 ctx \u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Context } from 'egg';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // this.ctx.query\n  }\n}\n")),(0,o.kt)("p",null,"\u800c Koa \u548c Express \u5219\u662f\u4e0d\u540c\u7684\u7528\u6cd5\u3002Koa \u793a\u4f8b\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // this.ctx.query\n  }\n}\n")),(0,o.kt)("p",null,"Express \u6bd4\u8f83\u7279\u6b8a\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject"),"\xa0 \u6ce8\u5165\u7684 ctx \u5bf9\u8c61\u7531 Midway \u505a\u4e86\u5c01\u88c5\uff0c\u4e3a Express \u7684 req \u5bf9\u8c61\u548c res \u5bf9\u8c61\u7684\u96c6\u5408\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/express';\nimport { Request, Response } from 'express';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context; // \u5305\u542b\u4e86 req \u548c res\n\n  @Inject()\n  req: Request;\n\n  @Inject()\n  res: Response;\n\n  @Get('/')\n  async home() {\n    // this.req.query\n  }\n}\n")),(0,o.kt)("h2",{id:"\u5e94\u7528\u5b9e\u4f8b"},"\u5e94\u7528\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u5728\u7f16\u5199\u4e1a\u52a1\u4ee3\u7801\u4e2d\uff0c\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u7528\u5230\u539f\u672c\u6846\u67b6\u7684\u80fd\u529b\uff0c\u800c\u8fd9\u4e9b\u80fd\u529b\u53ef\u80fd\u66b4\u9732\u5728\u5404\u81ea\u7684 app \u5bf9\u8c61\u4e4b\u4e0a\u3002Midway \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@App"),"\xa0 \u8fd9\u4e2a\u88c5\u9970\u5668\uff0c\u7528\u4e8e\u6ce8\u5165\u5f53\u524d\u8fd0\u884c\u65f6\u7684 app \u793a\u4f8b\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff0c\u5728 EggJS \u6846\u67b6\u4e2d\uff0capp \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),"\xa0 \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u53d6\u8fdc\u7a0b\u7684\u6570\u636e\uff0c\u6211\u4eec\u901a\u8fc7\u6ce8\u5165\u8fd9\u4e2a app \u5c31\u53ef\u4ee5\u62ff\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Application } from 'egg';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @App()\n  app: Application;\n\n  @Get('/')\n  async home() {\n    const data = await this.app.curl('/api/data.json');\n    return {\n      data,\n    };\n  }\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5728\u4efb\u610f\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provide"),"\xa0 \u88c5\u9970\u7684 Class \u4e0a\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@App"),"\xa0 \u88c5\u9970\u5668\u3002")),(0,o.kt)("p",null,"\u800c\u5728 Koa \u4e3a Web \u6846\u67b6\u7684\u5e94\u7528\u4e0a\uff0c\u5c06\u4f1a\u6ce8\u5165 Koa \u7684 app \u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/koa';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @App()\n  app: Application;\n\n  @Get('/')\n  async home() {\n    // this.app.use(xxx)\n  }\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Application"),"\xa0 \u5b9a\u4e49\u662f\u7531\u4e8e Koa \u4e0d\u652f\u6301\u76f4\u63a5\u6269\u5c55\uff0cMidway \u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\uff0c\u8fdb\u884c\u4e86\u5c01\u88c5\u3002")),(0,o.kt)("p",null,"\u5177\u4f53\u7684 app \u4e0a\u7684\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003\u8be6\u7ec6 app API \u6216\u8005\u4e0d\u540c\u7684 Web \u6846\u67b6\u6587\u6863\u3002"))}m.isMDXComponent=!0}}]);