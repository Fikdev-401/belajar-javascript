var a = []

for(var i = 0; i < 10; i++){
    a.push(i)
}

console.log(a)
console.log('Panjang a = ' + a.length + ' element')

var b = []
for(j = 0;j < a.length;j++){
    b.push(a[j] * 2)
}
console.log(b)

var c;
for(k = 0, len = a.length; k < len; k++){
    if (a[k] === 5) {
        c = a[k]
    }
}

console.log('data: ' + c + ' ditemukan di indeks ' + k);

