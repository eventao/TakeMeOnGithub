/**
 * Created by forli on 2017/4/5.
 */
var mysqlConf = require('../configurations/database');
var mysql = require('mysql');
var connection = mysql.createConnection(mysqlConf.mysql);
var result = {
    getUsers:function(){
        connection.connect();
        var queryText = "select * from 'user-information' as userInfo";
        return connection.query(queryText,null,function(err,rows,fields){
            if(err)throw err;
            console.log(rows);
            connection.end();
        });
    }
};
exports.db = result;
