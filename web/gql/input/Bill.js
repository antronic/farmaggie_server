module.exports = `
  union value = String | Double | Int

  type createBillInput {
    name: String!

    type: BillType!
    value: value!
  } 
`