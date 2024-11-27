import { Professional } from "./Professional";
import { Imdb } from "./Imdb";
import * as readlineSync from "readline-sync";

function addNewProfessional(): Professional {
    const name = readlineSync.question("Enter name: ");
    const age = parseInt(readlineSync.question("Enter age: "));
    const weight = parseFloat(readlineSync.question("Enter weight: "));
    const height = parseFloat(readlineSync.question("Enter height: "));
    const isRetired = !!readlineSync.keyInYN("Is retired? ");
    const nationality = readlineSync.question("Enter nationality: ");
    const oscarNumbers = parseInt(readlineSync.question("Enter Oscar numbers: "));
    const profession = readlineSync.question("Enter profession: ");

    return new Professional(name, age, weight, height, isRetired, nationality, oscarNumbers, profession);
}

const imdb = new Imdb([]);
const fileName = "imdbBBDD.json";

// Load existing data
try {
    const loadedImdb = imdb.obtenerInstanciaIMDB(fileName);
    imdb.peliculas = loadedImdb.peliculas;
} catch (error) {
    console.log("No existing file found. Starting with an empty database.");
}

// Add new Professional and attach to a movie
const newProfessional = addNewProfessional();
console.log("New professional added: ");
newProfessional.printAttributes();

// Link professional to a movie
if (imdb.peliculas.length > 0) {
    console.log("Available movies: ");
    imdb.peliculas.forEach((movie, index) => {
        console.log(`${index + 1}: ${movie.title}`);
    });

    const movieIndex = parseInt(readlineSync.question("Enter the movie number to link the professional: ")) - 1;
    if (movieIndex >= 0 && movieIndex < imdb.peliculas.length) {
        imdb.peliculas[movieIndex].actors.push(newProfessional);
        console.log(`Added to movie: ${imdb.peliculas[movieIndex].title}`);
    } else {
        console.log("Invalid movie number.");
    }
} else {
    console.log("No movies available to link the professional.");
}

// Save updated data
imdb.escribirEnFicheroJSON(fileName);
console.log("Data saved to file.");
