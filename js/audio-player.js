const audio = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const musicStatus = document.getElementById('musicStatus');

function updateMusicUI() {
  if (!audio) return;
  const playing = !audio.paused;
  playPauseBtn.innerHTML = playing ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
  musicStatus.textContent = playing ? 'Playing' : 'Paused';
}

playPauseBtn?.addEventListener('click', () => {
  if (!audio) return;
  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
  updateMusicUI();
});

audio?.addEventListener('play', updateMusicUI);
audio?.addEventListener('pause', updateMusicUI);
updateMusicUI();
