// Sequelize模型（可理解为创建表）
const Sequelize = require('sequelize')
const seq = require('./seq')

const User = seq.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING
  }
});

const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


// 关联外键
Blog.belongsTo(User, { // 多对一
  foreignKey: "userId"
})

User.hasMany(Blog, { // 一对多
  foreignKey: "userId"
})

module.exports = {
  User,
  Blog
}