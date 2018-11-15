const fetch = require('node-fetch')

module.exports = {
  vaccines: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.getVaccine(_args)
  },

  vaccines_list: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.getVaccineList(_args)
  },

  pigs: async (_source, { request }, { dataSources }) => {
    const req = {
      request: JSON.stringify(request || {})
    }

    return dataSources.farmAPI.getPig(req)
  },

  bills: async (_source, { request }, { dataSources }) => {
    const req = {
      request: JSON.stringify(request || {})
    }

    return dataSources.farmAPI.getBill(req)
  },

  users: () => {},
}