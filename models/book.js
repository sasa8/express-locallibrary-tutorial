var mongoose = require("mongoose");

// difine a schema
var Schema = mongoose.Schema;

// book schema
// title:String
// author:Author[1]
// summary:String
// genre:Genre[0..*] 0個以上

// virtual property
// url:String

var BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

//Export model
module.exports = mongoose.model("Book", BookSchema);
