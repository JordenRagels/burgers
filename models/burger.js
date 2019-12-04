const orm = require("../config/orm");

let burger = {
    selectAll: function(cd) {
        orm.selectAll("burgers", function(res) {
            cd(res);
        });
    },
    insertOne: function(cols, vals, cd) {
        orm.selectAll("burgers", cols, vals, function(res) {
            cd(res);
        });
    },
    updateOne: function(objColVals, condition, cd) {
        orm.selectAll("burgers", objColVals, condition, function(res) {
            cd(res);
        });
    },
    deleteOne: function(condition, cd) {
        orm.selectAll("burgers", condition, function(res) {
            cd(res);
        });
    },
}