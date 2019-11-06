module.exports = `
  input searchBreederInput {
    _id: String
  }

  input breedingInput {
    created_at: String!
    boar: String!
  }

  input pigletVaccineInjectionInput {
    iron: String!
    pcv: String!
    myco: String!
  }

  input farrowingInput {
    farrow_date: String!
    piglet_amount: Int!
  }

  input farrowingInformationInput {
    breeding: breedingInput!
    farrowing: farrowingInput!
    piglet_vaccine_injection: pigletVaccineInjectionInput!
  }

  input createFarrowingInformationInput {
    breeder: String!
    breeding: breedingInput!
    farrowing: farrowingInput!
    piglet_vaccine_injection: pigletVaccineInjectionInput!
  }

  input breederVaccineInjectionInput {
    fmd: String
    csf: String
    pseudo: String
  }

  input createPigletVaccineInjectionInput {
    piglet_pen: String!
    fmd: String
    csf: String
    pseudo: String
  }

  input breederInput {
    pig: String!
    vaccine_injection: breederVaccineInjectionInput
    coop_number: Int
  }

  input updateBreederInput {
    _id: String!
    pig: searchPigInput
    vaccine_injection: breederVaccineInjectionInput
    coop_number: Int
  }
`