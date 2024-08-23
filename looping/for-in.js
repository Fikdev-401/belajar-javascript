// for-in
var list = ['a', 'b', 'c'];
var message;
for (var i in list) {

    message = 'indeks ' + i + ' berisi data ' + list[i];
    // console.log(message);
};

// for-in juga bisa mengakses attribut/key yg ada dlm objek
var person = {
    name: 'Taufik',
    age: 18,
    sex: 'Laki-Laki'
}

var message;

for (var attr in person) {

    message = 'atribut ' + attr + ' berisi data ' + person[attr];
    console.log(message);
}
