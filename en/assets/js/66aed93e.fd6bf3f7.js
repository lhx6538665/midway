"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Create the first application",l={unversionedId:"quickstart",id:"quickstart",title:"Create the first application",description:"Technical selection",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/en/docs/quickstart",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Upgrade to 3.x",permalink:"/en/docs/upgrade_v3"},next:{title:"Routing and controller",permalink:"/en/docs/controller"}},s={},p=[{value:"Technical selection",id:"technical-selection",level:2},{value:"Fast initialization",id:"fast-initialization",level:2},{value:"Development habits",id:"development-habits",level:2},{value:"Web framework selection",id:"web-framework-selection",level:2},{value:"Start the project",id:"start-the-project",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Python compilation error",id:"python-compilation-error",level:3},{value:"Deprecated tips",id:"deprecated-tips",level:3},{value:"windows eslint error",id:"windows-eslint-error",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-the-first-application"},"Create the first application"),(0,r.kt)("h2",{id:"technical-selection"},"Technical selection"),(0,r.kt)("p",null,"Midway has multiple sets of technical solutions to choose from. We will distinguish them by deployment:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Technical selection"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pure Node.js project"),(0,r.kt)("td",{parentName:"tr",align:null},"Midway traditional project, pure Node.js research and development, modules represented by ",(0,r.kt)("inlineCode",{parentName:"td"},"@midwayjs/koa"),", supports back-end projects in the most complete way, and uses ",(0,r.kt)("strong",{parentName:"td"},"dependency injection + Class")," as the technology stack.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Serverless project"),(0,r.kt)("td",{parentName:"tr",align:null},"Midway is a technology stack developed separately for Serverless scenarios. Modules represented by ",(0,r.kt)("inlineCode",{parentName:"td"},"@midwayjs/faas")," are connected to different Serverless platforms in a lightweight way.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integration project"),(0,r.kt)("td",{parentName:"tr",align:null},"Midway's innovative technology scheme adopts the integrated development method of front and back ends to save the time of front and back ends. For modules represented by ",(0,r.kt)("inlineCode",{parentName:"td"},"@midwayjs/hooks"),", ",(0,r.kt)("strong",{parentName:"td"},"functional")," is used as the main coding paradigm.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This chapter and subsequent documents will use the ",(0,r.kt)("strong",{parentName:"p"},"pure Node.js project")," as the basic example. If you need to use the Serverless project, please jump to the ",(0,r.kt)("a",{parentName:"p",href:"serverless/serverless_intro"},"Serverless"),". If you need to learn about the integration project, please visit ",(0,r.kt)("a",{parentName:"p",href:"hooks/intro"},"integration"),".")),(0,r.kt)("h2",{id:"fast-initialization"},"Fast initialization"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm init midway")," to view the complete list of scaffolds. After a project is selected, Midway automatically creates sample directories, codes, and installation dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway\n")),(0,r.kt)("p",null,"For a v3 project, select ",(0,r.kt)("inlineCode",{parentName:"p"},"koa-v3"),"."),(0,r.kt)("p",null,"The example will create a directory structure similar to the following, where the simplest Midway project example is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src                            ## midway project source code\n\u2502   \u2514\u2500\u2500 controller                 ## Web Controller Directory\n\u2502       \u2514\u2500\u2500 home.controller.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"The whole project includes some of the most basic files and directories."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src")," is the source directory of the entire Midway project."),(0,r.kt)("li",{parentName:"ul"},"The test directory of the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," project. All the test files are available here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package the")," package management profile of the. json Node.js project Foundation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," Compile Configuration File TypeScript")),(0,r.kt)("p",null,"In addition to the entire directory, we have some other directories, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"controller")," directory."),(0,r.kt)("h2",{id:"development-habits"},"Development habits"),(0,r.kt)("p",null,"Midway has no special restrictions on directories, but we will follow some simple development habits and classify some commonly used files into some default folders."),(0,r.kt)("p",null,"The following ts source code folders are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory."),(0,r.kt)("p",null,"Commonly used are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controller")," Web Controller directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"middleware")," middleware directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aspect")," interceptor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service")," service logical directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"model")," database entity directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config")),(0,r.kt)("li",{parentName:"ul"},"The directory where the ",(0,r.kt)("inlineCode",{parentName:"li"},"util")," tool class is stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decorator")," custom decorator directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface.ts")," definition file for ts business")),(0,r.kt)("p",null,"With the emergence of different scenarios, directory habits will continue to increase, and the specific directory content will be reflected in different component functions."),(0,r.kt)("h2",{id:"web-framework-selection"},"Web framework selection"),(0,r.kt)("p",null,"Midway was designed to be compatible with a variety of upper-level frameworks, such as common ",(0,r.kt)("inlineCode",{parentName:"p"},"Express"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Koa")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EggJS"),"."),(0,r.kt)("p",null,"Starting with v3, we use Koa to demonstrate the basic example."),(0,r.kt)("p",null,"These upper-level frameworks are provided in Midway with component capabilities, and all of them can use the decorator capabilities provided by Midway, but Midway will not encapsulate specific capabilities, such as the plugin system of Egg.js, or the middleware capabilities of Express, If you are familiar with one of these frameworks, or want to use the capabilities of a particular framework, you can choose it as your workhorse web framework."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"By default, Koa is a Express alternative framework, which supports asynchronous middleware and other capabilities by default, and is the second most common Node.js Web framework.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"Egg.js is a relatively commonly used Web framework in China, including some default plug-ins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"Express is a well-known node.js minimalist Web framework.  It's a well-tested, productive library with a lot of community resources.")))),(0,r.kt)("p",null,"If you want to replace the default Web framework, please refer to the corresponding ",(0,r.kt)("a",{parentName:"p",href:"extensions/egg"},"egg")," or ",(0,r.kt)("a",{parentName:"p",href:"extensions/express"},"express")," section."),(0,r.kt)("h2",{id:"start-the-project"},"Start the project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n$ open http://localhost:7001\n")),(0,r.kt)("p",null,"Midway will start the HTTP server, open the browser, access ",(0,r.kt)("inlineCode",{parentName:"p"},"http:// 127.0.0.1:7001"),", and the browser will print out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello midwayjs!"),"  The information."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01KoUxO91jydMw41Vv4_!!6000000004617-2-tps-1268-768.png",alt:"image.png"})),(0,r.kt)("p",null,"If you need to modify the development startup port, you can modify it in the scripts paragraph of the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", such as 6001:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'"scripts ": {\n  //...\n  "dev": "cross-env NODE_ENV=local midway-bin dev --ts --port=6001",\n},\n')),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"python-compilation-error"},"Python compilation error"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Executing ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install/I")," command under node15/npm7 to install dependency may cause Python compilation errors")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Projects created using npm init midway will automatically install dependencies without this problem.")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Solution"),": Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," parameter when run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i"),".\n",(0,r.kt)("strong",{parentName:"p"},"Reason"),": The test framework Jest relies on jsdom. Npm7 automatically installs the canvas package that its peerDependencies depends on. The installation and compilation of canvas requires a python3 environment.")),(0,r.kt)("h3",{id:"deprecated-tips"},"Deprecated tips"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},"there will be npm warning: deprecated output when installing dependencies")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Cause"),": The test framework Jest relies on jsdom, which relies on obsolete module request. Jsdom has not yet resolved this problem. We will continue to track related issues. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/issues/2792"},"https:// github.com/jsdom/jsdom/issues/2792"),".")),(0,r.kt)("h3",{id:"windows-eslint-error"},"windows eslint error"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ol",{parentName:"admonition",start:3},(0,r.kt)("li",{parentName:"ol"},"Windows may encounter the problem of eslint error. Please pay attention to ",(0,r.kt)("a",{parentName:"li",href:"faq/git_problem#XCAgm"},"the problem of line wrapping under windows"),"."))))}c.isMDXComponent=!0}}]);