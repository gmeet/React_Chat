# 问题记录

## 安全  

1. 用户密码采用bcrypt-nodejs模块进行加密
2. 用户登录成功后，采用jsonwebtoken生成token发送给客户端保存起来，客户端在以后的请求中携带此token,服务端验证token是否合法，是则进行后续的处理。

## webpack无法对组件里以相对路径引用的图片进行打包

## presentation component与container component的组织问题

## 在一个点击事件中无法连续调用两次相互依赖的dispatch



## 接口说明

### 1.注册

#### 事件   

> 'signUp'

#### 请求参数  

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | nickname | true | String  | 昵称 |
> | email | true | String  | 邮箱 |
> | password | true | String  | 密码 |

#### 返回字段

> 成功: {isError: false, msg: {token: ..., user: ...}}
> 失败：{isError: true, msg: ...}

----------

### 2.登录

#### 事件   

> 'login'

#### 请求参数  

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | nickname | false | String  | 昵称 |
> | email | false | String  | 邮箱 |
> | password | true | String  | 密码 |
> 昵称和邮箱任选其一

#### 返回字段

> 成功: {isError: false, msg: {token: ...} }
> 失败： {isError: true, msg: ...}

-----------

### 3.注销登录

#### 事件   

> 'disconnect'

#### 请求参数  

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | token | true | String  | 无 |


#### 返回字段

> 成功: {isError: false, msg: {msg: '已注销'}}
> 失败: {isError: true, msg: ...}

----------------

#### 4. 得到所有用户列表

#### 事件   

> 'getUsers'

#### 请求参数  

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | token | true | String  | 无 |


#### 返回字段

> 成功: {isError: false, msg: {users: [...]}}
> 失败: {isError: true, msg: ...}


### 5.发送消息

#### 事件   

> 'new message'

#### 请求参数  

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | token | true | String  | 无 |
> | type | true | String  | 无 |
> | to | true | String  | 无 |
> | content | true | String  | 无 |

### 5.接受消息

#### 事件   

> 'new message'

#### 返回数据 (私聊) 

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | from | true | String  | 无 |
> | createAt | true | String  | 无 |
> | content | true | String  | 无 |
> | type | true | String  | 无 |
> | avatar | true | String  | 无 |
> | id | true | String  | 无 |

### 5.获取历史消息

#### 事件   

> 'getHistory'

#### 请求参数

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | token | true | String  | 无 |
> | to | true | String  | 对方昵称 |
> | type | true | String  | 'private'或'group' |

#### 返回数据 

> | 参数      | 必选   | 类型   | 说明   |
> | :------ | :--- | :--- | ---- |
> | from | true | String  | 发送者昵称 |
> | createAt | true | String  | 无 |
> | content | true | String  | 无 |
> | type | true | String  | 无 |
> | avatar | true | String  | 无 |






