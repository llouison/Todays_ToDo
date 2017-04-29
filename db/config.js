// importing pg-promise
const pgp = require('pg-promise')();

// setting a variable for our instance of pg-promise

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    db = pgp({
        database: '',
        port: 5432,
        host: 'localhost'
    });
} else if (process.env.NODE_ENV === 'production') {
    db = pgp({
        database: '',
        port: 5432,
        host: 'localhost'
    });
}

module.exports = db;