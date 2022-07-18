const {gql} = require('apollo-server')

const typeDefs = gql`
	type Book {
		id:ID!
		title: String!
		author: String!
    uri:String!
	}
	
	type Query {
		books: [Book]
	}
`

module.exports = typeDefs