/**
 * Created by forli on 2017/4/17.
 */
var dataBase =
require('../sequelize-mysql/data-base');
exports.init = function(router){
    router.get("/createReportUnit",function(req,res){
        var unit = {
            name:req.query.name,
            status:0
        };
        dataBase.createReportUnit(unit).then(function(result){
            res.json(result);
        });
    });
    router.get("/getUnits",function(req,res){
        dataBase.getUnits().then(function(result){
            res.json(result);
        });
    })
};

