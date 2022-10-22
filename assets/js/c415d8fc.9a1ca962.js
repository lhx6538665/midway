"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},l="\u5feb\u901f\u5165\u95e8",o={unversionedId:"quick_guide",id:"quick_guide",title:"\u5feb\u901f\u5165\u95e8",description:"\u5982\u679c\u4f60\u6ca1\u6709\u63a5\u89e6\u8fc7 Midway\uff0c\u6ca1\u5173\u7cfb\uff0c\u672c\u7ae0\u8282\u6211\u4eec\u5c06\u4ece\u5b9e\u4f8b\u7684\u89d2\u5ea6\uff0c\u4e00\u6b65\u6b65\u5730\u642d\u5efa\u51fa\u4e00\u4e2a Midway \u6807\u51c6\u5e94\u7528\uff0c\u5c55\u793a\u5929\u6c14\u4fe1\u606f\uff0c\u8ba9\u4f60\u80fd\u5feb\u901f\u7684\u5165\u95e8 Midway\u3002",source:"@site/docs/quick_guide.md",sourceDirName:".",slug:"/quick_guide",permalink:"/docs/quick_guide",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/quick_guide.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/intro"},next:{title:"2.x \u5347\u7ea7\u6307\u5357",permalink:"/docs/upgrade_v3"}},p={},s=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"\u7f16\u5199 Controller",id:"\u7f16\u5199-controller",level:2},{value:"\u6dfb\u52a0\u53c2\u6570\u5904\u7406",id:"\u6dfb\u52a0\u53c2\u6570\u5904\u7406",level:2},{value:"\u7f16\u5199 Service",id:"\u7f16\u5199-service",level:2},{value:"\u6a21\u677f\u6e32\u67d3",id:"\u6a21\u677f\u6e32\u67d3",level:2},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:2},{value:"\u7ee7\u7eed\u5b66\u4e60",id:"\u7ee7\u7eed\u5b66\u4e60",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u5165\u95e8"},"\u5feb\u901f\u5165\u95e8"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u63a5\u89e6\u8fc7 Midway\uff0c\u6ca1\u5173\u7cfb\uff0c\u672c\u7ae0\u8282\u6211\u4eec\u5c06\u4ece\u5b9e\u4f8b\u7684\u89d2\u5ea6\uff0c\u4e00\u6b65\u6b65\u5730\u642d\u5efa\u51fa\u4e00\u4e2a Midway \u6807\u51c6\u5e94\u7528\uff0c\u5c55\u793a\u5929\u6c14\u4fe1\u606f\uff0c\u8ba9\u4f60\u80fd\u5feb\u901f\u7684\u5165\u95e8 Midway\u3002"),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\uff1a\u652f\u6301 macOS\uff0cLinux\uff0cWindows"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883\uff1a\u5efa\u8bae\u9009\u62e9 ",(0,a.kt)("a",{parentName:"li",href:"http://nodejs.org/"},"LTS \u7248\u672c"),"\uff0c\u6700\u4f4e\u8981\u6c42 12.x\u3002")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\u521d\u59cb\u5316\u9879\u76ee"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u76f4\u63a5\u4f7f\u7528\u811a\u624b\u67b6\uff0c\u53ea\u9700\u51e0\u6761\u7b80\u5355\u6307\u4ee4\uff0c\u5373\u53ef\u5feb\u901f\u751f\u6210\u9879\u76ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway\n")),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-v3")," \u9879\u76ee\u8fdb\u884c\u521d\u59cb\u5316\u521b\u5efa\uff0c\u9879\u76ee\u540d\u53ef\u4ee5\u81ea\u5b9a\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"weather-sample"),"\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u542f\u52a8\u5e94\u7528\u6765\u4f53\u9a8c\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n$ open http://localhost:7001\n")),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init midway")," \u4e4b\u540e\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"quick-start")," \u9879\u76ee\uff0c\u521b\u5efa\u5373\u53ef\uff0c\u65b9\u4fbf\u5bf9\u7167\u5b66\u4e60\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199-controller"},"\u7f16\u5199 Controller"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u719f\u6089 Web \u5f00\u53d1\u6216 MVC\uff0c\u5c31\u77e5\u9053\u7b2c\u4e00\u6b65\u6211\u4eec\u9700\u8981\u7f16\u5199 ",(0,a.kt)("a",{parentName:"p",href:"./controller"},"Controller \u548c Router"),"\u3002"),(0,a.kt)("p",null,"\u5728\u811a\u624b\u67b6\u521b\u5efa\u7684\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u4e00\u4e9b\u6587\u4ef6\uff0c\u6211\u4eec\u6682\u65f6\u5ffd\u7565\u4ed6\u4eec\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," \u76ee\u5f55\u4e2d\uff0c\u65b0\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/controller/weather.controller.ts")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/decorator';\n\n@Controller('/')\nexport class WeatherController {\n  // \u8fd9\u91cc\u662f\u88c5\u9970\u5668\uff0c\u5b9a\u4e49\u4e00\u4e2a\u8def\u7531\n  @Get('/weather')\n  async getWeatherInfo(): Promise<string> {\n    // \u8fd9\u91cc\u662f http \u7684\u8fd4\u56de\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\uff0cJSON\uff0cBuffer \u7b49\n    return 'Hello Weather!';\n  }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"/weather")," \u63a5\u53e3\u8fd4\u56de\u6570\u636e\u4e86\u3002"),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u53c2\u6570\u5904\u7406"},"\u6dfb\u52a0\u53c2\u6570\u5904\u7406"),(0,a.kt)("p",null,"\u5728\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a URL \u53c2\u6570\u6765\u52a8\u6001\u5c55\u793a\u4e0d\u540c\u57ce\u5e02\u7684\u5929\u6c14\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Query")," \u88c5\u9970\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u5230 URL \u4e0a\u7684\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Query } from '@midwayjs/decorator';\n\n@Controller('/')\nexport class WeatherController {\n  @Get('/weather')\n  async getWeatherInfo(@Query('id') cityId: string): Promise<string> {\n    return cityId;\n  }\n}\n")),(0,a.kt)("p",null,"\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Query")," \u88c5\u9970\u5668\uff0cMidway \u4e5f\u63d0\u4f9b\u4e86\u5176\u4ed6\u8bf7\u6c42\u53c2\u6570\u7684\u83b7\u53d6\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"./controller"},"\u8def\u7531\u548c\u63a7\u5236")," \u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199-service"},"\u7f16\u5199 Service"),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0cController \u4e00\u822c\u7528\u6765\u63a5\u6536\u8bf7\u6c42\u53c2\u6570\uff0c\u6821\u9a8c\u53c2\u6570\uff0c\u4e0d\u4f1a\u5305\u62ec\u7279\u522b\u590d\u6742\u7684\u903b\u8f91\uff0c\u590d\u6742\u800c\u590d\u7528\u7684\u903b\u8f91\uff0c\u6211\u4eec\u5e94\u8be5\u5c01\u88c5\u4e3a Service \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u6dfb\u52a0\u4e00\u4e2a Service \u7528\u6765\u83b7\u53d6\u5929\u6c14\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u4e00\u4e2a http \u8bf7\u6c42\uff0c\u83b7\u53d6\u8fdc\u7aef\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/weather.service.ts\nimport { Provide } from '@midwayjs/decorator';\nimport { makeHttpRequest } from '@midwayjs/core';\n\n@Provide()\nexport class WeatherService {\n  async getWeather(cityId: string) {\n    return makeHttpRequest(`http://www.weather.com.cn/data/cityinfo/${cityId}.html`, {\n      dataType: 'json',\n    });\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"1\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"makeHttpRequest")," \u65b9\u6cd5\u662f Midway \u5185\u7f6e\u7684 http \u8bf7\u6c42\u65b9\u6cd5\uff0c\u66f4\u591a\u53c2\u6570\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"li",href:"./extensions/axios"},"\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u793a\u4f8b\u4e2d\u7684\u57ce\u5e02\u5929\u6c14\u4fe1\u606f\u6765\u81ea\u4e8e\u4e2d\u56fd\u4e2d\u592e\u6c14\u8c61\u53f0 API"))),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u6765\u6dfb\u52a0\u5b9a\u4e49\uff0c\u826f\u597d\u7684\u7c7b\u578b\u5b9a\u4e49\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u51cf\u5c11\u4ee3\u7801\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/interface.ts")," \u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u5929\u6c14\u4fe1\u606f\u7684\u6570\u636e\u5b9a\u4e49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/interface.ts\n\n// ...\n\nexport interface WeatherInfo {\n  weatherinfo: {\n    city: string;\n    cityid: string;\n    temp: string;\n    WD: string;\n    WS: string;\n    SD: string;\n    AP: string;\n    njd: string;\n    WSE: string;\n    time: string;\n    sm: string;\n    isRadar: string;\n    Radar: string;\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 Service \u4e2d\u8fdb\u884c\u6807\u6ce8\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { makeHttpRequest } from '@midwayjs/core';\nimport { WeatherInfo } from '../interface';\n\n@Provide()\nexport class WeatherService {\n  async getWeather(cityId: string): Promise<WeatherInfo> {\n    const result = await makeHttpRequest(`http://www.weather.com.cn/data/sk/${cityId}.html`, {\n      dataType: 'json',\n    });\n\n    if (result.status === 200) {\n      return result.data;\n    }\n  }\n}\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"1\u3001\u8fd9\u91cc\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"@Provide")," \u88c5\u9970\u5668\u4fee\u9970\u7c7b\uff0c\u4fbf\u4e8e\u540e\u7eed Controller \u6ce8\u5165\u8be5\u7c7b"))),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u4fee\u6539\u4e0b\u4e4b\u524d\u7684 Controller \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Query } from '@midwayjs/decorator';\nimport { WeatherInfo } from '../interface';\nimport { WeatherService } from '../service/weather.service';\n\n@Controller('/')\nexport class WeatherController {\n\n  @Inject()\n  weatherService: WeatherService;\n\n  @Get('/weather')\n  async getWeatherInfo(@Query('cityId') cityId: string): Promise<WeatherInfo> {\n    return this.weatherService.getWeather(cityId);\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"1\u3001\u8fd9\u91cc\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"@Inject")," \u88c5\u9970\u5668\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"WeatherService"),"\uff0c\u662f Midway \u4f9d\u8d56\u6ce8\u5165\u7684\u6807\u51c6\u7528\u6cd5\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"li",href:"./service"},"\u8fd9\u91cc")," \u4e86\u89e3\u66f4\u591a"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u8fd9\u91cc\u4e5f\u540c\u6b65\u4fee\u6539\u4e86\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7c7b\u578b"))),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u8bf7\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7001/weather?cityId=101010100")," \u67e5\u770b\u8fd4\u56de\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u4f60\u7684\u7b2c\u4e00\u4e2a Midway \u63a5\u53e3\u5df2\u7ecf\u5f00\u53d1\u5b8c\u6210\u4e86\uff0c\u4f60\u53ef\u4ee5\u5728\u524d\u7aef\u4ee3\u7801\u4e2d\u76f4\u63a5\u8c03\u7528\u4e86\uff0c\u63a5\u4e0b\u53bb\uff0c\u6211\u4eec\u5c06\u5229\u7528\u8fd9\u4e2a\u63a5\u53e3\u5b8c\u6210\u4e00\u4e2a\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u9875\u9762\u3002"),(0,a.kt)("h2",{id:"\u6a21\u677f\u6e32\u67d3"},"\u6a21\u677f\u6e32\u67d3"),(0,a.kt)("p",null,"\u4ece\u8fd9\u91cc\u5f00\u59cb\uff0c\u6211\u4eec\u9700\u8981\u7528\u5230\u4e00\u4e9b Midway \u7684\u6269\u5c55\u80fd\u529b\u3002"),(0,a.kt)("p",null,"Midway \u5bf9\u5e94\u7684\u6269\u5c55\u5305\u6211\u4eec\u79f0\u4e3a \u201c\u7ec4\u4ef6\u201d\uff0c\u4e5f\u662f\u6807\u51c6\u7684 npm \u5305\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u7528\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/view-nunjucks")," \u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/view-nunjucks --save\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u6587\u4ef6\u4e2d\u542f\u7528\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nimport * as view from '@midwayjs/view-nunjucks';\n\n@Configuration({\n  imports: [\n    koa,\n    // ...\n    view\n  ],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerLifeCycle {\n  // ...\n}\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"1\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"configuration")," \u6587\u4ef6\u662f Midway \u7684\u751f\u547d\u5468\u671f\u5165\u53e3\u6587\u4ef6\uff0c\u627f\u62c5\u4e86\u7ec4\u4ef6\u5f00\u5173\uff0c\u914d\u7f6e\u52a0\u8f7d\u548c\u751f\u547d\u5468\u671f\u7ba1\u7406\u7684\u4f5c\u7528"),(0,a.kt)("li",{parentName:"ul"},"2\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"imports")," \u5c31\u4f7f\u7528\u6765\u5bfc\u5165\uff08\u5f00\u542f\uff09\u7ec4\u4ef6\u7684\u65b9\u6cd5"))),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts")," \u4e2d\u914d\u7f6e\u7ec4\u4ef6\uff0c\u6307\u5b9a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"nunjucks")," \u6a21\u677f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayConfig } from '@midwayjs/core';\n\nexport default {\n  // ...\n  view: {\n    defaultViewEngine: 'nunjucks',\n  },\n} as MidwayConfig;\n\n")),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55\uff08\u975e src \u91cc\uff09\u6dfb\u52a0\u6a21\u677f ",(0,a.kt)("inlineCode",{parentName:"p"},"view/info.html")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>\u5929\u6c14\u9884\u62a5</title>\n    <style>\n      .weather_bg {\n        background-color: #0d68bc; \n        height: 150px;\n        color: #fff;\n        font-size: 12px;\n        line-height: 1em;\n        text-align: center;\n        padding: 10px;\n      }\n\n      .weather_bg label {\n        line-height: 1.5em;\n        text-align: center;\n        text-shadow: 1px 1px 1px #555;\n        background: #afdb00;\n        width: 100px;\n        display: inline-block;\n        margin-left: 10px;\n      }\n\n      .weather_bg .temp {\n        font-size: 32px;\n        margin-top: 5px;\n        padding-left: 14px;\n      }\n      .weather_bg sup {\n        font-size: 0.5em;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="weather_bg">\n      <div>\n        <p>\n          {{city}}\uff08{{WD}}{{WS}}\uff09\n        </p>\n        <p class="temp">{{temp}}<sup>\u2103</sup></p>\n        <p>\n          \u6c14\u538b<label>{{AP}}</label>\n        </p>\n        <p>\n          \u6e7f\u5ea6<label>{{SD}}</label>\n        </p>\n      </div>\n    </div>\n  </body>\n</html>\n\n')),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u8c03\u6574 Controller \u7684\u4ee3\u7801\uff0c\u5c06\u8fd4\u56de JSON \u53d8\u4e3a\u6a21\u677f\u6e32\u67d3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/weather.controller.ts\nimport { Controller, Get, Inject, Query } from '@midwayjs/decorator';\nimport { WeatherService } from '../service/weather.service';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class WeatherController {\n\n  @Inject()\n  weatherService: WeatherService;\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/weather')\n  async getWeatherInfo(@Query('cityId') cityId: string): Promise<void> {\n    const result = await this.weatherService.getWeather(cityId);\n    if (result) {\n      await this.ctx.render('info', result.weatherinfo);\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u5230\u8fd9\u4e00\u6b65\uff0c\u6211\u4eec\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7001/weather?cityId=101010100")," \u5df2\u7ecf\u53ef\u4ee5\u770b\u5230\u6e32\u67d3\u7684\u6a21\u677f\u5185\u5bb9\u4e86\u3002"),(0,a.kt)("h2",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,a.kt)("p",null,"\u522b\u5fd8\u4e86\uff0c\u6211\u4eec\u8fd8\u6709\u4e00\u4e9b\u5f02\u5e38\u7684\u903b\u8f91\u9700\u8981\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6bcf\u4e2a\u5bf9\u5916\u7684\u8c03\u7528\u90fd\u9700\u8981\u505a\u5f02\u5e38\u6355\u83b7\uff0c\u5e76\u4e14\u5c06\u5f02\u5e38\u8f6c\u53d8\u4e3a\u6211\u4eec\u81ea\u5df1\u4e1a\u52a1\u7684\u9519\u8bef\uff0c\u8fd9\u6837\u624d\u80fd\u6709\u66f4\u597d\u7684\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u4e3a\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u6211\u4eec\u81ea\u5df1\u7684\u4e1a\u52a1\u9519\u8bef\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/error/weather.error.ts")," \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/error/weather.error.ts\nimport { MidwayError } from '@midwayjs/core';\n\nexport class WeatherEmptyDataError extends MidwayError {\n  constructor(err?: Error) {\n    super('weather data is empty', {\n      cause: err,\n    });\n    if (err?.stack) {\n      this.stack = err.stack;\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u8c03\u6574 Service \u4ee3\u7801\u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/weather.service.ts\nimport { Provide } from '@midwayjs/decorator';\nimport { makeHttpRequest } from '@midwayjs/core';\nimport { WeatherInfo } from '../interface';\nimport { WeatherEmptyDataError } from '../error/weather.error';\n\n@Provide()\nexport class WeatherService {\n  async getWeather(cityId: string): Promise<WeatherInfo> {\n    if (!cityId) {\n      throw new WeatherEmptyDataError();\n    }\n\n    try {\n      const result = await makeHttpRequest(`http://www.weather.com.cn/data/sk/${cityId}.html`, {\n        dataType: 'json',\n      });\n      if (result.status === 200) {\n        return result.data;\n      }\n    } catch (error) {\n      throw new WeatherEmptyDataError(error);\n    }\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"1\u3001\u5c06 http \u7684\u8c03\u7528\u8bf7\u6c42\u8fdb\u884c\u9519\u8bef\u6355\u83b7\uff0c\u5c06\u9519\u8bef\u5305\u88f9\uff0c\u8fd4\u56de\u4e00\u4e2a\u6211\u4eec\u7cfb\u7edf\u7684\u4e1a\u52a1\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u5982\u6709\u5fc5\u8981\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u66f4\u591a\u7684\u9519\u8bef\uff0c\u5206\u914d\u9519\u8bef Code \u7b49"))),(0,a.kt)("p",null,"\u5230\u8fd9\u4e00\u6b65\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u5f02\u5e38\u8fdb\u884c\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u6709\u591a\u4e2a\u4f4d\u7f6e\u629b\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherEmptyDataError")," \u65f6\uff0c\u6211\u4eec\u9700\u8981\u7edf\u4e00\u7684\u683c\u5f0f\u8fd4\u56de\u3002"),(0,a.kt)("p",null,"\u9519\u8bef\u5904\u7406\u5668\u53ef\u4ee5\u5b8c\u6210\u8fd9\u4e2a\u529f\u80fd\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/filter/weather.filter.ts")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//src/filter/weather.filter.ts\nimport { Catch } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\nimport { WeatherEmptyDataError } from '../error/weather.error';\n\n@Catch(WeatherEmptyDataError)\nexport class WeatherErrorFilter {\n  async catch(err: WeatherEmptyDataError, ctx: Context) {\n    ctx.logger.error(err);\n    return '<html><body><h1>weather data is empty</h1></body></html>';\n  }\n}\n\n")),(0,a.kt)("p",null,"\u7136\u540e\u5e94\u7528\u5230\u5f53\u524d\u7684\u6846\u67b6\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { WeatherErrorFilter } from './filter/weather.filter';\n// ...\n\n@Configuration({\n  // ...\n})\nexport class ContainerLifeCycle {\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // ...\n\n    // add filter\n    this.app.useFilter([WeatherErrorFilter]);\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u5f53\u6bcf\u6b21\u8bf7\u6c42\u4e2d\u83b7\u53d6\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherEmptyDataError")," \u9519\u8bef\uff0c\u4f1a\u4f7f\u7528\u76f8\u540c\u7684\u8fd4\u56de\u503c\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\uff0c\u540c\u65f6\u4f1a\u5728\u65e5\u5fd7\u4e2d\u8bb0\u5f55\u539f\u59cb\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5f02\u5e38\u5904\u7406\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u67e5\u9605 ",(0,a.kt)("a",{parentName:"p",href:"./error_filter"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"Midway \u9ed8\u8ba4\u4f7f\u7528 jest \u4f5c\u4e3a\u57fa\u7840\u7684\u6d4b\u8bd5\u6846\u67b6\uff0c\u4e00\u822c\u6211\u4eec\u7684\u6d4b\u8bd5\u6587\u4ef6\u4f1a\u653e\u5728\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," \u76ee\u5f55\u4e2d\uff0c\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.test.ts")," \u4f5c\u4e3a\u540e\u7f00\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u8981\u6d4b\u8bd5\u7f16\u5199\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/weather")," \u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u6d4b\u8bd5\u5b83\u7684\u6210\u529f\u548c\u5931\u8d25\u4e24\u79cd\u72b6\u6001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/koa';\n\ndescribe('test/controller/weather.test.ts', () => {\n\n  let app: Application;\n  beforeAll(async () => {\n    // create app\n    app = await createApp<Framework>();\n  });\n\n  afterAll(async () => {\n    // close app\n    await close(app);\n  });\n\n  it('should test /weather with success request', async () => {\n    // make request\n    const result = await createHttpRequest(app).get('/weather').query({ cityId: 101010100 });\n\n    expect(result.status).toBe(200);\n    expect(result.text).toMatch(/\u5317\u4eac/);\n  });\n\n  it('should test /weather with fail request', async () => {\n    const result = await createHttpRequest(app).get('/weather');\n\n    expect(result.status).toBe(200);\n    expect(result.text).toMatch(/weather data is empty/);\n  });\n});\n\n")),(0,a.kt)("p",null,"\u6267\u884c\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run test\n")),(0,a.kt)("p",null,"\u5c31\u8fd9\u4e48\u7b80\u5355\uff0c\u66f4\u591a\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"./testing"},"\u6d4b\u8bd5"),"\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"1\u3001jest \u6d4b\u8bd5\u65f6\uff0c\u4ee5\u5355\u6587\u4ef6\u4f5c\u4e3a\u5355\u4f4d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"beforeAlll")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"afterAll")," \u63a7\u5236 app \u7684\u542f\u505c"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"createHttpRequest")," \u6765\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"3\u3001\u4f7f\u7528 expect \u6765\u65ad\u8a00\u8fd4\u56de\u7684\u7ed3\u679c\u662f\u5426\u7b26\u5408\u9884\u671f"))),(0,a.kt)("h2",{id:"\u7ee7\u7eed\u5b66\u4e60"},"\u7ee7\u7eed\u5b66\u4e60"),(0,a.kt)("p",null,"\u606d\u559c\u4f60\uff0c\u4f60\u5bf9 Midway \u5df2\u7ecf\u6709\u4e86\u4e00\u4e9b\u521d\u6b65\u7684\u8ba4\u8bc6\uff0c\u6211\u4eec\u6765\u7b80\u5355\u7684\u56de\u987e\u4e00\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm init midway")," \u6765\u521b\u5efa\u4e86\u793a\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"@Controller")," \u88c5\u9970\u5668\u5b9a\u4e49\u8def\u7531\u548c\u63a7\u5236\u5668\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"3\u3001\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"@Query")," \u83b7\u53d6\u8bf7\u6c42\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"4\u3001\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"@Provide")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"@Inject")," \u6ce8\u5165\u670d\u52a1\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"5\u3001\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"imports")," \u542f\u7528\u7ec4\u4ef6\uff0c\u5e76\u914d\u7f6e\u4e86 nunjucks \u6a21\u677f"),(0,a.kt)("li",{parentName:"ul"},"6\u3001\u81ea\u5b9a\u4e49\u4e86\u9519\u8bef\uff0c\u5e76\u4f7f\u7528\u9519\u8bef\u8fc7\u6ee4\u5668\u6765\u62e6\u622a\u9519\u8bef\uff0c\u8fd4\u56de\u81ea\u5b9a\u4e49\u7684\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"7\u3001\u4f7f\u7528 jest \u521b\u5efa\u4e86\u6d4b\u8bd5\uff0c\u6dfb\u52a0\u4e86\u6210\u529f\u548c\u5931\u8d25\u7684\u6d4b\u8bd5\u7528\u4f8b")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u7684\u8fd9\u4e9b\uff0c\u4ec5\u4ec5\u662f Midway \u7684\u4e00\u5c0f\u90e8\u5206\u5185\u5bb9\uff0c\u968f\u7740\u4f7f\u7528\u7684\u6df1\u5165\uff0c\u4f1a\u4f7f\u7528\u5230\u66f4\u591a\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"./quickstart"},"\u521b\u5efa")," \u5f00\u59cb\uff0c\u53bb\u9009\u62e9 Midway \u4e0d\u540c\u573a\u666f\u4e0b\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u6df1\u5165 ",(0,a.kt)("a",{parentName:"p",href:"./controller"},"\u8def\u7531\u548c\u63a7\u5236\u5668")," \u7684\u90e8\u5206\uff0c\u589e\u52a0\u4e00\u4e9b\u8bf7\u6c42\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u4e86\u89e3 ",(0,a.kt)("a",{parentName:"p",href:"./middleware"},"Web \u4e2d\u95f4\u4ef6")," \u6216\u8005 ",(0,a.kt)("a",{parentName:"p",href:"./container"},"\u4f9d\u8d56\u6ce8\u5165")," \u76f8\u5173\u7684\u77e5\u8bc6\u3002"))}m.isMDXComponent=!0}}]);