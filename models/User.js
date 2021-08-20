const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlenth: 50,
  },
  email: {
    type: String,
    trim: true, // 공백제거
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlenth: 50,
  },
  role: {
    // 관리자, 일반유저
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    // 토큰유효기간
    type: Number,
  },
});

// 스키마 모델로 감싸기(모델의이름, 스키마)
const User = mongoose.model('User', userSchema);

module.exports = { User };
