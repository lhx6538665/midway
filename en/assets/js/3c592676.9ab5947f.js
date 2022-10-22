"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4330],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>c});var l=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=l.createContext({}),p=function(e){var r=l.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return l.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},v=l.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=p(t),c=n,m=v["".concat(o,".").concat(c)]||v[c]||d[c]||a;return t?l.createElement(m,s(s({ref:r},u),{},{components:t})):l.createElement(m,s({ref:r},u))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=v;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2786:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=t(7462),n=(t(7294),t(3905));const a={title:"\u4ecb\u7ecd"},s=void 0,i={unversionedId:"serverless/serverless_intro",id:"version-2.0.0/serverless/serverless_intro",title:"\u4ecb\u7ecd",description:"Midway Serverless \u80fd\u505a\u4ec0\u4e48",source:"@site/versioned_docs/version-2.0.0/serverless/serverless_intro.md",sourceDirName:"serverless",slug:"/serverless/serverless_intro",permalink:"/en/docs/2.0.0/serverless/serverless_intro",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/serverless_intro.md",tags:[],version:"2.0.0",frontMatter:{title:"\u4ecb\u7ecd"},sidebar:"Serverless",next:{title:"\u5f00\u53d1\u51fd\u6570",permalink:"/en/docs/2.0.0/serverless/serverless_dev"}},o={},p=[{value:"Midway Serverless \u80fd\u505a\u4ec0\u4e48",id:"midway-serverless-\u80fd\u505a\u4ec0\u4e48",level:2},{value:"Midway Serverless \u548c Midway \u7684\u5173\u7cfb",id:"midway-serverless-\u548c-midway-\u7684\u5173\u7cfb",level:2},{value:"\u51fd\u6570\uff08FaaS\uff09\u80fd\u505a\u4ec0\u4e48",id:"\u51fd\u6570faas\u80fd\u505a\u4ec0\u4e48",level:2},{value:"\u51fd\u6570\u4e0d\u80fd\u505a\u4ec0\u4e48",id:"\u51fd\u6570\u4e0d\u80fd\u505a\u4ec0\u4e48",level:2},{value:"\u672f\u8bed\u63cf\u8ff0",id:"\u672f\u8bed\u63cf\u8ff0",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:3},{value:"\u51fd\u6570\u7ec4",id:"\u51fd\u6570\u7ec4",level:3},{value:"\u89e6\u53d1\u5668",id:"\u89e6\u53d1\u5668",level:3},{value:"\u51fd\u6570\u8fd0\u884c\u65f6",id:"\u51fd\u6570\u8fd0\u884c\u65f6",level:3},{value:"\u53d1\u5e03\u5e73\u53f0",id:"\u53d1\u5e03\u5e73\u53f0",level:3},{value:"Layer",id:"layer",level:3}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"midway-serverless-\u80fd\u505a\u4ec0\u4e48"},"Midway Serverless \u80fd\u505a\u4ec0\u4e48"),(0,n.kt)("p",null,"Midway Serverless \u662f\u7528\u4e8e\u6784\u5efa Node.js \u4e91\u51fd\u6570\u7684 Serverless \u6846\u67b6\u3002\u5e2e\u52a9\u60a8\u5728\u4e91\u539f\u751f\u65f6\u4ee3\u5927\u5e45\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\uff0c\u66f4\u4e13\u6ce8\u4e8e\u4ea7\u54c1\u7814\u53d1\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8de8\u4e91\u5382\u5546\uff1a"),"\u4e00\u4efd\u4ee3\u7801\u53ef\u5728\u591a\u4e2a\u4e91\u5e73\u53f0\u95f4\u5feb\u901f\u90e8\u7f72\uff0c\u4e0d\u7528\u62c5\u5fc3\u4f60\u7684\u4ea7\u54c1\u4f1a\u88ab\u4e91\u5382\u5546\u6240\u7ed1\u5b9a\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e91\u7aef\u4e00\u4f53\u5316\uff1a"),"\u63d0\u4f9b\u4e86\u591a\u5957\u548c\u793e\u533a\u524d\u7aef React\u3001Vue \u7b49\u878d\u5408\u4e00\u4f53\u5316\u5f00\u53d1\u7684\u65b9\u6848\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ee3\u7801\u590d\u7528\uff1a"),"\u901a\u8fc7\u6846\u67b6\u7684\u4f9d\u8d56\u6ce8\u5165\u80fd\u529b\uff0c\u8ba9\u6bcf\u4e00\u90e8\u5206\u903b\u8f91\u5355\u5143\u90fd\u5929\u7136\u53ef\u590d\u7528\uff0c\u53ef\u4ee5\u5feb\u901f\u65b9\u4fbf\u5730\u7ec4\u5408\u4ee5\u751f\u6210\u590d\u6742\u7684\u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4f20\u7edf\u8fc1\u79fb\uff1a"),"\u901a\u8fc7\u6846\u67b6\u7684\u8fd0\u884c\u65f6\u6269\u5c55\u80fd\u529b\uff0c\u8ba9 Egg.js \u3001Koa\u3001Express.js \u7b49\u4f20\u7edf\u5e94\u7528\u65e0\u7f1d\u8fc1\u79fb\u81f3\u5404\u4e91\u5382\u5546\u7684\u4e91\u51fd\u6570")),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 \xa0Midway \u6765\u6784\u5efa\u4f60\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5168\u6808\u5e94\u7528"),"\uff0c\u4e5f\u53ef\u4ee5\u53d1\u5e03\u7684",(0,n.kt)("strong",{parentName:"p"},"\u51fd\u6570\u670d\u52a1")," \uff0cRestful \u63a5\u53e3\u7b49\uff0c\u4e5f\u53ef\u4ee5\u52a0\u4e0a\u524d\u7aef\uff08react\uff0cvue\uff09\u4ee3\u7801",(0,n.kt)("strong",{parentName:"p"},"\u6784\u5efa\u4e2d\u540e\u53f0\u9879\u76ee"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 Midway \u63d0\u4f9b\u7684\u65b9\u6848",(0,n.kt)("strong",{parentName:"p"},"\u8fc1\u79fb\u4f20\u7edf"),"\u7684 Egg/Koa/Express \u5e94\u7528\u4e0a\u5f39\u6027\u5bb9\u5668\u3002"),(0,n.kt)("h2",{id:"midway-serverless-\u548c-midway-\u7684\u5173\u7cfb"},"Midway Serverless \u548c Midway \u7684\u5173\u7cfb"),(0,n.kt)("p",null,"Midway Serverless \u662f Midway \u4ea7\u51fa\u7684\u4e00\u5957\u9762\u5411 Serverless \u4e91\u5e73\u53f0\u7684\u5f00\u53d1\u65b9\u6848\u3002\u5176\u5185\u5bb9\u4e3b\u8981\u5305\u62ec\u51fd\u6570\u6846\u67b6 ",(0,n.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas"),"\xa0\uff0c\u4ee5\u53ca\u4e00\u7cfb\u5217\u8ddf\u5e73\u53f0\u914d\u5957\u7684\u5de5\u5177\u94fe\uff0c\u542f\u52a8\u5668\u7b49\u3002"),(0,n.kt)("p",null,"\u5728 Midway Serverless 2.0 \u4e4b\u540e\uff0cMidway Serverless \u548c Midway \u7684\u80fd\u529b\u590d\u7528\uff0c\u6709\u7740\u76f8\u540c\u7684 CLI \u5de5\u5177\u94fe\uff0c\u7f16\u8bd1\u5668\uff0c\u88c5\u9970\u5668\u7b49\u7b49\u3002"),(0,n.kt)("p",null,"\u5f53\u524d\uff0cMidway Serverless \u4e3b\u8981\u9762\u5411\u7684\u662f \u51fd\u6570\uff08FaaS\uff09\u573a\u666f\u3002"),(0,n.kt)("h2",{id:"\u51fd\u6570faas\u80fd\u505a\u4ec0\u4e48"},"\u51fd\u6570\uff08FaaS\uff09\u80fd\u505a\u4ec0\u4e48"),(0,n.kt)("p",null,"\u5f88\u591a\u4eba\u5bf9\u51fd\u6570\u8fd8\u4e0d\u662f\u5f88\u6e05\u695a\u6216\u8005\u4e0d\u4e86\u89e3\u4ed6\u80fd\u505a\u4ec0\u4e48\u3002\u5f53\u524d\u7684\u51fd\u6570\uff0c\u53ef\u4ee5\u5f53\u505a\u4e00\u4e2a\u5c0f\u5bb9\u5668\uff0c\u539f\u6765\u6211\u4eec\u8981\u5199\u4e00\u4e2a\u5b8c\u6574\u7684\u5e94\u7528\u6765\u627f\u8f7d\u80fd\u529b\uff0c\u73b0\u5728\u53ea\u9700\u8981\u5199\u4e2d\u95f4\u7684\u903b\u8f91\u90e8\u5206\uff0c\u4ee5\u53ca\u8003\u8651\u8f93\u5165\u548c\u8f93\u51fa\u7684\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u7ed1\u5b9a\u5e73\u53f0\u7684\u89e6\u53d1\u5668\uff0c\u53ef\u4ee5\u627f\u8f7d\u4f8b\u5982 HTTP\uff0cSocket \u7b49\u6d41\u91cf\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u5e73\u53f0\u63d0\u4f9b\u7684 BaaS SDK\uff0c\u53ef\u4ee5\u5bf9\u5916\u8c03\u7528\u6570\u636e\u5e93\uff0cRedis \u7b49\u670d\u52a1\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u51fd\u6570\uff0c\u80fd\u63d0\u4f9b\u4f20\u7edf\u7684 HTTP API \u670d\u52a1\uff0c\u7ed3\u5408\u73b0\u6709\u7684\u524d\u7aef\u6846\u67b6\uff08react\uff0cvue \u7b49\uff09\u6e32\u67d3\u51fa\u4e00\u4e2a\u4e2a\u7f8e\u4e3d\u7684\u9875\u9762\uff0c\u4e5f\u53ef\u4ee5\u505a\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u6a21\u5757\uff0c\u7b49\u5f85\u88ab\u8c03\u7528\uff08\u89e6\u53d1\uff09\uff0c\u6bd4\u5982\u5e38\u89c1\u7684\u6587\u4ef6\u4e0a\u4f20\u53d8\u66f4\uff0c\u89e3\u538b\u7b49\u7b49\uff0c\u4e5f\u80fd\u4f5c\u4e3a\u5b9a\u65f6\u4efb\u52a1\u7684\u903b\u8f91\u90e8\u5206\uff0c\u5230\u4e86\u6307\u5b9a\u7684\u65f6\u95f4\u6216\u8005\u65f6\u95f4\u95f4\u9694\u88ab\u6267\u884c\u3002"),(0,n.kt)("p",null,"\u968f\u7740\u65f6\u95f4\u7684\u66f4\u66ff\uff0c\u5e73\u53f0\u7684\u8fed\u4ee3\uff0c\u51fd\u6570\u7684\u80fd\u529b\u4f1a\u8d8a\u6765\u8d8a\u5f3a\uff0c\u800c\u7528\u6237\u7684\u4e0a\u624b\u6210\u672c\uff0c\u670d\u52a1\u5668\u6210\u672c\u5219\u4f1a\u8d8a\u6765\u8d8a\u4f4e\u3002"),(0,n.kt)("h2",{id:"\u51fd\u6570\u4e0d\u80fd\u505a\u4ec0\u4e48"},"\u51fd\u6570\u4e0d\u80fd\u505a\u4ec0\u4e48"),(0,n.kt)("p",null,"\u51fd\u6570\u7684\u67b6\u6784\u51b3\u5b9a\u4e86\uff0c\u6709\u4e9b\u9700\u6c42\u662f\u65e0\u6cd5\u652f\u6301\u7684\uff0c\u53e6\u5916\uff0c\u51fd\u6570\u548c\u5e94\u7528\u5728\u80fd\u529b\u4e0a\u8fd8\u662f\u6709\u4e00\u5b9a\u7684\u533a\u522b\u3002"),(0,n.kt)("p",null,"\u51fd\u6570\u4e0d\u9002\u7528\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u65f6\u95f4\u8d85\u8fc7\u51fd\u6570\u914d\u7f6e\u4e0b\u9650\u5236\u7684\uff08\u6700\u597d\u4e0d\u8d85\u8fc7 5s\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u72b6\u6001\uff0c\u5728\u672c\u5730\u5b58\u50a8\u6570\u636e\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u957f\u94fe\u63a5\uff0c\u6bd4\u5982 ws \u7b49"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u53f0\u4efb\u52a1\uff0c\u6709\u5927\u6570\u636e\u6267\u884c\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u591a\u8fdb\u7a0b\u901a\u4fe1\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u6587\u4ef6\u4e0a\u4f20\uff08\u6bd4\u5982\u7f51\u5173\u9650\u5236\u7684 2M \u4ee5\u4e0a\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u73af\u5883\u7684\uff0c\u6bd4\u5982 nginx \u914d\u7f6e\uff0cc++ \u5e93(c++ addon \u52a8\u6001\u94fe\u63a5\u5e93\u7b49)\uff0cpython \u7248\u672c\u4f9d\u8d56\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u91cf\u670d\u52a1\u7aef\u6e32\u67d3\uff08\u670d\u52a1\u7aef\u6e32\u67d3\u9700\u8981\u7f13\u5b58\uff0c\u4e0d\u662f\u5f88\u9002\u5408\u51fd\u6570\u573a\u666f\uff09")),(0,n.kt)("p",null,"\u4ee5\u4e0a\u7684",(0,n.kt)("strong",{parentName:"p"},"\u90e8\u5206"),"\u573a\u666f\uff0c\u53ef\u4ee5\u4f7f\u7528\u539f\u5e94\u7528\u6a21\u5f0f\u6765\u5f00\u53d1\uff0c\u7136\u540e\u7528 ",(0,n.kt)("a",{parentName:"p",href:"migrate_egg"},"\u73b0\u6709\u7684\u8fc1\u79fb\u65b9\u6848")," \u6765\u63a5\u5165 serverless \u5f39\u6027\u5bb9\u5668\u3002"),(0,n.kt)("h2",{id:"\u672f\u8bed\u63cf\u8ff0"},"\u672f\u8bed\u63cf\u8ff0"),(0,n.kt)("h3",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,n.kt)("p",null,"\u903b\u8f91\u610f\u4e49\u4e0a\u7684\u4e00\u6bb5\u4ee3\u7801\u7247\u6bb5\uff0c\u901a\u8fc7\u5e38\u89c1\u7684\u5165\u53e3\u6587\u4ef6\u5305\u88f9\u8d77\u6765\u6267\u884c\u3002\u51fd\u6570\u662f\u5355\u4e00\u94fe\u8def\uff0c\u5e76\u4e14\u65e0\u72b6\u6001\u7684\uff0c\u73b0\u5728\u5f88\u591a\u4eba\u8ba4\u4e3a\uff0cServerless = FaaS + BaaS \uff0c\u800c FaaS \u5219\u662f\u65e0\u72b6\u6001\u7684\u51fd\u6570\uff0cBaaS \u89e3\u51b3\u5e26\u72b6\u6001\u7684\u670d\u52a1\u3002"),(0,n.kt)("h3",{id:"\u51fd\u6570\u7ec4"},"\u51fd\u6570\u7ec4"),(0,n.kt)("p",null,"\u591a\u4e2a\u51fd\u6570\u805a\u5408\u5230\u4e00\u8d77\u7684\u903b\u8f91\u5206\u7ec4\u540d\uff0c\u5bf9\u5e94\u539f\u6709\u7684\u5e94\u7528\u6982\u5ff5\u3002"),(0,n.kt)("h3",{id:"\u89e6\u53d1\u5668"},"\u89e6\u53d1\u5668"),(0,n.kt)("p",null,"\u89e6\u53d1\u5668\uff0c\u4e5f\u53eb Event\uff08\u4e8b\u4ef6\uff09\uff0cTrigger \u7b49\uff0c\u7279\u6307\u89e6\u53d1\u51fd\u6570\u7684\u65b9\u5f0f\u3002\n\u4e0e\u4f20\u7edf\u7684\u5f00\u53d1\u7406\u5ff5\u4e0d\u540c\uff0c\u51fd\u6570\u4e0d\u9700\u8981\u81ea\u5df1\u542f\u52a8\u4e00\u4e2a\u670d\u52a1\u53bb\u76d1\u542c\u6570\u636e\uff0c\u800c\u662f\u901a\u8fc7\u7ed1\u5b9a\u4e00\u4e2a\uff08\u6216\u8005\u591a\u4e2a\uff09\u89e6\u53d1\u5668\uff0c\u6570\u636e\u662f\u901a\u8fc7\u7c7b\u4f3c\u4e8b\u4ef6\u89e6\u53d1\u7684\u673a\u5236\u6765\u8c03\u7528\u5230\u51fd\u6570\u3002"),(0,n.kt)("h3",{id:"\u51fd\u6570\u8fd0\u884c\u65f6"},"\u51fd\u6570\u8fd0\u884c\u65f6"),(0,n.kt)("p",null,"\u82f1\u6587\u53eb Runtime\uff0c\u5177\u4f53\u6307\u6267\u884c\u51fd\u6570\u7684\u73af\u5883\uff0c\u5177\u4f53\u5728\u5404\u4e2a\u5e73\u53f0\u53ef\u80fd\u662f\u955c\u50cf\uff0c\u4e5f\u53ef\u80fd\u662f Node.js \u4ee3\u7801\u5305\uff0c\u6bd4\u5982\u5e38\u89c1\u7684\u793e\u533a\u8fd0\u884c\u65f6\u6709 kubeless \u7b49\uff0c\u8be5\u4ee3\u7801\u5305\u4f1a\u5b9e\u73b0\u5bf9\u63a5\u5e73\u53f0\u7684\u5404\u79cd\u63a5\u53e3\uff0c\u5904\u7406\u5f02\u5e38\uff0c\u8f6c\u53d1\u65e5\u5fd7\u7b49\u80fd\u529b\u3002"),(0,n.kt)("h3",{id:"\u53d1\u5e03\u5e73\u53f0"},"\u53d1\u5e03\u5e73\u53f0"),(0,n.kt)("p",null,"\u51fd\u6570\u6700\u540e\u627f\u8f7d\u7684\u5e73\u53f0\uff0c\u73b0\u5728\u793e\u533a\u6700\u5e38\u89c1\u7684\u6709\u963f\u91cc\u4e91 FC \u3001\u817e\u8baf\u4e91 SCF\uff0cAWS \u7684 Lambda \u7b49\u7b49\u3002"),(0,n.kt)("h3",{id:"layer"},"Layer"),(0,n.kt)("p",null,"\u7531\u4e8e\u8fd0\u884c\u65f6\u7684\u4ee3\u7801\u6bd4\u8f83\u7b80\u5355\uff0c\u4e14\u9700\u8981\u4fdd\u8bc1\u7a33\u5b9a\u6027\u65e0\u6cd5\u7ecf\u5e38\u6027\u7684\u66f4\u65b0\uff0cLayer \u88ab\u8bbe\u8ba1\u51fa\u6765\u6269\u5c55\u8fd0\u884c\u65f6\u7684\u80fd\u529b\uff0c\u5e76\u4e14\u53ef\u4ee5\u7cbe\u7b80\u672c\u5730\u7684\u51fd\u6570\u4ee3\u7801\u91cf\uff08\u6709\u4e00\u4e9b\u5e73\u53f0\u9650\u5236\u4e86\u4e0a\u4f20\u538b\u7f29\u5305\u7684\u5927\u5c0f\uff09\u3002"))}d.isMDXComponent=!0}}]);