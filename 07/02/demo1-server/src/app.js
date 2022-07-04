const {ApolloServer} = require('apollo-server');

const typeDefs = require('./schema');
const mocks = require('./data');

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(() => {
  console.log('net');
});