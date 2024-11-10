export function darkLightModes() {
  const lightModeToggle = document.querySelector('.light-mode');

  if (localStorage.getItem('light-mode') === 'true') {
    document.documentElement.classList.add('dark');
    lightModeToggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark');
    lightModeToggle.checked = false;
  }

  lightModeToggle.addEventListener('change', () => {
    const isLightMode = lightModeToggle.checked;

    if (isLightMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('light-mode', true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('light-mode', false);
    }
  });
}
