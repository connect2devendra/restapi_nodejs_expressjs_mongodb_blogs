const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true        
    },
    body: {
        type: String,
        require: true,
        trim: true        
    },
    author: {
        type: String,
        require: true,
        trim: true        
    },
    publish_at: {
        type: Date,
        default: null        
    },
    status: {
        type: Boolean,
        default: 1
    },
    created_at: { 
        type: Date,
        default: Date.now() 
    },
    updated_at: { 
        type: Date,
        default: Date.now() 
    }
  });

  const Article = mongoose.model('Article', ArticleSchema);
  module.exports = Article;