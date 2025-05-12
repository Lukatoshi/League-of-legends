(async function loadIntro() {
  // Carrega CSS da intro
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'src/css/intro.css';
  document.head.appendChild(css);

  // Carrega HTML da intro
  const res = await fetch('src/intro.html');
  const html = await res.text();
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  // Remove após a animação
  setTimeout(() => {
    const intro = document.querySelector('.intro');
    if (intro) intro.remove();
    document.body.style.overflow = 'auto'; // Libera o scroll
  }, 4500);
})();
