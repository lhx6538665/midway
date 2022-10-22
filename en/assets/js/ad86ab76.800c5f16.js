"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="MikroORM",l={unversionedId:"extensions/mikro",id:"extensions/mikro",title:"MikroORM",description:"This section describes how users use MikroORM in midway.  MikroORM is the TypeScript ORM of Node.js based on data mapper, working unit and identity mapping mode.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/mikro.md",sourceDirName:"extensions",slug:"/extensions/mikro",permalink:"/en/docs/extensions/mikro",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/mikro.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"TableStore",permalink:"/en/docs/extensions/tablestore"},next:{title:"gRPC",permalink:"/en/docs/extensions/grpc"}},s={},p=[{value:"Installation Components",id:"installation-components",level:2},{value:"Introducing components",id:"introducing-components",level:2},{value:"Basic use",id:"basic-use",level:2},{value:"Define Entity",id:"define-entity",level:3},{value:"null",id:"null",level:3},{value:"Call Repository",id:"call-repository",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. Node version",id:"1-node-version",level:3},{value:"2. Identity Map",id:"2-identity-map",level:3},{value:"3. Multi-library support",id:"3-multi-library-support",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mikroorm"},"MikroORM"),(0,o.kt)("p",null,"This section describes how users use MikroORM in midway.  MikroORM is the TypeScript ORM of Node.js based on data mapper, working unit and identity mapping mode."),(0,o.kt)("p",null,"The MikroORM official website document is ",(0,o.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs"},"here"),"."),(0,o.kt)("p",null,"Related information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contains independent main frame"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,o.kt)("h2",{id:"installation-components"},"Installation Components"),(0,o.kt)("p",null,"Install mikro components to provide access to mikro-orm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/mikro@3 @mikro-orm/core --save\n")),(0,o.kt)("p",null,"Or reinstall the following dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies ": {\n    "@midwayjs/mikro": "^3.0.0",\n    "@mikro-orm/core": "^5.3.1 ",\n    // ...\n  },\n  "devDependencies ": {\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"At the same time, it is also necessary to introduce the adaptation package of the corresponding database."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "dependencies ": {\n    // sqlite\n    "@mikro-orm/sqlite": "^5.3.1 ",\n\n    // mysql\n    "@mikro-orm/mysql": "^5.3.1 ",\n  },\n  "devDependencies ": {\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"For more information about drivers, see ",(0,o.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/usage-with-sql/"},"Official documentation"),"."),(0,o.kt)("h2",{id:"introducing-components"},"Introducing components"),(0,o.kt)("p",null,"The mikro component is introduced in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),", as an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as mikro from '@midwayjs/mikro';\nimport { join } from 'path';\n\n@Configuration ({\n  imports: [\n    // ...\n    Mikro // load mikro components\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,o.kt)("h2",{id:""}),(0,o.kt)("h2",{id:"basic-use"},"Basic use"),(0,o.kt)("p",null,"Similar to other orm frameworks, they are divided into several steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Define Entity"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"Configure the data source"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Get the EntityModel to call")))),(0,o.kt)("p",null,"For more information about Entity code, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/tree/main/packages/mikro/test/fixtures/base-fn-origin"},"Example"),"."),(0,o.kt)("h3",{id:"define-entity"},"Define Entity"),(0,o.kt)("p",null,"Entity that defines the basis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"null\nimport { PrimaryKey, Property } from '@mikro-orm/core';\n\nexport abstract class BaseEntity {\n\n  @PrimaryKey()\n  id! : number;\n\n  @Property()\n  createdAt: Date = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt: Date = new Date();\n\n}\n")),(0,o.kt)("p",null,"Define the actual Entity, including one-to-many, many-to-many relationships."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Cascade, Collection, Entity, ManyToMany, ManyToOne, Property } from '@mikro-orm/core';\nimport { Author, BookTag, Publisher } from './index';\nimport { BaseEntity } from './BaseEntity';\n\n@Entity()\nexport class Book extends BaseEntity {\n\n  @Property()\n  title: string;\n\n  @ManyToOne(() => Author)\n  author: Author;\n\n  @ManyToOne(() => Publisher, { cascade: [Cascade.PERSIST, Cascade.REMOVE], nullable: true })\n  publisher?: Publisher;\n\n  @ManyToMany(() => BookTag)\n  tags = new Collection<BookTag>(this);\n\n  @Property({ nullable: true })\n  metaObject?: object;\n\n  @Property({ nullable: true })\n  metaArray?: any[];\n\n  @Property({ nullable: true })\n  metaArrayOfStrings?: string[];\n\n  constructor(title: string, author: Author) {\n    super();\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),(0,o.kt)("h3",{id:"null"},"null"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// src/config/config.default\nimport { Author, BaseEntity, Book, BookTag, Publisher } from '../entity';\nimport { SqlHighlighter } from '@mikro-orm/sql-highlighter';\nimport { join } from 'path';\n\nexport default (appInfo) => {\n  return {\n    mikro: {\n      dataSource: {\n        default: {\n          entities: [Author, Book, BookTag, Publisher, BaseEntity]\n          dbName: join(__dirname, '../../test.sqlite')\n          Type: 'sqlite', // SQLite is used as an example here.\n          highlighter: new SqlHighlighter()\n          debug: true\n          allowGlobalContext: true\n        }\n      }\n    }\n  }\n}\n\n")),(0,o.kt)("h3",{id:"call-repository"},"Call Repository"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"InjectRepository")," injection ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," objects in business code to perform database operations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Book } from './entity';\nimport { Provide } from '@midwayjs/decorator';\nimport { InjectRepository } from '@midwayjs/mikro';\nimport { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';\n\n@Provide()\nexport class BookController {\n\n  @InjectRepository(Book)\n  bookRepository: EntityRepository<Book>;\n\n  async findBookAndQuery() {\n    const book = this.bookRepository.create({ title: 'b1', author: { name: 'a1', email: 'e1' } });\n    wrap(book.author, true).__initialized = true;\n    await this.bookRepository.persist(book).flush();\n\n    const findResult = await this.bookRepository.findAll ({\n      populate: ['author']\n      orderBy: { title: QueryOrder.DESC}\n      limit: 20\n    });\n\n  }\nnull\n")),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h3",{id:"1-node-version"},"1. Node version"),(0,o.kt)("p",null,"Mikro-orm there are some restrictions on Node version, it must be ",(0,o.kt)("inlineCode",{parentName:"p"},">= 14.0.0"),", so do the usage rules of ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/mikro")," components."),(0,o.kt)("h3",{id:"2-identity-map"},"2. Identity Map"),(0,o.kt)("p",null,"Mikro-orm internal query has a concept of ",(0,o.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/identity-map"},"Identity Map"),". Midway has added this function to all built-in Framework middleware. If it is used in non-requesting link call scenarios, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configuration"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"allowGlobalContext")," option can be turned on."),(0,o.kt)("h3",{id:"3-multi-library-support"},"3. Multi-library support"),(0,o.kt)("p",null,"Like other databases, Midway supports the configuration of multiple data sources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nnull\nimport { Author, BaseEntity, Book, BookTag, Publisher } from '../entity';\nimport { SqlHighlighter } from '@mikro-orm/sql-highlighter';\nnull\n\nexport default (appInfo) => {\n  null\n    mikro: {\n      dataSource: {\n        custom1: {\n          // ...\n        null\n        custom2: {\n          // ...\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Note which data source you need to pass from when using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\n@Provide()\nexport class BookController {\n\n  @InjectRepository(Book, 'custom1')\n  bookRepository: EntityRepository<Book>;\n\n  async findBookAndQuery() {\n    // ...\n  null\n}\n")))}u.isMDXComponent=!0}}]);