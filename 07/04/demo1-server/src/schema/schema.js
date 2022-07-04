'use strict';

const {gql} = require('apollo-server');

const typeDefs = gql`
	type Books{
		id:ID!
		name:String!
		uri:String!
		author:Author
	}
	type Author{
		id:ID!
		name:String!
	}
	type Query {
		books:[Books]
	}
`;

module.exports = typeDefs;