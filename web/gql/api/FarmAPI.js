const { RESTDataSource } = require('apollo-datasource-rest')

module.exports = class FarmAPI extends RESTDataSource {
  get baseURL() {
    return 'http://api:9000/api/'
  }

  async getVaccine(vaccine) {
    return this.get(
      'vaccine',
      vaccine,
    )
  }

  async createVaccine(vaccine) {
    return this.post(
      'vaccine/add',
      vaccine,
    )
  }
}