// Sequelize 配置
const Sequelize = require('sequelize')
const { username, password, host } = require('./config');

const seq = new Sequelize('koa2_blog_db', username, password, {
  host,
  dialect: 'mysql'
})

module.exports = seq;