const path = require('path');
const Koa = require('koa');
const debug = require('debug')('dev');
const router = require('koa-router')();
const logger = require('koa-logger');
const server = require('koa-static');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const pug = require('pug');
const app = new Koa();

const cliLog = require('./libs/cliLog');

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger())
  .use(server(path.join(__dirname, '/public')))
  .use(bodyParser())
  .use(views(path.join(__dirname, '/views'), {map: {extension: 'pug'}}));

router.get('/', async()=> {
  await this.render('index');
});

app.on('error', function (err, ctx) {
  cliLog.error(err);
  debug(err);
});
module.exports = app;