const mongoose = require("mongoose")
const Validator = require("./helpers/validator")


const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
	article :  {
		type: Schema.Types.ObjectId, 
		ref: 'Article', 
		required: true, 
		validate: {
			isAsync: true,
			validator: function(v) {
				return Validator(mongoose.model('Article'), v)
			}
		}
	},
    commentContent: { type: String, required: true },
    createdBy: { type: String },
    updatedBy: { type: String }
  },
  { timestamps: true }
)


module.exports = mongoose.model("Comment", commentSchema)