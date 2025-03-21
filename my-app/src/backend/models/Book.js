const mongoose = require('mongoose');

// Book schema definition
const userSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
    unique:true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  }
}, { versionKey: false });

// Export the Book model
module.exports = mongoose.model('Book', userSchema);