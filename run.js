/**
 * Created by forli on 2017/3/29.
 */
var bodyParser = require('body-parser');
var busboy = require('connect-busboy');
var websocketServer = require('./server/websocket-server');
// 引用express框架模块，将其内部的exports赋值给
// express变量。
var express = require('express');
//调用express方法，将返回值赋值给app变量
var app = express();
var httpServer = websocketServer.initalWebsocket(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(busboy());

app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
});

//调用express的Router方法，将返回值赋给router变量
var router = express.Router();
//调用router对象的get方法，注册"/students"路由
//路由就是服务器端根据客户端的访问地址，找到相应的
//服务器端资源，响应给客户端。
//因为是get，所以该动态资源可以在浏览器的地址栏
//访问,http://localhost:8123/students.
//也可以使用XMLHttpRequest("get","/students")访问
router.get("/students",function(req,res){
    //req就是request http 客户端请求对象
    //包括客户端信息(ip)，操作系统，版本，
    //软件信息(浏览器，http客户端等)
    //还包括客户端请求传递的数据

    //res就是response，表示服务器端根据
    //客户端传递的参数，组织的服务器端数据
    //响应给客户端

    // res.write("你好，我是学生数据！");
    // res.end();
    var data = {
        message:"获取数据成功",
        contents:[
            {
                name:"赵川",
                gender:"男",
                age:18,
                address:{
                    province:"四川",
                    city:"德阳",
                    district:"罗江",
                    country:"金山"
                },
                favorites:["篮球",
                    "足球", "唱歌","妹子","游泳"]
            },
            {
                name:"李谨圻",
                gender:"男",
                age:16,
                address:{
                    province:"四川",
                    city:"南充",
                    district:"仪陇",
                    country:"复兴"
                }
            }
        ]
    };
    res.json(data);
});
//将动态资源的路径设置为静态资源路径可以将动态资源
//伪装为静态资源
router.get("/user/details.html",function(req,res){
    var result = "<div><h1>服务器端html字符串</h1></div>";
    //设置服务器端响应内容的类型
    res.setHeader('Content-Type',
        'text/html;charset=UTF-8');
    res.write(result);
    //关闭本次http连接
    res.end();
    // res.json({});
});
//引入自定义user模块，将其exports对象赋值给userDb变量
var userDb = require('./server/proceed/user');
userDb.init(router);
var doc = require('./server/proceed/document');
doc.init(router);

app.use("/",router);
app.use("/",express.static(__dirname));
var port = 8003;
httpServer.listen(port,function(){
    console.log("server is running on "+port);
});
