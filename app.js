const express = require('express');
const mongo = require('mongodb');
const app = express();
const path = require('path');

const mongodbURI = process.env.MONGO_URI

// Routers
const router = require('./routes/router');

app.use(express.static(__dirname + '/public'));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use("/", router);

app.listen(3000, () => {
    console.log("http://localhost:" + 3000)
});