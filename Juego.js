class Usuario {
    constructor() {
        this.usuarios = JSON.parse(localStorage.getItem('usuario')) || {};
    }

    registrar(nombre, contraseña) {
        if (this.usuarios[nombre]) {
            return "El nombre de usuario ya existe. Por favor, ingrese otro.";
        } else {
            this.usuarios[nombre] = contraseña;
            localStorage.setItem('usuario', JSON.stringify(this.usuarios));
            return 'El usuario ha sido registrado con éxito.';
        }
    }

    iniciarSesion(nombre, contraseña) {
        if (this.usuarios[nombre] === contraseña) {
            return `¡Bienvenido ${nombre}!`;
        } else {
            return "Usuario o contraseña incorrectos.";
        }
    }
}

class Jugar {
    constructor() {
        this.resultado = document.getElementById('ganador');
        this.opciones = ['piedra', 'papel', 'tijera'];
        this.asignarEventos();
    }

    asignarEventos() {
        document.getElementById('piedra').addEventListener('click', () => this.jugarJuego('piedra'));
        document.getElementById('papel').addEventListener('click', () => this.jugarJuego('papel'));
        document.getElementById('tijera').addEventListener('click', () => this.jugarJuego('tijera'));
    }

    jugarJuego(opcUsuario) {
        const opcionComputadora = this.opciones[Math.floor(Math.random() * this.opciones.length)];
        let resultado = '';

        if (opcUsuario === opcionComputadora) {
            resultado = "Empate";
        } else if (
            (opcUsuario === "piedra" && opcionComputadora === "tijera") ||
            (opcUsuario === "papel" && opcionComputadora === "piedra") ||
            (opcUsuario === "tijera" && opcionComputadora === "papel")
        ) {
            resultado = `¡Has Ganado el juego! ${opcUsuario} la vence a ${opcionComputadora}`;
        } else {
            resultado = `Has Perdido el juego. ${opcionComputadora} la vence a ${opcUsuario}`;
        }

        this.mostrarResultado(resultado);
    }

    mostrarResultado(resultado) {
        this.resultado.textContent = resultado;
    }
}

const usuario = new Usuario();
const juego = new Jugar();

function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("password").value;

    if (!nombre || !contraseña) {
        alert("Por favor ingrese todos los campos.");
        return;
    }

    const mensaje = usuario.registrar(nombre, contraseña);
    alert(mensaje);

    if (mensaje === 'El usuario ha sido registrado con éxito.') {
        document.getElementById("Registro").classList.add('hidden');
        document.getElementById("Login").classList.remove('hidden');
    }
}

function iniciarSesion() {
    const nombre = document.getElementById('nombrelogin').value;
    const contraseña = document.getElementById('passwordlogin').value;

    if (!nombre || !contraseña) {
        alert("Por favor ingrese todos los campos.");
        return;
    }

    const mensaje = usuario.iniciarSesion(nombre, contraseña);
    alert(mensaje);

    if (mensaje.startsWith('¡Bienvenido')) {
        document.getElementById('Login').classList.add('hidden');
        document.getElementById('Juego').classList.remove('hidden');
    }
}

function mostrarRegistro() {
    document.getElementById("Login").classList.add('hidden');
    document.getElementById("Registro").classList.remove('hidden');
}

function mostrarLogin() {
    document.getElementById("Registro").classList.add('hidden');
    document.getElementById("Login").classList.remove('hidden');
}
