const trex = document.querySelector("#trex");
const kaktus = document.querySelector("#kaktus");

function zipla() {
    if (trex.classList != "kaktus-animate") {
        kaktus.classList.add("kaktus-animate");
    }

    if (trex.classList != "trex-animate") {
        trex.classList.add("trex-animate");
        setTimeout(function () {
            trex.classList.remove("trex-animate");
        }, 500)
    }
}

function oyunuYenidenBaslat() {
    trex.style.bottom = "0";
    kaktus.style.left = "100%"; // Kaktüsü ekran dışına yerleştir
    kaktus.style.display = "block";

    // Kaktüs animasyonunu başlat
    kaktus.classList.add("kaktus-animate");

    // Oyun bitti alert'ini kaldır
    alert("Oyun Bitti");

    // Yeniden başlatma işlemi tamamlandıktan sonra interval'i tekrar başlat
    carpisma = setInterval(function () {
        var trexBottom = parseInt(window.getComputedStyle(trex).getPropertyValue("bottom"));
        var kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));

        if (kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40) {
            kaktus.classList.remove("kaktus-animate");
            kaktus.style.display = "none";
            clearInterval(carpisma);
            alert("Oyun Bitti");
            oyunuYenidenBaslat(); // Oyunu tekrar başlat
        }
    }, 10);
}

var carpisma = setInterval(function () {
    var trexBottom = parseInt(window.getComputedStyle(trex).getPropertyValue("bottom"));
    var kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));

    if (kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40) {
        kaktus.classList.remove("kaktus-animate");
        kaktus.style.display = "none";
        clearInterval(carpisma);
        alert("Oyun Bitti");
        oyunuYenidenBaslat(); // Oyunu tekrar başlat
    }
}, 10);
