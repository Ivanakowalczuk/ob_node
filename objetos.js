//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const persona1 = {
nombre: "Ivana",
apellido: "Kowalczuk",
edad:39,
altura: 1.78,
eresDesarrollador: true,
}
console.table(persona1)
//- Una variable que obtenga tu edad a partir del objeto anterior

let edadIvana = persona1.edad
console.log(edadIvana)
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const persona2 = { ...persona1 }
persona2.nombre = "Mariángeles"
persona2.apellido = "Haiquel"
persona2.edad = 38
persona2.altura = 1.70
persona2.eresDesarrollador = false


const persona3 = { ...persona1 }
persona3.nombre = "Nadia"
persona3.apellido = "Argüello"
persona3.edad = 40
persona3.altura = 1.72
persona3.eresDesarrollador = false


let objetosLista = [persona1, persona2, persona3]
console.table(objetosLista)
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

objetosLista.sort((a,b)=>  b.edad - a.edad)
console.table(objetosLista);