const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  value: Number,
  status: String
});

module.exports = mongoose.model("Book", BookSchema);