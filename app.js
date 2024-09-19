// Variáveis de ambiente
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routers/routes');
const conn = require('./database/conn');
const app = express();

app.use(express.json());
// implementando dependencias
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    app.use(cors({
        origin: '*',
        methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        credentials: true,
    }));
    next()
})


// Database conection
conn();

// routes
app.use('/api', routes);

// start up server
app.listen(process.env.PORT, () => {
    console.log(`Servidor http inciado em http://localhost:${process.env.PORT}`)
});


/* 

        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
*/