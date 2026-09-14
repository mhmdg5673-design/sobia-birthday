// تحميل مسبق للصوت أول ما الصفحة تفتح عشان الآيفون ما يعلقش
let music = document.getElementById("bgMusic");
music.load();

function checkPassword(){
    let pass = document.getElementById("password").value;
    
    if(pass === "Sobety_ana_w_bas"){
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
        
        // محاولة التشغيل بعد إخفاء شاشة اللوجين
        let playPromise = music.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // الصوت اشتغل تمام
            }).catch(error => {
                // لو الآيفون عمل حظر، هنخليها تشتغل مع أول ضغطة anywhere في الصفحة
                document.addEventListener('click', function onceClick() {
                    music.play();
                    document.removeEventListener('click', onceClick);
                }, { once: true });
            });
        }
    } else {
        alert("Wrong Password ❌ (جربي تاني يا شاطرة 😂)");
    }
}
