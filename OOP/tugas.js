class Student {
    constructor(nama, skill, gpa){
        this.nama = nama;
        this.skill = skill;
        this.gpa = gpa;
    }
    sebutkanNama(){
        console.log( "Hallo namaku : " + this.nama)
    }
    sebutkanSkill(){
        console.log( "aku memiliki skill : " + this.skill)
    }
}

let student = new Student('Taufik', ['HTML',' CSS'], 3.9)
console.log(student)
student.sebutkanNama()
student.sebutkanSkill()
