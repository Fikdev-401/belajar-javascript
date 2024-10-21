const fs = require('fs')

class Todo {
    constructor(id, course, status){
        this.id = id
        this.course = course
        this.status = status 
    }
    static getTodos(){
        const data = fs.readFileSync('./data.json' , 'utf8')
        const parseData = JSON.parse(data)
        let todos = parseData.map( el => {
            return new Todo(el.id, el.course, el.status)
        })
        return todos
    }

    static show(){
            let todos = this.getTodos()
            return todos
    }
    static add(todo){
        let todos = this.getTodos()
        let id = todos.length + 1
        let task = todo[0];
        let status = todo[1];
        if (status == null) {
            status = false
        } else {
            status = true
        }
        let temp = new Todo(id, task, status)
        todos.push(temp)
        this.save(todos)
        console.log('Data Berhasil ditambahkan')
    }
    
    static delete(todo){
        let todos = this.getTodos()
        let id = Number(todo[0])
        todos = todos.filter( todo => todo.id !== id)
        this.save(todos)
        console.log('Data Berhasil di hapus')
    }

    static update(todo){
        let todos = this.getTodos()
        let id = Number(todo[0])
        let task = todo[1]
        let status = todo[2]
        if (status == null) {
            status = false
        } else {
            status = true
        }
        todos = todos.map( todo => {
            if (todo.id === id) {
                todo.course = task
                todo.status = status
            }
            return todo
        })
        this.save(todos)
        console.log('Data Berhasil di ubah')
    }

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3))
    }
}
module.exports = Todo;