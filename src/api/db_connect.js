
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'gesteasy'
});

connection.connect(function(err){
    if (err) console.error("Mysql connection error: ", err);
    console.log("MYSQL: Connecté à l'ID: ", connection.threadId);
});

module.exports = connection;



