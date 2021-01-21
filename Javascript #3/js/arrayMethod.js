//array bisa berisi - string - number - objek - function - campuran.

let nilai = [
    {nama : "Budi", ipa : 90, bahasa : 80, matematika : 95},
    {nama : "Joni", ipa : 80, bahasa : 85, matematika : 75},
    {nama : "Tejo", ipa : 75, bahasa : 95, matematika : 85},
    {nama : "Siti", ipa : 95, bahasa : 75, matematika : 90},
    
];

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// });

// nilai.filter(a => a.ipa > 80 && a.matematika > 85 ? console.log(a.nama) : null);

// console.log(nilai)

let nama = ["Budi", "Joni", "Tejo", "Siti"];
let mapel = ["ipa", "bahasa", "matematika"];

//console.log(nama.concat(mapel));
//console.log(nama.concat(['ips', 'ppkn', 'sejarah']));

// nama.push("Putri", "Dono");

// nama.unshift("Rini");

//console.log(nama.splice(1, 3));

//console.log(nama.slice(2, 3));

//console.log(nama.shift());

// console.log(nama.pop());

// console.log(nilai[2].nama);
//console.log(nama);

// nama.forEach(function (a) {
//     console.log(a);
// });

// nama.forEach(a => console.log(a));

// let siswa = nilai.map(function (a) {
//     return a.nama;

// });

// let siswa = nilai.map(a => [a.nama, a.ipa, a.matematika]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

let total = nilai.reduce(function (a, b) {
    return a += b.ipa;
}, 0);

console.log(total);

let value = nilai.reduce((a, b) => (a += b.matematika), 0);

console.log(value);