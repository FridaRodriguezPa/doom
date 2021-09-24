// //El $ hace referencia al html

// const $btn = document.querySelector('#btn');
// //escucha el evento que queremos que pase
// $btn.addEventListener('click', () =>{
//     console.log('me presionaste :)');
// });

// const $inpText = document.querySelector('#text');
// //resive el evento
// $inpText.addEventListener('keyup', (e) =>{
//    // console.log('escribiste algo');

// //obtener lo que el usuario esta escribiendo
//    console.log(e.target.value);
// });

const $body = document.querySelector('body');
const $selectColor = document.querySelector('#colors');

$selectColor.addEventListener('change', (e) =>{
    if(e.target.value === 'red'){
        $body.className = '';
        $body.classList.add('red');
    }else if(e.target.value === 'blue'){
        $body.className = '';
        $body.classList.add('blue');
    }else if(e.target.value === 'green'){
        $body.className = '';
        $body.classList.add('green');
    }
} );