const fetch = require('node-fetch')

module.exports = {
  vaccines: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.getVaccine(_args)
  },

  pigs: () => 'Resolved',
}