const mysql = require('mysql');

// Configuration to connect to the database ; for more info see the environnement variables
const connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    socketPath: process.env.SOCKET_PATH,
    multipleStatements: true
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