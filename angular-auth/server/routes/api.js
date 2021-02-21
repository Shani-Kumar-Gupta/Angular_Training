const express = require('express');
const router = express.Router()
const User = require('../models/user');

const mongoose = require('mongoose');
const db = "mongodb+srv://shanidb:162020Shani@authdb.ms3od.mongodb.net/angularauthdb?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if(err){
        console.log('Error!' + err)
    } else {
        console.log('Connected to mongodb');
    }
})

router.get('/', (req, res) => {
    res.send('From API route');
})

/* USER Registration API*/
router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registerUser) => {
        if(error){
            console.log(error);
        } else {
            res.status(200).send(registerUser);
        }
    })
})

module.exports = router