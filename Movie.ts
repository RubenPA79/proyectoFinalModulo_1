import { Professional } from "./Professional";

export class Movie {
    constructor(
        public title: string,
        public releaseYear: number,
        public actors: Professional[],
        public nationality: string,
        public director: Professional,
        public writer: Professional,
        public language: string,
        public platform: string,
        public isMCU: boolean,
        public mainCharacterName: string,
        public producer: string,
        public distributor: string,
        public genre: string
    ) {}

    public printMovieDetails(): void {
        console.log(`
        Title: ${this.title}
        Release Year: ${this.releaseYear}
        Nationality: ${this.nationality}
        Genre: ${this.genre}
        Language: ${this.language}
        Main Character: ${this.mainCharacterName}
        `);
    }
}
