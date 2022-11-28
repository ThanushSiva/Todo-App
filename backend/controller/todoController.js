const Todo = require("../model/todoModel");

exports.home = (req, res) => {
    res.status(201).json({
        message: "success"
    })
}

exports.createTodo = async (req, res) => {
    try {
        const { title, task, priority, onDate } = req.body;
        if (!title || !task || !priority || !onDate) {
            throw new Error("Every field is required");
        } else {
            const todo = await Todo.create({
                title, task, priority, onDate
            })
            res.status(201).json({
                todo
            })
        }
    }
    catch (err) {
        res.status(401).json({
            err: err.message
        })
    }
}

// exports.updateTodo = async (req, res) => {
//     try {
//         const todo = await Todo.findIdAndUpdate(req.params.id, req.body);
//     }
//     catch (err) {
//         res.status(401).json({
//             err: err.message
//         })
//     }
// }