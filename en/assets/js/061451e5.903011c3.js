"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9929],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=l,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const o={},r="sequelize-auto-midway",s={unversionedId:"tool/sequelize_generator",id:"tool/sequelize_generator",title:"sequelize-auto-midway",description:"forked from sequelize/sequelize-auto",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tool/sequelize_generator.md",sourceDirName:"tool",slug:"/tool/sequelize_generator",permalink:"/en/docs/tool/sequelize_generator",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/sequelize_generator.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"typeorm:Model Generator",permalink:"/en/docs/tool/typeorm_generator"},next:{title:"egg:ts-helper",permalink:"/en/docs/tool/egg-ts-helper"}},i={},u=[{value:"Installation",id:"installation",level:2},{value:"null",id:"null",level:2}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sequelize-auto-midway"},"sequelize-auto-midway"),(0,l.kt)("p",null,"forked from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sequelize/sequelize-auto"},"sequelize/sequelize-auto")),(0,l.kt)("p",null,"Generate ",(0,l.kt)("inlineCode",{parentName:"p"},"Sequelize")," entities for ",(0,l.kt)("inlineCode",{parentName:"p"},"Midway")," through an existing database."),(0,l.kt)("p",null,"For other detailed documents and usage, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sequelize/sequelize-auto"},"sequelize/sequelize-auto"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"null\n")),(0,l.kt)("h2",{id:"null"},"null"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Recommended\n# Please replace the configuration information\nnpx sequelize-auto-midway -h localhost -d yourDBname -u root -x yourPassword -p 13306 --dialect mysql -o ./models --noInitModels true --caseModel c --caseProp c --caseFile c --indentation 1 -a ./additional.json\n")),(0,l.kt)("p",null,"additional.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamps": true\n  "paranoid": true\n}\n')),(0,l.kt)("p",null,"null"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"null\n\nnull\n  tableName: 'task',\n  timestamps: false\n  indexes: [\n    {\n      name: 'PRIMARY',\n      null\n      using: 'BTREE',\n      fields: [{ name: 'task_id' }]\n    },\n  ],\n})\nexport class TaskEntity extends Model {\n  @Column ({\n    autoIncrement: true\n    type: DataType.INTEGER.UNSIGNED\n    allowNull: false\n    primaryKey: true\n    field: 'task_id',\n  })\n  taskId: number;\n\n  null\n    type: DataType.TINYINT.UNSIGNED\n    null\n    null\n    null\n    field: 'app_id',\n  })\n  null\n\n  null\n    type: DataType.STRING(64)\n    allowNull: false\n    null\n    null\n  })\n  taskName: string;\n\n  @Column ({\n    type: DataType.TINYINT.UNSIGNED\n    allowNull: false\n    defaultValue: 0\n    comment: 'Task Category: 1-cron,2-interval',\n  })\n  type: number;\n\n  @Column ({\n    type: DataType.TINYINT.UNSIGNED\n    allowNull: false\n    defaultValue: 0\n    comment: 'Task Status: 0-Pause, 1-Startup',\n  })\n  status: number;\n\n  @Column ({\n    type: DataType.DATE\n    allowNull: true\n    comment: 'Task Start Time',\n    field: 'start_time',\n  })\n  null\n\n  @Column ({\n    type: DataType.DATE\n    allowNull: true\n    comment: 'Mission End Time',\n    field: 'end_time',\n  })\n  endTime: string;\n\n  @Column ({\n    type: DataType.INTEGER\n    allowNull: false\n    defaultValue: -1\n    comment: 'Number of Task Executations',\n  })\n  limit: number;\n\n  @Column ({\n    type: DataType.STRING(128)\n    allowNull: true\n    defaultValue: '',\n    comment: 'task cron configuration',\n  })\n  cron: string;\n\n  @Column ({\n    type: DataType.INTEGER.UNSIGNED\n    allowNull: true\n    defaultValue: 0\n    comment: 'Task Execution Interval',\n  })\n  every: number;\n\n  @Column ({\n    type: DataType.STRING(255)\n    allowNull: true\n    comment: 'parameter',\n  })\n  args: string;\n\n  @Column ({\n    type: DataType.STRING(255)\n    allowNull: true\n    comment: 'Remarks',\n  })\n  remark: string;\n}\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"npx sequelize-auto-midway --help")," to see all available parameters with their descriptions. Some basic parameters below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Usage: npx sequelize-auto-midway -h <host> -d <database> -p [port] -u <user> -x\n[password] -e [engine]\n\nOptions:\n    --help Show help [boolean]\n    --version Show version number [boolean]\n-h, --host IP/Hostname for the database. [string]\n-d, --database Database name. [string]\n-u, --user Username for database. [string]\n-x, --pass Password for database. If specified without providing\n                          a password, it will be requested interactively from\n                          the terminal.\n-p, --port Port number for database (not for sqlite). Ex:\n                          MySQL/MariaDB: 3306, Postgres: 5432, MSSQL: 1433\n                                                                      [number]\n-c, --config Path to JSON file for Sequelize-Auto options and\n                          Sequelize's constructor \"options\" flag object\n                          null\n                          https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor\n                                                                      [string]\n-o, --output What directory to place the models. [string]\n-e, --dialect The dialect/engine that you're using: postgres\n                          mysql, sqlite, mssql [string]\n-a, --additional Path to JSON file containing model options (for all\n                          tables). See the options: https://sequelize.org/master/class/lib/model.js~Model.html#static-method-init\n                                                                      [string]\n    --indentation Number of spaces to indent [number]\n-t, --tables Space-separated names of tables to import [array]\n-T, --skipTables Space-separated names of tables to skip [array]\n--caseModel, --cm Set case of model names: c|l|o|p|u\n                          c = camelCase\n                          l = lower_case\n                          o = original (default)\n                          p = PascalCase\n                          u = UPPER_CASE\n--caseProp, --cp Set case of property names: c|l|o|p|u\n--caseFile, --cf Set case of file names: c|l|o|p|u|k\n                          k = kebab-case\n--noAlias Avoid creating alias 'as' property in relations\n                                                                     [boolean]\n--noInitModels Prevent writing the init-models file [boolean]\n-n, --noWrite Prevent writing the models to disk [boolean]\n-s, --schema Database schema from which to retrieve tables[string]\n-v, --views Include database views in generated models [boolean]\n-l, --lang Language for Model output: es5|es6|esm|ts\n                          es5 = ES5 CJS modules (default)\n                          es6 = ES6 CJS modules\n                          esm = ES6 ESM modules\n                          ts = TypeScript [string]\n--useDefine Use 'sequelize.define' instead of 'init' for es6|esm|ts\n--singularize, --sg Singularize model and file names from plural table\n                          names\n")))}m.isMDXComponent=!0}}]);