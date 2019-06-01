module.exports = `
  type Pig {
    _id: String
    beacon_id: String
    name: String!
    age: Int
    birthdate: String
    active: Boolean

    vaccine: [String]

    created_by: String
    created_at: String
    updated_at: String
  }
`