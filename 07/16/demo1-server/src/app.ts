import { ApolloServer } from 'apollo-server'

import typeDefs from './schema'
import resolvers from './resolvers'


const server = new ApolloServer({
  resolvers,
  typeDefs,
  csrfPrevention: true,
  cache: 'bounded',
})

server?.listen().then((data: { url: string }) => {
  console.log(`🚀 Server ready at ${ data.url }`)
})