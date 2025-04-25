const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  views: String,
  likes: String,
  time: String,
  name: String
});

const schema = mongoose.model('Video', videoSchema);
module.exports = schema;
