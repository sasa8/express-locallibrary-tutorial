var mongoose = require("mongoose");

// define a schema
var Schema = mongoose.Schema;

// genre schema
// name:String
//
// virtula property
//  url:String

var GenreInstanceSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
    min: 3,
    required: true,
  },
});

// Virtual for bookinstance's URL
GenreInstanceSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

//Export model
module.exports = mongoose.model("GenreInstance", GenreInstanceSchema);
