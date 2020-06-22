'use strict';

const users = [
  {
    id: 1,
    fname: 'Richie',
    age: 27,
    likes: 0,
  },
  {
    id: 2,
    fname: 'Betty',
    age: 20,
    likes: 205,
  },
  {
    id: 3,
    fname: 'Joe',
    age: 28,
    likes: 10,
  },
];

const posts = [
  {
    id: 1,
    userId: 2,
    body: "Hello how are you?"
  },
  {
    id: 1,
    userId: 3,
    body: "What's up?"
  },
  {
    id: 1,
    userId: 1,
    body: "Let's learn GraphQL"
  },
];

module.exports = {
	users,
	posts,
};