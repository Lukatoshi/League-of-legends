window.addEventListener('load', () => {
  // Espera os 4.5s da tela de loading antes de mostrar o vídeo
  setTimeout(() => {
    // Criação do container do vídeo
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    document.body.appendChild(videoContainer);

    // Criação do vídeo
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = false;
    video.playsInline = true;
    video.controls = false;
    video.loop = false;

    const source = document.createElement('source');
    source.src = '/Ornn/src/assets/Ornn_mp4.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    videoContainer.appendChild(video);

    // Criação do áudio separado (caso o vídeo esteja mudo)
    const audio = new Audio('/Ornn/src/assets/Ornn_mp3.mp3');
    audio.autoplay = true;
    audio.play().catch(err => {
      console.log('Erro ao tocar áudio:', err);
      document.body.addEventListener('click', () => {
        audio.play();
      });
    });

    // Após 10 segundos, faz fade-out e redireciona
    setTimeout(() => {
      videoContainer.classList.add('fade-out');

      // Após o fade, redireciona
      setTimeout(() => {
        window.location.href = '/'; // Altere para o caminho real da sua página
      }, 1000); // espera 1s do fade
    }, 10000); // após 10s do vídeo
  }, 4500); // espera 4.5s da intro
});
