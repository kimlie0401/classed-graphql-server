const postsResolvers = require("./posts");
const usersResolovers = require("./users");
const commentsResolovers = require("./comments");

module.exports = {
  Query: {
    ...postsResolvers.Query,
    ...usersResolovers.Query
  },
  Mutation: {
    ...usersResolovers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolovers.Mutation
  }
};
