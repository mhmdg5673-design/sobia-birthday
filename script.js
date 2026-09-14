function checkPassword(){
    let pass = document.getElementById("password").value;
    
    // الباسورد هو: Sobety_ana_w_bas
    if(pass === "Sobety_ana_w_bas"){
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("bgMusic").play(); // تشغيل الأغنية تلقائياً
    } else {
        alert("Wrong Password ❌ (جربي تاني يا شاطرة 😂)");
    }
}
