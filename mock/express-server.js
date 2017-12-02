let express = require('express');
let app = express();
app.listen(3000);

let fs = require('fs');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
//将静态文件目录设置为项目根目录
app.use(express.static(__dirname));

let sliders = require('./sliders');

//读取数据的工具函数
function read(cb) {
  fs.readFile("./book.json","utf8",(err,data)=>{
    if(err||data.length==0){
      cb([])
    }else{
      cb(JSON.parse(data));//将数据转成对象
    }
  })
}
//写数据的工具函数
function write(data,cb) {
  fs.writeFile("./book.json",JSON.stringify(data),cb);
}

//跨域请求统一处理部分
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});

// 请求/sliders
app.get("/sliders",(req,res)=>{
  res.json(sliders);
})


