module.exports = `
  input searchPigletPenInput {
    _id: String
  }

  input pigletPenInput {
    coop_number: Int!
    pig_amount: Int!
  }

  input updatePigletPenInput {
    _id: String!
    coop_number: Int
    pig_amount: Int
  }

  input createPigletVaccineInjectionInput {
    piglet_pen: String!
    fmd: String
    csf: String
    pseudo: String
  }

  input updatePigletVaccineInjectionInput {
    _id: String!
    fmd: String
    csf: String
    pseudo: String
  }

  input deletePigletPenInput {
    _id: String!
  }
`