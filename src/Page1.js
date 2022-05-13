export default function Page1({ $target }) {
  const { pathname } = location;
  const params = pathname.split('/');
  const stateId = params[params.length - 1];

  const $page = document.createElement('div');

  $page.innerHTML = `
  <div>
    <h1>Page1</h1>
    <h2>hello ${stateId}</h2>
  </div>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
