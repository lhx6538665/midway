# MongoDB

在这一章节中，我们选择 [Typegoose](https://github.com/typegoose/typegoose) 作为基础的 MongoDB ORM 库。就如同他描述的那样 " Define Mongoose models using TypeScript classes"，和 TypeScript 结合的很不错。

简单的来说，Typegoose 使用 TypeScript 编写 Mongoose 模型的 “包装器”，它的大部分能力还是由 [mongoose](https://www.npmjs.com/package/mongoose) 库来提供的。

也可以直接选择 [mongoose](https://www.npmjs.com/package/mongoose) 库来使用，我们会分别描述。

相关信息：

| 描述              |      |
| ----------------- | ---- |
| 可用于标准项目    | ✅    |
| 可用于 Serverless | ✅    |
| 可用于一体化      | ✅    |
| 包含独立主框架    | ❌    |
| 包含独立日志      | ❌    |


:::tip

- 1、当前模块从 v3.4.0 开始已经重构，历史写法兼容，如果查询历史文档，请参考 [这里](../legacy/mongodb)。
- 2、如果代码中有读取配置，注意 `mongoose.clients` 可能会读不到，请使用 `mongoose.dataSource`。

:::



## 和老写法的区别

如果想使用新版本的用法，请参考下面的流程，将老代码进行修改，新老代码请勿混用。

升级方法：

- 1、无需再使用 `EntityModel` 装饰器
- 3、在 `src/config.default` 的 `mongoose` 部分配置调整，参考下面的数据源配置部分
  - 3.1 修改为数据源的形式 `mongoose.dataSource`
  - 3.2 将实体模型在数据源的 `entities` 字段中声明




## Mongoose 版本依赖


mongoose 和你服务器使用的 MongoDB Server 的版本也有着一定的关系，如下，请务必注意。


- MongoDB Server 2.4.x: mongoose ^3.8 or 4.x
- MongoDB Server 2.6.x: mongoose ^3.8.8 or 4.x
- MongoDB Server 3.0.x: mongoose ^3.8.22, 4.x, or 5.x
- MongoDB Server 3.2.x: mongoose ^4.3.0 or 5.x
- MongoDB Server 3.4.x: mongoose ^4.7.3 or 5.x
- MongoDB Server 3.6.x: mongoose 5.x
- MongoDB Server 4.0.x: mongoose ^5.2.0
- MongoDB Server 4.2.x: mongoose ^5.7.0
- MongoDB Server 4.4.x: mongoose ^5.10.0
- MongoDB Server 5.x: mongoose ^6.0.0


**mongoose 相关的依赖比较复杂，且对应不同的版本，现阶段，我们使用的主要是 mongoose v5 和 v6。**


:::info
从 mongoose@v5.11.0 开始，mongoose 官方支持了定义，所以不再需要安装 @types/mongoose 依赖包。
:::

安装包依赖版本如下：

**支持 MongoDB Server 6.x**

```json
  "dependencies": {
    "mongoose": "^7.0.0",
    "@typegoose/typegoose": "^10.0.0",		// 使用 typegoose 需要安装此依赖
  },
```

**支持 MongoDB Server 5.x**

```json
  "dependencies": {
    "mongoose": "^6.0.7",
    "@typegoose/typegoose": "^9.0.0",		// 使用 typegoose 需要安装此依赖
  },
```


**支持 MongoDB Server 4.4.x**


以下版本不需要安装额外定义包。
```json
  "dependencies": {
    "mongoose": "^5.13.3",
    "@typegoose/typegoose": "^8.0.0",   // 使用 typegoose 需要安装此依赖
  },
```


以下版本需要安装额外定义包（不推荐）。
```json
 "dependencies": {
    "mongodb": "3.6.3",									// mongoose 内部写死了该版本
    "mongoose": "~5.10.18",
    "@typegoose/typegoose": "^7.0.0",   // 使用 typegoose 需要安装此依赖
 },
 "devDependencies": {
    "@types/mongodb": "3.6.3",					// 只能使用此版本
    "@types/mongoose": "~5.10.3",
 }
```


其余的 MongoDB 安装模块类似，未测。



## 使用 Typegoose


### 1、安装组件


安装 Typegoose 组件，提供访问 MongoDB 的能力。


**请务必注意，请查看第一小节提前编写/安装 mongoose 等相关依赖包。**
```bash
$ npm i @midwayjs/typegoose@3 --save
```

或者在 `package.json` 中增加如下依赖后，重新安装。

```json
{
  "dependencies": {
    // 组件
    "@midwayjs/typegoose": "^3.0.0",
    // 上一节中的 mongoose 依赖
  },
  "devDependencies": {
    // 上一节中的 mongoose 依赖
    // ...
  }
}
```



安装后需要手动在 `src/configuration.ts` 配置，代码如下。

```typescript
// src/configuration.ts
import { Configuration } from '@midwayjs/core';
import * as typegoose from '@midwayjs/typegoose';

@Configuration({
  imports: [
    typegoose  											// 加载 typegoose 组件
  ],
  importConfigs: [
  	join(__dirname, './config')
  ]
})
export class MainConfiguration {

}
```

:::info
在该组件中，midway 只是做了简单的配置规则化，并将其注入到初始化流程中。
:::

### 2、简单的目录结构


我们以一个简单的项目举例，其他结构请自行参考。


```text
MyProject
├── src              							// TS 根目录
│   ├── config
│   │   └── config.default.ts 		// 应用配置文件
│   ├── entity       							// 实体（数据库 Model) 目录
│   │   └── user.ts  					  	// 实体文件
│   ├── configuration.ts     			// Midway 配置文件
│   └── service      							// 其他的服务目录
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```


在这里，我们的数据库实体主要放在 `entity` 目录（非强制），这只是一个简单的约定。



### 3、创建实体文件

比如在 `src/entity/user.ts` 中。


```typescript
import { prop } from '@typegoose/typegoose';

export class User {
  @prop()
  public name?: string;

  @prop({ type: () => [String] })
  public jobs?: string[];
}
```

等价于使用 mongoose 的下列代码

```typescript
const userSchema = new mongoose.Schema({
  name: String,
  jobs: [{ type: String }]
});

const User = mongoose.model('User', userSchema);
```

:::info
所以说，typegoose 只是简化了 model 的创建过程。
:::




### 4、配置连接信息


在 `src/config/config.default.ts` 中加入连接的配置。

```typescript
import { User } from '../entity/user';

export default {
  // ...
  mongoose: {
    dataSource: {
      default: {
        uri: 'mongodb://localhost:27017/test',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          user: '***********',
          pass: '***********'
        },
        // 关联实体
        entities: [ User ]
      }
    }
  },
}
```

如需以目录扫描形式关联，请参考 [数据源管理](../data_source)。



### 5、引用实体，调用数据库


示例代码如下：

```typescript
import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '../entity/user';

@Provide()
export class TestService {

  @InjectEntityModel(User)
  userModel: ReturnModelType<typeof User>;

  async getTest(){
    // create data
    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an "as" assertion, to have types for all properties

    // find data
    const user = await this.userModel.findById(id).exec();
    console.log(user)
  }
}
```


### 6、多库的情况

首先定义多个实体。

```typescript
class User {

  @prop()
  public name?: string;

  @prop({ type: () => [String] })
  public jobs?: string[];
}

class User2 {

  @prop()
  public name?: string;

  @prop({ type: () => [String] })
  public jobs?: string[];
}
```


将实体配置到多个数据源。


在 `src/config/config.default.ts` 中加入数据源的配置。
```typescript
import { User, User2 } from '../entity/user';

export default {
  // ...
  mongoose: {
    dataSource: {
      default: {
        uri: 'mongodb://localhost:27017/test',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          user: '***********',
          pass: '***********'
        },
        entities: [ User ]
      },
      db1: {
        uri: 'mongodb://localhost:27017/test1',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          user: '***********',
          pass: '***********'
        },
        entities: [ User2 ]
      }
    }
  },
}
```


定义实例时使用固定的连接，在扫描 dataSource 配置 Model 会自动关联 mongoose连接(`getModelForClass(Model, { existingConnection: conn })`)。

```typescript
@Provide()
export class TestService{

  @InjectEntityModel(User)
  userModel: ReturnModelType<typeof User>;

  @InjectEntityModel(User2)
  user2Model: ReturnModelType<typeof User2>;

  async getTest(){
    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an "as" assertion, to have types for all properties
    const user = await this.userModel.findById(id).exec();
    console.log(user)

    const { _id: id2 } = await this.user2Model.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User2); // an "as" assertion, to have types for all properties
    const user2 = await this.user2Model.findById(id2).exec();
    console.log(user2)
  }
}

```



### 7、关于 schemaOptions

Typegoose 预留了一个 `setGlobalOptions`  方法用来设置 [schemaOptions](https://typegoose.github.io/typegoose/docs/api/decorators/model-options#schemaoptions) 和一些其他全局性的 [配置](https://typegoose.github.io/typegoose/docs/api/decorators/model-options#options-1)。

我们可以在项目启动时设置它。

```typescript
// srcconfiguration.ts
import { Configuration } from '@midwayjs/core';
import * as typegoose from '@midwayjs/typegoose';
import * as Typegoose from '@typegoose/typegoose';

@Configuration({
  // ...
})
export class MainConfiguration {
  async onReady() {

    Typegoose.setGlobalOptions({
      schemaOptions: {
        // ...
      },
      options: { allowMixed: Severity.ERROR }
    });
    // ...
  }
}
```





## 直接使用 mongoose

mongoose 组件是 typegoose 的基础组件，有时候我们可以直接使用它。


### 1、安装组件


**请务必注意，请查看第一小节提前编写/安装 mongoose 等相关依赖包。**

```bash
$ npm i @midwayjs/mongoose@3 --save
```

或者在 `package.json` 中增加如下依赖后，重新安装。

```json
{
  "dependencies": {
    // 组件
    "@midwayjs/mongoose": "^3.0.0",
    // 上一节中的 mongoose 依赖
  },
  "devDependencies": {
    // 上一节中的 mongoose 依赖
    // ...
  }
}
```



### 2、开启组件


安装后需要手动在 `src/configuration.ts` 配置，代码如下。
```typescript
// configuration.ts
import { Configuration } from '@midwayjs/core';
import * as mongoose from '@midwayjs/mongoose';

@Configuration({
  imports: [
    mongoose  											// 加载 mongoose 组件
  ],
  importConfigs: [
  	join(__dirname, './config')
  ]
})
export class MainConfiguration {

}
```




### 2、配置

和 typegoose 相同，或者说 typegoose 使用的就是 mongoose 的配置。

不管是单库还是多库，数据源配置都是类似的。


单库：
```typescript
export default {
  // ...
  mongoose: {
    dataSource: {
      default: {
        uri: 'mongodb://localhost:27017/test',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          user: '***********',
          pass: '**********'
        }
      }
    }
  },
}
```
多库：
```typescript
export default {
  // ...
  mongoose: {
    dataSource: {
      default: {
        uri: 'mongodb://localhost:27017/test',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          user: '***********',
          pass: '***********'
        }
      },
      db1: {
        uri: 'mongodb://localhost:27017/test1',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          user: '***********',
          pass: '***********'
        }
      }
    }
  },
}
```



### 3、使用


在只有一个默认连接或者直接使用 default 连接时，我们可以直接使用封装好的 `MongooseConnectionService` 对象来创建 model。
```typescript
import { Provide, Inject, Init } from '@midwayjs/core';
import { MongooseDataSourceManager } from '@midwayjs/mongoose';
import { Schema, Document } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  avatar: string;
}

@Provide()
export class TestService {

  @Inject()
  dataSourceManager: MongooseDataSourceManager;

  @Init()
  async init() {
    // get default connection
    this.conn = this.dataSourceManager.getDataSource('default');
  }

  async invoke(){
    const schema = new Schema<User>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      avatar: String
    });
    const UserModel = this.conn.model<User>('User', schema);
    const doc = new UserModel({
      name: 'Bill',
      email: 'bill@initech.com',
      avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    await doc.save();
  }
}

```






## 常见问题


### 1、E002: You are using a NodeJS Version below 12.22.0


在新版本 @typegoose/typegoose (v8, v9) 中增加了 Node 版本的校验，如果你的 Node.js 版本低于 v12.22.0，就会出现这个提示。


普通情况下，请升级 Node.js 到这个版本以上即可解决。


在特殊场景下，比如 Serverless 无法修改 Node.js 版本且版本低于 v12.22 的情况下，由于 v12 版本子版本其实都可以，可以通过临时修改 process.version 绕过。


```typescript
// src/configuration.ts

Object.defineProperty(process, 'version', {
  value: 'v12.22.0',
  writable: true,
});

// other code

export class AutoConfiguration {}
```



