'use strict';

const mocks = {
  Query: () => ({
    books: () => [...new Array(6)],
  }),
  Books: () => ({
    id: () => 'id',
    name: () => 'books name',
    author: () => {
      return {
        id: 'author id',
        name: 'author name',
      };
    },
  }),
};

module.exports = mocks;