'use strict';

const {gql} = require(`apollo-server`);

const typeDefs = gql`
  type User {
    id: Int
    fname: String
    age: Int
    likes: Int
    posts: [Post]
  }

  type Post {
    id: Int
    user: User
    body: String
  }

  type Query {
    users(id: Int!): User!
    posts(id: Int!): Post!
  }
  type Mutation {
    incrementLike(fname: String!) : [User!]
  }

  type Subscription {
    listenLikes : [User]
  }
`;

module.exports = {
	typeDefs,
};