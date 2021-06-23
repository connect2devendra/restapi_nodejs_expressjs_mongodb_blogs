const express = require("express");
const router = new express.Router();

const {getUsers, getUser, createUser, updateUser, deleteUser} = require("../controllers/usersController");

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;

