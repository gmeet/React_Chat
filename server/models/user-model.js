const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  nickname: String,
  email: String,
  password: String,
  sex: {
    type: String,
    default: '秘密'
  },
  avatar: {
    type: String, 
    default: 'https://cdn.dribbble.com/users/35381/screenshots/3118843/wut.png'
  },
  groups: [{
    type: Schema.Types.ObjectId,
    ref: 'group'
  }],
  createAt: {
    type: Date,
    default: new Date()
  },
  socket: {
    type: Schema.Types.ObjectId,
    ref: 'socket'
  },
  onlineState:{
    type: Boolean,
    default: true
  },
  lastOnline: {
    type: Date,
    default: new Date()
  },
  place: {
    type: String,
    default: '火星'
  }
});

module.exports = mongoose.model('user', userSchema);

