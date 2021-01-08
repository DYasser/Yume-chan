const mysql = require('mysql');

// Configuration to connect to the database ; for more info see the environnement variables
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "yume",
    socketPath: ""
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.message);
        return;
    }
    console.log('connected');
});


// Making the connection constant global to the project 
global.connection = connection;