/**
 * Created by forli on 2017/3/29.
 */
var express = require('express');
var app = express();

app.use("/",express.static(__dirname));
var port = 8123;
app.listen(port,function(){
    console.log("server is running on " + port);
});
