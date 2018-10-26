require('dotenv').config()
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./type')
const resolvers = require('./resolver')
const mocks = require('./mock')

const FarmAPI = require('./api/FarmAPI')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: false,
  dataSources: () => ({
    farmAPI: new FarmAPI(),
  })
});

server.listen(process.env.GQL_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});