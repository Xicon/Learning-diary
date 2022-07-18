import { gql } from 'apollo-server-express'

const typeDefs = gql`
	type Query {
		data:[Data]!
	}
	
	type Data{
		id:ID!
		type:String
		value:Int
	}
`

export default typeDefs