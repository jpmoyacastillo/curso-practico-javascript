// Código del cuadrado
// console.group("Cuadrados");
// // const ladoCuadrado = 5;
// // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// function perimetroCuadrado(lado) {
//     return lado * 4;
// }
// // console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// function areaCuadrado(lado) {
//     return lado * lado;
// }
// // console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
// console.groupEnd();

// // Código del triángulo
// console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// function perimetroTriangulo(lado1, lado2, base) {
//     return lado1 + lado2 + base;
// }
// // console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// function areaTriangulo(base, altura) {
//     return (base * altura) / 2;
// }
// // console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

// console.groupEnd();

// // Código del circulo
// console.group("Círculos");

// // Radio
// // const radioCirculo = 4;
// // console.log("El radio del círculo es : " + radioCirculo + "cm");

// // Diámetro
// function diametroCirculo(radio) {
//     return radio * 2;
// }

// // PI
// // const PI = 3.1415
// const PI = Math.PI;
// console.log("PI es: " + PI);

// // Circunferencia
// function perimetroCirculo(radio) {
//     const diametro = diametroCirculo(radio);
//     return diametro * PI;
// }

// // Área
// function areaCirculo(radio) {
//     return (radio * radio) * PI;
// }

// console.groupEnd();

// CON ARROW FUNCTIONS
// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;


//Aquí interactuamos con HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputLadoTriangulo");
    const lado = input.value;
    const input2 = document.getElementById("InputBaseTriangulo");
    const base = input2.value;

    const perimetro = perimetroTriangulo(lado, lado, base);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input = document.getElementById("InputLadoTriangulo");
    const lado = input.value;
    const input2 = document.getElementById("InputBaseTriangulo");
    const base = input2.value;
    const input3 = document.getElementById("InputAlturaTriangulo");
    const altura = input3.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

//Altura triángulo isósceles
function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputLado2Triangulo");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputBase2Triangulo");
    const base = input3.value;

    if (lado1 === lado2 && lado2 != base) {
        alert("Isósceles");
        const altura = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
        alert(altura);
    }
    else {
        alert('No es un triángulo isósceles');
    }
}
