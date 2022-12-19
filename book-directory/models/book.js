const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  auther: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model('Book',bookSchema)