"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={},i="I18n",o={unversionedId:"extensions/i18n",id:"extensions/i18n",title:"I18n",description:"Midway provides a multi-language component that allows the business to quickly specify different languages and display different texts. It can also be used in HTTP scenarios with request parameters and request first-class methods.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/i18n.md",sourceDirName:"extensions",slug:"/extensions/i18n",permalink:"/en/docs/extensions/i18n",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/i18n.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"HTTP request",permalink:"/en/docs/extensions/axios"},next:{title:"Information viewing",permalink:"/en/docs/extensions/info"}},p={},s=[{value:"Installation Components",id:"installation-components",level:2},{value:"Use components",id:"use-components",level:2},{value:"Use",id:"use",level:2},{value:"Configure multilingual copy",id:"configure-multilingual-copy",level:2},{value:"Multilingual copywriting subgroup",id:"multilingual-copywriting-subgroup",level:2},{value:"Multilingual copy format",id:"multilingual-copy-format",level:2},{value:"null",id:"null",level:2},{value:"Specify the current language through parameters",id:"specify-the-current-language-through-parameters",level:2},{value:"Set language manually",id:"set-language-manually",level:2},{value:"Language selection priority",id:"language-selection-priority",level:2},{value:"About Language Case",id:"about-language-case",level:2},{value:"Used in View",id:"used-in-view",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Default configuration",id:"default-configuration",level:3},{value:"Write back Cookie",id:"write-back-cookie",level:3},{value:"Request resolution configuration",id:"request-resolution-configuration",level:3},{value:"Common language",id:"common-language",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"i18n"},"I18n"),(0,l.kt)("p",null,"Midway provides a multi-language component that allows the business to quickly specify different languages and display different texts. It can also be used in HTTP scenarios with request parameters and request first-class methods."),(0,l.kt)("p",null,"Related information:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contains independent main frame"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("h2",{id:"installation-components"},"Installation Components"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/i18n@3 --save\n")),(0,l.kt)("p",null,"Or reinstall the following dependencies in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies ": {\n    "@midwayjs/i18n": "^3.0.0",\n    // ...\n  },\n}\n')),(0,l.kt)("h2",{id:"use-components"},"Use components"),(0,l.kt)("p",null,"Configure the i18n component into the code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as i18n from '@midwayjs/i18n';\n\n@Configuration ({\n  imports: [\n    // ...\n    i18n\n  ]\n})\nexport class MainConfiguration {\n  //...\n}\n")),(0,l.kt)("h2",{id:"use"},"Use"),(0,l.kt)("p",null,"The component provides ",(0,l.kt)("inlineCode",{parentName:"p"},"MidwayI18nService")," services for translating multilingual text."),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"translate")," method, pass in different text keywords and parameters to return text content in different languages."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/')\nexport class UserController {\n\n  @Inject()\n  i18nService: MidwayI18nService;\n\n  @Get('/')\n  async index(@Query('username') username: string) {\n    return this.i18nService.translate('HELLO_MESSAGE', {\n      args: {\n        username\n      },\n    });\n  }\n}\n")),(0,l.kt)("h2",{id:"configure-multilingual-copy"},"Configure multilingual copy"),(0,l.kt)("p",null,"You can configure it directly in the configuration file, but in most cases, there will be a lot of copy, and sometimes it may even be on remote services. Direct configuration is not realistic at this time."),(0,l.kt)("p",null,"Generally speaking, we will put the copy into a copy configuration directory, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"src/locales"),"."),(0,l.kt)("p",null,"null``"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 src\n\u2502 \u251c\u2500\u2500 locales\n| \u2502 \u2502 \u2500\u2500 en_US.json\n| \u2502 \u01d0 \u2500\u2500 zh_CN.json\n\u2502 \u2514\u2500\u2500 controller\n\u2502 \u2514\u2500\u2500 home.controller.ts\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,l.kt)("p",null,"Two multi-language files, ",(0,l.kt)("inlineCode",{parentName:"p"},"en_US.json")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zh_CN.json"),", represent English and Chinese, respectively."),(0,l.kt)("p",null,"The contents of the documents are as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// src/locales/en_US.json\n{\n  "hello": "Hello {username} ",\n  "email": "email id ",\n  "login": "login account ",\n  "createdAt": "register date"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// src/locales/zh_CN.json\n{\n  "hello": "hello {username}",\n  "email": "email",\n  "login": "account",\n  "createdAt": "Registration Time"\n}\n')),(0,l.kt)("p",null,"Each line has a string pair, which is a standard JSON format. You can also use js/ts files. The curly brackets are filled with replaceable parameters."),(0,l.kt)("p",null,"At the same time, you need to add these two JSON to the configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    // Put your translated text here\n    localeTable: {\n      en_US: require('../locale/en_US')\n      zh_CN: require('../locale/zh_CN')\n    },\n  }\n}\n")),(0,l.kt)("p",null,"In this way, it can be used. The output is as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"this.i18nService.translate('hello', {\n  args: {\n    username: 'harry',\n  },\n  locale: 'en_US',\n});\n\n// output: Hello harry.\n\nthis.i18nService.translate('hello', {\n  args: {\n    username: 'harry',\n  },\n  locale: 'zh_CN',\n});\n\n// output: hello harry.\n\n")),(0,l.kt)("h2",{id:"multilingual-copywriting-subgroup"},"Multilingual copywriting subgroup"),(0,l.kt)("p",null,"By default, the multilingual copy configured by the user is in a default ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," group, and the actual group is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    // Put your translated text here\n    localeTable: {\n      En_US: {\n        null\n      },\n      null\n        default: require('../locale/zh_CN')\n      }\n    },\n  }\n}\n")),(0,l.kt)("p",null,"The advantage of this is that in other components or business codes, we can also use different group names to add other multilingual texts."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    // Put your translated text here\n    localeTable: {\n      En_US: {\n        default: require('../locale/en_US')\n        user: require('../locale/user_en_US')\n      },\n      Z_CN: {\n        default: require('../locale/zh_CN')\n        user: require('../locale/user_zh_CN')\n      }\n    },\n  }\n}\n")),(0,l.kt)("p",null,"In the code, if you call a different group, you need to specify the group parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"this.i18nService.translate('user.hello', {\n  args: {\n    username: 'harry',\n  },\n  group: 'user', // Specify other groups\n  locale: 'en_US',\n});\n\n")),(0,l.kt)("h2",{id:"multilingual-copy-format"},"Multilingual copy format"),(0,l.kt)("p",null,"null````"),(0,l.kt)("p",null,"The object form is as follows, using curly braces as placeholders."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello {username}\n")),(0,l.kt)("p",null,"null"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"async index(@Query('username') username: string) {\n  return this.i18nService.translate('hello', {\n    args: {\n      username\n    },\n  });\n}\n")),(0,l.kt)("p",null,"The array form is as follows, using numbers as placeholders."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello {0}\n")),(0,l.kt)("p",null,"When used, it is passed through configuration, and the format is in the form of an array, overwriting the numeric variables in the order of the array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"async index(@Query('username') username: string) {\n  return this.i18nService.translate('hello', {\n    args: [username]\n  });\n}\n")),(0,l.kt)("h2",{id:"null"},"null"),(0,l.kt)("p",null,"Sometimes, multilingual copywriting may be placed remotely, such as databases, etc., and we can add them dynamically through ",(0,l.kt)("inlineCode",{parentName:"p"},"addLocale")," methods."),(0,l.kt)("p",null,"For example, after the configuration is loaded, before the code is used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\n// ...\n@Configuration ({\n  imports: [\n    koa\n    i18n\n  ]\n})\nexport class AutoConfiguration {\n\n  @Inject()\n  i18nService: MidwayI18nService;\n\n  null\n    this.i18nService.addLocale('zh_TW', {\n      Hello: 'Hello,{username} Beautiful World'\n    });\n  }\n\n\n  // ...\n}\n")),(0,l.kt)("p",null,"It can be used in code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"async index(@Query('username') username: string) {\n  return this.i18nService.translate('hello', {\n    args: [username]\n    locale: 'zh_TW'\n  });\n}\n")),(0,l.kt)("h2",{id:"specify-the-current-language-through-parameters"},"Specify the current language through parameters"),(0,l.kt)("p",null,"In general, the default language is ",(0,l.kt)("inlineCode",{parentName:"p"},"en_US"),". If you need to manually specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"locale")," parameter for each call, it is not reasonable. In the HTTP scenario, we provide the ability to specify the current language through parameters."),(0,l.kt)("p",null,"By default, you can specify URL Query,Cookie, and Header."),(0,l.kt)("p",null,"Priority from top to bottom:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"query: /?locale=en-US"),(0,l.kt)("li",{parentName:"ul"},"cookie: locale=zh-TW"),(0,l.kt)("li",{parentName:"ul"},"header: Accept-Language: zh-CN,zh;q=0.5")),(0,l.kt)("p",null,"After these parameters are passed, the multilingual data will be automatically saved to the current user's Cookie, and the next request will directly use the set language."),(0,l.kt)("h2",{id:"set-language-manually"},"Set language manually"),(0,l.kt)("p",null,"The current language can be set by calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"saveRequestLocale"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"async index() {\n  // ...\n  this.i18nService.saveRequestLocale('zh_CN');\n}\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"writeCookie")," configuration is turned on, the settings will be saved to the current user's Cookie and will be used in the next request."),(0,l.kt)("h2",{id:"language-selection-priority"},"Language selection priority"),(0,l.kt)("p",null,"These multiple ways of setting up languages have different priorities, from high to low:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"The language explicitly specified by the ",(0,l.kt)("inlineCode",{parentName:"li"},"i18nService.translate")," method"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"Languages set by other decorators, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"@Validate")," the parameters of the decorator (essentially calling the ",(0,l.kt)("inlineCode",{parentName:"li"},"i18nService.translate")," method)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:3},(0,l.kt)("li",{parentName:"ol"},"The current language directly set through the ",(0,l.kt)("inlineCode",{parentName:"li"},"saveRequestLocale")," API"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:4},(0,l.kt)("li",{parentName:"ol"},"Language set by browser Query,Cookie and Header (essentially, ",(0,l.kt)("inlineCode",{parentName:"li"},"saveRequestLocale")," is called)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:5},(0,l.kt)("li",{parentName:"ol"},"default language in i18n component configuration")))),(0,l.kt)("h2",{id:"about-language-case"},"About Language Case"),(0,l.kt)("p",null,"Inside the code, we will replace all multilingual, fallback rules, written text strings, and returned locale results with the following rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Use the middle dash instead of the underscore"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"Use lowercase instead of uppercase")))),(0,l.kt)("p",null,"All ",(0,l.kt)("inlineCode",{parentName:"p"},"en_US")," changes to ",(0,l.kt)("inlineCode",{parentName:"p"},"en-us")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zh_CN")," changes to ",(0,l.kt)("inlineCode",{parentName:"p"},"zh-cn"),"."),(0,l.kt)("p",null,"This will safely adapt URL and Cookie."),(0,l.kt)("h2",{id:"used-in-view"},"Used in View"),(0,l.kt)("p",null,"In the Web type framework, we add locals variable support by default, which can be used in the template engine."),(0,l.kt)("p",null,"Assuming that the template engine we use is ",(0,l.kt)("a",{parentName:"p",href:"./render"},"Nunjucks"),", it can be directly referenced to the ",(0,l.kt)("inlineCode",{parentName:"p"},"i18n")," method."),(0,l.kt)("p",null,"The multilingual copy is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hello": "Hello {username} ",\n}\n')),(0,l.kt)("p",null,"The template is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<span>{{ i18n('hello', user) }}</span>\n")),(0,l.kt)("p",null,"Examples are as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\n@Controller('/')\nexport class UserController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async index() {\n    await this.ctx.render('index', {\n      // Note that this is the entire object passed to the template\n      user: {\n        username: 'harry',\n      }\n    });\n  }\nnull\n")),(0,l.kt)("p",null,"The i18n method is defined as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function i18n(templateName: string, args: Record<string, any>) {\n  // ...\n}\n")),(0,l.kt)("p",null,"The method name can be modified by configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    localsField: 'i18n',\n  }\n}\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"default-configuration"},"Default configuration"),(0,l.kt)("p",null,"In most cases, you only need to add your own multilingual translation ",(0,l.kt)("inlineCode",{parentName:"p"},"localeTable")," the configuration."),(0,l.kt)("p",null,"The following is the complete configuration, which you can find in the configuration definition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    // Default language \"en_US\"\n    defaultLocale: 'en_US',\n\n    // Put your translated text here\n    localeTable: {\n      En_US: {\n        // group name\n        default: {\n          // hello: 'hello'\n        }\n      },\n      Z_CN: {\n        // group name\n        default: {\n          // hello: 'hello'\n        }\n      null\n    },\n\n    // Language mapping, you can use * to match\n    fallbacks: {\n      // 'en_* ': ' en_US',\n      // pt: 'pt-BR',\n    },\n    // Whether to write the request parameter to the cookie\n    writeCookie: true\n    resolver: {\n      // url query parameter, default is \"locale\"\n      queryField: 'locale',\n      cookieField: {\n        // The key in Cookie is \"locale\" by default\"\n        fieldName: 'locale',\n        // Cookie domain name, which is empty by default, indicates that the current domain name is valid.\n        cookieDomain: '',\n        // The default expiration time of the cookie. Default is one year.\n        cookieMaxAge: FORMAT.MS.ONE_YEAR\n      },\n    },\n    null\n  }\n}\n")),(0,l.kt)("h3",{id:"write-back-cookie"},"Write back Cookie"),(0,l.kt)("p",null,"By default, the multilingual component will write back the current user's language to the Cookie to avoid searching for the next request to improve performance. We can turn off this behavior by configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    writeCookie: false\n  }\nnull\n")),(0,l.kt)("h3",{id:"request-resolution-configuration"},"Request resolution configuration"),(0,l.kt)("p",null,"In the HTTP scenario, we provide the ability to specify the current language through parameters."),(0,l.kt)("p",null,"By default, components are found through the fields below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"locale")," field of query"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"locale")," field of cookie"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Accept-Language")," of header")),(0,l.kt)("p",null,"We can modify the fields of the query by configuration."),(0,l.kt)("p",null,"For example, modify the fields of Query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    resolver: {\n      queryField: 'abc'\n    },\n  }\n}\n")),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"/?abc = en-US")," to request language changes."),(0,l.kt)("p",null,"If you do not want to set the language by request, you can turn off the entire ",(0,l.kt)("inlineCode",{parentName:"p"},"resolver")," parsing and write-back to Cookie will stop at the same time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  I18n: {\n    null\n  }\n}\n")),(0,l.kt)("h2",{id:"common-language"},"Common language"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Language"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Language package name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Arabia"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ar_EG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Armenia"),(0,l.kt)("td",{parentName:"tr",align:"left"},"hy_AM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Bulgarian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bg_BG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Catalan"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ca_ES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Czech"),(0,l.kt)("td",{parentName:"tr",align:"left"},"cs_CZ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Danish"),(0,l.kt)("td",{parentName:"tr",align:"left"},"da_DK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"German"),(0,l.kt)("td",{parentName:"tr",align:"left"},"de_DE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Greek"),(0,l.kt)("td",{parentName:"tr",align:"left"},"el_GR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"English"),(0,l.kt)("td",{parentName:"tr",align:"left"},"en_GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"English (American)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"en_US")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Spanish"),(0,l.kt)("td",{parentName:"tr",align:"left"},"es_ES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Estonian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"et_EE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Persian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fa_IR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Finnish"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fi_FI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"French (Belgium)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fr_BE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"French"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fr_FR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hebrew"),(0,l.kt)("td",{parentName:"tr",align:"left"},"He_IL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hindi"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hi_IN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Croatian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"hr_HR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hungary"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hu_HU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Icelandic"),(0,l.kt)("td",{parentName:"tr",align:"left"},"is_IS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Indonesian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id_ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Italian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"it_IT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Japanese"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Georgian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ka_GE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Kannada"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Kn_IN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Korean/Korean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ko_KR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Kurdish"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ku_IQ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Latvian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"lv_LV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Malay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ms_MY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Mongolian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"mn_MN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Norway"),(0,l.kt)("td",{parentName:"tr",align:"left"},"nb_NO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Nepali"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ne_NP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Dutch (Belgium)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"nl_BE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Dutch"),(0,l.kt)("td",{parentName:"tr",align:"left"},"nl_NL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Polish"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pl_PL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Portuguese (Brazil)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pt_BR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Portuguese"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pt_PT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Slovak"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sk_SK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Serbia"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sr_RS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Slovenia"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sl_SI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Swedish"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sv_SE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Tamil"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TA_IN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Thai"),(0,l.kt)("td",{parentName:"tr",align:"left"},"th_TH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Turkish"),(0,l.kt)("td",{parentName:"tr",align:"left"},"tr_TR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Romanian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RO_RO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Russian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ru_RU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Ukrainian"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uk_UA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Vietnamese"),(0,l.kt)("td",{parentName:"tr",align:"left"},"vi_VN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Simplified Chinese"),(0,l.kt)("td",{parentName:"tr",align:"left"},"zh_CN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Traditional Chinese"),(0,l.kt)("td",{parentName:"tr",align:"left"},"zh_TW")))))}d.isMDXComponent=!0}}]);