
const mysql = require(`mysql-await`);
require('dotenv').config();
const connection = () => new Promise((resolve, reject) => {

    var db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    db.connect(
        function (err) {
            if (err) {
                console.log(err);
                reject(err);

                return;
            }
            console.log("Connecté à la base de données MySQL!");
            resolve(db);
        });

})




module.exports = connection;