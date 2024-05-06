// Variáveis de ambiente
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routers/routes');
const conn = require('./database/conn');
const app = express();

// implementando dependencias
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    app.use(cors());
    next()
})

app.use(express.json());

// Database conection
conn();

// routes
app.use('/api', routes);

// start up server
app.listen(process.env.PORT, () => {
    console.log(`Servidor http inciado em http://localhost:${process.env.PORT}`)
});
