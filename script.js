let seconds=0;
let minutes=0;
let hundrethsec=10;

function stopwatch(){
    hundrethsec++;
    if (hundredthsec%100==0 && seconds%60==0){
        minutes++;
        seconds=0;
        hundrethsec=0;
    }
    else if (hundrethsec%100==0){
        seconds++;
        hundrethsec=0;
    }

    document.getElementById("display").innerHTML = minutes + ":" + seconds + ":" + hundrethsec;
}

window.setInterval(stopwatch, 1000);