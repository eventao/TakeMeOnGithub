/**
 * Created by forli on 2017/4/6.
 */
var Sequelize = require('sequelize');
var baseConf = require('../configurations/database');
var mysqlConf = baseConf.mysql;

function sequelizeInit(){
    return new Sequelize(
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
}

exports.createUser = function(){
    var sequelize = sequelizeInit();
    var User = sequelize.define('userinfo', {
        id:{
            type: Sequelize.STRING
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
        mobileNumber: {
            type: Sequelize.STRING,
            field: 'mobile_number'
        },
        realName: {
            type: Sequelize.STRING,
            field: 'real_name'
        },
        age: {
            type: Sequelize.NUMBER
        },
        qq: {
            type: Sequelize.STRING
        },
        icon: {
            type: Sequelize.STRING
        },
        remark: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });
    return User.sync({force: true}).then(function () {
        return User.create({
            id: "id"+ Math.random(),
            userName: 'Hancock',
            password:"a121212"
        });
    });
};
