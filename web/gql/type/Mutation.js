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

    updatePig(pig: updatePigInput): Pig

    stampMovement(movement: createMovement): Movement

    deleteVaccine(vaccine: deleteVaccineInput): deleteResponse
    deletePig(pig: deletePigInput): deleteResponse
    deleteBeacon(beacon: deleteBeaconInput): deleteResponse

    createFarrowingRoom(breeder: breederInput): Breeder
    updateFarrowingRoom(breeder: updateBreederInput): Breeder
    deleteFarrowingRoom(breeder: deleteBreederInput): deleteResponse

    createBreederPigsty(breeder: breederInput): Breeder
    updateBreederPigsty(breeder: updateBreederInput): Breeder
    deleteBreederPigsty(breeder: deleteBreederInput): deleteResponse

    createBreederVaccineInjection(vaccine_injection: breederVaccineInjectionInput): BreederVaccineInjection
    updateBreederVaccineInjection(vaccine_injection: updateBreederVaccineInjectionInput): BreederVaccineInjection
    deleteBreederVaccineInjection(vaccine_injection: deleteBreederVaccineInjectionInput): deleteResponse

    createFarrowingInformation(farrowing_information: createFarrowingInformationInput): FarrowingInformation
    updateFarrowingInformation(farrowing_information: updateFarrowingInformationInput): FarrowingInformation
    deleteFarrowingInformation(farrowing_information: deleteFarrowingInformationInput): deleteResponse

    createPigletPen(pigletpen: pigletPenInput): PigletPen
    updatePigletPen(pigletpen: updatePigletPenInput): PigletPen
    deletePigletPen(pigletpen: deletePigletPenInput): deleteResponse

    createPigletPenVaccineInjection(vaccine_injection: createPigletVaccineInjectionInput): PigletPenVaccineInjection
    updatePigletPenVaccineInjection(vaccine_injection: updatePigletVaccineInjectionInput): PigletPenVaccineInjection
    deletePigletPenVaccineInjection(vaccine_injection: searchPigletPenInput): deleteResponse

    createSale(sale: saleInput): Sale
    updateSale(sale: updateSaleInput): Sale
    deleteSale(sale: deleteSaleInput): deleteResponse
  }
`