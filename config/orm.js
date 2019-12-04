const connection = require("config/connection.js");

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
}

function translateSql(obj) {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string " && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + " = " + value)
        }
    }
    return arr.toString();
}


const orm = {
    selectAll: function(table, cd) {
        var dbQuery = "SELECT * FROM" + table + ";";
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cd(res);
        });
    },
    insertOne: function(table, cols, vals, cd) {
        var dbQuery =
            "INSERT INTO" +
            table +
            " (" +
            cols.toString() +
            ") " +
            "VALUES (" +
            createQmarks(vals.length) +
            ") ";
        console.log(dbQuery);
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cd(res);
        });
    },
    updateOne: function(table, objColVals, condition, cd) {
        let dbQuery = "UPDATE" + table + "SET" + translateSql(objColVals) + "WHERE" + condition;
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cd(res);
        });
    },
    deleteOne: function(table, condition, cd) {
        let dbQuery = "DELETE FROM " + table + "WHERE" + condition;
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cd(res);
        });
    },
}