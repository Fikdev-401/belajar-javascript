/* process arv is a built-in function/module 
of node.js and using this module we can take input from the terminal */

const command = process.argv[2];
const params =  process.argv.slice(3)
const TodoController = require('./Controller/TodoController');




switch (command) {
    case 'show':
        TodoController.show()
        break;
    case 'add':
        TodoController.add(params)
        break;
    case 'update':
        TodoController.update(params)
        break;
    case 'delete':
        TodoController.delete(params)
        break;
    default:
        TodoController.message('Kamu salah ketik')
        break;
}