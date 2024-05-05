// Variáveis de ambiente
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

// implementando dependencias
app.use(cors())
app.use(express.json())


// routes


// start up server
app.listen(process.env.PORT, () => {
    console.log(`Servidor http inciado em http://localhost:${process.env.PORT}`)
})