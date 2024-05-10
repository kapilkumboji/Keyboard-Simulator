const keyAudioMap = {
    "c": "c.wav",
    "v": "v.wav",
    "b": "b.wav",
    "n": "n.wav",
    "m": "m.wav",
    "f": "f.wav",
    "g": "g.wav",
    "j": "j.wav"
};

const audioObjects = {};
Object.keys(keyAudioMap).forEach(key => {
    const audioFile = keyAudioMap[key];
    audioObjects[key] = new Audio(audioFile);
});

function makeSound(key) {
    const audio = audioObjects[key];
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

document.querySelectorAll(".keyBoard").forEach(button => {
    button.addEventListener("click", function() {
        const buttonValue = this.value;
        makeSound(buttonValue);
        buttonAnimation(buttonValue);
    });

    const audio = audioObjects[button.value];
    if (audio) {
        const volumeSlider = document.getElementById("volume-slider");
        volumeSlider.addEventListener("input", function(e) {
            audio.volume = e.currentTarget.value / 100;
        });
    }
});

function buttonAnimation(key) {
    const activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 30);
}
