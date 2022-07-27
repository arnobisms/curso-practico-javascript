const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


function concatenar(name, lastname, nickname){
    console.log(`Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}`)
}

concatenar("Arnobis", "Meléndez","Arno")


/*********************************************************************************************************/

const tipoDeSuscripcion = "ExpertPlus";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}



if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}



var tiposSuscripcion = [{tipo : "Free", mensaje :"Solo puedes tomar los cursos gratis"}, 
                        {tipo : "Basic", mensaje :"Puedes tomar casi todos los cursos de Platzi durante un mes"}, 
                        {tipo: "Expert", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año"}, 
                        {tipo: "ExpertPlus", mensaje: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}]

tiposSuscripcion.forEach(function(tipoS){
    if(tipoS.tipo == tipoDeSuscripcion){
        console.log(tipoS.mensaje)
    }
})


/******************************************************************************** */


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0
while(i<5){
    console.log(`El valor de i es: ${i}`)
    i++
}

/******************************************************************************** */

let arreglo = [0,1,2,3,4]

function imprimePrimero(arreg){
    console.log(arreg[0])
}

function imprimeTodos(arreg){
   for(let i=0; i<arreg.length; i++){
       console.log(arreg[i])
   }
}

imprimePrimero(arreglo)
imprimeTodos(arreglo)

/**********Imprime elementos de un objeto *****/

let carro = {marca:"ford", modelo:2000, color:"Rojo"}

function imprimeObjeto(obj){
    let propiedades = Object.values(obj)
    console.log(obj)
    for (let i = 0; i < propiedades.length; i++) {
        console.log(propiedades[i])        
    }
}


imprimeObjeto(carro)