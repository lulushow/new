var mysql = require('mysql');
var connection;
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'website',
    port :'3306'
});

connection.connect();

var sql = 'SELECT * FROM websites';

connection.query(sql, function (error, results) {
    if (error) {
        console.log('[SELECT ERROR] - ', error.message);
        return;
    }

    console.log('-----------------------------SELECT---------------------');
    console.log(results);
    console.log('--------------------------------------------------------\n\n');
});

connection.end();