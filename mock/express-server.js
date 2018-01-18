let express = require('express');
let app = express();
app.listen(3000);

let fs = require('fs');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
//设置静态文件目录为项目根目录
app.use(express.static(__dirname));
//轮播图数据
let sliders = require('./sliders');

//读取数据的工具函数
function read(cb) {
  fs.readFile("./book.json","utf8",(err,data)=>{
    if(err||data.length==0){
      cb([]) // 如果有错误 或者文件没长度 就是空数组
    }else{
      cb(JSON.parse(data));//将数据转成对象
    }
  })
}
//写数据的工具函数
function write(data,cb) {
  fs.writeFile("./book.json",JSON.stringify(data),cb);
}
let pageSize = 5;// 每页显示五个

//跨域请求统一处理部分  前后端分离的时候也可以通过此种方式访问服务器
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options 当服务器发送put等请求时有时会尝试先发送一个option的试探请求 快速返回*/
  else  next();
});
app.get('/',function (req,res) {
  res.sendFile('./index.html',{root:__dirname});
});

app.get('/page',function (req,res) {
  let offset = parseInt(req.query.offset);
  read(function (books) {
    let result = books.reverse().slice(offset,offset+pageSize);
    let hasMore = true;
    if(books.length<=offset+pageSize){
      hasMore = false;
    }
    res.json({hasMore,books:result});
  });
});

//客户端向服务器请求接口，服务器响应res数据给客户端
// 请求/sliders
app.get("/sliders",(req,res)=>{
  res.json(sliders);
});
//home 请求返回的热门图书
app.get('/hot',function (req,res) {
  read(function (books) {
    let hot = books.reverse().slice(0, 6);
    res.json(hot);
  });
});
//请求图书列表
app.get('/book',function (req,res) {
  let id = parseInt(req.query.id);
  if(!isNaN(id)){
    read(function (books) {
      let book = books.find(item=>item.bookId===id);
      if(!book) book = {};
      res.json(book);
    });
  }else{
    read(function (books) {
      res.json(books.reverse());
    })
  }
});








