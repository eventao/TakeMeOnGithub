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

    router.get("/findUser",function(req,res){
        var pIndex = req.query.pageIndex;
        var pSize = req.query.pageSize;
        pIndex = Number(pIndex);
        pSize = Number(pSize);
        console.log(pIndex+":is page index.");

        dbSequelize.findUserByPager(null,{pageIndex:pIndex,pageSize:pSize}).then(function(r){
            var result = {
                status:0,
                message:"",
                contents:[],
                total:r.length
            };
            var start = pIndex * pSize;
            var end = start + pSize;
            if(end > r.length){
                end = r.length;
            }
            for(var i = start;i < end;i++){
                var rTemp = r[i];
                var data = {
                    id:rTemp.dataValues.id,
                    userName:rTemp.dataValues.userName,
                    createAt:rTemp.dataValues.createdAt,
                    updateAt:rTemp.dataValues.updatedAt
                };
                result.contents.push(data);
            }
            // r.forEach(function(rTemp){
            //     var data = {
            //         id:rTemp.dataValues.id,
            //         userName:rTemp.dataValues.userName,
            //         createAt:rTemp.dataValues.createdAt,
            //         updateAt:rTemp.dataValues.updatedAt
            //     };
            //     result.contents.push(data);
            // });
            res.json(result);
        });
    });

};