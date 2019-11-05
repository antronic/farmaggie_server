module.exports = `
  input searchPigletPenInput {
    _id: String
  }

  input pigletPenInput {
    coop_number: Int!
    pig_amount: Int!
    vaccine_injection: breederVaccineInjectionInput
  }

  input updatePigletPenInput {
    _id: String!
    coop_number: Int!
    pig_amount: Int!
    vaccine_injection: breederVaccineInjectionInput
  }
`