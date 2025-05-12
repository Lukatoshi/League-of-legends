// video.js

// Função para exibir o vídeo com o áudio
function showVideoWithAudio() {
  const videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';
  document.body.appendChild(videoContainer);

  const video = document.createElement('video');
  video.id = 'intro-video';
  video.muted = true; // Desativa o som do vídeo
  video.autoplay = true;
  video.loop = false;

  const videoSource = document.createElement('source');
  videoSource.src = '/Ornn/src/assets/Ornn_mp4.mp4'; // Caminho para o vídeo
  videoSource.type = 'video/mp4';

  video.appendChild(videoSource);
  videoContainer.appendChild(video);

  // Áudio
  const audio = document.createElement('audio');
  audio.autoplay = true;
  const audioSource = document.createElement('source');
  audioSource.src = 'src/assets/audio.mp3'; // Caminho para o áudio
  audioSource.type = 'audio/mp3';
  audio.appendChild(audioSource);
  document.body.appendChild(audio);

  // Quando o vídeo terminar (10 segundos), transitar para a imagem de fundo
  video.onended = () => {
    // Fade out do vídeo
    videoContainer.style.opacity = 0;

    // Espera o tempo de fade-out (1 segundo), depois troca para a imagem
    setTimeout(() => {
      // Substitui o vídeo pela imagem
      document.body.style.backgroundImage = "url('src/assets/image.jpg')"; // Substitua pelo caminho da imagem

      // Exibe o nome e subtítulo do personagem
      showCharacterName();
    }, 1000); // Tempo de fade-out (1 segundo)
  };
}

// Função para exibir o nome e subtítulo do personagem
function showCharacterName() {
  const nameContainer = document.createElement('div');
  nameContainer.id = 'nome-container';
  nameContainer.textContent = 'Personagem Nome'; // Substitua pelo nome do personagem
  document.body.appendChild(nameContainer);

  const subtitleContainer = document.createElement('div');
  subtitleContainer.id = 'subtitulo-container';
  subtitleContainer.textContent = 'Subtítulo do Personagem'; // Substitua pelo subtítulo do personagem
  document.body.appendChild(subtitleContainer);

  // Aparece o nome e subtítulo com a transição
  setTimeout(() => {
    nameContainer.classList.add('show');
  }, 1000); // Tempo de exibição do nome

  setTimeout(() => {
    subtitleContainer.classList.add('show');
  }, 2000); // Tempo de exibição do subtítulo

  setTimeout(() => {
    showNav(); // Exibe a navegação após o subtítulo
  }, 3000); // Tempo de exibição do subtítulo
}

// Função para exibir a navegação
function showNav() {
  const nav = document.createElement('div');
  nav.id = 'navigation';
  nav.innerHTML = '<a href="#home">Início</a> | <a href="#about">Sobre</a>'; // Coloque os links da navegação
  document.body.appendChild(nav);
}

// A função que chama o vídeo após a tela de loading (intro)
window.onload = function () {
  // Após a tela de loading (intro) terminar, executa a função
  setTimeout(() => {
    showVideoWithAudio();
  }, 4500); // Aguarda a duração da intro para começar o vídeo
};
