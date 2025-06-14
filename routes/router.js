const express = require('express');
const router = express.Router();
const { getBooks,getBookID } = require('../models/book');
const { query } = require('express-validator');

// views

router.get("/", (req, res) => {
    const books = getBooks();
    res.render("index", { books, title: "Home" });
});

router.get("/reviews", function (req, res) {
    res.send("Review Page");
})

router.get("/search", function (req, res) {
    const query = req.query.query;
    let results = getBookID("The Hobbit");
    
    res.render("search", {title: "Search", query: query, results});
})

// router.get("/searchBooks", function (req, res) {
//     // Show book search details live with search updates - maybe wait every 1 second so the API doesn't ban me, max 100 requests per 5 minutes
//     const query = req.query.query
//     let results = getBookID("The Hobbit")


// })

// Need to add logic for user login validation
router.get("/dashboard", function (req, res) {
    res.render("dashboard");
})

module.exports = router;