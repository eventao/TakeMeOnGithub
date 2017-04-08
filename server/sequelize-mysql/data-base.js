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
    'userinfo',
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

exports.createUser = function(){
    return User.sync().then(function () {
        return User.create({
            id: "id"+ Math.random(),
            userName: 'Hancock',
            password:"a121212"
        });
    });
};
exports.getUser = function(){
    return User.findAll();
};
