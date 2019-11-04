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

  async getVaccineList(vaccine) {
    return this.get(
      'vaccine/list',
      vaccine,
    )
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

  async deleteVaccine({ vaccine }) {
    return this.delete(
      `vaccine/delete?_id=${vaccine._id}`,
    )
  }

  async getPig(pig) {
    console.log(pig)
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

  async deletePig({ Pig }) {
    return this.delete(
      `Pig/delete?_id=${Pig._id}`,
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

  async getBeacon(beacon) {
    return this.get(
      'beacon',
      beacon,
    )
  }

  async createBeacon(beacon) {
    return this.post(
      'beacon/add',
      beacon,
    )
  }

  async deleteBeacon({ beacon }) {
    return this.delete(
      `beacon/delete?_id=${beacon._id}`,
    )
  }

  async stampMovement(movement) {
    return this.post(
      'movement/stamp',
      movement,
    )
  }

  async createFarrowingRoom(breeder) {
    const result = await this.post(
      'farrowing-room',
      breeder
    )
    return result
  }

  async getFarrowingRoom(breeder) {
    return this.get(
      'farrowing-room',
      breeder
    )
  }

  async updateFarrowingRoom(breeder) {
    return this.patch(
      'farrowing-room',
      breeder
    )
  }
}