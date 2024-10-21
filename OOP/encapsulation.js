class Student {
    constructor(nama, gpa){
        // harus pake _ agar private ini aturan global
        this._nama = nama;
        this._gpa = gpa;
    }

    // maka ada cara khusus utk nge anu data nya yaitu pake set dan get

    get nama() {
        return this._nama
    }
    get gpa() {
        return this._gpa
    }

    set setName(nama){
        this._nama = nama
    }
    
    set setGpa(gpa){
        this._gpa = gpa
    }
}