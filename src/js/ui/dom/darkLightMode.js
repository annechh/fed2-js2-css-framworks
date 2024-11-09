export function buildDarkLightToggle() {
  const toggleLabel = document.createElement('label');
  toggleLabel.setAttribute('for', 'light-mode');
  toggleLabel.classList.add(
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'cursor-pointer'
  );

  const toggleInput = document.createElement('input');
  toggleInput.setAttribute('type', 'checkbox');
  toggleInput.id = 'light-mode';
  toggleInput.classList.add('sr-only', 'light-mode', 'toggle-input');

  const toggleSpan1 = document.createElement('span');
  toggleSpan1.classList.add(
    'w-10',
    'h-10',
    // 'bg-purpleDark',
    // 'dark:bg-red-600',
    'rounded-full'
  );

  const toggleSpan2 = document.createElement('span');
  toggleSpan2.classList.add(
    'absolute',
    'w-9',
    'h-9',
    // 'bg-purpleLight',
    // 'dark:bg-white',
    'rounded-full',
    'transition-transform',
    'transform',
    'checked:translate-x-5',
    'flex',
    'items-center',
    'justify-center'
  );

  const toggleIcon = document.createElement('i');
  toggleIcon.classList.add('fa-solid', 'fa-moon', 'text-white', 'text-2xl');

  if (localStorage.getItem('icon-sun') === 'true') {
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
  }

  toggleInput.addEventListener('change', () => {
    if (toggleInput.checked) {
      console.log('Changing icon to sun');
      localStorage.setItem('icon-sun', true);
      toggleIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      console.log('Changing icon to moon');
      localStorage.setItem('icon-sun', 'false');
      toggleIcon.classList.replace('fa-sun', 'fa-moon');
    }
  });

  toggleSpan2.appendChild(toggleIcon);
  toggleLabel.append(toggleInput, toggleSpan1, toggleSpan2);

  return toggleLabel;
}
