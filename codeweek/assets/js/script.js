import { GET, USER, session_id } from "./api.js";
import { qS, qSA, newCard, HG, SETCOOKIES } from "./utils.js";
const highlights = qS(".highlights");
const ys = qS("#year-section .loop-movies");
const divMovies = qS("#most-popular-section .loop-movies");
const popular = qS("#most-popular .loop-movies");
const myList = qS("#myList .loop-movies");
const myListRow = qS("#myList");

const tvShow = qS("#tvShow902000 .loop-movies");

const login = document.getElementById("login");

// FILM IN EVIDENZA 
Promise.all([GET("movie", "upcoming")]).then((data) => {
    data[0].results.map((movie) => {  highlights.append(HG(movie));});
});

Promise.all([GET("movie", "popular")]).then((data) => {
    data[0].results.map((movie) => ys.append(newCard(movie, 'col-2')));
});

Promise.all([GET("movie", "top_rated")]).then((data) => {
    data[0].results.map((movie) => popular.append(newCard(movie, 'col-2')));
});

Promise.all([GET("tv", "popular")]).then((data) => {
    data[0].results.map((movie) => divMovies.append(newCard(movie, 'col-4')));
});

Promise.all([GET("tv", "top_rated")]).then((data) => {
    data[0].results.map((movie) => tvShow.append(newCard(movie, 'col-2')));
});


checkACookieExists()

function checkACookieExists() {
    let session = "";
    if (
      document.cookie
        .split(";")
        .some((item) => item.trim().startsWith("request_token="))
    ) {
        session = true;
        Promise.all([session_id()]).then((data) => {
            console.log(data)
        });
        
    } else {
        session = false;
        myListRow.innerHTML = `
        <div class="row aligne-center p-5">
                <div class="col col-9">
                    <h3>Devi essere Loggato per vedere la sezione</h3>
                </div>
                <div class="col col-3 text-right">
                    <a href="./login.html" class="btn btn-primary">
                        Accedi
                    </a>
                </div>
            </div>
        `;
    }
    
    return session;
}
  
