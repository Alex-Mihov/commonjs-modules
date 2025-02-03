// importiamo le funzioni 
const createPerson = require("./names.js")
const createHobby = require("./hobbies.js")

// creazione funzione che usa le funzioni importate per costruire un'oggetto 
function createProfile() {
    const person = createPerson("Luca", "Bianchi");
    const hobbies = createHobby("Fotografia", "Cucina", "Nuoto");

    return {
        fullName: `${person.nome} ${person.cognome}`,
        hobbies: hobbies
    };
}

const profile = createProfile();
console.log(profile);