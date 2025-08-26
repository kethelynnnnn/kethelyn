const btn = document.getElementById('moreInfoBtn');
const extraInfo = document.getElementById('extraInfo');

btn.addEventListener('click', () => {
  if (extraInfo.style.display === 'block') {
    extraInfo.style.display = 'none';
    btn.textContent = 'Mostrar mais informações';
  } else {
    extraInfo.style.display = 'block';
    btn.textContent = 'Mostrar menos informações';
  }
});
