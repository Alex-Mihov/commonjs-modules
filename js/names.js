// creazione funzione per nome e cognome 
function createPerson(firstName, lastName) {
    return {
        nome: firstName,
        cognome: lastName
    };
}

const person = createPerson("Alex", "Mihov");
console.log(person);