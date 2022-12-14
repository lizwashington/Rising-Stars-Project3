const { User, Post } = require('../models'); 
const { AuthenticationError } = require('apollo-server-express'); 
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts')
          //.populate('friends');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },

    posts: async (parent, { username }) => {
      const params = username ? { username } : {}; // use ternary operator to check if username exists. if it does, we set params to an object with a username key set to that value. if it doesnt we simply return an empty object. 
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },

    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        //.populate('friends')
        .populate('posts');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        //.populate('friends')
        .populate('posts');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },

    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );
    
        return post;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
// Some simple reaction 
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { comments: { commentBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedPost;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
// // X
//     addFriend: async (parent, { friendId }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { friends: friendId } },
//           { new: true }
//         ).populate('friends');
    
//         return updatedUser;
//       }
    
//       throw new AuthenticationError('You need to be logged in!');
//     },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    }
  }
};


module.exports = resolvers;