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

  createFarrowingRoom: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createFarrowingRoom(_args)
  },

  updateFarrowingRoom: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.updateFarrowingRoom(_args)
  },

  createBreederPigsty: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createBreederPigsty(_args)
  },

  updateBreederPigsty: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.updateBreederPigsty(_args)
  },

  createPigletPen: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createPigletpen(_args)
  },

  updatePigletPen: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.updatePigletpen(_args)
  },

  createSale: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createSale(_args)
  },

  updateSale: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.updateSale(_args)
  },

  deleteSale: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.deleteSale(_args)
  },

  createFarrowingInformation: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createFarrowingInformation(_args)
  },

  createPigletPenVaccineInjection: async (_source, _args, { dataSources }) => {
    return dataSources.farmAPI.createPigletpenVaccineInjection(_args)
  },
}