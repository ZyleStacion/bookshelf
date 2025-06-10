const express = require('express');
const router = express.Router();
const { getBooks } = require('../models/book')

// views

router.get("/", (req, res) => {
    const books = getBooks()
    res.render("index", { books });
});

router.get("/reviews", function (req, res) {
    res.send("Review Page")
})

module.exports = router;