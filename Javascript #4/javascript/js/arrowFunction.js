let fungsi = function () {
    console.log("Belajar function");
}

fungsi();

let func = function (nama) {
    console.log("belajar arrow function " + nama);
}

func("semangat ellow!");

let contoh = (nama) => {
    console.log("GABOLE NGANTUKK " + nama);
};

contoh("ELLOW");

let tambah = function (a, b) {
    return a + b;
}

console.log(tambah(2, 3));


let plus = (c, d) => c + d;

console.log(plus(3, 4));


let hasil = (a) => (a * 2);

console.log(hasil(3));


let lagi = () => console.log("coba lagi");

lagi();


let belajar = () => {
    console.log("baris pertama");
    console.log("baris kedua");
    console.log("baris ketiga");
    console.log("baris selanjutnya");
}

belajar();

let nilai = 9;

let uji = nilai < 8 ? 
        () => (predikat="MENGULANGI LAGI") : 
        () => (predikat="LULUS");
console.log(uji());


