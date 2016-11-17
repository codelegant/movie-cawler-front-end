const rp = require('request-promise');
const cliLog = require('../libs/cliLog');
const debug = require('debug')('debug');

class Api {
  constructor(path, options) {
    this.options = Object.assign({
      uri: `http://127.0.0.1:8080/${path}`,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    }, options);
  }

  get(qs = {}) {
    return rp(Object.assign(this.options, { qs }))
      .then(res => res)
      .catch(e => cliLog.error(e));
  }

  put() {
    return rp(this.options)
      .then(res => res)
      .catch(e => cliLog.error(e))
  }
}

module.exports = Api;