/**
 * Created by forli on 2017/4/6.
 */

var Sequelize = require('sequelize');
var baseConf = require('../configurations/database');
var mysqlConf = baseConf.mysql;

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
        }
    },
    {
        freezeTableName: true
    }
);

//创建用户
exports.createUser = function(){
    return User.sync().then(function () {
        return User.create({
            id: "id"+ Math.random(),
            userName: 'Hancock',
            password:"a121212"
        });
    });
};
//查找所有用户
exports.getUser = function(){
    return User.sync().then(function () {
        return User.findAll();
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


