const fetch = require('node-fetch')

module.exports = {
  createVaccine: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createVaccine(_args)
  },
  createPig: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createPig(_args)
  },
  createBeacon: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createBeacon(_args)
  },
  createBill: async (_soource, _args, { dataSources}) => {
    return dataSources.farmAPI.createBill(_args)
  },

  stampMovement: async (_soource, _args, { dataSources }) => {
    return dataSources.farmAPI.stampMovement(_args)
  },

  deleteVaccine: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.deleteVaccine(_args)
  },

  deletePig: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.deletePig(_args)
  },

  deleteBeacon: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.deleteBeacon(_args)
  },
}