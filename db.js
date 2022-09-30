const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    password: '0tnPZTTkNeUm0s31hJTY',
    host: 'containers-us-west-38.railway.app',
    port: '7397',
    database: 'railway'

})

module.exports = pool;