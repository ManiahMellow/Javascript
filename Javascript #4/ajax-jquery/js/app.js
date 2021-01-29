$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) { 
        e.preventDefault();
        
        id = $("#id").val();;
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    
    $("#btn-tambah").click(function (e) { 
        e.preventDefault();

        $("#title").html("<h5>Tambah Data</h5>");
        
        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });


    $("tbody").on("click", ".btn-delete", function () {
        let id = $(this).attr("data-id");

        if (confirm("Apakah Anda Ingin Menghapusnya?")) {
            deleteData(id);
        }
        
    });

    $("tbody").on("click", ".btn-ubah", function () {
        let id = $(this).attr("data-id");

        $("#title").html("<h5>Ubah Data</h5>");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idPelanggan = {
            idpelanggan : id
        };

        $.ajax({
            type: "pos",
            url: "php/selectUpdate.php",
            cache : false,
            data: JSON.stringify(idPelanggan),
            //dataType: "dataType",
            success: function (response) {
               let data = JSON.parse(response);

               $("#id").val(data.idpelanggan);
               $("#pelanggan").val(data.pelanggan);
               $("#alamat").val(data.alamat);
               $("#telp").val(data.telp);

            }
        });

    }

    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache : false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let No = 1;
                $.each(response, function (key, val) { 
                     out += `<tr>
                        <td>${No++}</td>
                        <td>${val.pelanggan}</td>
                        <td>${val.alamat}</td>
                        <td>${val.telp}</td>
                        <td><button type="button" class="btn btn-danger btn-delete" data-id=${val.idpelanggan} >Delete</button></td>
                        <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning btn-ubah" data-id=${
                            val.idpelanggan
                          }>Ubah</button></td>
                     </tr>`;
                });

                $("#isidata").html(out);
            }

        });
        
    }

    function insertData() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        };

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            cache : false,
            data: JSON.stringify(dataPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<h6>${response}</h6>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function deleteData(id) {
        let idPelanggan = {
            idpelanggan : id
        };

        $.ajax({
            type: "pos",
            url: "php/delete.php",
            cache : false,
            data: JSON.stringify(idPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<h6>${response}</h6>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function updateData() {
        let dataPelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        };

        $.ajax({
            type: "pos",
            url: "php/update.php",
            cache : false,
            data: JSON.stringify(dataPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<h6>${response}</h6>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }


    selectData();
});