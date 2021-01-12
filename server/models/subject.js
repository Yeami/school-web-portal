const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
