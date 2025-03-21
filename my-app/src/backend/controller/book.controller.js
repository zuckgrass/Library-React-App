const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/', (req, res)=>{
    Book.find().lean()
    .then(data=>{
        res.send(data)
    }) 
    .catch(err => console.log(err))
})

module.exports = router;