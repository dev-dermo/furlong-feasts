const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		name: String
		email: String
		role: String
		createdAt: String
		updatedAt: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
	}

	type Mutation {
		createUser(name: String!, email: String!, password: String!): Auth!
	}
`;

module.exports = typeDefs;
