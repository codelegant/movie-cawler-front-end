const path = require('path');
const Koa = require('koa');
const debug = require('debug')('debug');
const router = require('koa-router')();
const logger = require('koa-logger');
const server = require('koa-static');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const favicon = require('koa-favicon');
const compress = require('koa-compress');

const cliLog = require('./libs/cliLog');
const City = require('./model/City');
const Movie = require('./model/Movie');

const app = new Koa();
// cliLog.warn(render('index'));


app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(compress({
    level: 6,
    flush: require('zlib').Z_SYNC_FLUSH,
  }))
  .use(logger())
  .use(server(path.join(__dirname, '/front/dist')))
  .use(bodyParser())
  .use(favicon(path.join(__dirname, '/favicon.ico')));

router
  .use(views(path.join(__dirname, '/views'), { extension: 'pug' }));


router.get('/', async ctx => {
  try {
    const city = new City();
    const movie = new Movie();
    // const cities = await city.get();

    // const currentCity = await city.getByRegionName('深圳');
    // const movies = await movie.getByCityId(currentCity[ 0 ]._id);

    await ctx.render('index', {
      content: '',
      props: JSON.stringify({})
    });
  } catch (e) {
    cliLog.error(e);
    return ctx.status = 500;
  }
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

