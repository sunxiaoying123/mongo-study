var db = connect('company')
var result = db.workmate.find(
  {interest:{$size:5}}
)
// while(result.hasNext()){
//   printjson(result.next())
// }
// 或
result.forEach(element => {
  printjson(element)
});

