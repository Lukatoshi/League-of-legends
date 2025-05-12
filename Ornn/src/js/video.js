// Importa o CSS do vídeo apenas uma vez
const videoCSS = document.createElement('link');
videoCSS.rel = 'stylesheet';
videoCSS.href = '/Ornn/src//css/video.css';
document.head.appendChild(videoCSS);

window.addEventListener('load', () => {
  // Espera os 4.5s da intro antes de mostrar o vídeo
  setTimeout(() => {
    // Criação do container do vídeo
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    document.body.appendChild(videoContainer);

    // Criação do vídeo
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.controls = false;
    video.loop = false;

    const source = document.createElement('source');
    source.src = '/Ornn/src/assets/Ornn_mp4.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    videoContainer.appendChild(video);

    // Criação do áudio separado
    const audio = new Audio('/Ornn/src/assets/Ornn_mp3.mp3');
    audio.autoplay = true;
    audio.loop = true;

    const audioStartTime = Date.now();

    // Tenta tocar o áudio
    audio.play().catch(err => {
      console.warn('Erro ao tocar áudio:', err);

      const desbloquearAudio = () => {
        const tempoDecorrido = (Date.now() - audioStartTime) / 1000;
        const duracao = audio.duration || 10;
        audio.currentTime = tempoDecorrido % duracao;

        audio.play().then(() => {
          console.log(`Áudio tocando a partir de ${audio.currentTime.toFixed(2)}s com loop.`);
          document.body.removeEventListener('click', desbloquearAudio);
        }).catch(err => {
          console.warn('Ainda não foi possível tocar o áudio:', err);
        });
      };

      document.body.addEventListener('click', desbloquearAudio);
    });

    // Após 10 segundos, faz fade-out e remove o vídeo
    setTimeout(() => {
      videoContainer.classList.add('fade-out');
      setTimeout(() => {
        videoContainer.remove();
      }, 1000); // duração do fade
    }, 10000); // tempo de exibição do vídeo
  }, 3500); // tempo da intro
});

