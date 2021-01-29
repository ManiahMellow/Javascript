//bisa ditulis dengan seperti ini
// $( document ).ready(function() {
//     console.log( "mulai!" );
// });

//bisa disingkat dengan seperti ini
$(function() {
    $("#isi").html("<h4>Mulai belajar jquery</h4>");

    $("#klik").click(function (e) { 
        e.preventDefault();

        alert("belajar javascript dan jquery");
        
    });

    $("button").dblclick(function (e) { 
        e.preventDefault();
        alert("semangat belajar javascript dan jquery");
    });

    $("#isi").mouseleave(function () { 
        alert("mouseleave");
    });

    $("button").keypress(function (e) { 
        alert("bisa yok!");
    });
});

