module.exports = `
  type Breeding {
    created_at: String
    boar: String
  }

  type PigletVaccineInjection {
    iron: String
    pcv: String
    myco: String
  }

  type Farrowing {
    farrow_date: String
    piglet_amount: Int
  }

  type FarrowingInformation {
    _id: String!
    breeding: Breeding
    farrowing: Farrowing
    piglet_vaccine_injection: PigletVaccineInjection
    created_at: String
    updated_at: String
  }

  type BreederVaccineInjection {
    fmd: String
    csf: String
    pseudo: String
  }

  type Breeder {
    _id: String!
    pig: Pig
    farrowing_information: [FarrowingInformation]
    vaccine_injection: BreederVaccineInjection
    created_at: String
    updated_at: String
    coop_number: Int
  }
`