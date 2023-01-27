import { GET } from "./api.js";
import { qS, qSA, newCard } from "./utils.js";

const divMovies = qS(".popular");

Promise.all([
  GET("movie", "popular"),
])
  .then((data) => {
    data[0].results.map((movie) => divMovies.append(newCard(movie)));
  });
