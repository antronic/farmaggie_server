module.exports = `
  enum BillType {
    VACCINE
    FOOD
    OTHER
  }

  type Bill {
    _id: String
    name: String

    type: BillType!
    value: Float!

    amount: Float!
    unit: String

    created_by: String

    created_at: String
    updated_at: String
  }
`