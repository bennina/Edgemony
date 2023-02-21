import { GET } from "./api.js";
import { qS, qSA, newCard, HG } from "./utils.js";
const highlights = qS(".highlights");
const ys = qS("#year-section .loop-movies");
const divMovies = qS("#most-popular-section .loop-movies");
const popular = qS("#most-popular .loop-movies");

const i = 0;
Promise.all([GET("movie", "upcoming")]).then((data) => {
    
    
    
    data[0].results.map((movie) => {  highlights.append(HG(movie)); console.log(movie) });
});

Promise.all([GET("movie", "popular")]).then((data) => {
    data[0].results.map((movie) => ys.append(newCard(movie)));
});

Promise.all([GET("tv", "popular")]).then((data) => {
    data[0].results.map((movie) => divMovies.append(newCard(movie)));
});

Promise.all([GET("tv", "top_rated")]).then((data) => {
    data[0].results.map((movie) => popular.append(newCard(movie)));
});
