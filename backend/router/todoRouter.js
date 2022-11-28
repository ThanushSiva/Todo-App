const express = require("express");
const { home, createTodo } = require("../controller/todoController");

const router = express.Router();

router.get("/", home);
// router.get("/readtodo", readTodo);
router.post("/createtodo", createTodo);
// router.put("/updatetodo/:id", updateTodo);
// router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;