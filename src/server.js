const express = require('express');
const path = require("path");
const mongoose = require('mongoose');

const submitController = require("./submitController")

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/submit', submitController)

app.use(express.static(path.join(__dirname, "..", "public")));
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

mongoose.connect(process.env.MONGO_URL)
    .then(_ => app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`)))
    .catch(err => console.log(err));
