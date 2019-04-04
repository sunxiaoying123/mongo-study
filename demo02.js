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
  interest:['看电影','看书','吃美食','钓鱼','旅游']
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
  interest:['篮球','看电影','做饭']
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
  interest:['做饭','画画','看电影']
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
  interest:['写代码','篮球','画画']
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
  interest:['玩游戏','写代码','做饭']
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
  interest:['化妆','读书','做饭']
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
  interest:['画画','聚会','看电影']
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
  interest:['美食','看电影','做饭']
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
  interest:['写代码','篮球','游泳']
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
  interest:['玩游戏','美食','篮球']
}
var db=connect('company');
var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate.insert(workmateArray);
db.testXY.insert(workmateArray);
print('[SUCCESS]：The data was inserted successfully');

// 批量插入性能测试

// // 循环插入
// var startTime = (new Date()).getTime(); //得到开始时间
// var  db = connect('log');  //链接数据库
// //开始循环
// for(let i=0;i<1000;i++){
//     db.test.insert({num:i});
// }
// var runTime = (new Date()).getTime()-startTime;//计算时间差
// print ('This run this is:'+runTime+'ms');//打印出来

// 批量插入
// var startTime = (new Date()).getTime();
// var  db = connect('log');
// var tempArray = []              //声明一个数组
// for(let i=0;i<1000;i++){        //循环向数组中放入值
//     tempArray.push({num:i});
// }
// db.test.insert(tempArray)       //批量一次插入
// var runTime = (new Date()).getTime()-startTime;
// print ('This run this is:'+runTime+'ms');