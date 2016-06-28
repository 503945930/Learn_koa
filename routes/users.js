var router = require('koa-router')();

router.get('/users', function *(next) {
  this.body = 'this a users responseeeee!';
});

module.exports = router;
