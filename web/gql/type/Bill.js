module.exports = `
  enum BillType {
    VACCINE
    FOOD
    OTHER
  }

  type Bill {
    _id: String
    name: String

    type: BillType

    created_by: String

    created_at: String
    updated_at: String
  }
`