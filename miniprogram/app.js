//app.js
var qlbh;
var count=0
var lscx=0
App({
  onLaunch: function () {
    wx.cloud.init({

      env: "qljc-0b2vv",

      traceUser: true

    })
   
    if (!wx.cloud) {

      console.error('请使用 2.2.3 或以上的基础库以使用云能力')

    } else {

      wx.cloud.init({

        traceUser: true,

      })

    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (wx.canIUse('getUpdateManager')) {
          const updateManager = wx.getUpdateManager()
          updateManager.onCheckForUpdate(function (res) {
            if (res.hasUpdate) {
              updateManager.onUpdateReady(function () {
                wx.showModal({
                  title: '更新提示',
                  content: '新版本已经准备好，是否重启应用？',
                  success: function (res) {
                    if (res.confirm) {
                      updateManager.applyUpdate()
                    }
                  }
                })
              })
              updateManager.onUpdateFailed(function () {
                wx.showModal({
                  title: '已经有新版本了哟~',
                  content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
                })
              })
            }
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
        }
        
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    

  },
 
  globalData: {
    searchFlag: 0,
    userInfo: null ,
    isLogin: false,
    count: 0,
    reveal_lscx:1,
    backMain: 0,
    mydataLa:0,
    mydataLo:0,
    bridgeDefault:{
      // 桥梁检测
      qlmc: "请输入桥梁名称",
      szlm: "请输入所在路名",
      kyhl: "请输入跨越河流",
      hqxjcfx: "请选择横桥向检测方向",
      sqxjcfx: "请选择顺桥向检测方向",
      qmjg: "请选择桥面结构",
      hxbz: "请输入横向布置",
      lgcc: "请输入栏杆尺寸",
      lgccUnit:"mm",
      lysgd: "请输入路沿石高度",
      lysgdUnit:"mm",
      psk0:"请输入排水口类型",
      psk1:"请输入排水口尺寸",
      pskUnit:"mm",
      psk3:"请输入排水口个数",
      dbcd: "请输入搭板长度",
      dbcdUnit:"mm",
      jltx: "请选择静力体系",
      hjmxs: "请选择横截面型式",
      sgff: "请选择施工方法",
      hxlx: "请选择横向联系",
      clxs: "请选择材料型式",
  
    //一般资料 
      gldw:"请输入管理单位",
      yhdw: "请输入养护单位",
      jsdw:"请输入建设单位",
      sjdw:"请输入设计单位",
      jldw:"请输入监理单位",
      sgdw:"请输入施工单位",
      jzny:"请输入建造年月",
      zzj:"请输入总造价",
      yhlb:"请输入养护类别",
      yhdj:"请输入养护等级",
      dldj: "请选择道路等级",
      jglx:"请输入结构类型",
      sjhz: "请输入设计荷载",
      sjhzUnit:"N",
      xzbz:"请输入限载标准",
      kzld:"请输入抗震烈度",
      zxjj: "请选择正斜交角",
      qlks: "请输入桥梁跨数",
      kjzh: "请输入跨径组合",
      qmmj: "请输入桥面面积",
      qmmjUnit:"mm2",
      qlzc: "请输入桥梁总长",
      qlzcUnit:"mm",
      qlzk: "请输入桥梁总宽",
      qlzkUnit:"mm",
      rxdjk: "请输入人行道净宽",
      rxdjkUnit:"mm",
      cxdjk: "请输入车行道净宽",
      cxdjkUnit:"mm",
      hddj:"请输入河道等级",
      zgsw: "请输入最高水位",
      zgswUnit:"mm",
      csw: "请输入常水位",
      cswUnit:"mm",
  
      // 上部结构
      zlxs: "请输入主梁型式",
      zlcc: "请输入主梁尺寸",
      zlccUnit:"mm",
      zlsl:"请输入主梁数量",
      hlxs:"请输入横梁形式",
      zkqxjk: "请输入主跨桥下净空",
      zkqxjkUnit:"mm",
      qxxg: "请输入桥下限高",
      qxxgUnit:"mm",
      gqskb:"请输入拱桥矢跨比",
      zzxs:"请选择支座型式",
      zzsl:"请输入支座数量",
      qmjg:"请选择桥面结构",
      qmpzhd: "请输入桥面铺装厚度",
      qmpzhdUnit:"mm",
      ssfxs: "请选择伸缩缝型式",
      ssfsl:"请输入伸缩缝数量",
      zqzp:"请输入主桥纵坡",
      zqhp:"请输入主桥横坡",
      yqzp:"请输入引桥纵坡",
      yqhp:"请输入引桥横坡",
  
    //下部结构 
      qdxs: "请输入桥墩型式",
      qdsl: "请输入桥墩数量",
      qdbg: "请输入桥墩标高",
      qdbgUnit:"mm",
      qdglcc: "请输入桥墩盖梁尺寸",
      qdglccUnit:"mm",
      qdjdbg: "请输入桥墩基底标高",
      qdjdbgUnit:"mm",
      qddbcc: "请输入桥墩底板尺寸",
      qddbccUnit:"mm",
      qdjzcc: "请输入桥墩基桩尺寸",
      qdjzccUnit:"mm",
      qdjzgs:"请输入桥墩基桩根数",
      qtxs:"请选择桥台型式",
      qtsl: "请输入桥台数量",
      qtbg: "请输入桥台标高",
      qtbgUnit:"mm",
      qtjdbg: "请输入桥台基底标高",
      qtjdbgUnit:"mm",
      qttmcc: "请输入桥台台帽尺寸",
      qttmccUnit:"mm",
      qtdbcc: "请输入桥台底板尺寸",
      qtdbccUnit:"mm",
      qtjzcc: "请输入桥台基桩尺寸",
      qtjzccUnit:"mm",
      qtjzgs:"请输入桥台基桩根数",
      qtdtbhd: "请输入桥台挡土板厚度",
      qtdtbhdUnit:"mm",
      qtyqxs: "请输入桥台翼墙形式",
      qtyqcd: "请输入桥台翼墙长度",
      qtyqcdUnit:"mm",
  
    //其他内容 
      jskcc:"请输入集水口尺寸",
      jskccUnit:"mm",
      jsksl:"请输入集水口数量",
      xsgcc:"请输入泄水管尺寸",
      xsgccUnit:"mm",
      xsgcd:"请输入泄水管长度",
      xsgcdUnit:"mm",
      lgzc:"请输入栏杆总长",
      lgzcUnit:"mm",
      lgjg:"请输入栏杆结构",
      dzcc:"请输入端柱尺寸",
      dzccUnit:"mm",
      halx:"请输入护岸类型",
      ypdqlx:"请输入引坡挡墙类型",
      jsg:"请输入给水管",
      rqg:"请输入燃气管",
      dll:"请输入电力缆",
      txdl:"请输入通信电缆",
      qshj:"请输入侵蚀环境",
      hdyj:"请输入河道淤积",
      hdcs:"请输入河道冲刷",
      },
  },
  

})
