const express = require('express');
const router = express.Router();
const { getBooks } = require('../models/book')

// views

router.get("/", (req, res) => {
    const books = getBooks()
    res.render("index", { books, title: "Home" });
});

router.get("/reviews", function (req, res) {
    res.send("Review Page")
})

router.get("/search", function (req, res) {
    res.render("search", {title: "Search"})
})

module.exports = router;