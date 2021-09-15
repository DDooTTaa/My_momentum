
const musicPlayer = document.querySelector('.music');
const playMusic = document.querySelector('.music li:first-child');
const stopMusic = document.querySelector('.music li:nth-child(2)');

musicPlayer.addEventListener('click', function () {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        playMusic.classList.toggle('hidden');
        stopMusic.classList.toggle('hidden');
    } else {
        audio.pause();
        playMusic.classList.toggle('hidden');
        stopMusic.classList.toggle('hidden');
    }
});

musicPlayer.addEventListener(
    'ended',
    function () {
        this.currentTime = 0;
        this.play();
    },
    false
);
