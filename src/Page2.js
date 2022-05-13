export default function Page2({ $target }) {
  const $page = document.createElement('div');
  $page.innerHTML = `
  <div>
    <h1>Page2</h1>
    <button class="btn1">click me</button>
  <div>`;

  this.render = () => {
    $target.appendChild($page);
  };

  const btn1 = $page.querySelector('.btn1');
  btn1.addEventListener('click', () => {
    alert('hi');
  });
}
