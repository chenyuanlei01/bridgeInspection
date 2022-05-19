// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const officegen = require('officegen')
  const fs = require('fs')
   var gldw='杭州钱塘新区综合行政执法局'
   let yhdw='杭州钱塘新区综合行政执法局'
  // Create an empty Word object:
  let docx = officegen({
    type: 'docx',
    orientation: 'portrait',
    pageSize: {width:16838,height:11906},
    pageMargins: { top: 1000, left: 1000, bottom: 1000, right: 1000 }
    // The theme support is NOT working yet...
    // themeXml: themeXml
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
   
  // Create a new paragraph:
  let pObj = docx.createP()
   
  pObj.addText('桥梁检测页面')
  pObj.addText(' with color', { color: '000088' })
  pObj.addText(' and back color.', { color: '00ffff', back: '000088' })
  var table = [
    [{
      val: "Title1",
      opts: {
        align: "center",
        vAlign: "center",
        cellColWidth: 10,
        b:true,
        sz: '20',
        shd: {
          fill: "92CDDC",
          themeFill: "text1",
          "themeFillTint": "40"
        }
      }
    },{
      val: "Title1",
      opts: {
        align: "center",
        vAlign: "center",
        cellColWidth: 10,
        b:true,
        sz: '20',
        shd: {
          fill: "92CDDC",
          themeFill: "text1",
          "themeFillTint": "40"
        }
      }
    },{
      val: "Title2",
      opts: {
        align: "center",
        vAlign: "center",
        cellColWidth: 10,
        b:true,
        sz: '20',
        shd: {
          fill: "92CDDC",
          themeFill: "text1",
          "themeFillTint": "40"
        }
      }
    }],
    ['管理单位',gldw,'','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['养护单位',yhdw,'','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['建设单位','But when it is a matter of baobabs, that always means a catastrophe.','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['设计单位','You can include CR-LF inline\r\nfor multiple lines.','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['监理单位',['Or you can provide lines within', 'a cell in an array'],'','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['建造年月','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['总造价','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['养护类别','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['养护等级','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['道路等级','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['结构类型','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['设计荷载','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['限载标准','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['抗震烈度','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['正斜交角','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['桥梁跨数','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['跨径组合','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['桥面面积','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['桥梁总长','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['桥梁总宽','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['车行道净宽','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['人行道净宽','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['河道等级','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['最高水位','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
    ['常水位','All grown-ups were once children','','施工单位','All grown-ups were once children','','施工单位','All grown-ups were once children',''],
  
  ]
  
  var tableStyle = {
    tableColWidth: 1500,
    tableColHeight:10,
    tableSize: 5,
    tableColor: "ada",
    tableAlign: "left",
    sz: 10,
    tableFontFamily: "Comic Sans MS",
    spacingBefor: 100, // default is 100
    spacingAfter: 100, // default is 100
    spacingLine: 100, // default is 240
    spacingLineRule: 'atLeast', // default is atLeast
    indent: 100, // table indent, default is 0
    fixedLayout: true, // default is false
    borders: true, // default is false. if true, default border size is 4
    borderSize: 2, // To use this option, the 'borders' must set as true, default is 4
    columns: [{ width: 3500 }, { width: 1 }, { width: 42 }], // Table logical columns
  }
  docx.createTable (table, tableStyle);
  
  pObj = docx.createP()
   
  pObj.addText('Since ')
  pObj.addText('officegen 0.2.12', {
    back: '00ffff',
    shdType: 'pct12',
    shdColor: 'ff0000'
  }) // Use pattern in the background.
  pObj.addText(' you can do ')
  pObj.addText('more cool ', { highlight: true }) // Highlight!
  pObj.addText('stuff!', { highlight: 'darkGreen' }) // Different highlight color.
   
  pObj = docx.createP()
   
  pObj.addText('Even add ')
  pObj.addText('external link', { link: 'https://github.com' })
  pObj.addText('!')
   
  pObj = docx.createP()
   
  pObj.addText('Bold + underline', { bold: true, underline: true })
   
  pObj = docx.createP({ align: 'center' })
   
  pObj.addText('Welcome TO AMD', {
    border: 'dotted',
    borderSize: 12,
    borderColor: '88CCFF'
  })
   
  pObj = docx.createP()
  pObj.options.align = 'right'
   
  pObj.addText('Align this text to the right.')
   
  pObj = docx.createP()
   
  pObj.addText('Those two lines are in the same paragraph,')
  pObj.addLineBreak()
  pObj.addText('but they are separated by a line break.')
   
  docx.putPageBreak()
   
  pObj = docx.createP()
   
  pObj.addText('Fonts face only.', { font_face: 'Arial' })
  pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 })
   
  docx.putPageBreak()
   
  pObj = docx.createP()
   
  
   
  // Let's generate the Word document into a file:
   
  let out = fs.createWriteStream('example.docx')
   
  out.on('error', function(err) {
    console.log(err)
  })
   
  // Async call to generate the output file:
  docx.generate(out)

  return {
    file:example.docx,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}