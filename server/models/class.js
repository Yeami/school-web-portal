const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: {
    type: Array,
    required: true,
  },
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
