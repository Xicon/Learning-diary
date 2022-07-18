import data from '../data/index'

const resolvers= {
  Query: {
    data: () => data,
  },
}

export default resolvers