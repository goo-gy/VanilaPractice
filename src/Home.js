export default function Home({ $target }) {
  const $page = document.createElement('div');
  $page.innerHTML = `
    <div>
      <h1>Home</h1>
      <div><a href="/page1/1">page1</a></div>
      <div><a href="/page2">page2</a></div>
    </div>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
