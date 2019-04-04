var tempData1 = {
  a: 1,
  record: [
    {
      userId: '123',
      key: 'jsjdl'
    },
    {
      userId: '7897',
      key: 'jsjdl'
    },
    {
      userId: '8980',
      key: 'jsjdl'
    },
    {
      userId: '888',
      key: 'jsjdl'
    }
  ]
}
var tempData2 = {
  a: 2,
  record: [
    {
      userId: '8983',
      key: 'jsjdl'
    },
    {
      userId: '90907',
      key: 'jsjdl'
    },
    {
      userId: '98989',
      key: 'jsjdl'
    },
    {
      userId: '867688',
      key: 'jsjdl'
    }
  ]
}

var arr = [tempData1, tempData2]
var db = connect('company')
db.things.insert(arr)

db.things.find({"record.userId":{$ne:'123'}},{record: 1, a: 0, _id: 0})