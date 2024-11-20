// script.js

const botones = document.querySelectorAll(".choice-img");
const mensaje = document.getElementById("mensaje");
const eleccionJugador = document.getElementById("eleccionJugador");
const eleccionComputadora = document.getElementById("eleccionComputadora");

const opciones = ["piedra", "papel", "tijera"];
const imagenes = {
    piedra: "piedra.png",
    papel: "papel.png",
    tijera: "tijera.png"
};

botones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        const eleccionDelJugador = e.target.id;
        const eleccionDeLaComputadora = opciones[Math.floor(Math.random() * 3)];

        // Mostrar las elecciones de jugador y computadora con imágenes
        eleccionJugador.innerHTML = `<strong>Tú elegiste:</strong> <img src="${imagenes[eleccionDelJugador]}" alt="${eleccionDelJugador}" width="50">`;
        eleccionComputadora.innerHTML = `<strong>La computadora eligió:</strong> <img src="${imagenes[eleccionDeLaComputadora]}" alt="${eleccionDeLaComputadora}" width="50">`;

        // Determinar el resultado
        if (eleccionDelJugador === eleccionDeLaComputadora) {
            mensaje.textContent = "¡Es un empate!";
        } else if (
            (eleccionDelJugador === "piedra" && eleccionDeLaComputadora === "tijera") ||
            (eleccionDelJugador === "papel" && eleccionDeLaComputadora === "piedra") ||
            (eleccionDelJugador === "tijera" && eleccionDeLaComputadora === "papel")
        ) {
            mensaje.textContent = "¡Ganaste!";
        } else {
            mensaje.textContent = "¡Perdiste!";
        }
    });
});
