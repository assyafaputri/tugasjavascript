function cek() {
    let uname = document.getElementById("user").value;
    let pw = document.getElementById("pass").value;
    
    console.log (uname);
    console.log (pw);

    if (uname == "maydhatulas-syafaputrihermawan" && pw == "bismillah") {
        window.alert("Cek berhasil");
        location.replace("halamanberhasil.html");
        document.getElementById("user").value="";
    }
    else {
        window.alert("Cek gagal");
        document.getElementById("user").value="";
    }
}