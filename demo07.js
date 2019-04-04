// db.workmate.find({interest:'看电影'}, {name: 1, interest:1, age: 1,_id:0})
// db.workmate.find(
//   {interest:{$all:['看电影', '看书']}},
//   {name: 1, interest:1, age: 1,_id:0}
// )
// $in
// db.workmate.find(
//   {interest:{$in:["看电影","看书"]}},
//   {name:1,interest:1,age:1,_id:0} 
// )

db.workmate.find(
  {interest:{$size:5}},
  {name:1,interest:1,age:1,_id:0} 
)

// 分页
// 分页 每页2条 年龄从小到大
db.workmate.find({},{name:true,age:true,_id:false}).limit(2).skip(0).sort({age:1});

// $where修饰符
db.workmate.find(
  {$where:"this.age>30"},
  {name:true, age: true, _id:false}
)

db.things.find({record: {$exsis: true},"record.userId":{$ne:'123'}})