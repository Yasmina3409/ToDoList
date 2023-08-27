const express = require("express");
const mysql = require(`mysql-await`);

const { setInscription } = require("../controllers/inscription.routes");
const { setLogin } = require("../controllers/connexion.routes");
const { setData } = require("../controllers/setData.routes");
const { getData } = require("../controllers/getData.routes");
const { UpdateData } = require("../controllers/updateData.routes");
const { DeleteData } = require("../controllers/deleteData.routes");
const { DeleteAll } = require("../controllers/deleteAll.routes");
const { Logout } = require("../controllers/logout.routes");
const { getDataComplted } = require("../controllers/getDataCompleted.routes");
const router = express.Router();
var db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
router.post("/inscription", setInscription);
router.post("/login", setLogin);
router.post("/addTask", setData);
router.post("/displayList/:userName", getData);
router.post("/displayListCompleted/:userName", getDataComplted);
router.put("/updateCompleted/:task_id", UpdateData);
router.delete("/deleteTask/:task_id", DeleteData)
router.delete("/deleteAll/:userName", DeleteAll)
router.post("/logout", Logout)
module.exports = router;