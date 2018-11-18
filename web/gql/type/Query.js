module.exports = `
  type Query {
    vaccines_list: [VaccineInList]
    vaccines(request: searchVaccineInput): [Vaccine]

    pigs(request: searchPigInput): [Pig]

    bills: [Bill]

    beacons(request: searchBeaconInput): [Beacon]

    users: [User]
  }
`