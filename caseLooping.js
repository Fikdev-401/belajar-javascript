let student = [
    {
        name: 'Daffa',
        major: 'TRPL'
    },
    {
        name: 'Ahmad',
        major: 'TRPL'
    },
    {
        name: 'Ikhsan',
        major: 'TKJ'
    },
    {
        name: 'Ikhsan',
        major: 'TKRO'
    },
]

//fungsi yang menerima 3 parameter
function cekMajor(listMhs, major , field) {
    for (let i in listMhs){
        if(listMhs[i].major == major) {
            console.log(listMhs[i].name + field)
        }
    }
}

cekMajor(student, 'TKJ' ,' Anak TKJ')