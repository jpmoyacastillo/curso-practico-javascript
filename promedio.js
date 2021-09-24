const lista1 = [
    100,
    200,
    300,
    500,
];

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

const notas = [
    {
        curso: "HTML",
        nota: 10,
        creditos: 2,
    },
    {
        curso: "CSS",
        nota: 8,
        creditos: 5,
    },
    {
        curso: "JavaScript",
        nota: 7,
        creditos: 5,
    }
]

const notasPorCredito = notas => notas.nota * notas.creditos;
const notasConCredito = notas.map(notasPorCredito);

const sumaNotasConCredito = notasConCredito.reduce(
    function (sum = 0, nuevoValor) {
        return sum + nuevoValor;
    }
);

const creditos = notas.map(function (notas) {
    return notas.creditos;
});

const sumaCreditos = creditos.reduce(
    function (sum = 0, nuevoValor) {
        return sum + nuevoValor;
    }
);

const promedioPonderadoNotasConCreditos = sumaNotasConCredito / sumaCreditos;