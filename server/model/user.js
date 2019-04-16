const mongoose = require('mongoose');
const Schema = mongoose.Schema
const UserSchema=new Schema({
  username:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  iphone:{
    type:Number,
    require:true
  },
  token: String,
  create_time: Date
})
const User = mongoose.model('User', UserSchema)
module.exports = User;