const telas = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");


telas.forEach(function (tela, indice) {
    tela.hidden = indice !== 0;
});


links.forEach(function (link) {
    link.addEventListener("click", function (evento) {
        evento.preventDefault();

        telas.forEach(function (tela) {
            tela.hidden = true;
        });

        const destino = link.getAttribute("href");
        document.querySelector(destino).hidden = false;
    });
});