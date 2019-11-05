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

    stampMovement(movement: createMovement): Movement

    deleteVaccine(vaccine: deleteVaccineInput): deleteResponse
    deletePig(pig: deletePigInput): deleteResponse
    deleteBeacon(beacon: deleteBeaconInput): deleteResponse

    createFarrowingRoom(breeder: breederInput): Breeder
    updateFarrowingRoom(breeder: updateBreederInput): Breeder

    createBreederPigsty(breeder: breederInput): Breeder
    updateBreederPigsty(breeder: updateBreederInput): Breeder

    createPigletPen(pigletpen: pigletPenInput): PigletPen
    updatePigletPen(pigletpen: updatePigletPenInput): PigletPen
  }
`