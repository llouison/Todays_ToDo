// importing our pgpromise
const db = require('../db/config');

// setting up our Todo model object
const Todo = {};

// creating the findall method
Todo.findAll = () => {
    return db.query('SELECT * FROM todo ORDER BY id ASC');
};

// creating the findbyid method
Todo.findById = id => {
    return db.oneOrNone('SELECT * FROM todo WHERE id = $1', [id]);
};

// creating the add method
Todo.create = todo => {
    return db.one(
        `
        INSERT INTO todo
        (title, description, category, status)
        VALUES ($1, $2, $3, $4) RETURNING *
        `,
        [todo.title, todo.description, todo.category, todo.status]
    );
};

// creating the update method
Todo.update = (todo, id) => {
    return db.none(
        `
        UPDATE todo SET
        title = $1,
        description = $2,
        category = $3,
        status = $4
        WHERE id = $5
        `,
       [todo.title, todo.description, todo.category, todo.status, id] 
    );
};

// creating the delete method
Todo.destroy = id => {
    return db.none(
        `DELETE FROM todo
        WHERE id = $1
        `,
        [id]
    );
};

// exporting the todo model
module.exports = Todo;