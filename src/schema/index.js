const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  """
  An Article refers to available attributes for a article
  """
  scalar Date

  type Article {
    _id: ID
    title: String
	content: String
	createdBy: String
	updatedBy: String
	createdAt: Date
	updatedAt: Date
  }
  input ArticleType {
    title: String
	content: String
  }

  type Comment {
    _id: ID
    article: Article
	commentContent: String
	createdBy: String
	updatedBy: String
	createdAt: Date
	updatedAt: Date
  }
  input CommentType {
    article: ID
	commentContent: String
  }

  input ArticleOrderByInput {
	title: Int
	content: Int
	createdAt: Int
	updatedAt: Int
  }
  
  type RootQuery {
	articles(filter: String, skip: Int, take: Int, orderBy: ArticleOrderByInput): [Article]
	article(_id: String!): Article!
	comments: [Comment]
	comment(_id: String!): Comment!

  }
  type Mutation {
    createArticle(article: ArticleType): Article
    deleteArticle(_id: String): Article
	updateArticle(_id: String, article: ArticleType): Article
	
	createComment(comment: CommentType): Comment
	deleteComment(_id: String): Comment
	updateComment(_id: String, commentContent: String): Comment
  }


  
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);