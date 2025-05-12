window.addEventListener('load', () => {
  // Criação do container do vídeo
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container');
  document.body.appendChild(videoContainer);

  // Criação do vídeo
  const video = document.createElement('video');
  video.autoplay = true;
  video.muted = true;
  video.loop = false;

  // Criação da fonte do vídeo
  const videoSource = document.createElement('source');
  videoSource.src = '/Ornn/src/assets/Ornn_apresentacao.mp4'; // Substitua pelo seu caminho de vídeo
  videoSource.type = 'video/mp4';
  video.appendChild(videoSource);
  videoContainer.appendChild(video);

  // Após 10 segundos, trocamos para a imagem
  setTimeout(() => {
    // Esconde o vídeo
    videoContainer.style.opacity = 0;
    videoContainer.style.transition = 'opacity 1s ease'; // Efeito de fade-out

    // Troca para a imagem de fundo
    document.body.style.backgroundImage = 'url(/Ornn/src/assets/Ornn_mais_brao.webp)';
    
    // Após a animação, remove o vídeo
    setTimeout(() => {
      videoContainer.remove(); // Remove o vídeo do DOM
    }, 1000); // Duração do fade-out
  }, 10000); // Vídeo ficará 10 segundos
});
