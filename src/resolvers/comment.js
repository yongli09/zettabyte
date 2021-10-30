const Comment = require("../models/comment")

module.exports = {
	comments: async () => {
		try {
      return await Comment.find().populate('article')
      } catch (error) {
        throw error
		  }
  },
  comment: async (_id) => {
    try {
      return await Comment.findById(_id).populate('article');
    } catch (error) {
      throw error
    }
  },

  createComment: async args => {
    try {
      const { comment } = args
      return await Comment.create(comment)
    } catch (error) {
      throw error
    }
  },

  deleteComment: async (id) => {
    try {
      return await Comment.findByIdAndDelete(id);
    } catch (error) {
      throw error
    }
  },

  updateComment: async args => {
    try {
      const { _id, commentContent } = args
      return await Comment.findByIdAndUpdate(_id, { commentContent } , {new: true });
    } catch (error) {
      throw error
    }
  },
}