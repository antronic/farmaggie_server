module.exports = `
  type Vaccine {
    _id: String
    name: String

    price: Float
    pig_ages: [Int]

    expired_date: String
    received_date: String

    created_by: String

    created_at: String
    updated_at: String
  }
`