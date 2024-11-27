import { Movie } from "./Movie";

export class Imdb {
    constructor(public peliculas: Movie[]) {}

    public escribirEnFicheroJSON(nombreFichero: string): void {
        const fs = require("fs");
        fs.writeFileSync(nombreFichero, JSON.stringify(this.peliculas, null, 2));
    }

    public obtenerInstanciaIMDB(nombreFichero: string): Imdb {
        const fs = require("fs");
        const data = fs.readFileSync(nombreFichero, "utf-8");
        const peliculas = JSON.parse(data);
        return new Imdb(peliculas);
    }
}
