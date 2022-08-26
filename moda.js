const lista1 = [
  1, 2, 3, 1, 2, 3, -4, 2, 2, 2, 1, -4 
];

const lista1Count = {};

lista1.map(
    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] = lista1Count[elemento]+ 1;
        }else{
            lista1Count[elemento] = 1;
        }
         
    }
)

//Convierte un objeto en un array Object.entries
//sort ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);


const moda = lista1Array[lista1Array.length-1]

//Reto crear la función para una lista pasada por parametro 


function calcularModa(){
    const listaConteo = {}
    let lista = document.getElementById("txtLista").value
    const arrayLista = lista.split(',')
    
    arrayLista.map(
        function(elemento){
            if(listaConteo[elemento]){
                listaConteo[elemento] = listaConteo[elemento] + 1
            }else{
                listaConteo[elemento] = 1
            }
        }
    )

   // console.log(arrayLista)
    //console.log(listaConteo)

    const listaConteoOrdenada = Object.entries(listaConteo).sort(
        function(valorActual, nuevoValor){
            return valorActual[1] - nuevoValor[1]
        }
    )
    console.log(listaConteoOrdenada)
    const moda = listaConteoOrdenada[listaConteoOrdenada.length-1]

    const txtResultado = document.getElementById("txtResultado")
    txtResultado.innerText = "La moda de la lista ingresada es: " + moda[0]

}