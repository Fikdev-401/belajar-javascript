let mobil = {
    nama : 'Honda',
    type : 'Civic',
    harga : 200000,
// dibawah ini namanya method
    start : function(){
        console.log('nyala')
    },
    off : function(){
        console.log('off')
    }
}

console.log(mobil)
console.log(mobil.start())
console.log(mobil.off())