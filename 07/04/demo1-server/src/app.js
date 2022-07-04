'use strict';

const {ApolloServer} = require('apollo-server');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(() => {
  console.log('net');
});