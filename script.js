function checkPassword(){
    let pass = document.getElementById("password").value;
    
    // الباسورد هو: Sobety_ana_w_bas
    if(pass === "Sobety_ana_w_bas"){
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
        
        // تشغيل الأغنية مع تخطي حظر الآيفون
        let music = document.getElementById("bgMusic");
        music.play().catch(function(error) {
            console.log("Autoplay blocked", error);
        });
    } else {
        alert("Wrong Password ❌ (جربي تاني يا شاطرة 😂)");
    }
}
