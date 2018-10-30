module.exports = `
  type Query {
    vaccines: [Vaccine]
    pigs(request: createPigInput): [Pig]
    bills: [Bill]
    users: [User]
  }
`