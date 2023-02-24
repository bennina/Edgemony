import { GET, USER } from "./api.js";
import { qS, qSA, newCard, HG, SETCOOKIES, preferiti } from "./utils.js";
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
    data[0].results.map((movie) => {
        highlights.append(HG(movie));
    });
});

Promise.all([GET("movie", "popular")]).then((data) => {
    data[0].results.map((movie) => ys.append(newCard(movie, 'col-2')));
});

Promise.all([GET("movie", "top_rated")]).then((data) => {
    data[0].results.map((movie) => { 
        let dateFrom = "2013-01-01";
        let dateTo = "2024-01-01";
        let dateCheck = movie.release_date;
        if (checkDate(dateFrom, dateTo, dateCheck)) {
            popular.append(newCard(movie, 'col-2'))
        }
    })
});

Promise.all([GET("tv", "popular")]).then((data) => {
    data[0].results.map((movie) => divMovies.append(newCard(movie, 'col-4')));
});

Promise.all([GET("tv", "top_rated")]).then((data) => {
    data[0].results.map((movie) => {
        let dateFrom = "1990-01-01";
        let dateTo = "2001-01-01";
        let dateCheck = movie.first_air_date;

        console.log(movie);
        
        if (checkDate(dateFrom, dateTo, dateCheck)) {
            tvShow.append(newCard(movie, 'col-2'))
        }
    })
    
        
});

function checkDate(dateFrom, dateTo, dateCheck) {
    

        let d1 = dateFrom.split("-");
        let d2 = dateTo.split("-");
        let c = dateCheck.split("-");

        let from = d1[0];  // -1 because months are from 0 to 11
        let to   =  d2[0];
        let check = c[0];
        
        return(check > from && check < to)
}

checkACookieExists()

function checkACookieExists() {
    let session = "";
    if (
      document.cookie
        .split(";")
        .some((item) => item.trim().startsWith("request_token="))
    ) {
        session = true;

        // non mi è possibile accedere all'api per prendere i miei veri preferiti, nonostante facessi il login e passassi il token.
        // ad ogni modo puoi vedere i progress su git.
        // Quindi ho deciso di realizzarla così questa parte ( Creare dei fake preferiti )
        
        myLists()
        
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
    console.log(session)
    return session;
}
function myLists() { 
    Promise.all([GET("tv", "top_rated")]).then((data) => {
        data[0].results.map((movie) => {
            myList.append(preferiti(movie, 'col-2'))
        })
    });
}
