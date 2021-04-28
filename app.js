const $lightButton = document.querySelector('#light');
const $darkButton = document.querySelector('#dark');
const $solarButton = document.querySelector('#solar');
const $body = document.body;

const theme = localStorage.getItem('@theme');
const isSolar = localStorage.getItem('@theme-is-solar');

if (theme) {
  $body.classList.add(`theme-${theme}`);
  isSolar && $body.classList.add('theme-solar');
}

$lightButton.addEventListener('click', () => {
  $body.classList.replace('theme-dark', 'theme-light');
  localStorage.setItem('@theme', 'light');
});

$darkButton.addEventListener('click', () => {
  $body.classList.replace('theme-light', 'theme-dark');
  localStorage.setItem('@theme', 'dark');
});

$solarButton.addEventListener('click', () => {
  if ($body.classList.contains('theme-solar')) {
    $body.classList.remove('theme-solar');
    $solarButton.style.cssText = `--bg-solar: var(--yellow);`;
    $solarButton.innerText = 'solarize';

    localStorage.removeItem('@theme-is-solar');
    return;
  }

  $body.classList.add('theme-solar');
  $solarButton.style.cssText = `--bg-solar: white;`;
  $solarButton.innerText = 'normalize';

  localStorage.setItem('@theme-is-solar', true);
});
