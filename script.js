function checkPassword(){
    let pass = document.getElementById("password").value;
    
    if(pass === "Sobety_ana_w_bas"){
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
        
        let music = document.getElementById("bgMusic");
        
        // محاولة التشغيل فوراً
        music.play().catch(function(error) {
            console.log("Autoplay blocked, waiting for touch");
        });

        // حل السحري للأيفون: أول ما تلمس الشاشة في أي حتة، الصوت هيشتغل لوحده
        window.addEventListener('click', function playAudio() {
            music.play();
            window.removeEventListener('click', playAudio);
        }, { once: true });
        
    } else {
        alert("Wrong Password ❌ (جربي تاني يا شاطرة 😂)");
    }
}
