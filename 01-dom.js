//document.write('Hola desde JavaScript');

//obtiene el elemeto x id
document.getElementById
//obtiene el elento de una clase y devuele un arreglo
document.getElementsByClassName
//obtiene todos los elementos x nombre y devuelve un arreglo
document.getElementsByName

 //Devuelve un arreglo de los elementos que tengan esa etiqueta
 // Accediendo x etiqueta
// const title = document.getElementsByTagName('h1');
// title[0].innerHTML = 'Titulo cambiado desde JavaScript ';

// // Accediendo x id
// const texto = document.getElementById('text');
 //puedes editar el texto
// texto.innerHTML = 'Texto escrito desde JavaScript';
// texto.style.background = 'blue';
// texto.style.color = 'white';

// console.log(texto);


// Accediendo x id
const texto = document.querySelector('#text');
//Solo es el contenido del texto
texto.textContent = 'Estoy escribiendo ddesde JavaScript';

//Crear elementos html

const div = document.createElement ('div');
const body = document.querySelector('body');
body.append(div);

