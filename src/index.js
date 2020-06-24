'use strict';

const { ApolloServer } = require(`apollo-server`);

const { resolvers } = require(`./resolvers`);
const { typeDefs } = require(`./typedefs`);

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server
	.listen()
	.then(({ url }) => {
		console.log(`Server starts at ${url}`);
	});
