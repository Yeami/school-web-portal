const mongoose = require('mongoose');

require('./user');

const publicationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
