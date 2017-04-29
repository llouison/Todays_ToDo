// importing express and controller
const express = require('express');
const controller = require('../controllers/todoController');

// creating a variable for the express router method
const todoRoutes = express.Router();

// setting a route for the index view
todoRoutes.get('/', controller.index);
// setting a route for the add view
todoRoutes.get('/add', (req, res) => {
    res.render('todos/todos-add', {
        documentTitle: 'Today\'s To-Do',
    });
});
// setting a route for the todo edit function
todoRoutes.get('/edit/:id', controller.edit);
// setting a route for the single todo function
todoRoutes.get('/:id', controller.show);
// setting a route for the create new todo function
todoRoutes.post('/', controller.create);
// setting a route for the update todo function
todoRoutes.put('/:id', controller.update);
// setting a route for delete todo function
todoRoutes.delete('/:id', controller.destroy);

// exporting the router
module.exports = todoRoutes;
