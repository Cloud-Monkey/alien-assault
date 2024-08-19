const audio = document.getElementById("title-music");
const playpause = document.getElementById("play-pause");
const volume = document.getElementById("volume");
const mutebtn = document.getElementById("mute");
const controls = document.querySelector(".controls");

// Play-Pause
playpause.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

let isPlaying = false;

// Function to toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audio.play();
        playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

document.addEventListener("keydown", function (event) {
    if (event.key === 32 || event.key === " ") {
        event.preventDefault();
    }
});

// Event listener for the audio to
// update the isPlaying flag
audio.addEventListener("play", function () {
    isPlaying = true;
});

audio.addEventListener("pause", function () {
    isPlaying = false;
});

// Mute or Unmute
mutebtn.addEventListener("click", function () {
    if (audio.muted) {
        audio.muted = false;
        mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        volume.value = audio.volume;
    } else {
        audio.muted = true;
        mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        volume.value = 0;
    }
});

// adjust mute icon on volume change
volume.addEventListener("input", function () {
    audio.volume = volume.value;
    if (audio.volume === 0) {
        mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
});