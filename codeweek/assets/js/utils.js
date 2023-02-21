const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);


const newCard = (data) => {
    const body = qS('body');
    const contMovie = cE("div");
    contMovie.setAttribute("id", data.id + '_loop');
    contMovie.className = "col col-3";

    const cardMovie = cE("div");
    cardMovie.className = "movies";

    const cardDescription = cE("div");
    cardDescription.className = "cat-info";

    const rating = cE('fieldset');
    rating.innerHTML = '<fieldset class="rating"> <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label> <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label> <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label> <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label> <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label> <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label> <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label> <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label> <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label> <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label></fieldset>'
    
    const imgMovie = cE("img");
    if (data.poster_path) {
        
        imgMovie.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        );
    }
    const textD = cE("h3");
    textD.innerHTML = data.title ;
    imgMovie.setAttribute("alt", data.title);

    const button = cE("button");
    button.className = "open-modal btn btn-primary";
    button.innerHTML = 'Scopri' ;


    cardDescription.append(textD, rating, button);
    cardMovie.append(imgMovie, cardDescription);
    contMovie.appendChild(cardMovie);

    

    button.addEventListener("click", () => {
        const modal = cE("div");
        modal.className = "modal-movies";
        modal.setAttribute("id", data.id + '_modal');
        modal.style.display = "block";

        const close = cE('div');
        close.className = "close";
        close.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
        const row = cE('div');
        row.className = "row";

        const colImg = cE('div');
        colImg.className = "col-4";

        if (data.poster_path) {
        const imgMovie = cE("img");
            imgMovie.setAttribute(
                "src",
                `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            );
        
            colImg.append(imgMovie);
        }

        const col = cE('div');
        col.className = "col-6";
        const desc = cE("p");
        desc.innerHTML = data.overview ;

        col.append(textD, rating, desc);

        row.append(colImg, col);
        modal.append(close, row);
        body.append(modal);

        close.addEventListener("click", () => {
            modal.remove();
        });
    });

    return contMovie;
};



const HG = (data) => {
    
    const body = qS('body');
    const contMovie = cE("div");
    contMovie.setAttribute("id", data.id + '_loop');
    contMovie.className = "col col-3";

    const cardMovie = cE("div");
    cardMovie.className = "movies";

    const cardDescription = cE("div");
    cardDescription.className = "cat-info";

    const rating = cE('fieldset');
    rating.innerHTML = '<fieldset class="rating"> <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label> <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label> <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label> <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label> <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label> <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label> <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label> <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label> <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label> <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label></fieldset>'
    
    const imgMovie = cE("img");
    if (data.poster_path) {
        
        imgMovie.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        );
    }
    const textD = cE("h3");
    textD.innerHTML = data.title ;
    imgMovie.setAttribute("alt", data.title);

    cardDescription.append(textD, rating);
    cardMovie.append(imgMovie, cardDescription);
    contMovie.appendChild(cardMovie);

    return contMovie;
    
};

export { qS, qSA, cE, newCard, HG };