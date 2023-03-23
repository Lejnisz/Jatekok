let változó = Math.random()* 100 + 1
változó = Math.floor(változó)
let max = 100
let min = 0
let siker = 0
    if(min == 0 && max == 100){
        document.getElementById("Szöveg").innerHTML = "A megoldás " + változó + " ?"
    }
    document.getElementById("Kevesebb").onclick = function(){
        siker += 1
        max = változó
        do {változó = Math.floor(Math.random()* max + 1)
        }while(változó < min)
        document.getElementById("Szöveg").innerHTML = "A megoldás " + változó + " ?"
        return változó, siker, max
    }
    document.getElementById("Több").onclick = function(){
        siker += 1
        min = változó
        do {változó = Math.floor(Math.random()* max + 1)
        }while(változó < min)
        document.getElementById("Szöveg").innerHTML = "A megoldás " + változó + " ?"
        return változó, siker, min
    }
    document.getElementById("Siker").onclick = function(){
        siker += 1
        document.getElementById("Szöveg").innerHTML = "A megoldás "+ változó +", a játék " + siker + " lépés alatt találta ki."
    }
