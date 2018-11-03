module.exports = `
  type Query {
    vaccines(request: searchVaccineInput): [Vaccine]

    pigs(request: searchPigInput): [Pig]

    bills: [Bill]

    users: [User]
  }
`