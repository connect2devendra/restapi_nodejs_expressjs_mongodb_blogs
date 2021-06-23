const express = require("express");
const Article = require("../models/Article");


const getArticles = async (req, res) => {

    try {
        const articles = await Article.find({}).sort({'title':1});
        res.status(200).json({
            "articles": articles,
            "message": "Article List."
        });
        
    } catch (error) {
        res.status(400).json({
            "message": error.message
        });
        
    }
}

const getArticle = async (req, res) => {

    const id = req.params.id;

    try {
        const article = await Article.findById({'_id':id});
        res.status(200).json({
            "article": article,
            "message": "Article Details."
        });
        
    } catch (error) {
        res.status(400).json({
            "message": error.message
        });
        
    }
}

const createArticle = async (req, res) => {

    try {
        const insertArticle = new Article(req.body)
        const newArticle = await insertArticle.save();
        res.status(201).json({
            "article": newArticle,
            "message": "Article created successfully."
        });
        
    } catch (error) {
        res.status(400).json({
            "message": error.message
        });
        
    }    
}

const updateArticle = async (req, res) => {

    const id = req.params.id;

    try {
        const article = await Article.findOneAndUpdate({'_id':id}, req.body, {new: true});
        res.status(200).json({
            "article": article,
            "message": "Article uppdated successfully."
        });
        
    } catch (error) {
        res.status(400).json({
            "message": error.message
        });
        
    }  
}

const deleteArticle = async (req, res) => {

    const id = req.params.id;

    try {
        const article = await Article.findOneAndDelete({'_id':id});
        res.status(200).json({
            "article": article,
            "message": "Article deleted successfully."
        });
        
    } catch (error) {
        res.status(400).json({
            "message": error.message
        });
        
    } 
}

module.exports = {getArticles, getArticle, createArticle, updateArticle, deleteArticle};