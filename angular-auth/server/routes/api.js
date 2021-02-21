const express = require('express');
const router = express.Router()

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

module.exports = router