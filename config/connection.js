const mysql = require("mysql");
connection = mysql.createConnection({
    root:3306,
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("Connected to MySQL DB ID: " + connection.threadId);
});

module.export = connection;