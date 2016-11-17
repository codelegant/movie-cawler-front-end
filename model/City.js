const rp = require('request-promise');
const cliLog = require('../libs/cliLog');

class City {
  constructor(options) {
    this.options = Object.assign({
      uri: 'http://127.0.0.1:8080/cities',
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    }, options);
  }

  get() {
    return rp(this.options)
      .then(res => res)
      .catch(e => cliLog.error(e));
  }

  put() {
    return rp(this.options)
      .then(res => res)
      .catch(e => cliLog.error(e))
  }
}

module.exports = City;