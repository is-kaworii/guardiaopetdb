// Variáveis de ambiente
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routers/routes');
const conn = require('./database/conn');
const app = express();

// Database conection
conn();

// implementando dependencias
app.use(cors());
app.use(express.json());

// routes
app.use('/api', routes);

// start up server
app.listen(process.env.PORT, () => {
    console.log(`Servidor http inciado em http://localhost:${process.env.PORT}`)
});