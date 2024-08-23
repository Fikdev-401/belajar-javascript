var a = []
var i = 0
// selama i kurang dari 4
// ketika i kurang dari 4 maka lakukan kondisi
while ( i < 4 ) {
    // simpan i dalam array
    a.push(i)
    // tambahkan i utk proses selanjutnya
    i++
}
console.log(a) // [0,1,2,3]

// while (++i < 4) {
//     a.push(i);
// };

// kode ini juga bisa
var b = []
var j = 0

while ( j++ < 4 ) {
    // simpan i dalam array
    b.push(j)
}
console.log(b) //[1,2,3,4]
