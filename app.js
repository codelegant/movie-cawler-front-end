const path = require('path');
const Koa = require('koa');
const debug = require('debug')('dev');
const router = require('koa-router')();
const logger = require('koa-logger');
const server = require('koa-static');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const pug = require('pug');
const cliLog = require('./libs/cliLog');

const app = new Koa();
// cliLog.warn(render('index'));


app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger())
  .use(server(path.join(__dirname, 'public')))
  .use(bodyParser());

router
  .use(views(path.join(__dirname, '/views'), { extension: 'pug' }));


router.get('/', async ctx => {
  await ctx.render('index');
});

app.on('error', async (err, ctx) => {
  ctx.status = (err.status || 500);
  debug(err);
  await ctx.render('error', {
    message: err.message,
    error: err
  });
});
module.exports = app;

