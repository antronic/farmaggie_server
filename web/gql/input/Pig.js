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
  }
`