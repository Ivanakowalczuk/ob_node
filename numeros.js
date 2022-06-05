



//Crea un archivo JS que contenga las siguientes líneas

//Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 179;
console.log(alturaCm);

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 1.79;
console.log(alturaMetros);

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKilogramos = 85.5;
console.log(pesoKilogramos);

// Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaMetrosRedondeada = Math.ceil(alturaMetros);
console.log(alturaMetrosRedondeada);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoKilogramosRedondeada = Math.floor(pesoKilogramos);
console.log(pesoKilogramosRedondeada);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max = () => {
    if((Number.MAX_VALUE + 1) === Number.MAX_VALUE){
        return true;
    }else{
        return false
    }
    
} 
console.log(max())

