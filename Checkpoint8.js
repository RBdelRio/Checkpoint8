const miLista = ["velma", "exploradora", "jane", "john", "harry"];

// bucle for en JS que imprime cada nombre en esta lista.
for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}

// bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
let contador = 0;

while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}

//función de flecha que devuelva "Hola mundo".
const saludar = () => "Hola mundo";

console.log(saludar());
