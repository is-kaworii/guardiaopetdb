const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@guadiaopet.pcwryjk.mongodb.net/?retryWrites=true&w=majority&appName=guadiaopet`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function main() {
    try {
        await mongoose.connect(uri, clientOptions)

        console.log('Conectado ao MongoDB')
    } catch (error) {
        console.log(error)
    }
}

module.exports = main;