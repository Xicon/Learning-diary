const books = require('../data/bookList')

const resolvers = {
  Query: {
    books: () => books,
  },
};
module.exports = resolvers