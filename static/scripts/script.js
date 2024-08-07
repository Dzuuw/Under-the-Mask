// Seleciona todas as divs com a classe 'box' e 'desc'
const boxes = document.querySelectorAll('.back');
const descs = document.querySelectorAll('.desc');

// Adiciona um ouvinte de eventos a cada div 'box'
boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        this.classList.toggle('front');
        descs.forEach(function (desc) {
            if (desc.getAttribute('data-index') === index) {
                desc.classList.toggle('visible');
            }
        });
    });
});
//função pra barra de navegação
function mostrar() {
    let nav = document.getElementsByName("nav-itens");
    for (navs of nav) {
        if (navs.classList.contains("hide")) {
            navs.classList.toggle("show");
        };
    };
};
function mute() {
    let audio = document.getElementById("volume");
    const music = document.getElementById("music");
    if (audio.classList.contains("muted")) {
        audio.classList.toggle("n-mute");
        // alert("foi");
        if (music.muted) {
            music.muted = false;
        } else {
            music.muted = true;
        }
    };
};