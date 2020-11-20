const { Blog, User } = require('./module')

// -- UPDATE `users` SET `userName`=?,`updatedAt`=? WHERE `id` = ?
!(async function () {
  const updateUser = await User.update({
    userName: "陈少荣"
  }, {
    where: {
      id: 1
    }
  })
  console.log('updateUser: ', updateUser[0] > 0)
})()