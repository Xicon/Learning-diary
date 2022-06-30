const http = require('http')

const express = require('express')

const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPlugDrainHttpServer } = require('apollo-server-core')

async function startApolloServer(typeDefs, resolvers) {
	const app = express()
	const httpServer = http.createServer(app)
	const server = new ApolloServer({
		typeDefs, resolvers, csrfPrevention: true, cache: 'bounded', plugins: [ApolloServerPlugDrainHttpServer({ httpServer })],
	})

	await server.start()
	server.applyMiddleware({ app })
	await new Promise(resolve => httpServer.listen({ port: 4001 }, resolve))
	console.log(`🚀 Server ready at http://localhost:4001${ server.graphqlPath }`)
}