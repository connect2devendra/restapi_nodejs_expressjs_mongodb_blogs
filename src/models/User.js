const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true        
    },
    email: {
        type: String,
        require: true,
        trim: true        
    },
    mobile: {
        type: Number,
        require: true,
        trim: true        
    },
    address: {
        type: String,
        require: true,
        trim: true        
    },
    status: {
        type: Boolean,
        default: 1
    },
    createdat: { 
        type: Date,
        default: Date.now() 
    },
    updatedat: { 
        type: Date,
        default: Date.now() 
    }
  });

  const User = mongoose.model('User', UserSchema);
  module.exports = User;