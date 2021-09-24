const lista1 = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1,
];

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda;

}


// OTRA FORMA MAS CORTA

// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a, b) =>
//         arr.filter(v => v === a).length
//         - arr.filter(v => v === b).length
//     ).pop();
// }


// console.log(mode(NUMBERS)); //5

// Yo lo entiendo como que:
// creas un filtro por el cual haces arrays de números iguales

// arr.filter(v => v === a)
// y le pones el length para ver cual se repite mas

// arr.filter(v => v === a).length
// y con la función compare(que es la función que se utiliza para ordenar en sort())

    // a= primer numero comparado que en este casos sera la
    //cantidad de elementos de los arrays de de elementos
    //iguales

    // b= segundo numero comparado en este casos sera la
    //cantidad de elementos de los arrays de de elementos
    //iguales

//     (a, b) => {
//     a - b
// }
// vemos cual tiene mas repetidos y por ultimo haces un.pop para poner el ultimo numero que es el que mas se repitió