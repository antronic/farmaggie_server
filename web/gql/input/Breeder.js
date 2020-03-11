module.exports = `
  input searchBreederInput {
    _id: String
  }

  input breedingInput {
    created_at: String
    boar: String
  }

  input pigletVaccineInjectionInput {
    iron: String
    pcv: String
    myco: String
  }

  input farrowingInput {
    farrow_date: String
    piglet_amount: Int
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

  input updateFarrowingInformationInput {
    _id: String!
    breeder: String
    breeding: breedingInput!
    farrowing: farrowingInput!
    piglet_vaccine_injection: pigletVaccineInjectionInput!
  }

  input deleteFarrowingInformationInput {
    _id: String!
  }

  input breederVaccineInjectionInput {
    breeder: String!
    fmd: String
    csf: String
    pseudo: String
  }

  input updateBreederVaccineInjectionInput {
    _id: String!
    fmd: String
    csf: String
    pseudo: String
  }

  input deleteBreederVaccineInjectionInput {
    _id: String!
  }

  input breederInput {
    pig: String!
    coop_number: Int
  }

  input updateBreederInput {
    _id: String!
    pig: searchPigInput
    coop_number: Int
  }

  input deleteBreederInput {
    _id: String!
  }
`