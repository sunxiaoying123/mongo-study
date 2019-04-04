db.workmate.find({$and:[
  {age: {$gt: 30}},
  {"skill.skillThree": "PHP"}
]},
  {name: 1, 'skill.skillThree':1, age:1, _id: 0}
)

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