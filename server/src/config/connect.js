const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_test', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});
const connect = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = {connect}