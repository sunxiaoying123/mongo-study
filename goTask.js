var userName = 'xiaoying'
var timeSart = Date.parse(new Date())
var jsonDatabase = {
  "loginName": userName,
  "loginTime": timeSart
}

var db = connect('log') // 相当于use  不能用let声明
db.login.insert(jsonDatabase)

print("[demo] log print success")