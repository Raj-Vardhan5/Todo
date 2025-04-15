const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://raj773313:0S538WXqJ3K3rRRW@cluster0.gtfacgl.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

 module.exports = {
    todo: todo
 }