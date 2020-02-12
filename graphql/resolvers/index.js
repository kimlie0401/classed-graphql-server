const postsResolvers = require("./posts");
const usersResolovers = require("./users");
const commentsResolovers = require("./comments");

module.exports = {
  Post: {
    likeCount: parent => parent.likes.length,
    commentCount: parent => parent.comments.length
  },
  Query: {
    ...postsResolvers.Query,
    ...usersResolovers.Query
  },
  Mutation: {
    ...usersResolovers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolovers.Mutation
  },
  Subscription: {
    ...postsResolvers.Subscription,
    ...commentsResolovers.Subscription
  }
};
