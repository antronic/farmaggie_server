module.exports = `
  input searchSaleInput {
    _id: String
    customer_name: String
    sold_date: String
  }

  input saleInput {
    customer_name: String
    pig_amount: Int
    price_per_kilogram: Float
    total_weight: Float
    avg_weight: Float
    total_price: Float
  }

  input updateSaleInput {
    _id: String!
    customer_name: String
    pig_amount: Int
    price_per_kilogram: Float
    total_weight: Float
    avg_weight: Float
    total_price: Float
  }
`