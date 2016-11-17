const Api = require('./Api');

class City extends Api {
  constructor(options) {
    super('cities', options)
  }

  getByRegionName(regionName) {
    return this.get({ regionName })
  }
}

module.exports = City;