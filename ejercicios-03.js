const $lista = document.querySelector('#lista');
const $buton = document.querySelector ('#nuevo');

//Evento 
$buton.addEventListener('click', () => {
    //Crear elemento li
    const elemento = document.createElement('li');
    //Agrega el contenido
    elemento.textContent = 'Elemento x';
    //Agrega el elemento como hijo dentro del elemento
    $lista.appendChild(elemento);
});