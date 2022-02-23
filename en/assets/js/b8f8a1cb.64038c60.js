"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8210],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,k=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return t?r.createElement(k,p(p({ref:n},m),{},{components:t})):r.createElement(k,p({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9840:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),p=["components"],i={},o="Express",s={unversionedId:"extensions/express",id:"extensions/express",title:"Express",description:"\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Express \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002",source:"@site/docs/extensions/express.md",sourceDirName:"extensions",slug:"/extensions/express",permalink:"/en/docs/extensions/express",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/express.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"EggJS",permalink:"/en/docs/extensions/egg"},next:{title:"\u8bf7\u6c42\u5b89\u5168",permalink:"/en/docs/extensions/security"}},m=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[],level:2},{value:"\u5f00\u542f\u7ec4\u4ef6",id:"\u5f00\u542f\u7ec4\u4ef6",children:[],level:2},{value:"\u63a7\u5236\u5668\uff08Controller\uff09",id:"\u63a7\u5236\u5668controller",children:[],level:2},{value:"Web \u4e2d\u95f4\u4ef6",id:"web-\u4e2d\u95f4\u4ef6",children:[{value:"\u8def\u7531\u4e2d\u95f4\u4ef6",id:"\u8def\u7531\u4e2d\u95f4\u4ef6",children:[],level:3},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",children:[],level:3}],level:2},{value:"\u8fd4\u56de\u7edf\u4e00\u5904\u7406",id:"\u8fd4\u56de\u7edf\u4e00\u5904\u7406",children:[],level:2},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",children:[],level:2},{value:"Cookie",id:"cookie",children:[],level:2},{value:"Session",id:"session",children:[],level:2},{value:"BodyParser",id:"bodyparser",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",children:[],level:3},{value:"\u4fee\u6539\u7aef\u53e3",id:"\u4fee\u6539\u7aef\u53e3",children:[],level:3},{value:"\u5168\u5c40\u524d\u7f00",id:"\u5168\u5c40\u524d\u7f00",children:[],level:3},{value:"Https \u914d\u7f6e",id:"https-\u914d\u7f6e",children:[],level:3},{value:"\u4fee\u6539\u4e0a\u4e0b\u6587\u65e5\u5fd7",id:"\u4fee\u6539\u4e0a\u4e0b\u6587\u65e5\u5fd7",children:[],level:3}],level:2}],d={toc:m};function c(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"express"},"Express"),(0,l.kt)("p",null,"\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Express \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/express@3 --save\n$ npm i @types/body-parser @types/express @types/express-session --save-dev\n")),(0,l.kt)("p",null,"\u6216\u8005\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/express": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    "@types/body-parser": "^1.19.2",\n    "@types/express": "^4.17.13",\n    "@types/express-session": "^1.17.4",\n    // ...\n  }\n}\n')),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u811a\u624b\u67b6\u521b\u5efa\u793a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# npm v6\n$ npm init midway --type=express-v3 my_project\n\n# npm v7\n$ npm init midway -- --type=express-v3 my_project\n")),(0,l.kt)("p",null,"\u9488\u5bf9 Express\uff0cMidway \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u5305\u8fdb\u884c\u4e86\u9002\u914d\uff0c\u5728\u5176\u4e2d\u63d0\u4f9b\u4e86 Midway \u7279\u6709\u7684\u4f9d\u8d56\u6ce8\u5165\u3001\u5207\u9762\u7b49\u80fd\u529b\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6211\u4eec\u4f7f\u7528\u7684 Express \u7248\u672c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"v4")," \u3002"))),(0,l.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller                                              # controller\u63a5\u53e3\u7684\u5730\u65b9\n\u2502   \u251c\u2500\u2500 service                                                     # service\u903b\u8f91\u5904\u7406\u7684\u5730\u65b9\n|   \u2514\u2500\u2500 configuration.ts                                    # \u5165\u53e3\u53ca\u751f\u547d\u5468\u671f\u914d\u7f6e\u3001\u7ec4\u4ef6\u7ba1\u7406\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,l.kt)("h2",{id:"\u5f00\u542f\u7ec4\u4ef6"},"\u5f00\u542f\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport * as express from '@midwayjs/express';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [express],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerLifeCycle {\n  @App()\n  app: express.Application;\n\n  async onReady() {}\n}\n")),(0,l.kt)("h2",{id:"\u63a7\u5236\u5668controller"},"\u63a7\u5236\u5668\uff08Controller\uff09"),(0,l.kt)("p",null,"\u6574\u4e2a\u8bf7\u6c42\u63a7\u5236\u5668\u7684\u5199\u6cd5\u548c Midway \u9002\u914d\u5176\u4ed6\u6846\u67b6\u7684\u7c7b\u4f3c\u3002\u4e3a\u4e86\u548c\u5176\u4ed6\u573a\u666f\u7684\u6846\u67b6\u5199\u6cd5\u4e00\u81f4\uff0c\u5728\u8bf7\u6c42\u7684\u65f6\u5019\uff0cMidway \u5c06 Express \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"req")," \u6620\u5c04\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," \u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';\nimport { Context, NextFunction } from '@midwayjs/express';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home(@Query() id) {\n    console.log(id);                        // req.query.id === id\n    return 'hello world';               // \u7b80\u5355\u8fd4\u56de\uff0c\u7b49\u4ef7\u4e8e res.send('hello world');\n  }\n}\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u989d\u5916\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"req")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"res")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';\nimport { Context, Response, NextFunction } from '@midwayjs/express';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;   // \u5373\u4e3a req\n\n  @Inject()\n  req: Context;\n\n  @Inject()\n  res: Response;\n\n  @Get('/')\n  async home(@Query() id) {\n    // this.req.query.id === id\n  }\n}\n")),(0,l.kt)("h2",{id:"web-\u4e2d\u95f4\u4ef6"},"Web \u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"Express \u7684\u4e2d\u95f4\u4ef6\u5199\u6cd5\u6bd4\u8f83\u7279\u6b8a\uff0c\u5b83\u7684\u53c2\u6570\u4e0d\u540c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware } from '@midwayjs/decorator';\nimport { Context, Response, NextFunction } from '@midwayjs/express';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, Response, NextFunction> {\n\n  resolve() {\n    return async (\n      req: Context,\n      res: Response,\n      next: NextFunction\n    ) => {\n      console.log('Request...');\n      next();\n    };\n  }\n\n}\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u6211\u4eec\u5bfc\u51fa\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReportMiddleware")," \u7c7b\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5bf9\u63a5\u5f02\u6b65\u6d41\u7a0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," \u8fd4\u56de\u53ef\u4ee5\u662f async \u51fd\u6570\u3002"),(0,l.kt)("p",null,"Express \u4e2d\u7684 next \u65b9\u6cd5\uff0c\u7528\u4e8e\u8c03\u7528\u5230\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u6307\u7684\u6ce8\u610f\u7684\u662f\uff0cExpress \u4e2d\u95f4\u4ef6\u5e76\u975e\u6d0b\u8471\u6a21\u578b\uff0c\u662f\u5355\u5411\u8c03\u7528\u3002"),(0,l.kt)("h3",{id:"\u8def\u7531\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u628a\u4e0a\u9762\u7f16\u5199\u7684\u4e2d\u95f4\u4ef6\u5e94\u7528\u5230\u5355\u4e2a Controller \u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5c06\u4e2d\u95f4\u4ef6\u5e94\u7528\u5230\u5355\u4e2a\u8def\u7531\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Provide } from '@midwayjs/decorator';\n\n@Controller('/', { middleware: [ ReportMiddleware ]})           // controller \u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6\nexport class HomeController {\n\n  @Get('/', { middleware: [ ReportMiddleware ]})                // \u8def\u7531\u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6\n  async home() {\n    return 'hello world'\n  }\n}\n")),(0,l.kt)("h3",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 Midway \u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"app.generateMiddleware")," \u65b9\u6cd5\uff0c\u5728\u5165\u53e3\u5904\u52a0\u8f7d\u5168\u5c40\u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport * as express from '@midwayjs/express';\nimport { ReportMiddleware } from './middleware/report.middleware.ts'\n\n@Configuration({\n  imports: [express],\n})\nexport class ContainerLifeCycle implements ILifeCycle {\n\n  @App()\n  app: express.Application;\n\n  async onReady() {\n    this.app.useMiddleware(ReportMiddleware);\n  }\n}\n")),(0,l.kt)("p",null,"\u9664\u4e86\u52a0\u8f7d Class \u5f62\u5f0f\u7684\u4e2d\u95f4\u4ef6\u5916\uff0c\u4e5f\u652f\u6301\u52a0\u8f7d\u4f20\u7edf\u7684 Express \u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport * as express from '@midwayjs/express';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [express],\n})\nexport class ContainerLifeCycle implements ILifeCycle {\n\n  @App()\n  app: express.Application;\n\n  async onReady() {\n    this.app.useMiddleware((req, res, next) => {\n        // xxx\n    });\n  }\n}\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," \u5bf9\u8c61\uff0c\u6765\u8c03\u7528\u5230\u6240\u6709 Express \u4e0a\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u8fd4\u56de\u7edf\u4e00\u5904\u7406"},"\u8fd4\u56de\u7edf\u4e00\u5904\u7406"),(0,l.kt)("p",null,"\u7531\u4e8e Express \u4e2d\u95f4\u4ef6\u662f\u5355\u5411\u8c03\u7528\uff0c\u65e0\u6cd5\u5728\u8fd4\u56de\u65f6\u6267\u884c\uff0c\u4e3a\u6b64\u6211\u4eec\u989d\u5916\u8bbe\u8ba1\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"@Match")," \u88c5\u9970\u7684\u8fc7\u6ee4\u5668\uff0c\u7528\u4e8e\u5904\u7406\u8fd4\u56de\u503c\u7684\u884c\u4e3a\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u9488\u5bf9\u5168\u5c40\u8fd4\u56de\u7684\u8fc7\u6ee4\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/filter/globalMatch.filter.ts\nimport { Match } from '@midwayjs/decorator';\nimport { Context, Response } from '@midwayjs/express';\n\n@Match()\nexport class GlobalMatchFilter {\n  match(value, req, res) {\n    // ...\n    return {\n      status: 200,\n      data: {\n        value\n      },\n    };\n  }\n}\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5339\u914d\u7279\u5b9a\u7684\u8def\u7531\u505a\u8fd4\u56de\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/filter/api.filter.ts\nimport { Match } from '@midwayjs/decorator';\nimport { Context, Response } from '@midwayjs/express';\n\n@Match((ctx: Context, res: Response) => {\n  return ctx.path === '/api';\n})\nexport class APIMatchFilter {\n  match(value, req: Context, res: Response) {\n    // ...\n    return {\n      data: {\n        message:\n        data: value,\n      },\n    };\n  }\n}\n")),(0,l.kt)("p",null,"\u9700\u8981\u5e94\u7528\u5230 app \u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport * as express from '@midwayjs/express';\nimport { join } from 'path';\nimport { APIMatchFilter } from './filter/api.filter';\nimport { GlobalMatchFilter } from 'filter/globalMatch.filter';\n\n@Configuration({\n  imports: [express],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerLifeCycle {\n  @App()\n  app: express.Application;\n\n  async onReady() {\n    // ...\n    this.app.useFilter([APIMatchFilter, GlobalMatchFilter]);\n  }\n}\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u7c7b\u8fc7\u6ee4\u5668\u662f\u6309\u7167\u6dfb\u52a0\u7684\u987a\u5e8f\u6765\u5339\u914d\u6267\u884c\u3002"),(0,l.kt)("h2",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,l.kt)("p",null,"\u548c\u666e\u901a\u7684\u9879\u76ee\u76f8\u540c\uff0c\u4f7f\u7528\u9519\u8bef\u8fc7\u6ee4\u5668\uff0c\u4f46\u662f\u53c2\u6570\u7565\u6709\u4e0d\u540c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Catch } from '@midwayjs/decorator';\nimport { Context, Response } from '@midwayjs/express';\n\n@Catch()\nexport class GlobalError {\n  catch(err: Error, req: Context, res: Response) {\n    if (err) {\n      return {\n        status: err.status ?? 500,\n        message: err.message,\n      }\n    }\n  }\n}\n")),(0,l.kt)("p",null,"\u9700\u8981\u5e94\u7528\u5230 app \u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport * as express from '@midwayjs/express';\nimport { join } from 'path';\nimport { GlobalError } from './filter/global.filter';\n\n@Configuration({\n  imports: [express],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerLifeCycle {\n  @App()\n  app: express.Application;\n\n  async onReady() {\n    this.app.useMiddleware((req, res, next) => {\n      next();\n    });\n\n    this.app.useFilter([GlobalError]);\n  }\n}\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@Match")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Catch")," \u90fd\u662f\u8fc7\u6ee4\u5668\uff0c\u5728\u5185\u90e8\u4f1a\u81ea\u52a8\u5224\u65ad\u505a\u533a\u5206\u6267\u884c\u3002\u3002"),(0,l.kt)("h2",{id:"cookie"},"Cookie"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u81ea\u5e26  ",(0,l.kt)("inlineCode",{parentName:"p"},"cookie parser")," \u529f\u80fd\uff0c\u4f7f\u7528\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"cookie-parser")," \u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u9488\u5bf9 Cookie\uff0c\u7edf\u4e00\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"keys")," \u4f5c\u4e3a\u79d8\u94a5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  keys:  ['key1', 'key2'],\n}\n")),(0,l.kt)("p",null,"\u83b7\u53d6 Cookie\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const cookieValue = req.cookies['cookie-key'];\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e Cookie\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"res.cookie(\n  'cookie-key',\n  'cookie-value',\n  cookieOptions\n);\n")),(0,l.kt)("h2",{id:"session"},"Session"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u5185\u7f6e\u4e86 Session \u7ec4\u4ef6\uff0c\u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx.session")," \u6765\u8bbf\u95ee\u6216\u8005\u4fee\u6539\u5f53\u524d\u7528\u6237 Session \u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"cookie-session")," \uff0c\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  session:  {\n    name: 'MW_SESS',\n    resave: true,\n    saveUninitialized: true,\n    cookie: {\n      maxAge: 24 * 3600 * 1000, // ms\n      httpOnly: true,\n      // sameSite: null,\n    },\n  }\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684 API \u6765\u8bbe\u7f6e session\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  req;\n\n  @Get('/')\n  async get() {\n    // set all\n    this.req.session = req.query;\n\n    // set value\n    this.req.session.key = 'abc';\n\n    // get\n    const key = this.req.session.key;\n\n    // remove\n    this.req.session = null;\n\n    // set max age\n    this.req.session.maxAge = Number(req.query.maxAge);\n\n    // ...\n  }\n}\n\n")),(0,l.kt)("h2",{id:"bodyparser"},"BodyParser"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u81ea\u5e26  ",(0,l.kt)("inlineCode",{parentName:"p"},"bodyParser")," \u529f\u80fd\uff0c\u9ed8\u8ba4\u4f1a\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"Post")," \u8bf7\u6c42\uff0c\u81ea\u52a8\u8bc6\u522b ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"text"),"\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"urlencoded")," \u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684\u5927\u5c0f\u9650\u5236\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"1mb"),"\uff0c\u53ef\u4ee5\u5355\u72ec\u5bf9\u6bcf\u9879\u914d\u7f6e\u5927\u5c0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  bodyParser: {\n    json: {\n      enable: true,\n      limit: '1mb',\n      strict: true,\n    },\n    raw: {\n      enable: false,\n      limit: '1mb',\n    },\n    text: {\n      enable: true,\n      limit: '1mb',\n    },\n    urlencoded: {\n      enable: true,\n      extended: false,\n      limit: '1mb',\n      parameterLimit: 1000,\n    },\n  },\n}\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express"),"  \u7684\u914d\u7f6e\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  express: {\n    port: 7001,\n  },\n}\n")),(0,l.kt)("p",null,"\u6240\u6709\u5c5e\u6027\u63cf\u8ff0\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u542f\u52a8\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"globalPrefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u5168\u5c40\u7684 http \u524d\u7f00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keys"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cCookies \u7b7e\u540d\uff0c\u5982\u679c\u4e0a\u5c42\u672a\u5199 keys\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd9\u91cc\u8bbe\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u76d1\u542c\u7684 hostname\uff0c\u9ed8\u8ba4 127.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHttps key\uff0c\u670d\u52a1\u7aef\u79c1\u94a5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cert"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHttps cert\uff0c\u670d\u52a1\u7aef\u8bc1\u4e66")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ca"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHttps ca")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http2"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0chttp2 \u652f\u6301\uff0c\u9ed8\u8ba4 false")))),(0,l.kt)("h3",{id:"\u4fee\u6539\u7aef\u53e3"},"\u4fee\u6539\u7aef\u53e3"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.default")," \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"7001")," \u7684\u9ed8\u8ba4\u7aef\u53e3\u53c2\u6570\uff0c\u4fee\u6539\u5b83\u5c31\u53ef\u4ee5\u4fee\u6539 Express http \u670d\u52a1\u7684\u9ed8\u8ba4\u7aef\u53e3\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"6001"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  express: {\n    port: 6001,\n  },\n}\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5355\u6d4b\u73af\u5883\u7531\u4e8e\u9700\u8981 supertest \u6765\u542f\u52a8\u7aef\u53e3\uff0c\u6211\u4eec\u7684 port \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  express: {\n    port: null,\n  },\n}\n")),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"midway-bin dev --ts --port=6001")," \u7684\u65b9\u5f0f\u6765\u4e34\u65f6\u4fee\u6539\u7aef\u53e3\uff0c\u6b64\u65b9\u6cd5\u4f1a\u8986\u76d6\u914d\u7f6e\u4e2d\u7684\u7aef\u53e3\u3002"),(0,l.kt)("h3",{id:"\u5168\u5c40\u524d\u7f00"},"\u5168\u5c40\u524d\u7f00"),(0,l.kt)("p",null,"\u6b64\u529f\u80fd\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"../controller#%E5%85%A8%E5%B1%80%E8%B7%AF%E7%94%B1%E5%89%8D%E7%BC%80"},"\u5168\u5c40\u524d\u7f00"),"\u3002"),(0,l.kt)("h3",{id:"https-\u914d\u7f6e"},"Https \u914d\u7f6e"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u7684\u60c5\u51b5\uff0c\u8bf7\u5c3d\u53ef\u80fd\u4f7f\u7528\u5916\u90e8\u4ee3\u7406\u7684\u65b9\u5f0f\u6765\u5b8c\u6210 Https \u7684\u5b9e\u73b0\uff0c\u6bd4\u5982 Nginx\u3002"),(0,l.kt)("p",null,"\u5728\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e SSL \u8bc1\u4e66\uff08TLS \u8bc1\u4e66\uff09\u7684\u65b9\u5f0f\uff0c\u6765\u76f4\u63a5\u5f00\u542f Https\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u63d0\u524d\u51c6\u5907\u597d\u8bc1\u4e66\u6587\u4ef6\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"ssl.key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ssl.pem"),"\uff0ckey \u4e3a\u670d\u52a1\u7aef\u79c1\u94a5\uff0cpem \u4e3a\u5bf9\u5e94\u7684\u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u914d\u7f6e\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport { readFileSync } from 'fs';\n\nexport default {\n  // ...\n  express: {\n    key: readFileSync(join(__dirname, '../ssl/ssl.key'), 'utf8'),\n    cert: readFileSync(join(__dirname, '../ssl/ssl.pem'), 'utf8'),\n  },\n}\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u4e0a\u4e0b\u6587\u65e5\u5fd7"},"\u4fee\u6539\u4e0a\u4e0b\u6587\u65e5\u5fd7"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5355\u72ec\u4fee\u6539 express \u6846\u67b6\u7684\u4e0a\u4e0b\u6587\u65e5\u5fd7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  express: {\n    contextLoggerFormat: info => {\n      // \u7b49\u4ef7 req\n      const req = info.ctx;\n      const userId = req?.['session']?.['userId'] || '-';\n      return `${info.timestamp} ${info.LEVEL} ${info.pid} [${userId} - ${Date.now() - req.startTime}ms ${req.method}] ${info.message}`;\n    }\n    // ...\n  },\n};\n")))}c.isMDXComponent=!0}}]);