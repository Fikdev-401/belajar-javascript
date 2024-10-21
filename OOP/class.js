class Mobil {
    // constructor adalah fungsi bawaan utk membuat atribut/key
    constructor(nama, type, harga){
        this.nama = nama; //ini atribut
        this.type = type;
        this.harga = harga;
    }
    // ini method
    nyalakanMesin() {
        console.log("mesin menyala abangku")
    }
    matikanMesin() {
        console.log("mesin dimatikan abangku")
    }
}

// ini disebut istance

let mobil = new Mobil('Mercedes benz', 'AMG', 10000000)

console.log(mobil)
mobil.nyalakanMesin()
mobil.matikanMesin()