db = connect('company')
db.info.insert({contextInfo: "My am a programmer, I love family,I like my son"})
db.info.insert({contextInfo: "My am a programmer, I play game and sing song"})
// 需要注意的是这里使用text关键词来代表全文索引
db.info.ensureIndex({contextInfo:'text'})

// db.info.find({$text: {$search:"programmer"}})
// 不想查找某个词，用-减号来取消
// db.info.find({$text: {$search:"programmer -family"}})
// 多个内容（play game和song）
db.info.find({$text: {$search:"\"play game\" song"}})

// 建权
db.auth('xiaoying','1212')

// 关闭服务
db.shutdownServer()

// 建权后启动
// mongod --auth
// mongo -u xiaoying -p 1212 127.0.0.1:27017/admin
// mongo localhost:27017/admin -u xiaoying -p 1212


//mongodump备份的基本格式
// mongodump
//     --host 127.0.0.1
//     --port 27017
//     --out D:/databack/backup
//     --collection myCollections
//     --db test
//     --username username
//     --password password


// mongorestore
//     --host 127.0.0.1
//     --port 27017
//     --username username
//     --password password
//     <path to the backup>

// mondodump --host 127.0.0.1 --port 27017 --out  
// mondorestore --host 127.0.0.1 --port 27017 --out  