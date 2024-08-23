var a = []
var i = 0


do {
    // simpan ke a
    a.push(i)
    // tambah i
    i++
    // ketika i kurang dari 4 maka kode melakukan pengulangan ke do
} while (i < 4)

console.log(a)

// atau gini
var b = []
var j = 5

do {
    // karena j menyimpan 5 
    b.push(j)
    // j tambah 1
    j++

    // karena j = 5 jadi kode tidak di eksekusi
} while (j < 4)

console.log(b)

// atau ini

var t = []
var u = 5
// tidak meng-eksekusi kode karena 5 lebih besar dari 4
while (u < 4) {
    t.push(u)
    u++
}
//jadi var t tidak memiliki elemen (kosong)
console.log(t)