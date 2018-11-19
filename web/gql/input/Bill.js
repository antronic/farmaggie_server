module.exports = `
  input createBillInput {
    name: String!

    type: BillType!
    value: Float!

    amount: Float!
    unit: String!
  }

  input deleteBillInput {
    _id: String!
  }
`