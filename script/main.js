function konfirmasi(){
    var tanya = confirm("Apakah anda ingin pindah halaman?");

    if(tanya){
        window.location = "p03/tabel.html";
    }else{
        window.location = "index.html";
    }
}

function konfirmasi2(){
    var tanya = confirm("Apakah anda ingin pindah halaman?");

    if(tanya){
        window.location = "p03css/tabel-2.html";
    }else{
        window.location = "index.html";
    }
}

function konfirmasi3(){
    var tanya = confirm("Apakah anda ingin pindah halaman?");

    if(tanya){
        window.location = "p03jquery/tabel-3.html";
    }else{
        window.location = "index.html";
    }
}

function konfirmasiKembali(){
    var kembali = confirm("Apakah ingin kembali ke halaman utama?");

    if(kembali){
        window.location = "../index.html";
    }else{
        window.location = "tabel.html";
    }
}

function konfirmasiKembali2(){
    var kembali = confirm("Apakah ingin kembali ke halaman utama?");

    if(kembali){
        window.location = "../index.html";
    }else{
        window.location = "tabel-2.html";
    }
}