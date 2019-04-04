// 生成随机数
function getRandomNumber(mix, max) {
  var range = max - mix
  let rand = Math.random()
  return (mix + Math.round(rand * range))
}

// console.log(getRandomNumber(10000,99999))
// 生成随机用户名
function  getRandomUserName(min,max) {
  let tempStrArr = '1234567890qwerttyuuii'.split('')
  let outPutTxt = ''
  for(let i = 1; i<getRandomNumber(min,max); i++) {
    outPutTxt = outPutTxt + tempStrArr[getRandomNumber(0,tempStrArr.length)]
  }
  return outPutTxt
}

// console.log(getRandomUserName(7,16))

// 200万条数据
var startTime = (new Date()).getTime()
var db = connect('company')
db.randomInfo.drop()
var tempInfo = []
for(let i = 0; i<2000000; i++){
  tempInfo.push({
    userName: getRandomUserName(7, 16),
    registTime: new Date(),
    randNum0: getRandomNumber(10000,99999),
    randNum1: getRandomNumber(10000,99999),
    randNum2: getRandomNumber(10000,99999),
    randNum3: getRandomNumber(10000,99999),
    randNum4: getRandomNumber(10000,99999),
    randNum5: getRandomNumber(10000,99999),
    randNum6: getRandomNumber(10000,99999),
    randNum7: getRandomNumber(10000,99999),
    randNum8: getRandomNumber(10000,99999),
    randNum9: getRandomNumber(10000,99999),
  })
}

db.randomInfo.insert(tempInfo)
var time = (new Date()).getTime()- startTime
print('demo    .......'+ time)