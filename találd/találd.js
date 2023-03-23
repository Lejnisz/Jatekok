let veletlen = Math.floor(Math.random() * 100) + 1 // véletlen egész szám 1 és 100 között
let proba = 0;
console.log(veletlen)
document.getElementById("gomb").onclick = function() {
    proba += 1;
    let tipp = document.getElementById("tipp").value
    tipp = Number(tipp);
    console.log(tipp);
    if (veletlen > tipp) {
        document.getElementById("válasz").innerHTML = "A megoldás több"
    }
    else if (veletlen == tipp) {
        document.getElementById("válasz").innerHTML = "A megoldásod tökéletes " + proba + " próbálkozásból sikerült!"
    }
    else if (veletlen < tipp) {
        document.getElementById("válasz").innerHTML = "A megoldás kevesebb"
    }
    else {
        document.getElementById("válasz").innerHTML = "A megadott karakterek nem megfelelőek!"
    }
}