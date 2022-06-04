//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre

let nombre= "Ivana";

//- Otra cadena de texto con tu Apellido
let apellido= "Kowalczuk";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let cantLetrasEstudiante = estudiante.length;

//- Una variable que contenga la primera letra del Nombre

let inicialNombre = nombre.charAt(0);

//- Otra variable que contenga la última letra del Apellido

let ultimaLetraApellido = apellido[apellido.length-1]

//- Una cadena de texto que elimine los espacios de la variable "estudiante"


let sinEspacios = estudiante.split(" ").join("")

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let nombreEnEstudiante = nombre => {
    if(estudiante.indexOf(nombre) == 0){
        return true
     }
}




console.log(nombre)
console.log(apellido)
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(cantLetrasEstudiante);
console.log(inicialNombre);
console.log(ultimaLetraApellido);
console.log(nombreEnEstudiante(nombre))
console.log(sinEspacios)