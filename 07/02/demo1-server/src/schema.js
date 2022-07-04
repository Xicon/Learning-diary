'use strict';
const {gql} = require('apollo-server');

const data = gql`
	type Query{
		books:[Books]!
	}
	type Books{
		id:ID!
		name:String!
		author:Author!
	}
	type Author{
		id:ID!
		name: String!
		photo:String
	}
`;

module.exports = data;