function showHide(id) {
    let conteudo = document.querySelector('id');
    conteudo.classList.toggle('ativo')
}

function mudar() {
    let crewImg = document.getElementsByClassName('crew-img');
    let radio1 = document.getElementById('radio-1');
    let radio2 = document.getElementById('radio-2');
    let radio3 = document.getElementById('radio-3');
    let radio4 = document.getElementById('radio-4');

    if (radio1.checked) {
        crewImg.setAttribute('src', 'image-anousheh-ansari.png')
    } else if (radio1.checked) {
        crewImg.setAttribute('src', 'image-douglas-hurley.png')
    }
}