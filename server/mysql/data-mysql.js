/**
 * Created by forli on 2017/4/5.
 */
var mysqlConf = require('../configurations/database').mysql;
var mysql = require('mysql');
var result = {
    getUsers:function(){
        var connection = mysql.createConnection(mysqlConf);
        connection.connect();
        var queryText = "select * from userinfo as userInfo";
        return connection.query(queryText,null,function(err,rows,fields){
            console.log("returned ！");
            if(err){
                console.log(err);
                return;
            }
            console.log(rows);
            connection.end();
        });
    }
};
exports.db = result;
