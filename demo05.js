// db.workmate.find(
//   {"skill.skillOne": 'HTML+CSS'},
//   {name: true, "skill.skillOne": true, "_id": false}
// )

// 查找公司小于35大于25的人
db.workmate.find(
  {age: {$lt: 35, $gt: 25}},
  {name: 1, "skill.skillOne": 1, _id: 0, age: 1}
)

// 所有注册时间大于某个时间人
var startDate  =  new Date('01/01/2018')
db.workmate.find(
  {regeditTime: {$gt: startDate}},
  {name: 1, "skill.skillOne": 1, _id: 0, age: 1, regeditTime: 1}
)