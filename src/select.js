// 查询相关操作
const { Blog, User } = require('./module')

!(async function () {
  // // 查询一条数据
  // // -- SELECT `id`, `userName`, `password`, `nickName`, `createdAt`, `updatedAt` FROM `users` AS `user` WHERE `user`.`nickName` = 'JayChou' LIMIT 1;
  // const jaychou = await User.findOne({
  //   where: {
  //     nickName: "JayChou"
  //   }
  // })
  // console.log('jaychou :', jaychou.dataValues)

  // // 查询指定字段
  // // -- SELECT `userName`, `nickName` FROM `users` AS `user` WHERE `user`.`id` = 1;
  // const jaychouName = await User.findOne({
  //   attributes: ['userName', 'nickName'],
  //   where: {
  //     id: 1
  //   }
  // })
  // console.log('jaychouName :', jaychouName.dataValues)

  // // 查询所有
  // // -- SELECT `userName`, `nickName` FROM `users` AS `user` ORDER BY `user`.`id` DESC;
  // const userList = await User.findAll({
  //   attributes: ['userName', 'nickName'],
  //   order: [ // 排序
  //     ['id', 'desc']
  //   ]
  // })
  // console.log('userList :', userList.map(user => user.dataValues))

  // // 分页查询
  // // -- SELECT `id`, `userName`, `password`, `nickName`, `createdAt`, `updatedAt` FROM `users` AS `user` ORDER BY `user`.`id` DESC LIMIT 0, 1;
  // const userPage = await User.findAll({
  //   limit: 1, // 每页条数
  //   offset: 0, // 查询起始位置
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })
  // console.log('userPage :', userPage.map(user => user.dataValues))

  // // 查询总数
  // // -- SELECT `id`, `userName`, `password`, `nickName`, `createdAt`, `updatedAt` FROM `users` AS `user` ORDER BY `user`.`id` DESC LIMIT 0, 1;
  // const userPageCount = await User.findAndCountAll({
  //   limit: 1,
  //   offset: 0,
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })
  // console.log('userPageCount', userPageCount.count, userPageCount.rows.map(user => user.dataValues))

  // // 连表查询1
  // // -- SELECT `blog`.`id`, `blog`.`title`, `blog`.`content`, `blog`.`userId`, `blog`.`createdAt`, `blog`.`updatedAt`, `user`.`id` AS `user.id`, `user`.`userName` AS `user.userName`, `user`.`nickName` AS `user.nickName` FROM `blogs` AS `blog` INNER JOIN `users` AS `user` ON `blog`.`userId` = `user`.`id` AND `user`.`userName` = '周杰伦' ORDER BY `blog`.`id` DESC;
  // const blogListWithUser = await Blog.findAndCountAll({
  //   order: [
  //     ['id', 'desc']
  //   ],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['userName', 'nickName'],
  //       where: {
  //         userName: '周杰伦'
  //       }
  //     }
  //   ]
  // })
  // console.log('blogListWithUser: ', blogListWithUser.count, blogListWithUser.rows.map(blog => {
  //   const blogVal = blog.dataValues;
  //   blogVal.user = blog.user.dataValues;
  //   return blogVal;
  // }))

  // 连表查询2(注：user 对 blog 是一对多关系)
  const userListWithBlog = await User.findAndCountAll({
    attributes: ['userName', 'nickName'],
    include: [
      {
        model: Blog
      }
    ]
  })
  console.log('userListWithBlog: ', userListWithBlog.count, userListWithBlog.rows.map(user => {
    const userVal = user.dataValues;
    userVal.blogs = userVal.blogs.map(blog => blog.dataValues);
    return userVal;
  }))
})()