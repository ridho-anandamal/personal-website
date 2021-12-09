/* eslint-disable space-before-function-paren */
import '../style/style.css';
import runConsumeData from './templates/main';
import Portfolio from './utilities/figma';
import Navbar from './utilities/navbar';

window.addEventListener('load', async() => {
  Navbar.init();
  runConsumeData();
  await Portfolio.consumeData();
});
