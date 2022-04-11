/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const people = [
    {
        first_name: 'Jack ',
        last_name: 'Black',
        age: 56
    },
    {
        first_name: 'Micheal ',
        last_name: 'Caine',
        age: 90
    },
    {
        first_name: 'Robert ',
        last_name: 'Downey Jr.',
        age: 54
    },
    {
        first_name: 'Jim ',
        last_name: 'Belushi',
        age: 5
    },
    {
        first_name: 'Uma ',
        last_name: 'Thurman',
        age: 17
    },
    {
        first_name: 'Samuel L.',
        last_name: 'Jackson',
        age: 62
    }
];

const can_drive = people.forEach((person) => {
    const age = person.age;
    const first_name = person.first_name;
    const last_name = person.last_name;
    // console.log(age);
    if (age < 18) {
        console.log(`Il signor ${first_name + last_name}, di anni ${age}, non può guidare perchè la sua eta è minore di 18 anni`);
    } else {
        console.log(`Il signor ${first_name + last_name}, di anni ${age}, può guidare perchè maggiore di anni 18`);
    }
});