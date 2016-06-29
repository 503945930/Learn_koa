var router = require('koa-router')();

//

router.get('/', function *(next) {
  var start = new Date;
  var ms = new Date - start;

  yield this.render('index', {
    title: 'Hello World Koadda!'
  });
});

//logger



module.exports = router;
