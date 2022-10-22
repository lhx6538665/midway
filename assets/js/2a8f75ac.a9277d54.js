"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"OSS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09"},i=void 0,s={unversionedId:"serverless/aliyun_trigger_oss",id:"version-2.0.0/serverless/aliyun_trigger_oss",title:"OSS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09",description:"OSS \u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u8d44\u6e90\u6587\u4ef6\uff0c\u662f\u963f\u91cc\u4e91\u7684\u8d44\u6e90\u5b58\u50a8\u4ea7\u54c1\u3002 \u5f53 OSS \u4e2d\u6709\u6587\u4ef6\u521b\u5efa\uff0c\u66f4\u65b0\uff0c\u5bf9\u5e94\u7684\u51fd\u6570\u5c31\u4f1a\u88ab\u89e6\u53d1\u800c\u6267\u884c\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/aliyun_trigger_oss.md",sourceDirName:"serverless",slug:"/serverless/aliyun_trigger_oss",permalink:"/docs/2.0.0/serverless/aliyun_trigger_oss",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/aliyun_trigger_oss.md",tags:[],version:"2.0.0",frontMatter:{title:"OSS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09"},sidebar:"Serverless",previous:{title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09",permalink:"/docs/2.0.0/serverless/aliyun_trigger_timer"},next:{title:"MNS \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09",permalink:"/docs/2.0.0/serverless/aliyun_trigger_mns"}},o={},p=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"OSS \u89e6\u53d1\u5668\u914d\u7f6e",id:"oss-\u89e6\u53d1\u5668\u914d\u7f6e",level:2},{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OSS \u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u8d44\u6e90\u6587\u4ef6\uff0c\u662f\u963f\u91cc\u4e91\u7684\u8d44\u6e90\u5b58\u50a8\u4ea7\u54c1\u3002 \u5f53 OSS \u4e2d\u6709\u6587\u4ef6\u521b\u5efa\uff0c\u66f4\u65b0\uff0c\u5bf9\u5e94\u7684\u51fd\u6570\u5c31\u4f1a\u88ab\u89e6\u53d1\u800c\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context, FC } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloAliyunService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.OS, {\n    bucket: 'ossBucketName',\n    events: ['oss:ObjectCreated:*', 'oss:ObjectRemoved:DeleteObject'],\n    filter: {\n      prefix: 'filterdir/',\n      suffix: '.jpg',\n    },\n  })\n  async handleOSSEvent(event: FC.OSSEvent) {\n    // xxx\n  }\n}\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u540e\uff0c\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"oss-\u89e6\u53d1\u5668\u914d\u7f6e"},"OSS \u89e6\u53d1\u5668\u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bucket"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b58\u50a8\u7684 bucket \u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"events"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u51fd\u6570\u6267\u884c\u7684\u4e8b\u4ef6\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filter"),(0,a.kt)("td",{parentName:"tr",align:null},"{"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"prefix: string;\n\xa0 \xa0suffix: string;\n\xa0} | \u5bf9\u8c61\u8fc7\u6ee4\u53c2\u6570\uff0c\u6ee1\u8db3\u8fc7\u6ee4\u6761\u4ef6\u7684 \u5bf9\u8c61\u624d\u53ef\u4ee5\u89e6\u53d1\u51fd\u6570\uff0c\u5305\u542b\u4e00\u4e2a\u914d\u7f6e\u5c5e\u6027 key\uff0c\u8868\u793a\u8fc7\u6ee4\u5668\u652f\u6301\u8fc7\u6ee4\u7684\u5bf9\u8c61\u952e (key)\u3002 |\n| | | |"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u76d1\u542c\u5bf9\u8c61\u521b\u5efa\u548c\u5bf9\u8c61\u5220\u9664\u65f6\u7684\u4e8b\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(ServerlessTriggerType.OS, {\n  bucket: 'ossBucketName',\n  events: ['oss:ObjectCreated:*', 'oss:ObjectRemoved:DeleteObject'],\n  filter: {\n    prefix: 'filterdir/',\n    suffix: '.jpg',\n  },\n})\n")),(0,a.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,"OSS \u6d88\u606f\u8fd4\u56de\u7684\u7ed3\u6784\u5982\u4e0b\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"FC.OSSEvent")," \u7c7b\u578b\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [\n    {\n      "eventName": "ObjectCreated:PutObject",\n      "eventSource": "acs:oss",\n      "eventTime": "2017-04-21T12:46:37.000Z",\n      "eventVersion": "1.0",\n      "oss": {\n        "bucket": {\n          "arn": "acs:oss:cn-shanghai:123456789:bucketname",\n          "name": "testbucket",\n          "ownerIdentity": "123456789",\n          "virtualBucket": ""\n        },\n        "object": {\n          "deltaSize": 122539,\n          "eTag": "688A7BF4F233DC9C88A80BF985AB7329",\n          "key": "image/a.jpg",\n          "size": 122539\n        },\n        "ossSchemaVersion": "1.0",\n        "ruleId": "9adac8e253828f4f7c0466d941fa3db81161e853"\n      },\n      "region": "cn-shanghai",\n      "requestParameters": {\n        "sourceIPAddress": "140.205.128.221"\n      },\n      "responseElements": {\n        "requestId": "58F9FF2D3DF792092E12044C"\n      },\n      "userIdentity": {\n        "principalId": "123456789"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u7684\u51fd\u6570\u672c\u5730\u65e0\u6cd5\u4f7f\u7528 dev \u5f00\u53d1\uff0c\u53ea\u80fd\u901a\u8fc7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u548c HTTP \u6d4b\u8bd5\u4e0d\u540c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u83b7\u53d6\u6574\u4e2a\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u8c03\u7528\u5230\u7279\u5b9a\u65b9\u6cd5\u6765\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createOSSEvent")," \u65b9\u6cd5\u5feb\u901f\u521b\u5efa\u5e73\u53f0\u4f20\u5165\u7684\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloAliyunService } from '../src/function/hello_aliyun';\nimport { createOSSEvent, createInitializeContext } from '@midwayjs/serverless-fc-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n  let instance: HelloAliyunService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(),\n    });\n    instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from oss trigger', async () => {\n    expect(await instance.handleOSSEvent(createOSSEvent())).toEqual('hello world');\n  });\n});\n")),(0,a.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u4e00\u4e2a bucket \u7684\u4e00\u4e2a\u524d\u7f00\u4e0b\u53ea\u80fd\u652f\u6301\u914d\u7f6e\u4e00\u4e2a\u89e6\u53d1\u5668\uff0c\u5982\u679c\u914d\u7f6e\u591a\u4e2a\u4f1a\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"message: event source 'oss' returned error: Cannot specify overlapping prefix and suffix with same event type."),"\xa0 \u7684\u62a5\u9519")))}u.isMDXComponent=!0}}]);