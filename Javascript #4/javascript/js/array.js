let coba = function () {
    return "Coba function";
}

let buah = [
    'Mangga',
    'Kelapa',
    'Melon',
    'Semangka',
    'Apel',
    15,
    coba(),
    tes = () => "Hasil return arrow function",
    function nama() {
        return "SEMANGAT BELAJAR!";
    }
];

console.log(buah);

console.log(buah[1]);

for(let i in buah){
    console.log(buah[i]);
}

console.log(buah[7]());

console.log(buah[8]());

