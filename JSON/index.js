const fs = require('fs')
// jangan lupa utf8
let data = fs.readFileSync('./data.json', 'utf8')
// lalu parse data disini ke objek
const parsedData = JSON.parse(data)
console.log(parsedData)

// lalu disini aku mau looping pake foreach

console.log('List Student : ')
parsedData.forEach(data => {
    console.log(`${data.id}, ${data.name}, ${data.gpa}`)
})