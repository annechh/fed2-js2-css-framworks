import { buildNavBar } from '../../ui/dom/nav';
import { darkLightModes } from '../../ui/global/darkLightMode';
import { setLogoutListener } from '../../ui/global/logout';
import { authGuard } from '../../utilities/authGuard';

buildNavBar();
setLogoutListener();
authGuard();
darkLightModes();
