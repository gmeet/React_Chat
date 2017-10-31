const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socketSchema = mongoose.Schema({
  socket_id: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {
    type: Date, 
    default: Date.now()
  },
});

module.exports = mongoose.model('socket', socketSchema);

