// Cria o objeto de áudio
const audio = new Audio('/Ornn/src/assets/Ornn_audio.mp3'); // Caminho para o arquivo MP3
audio.muted = true; // Inicia o áudio mudo (isso permite a reprodução automática em alguns navegadores)

// Tenta tocar o áudio
const playAudio = async () => {
  try {
    await audio.play();
    console.log('Áudio está tocando!');
  } catch (error) {
    console.log('Erro ao tentar tocar o áudio:', error);
    alert('Clique para permitir a reprodução de áudio.');
    
    // Solicita ao usuário clicar para permitir a reprodução
    document.body.addEventListener('click', () => {
      audio.play().catch(err => {
        console.log('Ainda não foi possível reproduzir o áudio:', err);
      });
    });
  }
};

// Chama a função para tocar o áudio
playAudio();
