const path = require('path');
const Koa = require('koa');
const debug = require('debug')('dev');
const router = require('koa-router')();
const logger = require('koa-logger');
const server = require('koa-static');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const favicon = require('koa-favicon');
const cliLog = require('./libs/cliLog');
const cityApi = require('./controller/cityApi');
const app = new Koa();
// cliLog.warn(render('index'));


app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger())
  .use(server(path.join(__dirname, '/public')))
  .use(bodyParser())
  .use(favicon(path.join(__dirname, '/favicon.ico')));

router
  .use(views(path.join(__dirname, '/views'), { extension: 'pug' }));


router.get('/', async ctx => {
  console.log(cityApi.get());

  cliLog.warn(ctx.request.body);
  await ctx.render('index', {
    content: 'laichuanfeng',
    props: JSON.stringify({ name: 'lai' })
  });
});

app.on('error', async(err, ctx) => {
  ctx.status = (err.status || 500);
  debug(err);
  await ctx.render('error', {
    message: err.message,
    error: err
  });
});
module.exports = app;

