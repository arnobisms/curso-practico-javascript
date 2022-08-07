
console.group("Cuadrado")
// const ladoCuadrado = 5
// console.log("los lados del cuadrado miden "+ladoCuadrado)


function perimetroCuadrado(lado){
    return lado * 4
}

//console.log("El perimetro de cuadrado es "+perimetroCuadrado)

function areaCuadrado(lado){
    return lado * lado
}

//console.log("El area del cuadrado es "+areaCuadrado)
console.groupEnd()

//Codigo del triangulo
console.group("Triangulo")
// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4
// console.log("Los lados del tríangulo miden:  "
//     +ladoTriangulo1 
//     + "cm, "
//     +ladoTriangulo2 
//     + "cm, "+baseTriangulo 
//     + "cm "
// )


// const alturaTriangulo = 5.5
// console.log("La altura del triangulo es de: "+ alturaTriangulo)

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}
// console.log("El area de triangulo es "+areaTriangulo + " cm2")

console.groupEnd()


console.group("Circulo")

// const radioCirculo = 4
function diametroCirculo(radio){
    return radio * 2
}

const PI = Math.PI

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}


function areaCirculo(radio){
    return (radio * radio) * PI
} 

// console.log("El radio del circulo es: " + radioCirculo + "cm")
// console.log("El diametro del circulo es: " + diametroCirculo + "cm")
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")
// console.log("El area del circulo es: " + areaCirculo + "cm2")
// console.log("PI: " + PI)

console.groupEnd()


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro) 
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area) 
}

function calcularPerimetroTriangulo(){
    const lado1 = Number(document.getElementById("lado1").value)
    const lado2 = Number(document.getElementById("lado2").value)
    const base = Number(document.getElementById("base").value)
    const altura = Number(document.getElementById("altura").value)

    const perimetro = perimetroTriangulo(lado1, lado2, base)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const base = Number(document.getElementById("base").value)
    const altura = Number(document.getElementById("altura").value)

    const area = areaTriangulo(base, altura)
    alert(area)
}