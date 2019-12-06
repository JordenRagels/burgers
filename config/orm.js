// Import connection to MySQL db
const connection = require("./connection");

// Object for all SQL statement functions to be used
const orm = {
    // read db
    selectAll: (cb) => {
        let sqlQuery = 'SELECT * FROM burgers;'
        connection.query(sqlQuery, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // add data to db
    insertOne: (burger_name, cb) => {
        let sqlQuery = 'INSERT INTO burgers (burger_name) VALUE (?);'
        console.log(sqlQuery);
        connection.query(sqlQuery, burger_name, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // update data in db
    updateOne: (id, cb) => {
        let sqlQuery = 'UPDATE burgers SET ? WHERE ?;'
        connection.query(sqlQuery,[{devoured: false}, {id: id}], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // delete data from db
    deleteOne: (id, cb) => {
        let sqlQuery = 'DELETE FROM burgers WHERE ?;'
        connection.query(sqlQuery, {id: id}, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
}

module.exports = orm;