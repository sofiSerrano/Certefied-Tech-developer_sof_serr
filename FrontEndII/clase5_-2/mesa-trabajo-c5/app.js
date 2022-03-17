
const darkButton = document.getElementById('darkB');
const body = document.querySelector('body.dark');
const tituloH1 = document.querySelector('h1');
const divItems = document.querySelectorAll('div.item');
const h2P = document.querySelectorAll('h2.p');



darkButton.addEventListener('click', function () {
    body.classList.toggle('dark-cambio');
    tituloH1.classList.toggle('titulo-felino');

    for (var item of divItems) {
        item.classList.toggle('dark-item');
    }
    for (var h2p of h2P) {
        h2p.classList.toggle('dark-texto');  
    }
});