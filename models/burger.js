// Import the ORM (Object Relational Mapper to create functions that will query the DB)
const orm = require("../config/orm");

let burger = {
    all: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    insert: (burger_name, cb) => {
        orm.insertOne(burger_name, (res) => {
            console.log(burger_name);
            cb(res);
        });
    },
    update: (id, cb) => {
        orm.selectAll(id, (res) => {
            cb(res);
        });
    },
    clear: (id, cb) => {
        orm.selectAll(id, (res) => {
            console.log(id + ' deleted!');
            cb(res);
        });
    },
}

// Export the database functions for the controller
module.exports = burger;