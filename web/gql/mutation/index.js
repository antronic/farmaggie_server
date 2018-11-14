const fetch = require('node-fetch')

module.exports = {
  createVaccine: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createVaccine(_args)
  },
  createPig: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createPig(_args)
  },
  createBill: async (_soource, _args, { dataSources}) => {
    return dataSources.farmAPI.createBill(_args)
  },

  deleteVaccine: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.deleteVaccine(_args)
  },
}