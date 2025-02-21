// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; 

    if (!regex.test(nombre)) {
        alert("Por favor, ingresa solo letras y espacios. No se permiten números ni caracteres especiales.");
        input.value = "";
        return;
    }

    if(amigos.includes(nombre)){
        alert("Ingrese un nombre válido y no repetido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista(){
    
    let lista =  document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {

    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let sorteados = [...amigos]; // Copia del array para el sorteo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior
    let amigoSecreto = sorteados[Math.floor(Math.random() * sorteados.length)];
    let li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    resultado.appendChild(li);
}