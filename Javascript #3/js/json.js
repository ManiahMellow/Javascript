document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {

    let url = "js/tblmenu.json";
    fetch(url)
    .then(response => response.json())
    .then(function (data) {
        let output = "<h3>DATA MENU</h3> <table>     <th>Menu</th>   <th>Harga</th>    <th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
            </tr>`;
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML = output;
    })
};

function hasil() {
    let link = "js/tblmenu.json";

    fetch(link)
    .then(function (respon) {
        return respon.json();
    })
    .then(function (data) {
        console.log(data);
    })
};




// let tblmenu = [
//     {
//     "idmenu" : 11,
//     "idkategori" : 37,
//     "menu" : "Mangga",
//     "gambar" : "mangga.jpg",
//     "harga" : 15000,
//     "warna" : ["hijau", "kuning", "orange"],
//     "stok" : true,
//     "keterangan" : null
// },
//     {
//     "idmenu" : 12,
//     "idkategori" : 37,
//     "menu" : "Pisang",
//     "gambar" : "pisang.jpg",
//     "harga" : 8000,
//     "warna" : ["kuning"],
//     "stok" : false,
//     "keterangan" : null
// }
// ]

// console.log(tblmenu[0].menu);