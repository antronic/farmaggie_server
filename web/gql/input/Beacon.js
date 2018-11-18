module.exports = `
  input createBeaconInput {
    _id: String
    name: String

    mac: String!

    beacon_id: String!

    major: String
    minor: String

    color: String
  }

  input searchBeaconInput {
    _id: String
    name: String

    mac: String!

    beacon_id: String!
  }
`