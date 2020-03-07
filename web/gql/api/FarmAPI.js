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

  async updatePig(pig) {
    return this.patch(
      'pig',
      pig
    )
  }

  async deletePig({ pig }) {
    return this.delete(
      `pig?_id=${pig._id}`,
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

  async createBreederPigsty(breeder) {
    const result = await this.post(
      'breeding-pigsty',
      breeder
    )
    return result
  }

  async getBreederPigsty(breeder) {
    return this.get(
      'breeding-pigsty',
      breeder
    )
  }

  async updateBreederPigsty(breeder) {
    return this.patch(
      'breeding-pigsty',
      breeder
    )
  }

  async createBreederVaccineInjection(vaccine_injection) {
    return this.post(
      'breeder/vaccine-injection',
      vaccine_injection
    )
  }

  async updateBreederVaccineInjection(vaccine_injection) {
    return this.patch(
      'breeder/vaccine-injection',
      vaccine_injection
    )
  }

  async deleteBreederVaccineInjection({ vaccine_injection }) {
    return this.delete(
      `breeder/vaccine-injection?_id=${vaccine_injection._id}`,
    )
  }

  async createFarrowingInformation(farrowing_information) {
    return this.post(
      'farrowing-information',
      farrowing_information
    )
  }

  async updateFarrowingInformation(farrowing_information) {
    return this.patch(
      'farrowing-information',
      farrowing_information
    )
  }

  async deleteFarrowingInformation({ farrowing_information }) {
    return this.delete(
      `farrowing-information?_id=${farrowing_information._id}`,
    )
  }

  async createPigletpen(pigletpen) {
    const result = await this.post(
      'piglet-pen',
      pigletpen
    )
    return result
  }

  async getPigletpen(pigletpen) {
    return this.get(
      'piglet-pen',
      pigletpen
    )
  }

  async updatePigletpen(pigletpen) {
    return this.patch(
      'piglet-pen',
      pigletpen
    )
  }

  async createPigletpenVaccineInjection(vaccine_injection) {
    const result = await this.post(
      'piglet-pen/vaccine-injection',
      vaccine_injection
    )
    return result
  }

  async updatePigletpenVaccineInjection(vaccine_injection) {
    const result = await this.patch(
      'piglet-pen/vaccine-injection',
      vaccine_injection
    )
    return result
  }

  async deletePigletpenVaccineInjection({ vaccine_injection }) {
    const result = await this.delete(
      `piglet-pen/vaccine-injection?_id=${vaccine_injection._id}`
    )
    return result
  }

  async createSale(sale) {
    const result = await this.post(
      'sale',
      sale
    )
    return result
  }

  async getSales(sale) {
    return this.get(
      'sale',
      sale
    )
  }

  async updateSale(sale) {
    return this.patch(
      'sale',
      sale
    )
  }

  async deleteSale({ sale }) {
    return this.delete(
      `sale?_id=${sale._id}`,
    )
  }
}