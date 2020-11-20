// 插入数据相关操作
const { Blog, User } = require('./module')

!(async function () {
  // 创建用户
  const jayChou = await User.create({
    userName: "周杰伦",
    password: "123456",
    nickName: "JayChou"
  })
  let jayChouId = jayChou.dataValues.id;

  const weiboPan = await User.create({
    userName: "潘玮柏",
    password: "123456",
    nickName: "WeiboPan"
  })

  let weiboPanId = weiboPan.dataValues.id;

  // 创建博客
  const blog1 = await Blog.create({
    title: "七里香",
    content: "窗外的麻雀，在电线杆上多嘴，你说这一句，很有夏天的感觉，手中的铅笔，在纸上来来回回，我用几行字形容你是我的谁。秋刀鱼的滋味，猫和你都想了解，初恋的滋味就这样被我们寻回。那温暖的阳光，像刚摘的鲜艳草莓，你说你舍不得吃掉这一种感觉。",
    userId: jayChouId
  })
  const blog2 = await Blog.create({
    title: "反转地球",
    content: "wo wo wo 然我看见你双手，跟着我的节奏一起反转地球，wo wo wo 现在不需要啰嗦，赶快跟着节奏一起来反转地球。",
    userId: weiboPanId
  })
  const blog3 = await Blog.create({
    title: "晴天",
    content: "故事的小黄花，从出生那年就飘着，童年的荡秋千，随记忆一直晃到现在，ruo so so xi dou xi la ao la xi xi xi xi la xi la suo。",
    userId: jayChouId
  })
})()