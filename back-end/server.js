const express = require('express');
const connection = require("./config/bd");
const session = require('express-session');
require("dotenv").config();
var cors = require('cors');
const bodyParser = require('body-parser');
// connexion à la DB
connection();
const app = express();
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use("/", require("./routes/crud.routes"))
app.listen(8000, () => {
    console.log(`Le serveur est en écoute sur le port 8000`);

});
