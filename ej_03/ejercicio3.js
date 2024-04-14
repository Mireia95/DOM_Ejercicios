/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

for (const country of countries) {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
}

document.body.appendChild(ul);

//!1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeAll = document.querySelectorAll('.fn-remove-me');
console.log(removeAll);

for (const remove of removeAll) {
  remove.remove();
}

//!1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul2 = document.createElement('ul');

for (const car of cars) {
  const li = document.createElement('li');
  li.innerText = car;
  ul2.appendChild(li);
}

const divData = document.querySelector('[data-function="printHere"]');
divData.appendChild(ul2);

//!1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const country of countries2) {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = country.title;
  const img = document.createElement('img');
  img.src = country.imgUrl;

  div.append(h4, img);
  document.body.appendChild(div);
}

//!1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

//creo una funzione
const deleteLastDiv = () => {
  const lastDiv = document.querySelectorAll('div');
  const last = lastDiv.length - 1;
  lastDiv[last].remove();
};

button.onclick = deleteLastDiv;

//!1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const divAll = document.querySelectorAll('div');
console.log(divAll);

for (const div of divAll) {
  const buttonDiv = document.createElement('button');
  buttonDiv.textContent = 'elimina el elemento!';
  div.appendChild(buttonDiv);
  //creo funzione
  buttonDiv.addEventListener('click', () => div.remove());
}
