const Article = require("../models/article")

module.exports = {
	articles: async (args) => {
		try {
      const where = args.filter
      ? {
        $or: [
          { title: { $regex: args.filter } },
          { content: { $regex: args.filter } },
        ],
      }
      : {}

      return await Article.aggregate([
        {
          $match : where,
        },
        {
          $limit: args.skip + args.take
        },
        {
          $skip: args.skip
        },
        {
          $sort: args.orderBy
        }
      ])
      // return await Article.find(where).skip(args.skip).limit(args.take).sort(args.orderBy)
      } catch (error) {
        throw error
		  }
  },
  article: async (_id) => {
    try {
      return await Article.findById(_id);
    } catch (error) {
      throw error
    }
  },

  createArticle: async args => {
    try {
      const { article } = args
      return await Article.create(article)
    } catch (error) {
      throw error
    }
  },

  deleteArticle: async (id) => {
    try {
      return await Article.findByIdAndDelete(id);
    } catch (error) {
      throw error
    }
  },

  updateArticle: async args => {
    try {
      const { _id, article } = args
      return await Article.findByIdAndUpdate(_id, article , {new: true });
    } catch (error) {
      throw error
    }
  },
}