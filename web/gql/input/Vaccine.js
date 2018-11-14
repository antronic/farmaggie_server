module.exports = `
  input searchVaccineInput {
    name: String

    price: Float
    pig_ages: [Int]

    expired_date: String
    received_date: String

    created_by: String
    created_at: String
  }

  input deleteVaccineInput {
    _id: String!
  }

  input createVaccineInput {
    name: String!

    price: Float
    pig_ages: [Int]

    expired_date: String
    received_date: String

    created_by: String
    created_at: String
  }
`