module.exports = `
  type Mutation {
    createVaccine(vaccine: createVaccineInput): Vaccine
    createPig(pig: createPigInput): Pig
    createBill(bill: createBillInput): Bill
  }
`