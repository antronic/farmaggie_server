const { RESTDataSource } = require('apollo-datasource-rest')

function toParams(data) {
  return Object.keys(data).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
}
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

  async getPig(pig) {
    return this.get(
      'pig',
      pig,
    )
  }

  async createPig(pig) {
    return this.post(
      'pig/add',
      pig,
    )
  }

  async getBill(bill) {
    return this.get(
      'bill',
      bill,
    )
  }

  async createBill(bill) {
    return this.post(
      'bill/add',
      bill,
    )
  }
}