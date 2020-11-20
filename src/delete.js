// 删除相关操作
const { User } = require('./module')

!(async function () {
  // // 删除博客
  // // -- DELETE FROM `blogs` WHERE `title` = '晴天'
  // const deleteRes = await Blog.destroy({
  //   where: {
  //     title: '晴天'
  //   }
  // })
  // console.log('deleteRes: ', deleteRes > 0) // deleteRes 表示删除的条数

  // 删除用户
  // -- DELETE FROM `users` WHERE `id` = 2
  // 注：由于 user 和 blog 有外键关联，所以当删除 user 时也会删除 user 对应的 blog(当外键的 OnUpdate 为 CASCADE时，否则删除失败)
  const deleteUserRes = await User.destroy({
    where: {
      id: 2
    }
  })
  console.log('deleteUserRes: ', deleteUserRes);
})()