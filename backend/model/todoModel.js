const mongoose = require("mongoose")

const tasks = new mongoose.Schema({
    taskName: {
        type: String,
        require: true
    },
    isDone: {
        type: Boolean,
        require: true
    }
})

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    task: {
        type: [tasks],
        require: true
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        require: true
    },
    onDate: {
        type: Date,
        require: true
    }
})

const Todo = new mongoose.model("Todo", todoSchema);

module.exports = Todo;