import { Professional } from "./Professional";
import { Movie } from "./Movie";

const director = new Professional("Director", 50, 70, 180, false, "USA", 2, "Director");
const writer = new Professional("Writer", 40, 65, 170, false, "UK", 1, "Writer");
const actor1 = new Professional("Actor 1", 30, 75, 180, false, "USA", 0, "Actor");
const actor2 = new Professional("Actor 2", 25, 70, 175, false, "Canada", 0, "Actor");

const movie = new Movie(
    "Example Movie",
    2023,
    [actor1, actor2],
    "USA",
    director,
    writer,
    "English",
    "Netflix",
    false,
    "John Doe",
    "Producer",
    "Distributor",
    "Action"
);

movie.printMovieDetails();
