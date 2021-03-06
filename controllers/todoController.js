// importing model
const Todo = require('../models/todo');

// creating the controller object
const controller = {};

// defining the view to render once the findall promise is complete
controller.index = (req, res) => {
    
    Todo.findAll()
    .then(todos => {
        let todotasks = [];
        let donetasks = [];
        // this filter finds all the open todos and pushes them in the todotasks array
        todos.filter(todo => {
            if (todo.status === 'To Do'){
                todotasks.push(todo);
            }
        })
        // this filter finds all the complete todos and pushes them in the donetasks array
        todos.filter(todo => {
            if (todo.status === 'Done'){
                donetasks.push(todo);
            }
        })
        res.render('todos/todos-index', {
            documentTitle: 'Today\'s To-Do',
            todoTasks: todotasks,
            doneTasks: donetasks,
        });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the findbyid promise is complete
controller.show = (req, res) => {
    Todo.findById(req.params.id)
    .then(todo => {
        res.render('todos/todos-single', {
            documentTitle: 'Today\'s To-Do',
            todo: todo,
        });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the create new todo promise is complete
controller.create = (req, res) => {
    Todo.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        status: 'To Do',
    })
    .then(todo => {
        res.redirect('/todos');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the edit todo promise is complete
controller.edit = (req, res) => {
    Todo.findById(req.params.id)
    .then(todo => {
        console.log(todo);
        res.render('todos/todos-edit', {
            documentTitle: 'Today\'s To-Do',
            todo: todo,
            id: req.params.id,
        });
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the update todo promise is complete
controller.update = (req, res) => {
    Todo.update({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
    }, req.params.id)
    .then(todo => {
        res.redirect('/todos');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// defining the view to render once the delete promise is complete
controller.destroy = (req, res) => {
    Todo.destroy(req.params.id)
    .then(() => {
        res.redirect('/todos');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

// exporting the controller
module.exports = controller;