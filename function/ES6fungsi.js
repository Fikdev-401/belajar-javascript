let numbers = [1,3,6]

// forEach
numbers.forEach(number => console.log(number))

// map
let result = numbers.map(number => number*3)
console.log(result)

// destrukturisasi elemen 
let student = ['Upik', 3.99 ,true]

let [nama, gpa, isGraduate] = student

console.log(nama)
console.log(gpa)
console.log(isGraduate)


const pi = 3.14;
console.log(typeof pi)