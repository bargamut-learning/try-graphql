'use strict';

const fs = require(`fs`).promises;
const path = require(`path`);
const { ApolloServer } = require(`apollo-server`);

const { resolvers } = require(`./resolvers`);

const pathToTypeDefs = path.resolve(__dirname, `schema.graphql`);

const initServer = async () => {
	const typeDefs = await fs.readFile(pathToTypeDefs, `utf8`);

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});
	
	server
		.listen()
		.then(({ url }) => {
			console.log(`Server starts at ${url}`);
		});
}

initServer();