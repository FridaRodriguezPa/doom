const nametitle = document.querySelector('#name');
const input = document.querySelector ('#input');

const writeName = () => {
    const inputValue = input.value;
    nametitle.textContent = inputValue;
}