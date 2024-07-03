var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql = "SELECT * FROM Customers WHERE address = 'DarkTee696969'";

    con.query(sql, function (err, result, fields) {
        if (err) throw err; 
        result.forEach(function(row) {
            console.log(`ID: ${row.id}, NAME: ${row.name}, ADDRESS: ${row.address}`);
        });
    });
});
