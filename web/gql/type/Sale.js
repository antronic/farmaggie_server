module.exports = `
  type Sale {
    _id: String!
    sale_code: Int!
    customer_name: String
    pig_amount: Int
    price_per_kilogram: Float
    total_weight: Float
    avg_weight: Float
    total_price: Float
    created_at: String
    updated_at: String
  }
`