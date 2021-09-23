const Todo = require('../models/todo');

module.exports = {
    index,
    create,
    update,
    delete: deleteTodo,
};

async function index(req ,res) {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);

    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
} 

async function create(req ,res) {
    try {
        const todo = await Todo.create(req.body);
        res.status(200).json(todo);

    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
} 

async function update(req ,res) {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedTodo);

    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
} 

async function deleteTodo(req ,res) {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedTodo);
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
} 

