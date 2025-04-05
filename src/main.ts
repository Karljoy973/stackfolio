import '../public/styles.css';
import './utils/index.js';
import './utils/theme-switcher.js';

const rootElement = document.querySelector('#root');
if (rootElement) {
  rootElement.innerHTML = '<div id="app"></div>';
}
