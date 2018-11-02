module.exports = `
  type Mutation {
    createVaccine(name: String!, created_by: String): Vaccine
    createPig(create: createPigInput): Pig
    createBill(bill: createBillInput): Bill
  }
`