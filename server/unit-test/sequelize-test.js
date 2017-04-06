/**
 * Created by forli on 2017/4/6.
 */
var seqDataBase = require('../sequelize-mysql/data-base');
describe('sequelize',function(){
    it('同步用户表',function(){
        seqDataBase.createUser().then(function(res){
            var a = res;
        });
    })
});