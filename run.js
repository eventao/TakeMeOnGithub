/**
 * Created by forli on 2017/3/29.
 */
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();
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
router.get("/user/details.html",function(req,res){
    res.json({});
});
var userDb = require('./server/proceed/user');
userDb.init(router);

app.use("/",router);
app.use("/",express.static(__dirname));
var port = 8003;
app.listen(port,function(){
    console.log("server is running on "+port);
});
