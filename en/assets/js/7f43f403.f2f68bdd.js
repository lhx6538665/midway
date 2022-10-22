"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const s={title:"\u90e8\u7f72"},i=void 0,o={unversionedId:"hooks/deploy",id:"hooks/deploy",title:"\u90e8\u7f72",description:"Midway Hooks supports Api Server and integration.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hooks/deploy.md",sourceDirName:"hooks",slug:"/hooks/deploy",permalink:"/en/docs/hooks/deploy",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/deploy.md",tags:[],version:"current",frontMatter:{title:"\u90e8\u7f72"},sidebar:"hooks",previous:{title:"\u524d\u7aef\u8bf7\u6c42\u5ba2\u6237\u7aef",permalink:"/en/docs/hooks/client"}},l={},d=[{value:"Api Server deployment",id:"api-server-deployment",level:2},{value:"Integrated deployment",id:"integrated-deployment",level:2},{value:"The front and back ends are deployed on the same server",id:"the-front-and-back-ends-are-deployed-on-the-same-server",level:3},{value:"Static resources are deployed to CDN, backend hosting HTML &amp; providing interfaces",id:"static-resources-are-deployed-to-cdn-backend-hosting-html--providing-interfaces",level:3},{value:"Specify a static resource public domain name",id:"specify-a-static-resource-public-domain-name",level:4},{value:"Deploy static files",id:"deploy-static-files",level:4},{value:"Static resources are deployed to CDN,HTML is hosted by a separate service (CDN / Nginx / etc.), and the backend only provides interfaces.",id:"static-resources-are-deployed-to-cdnhtml-is-hosted-by-a-separate-service-cdn--nginx--etc-and-the-backend-only-provides-interfaces",level:3},{value:"Full stack suite deployment guide",id:"full-stack-suite-deployment-guide",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Midway Hooks supports Api Server and integration."),(0,r.kt)("h2",{id:"api-server-deployment"},"Api Server deployment"),(0,r.kt)("p",null,"For more information about how to deploy Api Server, see ",(0,r.kt)("a",{parentName:"p",href:"https://midwayjs.org/docs/deployment"},"Start and deploy Api Server"),"."),(0,r.kt)("p",null,"If you use a single file deployment, you can refer to the example: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/hooks/blob/main/examples/api-bundle/readme.md"},"hooks-api-bundle-starter")),(0,r.kt)("h2",{id:"integrated-deployment"},"Integrated deployment"),(0,r.kt)("p",null,"The integrated construction product includes the front and back ends, which can be divided into the following categories according to the difficulty of deployment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The front and back ends are deployed on the same server, and the back end hosts HTML & static resources & provides interfaces"),(0,r.kt)("li",{parentName:"ul"},"Static resources are deployed to CDN, backend hosting HTML & providing interfaces"),(0,r.kt)("li",{parentName:"ul"},"Static resources are deployed to CDN,HTML is hosted by a separate service (CDN / Nginx / etc.), and the backend only provides interfaces.")),(0,r.kt)("p",null,"Next, I will introduce how the three deployment modes land, their advantages and existing problems."),(0,r.kt)("h3",{id:"the-front-and-back-ends-are-deployed-on-the-same-server"},"The front and back ends are deployed on the same server"),(0,r.kt)("p",null,"This is the default deployment mode for full stack suites."),(0,r.kt)("p",null,"Advantages: The simplest, upload the packaged product directly to the server, and provide services after startup\nWeaknesses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backend services need to process & send files"),(0,r.kt)("li",{parentName:"ul"},"Static resources are not located in CDN, and the access speed of different regions is unstable.")),(0,r.kt)("p",null,"The overall deployment architecture is shown in the figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01GYtN9n1T2tbEXWOwf_!!6000000002325-2-tps-2064-648.png",alt:null})),(0,r.kt)("h3",{id:"static-resources-are-deployed-to-cdn-backend-hosting-html--providing-interfaces"},"Static resources are deployed to CDN, backend hosting HTML & providing interfaces"),(0,r.kt)("p",null,"This is also the current front-end mainstream deployment mode."),(0,r.kt)("p",null,"Advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Static resources are hosted by CDN to ensure user access speed."),(0,r.kt)("li",{parentName:"ul"},"The back end hosts HTML to ensure that the returned HTML file is up to date")),(0,r.kt)("p",null,"Weaknesses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The backend still needs to host HTML, still needs to process & send files, and the page cannot be accessed if the service goes down.")),(0,r.kt)("p",null,"The overall access architecture is shown in the figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01ue3LJg1HeernvfxgQ_!!6000000000783-55-tps-267-367.svg",alt:null})),(0,r.kt)("h4",{id:"specify-a-static-resource-public-domain-name"},"Specify a static resource public domain name"),(0,r.kt)("p",null,"You can specify the public domain name of static resources by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"site. base")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"midway.config.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import react from '@vitejs/plugin-react';\nimport { defineConfig } from '@midwayjs/hooks-kit';\n\nexport default defineConfig ({\n  vite: {\n    plugins: [react()]\n    base: 'https://cdn.example.com',\n  },\n});\n")),(0,r.kt)("p",null,"When accessing the page, the static resource will point to the address of the CDN."),(0,r.kt)("h4",{id:"deploy-static-files"},"Deploy static files"),(0,r.kt)("p",null,"In a full stack suite project, the default build directory is dist, where ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/_clients")," is the frontend static resource directory."),(0,r.kt)("p",null,"As follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dist\n_client\n\u2502 \u251c\u2500\u2500 assets\n\u2502 \u2502 \u251c\u2500\u2500 index.85bb4f15.js\n\u2502 \u2502 \u2502 \u2502 \u2500\u2500 index.b779b14d.css\n\u2502 \u2502 \u2514\u2500\u2500 vendor.346bc0da.js\n\u2502 \u2502 \u2500\u2500 index.html\n\u2502 \u2502 \u2500\u2500 logo.png\n\u2502 \u2514\u2500\u2500 manifest.json\n_serve\n\u2502 \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 book.js\n\u251c\u2500\u2500 configuration.js\n\u251c\u2500\u2500 date.js\n\u251c\u2500\u2500 midway.config.js\n\u2514\u2500\u2500 star.js\n")),(0,r.kt)("p",null,"You need to upload the files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"_client")," directory to CDN. However, when you deploy the backend, the ",(0,r.kt)("inlineCode",{parentName:"p"},"_client/index.html")," file is retained for backend hosting."),(0,r.kt)("h3",{id:"static-resources-are-deployed-to-cdnhtml-is-hosted-by-a-separate-service-cdn--nginx--etc-and-the-backend-only-provides-interfaces"},"Static resources are deployed to CDN,HTML is hosted by a separate service (CDN / Nginx / etc.), and the backend only provides interfaces."),(0,r.kt)("p",null,"This is also the current mainstream deployment mode of the front end."),(0,r.kt)("p",null,"Advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The backend only provides API interfaces and does not need to process & send files"),(0,r.kt)("li",{parentName:"ul"},"Static resources are hosted by CDN to ensure user access speed."),(0,r.kt)("li",{parentName:"ul"},"HTML is hosted by a separate service, ensuring that the access page is the latest version, and the backend service downtime does not affect the page display."),(0,r.kt)("li",{parentName:"ul"},"The architecture can be expanded to add more nodes to cope with unexpected situations, such as adding gateway nodes in front of the back-end, switching to standby services when the back-end service is down, etc.")),(0,r.kt)("p",null,"Weaknesses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complex, high requirements for CI / CD assembly line and infrastructure.")),(0,r.kt)("p",null,"The overall access architecture is shown in the figure"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01i78JiC1yinvfLq84b_!!6000000006613-55-tps-323-367.svg",alt:null})),(0,r.kt)("p",null,"The deployment workflow is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN018oAQf71h1QxHtRHYY_!!6000000004217-2-tps-1728-1680.png",alt:null})),(0,r.kt)("h4",{id:"full-stack-suite-deployment-guide"},"Full stack suite deployment guide"),(0,r.kt)("p",null,"null``"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@midwayjs/hooks-kit';\n\nexport default defineConfig ({\n  static: false\n});\n")),(0,r.kt)("p",null,"In your CI / CD workflow, the following files need to be processed separately."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"index.html: Deploy to a separate managed service, such as Nginx / CDN, which is only responsible for static page rendering."),(0,r.kt)("li",{parentName:"ul"},"Static resources: Deploy to CDN, such as Aliyun OSS. This service can provide CDN acceleration for static resources."),(0,r.kt)("li",{parentName:"ul"},"Api service: deploy to your server")),(0,r.kt)("p",null,"The final domain name may be as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Index.html: ",(0,r.kt)("a",{parentName:"li",href:"https://example.com"},"https://example.com")),(0,r.kt)("li",{parentName:"ul"},"Static resources: ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.example.com"},"https://cdn.example.com")),(0,r.kt)("li",{parentName:"ul"},"Api service: ",(0,r.kt)("a",{parentName:"li",href:"https://api.example.com"},"https://api.example.com")," or ",(0,r.kt)("a",{parentName:"li",href:"https://example.com/api"},"https://example.com/api")," (reverse proxy needs to be set)")))}p.isMDXComponent=!0}}]);