// npm install pg
// Importa somente a classe Client da biblioteca pg com o método de desestruturação
const {Client} = require('pg')

const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://yzetpmplyeyvep:7628776db43c52ea4007778c26c6ff951a6179c47edda376c78a80fcea14ead2@ec2-54-147-93-73.compute-1.amazonaws.com:5432/d4thk68lji4dfu',
    ssl: {
        rejectUnauthorized: false
    }
})

client.connect()

module.exports = client