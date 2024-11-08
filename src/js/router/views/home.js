import { setLogoutListener } from '../../ui/global/logout';
import { authGuard } from '../../utilities/authGuard';
import { buildNavBar } from '../../ui/dom/nav';
import { mobileFooter } from '../../ui/dom/footer';
import { loadPosts } from '../../utilities/pagination';
import { darkLightModes } from '../../ui/global/darkLightMode';

/**
 * @description
 * Loads the homepage by verifying user authentication, fetching posts,
 * and setting up the navigation bar and logout listener.
 *
 * This function checks if the user is authenticated through `authGuard()`. If authenticated, it proceeds to
 * load posts, build the navigation bar, and set up a logout listener for user interaction.
 *
 * @async
 * @function loadHomePage
 * @returns {Promise<void>} A promise that resolves when the homepage has been fully loaded.
 *
 */

async function loadHomePage() {
  if (!authGuard()) {
    return;
  }
  await loadPosts();
  buildNavBar();
  setLogoutListener();
  mobileFooter();
  darkLightModes();
}

loadHomePage();
