// importing pg-promise
const pgp = require('pg-promise')();

// setting a variable for our instance of pg-promise
let db;

// creating if statements to determine the instance of pgp to use
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    db = pgp({
        database: 'todo_development',
        port: 5432,
        host: 'localhost'
    });
} else if (process.env.NODE_ENV === 'production') {
    db = pgp({
        database: 'todo_production',
        port: 5432,
        host: 'localhost'
    });
}

// exporting our pg-promise
module.exports = db;