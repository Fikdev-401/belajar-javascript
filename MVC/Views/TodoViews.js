class  TodoViews {

    static show(todos){
        console.log('Todo List : ')
        todos.forEach(todo => {
            const { id, course, status } = todo
            if(status){
                console.log(id, course, '- Selesai')
            }else{
                console.log(id, course, '- Belum Selesai')
            }
        })
    }

    static message(msg){
        console.log(msg)
    }

}

module.exports = TodoViews;