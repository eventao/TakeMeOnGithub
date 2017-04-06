/**
 * Created by forli on 2017/4/6.
 */
var nodeMysql = require('node-mysql');
var mysqlConf = require('../configurations/database');
var nodeMyDb = nodeMysql.DB;
var cps = require('cps');
var nodeDbConn = new nodeMyDb(mysqlConf.mysql);

function cb(){
    var a = arguments;
}
nodeDbConn.connect(
    function(conn, callback){
        cps.seq([
                function(_, cb) {
                    conn.query('select * from userinfo limit 1', cb);
                },
                function(res, cb) {
                    console.log(res);
                    cb();
                }
            ],
            callback);
    },cb);
