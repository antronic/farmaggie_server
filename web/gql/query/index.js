module.exports = {
  vaccines: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.getVaccine(_args)
  },

  vaccines_list: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.getVaccineList(_args)
  },

  pigs: async (_source, { request }, { dataSources }) => {
    const req = {
      request: JSON.stringify({...request, active: true} || {active: true})
    }

    return dataSources.farmAPI.getPig(req)
  },

  beacons: async (_source, { request }, { dataSources }) => {
    const req = {
      request: JSON.stringify(request || {})
    }

    return dataSources.farmAPI.getBeacon(req)
  },

  bills: async (_source, { request }, { dataSources }) => {
    const req = {
      request: JSON.stringify(request || {})
    }

    return dataSources.farmAPI.getBill(req)
  },

  users: () => {},

  pigFarrowings: (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.getFarrowingRoom(_args)
  },
}