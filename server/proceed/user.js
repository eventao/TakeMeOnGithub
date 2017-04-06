/**
 * Created by forli on 2017/4/6.
 */
var dbSequelize = require('../sequelize-mysql/data-base');
exports.init = function(router){
    router.get("/updateUser",function(req,res){
        dbSequelize.createUser().then(function(r){
            var result = {
                id:r.dataValues.id,
                userName:r.dataValues.userName,
                createAt:r.dataValues.createdAt,
                updateAt:r.dataValues.updatedAt
            };
            res.json(result);
        });
    });

    router.post("/updateUser",function(req,res){
        dbSequelize.createUser().then(function(r){
            var result = {
                id:r.dataValues.id,
                userName:r.dataValues.userName,
                createAt:r.dataValues.createdAt,
                updateAt:r.dataValues.updatedAt
            };
            res.json(result);
        });
    });

    router.get("/findUser",function(req,res){
        dbSequelize.getUser().then(function(r){
            var result = {
                status:0,
                message:"",
                contents:[]
            };
            r.forEach(function(rTemp){
                var data = {
                    id:rTemp.dataValues.id,
                    userName:rTemp.dataValues.userName,
                    createAt:rTemp.dataValues.createdAt,
                    updateAt:rTemp.dataValues.updatedAt
                };
                result.contents.push(data);
            });
            res.json(result);
        });
    });

};