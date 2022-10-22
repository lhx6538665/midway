"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,y=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},l="Sequelize",i={unversionedId:"extensions/sequelize",id:"extensions/sequelize",title:"Sequelize",description:"This document describes how to use Sequelize in Midway.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/sequelize.md",sourceDirName:"extensions",slug:"/extensions/sequelize",permalink:"/en/docs/extensions/sequelize",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/sequelize.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"TypeORM",permalink:"/en/docs/extensions/orm"},next:{title:"Redis",permalink:"/en/docs/extensions/redis"}},s={},p=[{value:"The difference with the old writing",id:"the-difference-with-the-old-writing",level:2},{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Install database Driver",id:"install-database-driver",level:2},{value:"Enable components",id:"enable-components",level:2},{value:"Model definition",id:"model-definition",level:2},{value:"1. Create Model(Entity)",id:"1-create-modelentity",level:3},{value:"2. Primary key",id:"2-primary-key",level:3},{value:"3. Time column",id:"3-time-column",level:3},{value:"4. Ordinary column",id:"4-ordinary-column",level:3},{value:"Data source configuration",id:"data-source-configuration",level:2},{value:"null",id:"null",level:2},{value:"One-to-many",id:"one-to-many",level:3},{value:"Many-to-many",id:"many-to-many",level:3},{value:"One to one",id:"one-to-one",level:3},{value:"Static operation method",id:"static-operation-method",level:2},{value:"Save",id:"save",level:3},{value:"Find and update",id:"find-and-update",level:3},{value:"null",id:"null-1",level:2},{value:"Start Repository mode",id:"start-repository-mode",level:3},{value:"Use Repository mode",id:"use-repository-mode",level:3},{value:"Multi-library support",id:"multi-library-support",level:3},{value:"Other",id:"other",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sequelize"},"Sequelize"),(0,r.kt)("p",null,"This document describes how to use Sequelize in Midway."),(0,r.kt)("p",null,"null"),(0,r.kt)("p",null,"The current module has been reconfigured since v3.4.0, and the historical writing method is compatible. For more information about how to query historical documents, see ",(0,r.kt)("a",{parentName:"p",href:"../legacy/sequelize"},"here"),"."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"null"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent main frame"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"the-difference-with-the-old-writing"},"The difference with the old writing"),(0,r.kt)("p",null,"If you want to use the new version of the usage, please refer to the following process to modify the old code. The new and old codes cannot be mixed."),(0,r.kt)("p",null,"Upgrade method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Please explicitly add ",(0,r.kt)("inlineCode",{parentName:"li"},"sequelize")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"sequelize-typescript")," to the business dependency"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Instead of using the ",(0,r.kt)("inlineCode",{parentName:"li"},"BaseTable")," decorator, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Table")," decorator exported by the ",(0,r.kt)("inlineCode",{parentName:"li"},"sequelize-typescript")," package directly."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"configure the adjustment in the ",(0,r.kt)("inlineCode",{parentName:"li"},"sequelize")," section of ",(0,r.kt)("inlineCode",{parentName:"li"},"src/config.default"),". refer to the following data source configuration section")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The 3.1 is modified to the form of a data source to ",(0,r.kt)("inlineCode",{parentName:"li"},"sequelize.dataSource")),(0,r.kt)("li",{parentName:"ul"},"3.2 declare the entity model in the ",(0,r.kt)("inlineCode",{parentName:"li"},"entities")," field of the data source")))),(0,r.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/sequelize@3 sequelize sequelize-typescript --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies ": {\n    "@midwayjs/sequelize": "^3.0.0",\n    "sequelize": "^6.21.3 ",\n    "sequelize-typescript": "^ 2.1.0"\n    // ...\n  },\n  "devDependencies ": {\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"install-database-driver"},"Install database Driver"),(0,r.kt)("p",null,"The commonly used database drivers are as follows. Select the database type to install the corresponding connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# for MySQL or MariaDB, you can also use mysql2 instead\nnpm install mysql --save\nnpm install mysql2 --save\n\n# for PostgreSQL or CockroachDB\nnpm install pg --save\n\n# for SQLite\nnull\n\n# for Microsoft SQL Server\nnpm install mssql --save\n\n# for SQL .js\nnpm install SQL .js --save\n\n# for Oracle\nnpm install oracledb --save\n\n# for MongoDB(experimental)\nnpm install mongodb --save\n")),(0,r.kt)("p",null,"In the following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2")," is used as an example."),(0,r.kt)("h2",{id:"enable-components"},"Enable components"),(0,r.kt)("p",null,"Enable components in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { join } from 'path';\nimport * as sequelize from '@midwayjs/sequelize';\n\n@Configuration ({\n  imports: [\n    // ...\n    sequelize\n  ],\n  importConfigs: [join(__dirname, './config')]\n})\nexport class MainConfiguration implements ILifeCycle {\n  // ...\n}\n")),(0,r.kt)("h2",{id:"model-definition"},"Model definition"),(0,r.kt)("h3",{id:"1-create-modelentity"},"1. Create Model(Entity)"),(0,r.kt)("p",null,"We associate with the database through the model. The model in the application is the database table. In the Sequelize, the model is bound to the entity. Each Entity file is a Model and an Entity."),(0,r.kt)("p",null,"In the example, you need an entity. Let's take ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," as an example. Create an entity directory and add the entity file ",(0,r.kt)("inlineCode",{parentName:"p"},"person.ts")," to the entity directory. A simple entity is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/entity/person.ts\nimport { Table, Model, Column, HasMany } from 'sequelize-typescript';\n\n@Table\nclass Hobby extends Model {\n  @Column\n  name: string;\n}\n\n@Table\nnull\n  @Column\n  name: string;\n\n  @Column\n  birthday: Date;\n\n  @HasMany(() => Hobby)\n  hobbies: Hobby[];\n}\n")),(0,r.kt)("p",null,"Note that each attribute of the entity file here is actually one-to-one corresponding to the database table. Based on the existing database table, we add content up."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@Table")," decorator can be used without passing any parameters. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/models-definition.html#configuration"},"Define options"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Table ({\n  timestamps: true\n  ...\n})\nclass Person extends Model {}\n")),(0,r.kt)("p",null,"These entity columns can also be generated using ",(0,r.kt)("a",{parentName:"p",href:"/docs/tool/sequelize_generator"},"sequelize_generator")," tools."),(0,r.kt)("h3",{id:"2-primary-key"},"2. Primary key"),(0,r.kt)("p",null,"The primary key (id) will be inherited from the base class Model.  Generally speaking, the primary key is of Integer type and is self-increasing."),(0,r.kt)("p",null,"There are two ways to set the primary key, ",(0,r.kt)("inlineCode",{parentName:"p"},"@Column({primaryKey: true})")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@PrimaryKey"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, PrimaryKey } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @PrimaryKey\n  name: string;\n}\n")),(0,r.kt)("h3",{id:"3-time-column"},"3. Time column"),(0,r.kt)("p",null,"Mainly refers to ",(0,r.kt)("inlineCode",{parentName:"p"},"@CreatedAt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@UpdatedAt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@DeletedAt")," columns marked by a single decorator."),(0,r.kt)("p",null,"null"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @CreatedAt\n  creationDate: Date;\n\n  @UpdatedAt\n  updatedOn: Date;\n\n  @DeletedAt\n  deletionDate: Date;\nnull\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@CreatedAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamps = true")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"createdAt = 'creationDate'")," are set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@UpdatedAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamps = true")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"updatedAt = 'updatedOn'")," are set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@DeletedAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamps = true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"paranoid = true"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"deletedAt = 'deletionDate'"))))),(0,r.kt)("h3",{id:"4-ordinary-column"},"4. Ordinary column"),(0,r.kt)("p",null,"The @Column decorator is used to label normal columns and can be used without passing any parameters.  However, you must be able to automatically infer the js type. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sequelize/sequelize-typescript#type-inference"},"Type inference"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @Column\n  name: string;\n}\n")),(0,r.kt)("p",null,"Or specify the column type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Column, DataType } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @Column(DataType.TEXT)\n  name: string;\n}\n")),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/models-definition.html#configuration"},"here"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column, DataType } from 'sequelize-typescript'\n\n@Table\nclass Person extends Model {\n  @Column ({\n    type: DataType.FLOAT\n    comment: 'Some value',\n    ...\n  })\n  value: number;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@Column")),(0,r.kt)("td",{parentName:"tr",align:null},"Use the derived ",(0,r.kt)("a",{parentName:"td",href:"https://sequelize.org/v5/manual/models-definition.html#data-types"},"dataType")," as the type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@Column(dataType: DataType)")),(0,r.kt)("td",{parentName:"tr",align:null},"Explicit setting ",(0,r.kt)("a",{parentName:"td",href:"https://sequelize.org/v5/manual/models-definition.html#data-types"},"dataType"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@Column(options: AttributeOptions)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set ",(0,r.kt)("a",{parentName:"td",href:"https://sequelize.org/v5/manual/models-definition.html#configuration"},"attribute options"))))),(0,r.kt)("h2",{id:"data-source-configuration"},"Data source configuration"),(0,r.kt)("p",null,"In the new version, we have enabled the ",(0,r.kt)("a",{parentName:"p",href:"../data_source"},"data source mechanism")," and configured it in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config.default.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\nimport { Person } from '../entity/person';\n\nexport default {\n  // ...\n  sequelize: {\n    dataSource: {\n      default: {\n        database: 'test4',\n        username: 'root',\n        password: '123456',\n        null\n        port: 3306\n        encrypt: false\n        dialect: 'mysql',\n        define: { charset: 'utf8'}\n        timezone: '+08:00',\n        entities: [Person]\n      },\n    },\n    null\n  },\n};\n")),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"../data_source"},"Data source management"),"."),(0,r.kt)("h2",{id:"null"},"null"),(0,r.kt)("p",null,"Relationships can be directly described in the model through ",(0,r.kt)("inlineCode",{parentName:"p"},"HasMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@HasOne"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@BelongsTo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@BelongsToMany"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"@ForeignKey")," decorators."),(0,r.kt)("h3",{id:"one-to-many"},"One-to-many"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';\n\n@Table\nexport class Player extends Model {\n  @Column\n  name: string;\n\n  @Column\n  num: number;\n\n  @ForeignKey(() => Team)\n  @Column\n  teamId: number;\n\n  @BelongsTo(() => Team)\n  team: Team;\nnull\n\n@Table\nexport class Team extends Model {\n  @Column\n  name: string;\n\n  @HasMany(() => Player)\n  players: Player[];\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sequelize-typescript")," associates internally and automatically queries related dependencies."),(0,r.kt)("p",null,"For example, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," to query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"null\n\nteam.players.forEach((player) => {\n  console.log('Player ${player.name}');\n});\n")),(0,r.kt)("h3",{id:"many-to-many"},"Many-to-many"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column, ForeignKey, BelongsToMany } from 'sequelize-typescript';\n\nnull\nexport class Book extends Model {\n  @BelongsToMany(() => Author, () => BookAuthor)\n  null\n}\n\n@Table\nexport class Author extends Model {\n  @BelongsToMany(() => Book, () => BookAuthor)\n  books: Book[];\nnull\n\n@Table\nexport class BookAuthor extends Model {\n  @ForeignKey(() => Book)\n  @Column\n  bookId: number;\n\n  @ForeignKey(() => Author)\n  @Column\n  authorId: number;\n}\n")),(0,r.kt)("p",null,"The above types are unsafe in some scenarios, such as the above ",(0,r.kt)("inlineCode",{parentName:"p"},"BookAuthor"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," type of ",(0,r.kt)("inlineCode",{parentName:"p"},"Author"),", which may lose some attributes and need to be set manually."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@BelongsToMany(() => Book, () => BookAuthor)\nbooks: Array<Book & {BookAuthor: BookAuthor}>;\n")),(0,r.kt)("h3",{id:"one-to-one"},"One to one"),(0,r.kt)("p",null,"For one-to-one, use ",(0,r.kt)("inlineCode",{parentName:"p"},"@HasOne(...)")," (the foreign key of the relationship exists on another model) and ",(0,r.kt)("inlineCode",{parentName:"p"},"@BelongsTo(...)")," (the foreign key of the relationship exists on this model)."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';\nimport { User } from './User';\n\n@Table\nexport class Photo extends Model {\n  @ForeignKey(() => User)\n  @Column ({\n    comment: 'User Id',\n  })\n  userId: number;\n\n  @BelongsTo(() => User)\n  user: User;\n\n  null\n    Comment: 'name',\n  })\n  name: string;\n}\n\n@Table\nexport class User extends Model {\n  @Column\n  name: string;\n}\n")),(0,r.kt)("h2",{id:"static-operation-method"},"Static operation method"),(0,r.kt)("p",null,"If it is a single data source, you can use the following static method."),(0,r.kt)("h3",{id:"save"},"Save"),(0,r.kt)("p",null,"Where it needs to be called, use the entity model to operate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"null\nimport { Person } from '../entity/person';\n\n@Provide()\nexport class PersonService {\n  async createPerson() {\n    const person = new Person({ name: 'bob', age: 99 });\n    await person.save();\n  }\n}\n")),(0,r.kt)("h3",{id:"find-and-update"},"Find and update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { Person } from '../entity/person';\n\n@Provide()\nexport class PersonService {\n  async updatePerson() {\n    const person = await Person.findOne();\n    // Update\n    person.age = 100;\n    await person.save();\n\n    await Person.update (\n      {\n        name: 'bobby',\n      },\n      {\n        where: { id: 1}\n      null\n    );\n  }\n}\n")),(0,r.kt)("h2",{id:"null-1"},"null"),(0,r.kt)("p",null,"Repository mode can separate static operations such as lookup and creation from the model definition. It also supports use with multiple sequelize instances (multiple data sources)."),(0,r.kt)("h3",{id:"start-repository-mode"},"Start Repository mode"),(0,r.kt)("p",null,"Same as data source configuration, except that there is one more attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\nimport { Person } from '../entity/person';\n\nexport default {\n  null\n  sequelize: {\n    dataSource: {\n      default: {\n        // ...\n        entities: [Person]\n\n        // This one more\n        repositoryMode: true\n      },\n    },\n    sync: false\n  },\n};\n")),(0,r.kt)("p",null,"If there are multiple data sources, be sure to turn this property on each data source. After the property is turned on, the original static operation method is no longer available."),(0,r.kt)("p",null,"You need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository")," operation method."),(0,r.kt)("h3",{id:"use-repository-mode"},"Use Repository mode"),(0,r.kt)("p",null,"The basic API is the same as the static operation. Midway has made some simple packages to it. The ",(0,r.kt)("inlineCode",{parentName:"p"},"InjectRepository")," decorator can be used to inject ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository")," into the service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/decorator';\nimport { InjectRepository } from '@midwayjs/sequelize';\nimport { Photo } from '../entity/photo';\nimport { User } from '../entity/user';\nimport { Op } from 'sequelize';\n\n@Controller('/')\nexport class HomeController {\n  @InjectRepository(User)\n  userRepository: Repository<User>;\n\n  @InjectRepository(Photo)\n  photoRepository: Repository<Photo>;\n\n  @Get('/')\n  async home() {\n    // Query\n    let result = await this.photoRepository.findAll();\n    console.log(result);\n\n    // New\n    await this.photoRepository.create ({\n      name: '123',\n    });\n\n    // Delete\n    await this.photoRepository.destroy ({\n      where: {\n        name: '123',\n      },\n    });\n\n    // Joint query\n    // SELECT * FROM photo WHERE name = \"23\" OR name = \"34\";\n    let result = await this.photoRepository.findAll ({\n      where: {\n        [Op.or]: [{ name: '23' }, { name: '34' }]\n      },\n    });\n    // => result\n\n    // even table query\n    null\n    // => result\n  }\n}\n")),(0,r.kt)("p",null,"More ways to use OP: ",(0,r.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/querying.html"},"https:// sequelize.org/v5/manual/querying.html")),(0,r.kt)("h3",{id:"multi-library-support"},"Multi-library support"),(0,r.kt)("p",null,"In Repository mode, we can specify a specific data source in the ",(0,r.kt)("inlineCode",{parentName:"p"},"InjectRepository")," parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"null\nnull\nimport { Photo } from '../entity/photo';\nimport { User } from '../entity/user';\n\n@Controller('/')\nexport class HomeController {\n  // Specify a data source\n  @InjectRepository(User, 'default')\n  userRepository: Repository<User>;\n  // ...\n}\n")),(0,r.kt)("h2",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The above document is translated from sequelize-typescript. For more API, please refer to the ",(0,r.kt)("a",{parentName:"li",href:"(https://github.com/sequelize/sequelize-typescrip)"},"English document"),"."),(0,r.kt)("li",{parentName:"ul"},"Some ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ddzyan/midway-practice"},"cases")),(0,r.kt)("li",{parentName:"ul"},"If you encounter complex problems, you can use the ",(0,r.kt)("a",{parentName:"li",href:"https://sequelize.org/v5/manual/raw-queries.html"},"raw query method"),".")))}m.isMDXComponent=!0}}]);