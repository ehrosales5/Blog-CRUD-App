const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

  publishedDate: {
    type: Date,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,

  },
  blogStars: {
    type: String,
    required: true,
  }



})

blogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  blogs: [blogSchema]

});



const User = mongoose.model('User', userSchema);

module.exports = User;
