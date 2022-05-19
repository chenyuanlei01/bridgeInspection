// const { default: got } = require('got/dist/source')
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({

  env: "qljc-0b2vv",


})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  // collection 上的 get 方法会返回一个 Promise，因此云函数会在数据库异步取完数据后返回结果
  return db.collection('bridgeList').get()
}

  
  // ...
  // return {
  //   sum: event.a + event.b
  // }
  // let getResponse = await got ('httpbin.org/get')

  // let postResponse = await got ('httpbin.org/post',{
  //   method: 'POST',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     title:"这是标题",
  //     value:123
  //   })
  // })
  //   return postResponse.body
    
    

  // let getResponse = await got('httpbin.org/get')
  // return getResponse.body

  // ...

  // ...


 
