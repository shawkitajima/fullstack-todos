const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: {type: String, required: true},
    completed: {type: Boolean, required: true, default: false},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Todo', TodoSchema);