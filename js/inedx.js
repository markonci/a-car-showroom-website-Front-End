function toggleDarkMode() {
  const body = document.querySelector('body');
  const darkModeBtn = document.getElementById('darkModeBtn');
  const lightModeBtn = document.getElementById('lightModeBtn');

  body.style.backgroundColor = 'black';
  body.style.color = 'white';
  darkModeBtn.disabled = true;
  lightModeBtn.disabled = false;
}

function toggleLightMode() {
  const body = document.querySelector('body');
  const darkModeBtn = document.getElementById('darkModeBtn');
  const lightModeBtn = document.getElementById('lightModeBtn');

  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  darkModeBtn.disabled = false;
  lightModeBtn.disabled = true;
}