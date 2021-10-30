const mongoose = require("mongoose")

const Schema = mongoose.Schema

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdBy: { type: String },
    updatedBy: { type: String }
  },
  { timestamps: true }
)


module.exports = mongoose.model("Article", articleSchema)