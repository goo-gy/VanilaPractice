export default function Page1({ $target }) {
  const $page = document.createElement('div');
  $page.innerHTML = '<h1>Page1</h1>';

  this.render = () => {
    $target.appendChild($page);
  };
}
