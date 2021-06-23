const express = require("express");
const User = require("../models/User");


const getUsers = (req, res) => {


    res.send("Get Users");
}

const getUser = (req, res) => {

    res.send("Get User");
}

const createUser = async (req, res) => {

    try {
        const insertUser = new User(req.body)
        const newUser = await insertUser.save();
        res.status(201).json({
            "user": newUser,
            "message": "User created successfully."
        });
        
    } catch (error) {
        res.status(400).json({
            "message": error.message
        });
        
    }    
}

const updateUser = (req, res) => {

    res.send("Update User");
}

const deleteUser = (req, res) => {

    res.send("Delete User");
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};