//! 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement('div');
document.body.appendChild(div);

//!1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement('div');
const p = document.createElement('p');
div.appendChild(p);
document.body.appendChild(div2);

//!1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement('div');

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  div3.appendChild(p);
}
document.body.appendChild(div3);

//!1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p2 = document.createElement('p');
p2.textContent = 'Soy dinámico';
document.body.appendChild(p2);

//!1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

//!1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//crear ul
const ul = document.createElement('ul');
//crear li por cada array
for (const app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//!1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeMe = document.querySelectorAll('.fn-remove-me');

console.log(typeof removeMe); //object

for (remove of removeMe) {
  remove.remove();
}

//!1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';
console.log(pMedio);
const divMedio = document.querySelector('div');

divMedio.insertAdjacentElement('afterend', pMedio);

//!1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divInsertAll = document.querySelectorAll('div.fn-insert-here');

for (const divInsert of divInsertAll) {
  const pInsert = document.createElement('p');
  pInsert.textContent = 'Voy dentro!';
  divInsert.appendChild(pInsert);
}
