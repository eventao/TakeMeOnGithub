/**
 * Created by forli on 2017/4/6.
 */

var Sequelize = require('sequelize');
var uuid = require('node-uuid');
//引入数据库配置，比如数据库主机，端口号，数据库名，
//登录用户名，密码，数据库类型数据库最大连接池，
//每个连接池的最大连接数
var baseConf = require('../configurations/database');
var mysqlConf = baseConf.mysql;
//调用Sequelize函数，设置数据库主机等信息
var sequelize = new Sequelize(
    mysqlConf.database,
    mysqlConf.user,
    mysqlConf.password,
    {
        host: mysqlConf.host,
        port:3306,
        dialect: mysqlConf.dialect,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        storage: 'path/to/database.sqlite'
    });
//创建与数据库中数据表对映的orm对象
// (orm Object Relational Mapping 对象关系映射)
//sequeize.define方法
// 第一个参数 数据库表名 数据类型 string
// 第二个参数 数据表字段的定义  数据类型 object
// 第三个参数 同步数据表的行为参数  数据类型 object
var User = sequelize.define(
    'userMessage',
    {
        id:{
            type: Sequelize.STRING,
            primaryKey:true
        },
        userName: {
            type: Sequelize.STRING,
            field: 'username'
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        realName: {
            type: Sequelize.STRING
        },
        gender:{
            type:Sequelize.INTEGER
        },
        age: {
            type: Sequelize.INTEGER
        },
        qq: {
            type: Sequelize.STRING
        },
        remark: {
            type: Sequelize.STRING
        },
        status:{
            type:Sequelize.INTEGER,
            defaultValue:0
        }
    },
    {
        //默认为false，修改表名为复数，true不修改表名
        //与数据库表名一致
        freezeTableName: true
    }
);

var ReportUnit = sequelize.define(
    "reportUnit",
    {
        id:{
            type:Sequelize.STRING,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.INTEGER
        },
        remark:{
            type:Sequelize.STRING
        }
    }
);
exports.getUnits = function(){
    return ReportUnit.findAll();
};
exports.createReportUnit = function(unit){
    return ReportUnit.sync().then(function(){
        return ReportUnit.create({
            id:uuid(),
            name:unit.name,
            status:unit.status,
            remark:unit.remark
        });
    });
};

exports.updateUser = function(user){
    if(!user.id) return;
    return User.sync().then(function(){
        var userData = {
            userName:user.userName,
            email:user.email,
            phoneNumber:user.mobile,
            realName:user.realName,
            age:user.age,
            qq:user.qq
        };
        if(user.remark){
            userData.remark = user.remark;
        }
        return User.update(userData,{
                where:{
                    id:user.id
                }
            });
    });
};
//删除用户
exports.removeUser = function(id){
    return User.update(
        {
        status:-1
    },{
        where:{
            id:id
        }
    });
};

//创建用户
exports.createUser = function(user){
    return User.sync().then(function () {
        return User.create({
            id: "id"+ Math.random(),
            userName:user.userName,
            password:"a121212",
            email:user.email,
            phoneNumber:user.mobile,
            realName:user.realName,
            age:user.age,
            qq:user.qq,
            remark:user.remark
        });
    });
};
//查找所有用户
exports.getUser = function(){
    return User.sync().then(function () {
        return User.findAll({
            where:{
                status:0
            }
        });
    });
};
//按id查找
exports.findUserById = function(id){
    return User.sync().then(function(){
        return User.findById(id);
        // User.findById(id).then(function(user) {
        // })
    });
};
//按条件查找
exports.findUserByWhere = function(where){
    return User.sync().then(function(){
        return User.findOne({where:where});
    });
};
//分页查找用户
exports.findUserByPager = function(where,pager){
    return User.sync().then(function(){
        var start = pager.pageIndex * pager.pageSize;
        return User.findAndCountAll({
                where: where,
                offset: start,
                limit: pager.pageSize
            })
            .then(function(result) {
                console.log(result.count);
                console.log(result.rows);
                return result.rows;
            });
    });
};


