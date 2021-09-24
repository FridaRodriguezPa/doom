const edad = document.querySelector('#edad');
const input = document.querySelector ('#input');


const writeEdad = () => {
    const inputValue = input.value;
    const mensaje = input.value >= 18 ? 'Eres mayor de edad': 'Eres menor de edad';
    edad.textContent = inputValue + " " + mensaje;
}