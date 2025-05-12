// Importa o CSS dinamicamente
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/Ornn/src/css/video.css'; // Caminho para seu CSS
document.head.appendChild(link);

window.addEventListener('load', () => {
  // Espera os 4.5s da tela de loading antes de mostrar o vídeo
  setTimeout(() => {
    // Importa o CSS do vídeo
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/Ornn/src/assets/css/video.css';
    document.head.appendChild(link);

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
    audio.play().catch(err => {
      console.log('Erro ao tocar áudio:', err);
      document.body.addEventListener('click', () => {
        audio.play();
      });
    });

    // Após 10 segundos, faz fade-out e remove o vídeo
    setTimeout(() => {
      videoContainer.classList.add('fade-out');
      setTimeout(() => {
        videoContainer.remove();
      }, 1000); // 1s do fade-out
    }, 10000); // 10s de vídeo
  }, 4500); // 4.5s da intro
});
