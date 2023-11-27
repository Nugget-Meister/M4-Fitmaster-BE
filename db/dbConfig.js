const pg = require("pg-promise")();

require('dotenv').config()

const connect = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_PASSWORD,
    password: process.env.PG_PASSWORD
}

const db = pg(connect)

module.exports = db