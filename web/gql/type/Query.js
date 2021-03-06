module.exports = `
  type Query {
    vaccines_list: [VaccineInList]
    vaccines(request: searchVaccineInput): [Vaccine]

    pigs(request: searchPigInput): [Pig]

    bills: [Bill]

    beacons(request: searchBeaconInput): [Beacon]

    users: [User]

    pigFarrowings(request: searchBreederInput): [Breeder]
    breederPigsty(request: searchBreederInput): [Breeder]
    pigletPens(request: searchPigletPenInput): [PigletPen]

    sales(request: searchSaleInput): [Sale]
  }
`