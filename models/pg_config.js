const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'postgres',
        password:'123',
        host:'localhost',
        database:'cuong',
        port:5432,
        // ssl: {
        //     rejectUnauthorized: false
        // },
    }
);
module.exports = pg_conn;