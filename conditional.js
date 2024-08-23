function cekKelulusan(peserta){
    let name = peserta.name
    let age = peserta.age
    let poor = peserta.poor
    let skills = peserta.skills

if (age < 21 && poor == true && skills.length > 2) {
    console.log(name + ' Kamu Lulus')
} else if(age < 21 || poor == true && skills.length > 2){
    console.log(name + ' Kamu hampir lulus')
} else {
    console.log(name + ' Kamu gak lulus')
}
}

var mhs ={
    name : 'Upik',
    age : 19,
    poor : true,
    skills : [ 'Word', 'Excel', 'Ngoding']
}
var mhs2 ={
    name : 'Daffa',
    age : 20,
    poor : true,
    skills : [ 'Word', 'Excel']
}
var mhs3 ={
    name : 'Saputra',
    age : 21,
    poor : true,
    skills : [ 'Word']
}

cekKelulusan(mhs)
cekKelulusan(mhs2)
cekKelulusan(mhs3)
