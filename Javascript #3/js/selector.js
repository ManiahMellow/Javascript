const hari = 3;
let hasil;

switch (hari) {
    case 1:
        hasil = "MINGGU"        
        break;
    case 2:
        hasil = "SENIN"        
        break;
    case 3:
        hasil = "SELASA"        
        break;
    case 4:
        hasil = "RABU"        
        break;
    case 5:
        hasil = "KAMIS"        
        break;
    case 6:
        hasil = "JUMAT"        
        break;
    case 7:
        hasil = "SABTU"        
        break;

    default:
        hasil = "HARI TIDAK DITEMUKAN"
        break;
}

console.log(hasil);

const bulan = "Agustus";
let nama;

switch (bulan) {
    case "Januari":
        nama = 1;      
        break;
    case "Februari":
        nama = 2;      
        break;
    case "Maret":
        nama = 3;      
        break;
    case "April":
        nama = 4;      
        break;
    case "Mei":
        nama = 5;      
        break;
    case "Juni":
        nama = 6;      
        break;
    case "Juli":
        nama = 7;      
        break;
    case "Agustus":
        nama = 8;      
        break;
    case "September":
        nama = 9;      
        break;
    case "Oktober":
        nama = 10;      
        break;
    case "November":
        nama = 11;      
        break;
    case "Desember":
        nama = 12;      
        break;

    default:
        nama = "NAMA BULAN TIDAK DITEMUKAN"
        break;
}

console.log(nama);