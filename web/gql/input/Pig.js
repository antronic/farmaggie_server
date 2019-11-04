module.exports = `
  input searchPigInput {
    _id: String
    beacon_id: String
    name: String
  }

  input deletePigInput {
    _id: String!
  }

  input createPigInput {
    beacon_id: String
    name: String
    age: Int
    birthdate: String

    ear_no: String
    species: String
    pork_breast: String
    entered_date: String
  }
`