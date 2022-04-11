/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        marca: 'Ferrari',
        modello: 'Roma',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Bentley',
        modello: 'Continental GT',
        alimentazione: 'Benzina'
    },
    {
        marca: 'BMW',
        modello: 'Serie 5',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Volkswagen',
        modello: 'Polo',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Tesla',
        modello: 'Model S',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Mercedes-Benz',
        modello: 'EQC',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Audi',
        modello: 'RS6',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Opel',
        modello: 'Corsa',
        alimentazione: 'GPL',
    },
    {
        marca: 'Honda',
        modello: 'Civic',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'GPL'
    }
];

// console.log(cars.length);

const benzina = cars.filter((car) => {
    return car.alimentazione === 'Benzina'
})

console.log(`
ALIMENTAZIONE A BENZINA
`);
console.log(benzina);

const diesel = cars.filter((car) => {
    return car.alimentazione === 'Diesel'
})
 
console.log(`
ALIMENTAZIONE A DIESEL
`);
console.log(diesel);

const altra_alimentazione = cars.filter((car) => {
    return car.alimentazione !== 'Benzina' && car.alimentazione !== 'Diesel'
})

console.log(`
ALTRA ALIMENTAZIONE
`);
console.log(altra_alimentazione);