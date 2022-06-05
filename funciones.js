//Crea un archivo JS que contenga las siguientes líneas

//- Una función sin parámetros que devuelva siempre "true"
const funcionSinParametros = () => true
console.log(funcionSinParametros())
//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promes = ()=>console.log("Hola soy un promesa")
setTimeout(promes, 5000);

//- Una función generadora de índices pares automáticos
function* generadoraId(){
    let id = 0;
    while(true){      
        id = id + 2
        if(id === 10){
          return id
        }
        yield id
        }
       
    }


const gen = generadoraId();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
