// JavaScript for making the navigation bar responsive
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

// JavaScript for the dark filter over the background video
document.addEventListener("DOMContentLoaded", function () {
    var videoOverlay = document.createElement("div");
    videoOverlay.id = "video-overlay";
    document.body.appendChild(videoOverlay);
});

// JavaScript to control the playback of the MP3 file

const audio = new Audio('Theme Song.mp3');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        document.getElementById('audioButton').innerText = 'Pause';
    } else {
        audio.pause();
        document.getElementById('audioButton').innerText = 'Play';
    }
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;  // Reset the audio to the beginning
    document.getElementById('audioButton').innerText = 'Play';
}


document.getElementById('audioButton').addEventListener('click', toggleAudio);



