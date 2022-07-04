'use strict';

const books = require('../data/data');

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;