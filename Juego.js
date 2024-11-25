document.getElementById("piedra").addEventListener("click", function() {
    jugar("piedra");
});
document.getElementById("papel").addEventListener("click", function() {
    jugar("papel");
});
document.getElementById("tijera").addEventListener("click", function() {
    jugar("tijera");
});

function jugar(opcionUsuario) {
    const opciones = ["piedra", "papel", "tijera"];
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
    
    let resultado = "";
    
    if (opcionUsuario === opcionComputadora) {
        resultado = "Empate";
    } else if (
        (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
        (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
        (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "Perdiste";
    }
    
    mostrarResultado(resultado, opcionUsuario, opcionComputadora);
}

function mostrarResultado(resultado, opcionUsuario, opcionComputadora) {
    const ganador = document.getElementById("ganador");
    ganador.textContent = `${resultado} (Tú: ${opcionUsuario} vs Computadora: ${opcionComputadora})`;
}
