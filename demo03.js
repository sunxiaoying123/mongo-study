var db = connect('company')
/*var workUpdate = {
  name: 'huahua',
  age: 8,
  job: '后端',
  skill: {
    skillOne: 'Html css',
    skilltwo: 'j2ee',
    skillThree: 'ppt',
  },
  regeTime: new Date()
}
db.workMan.update({name: 'huahua'},workUpdate)

print('update success')*/

// -------------
// set
// db.workMan.update({name: 'huahua'},{"$set":{sex:2,age:21}})
// db.workMan.update({name: 'huahua'},{"$set":{"skill.skilltree":'哈哈'}})
// $unset
// db.workMan.update({name: 'huahua'},{"$unset":{age:''}})
// $inc
// db.workMan.update({name: 'huahua'},{"$inc":{age:+5}})

// interset multi
// db.workMan.update({},{"$set":{interset:[]}}, {multi: true})

// upsert
// db.workMan.update({name: 'xiaowang'},{"$set":{age:20}}, {upsert: true})
// $push
// db.workMan.update({name: 'xiaowang'},{"$push":{intrest:'画画'}})
// 内嵌
// db.workMan.update({name: 'xiaoying'},{"$push":{'skill.skillFowr':'画画'}})
// $ne查找是否存在
// db.workMan.update({name: 'xiaoying',interset: {"$ne":'playGame'}},{$push:{interset: 'playGame'}})

// $addToSet
// db.workMan.update({name: 'xiaoying'}, {"$addToSet":{interset: 'readBook'}})

// $each 批量追加
// var arr = ['sing','dance','code']
// db.workMan.update({name: 'xiaoying'}, {"$addToSet":{interset: {$each:arr}}})

// $pop
// db.workMan.update({name: 'xiaoying'}, {"$pop":{interset: -1}})

// 数组定位修改
// db.workMan.update({name: 'xiaoying'}, {"$set":{"interset.1": 'shopping'}})



// ----- 应答式操作
