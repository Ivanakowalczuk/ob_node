//Crea un archivo JS que contenga las siguientes líneas

// Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listaCompras =  ["tomate", "cebolla", "limón", "salchicas", "arroz", "bifes de cuadril"]
console.log(listaCompras);
// Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompras.push("Aceite de girasol")
console.log(listaCompras);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop(listaCompras)
console.log(listaCompras);
// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFavoritas =[{titulo: "Mi villano favorito", director: "Pierre Coffin", fecha:new Date(2010, 06, 29)}, {titulo: "Madagascar", director: "Eric Darnell", fecha:new Date(2005, 06, 07)}, 
{titulo: "El niño que domó el viento", director: "Chiwetel Ejiofor", fecha:new Date(2009, 00, 25)} 		
]
console.table(peliculasFavoritas);
// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const filtroPelis = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date(2010,00,01))

console.log(filtroPelis)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = peliculasFavoritas.map((valor) => valor.director)
console.log("Los directores son: " + listaDirectores[0]+ ", " + listaDirectores[1]+ " y " + listaDirectores[2] + ".");

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = peliculasFavoritas.map((valor) => valor.titulo)
console.log(listaTitulos);
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const pelisDirectores = listaDirectores.concat(listaTitulos)
console.table(pelisDirectores)
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const pelisDirectores2 = [...listaDirectores, ...listaTitulos]
console.table(pelisDirectores2)