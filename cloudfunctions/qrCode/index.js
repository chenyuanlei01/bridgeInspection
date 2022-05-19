const cloud = require('wx-server-sdk')
cloud.init({
  env: 'qljc-0b2vv',
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.getUnlimited({
        page: event.page,
        scene:event.scene,
      })
      console.log(result)
      const upload = await cloud.uploadFile({
        cloudPath: 'qrcode/' +event.qlmc + '.jpg',
        fileContent: result.buffer
      }).then (res=> {
        console.log(res.fileID)
        return res.fileID
      })
    return upload
  } catch (err) {
    console.log(err)
    return err
  }
}