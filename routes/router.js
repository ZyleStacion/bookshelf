const express = require("express");
const router = express.Router();
// views

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/reviews", function (req, res) {
    res.send("Review Page")
})

module.exports = router;