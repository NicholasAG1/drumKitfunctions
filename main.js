// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);



// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        palyDrum(clap, A)
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        palyDrum(hihat, S)
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        palyDrum(kick, D)
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        palyDrum(openhat, F)
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        palyDrum(boom, G)
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        palyDrum(ride, H)
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        palyDrum(snare, J)
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        palyDrum(tom, K)
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        palyDrum(tink, L)
    }
}

function palyDrum(name, letter,) {
    let audio = document.getElementById(name);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(letter).classList.add("playing");
    // Add transition end listeners
    document.getElementById(letter).addEventListener('transitionend', removePlaying);
}




// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

