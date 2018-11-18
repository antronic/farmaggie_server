module.exports = `
  type deleteResponse {
    n: Int
    ok: Int
  }

  type Mutation {
    createVaccine(vaccine: createVaccineInput): Vaccine
    createPig(pig: createPigInput): Pig
    createBill(bill: createBillInput): Bill
    createBeacon(beacon: createBeaconInput): Beacon

    deleteVaccine(vaccine: deleteVaccineInput): deleteResponse
  }
`