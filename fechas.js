//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
const ahora = new Date();
console.log(ahora)
//- La fecha de tu nacimiento
const fechaNacimiento = new Date(1982, 09, 25)
console.log(fechaNacimiento)
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fechaTardia = ahora > fechaNacimiento
console.log(fechaTardia)
//- Una variable que contenga el día de tu nacimiento
const dia = fechaNacimiento.getDate();
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mes = fechaNacimiento.getMonth()+1;

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anio = fechaNacimiento.getFullYear();

console.table(`Mi nacimiento fue el día ${dia} del mes ${mes} del año ${anio}`)