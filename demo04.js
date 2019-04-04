// db.workMan.update({sex:1},{$set:{money:1000}}, false,true)

// var resultMsg =  db.runCommand({getLastError: 1})

// printjson(resultMsg)


var myModify = {
  findAndModify: "workMan",
  query: {name: 'xiaoying'},
  update: {$set: {age: 10}},
  new: true
}



var resultMsg = db.runCommand(myModify)

printjson(resultMsg)