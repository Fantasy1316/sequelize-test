// 同步数据库
const seq = require('./seq')

require('./module')

// test
seq.authenticate().then(() => {
  console.log('ok');
}).catch(err => {
  throw new Error(err);
})

seq.sync({ force: true }).then(() => {
  console.log("Sync Success!")
  process.exit();
})