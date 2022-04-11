/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi
*/

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'lupo',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cobra',
        famiglia: 'elapidi',
        classe: 'rettili'
    },
    {
        nome: 'gambero',
        famiglia: 'pandalidi',
        classe: 'malacostrachi'
    }
];

const mammals = animals.filter((animal) => {
    return animal.classe === 'mammiferi';
})

console.log(`
ANIMALI MAMMIFERI
`);
console.log(mammals);