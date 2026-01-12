const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database, 
    username, 
    password, 
    {
        host,
        dialect: 'mysql',
    }
);

const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to MySQL has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the MySQL database:', error);
    }
};

module.exports = { sequelize, dbConnectMySql };