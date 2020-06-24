'use strict';

const fs = require(`fs`);
const path = require(`path`);
const { gql } = require(`apollo-server`);

const PATH_GQL_SCHEMA = path.resolve(__dirname, `schema.graphql`);
const schema = fs.readFileSync(PATH_GQL_SCHEMA, `utf8`);

const typeDefs = gql`${schema}`;

module.exports = {
	typeDefs,
};