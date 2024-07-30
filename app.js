const express = require('express');
const app = express();
const destinationRoutes = require('./routes/destinations');

app.use('/api/destinations', destinationRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
