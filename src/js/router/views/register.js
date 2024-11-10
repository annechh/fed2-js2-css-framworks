import { onRegister } from '../../ui/auth/register';
import { footerStyle } from '../../ui/dom/footer';
import { buildNavBar } from '../../ui/dom/nav';
import {
  formDivWrapper,
  formStyle,
  inputStyle,
  labelInputDivStyle,
} from '../../ui/dom/styleElements';
import { darkLightModes } from '../../ui/global/darkLightMode';

/**
 * Adds event listener to the register form to handle form submission.
 * When the form is submitted, it triggers the `onRegister` function.
 *
 * @description
 * Attaches a `submit`event listener to the register form, and when the for is submitted,
 * the `onRegister` function handles the register logic
 */

const form = document.forms.register;
form.addEventListener('submit', onRegister);

buildNavBar();
darkLightModes();
footerStyle();
formStyle();
labelInputDivStyle();
inputStyle();
formDivWrapper();
