var connection = require("../config/connection.js");

// selectAll() insertOne() updateOne()

function printQuestionMarks(num) {
    var arr = [];

    for (i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var key in obj) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
}