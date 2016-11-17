const Api = require('./Api');
const rp = require('request-promise');
const cliLog = require('../libs/cliLog');

class City extends Api {
  constructor(options) {
    super('movies', options)
  }

  getByCityId(cityId) {
    return this.get({ cityId });
  }

  getById(id) {
    const url = `${this.options.url}/${id}`;
    return rp(Object(this.options, { url }))
      .then(res => res)
      .catch(e => cliLog.error(e));
  }
}

module.exports = City;