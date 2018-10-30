const fetch = require('node-fetch')

module.exports = {
  createVaccine: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createVaccine(_args)
  },
  createPig: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createPig(_args)
  },
}