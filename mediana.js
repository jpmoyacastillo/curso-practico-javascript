function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    3,
    23,
    12,
];


function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    const listaOrdenada = lista.sort((a, b) => a - b);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        // ->el promedio
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        // ->mediana
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}


