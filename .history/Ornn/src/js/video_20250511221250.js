window.addEventListener('load', () => {
  // Espera 4.5s (tempo da intro)
  setTimeout(() => {
    // Criação do container do vídeo
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    document.body.appendChild(videoContainer);

    // Criação do vídeo
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true; // Mutado conforme pedido
    video.playsInline = true;
    video.controls = false;

    const source = document.createElement('source');
    source.src = '/Ornn/src/assets/Ornn_apresentacao.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    videoContainer.appendChild(video);

    // Áudio separado (opcional)
    const audio = new Audio('/Ornn/src/assets/Ornn_audio.mp3');
    audio.autoplay = true;
    audio.play().catch(() => {
      document.body.addEventListener('click', () => {
        audio.play().catch(err => console.log('Erro no áudio:', err));
      });
    });

    // Após 10s, faz apagão e remove o vídeo
    setTimeout(() => {
      videoContainer.classList.add('fade-out');
      setTimeout(() => {
        videoContainer.remove();
      }, 1000); // Espera 1s do fade
    }, 10000); // 10s de vídeo
  }, 4500); // Espera 4.5s da intro
});
