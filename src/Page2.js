export default function Page2({ $target }) {
  const $page = document.createElement('div');
  $page.innerHTML = '<h1>Page2</h1>';

  this.render = () => {
    $target.appendChild($page);
  };
}
