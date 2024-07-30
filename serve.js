// server.js

const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'guia_turistico'
});

// Conexão com o banco de dados
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

app.use(express.static('public'));

app.get('/api/destinos', (req, res) => {
    const search = req.query.search ? `%${req.query.search}%` : '%';
    const sql = 'SELECT * FROM destinos WHERE nome LIKE ?';
    db.query(sql, [search], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

app.get('/api/atrativos/:destinoId', (req, res) => {
    const destinoId = req.params.destinoId;
    const sql = 'SELECT * FROM atrativos WHERE destino_id = ?';
    db.query(sql, [destinoId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
