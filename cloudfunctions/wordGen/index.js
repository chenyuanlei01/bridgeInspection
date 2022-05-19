
const cloud = require('wx-server-sdk')
const officegen = require('officegen');
const fs = require('fs');
const docx = officegen('docx');
cloud.init({
  env: 'qljc-0b2vv'
})
// Officegen calling this function after finishing to generate the docx document:
docx.on('finalize', async function (written) {
  console.log('Finish to create a Microsoft Word document.')
})
// Officegen calling this function to report errors:
docx.on('error', function (err) {
  console.log(err)
})

// 云函数入口函数
exports.main = async (event, context) => {
  var filePath = 'word'
  // var fileName = event.qlmc+Date.parse(new Date()) + '.docx'
  var fileName = event.qlmc + '.docx'
  var varpath = filePath + '/' + fileName
  //
  const res1 = await cloud.downloadFile({
    fileID: event.Clmt
})  

const temp1 ='data:image/jpg;base64,'+res1.fileContent.toString('base64');
const res2 = await cloud.downloadFile({
  fileID: event.Czmt
})  
// const temp2 = res2.data.toString('base64');
const temp2 ='data:image/jpg;base64,'+res2.fileContent.toString('base64');
  // const fs = require('fs');
  // const temp1=event.zmt
  // const temp2=event.lmt
  const path1 = '/tmp/picture1'+'.png';
  const base641 = temp2.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  const dataBuffer1 = new Buffer.from(base641, 'base64'); //把base64码转成buffer对象，
  fs.writeFile(path1, dataBuffer1, function(err){//用fs写入文件
      if(err){
          console.log(err);
      }else{
          console.log('1写入成功！');
      }
    })
      // const fs = require('fs');

      const path2 = '/tmp/picture2'+'.png';
      const base642 = temp1.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
      const dataBuffer2 = new Buffer.from(base642, 'base64'); //把base64码转成buffer对象，
      fs.writeFile(path2, dataBuffer2, function(err){//用fs写入文件
          if(err){
              console.log(err);
          }else{
              console.log('2写入成功！');
          }
        })
//
   console.log(event.bridge)
   console.log(event)
  // Create an empty Word object:
  let docx = officegen({
    type: 'docx',
    orientation: 'portrait',
    pageSize: {width:16838,height:11906},
    pageMargins: { top: 1000, left: 1000, bottom: 1000, right: 1000 }

  })
  // Officegen calling this function after finishing to generate the docx document:
  docx.on('finalize', function(written) {
    console.log(
      'Finish to create a Microsoft Word document.'
    )
  })
   
  // Officegen calling this function to report errors:
  docx.on('error', function(err) {
    console.log(err)
  })
   
  
  
  let pObj = docx.createP()
 
pObj.addText('桥梁资料卡',{font_size:15,bold:true})
  pObj = docx.createP()
  pObj.options.align = 'left'
  pObj.addText('                       桥梁名称:',{font_size:10.5})
  pObj.addText(event.qlmc,{font_size:10.5})
  pObj.addText('                                                                      所在路名:' ,{font_size:10.5})      
  pObj.addText(event.szlm,{font_size:10.5})                        
  pObj.addText('                                                                      跨越河流:',{font_size:10.5})
  pObj.addText(event.kyhl,{font_size:10.5})                             
  var table = [
    [                                  //第一行
      {
      val: "管理单位",
      opts: {
        align: "center",
      }
    },{
      val: event.gldw,
      opts: {
        align: "center",
      }
    },{
      val: "主梁形式",
      opts: {
        align: "center",
      }
    },{
      val:event.zlxs,
      opts: {
        align: "center",
      }
    },{
      val: "桥墩型式",
      opts: {
        align: "center",
      }
    },{
      val: event.qdxs,
      opts: {
        align: "center",
      }
    }
  ],


  [                                 //第二行
    {
    val: "养护单位",
    opts: {
      align: "center",
    }
  },{
    val: event.yhdw,
    opts: {
      align: "center",
    }
  },{
    val: "主梁尺寸",
    opts: {
      align: "center",
    }
  },{
    val: event.zlcc,
    opts: {
      align: "center",
    }
  },{
    val: "桥墩数量",
    opts: {
      align: "center",
    }
  },{
    val: event.qdsl,
    opts: {
      align: "center",
    }
  }
],


[                                  //第三行
  {
  val: "建设单位",
  opts: {
    align: "center",
  }
},{
  val: event.jsdw,
  opts: {
    align: "center",
  }
},{
  val: "主梁数量",
  opts: {
    align: "center",
  }
},{
  val: event.zlsl,
  opts: {
    align: "center",
  }
},{
  val: "桥墩标高",
  opts: {
    align: "center",
  }
},{
  val: event.qdbg,
  opts: {
    align: "center",
  }
}
],


[                                  //第四行
  {
  val: "设计单位",
  opts: {
    align: "center",
  }
},{
  val: event.sjdw,
  opts: {
    align: "center",
  }
},{
  val: "横梁形式",
  opts: {
    align: "center",
  }
},{
  val: event.hlxs,
  opts: {
    align: "center",
  }
},{
  val: "桥墩盖梁尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.glcc,
  opts: {
    align: "center",
  }
}
],


[                                  //第五行
  {
  val: "监理单位",
  opts: {
    align: "center",
  }
},{
  val: event.jldw,
  opts: {
    align: "center",
  }
},{
  val: "主跨桥下净空",
  opts: {
    align: "center",
  }
},{
  val: event.zkqxjk,
  opts: {
    align: "center",
  }
},{
  val: "桥墩基底标高",
  opts: {
    align: "center",
  }
},{
  val: event.qdjdbg,
  opts: {
    align: "center",
  }
}
],


[                                  //第六行
  {
  val: "施工单位",
  opts: {
    align: "center",
  }
},{
  val: event.sgdw,
  opts: {
    align: "center",
  }
},{
  val: "桥下限高",
  opts: {
    align: "center",
  }
},{
  val: event.qxxg,
  opts: {
    align: "center",
  }
},{
  val: "桥墩底板尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.qddbcc,
  opts: {
    align: "center",
  }
}
],


[                                  //第七行
  {
  val: "建造年月",
  opts: {
    align: "center",
  }
},{
  val: event.jzny,
  opts: {
    align: "center",
  }
},{
  val: "拱桥矢跨比",
  opts: {
    align: "center",
  }
},{
  val: event.gqskb,
  opts: {
    align: "center",
  }
},{
  val: "桥墩基桩尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.qdjzcc,
  opts: {
    align: "center",
  }
}
],


[                                  //第八行
  {
  val: "总造价",
  opts: {
    align: "center",
  }
},{
  val: event.zzj,
  opts: {
    align: "center",
  }
},{
  val: "支座型式",
  opts: {
    align: "center",
  }
},{
  val: event.zzxs,
  opts: {
    align: "center",
  }
},{
  val: "桥墩基桩根数",
  opts: {
    align: "center",
  }
},{
  val: event.qdjzgs,
  opts: {
    align: "center",
  }
}
],


[                                  //第九行
  {
  val: "养护类别",
  opts: {
    align: "center",
  }
},{
  val: event.yhlb,
  opts: {
    align: "center",
  }
},{
  val: "支座数量",
  opts: {
    align: "center",
  }
},{
  val: event.zzsl,
  opts: {
    align: "center",
  }
},{
  val: "桥台型式",
  opts: {
    align: "center",
  }
},{
  val: event.qtxs,
  opts: {
    align: "center",
  }
}
],


[                                  //第十行
  {
  val: "养护等级",
  opts: {
    align: "center",
  }
},{
  val: event.yhdj,
  opts: {
    align: "center",
  }
},{
  val: "桥面结构",
  opts: {
    align: "center",
  }
},{
  val: event.qmjg,
  opts: {
    align: "center",
  }
},{
  val: "桥台数量",
  opts: {
    align: "center",
  }
},{
  val: event.qtsl,
  opts: {
    align: "center",
  }
}
],


[                                  //第11行
  {
  val: "道路等级",
  opts: {
    align: "center",
  }
},{
  val: event.dldj,
  opts: {
    align: "center",
  }
},{
  val: "桥面铺装厚度",
  opts: {
    align: "center",
  }
},{
  val: event.qmpzhd,
  opts: {
    align: "center",
  }
},{
  val: "桥台标高",
  opts: {
    align: "center",
  }
},{
  val: event.qtbg,
  opts: {
    align: "center",
  }
}
],



[                                  //第12行
  {
  val: "结构类型",
  opts: {
    align: "center",
  }
},{
  val: event.jglx,
  opts: {
    align: "center",
  }
},{
  val: "伸缩缝型式",
  opts: {
    align: "center",
  }
},{
  val: event.ssfxs,
  opts: {
    align: "center",
  }
},{
  val: "桥台基底标高",
  opts: {
    align: "center",
  }
},{
  val: event.qtjdbg,
  opts: {
    align: "center",
  }
}
],


[                                  //第13行
  {
  val: "设计荷载",
  opts: {
    align: "center",
  }
},{
  val: event.sjhz,
  opts: {
    align: "center",
  }
},{
  val: "伸缩缝数量",
  opts: {
    align: "center",
  }
},{
  val: event.ssfsl,
  opts: {
    align: "center",
  }
},{
  val: "桥台台帽尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.tmcc,
  opts: {
    align: "center",
  }
}
],


[                                  //第14行
  {
  val: "限载标准",
  opts: {
    align: "center",
  }
},{
  val: event.xzbz,
  opts: {
    align: "center",
  }
},{
  val: "主桥纵坡",
  opts: {
    align: "center",
  }
},{
  val: event.zqzp,
  opts: {
    align: "center",
  }
},{
  val: "桥台底板尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.qtdbcc,
  opts: {
    align: "center",
  }
}
],


[                                  //第15行
  {
  val: "抗震烈度",
  opts: {
    align: "center",
  }
},{
  val: event.kzld,
  opts: {
    align: "center",
  }
},{
  val: "主桥横坡",
  opts: {
    align: "center",
  }
},{
  val: event.zqhp,
  opts: {
    align: "center",
  }
},{
  val: "桥台基桩尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.qtjzcc,
  opts: {
    align: "center",
  }
}
],


[                                  //第16行
  {
  val: "正斜交角",
  opts: {
    align: "center",
  }
},{
  val: event.zxjj,
  opts: {
    align: "center",
  }
},{
  val: "引桥纵坡",
  opts: {
    align: "center",
  }
},{
  val: event.yqzp,
  opts: {
    align: "center",
  }
},{
  val: "桥台基桩根数",
  opts: {
    align: "center",
  }
},{
  val: event.qtjzgs,
  opts: {
    align: "center",
  }
}
],


[                                  //第17行
  {
  val: "桥梁跨数",
  opts: {
    align: "center",
  }
},{
  val: event.qlks,
  opts: {
    align: "center",
  }
},{
  val: "引桥横坡",
  opts: {
    align: "center",
  }
},{
  val: event.yqhp,
  opts: {
    align: "center",
  }
},{
  val: "桥台挡土板厚度",
  opts: {
    align: "center",
  }
},{
  val: event.dtbhd,
  opts: {
    align: "center",
  }
}
],



[                                  //第18行
  {
  val: "跨径组合",
  opts: {
    align: "center",
  }
},{
  val: event.kjzh,
  opts: {
    align: "center",
  }
},{
  val: "集水口尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.jskcc,
  opts: {
    align: "center",
  }
},{
  val: "桥台翼墙型式",
  opts: {
    align: "center",
  }
},{
  val: event.yqxs,
  opts: {
    align: "center",
  }
}
],


[                                  //第19行
  {
  val: "桥面面积",
  opts: {
    align: "center",
  }
},{
  val: event.qmmj,
  opts: {
    align: "center",
  }
},{
  val: "集水口数量",
  opts: {
    align: "center",
  }
},{
  val: event.jsksl,
  opts: {
    align: "center",
  }
},{
  val: "桥台翼墙长度",
  opts: {
    align: "center",
  }
},{
  val: event.yqcd,
  opts: {
    align: "center",
  }
}
],


[                                  //第20行
  {
  val: "桥梁总长",
  opts: {
    align: "center",
  }
},{
  val: event.qlzc,
  opts: {
    align: "center",
  }
},{
  val: "泄水管尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.xsgcc,
  opts: {
    align: "center",
  }
},{
  val: "给水管",
  opts: {
    align: "center",
  }
},{
  val: event.jsg,
  opts: {
    align: "center",
  }
}
],


[                                  //第21行
  {
  val: "桥梁总宽",
  opts: {
    align: "center",
  }
},{
  val: event.qlzk,
  opts: {
    align: "center",
  }
},{
  val: "泄水管长度",
  opts: {
    align: "center",
  }
},{
  val: event.xsgcd,
  opts: {
    align: "center",
  }
},{
  val: "燃气管",
  opts: {
    align: "center",
  }
},{
  val: event.rqg,
  opts: {
    align: "center",
  }
}
],


[                                  //第22行
  {
  val: "车行道净宽",
  opts: {
    align: "center",
  }
},{
  val: event.cxdjk,
  opts: {
    align: "center",
  }
},{
  val: "栏杆总长",
  opts: {
    align: "center",
  }
},{
  val: event.lgzc,
  opts: {
    align: "center",
  }
},{
  val: "电力缆",
  opts: {
    align: "center",
  }
},{
  val: event.dll,
  opts: {
    align: "center",
  }
}
],


[                                  //第23行
  {
  val: "人行道净宽",
  opts: {
    align: "center",
  }
},{
  val: event.rxdjk,
  opts: {
    align: "center",
  }
},{
  val: "栏杆结构",
  opts: {
    align: "center",
  }
},{
  val: event.lgjg,
  opts: {
    align: "center",
  }
},{
  val: "通信电缆",
  opts: {
    align: "center",
  }
},{
  val: event.txdl,
  opts: {
    align: "center",
  }
}
],


[                                  //第24行
  {
  val: "河道等级",
  opts: {
    align: "center",
  }
},{
  val: event.hddj,
  opts: {
    align: "center",
  }
},{
  val: "端柱尺寸",
  opts: {
    align: "center",
  }
},{
  val: event.dzcc,
  opts: {
    align: "center",
  }
},{
  val: "侵蚀环境",
  opts: {
    align: "center",
  }
},{
  val: event.qshj,
  opts: {
    align: "center",
  }
}
],


[                                  //第25行
  {
  val: "最高水位",
  opts: {
    align: "center",
  }
},{
  val: event.zgsw,
  opts: {
    align: "center",
  }
},{
  val: "护岸类型",
  opts: {
    align: "center",
  }
},{
  val: event.halx,
  opts: {
    align: "center",
  }
},{
  val: "河道淤积",
  opts: {
    align: "center",
  }
},{
  val: event.hdyj,
  opts: {
    align: "center",
  }
}
],


[                                  //第25行
  {
  val: "常水位",
  opts: {
    align: "center",
  }
},{
  val: event.csw,
  opts: {
    align: "center",
  }
},{
  val: "引坡挡墙类型",
  opts: {
    align: "center",
  }
},{
  val: event.ypdqlx,
  opts: {
    align: "center",
  }
},{
  val: "河道冲刷",
  opts: {
    align: "center",
  }
},{
  val: event.hdcs,
  opts: {
    align: "center",
  }
}
],

];
  
  var tableStyle = {
    tableColWidth: 2480,
    tableSize: 2,
    tableColor: "ada",
    tableAlign: "center",
    sz: 21,
    tableFontFamily: "SimSun",
    spacingBefor: 20, // default is 100
    spacingAfter: 20, // default is 100
    spacingLine: 80, // default is 240
    spacingLineRule: 'atLeast', // default is atLeast
    indent: 100, // table indent, default is 0
    fixedLayout: true, // default is false
    borders: true, // default is false. if true, default border size is 4
    borderSize: 2, // To use this option, the 'borders' must set as true, default is 4
    columns: [{ width: 3500 }, { width: 1 }, { width: 42 }], // Table logical columns
  }
  docx.createTable (table, tableStyle);
  
  pObj = docx.createP()
   
  pObj.options.align = 'left'
  pObj.addText('                    审定:',{font_size:10.5})
  pObj.addText('徐荣桥',{font_size:10.5})
  pObj.addText('                                                          复核:' ,{font_size:10.5})
  pObj.addText('张治成',{font_size:10.5})
  pObj.addText('                                                          制表:',{font_size:10.5})
  pObj.addText('徐海燕',{font_size:10.5})    
  pObj.addText('                                                          日期:' ,{font_size:10.5})  
  pObj.addText('2021.3.7',{font_size:10.5})      

 

  docx.putPageBreak()
   
 pObj = docx.createP()
  var path = require('path');

  pObj.addImage(path.resolve(__dirname, '/tmp/picture1.png'), {cx: 800, cy: 600})
  pObj.addLineBreak()
  pObj.addImage(path.resolve(__dirname, '/tmp/picture2.png'), {cx: 800, cy: 600})

  docx.putPageBreak()
   
  // Let's generate the Word document into a file:
   
  let out = fs.createWriteStream('/tmp/example.docx')
   
  out.on('error', function(err) {
    console.log(err)
  })
   
  // Async call to generate the output file:
  docx.generate(out)


  return new Promise((resolve, reject) => {
  
    setTimeout(async function () {
      let data = fs.readFileSync('/tmp/example.docx');
      let bufferData = new Buffer.from(data, 'base64');
      console.log(bufferData);
      setTimeout(async function () {
        resolve(await cloud.uploadFile({
          cloudPath: varpath,
          fileContent: bufferData,
        }).then (res=> {
          console.log(res.fileID)
          return res.fileID
        }));
          
      }, 1000);
    }, 6300);
  })
  
}