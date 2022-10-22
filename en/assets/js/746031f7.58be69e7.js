"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u81ea\u5b9a\u4e49\u524d\u7aef SDK"},s=void 0,i={unversionedId:"hooks/hooks_custom_request",id:"version-2.0.0/hooks/hooks_custom_request",title:"\u81ea\u5b9a\u4e49\u524d\u7aef SDK",description:"Midway Hooks \u9ed8\u8ba4\u4f7f\u7528\u6d4f\u89c8\u5668\u6307\u5b9a\u7684 fetch \u53d1\u9001\u8bf7\u6c42\uff0c\u4e3a\u4e86\u652f\u6301\u4e0d\u540c\u573a\u666f\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8bf7\u6c42\u51fd\u6570\u3002",source:"@site/versioned_docs/version-2.0.0/hooks/hooks_custom_request.md",sourceDirName:"hooks",slug:"/hooks/hooks_custom_request",permalink:"/en/docs/2.0.0/hooks/hooks_custom_request",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/hooks/hooks_custom_request.md",tags:[],version:"2.0.0",frontMatter:{title:"\u81ea\u5b9a\u4e49\u524d\u7aef SDK"},sidebar:"hooks",previous:{title:"\u9879\u76ee\u521d\u59cb\u5316",permalink:"/en/docs/2.0.0/hooks/hooks_create"},next:{title:"OSS \u6587\u4ef6\u4e0a\u4f20",permalink:"/en/docs/2.0.0/hooks/oss_upload"}},c={},l=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:5}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Midway Hooks \u9ed8\u8ba4\u4f7f\u7528\u6d4f\u89c8\u5668\u6307\u5b9a\u7684 fetch \u53d1\u9001\u8bf7\u6c42\uff0c\u4e3a\u4e86\u652f\u6301\u4e0d\u540c\u573a\u666f\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8bf7\u6c42\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff0c\u4f60\u5e0c\u671b\u4f7f\u7528 Axios \u4f5c\u4e3a HTTP \u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\uff0c\u53ea\u9700\u8981\u5728\u524d\u7aef\u9875\u9762\u5165\u53e3\u5904\uff0c\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defaults, ApiParam } from '@midwayjs/hooks/request';\nimport axios from 'axios';\n\ndefaults.request = async (param: ApiParam) => {\n  const resp = await axios(params);\n  return resp.data;\n};\n")),(0,o.kt)("h5",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("p",null,"\u5173\u4e8e\u5f00\u53d1\u8005\u5b9e\u73b0\u7684\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u60c5\u51b5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u51fd\u6570\u5bf9\u6240\u6709\u8bf7\u6c42\u751f\u6548\uff0c\u91cd\u590d\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"defaults.request")," \u65b9\u6cd5\uff0c\u4f1a\u8986\u76d6\u4e4b\u524d\u7684\u8bbe\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5e94\u8be5\u662f\u8c03\u7528\u7684\u63a5\u53e3\u8fd4\u56de\u503c\uff0c\u50cf ",(0,o.kt)("inlineCode",{parentName:"li"},"axios")," \u8fd9\u79cd\u5bf9\u54cd\u5e94\u81ea\u884c\u5305\u88c5\u7684\uff0c\u9700\u8981\u624b\u52a8\u89e3\u6790\u51fa\u63a5\u53e3\u7684\u8fd4\u56de\u503c")))}p.isMDXComponent=!0}}]);