import Home from './Home.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = '';
    if (pathname === '/') {
      new Home({ $target }).render();
    }
    if (pathname === '/page1') {
      new Page1({ $target }).render();
    } else if (pathname === '/page2') {
      new Page2({ $target }).render();
    }
  };

  this.route();
}
