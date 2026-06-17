const boton = document.getElementById("abrir");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");

boton.addEventListener("click", () => {

    inicio.style.display = "none";
    contenido.style.display = "block";

    if (musica) {
        musica.volume = 0.5;

        musica.play().catch((error) => {
            console.log("No se pudo reproducir la música:", error);
        });
    }

});

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("heart");

    corazon.innerHTML = "💗";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 7000);

}

setInterval(crearCorazon, 250);
