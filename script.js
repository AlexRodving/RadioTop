const audio = document.getElementById('myAudio');
const playButton = document.querySelector('.play-button');
const playIcon = document.querySelector('.play');
const pauseIcon = document.querySelector('.pause');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playButton.style.boxShadow = '0 8px 16px rgba(1, 200, 255, 0.744)';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playButton.style.boxShadow = '0 8px 16px rgba(255, 4, 4, 0.719)';
    }
});