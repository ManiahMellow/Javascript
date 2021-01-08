if (true) {
    console.log("Dijalankan jika benar");
}else{
    console.log("dijalankan jika salah");
}

let nilai = 55;
let lulus = 80;
let batasatas = 100;
let batasbawah = 0;
let peringatan = "NILAI SALAH";
let baik = "LULUS";
let kurang = "REMIDI";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= lulus) {
        console.log(baik);
    } else {
        console.log(kurang);
    }
} else {
    console.log(peringatan);
}

