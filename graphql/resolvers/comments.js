const { UserInputError } = require("apollo-server");

const Post = require("../../models/Post");
checkAuth = require("../../util/check-auth");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const user = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not empty"
          }
        });
      }
      const post = await Post.findById(postId);
      if (post) {
        post.comments.unshift({
          body, // body:body
          user: user.username,
          createdAt: new Date().toISOString()
        });
        await post.save();
        return post;
      } else throw new UserInputError("Post not found");
    }
  }
};
