module.exports = `
  type Pig {
    _id: String
    beacon_id: String
    name: String!
    age: Int
    ear_no: String
    species: String
    pork_breast: String

    birthdate: String
    entered_date: String
    active: Boolean

    vaccine: [String]

    created_by: String
    created_at: String
    updated_at: String
  }
`