import { onLogout } from '../auth/logout.js';

export function setLogoutListener() {
  const logoutButton = document.getElementById('logoutButton');
  logoutButton.addEventListener('click', () => {
    onLogout();
  });

  const mobileLogoutButton = document.getElementById('mobileLogoutButton');
  mobileLogoutButton.addEventListener('click', () => {
    onLogout();
  });
}
