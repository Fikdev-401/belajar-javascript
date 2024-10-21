const Todo = require("../Model/Todo");
const TodoViews = require("../Views/TodoViews");

class  TodoController {

    static show(){
        let todos = Todo.show()
        TodoViews.show(todos)
    }

    static add(todo) {
        Todo.add(todo)
    }
    static update(todo) {
        Todo.update(todo)
    }
    static delete(todo) {
        Todo.delete(todo)
    }
    static message(msg) {
        TodoViews.message(msg)
    }

}

module.exports = TodoController;