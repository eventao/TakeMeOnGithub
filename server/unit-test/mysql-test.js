/**
 * Created by forli on 2017/4/5.
 */
var dataMysql = require('../mysql/data-mysql');
describe('用户信息', function() {
    it('获取所有用户', function() {
        var r = dataMysql.db.getUsers(function(r1){
            console.log(r1);
        });
    });
});


