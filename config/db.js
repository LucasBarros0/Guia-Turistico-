const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'guia_turistico'
});

module.exports = pool.promise();
