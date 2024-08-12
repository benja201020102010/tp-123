//Crear un arreglo con nombres de jugadores:


let jugadores = ["Ana", "camilo", "sANTI", "mia", "thiago"];

//Crear un arreglo vacío para los puntajes y llenarlo con valores obtenidos del prompt():




let puntajes = [];
for (let i = 0; i < 5; i++) {
    let puntaje = Number(prompt(`Ingresa el puntaje del alumno ${i + 1}:`));
    puntajes.push(puntaje);
}
//Buscar el puntaje más alto y mostrar a qué alumno corresponde:




let maxPuntaje = puntajes[0];
let indiceMax = 0;


for (let i = 1; i < puntajes.length; i++) {
    if (puntajes[i] > maxPuntaje) {
        maxPuntaje = puntajes[i];
        indiceMax = i;
    }
}


console.log(`El puntaje más alto es ${maxPuntaje} y corresponde al alumno ${jugadores[indiceMax]}`);
//Mostrar en la consola, cuál fue el puntaje más bajo:




let minPuntaje = puntajes[0];


for (let i = 1; i < puntajes.length; i++) {
    if (puntajes[i] < minPuntaje) {
        minPuntaje = puntajes[i];
    }
}


console.log(`El puntaje más bajo es ${minPuntaje}`);
//Agregar un jugador y su puntaje:


let nuevoJugador = prompt("Ingresa el nombre del nuevo jugador:");
let nuevoPuntaje = Number(prompt("Ingresa el puntaje del nuevo jugador:"));


jugadores.push(nuevoJugador);
puntajes.push(nuevoPuntaje);
//Mostrar en la consola, la cntidad de puntajes guardados:


console.log(`La cantidad de puntajes guardados es ${puntajes.length}`);

//Modificar los puntajes de los últimos dos jugadores:


if (puntajes.length >= 2) {
    let nuevoPuntaje1 = Number(prompt("Ingresa el nuevo puntaje para el penúltimo jugador:"));
    let nuevoPuntaje2 = Number(prompt("Ingresa el nuevo puntaje para el último jugador:"));


    puntajes[puntajes.length - 2] = nuevoPuntaje1;
    puntajes[puntajes.length - 1] = nuevoPuntaje2;
} else {
    console.log("No hay suficientes jugadores para modificar los últimos dos puntajes.");
}
