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
        host: process.env.Host,
        user: process.env.Username,
        password: process.env.Password,
        database: process.env.Database
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