var startTime = (new Date()).getTime()
var db = connect('log')

var arr = []
for(let i = 0 ; i < 1000; i++){
  arr.push({number: i})
}

// 批量插入
db.test2.insert(arr)


// 循环插入
// for(let i = 0 ; i < 1000; i++){
//   db.test.insert({"number": 1})
// }


var runTime = (new Date()).getTime() - startTime


print('run time is ',runTime + 'ms')