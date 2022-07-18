const { resolve } = require('path')

const express = require('express')
const { ApolloServer } = require('apollo-server')
const cors = require('cors')
const app = express()

const typeDefs = require('./schema/bookList')
const resolvers = require('./resolvers/bookResolve')

app.use(cors())
app.use('/images', express.static(resolve(__dirname, './public/images')))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${ url }`)
})