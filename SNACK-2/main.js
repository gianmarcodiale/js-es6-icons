/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const names = ['jamie', 'cersei', 'arya', 'JON', 'ROBB'];

const names_capitalize = names.map((first_name) => {
    return first_name.charAt(0).toUpperCase() + first_name.substring(1).toLowerCase();
})

console.log(names_capitalize);