class Student {
    constructor(nama, gpa ){
        this.nama = nama;
        this.gpa = gpa;
    }
    sebutkanNama(){
        console.log( "Hallo namaku : " + this.nama)
    }
    sebutkanSkill(){
        console.log( "aku memiliki skill : " + this.skill)
    }
}
// ini inheritance
class Programmer extends Student{
    constructor(nama, gpa, skills){
        super(nama, gpa);
        this.skills = skills; // aturan global kalo mau akses attr class lain harus pake super
    }
    sebut(){
        console.log(this.nama)
    }
}

let programer = new Programmer('upik', 4.0, ['React JS'])
console.log(programer)
programer.sebut()