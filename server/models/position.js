const mongoose = require('mongoose');

const positionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Position = mongoose.model('Position', positionSchema);

module.exports = Position;
