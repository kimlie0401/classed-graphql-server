const postsResolvers = require("./posts");
const usersResolovers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolovers.Mutation
  }
};
