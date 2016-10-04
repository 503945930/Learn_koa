import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import path from 'path';
import render from 'koa-ejs';
import onerror from 'koa-onerror';
import co from 'co';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import csrf from 'koa-csrf';


import router from './routes';




const app = new Koa();
const index = require('./routes/index');




render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
});


app.context.render = co.wrap(app.context.render);

app.use(convert(require('koa-static')(__dirname + '/public')));


// global middlewares
app.use(bodyParser());
app.use(convert(json()));
app.use(convert(logger()));

// csrf
app.use(csrf());



// routes definition
app.use(router.routes(), router.allowedMethods());


// mount root routes  
//app.use(koa.routes());

app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});



module.exports = app;
