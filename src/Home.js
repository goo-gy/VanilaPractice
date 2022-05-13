export default function Home({ $target }) {
  const $page = document.createElement('div');
  $page.innerHTML =
    '<div><h1>Home</h1><a href="/page1">page1</a><a href="/page2">page2</a></div>';

  this.render = () => {
    $target.appendChild($page);
  };
}
