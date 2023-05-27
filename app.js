const form = document.querySelector('#form');
const menu = document.querySelector('#menu');

form.addEventListener('submit', (event)  => {
  event.preventDefault();
  const malumot = form.select.value.trim();


  if (malumot === '' || !malumot.trim()){
    return
  }
  creatTodo(malumot);
  form.reset();
});

function $el(tagname) {
  const el = document.createElement(tagname);
  return el;
}

function creatTodo(malumot) {

  const ul = $el('ul')
  ul.id = 'menu'

  const li = $el('li');
  li.className = 'menu-item';

  const h1 = $el('h1');
  h1.className = 'list-name';
  h1.textContent = malumot;

  const del = $el('button');
  del.id = 'del';

  const i = $el('i');
  i.className = 'bi bi-trash'

  const alldel = $el('button')
  alldel.id = 'delete'

  del.addEventListener('click', () =>{
    li.remove()
  })

  alldel.addEventListener('submit',() =>{
    ul.li.remove()
  })

  del.append(i) 
  li.append(h1, del );
  menu.appendChild(li);

}