const express = require("express");
const router = new express.Router();

const {getArticles, getArticle, createArticle, updateArticle, deleteArticle} = require("../controllers/articlesController");

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', createArticle);
router.patch('/:id', updateArticle);
router.delete('/:id', deleteArticle);


module.exports = router;

