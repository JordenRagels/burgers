const mysql = require("mysql");
// connection = mysql.createConnection({
//     root:3306,
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "burgers_db"
// });

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
//};

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("Connected to MySQL DB ID: " + connection.threadId);
});

module.exports = connection;