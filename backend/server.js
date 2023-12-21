const express = require("express");
const app = express();

const port = 5000;

const dotenv = require("dotenv").config();

// app.use("/post", require("./routes/post.routes"));

// Middleware qui permet de traiter les donnEes de la requete
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => console.log("Le serveur a demarrE au port " + port));