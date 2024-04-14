//! 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('button.showme');
console.log(button.textContent); //Pillame!

//! 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector('#pillado');
console.log(h1.textContent); //Aquí estoy 8)

//! 1.3 Usa querySelector para mostrar por consola todos los p
const pAll = document.querySelectorAll('p');
console.log(pAll);

//! 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon);

//! 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMeAll = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeAll);

//! 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe". */
const testMe03 = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(testMe03);
