"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||s[g]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u8c03\u8bd5"},o=void 0,p={unversionedId:"hooks/debug",id:"hooks/debug",title:"\u8c03\u8bd5",description:"\u5f97\u76ca\u4e8e\u7f16\u8f91\u5668\u7684\u652f\u6301\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u7684\u5728\u672c\u5730\u8c03\u8bd5\u5e94\u7528\u3002",source:"@site/docs/hooks/debug.md",sourceDirName:"hooks",slug:"/hooks/debug",permalink:"/docs/hooks/debug",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/debug.md",tags:[],version:"current",frontMatter:{title:"\u8c03\u8bd5"}},c={},l=[{value:"VSCode",id:"vscode",level:2},{value:"JavaScript Debug Terminal",id:"javascript-debug-terminal",level:3},{value:"Debug Scripts",id:"debug-scripts",level:3},{value:"Jetbrains (WebStorm/IDEA...)",id:"jetbrains-webstormidea",level:2}],d={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f97\u76ca\u4e8e\u7f16\u8f91\u5668\u7684\u652f\u6301\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u7684\u5728\u672c\u5730\u8c03\u8bd5\u5e94\u7528\u3002"),(0,a.kt)("h2",{id:"vscode"},"VSCode"),(0,a.kt)("h3",{id:"javascript-debug-terminal"},"JavaScript Debug Terminal"),(0,a.kt)("p",null,"\u5728 VSCode \u4e2d\u521b\u5efa JavaScript Debug Terminal\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1622789601759-d2634846-49f7-4487-be6f-0dc9e5f80082.png#clientId=u3a1b2f6d-ebe0-4&from=paste&height=192&id=p5BOe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=192&originWidth=375&originalType=binary&size=31856&status=done&style=none&taskId=u7286159b-9369-4d17-8a6a-c43a6f52556&width=375",alt:"image.png"})),(0,a.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c\u547d\u4ee4\uff08\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),"\uff09\uff0c\u5c06\u81ea\u52a8\u542f\u7528\u8c03\u8bd5\u6a21\u5f0f\u3002"),(0,a.kt)("h3",{id:"debug-scripts"},"Debug Scripts"),(0,a.kt)("p",null,"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff0c\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," \u4e0a\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," \u6309\u94ae"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1622789617835-64b2099a-6b94-41c4-81fa-4f0bb0763ebb.png#clientId=u7ee4f0d0-4c66-4&from=paste&height=225&id=u459844f5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=225&originWidth=565&originalType=binary&size=26636&status=done&style=none&taskId=u3838b111-c93e-41e0-81ce-01c1bdd6ad4&width=565",alt:"image.png"})),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," \u547d\u4ee4\uff0c\u65e2\u53ef\u6b63\u5e38\u7684\u542f\u52a8\u8c03\u8bd5\u6a21\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1622789623261-57851b50-421e-45fa-9dd9-95ac7d48776e.png#clientId=u7ee4f0d0-4c66-4&from=paste&height=170&id=ue315d401&margin=%5Bobject%20Object%5D&name=image.png&originHeight=170&originWidth=427&originalType=binary&size=19905&status=done&style=none&taskId=u8b079aa2-8376-4014-b48b-ed27ef66da6&width=427",alt:"image.png"})),(0,a.kt)("h2",{id:"jetbrains-webstormidea"},"Jetbrains (WebStorm/IDEA...)"),(0,a.kt)("p",null,"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff0c\u9009\u62e9\u4f60\u8981\u6267\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," \uff0c\u5e76\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," \u6309\u94ae\uff0c\u5373\u53ef\u542f\u52a8\u672c\u5730\u8c03\u8bd5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1622789628840-eb403a2a-a864-4fd6-8f57-3f576c9b3417.png#clientId=u7ee4f0d0-4c66-4&from=paste&height=176&id=uc2a06ce8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=176&originWidth=548&originalType=binary&size=28656&status=done&style=none&taskId=ucb4c5c34-6e56-47c9-a724-4ed700dce9d&width=548",alt:"image.png"})))}s.isMDXComponent=!0}}]);