module.exports = `
  type Mutation {
    createVaccine(name: String!, created_by: String): Vaccine
    createPig(beacon_id: String, name: String!, age: Int, birthdate: String): Pig
  }
`