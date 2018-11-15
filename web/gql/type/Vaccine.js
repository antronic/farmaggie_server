module.exports = `
  type VaccineInList {
    _id: String
    early_expired_date: String
    later_expired_date: String
    count: Int
  }

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