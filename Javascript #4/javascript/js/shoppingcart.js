let tblmenu = [
    {
        idmenu : 11,
        idkategori : 37, 
        menu : "Mangga",
        gambar : "mangga.jpg", 
        harga : 15000
    },
    {
        idmenu : 12, 
        idkategori : 37, 
        menu : "Pisang", 
        gambar : "pisang.jpg", 
        harga : 8000
    },
    {
        idmenu : 13, 
        idkategori : 37, 
        menu : "Apel", 
        gambar : "apel.jpg", 
        harga : 9000
    },
    {
        idmenu : 14, 
        idkategori : 37, 
        menu : "Melon", 
        gambar : "melon.jpg", 
        harga : 6000
    },
    {
        idmenu : 15, 
        idkategori : 35, 
        menu : "Es Jeruk", 
        gambar : "es-jeruk.jpg",
        harga : 3000
    },
    {
        idmenu : 16, 
        idkategori : 35, 
        menu : "Es Cincau", 
        gambar : "es-cincau.jpg",
        harga : 3000
    },
    {
        idmenu : 17, 
        idkategori : 35, 
        menu : "Es Pisang Ijo", 
        gambar : "es-pisang-ijo.jpg",
        harga : 3000
    },
    {
        idmenu : 18, 
        idkategori : 35, 
        menu : "Es Doger", 
        gambar : "es-doger.jpg",
        harga : 3000
    },
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
      <img src="images/${kolom.gambar}" alt="" />
    </div>
    <div class="title">
      <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
      <h2>${kolom.harga}</h2>
    </div>
    <div class="btn-beli">
        <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
  </div>`;
});


let isi = document.querySelector(".produk").innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        //console.log(btnbeli[index].dataset["idmenu"]);
        //cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);

                console.log(cart);
            }
        });
    };
};



