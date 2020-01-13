const mysql = require("mysql");
connection = mysql.createConnection({
    root:3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: 'xqlpe8f6ry2iyw35',
        password: '	paniur99v6e0vfof',
        database: 'burgers_db'
    });
};

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("Connected to MySQL DB ID: " + connection.threadId);
});

module.exports = connection;