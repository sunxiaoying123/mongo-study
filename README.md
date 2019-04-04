# mongo-study
study mongodb
# mongo学习之路
####     mongodb的安装，在这里就不做介绍了，不管是windows还是mac,网上都有教程，可以自行学习一下~~~也可参考我的笔记~
#### 一、启动   
    mongod
#### 二、链接
    mongo
#### 三、关闭链接
    db.shutdownServer()
    
### 四、命令
#####  1、查看数据库
    show dbs
#####  2、进入数据库
    use + 数据库名
#####  3、显示数据库中的集合
    show collections
##### 4、显示当前位置
    db
### 五、基础操作命令
##### 1、使用数据库
    use user
##### 2、新建集合和插入数据文件
    db.user.insert({"name": "xiaoying"})
##### 3、查询所有数据
    db.user.find()
#####     4、查询第一个文件数据
    db.user.findOne()
#####     5、修改文件数据，db.集合.update({查询},{修改})
    db.user.update({name: "xiaoying"},{"name":"xiaoying", "age":12})
#####     6、删除文件数据
    db.user.remove({name: "xiaoying"})
#####     7、删除整个集合
    db.user.drop()
#####     8、删除整个数据库
    db.dropDatebase()
***
###### 以上都是在控制台的操作命令，下边是使用js编写命令。
***
#### 第一节 模拟登陆日志表信息
```javascript 
--goTask.js--

var userName = 'xiaoying'
var timeSart = Date.parse(new Date())
var jsonDatabase = {
  "loginName": userName,
  "loginTime": timeSart
}

var db = connect('log') // 相当于use  不能用let声明
db.login.insert(jsonDatabase)

print("[demo] log print success")
```
#####     打开控制台输入  load('./goTask.js'  执行成功~
```
load('goTask.js')
connecting to: mongodb://127.0.0.1:27017/log
MongoDB server version: 3.6.5
[demo] log print success
true
```
##### 查看下插入结果
```
> db.login.find()
{ "_id" : ObjectId("5c99ab77847a0ad420df98f0"), "loginName" : "xiaoying", "loginTime" : 1553574775000 }
```
### 第二节 批量插入的正确姿势
--demo01.js---
```
// 批量创建用户
var workmate1={
  name:'xiaoying',
  age:33,
  sex:1,
  job:'前端',
  skill:{
      skillOne:'HTML+CSS',
      skillTwo:'JavaScript',
      skillThree:'PHP'
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate2={
  name:'ShengLei',
  age:31,
  sex:1,
  job:'JAVA后端',
  skill:{
      skillOne:'HTML+CSS',
      skillTwo:'J2EE',
      skillThree:'PPT'
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate3={
  name:'MinJie',
  age:18,
  sex:0,
  job:'UI',
  skill:{
      skillOne:'PhotoShop',
      skillTwo:'UI',
      skillThree:'PPT'
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate4={
  name:'XiaoWang',
  age:25,
  sex:1,
  job:'UI',
  skill:{
      skillOne:'PhotoShop',
      skillTwo:'UI',
      skillThree:'PPT'
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate5={
  name:'LiangPeng',
  age:28,
  sex:1,
  job:'前端',
  skill:{
      skillOne:'HTML+CSS',
      skillTwo:'JavaScript',
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate6={
  name:'HouFei',
  age:25,
  sex:0,
  job:'前端',
  skill:{
      skillOne:'HTML+CSS',
      skillTwo:'JavaScript',
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate7={
  name:'LiuYan',
  age:35,
  sex:0,
  job:'美工',
  skill:{
      skillOne:'PhotoShop',
      skillTwo:'CAD',
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate8={
  name:'DingLu',
  age:20,
  sex:0,
  job:'美工',
  skill:{
      skillOne:'PhotoShop',
      skillTwo:'CAD',
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate9={
  name:'JiaPeng',
  age:29,
  sex:1,
  job:'前端',
  skill:{
      skillOne:'HTML+CSS',
      skillTwo:'JavaScript',
      skillThree:'PHP'
  },
  regeditTime:new Date(),
  interest:[]
}
var workmate10={
  name:'LiJia',
  age:26,
  sex:0,
  job:'前端',
  skill:{
      skillOne:'HTML+CSS',
      skillTwo:'JavaScript',
      skillThree:'PHP'
  },
  regeditTime:new Date(),
  interest:[]
}
// 使用company数据库
var db=connect('company');
var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// 给company数据库中的workmate表插入数据
db.workmate.insert(workmateArray);
print('[SUCCESS]：The data was inserted successfully');
```
##### 查看插入结果
```
>db.workmate.find()
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a000"), "name" : "xiaoying", "age" : 33, "sex" : 1, "job" : "前端", "skill" : { "skillOne" : "HTML+CSS", "skillTwo" : "JavaScript", "skillThree" : "PHP" }, "regeditTime" : ISODate("2019-03-27T08:08:06.469Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a001"), "name" : "ShengLei", "age" : 31, "sex" : 1, "job" : "JAVA后端", "skill" : { "skillOne" : "HTML+CSS", "skillTwo" : "J2EE", "skillThree" : "PPT" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a002"), "name" : "MinJie", "age" : 18, "sex" : 0, "job" : "UI", "skill" : { "skillOne" : "PhotoShop", "skillTwo" : "UI", "skillThree" : "PPT" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a003"), "name" : "XiaoWang", "age" : 25, "sex" : 1, "job" : "UI", "skill" : { "skillOne" : "PhotoShop", "skillTwo" : "UI", "skillThree" : "PPT" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a004"), "name" : "LiangPeng", "age" : 28, "sex" : 1, "job" : "前端", "skill" : {"skillOne" : "HTML+CSS", "skillTwo" : "JavaScript" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a005"), "name" : "HouFei", "age" : 25, "sex" : 0, "job" : "前端", "skill" : { "skillOne" : "HTML+CSS", "skillTwo" : "JavaScript" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z"), "interest" : [ ]}
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a006"), "name" : "LiuYan", "age" : 35, "sex" : 0, "job" : "美工", "skill" : { "skillOne" : "PhotoShop", "skillTwo" : "CAD" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a007"), "name" : "DingLu", "age" : 20, "sex" : 0, "job" : "美工", "skill" : { "skillOne" : "PhotoShop", "skillTwo" : "CAD" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a008"), "name" : "JiaPeng", "age" : 29, "sex" : 1, "job" : "前端", "skill" : { "skillOne" : "HTML+CSS", "skillTwo" : "JavaScript", "skillThree" : "PHP" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z"), "interest" : [ ] }
{ "_id" : ObjectId("5c9b2f6650a0b17e32e5a009"), "name" : "LiJia", "age" : 26, "sex" : 0, "job" : "前端", "skill" : { "skillOne" : "HTML+CSS", "skillTwo" : "JavaScript", "skillThree" : "PHP" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z"), "interest" : [ ] }
```

### 批量插入性能测试
```
// 循环插入
var startTime = (new Date()).getTime(); //得到开始时间
var  db = connect('log');  //链接数据库
//开始循环
for(let i=0;i<1000;i++){
    db.test.insert({num:i});
}
var runTime = (new Date()).getTime()-startTime;//计算时间差
print ('This run this is:'+runTime+'ms');//打印出来
```
##### 循环运行时间查看
```
load('./demo02.js')
connecting to: mongodb://127.0.0.1:27017/log
MongoDB server version: 3.6.5
This run this is:539ms
true
```

```
// 批量插入
var startTime = (new Date()).getTime();
var  db = connect('log');
var tempArray = []              //声明一个数组
for(let i=0;i<1000;i++){        //循环向数组中放入值
    tempArray.push({num:i});
}
db.test.insert(tempArray)       //批量一次插入
var runTime = (new Date()).getTime()-startTime;
print ('This run this is:'+runTime+'ms');
```
##### 批量运行时间查看
```
load('./demo02.js')
connecting to: mongodb://127.0.0.1:27017/log
MongoDB server version: 3.6.5
This run this is:22ms
true
```
##### ======很明显，批量运行时间远远小于循环插入时间，所以开发过程中肯定是要用批量插入而不是循环插入。======

### 第三节 修改：update修改器
##### 1、$set修改器
```
dbd .workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})

//修改嵌套内容（内嵌文档  {}类型）
db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})

```
#####  2、$unset 删除key
```
db.workmate.update({name: 'huahua'},{"$unset":{age:''}})
```
#####  3、$inc 对数字进行计算
```
db.workmate.update({name: 'huahua'},{"$inc":{age:+5}})
```
#####  4、multi选项（boolean类型 true: 表示每条数据都做更改 false:只修改第一条）
```
db.workmate.update({},{$set:{interset:[]}},{multi:true})
```
#####  5、upsert选项（true代表没有就添加，false代表没有不添加(默认值)）。
```
db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
```
#####  6、$push追加数组/内嵌文档值
```
db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})

// 内嵌文档push
db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})
```
#####  7、$ne查找是否存在（没有则修改，有则不修改）
```
db.workmate.update({name:'xiaoWang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})
```
#####  8、$addToSet 升级版的$ne
```
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:"readBook"}})
```
#####  9、$each 批量追加
```
var newInterset=["Sing","Dance","Code"];
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})
```
#####  10、$pop 删除数组值
* 1：从数组末端进行删除
* -1：从数组开端进行删除
```
db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}}

//数组定位修改
db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})
```

### 第四节  应答式操作
##### db.runCommand( )
它是数据库运行命令的执行器，执行命令首选就要使用它，因为它在Shell和驱动程序间提供了一致的接口。（几乎操作数据库的所有操作，都可以使用runCommand来执行）现在我们试着用runCommand来修改数据库，看看结果和直接用db.collections.update有什么不同。
```
var myModify = {
  findAndModify: "workMan",
  query: {name: 'xiaoying'},
  update: {$set: {age: 10}},
  new: true ////更新完成，需要查看结果，如果为false不进行查看结果
}

var resultMsg = db.runCommand(myModify)

printjson(resultMsg)
```
##### 运行结果：
```
load('./demo04.js')
{
    "lastErrorObject" : {
        "n" : 0,
        "updatedExisting" : true // 表示更新完毕
    },
    "value" : null,
    "ok" : 1
}
true
```
###### findAndModify的性能是没有直接使用db.collections.update的性能好，但是在实际工作中都是使用它，毕竟要商用的程序安全性还是比较重要的。

##### findAndModify属性值：
* query：需要查询的条件/文档
* sort: 进行排序
* remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
* new:[boolean]返回更新前的文档还是更新后的文档。
* fields：需要返回的字段
* upsert：没有这个值是否增加。

### 第五节   查询：find的不等修饰符
```
// 所有注册时间大于某个时间人
var startDate  =  new Date('01/01/2018')
db.workmate.find(
  {regeditTime: {$gt: startDate}},
  {name: 1, "skill.skillOne": 1, _id: 0, age: 1, regeditTime: 1}
)
```
##### 运行结果
```
{ "name" : "xiaoying", "age" : 33, "skill" : { "skillOne" : "HTML+CSS" }, "regeditTime" : ISODate("2019-03-27T08:08:06.469Z") }
{ "name" : "ShengLei", "age" : 31, "skill" : { "skillOne" : "HTML+CSS" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z") }
{ "name" : "MinJie", "age" : 18, "skill" : { "skillOne" : "PhotoShop" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z") }
{ "name" : "XiaoWang", "age" : 25, "skill" : { "skillOne" : "PhotoShop" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z") }
{ "name" : "LiangPeng", "age" : 28, "skill" : { "skillOne" : "HTML+CSS" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z") }
{ "name" : "HouFei", "age" : 25, "skill" : { "skillOne" : "HTML+CSS" }, "regeditTime" : ISODate("2019-03-27T08:08:06.470Z") }
{ "name" : "LiuYan", "age" : 35, "skill" : { "skillOne" : "PhotoShop" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z") }
{ "name" : "DingLu", "age" : 20, "skill" : { "skillOne" : "PhotoShop" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z") }
{ "name" : "JiaPeng", "age" : 29, "skill" : { "skillOne" : "HTML+CSS" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z") }
{ "name" : "LiJia", "age" : 26, "skill" : { "skillOne" : "HTML+CSS" }, "regeditTime" : ISODate("2019-03-27T08:08:06.471Z") }
```
```
// 查找公司小于35大于25的人
db.workmate.find(
  {age: {$lt: 35, $gt: 25}},
  {name: 1, "skill.skillOne": 1, _id: 0, age: 1}
)
```
##### 运行结果
```
{ "name" : "xiaoying", "age" : 33, "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "ShengLei", "age" : 31, "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "LiangPeng", "age" : 28, "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "JiaPeng", "age" : 29, "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "LiJia", "age" : 26, "skill" : { "skillOne" : "HTML+CSS" } }
```
#### 不等修饰符
* 小于($lt):英文全称less-than
* 小于等于($lte)：英文全称less-than-equal
* 大于($gt):英文全称greater-than
* 大于等于($gte):英文全称greater-than-equal
* 不等于($ne):英文全称not-equal 

### 第六节 查询：find的多条件查询
##### 1、$in修饰符<-->$nin （不在某个范围）
```
// 查询同事中年龄是25岁和33岁的信息
db.workmate.find({age:{$nin:[25,33]}},
    {name:1,"skill.skillOne":1,age:1,_id:0}
)
```
##### 运行结果
```
{ "name" : "xiaoying", "age" : 33, "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "XiaoWang", "age" : 25, "skill" : { "skillOne" : "PhotoShop" } }
{ "name" : "HouFei", "age" : 25, "skill" : { "skillOne" : "HTML+CSS" } }
```
##### 2、$or修饰符
```
// 条件或  查出两个条件满足其中一个即可
db.workmate.find({$or:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)
```
##### 运行结果
```
{ "name" : "xiaoying", "age" : 33, "skill" : { "skillThree" : "PHP" } }
{ "name" : "ShengLei", "age" : 31, "skill" : { "skillThree" : "PPT" } }
{ "name" : "LiuYan", "age" : 35, "skill" : {  } }
{ "name" : "JiaPeng", "age" : 29, "skill" : { "skillThree" : "PHP" } }
{ "name" : "LiJia", "age" : 26, "skill" : { "skillThree" : "PHP" } }
```
##### 3、$and修饰符
```
db.workmate.find({$and:[
  {age: {$gt: 30}},
  {"skill.skillThree": "PHP"}
]},
  {name: 1, 'skill.skillThree':1, age:1, _id: 0}
)
```
##### 运行结果
```
{ "name" : "xiaoying", "age" : 33, "skill" : { "skillThree" : "PHP" } }
```
##### 4、$not修饰符
```
db.workmate.find({
  age: {
    $not: {
      $lte: 30,
      $gte: 20
    }
  }
},
{name: 1, 'skill.skillOne':1, age: 1, _id: 0}
)
```
##### 运行结果
```
{ "name" : "xiaoying", "age" : 33, "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "ShengLei", "age" : 31, "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "MinJie", "age" : 18, "skill" : { "skillOne" : "PhotoShop" } }
{ "name" : "LiuYan", "age" : 35, "skill" : { "skillOne" : "PhotoShop" } }
```

第七节 查询：find的数组查询

先完善一波数据

以前的我们的workmate集合对数组涉及还很少，现在在数据中加入了兴趣（interest），并且给每个人加入了一些兴趣，比如有写代码，做饭，看电影…..

当然这些数据你可以自己随意构建，但是如果你不想自己费事费脑，这里也为你准备好了数据，你只要把以前的表删除（drop）掉，重新载入(load)就可以了。

1、数组的基本查询

// 查询多种兴趣的人
db.workmate.find({interest:['画画','聚会','看电影']},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会", "看电影" ] }
// 查询兴趣中有看电影的人，切记：此处不能用中括号，否则一个都查不出来
db.workmate.find({interest:'看电影'},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "篮球", "看电影", "做饭" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "做饭", "画画", "看电影" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会", "看电影" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "美食", "看电影", "做饭" ] }
2、$all数组多项查询

// 查询出喜欢看电影和看书的人员信息（必须全部满足）
db.workmate.find(
  {interest:{$all:['看电影', '看书']}},
  {name: 1, interest:1, age: 1,_id:0}
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
3、$in-数组的或者查询

// 满足其一即可
db.workmate.find(
    {interest:{$in:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "篮球", "看电影", "做饭" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "做饭", "画画", "看电影" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会", "看电影" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "美食", "看电影", "做饭" ] }
4、$size-数组个数查询

//查找兴趣的数量是5个人员信息
db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
5、$slice-显示选项

// 显示兴趣的前两项
db.workmate.find(
    {},
    {name:1,interest:{$slice:2},age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "篮球", "看电影" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "做饭", "画画" ] }
{ "name" : "XiaoWang", "age" : 25, "interest" : [ "写代码", "篮球" ] }
{ "name" : "LiangPeng", "age" : 28, "interest" : [ "玩游戏", "写代码" ] }
{ "name" : "HouFei", "age" : 25, "interest" : [ "化妆", "读书" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "美食", "看电影" ] }
{ "name" : "JiaPeng", "age" : 29, "interest" : [ "写代码", "篮球" ] }
{ "name" : "LiJia", "age" : 26, "interest" : [ "玩游戏", "美食" ] }
// 显示兴趣的最后一项
db.workmate.find(
    {},
    {name:1,interest:{$slice:-1},age:1,_id:0} 
）
{ "name" : "xiaoying", "age" : 33, "interest" : [ "旅游" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "做饭" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "看电影" ] }
{ "name" : "XiaoWang", "age" : 25, "interest" : [ "画画" ] }
{ "name" : "LiangPeng", "age" : 28, "interest" : [ "做饭" ] }
{ "name" : "HouFei", "age" : 25, "interest" : [ "做饭" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "看电影" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "做饭" ] }
{ "name" : "JiaPeng", "age" : 29, "interest" : [ "游泳" ] }
{ "name" : "LiJia", "age" : 26, "interest" : [ "篮球" ] }

### 第七节  查询：find的数组查询
##### 先完善一波数据
以前的我们的workmate集合对数组涉及还很少，现在在数据中加入了兴趣（interest），并且给每个人加入了一些兴趣，比如有写代码，做饭，看电影…..

当然这些数据你可以自己随意构建，但是如果你不想自己费事费脑，这里也为你准备好了数据，你只要把以前的表删除（drop）掉，重新载入(load)就可以了。
##### 1、数组的基本查询
```
// 查询多种兴趣的人
db.workmate.find({interest:['画画','聚会','看电影']},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会", "看电影" ] }
```
```
// 查询兴趣中有看电影的人，切记：此处不能用中括号，否则一个都查不出来
db.workmate.find({interest:'看电影'},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "篮球", "看电影", "做饭" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "做饭", "画画", "看电影" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会", "看电影" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "美食", "看电影", "做饭" ] }
```

##### 2、$all数组多项查询
```
// 查询出喜欢看电影和看书的人员信息（必须全部满足）
db.workmate.find(
  {interest:{$all:['看电影', '看书']}},
  {name: 1, interest:1, age: 1,_id:0}
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
```
##### 3、$in-数组的或者查询
```
// 满足其一即可
db.workmate.find(
    {interest:{$in:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "篮球", "看电影", "做饭" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "做饭", "画画", "看电影" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会", "看电影" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "美食", "看电影", "做饭" ] }
```
##### 4、$size-数组个数查询
```
//查找兴趣的数量是5个人员信息
db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书", "吃美食", "钓鱼", "旅游" ] }
```
##### 5、$slice-显示选项
```
// 显示兴趣的前两项
db.workmate.find(
    {},
    {name:1,interest:{$slice:2},age:1,_id:0} 
)
{ "name" : "xiaoying", "age" : 33, "interest" : [ "看电影", "看书" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "篮球", "看电影" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "做饭", "画画" ] }
{ "name" : "XiaoWang", "age" : 25, "interest" : [ "写代码", "篮球" ] }
{ "name" : "LiangPeng", "age" : 28, "interest" : [ "玩游戏", "写代码" ] }
{ "name" : "HouFei", "age" : 25, "interest" : [ "化妆", "读书" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "画画", "聚会" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "美食", "看电影" ] }
{ "name" : "JiaPeng", "age" : 29, "interest" : [ "写代码", "篮球" ] }
{ "name" : "LiJia", "age" : 26, "interest" : [ "玩游戏", "美食" ] }
```
```
// 显示兴趣的最后一项
db.workmate.find(
    {},
    {name:1,interest:{$slice:-1},age:1,_id:0} 
）
{ "name" : "xiaoying", "age" : 33, "interest" : [ "旅游" ] }
{ "name" : "ShengLei", "age" : 31, "interest" : [ "做饭" ] }
{ "name" : "MinJie", "age" : 18, "interest" : [ "看电影" ] }
{ "name" : "XiaoWang", "age" : 25, "interest" : [ "画画" ] }
{ "name" : "LiangPeng", "age" : 28, "interest" : [ "做饭" ] }
{ "name" : "HouFei", "age" : 25, "interest" : [ "做饭" ] }
{ "name" : "LiuYan", "age" : 35, "interest" : [ "看电影" ] }
{ "name" : "DingLu", "age" : 20, "interest" : [ "做饭" ] }
{ "name" : "JiaPeng", "age" : 29, "interest" : [ "游泳" ] }
{ "name" : "LiJia", "age" : 26, "interest" : [ "篮球" ] }
```
### 第七节  查询：find的参数使用方法
前面的find方法都是操作的第一个参数（query）和第二个参数（fields）,find还有其他的参数，这些参数多用在分页和排序上。
##### find参数：

* query：这个就是查询条件，MongoDB默认的第一个参数。
* fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
* limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
* skip:跳过多少个显示，和limit结合可以实现分页。
* sort：排序方式，从小到大排序使用1，从大到小排序使用-1。

```
// 分页 每页2条 年龄从小到大
db.workmate.find({},{name:true,age:true,_id:false}).limit(2).skip(0).sort({age:1});
{ "name" : "MinJie", "age" : 18 }
{ "name" : "DingLu", "age" : 20 }
// 要看第二页，skip值为2即可，当然现实工作中是程序
db.workmate.find(   {},   {name:true,age:true,_id:false}).limit(2).skip(2).sort({age:1});
{ "name" : "XiaoWang", "age" : 25 }
{ "name" : "HouFei", "age" : 25 }
```
```
// $where修饰符(慎用，会增加数据库压力和安全性会变重，工作中尽量少用)
db.workmate.find(
  {$where:"this.age>30"},   
  {name:true, age: true, _id:false}
)
{ "name" : "xiaoying", "age" : 33 }
{ "name" : "ShengLei", "age" : 31 }
{ "name" : "LiuYan", "age" : 35 }
```
### 第八节  查询：find如何在js文本中使用
>之前我们都是把代码粘贴到控制台执行，很麻烦，现在看下如何在js文件中执行吧~

```
// 游标hasNext
var db = connect('company')
var result = db.workmate.find()
// while(result.hasNext()){
//   printjson(result.next())
// }
// 或  比hasNext()更为优雅
result.forEach(element => {
  printjson(element)
});
// 运行结果
load('./demo08.js')
connecting to: mongodb://127.0.0.1:27017/company
MongoDB server version: 3.6.5
{
    "_id" : ObjectId("5c9c43fe50a0b17e32e5a7ee"),
    "name" : "xiaoying",
    "age" : 33,
    "sex" : 1,
    "job" : "前端",
    "skill" : {
        "skillOne" : "HTML+CSS",
        "skillTwo" : "JavaScript",
        "skillThree" : "PHP"
    },
    "regeditTime" : ISODate("2019-03-28T03:48:14.909Z"),
    "interest" : [
        "看电影",
        "看书",
        "吃美食",
        "钓鱼",
        "旅游"
    ]
}
true
```

### 第九节 索引:构造百万级数据
```
// 生成随机数
function getRandomNumber(mix, max) {
  var range = max - mix
  let rand = Math.random()
  return (mix + Math.round(rand * range))
}

// console.log(getRandomNumber(10000,99999))
// 生成随机用户名
function  getRandomUserName(min,max) {
  let tempStrArr = '1234567890qwerttyuuii'.split('')
  let outPutTxt = ''
  for(let i = 1; i<getRandomNumber(min,max); i++) {
    outPutTxt = outPutTxt + tempStrArr[getRandomNumber(0,tempStrArr.length)]
  }
  return outPutTxt
}

// console.log(getRandomUserName(7,16))

// 200万条数据
var startTime = (new Date()).getTime()
var db = connect('company')
db.randomInfo.drop()
var tempInfo = []
for(let i = 0; i<2000000; i++){
  tempInfo.push({
    userName: getRandomUserName(7, 16),
    registTime: new Date(),
    randNum0: getRandomNumber(10000,99999),
    randNum1: getRandomNumber(10000,99999),
    randNum2: getRandomNumber(10000,99999),
    randNum3: getRandomNumber(10000,99999),
    randNum4: getRandomNumber(10000,99999),
    randNum5: getRandomNumber(10000,99999),
    randNum6: getRandomNumber(10000,99999),
    randNum7: getRandomNumber(10000,99999),
    randNum8: getRandomNumber(10000,99999),
    randNum9: getRandomNumber(10000,99999),
  })
}

db.randomInfo.insert(tempInfo)
var time = (new Date()).getTime()- startTime
print('demo    .......'+ time)
```
```
// 部分数据
db.randomInfo.find({},{_id:0, userName:1,registTime:1,randNum0:1,randNum1:1})
{ "userName" : "0iq300q3ut", "registTime" : ISODate("2019-03-28T07:56:29.053Z"), "randNum0" : 70544, "randNum1" : 32916 }
{ "userName" : "6w3q747y", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 66728, "randNum1" : 86966 }
{ "userName" : "6iyuu5ei8iw", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 42663, "randNum1" : 87815 }
{ "userName" : "2t3e0u2", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 98483, "randNum1" : 53564 }
{ "userName" : "4464ywu", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 20244, "randNum1" : 52306 }
{ "userName" : "u8t8092e6", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 38763, "randNum1" : 44804 }
{ "userName" : "tq9ry6i47", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 17377, "randNum1" : 72666 }
{ "userName" : "3u62ee93yt6", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 71761, "randNum1" : 51110 }
{ "userName" : "7t8qut54", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 23753, "randNum1" : 11799 }
{ "userName" : "12y4532r1", "registTime" : ISODate("2019-03-28T07:56:29.055Z"), "randNum0" : 64216, "randNum1" : 41898 }
{ "userName" : "wqundefinedu6r3e", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 70406, "randNum1" : 67199 }
{ "userName" : "ie0i9088", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 41195, "randNum1" : 94769 }
{ "userName" : "6w24413t5", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 15180, "randNum1" : 11964 }
{ "userName" : "ut9t6ew7702yt0", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 37938, "randNum1" : 22956 }
{ "userName" : "029u4r2r3", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 44632, "randNum1" : 49829 }
{ "userName" : "w65qundefinedey3", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 81835, "randNum1" : 94093 }
{ "userName" : "28ti137u9325", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 61337, "randNum1" : 82463 }
{ "userName" : "43iye86", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 57185, "randNum1" : 74999 }
{ "userName" : "rryyrt", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 97681, "randNum1" : 26018 }
{ "userName" : "5undefined26y62r3", "registTime" : ISODate("2019-03-28T07:56:29.056Z"), "randNum0" : 27017, "randNum1" : 49706 }
Type "it" for more
> it
{ "userName" : "32q8iiyu", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 35844, "randNum1" : 42039 }
{ "userName" : "yteundefined4yw0u", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 42967, "randNum1" : 34751 }
{ "userName" : "uuy3yiquq7", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 43411, "randNum1" : 55211 }
{ "userName" : "t99i78y", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 53599, "randNum1" : 94873 }
{ "userName" : "t066073", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 83372, "randNum1" : 68490 }
{ "userName" : "ue1w4undefined20i", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 59464, "randNum1" : 33989 }
{ "userName" : "yteu8u6rti", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 43158, "randNum1" : 10568 }
{ "userName" : "7u0505i5", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 81923, "randNum1" : 62264 }
{ "userName" : "uq0tt2r7undefinedtu", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 68282, "randNum1" : 14105 }
{ "userName" : "u29q6t3", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 47692, "randNum1" : 62361 }
{ "userName" : "4uer27qiu", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 46388, "randNum1" : 72636 }
{ "userName" : "i8222t8t8", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 91969, "randNum1" : 25697 }
{ "userName" : "te60qq4ewete", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 96676, "randNum1" : 50247 }
{ "userName" : "q7witw2u05905", "registTime" : ISODate("2019-03-28T07:56:29.058Z"), "randNum0" : 72271, "randNum1" : 63654 }
{ "userName" : "47671wi6u", "registTime" : ISODate("2019-03-28T07:56:29.064Z"), "randNum0" : 94064, "randNum1" : 62081 }
{ "userName" : "47undefinedwui0y3", "registTime" : ISODate("2019-03-28T07:56:29.064Z"), "randNum0" : 12684, "randNum1" : 67802 }
{ "userName" : "28q2undefinedi8w0", "registTime" : ISODate("2019-03-28T07:56:29.064Z"), "randNum0" : 55945, "randNum1" : 68679 }
{ "userName" : "6w5quu7t", "registTime" : ISODate("2019-03-28T07:56:29.064Z"), "randNum0" : 50544, "randNum1" : 81787 }
{ "userName" : "08q5u2wu", "registTime" : ISODate("2019-03-28T07:56:29.064Z"), "randNum0" : 93061, "randNum1" : 75591 }
{ "userName" : "tru6re3u9t", "registTime" : ISODate("2019-03-28T07:56:29.064Z"), "randNum0" : 40294, "randNum1" : 74792 }
```

### 第十节 索引：索引入门
```
// 查询某个名字需要耗时多久？（以_id为索引）
var startTime = new Date().getTime()  //得到程序运行的开始时间
var  db = connect('company')          //链接数据库
var   rs=db.randomInfo.find({username:"tru6re3u9t"})  //根据用户名查找用户
rs.forEach(rs=>{printjson(rs)})                     //循环输出
var  runTime = new Date().getTime()-startTime;      //得到程序运行时间
print('[SUCCESS]This run time is:'+runTime+'ms')    //打印出运行时间

//运行结果
connecting to: mongodb://127.0.0.1:27017/company
MongoDB server version: 3.6.5
[SUCCESS]This run time is:3338ms
true

// 查看索引getIndexes(),只有_id
db.randomInfo.getIndexes()
[
    {
        "v" : 2,
        "key" : {
                "_id" : 1
        },
        "name" : "_id_",
        "ns" : "company.randomInfo"
    }
]
```
***
  以下增加userName索引(查询时间会缩短很多，不同电脑可能相差时间还不一样，但是mongoDB限制64个索引)
***
```
// 建立userName的索引
db.randomInfo.ensureIndex({userName: 1})
// 查看索引，多出来userName
db.randomInfo.getIndexes()
[
    {
        "v" : 2,
        "key" : {
                "_id" : 1
        },
        "name" : "_id_",
        "ns" : "company.randomInfo"
    },
    {
        "v" : 2,
        "key" : {
                "userName" : 1
        },
        "name" : "userName_1",
        "ns" : "company.randomInfo"
    }
]

//运行结果
connecting to: mongodb://127.0.0.1:27017/company
MongoDB server version: 3.6.5
[SUCCESS]This run time is:1465ms
true
```

### 第十一节  索引： 复合索引
>#### 索引中的小坑
* 数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内存和硬盘的消耗。
* 查询数据超过表数据量30%时，不要使用索引字段查询。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。
* 数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用数字索引是个明确的选择。
* 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。
```
//现在把randNum0，这个字段也设置成索引
db.randomInfo.ensureIndex({randNum0:1})
// 复合查找
var startTime = new Date().getTime()  //得到程序运行的开始时间
var  db = connect('company')          //链接数据库
var  rs=db.randomInfo.find({username:"7t8qut54",randNum0:23753})  //根据用户名查找用户
rs.forEach(rs=>{printjson(rs)})                     //循环输出
var  runTime = new Date().getTime()-startTime;      //得到程序运行时间
print('[SUCCESS]This run time is:'+runTime+'ms')    //打印出运行时间
// 运行结果
connecting to: mongodb://127.0.0.1:27017/company
MongoDB server version: 3.6.5
[SUCCESS]This run time is:7ms
true
```
##### 1、hint(指定索引查询) 
```
// 指定用数字索引
//现在数据量不大，时间看不出来差别，但是到工作中数据量很大的时候就会显示出来数字索引的优越性了
var  rs = db.randomInfo.find({username:'7t8qut54',randNum0:23753}).hint({randNum0:1});

```
##### 2、删除索引
```
// 这里需要注意的是删除时填写的值，并不是我们的字段名称（key），而是我们索引查询表中的name值
db.randomInfo.dropIndex('randNum0_1')
```
### 第十二节  索引： 全文索引
```
db = connect('company')
db.info.insert({contextInfo: "My am a programmer, I love family,I like my son"})
db.info.insert({contextInfo: "My am a programmer, I play game and sing song"})
// 需要注意的是这里使用text关键词来代表全文索引
db.info.ensureIndex({contextInfo:'text'})
// 查找全文中的programmer
// db.info.find({$text: {$search:"programmer"}})
// 不想查找某个词，用-减号来取消
// db.info.find({$text: {$search:"programmer -family"}})
// 多个内容（play game和song）需要转义\
db.info.find({$text: {$search:"\"play game\" song"}}
```

### 第十三节  管理（用户的创建、删除、修改）
##### 创建用户
```
// 创建用户
db.createUser({
  user:'xiaoying',
  pwd: '1212',
  customData: {
    name: '小英',
    email: 'sun_xiao_ying@sina.com',
    age: 29
  },
  roles: [
    {
      role: 'readWrite',
      db: 'company'
    },
    'read'
  ]
})
// 查看结果
db.system.user.find()
> db.system.users.find()
{ "_id" : "admin.xiaoying", "user" : "xiaoying", "db" : "admin", "credentials" : { "SCRAM-SHA-1" : { "iterationCount" : 10000, "salt" : "fSpRZZXvFQBGNm7Bh93wLA==", "storedKey" : "xOsYqOiHOKqrvcJuKO+b4LjT1To=", "serverKey" : "cjDAo+ui6xT9Bez5XXK/OCc5agw=" } }, "customData" : { "name" : "小英", "email" : "sun_xiao_ying@sina.com", "age" : 29 }, "roles" : [ { "role" : "readWrite", "db" : "company" }, { "role" : "read", "db" : "admin" } ] }
```
##### 删除用户
```
// 删除用户
db.system.users.remove({user: 'xiaoying'})
```
##### 建权
```
db.auth("xiaoying",'1212')
// 关闭服务
db.shutdownServer()

// 建权后启动
// mongod --auth
// 连接
// mongo -u xiaoying -p 1212 127.0.0.1:27017/admin
// mongo localhost:27017/admin -u xiaoying -p 1212
```

### 第十四节：图形界面

个人使用的是Robomogo,真正开发的时候还是以图形界面管理为主吧，看着毕竟直观，明了，操作简单~

>以上就是mongo的一些知识点的汇总了，希望能够对大家有所帮助，期待下次更新的时候就是结合mongo的项目分项了~  2019-03-28记。
