import {sendpreferito } from "./api.js";
const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const newCard = (data, colsize) => {

  let name = ''
  if (data.title) {
    name = data.title
  } else {
    name = data.name
  }

  const body = qS("body");
  const contMovie = cE("div");
  contMovie.setAttribute("id", data.id + "_loop");
  contMovie.className = `col ${colsize}` ;

  const cardMovie = cE("div");
  cardMovie.className = "movies";

  const cardDescription = cE("div");
  cardDescription.className = "cat-info";

  const row = cE("div");
  row.className = "row";

  const colImg = cE("div");
  colImg.className = "col-4";
  const col = cE("div");
  col.className = "col-6";

  const col1 = cE("div");
  col1.className = "col-7";

  const col2 = cE("div");
  col2.className = "col-4";

  const ratingRow = cE("div");
  ratingRow.className = "row";

  const rating = cE("fieldset");
  rating.setAttribute("id", data.id + "fieldset");
  rating.className = "rating";
  const numbers = parseInt(data.vote_average);

  if (numbers >= 10) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star10" name="rating" value="10"/><label class="full" for="id_${data.id}star10" title="10 stars"></label>`;
  }
  if (numbers >= 9) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star9" name="rating"  value="9"/><label class="full" for="id_${data.id}star9" title="9 stars"></label>`;
  }
  if (numbers >= 8) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star8" name="rating"  value="8"/><label class="full" for="id_${data.id}star8" title="8 stars"></label>`;
  }
  if (numbers >= 7) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star7" name="rating"  value="7"/><label class="full" for="id_${data.id}star7" title="7 stars"></label>`;
  }
  if (numbers >= 6) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star6" name="rating"  value="6"/><label class="full" for="id_${data.id}star6" title="6 stars"></label>`;
  }
  if (numbers >= 5) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star5" name="rating"  value="5"/><label class="full" for="id_${data.id}star5" title="5 stars"></label>`;
  }
  if (numbers >= 4) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star4" name="rating"  value="4"/><label class="full" for="id_${data.id}star4" title="4 stars"></label>`;
  }
  if (numbers >= 3) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star3" name="rating"  value="3"/><label class="full" for="id_${data.id}star3" title="3 stars"></label>`;
  }
  if (numbers >= 2) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star2" name="rating"  value="2"/><label class="full" for="id_${data.id}star2" title="2 stars"></label>`;
  }
  if (numbers >= 1) {
    rating.innerHTML += `<input type="radio" id="id_${data.id}star1" name="rating"  value="1"/><label class="full" for="id_${data.id}star1" title="1 stars"></label>`;
  }

  const imgMovie = cE("img");
  if (data.poster_path) {
    imgMovie.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  const textD = cE("h3");
  textD.innerHTML = name;
  imgMovie.setAttribute("alt", name);
  const rate = cE("p");
  rate.innerHTML = 'Vote: </b>'+numbers+'</b>';
  const button = cE("button");
  button.className = "open-modal btn btn-primary";
  button.innerHTML = "Scopri";
  ratingRow.append( col2,col1);
  col1.append(rating);
  col2.append(rate);

  cardDescription.append(textD, ratingRow, button);
  cardMovie.append(imgMovie, cardDescription);
  contMovie.appendChild(cardMovie);

  button.addEventListener("click", () => {
    const modal = cE("div");
    modal.className = "modal-movies";
    modal.setAttribute("id", data.id + "_modal");
    modal.style.display = "block";

    const close = cE("div");
    close.className = "close";
    close.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';

    if (data.poster_path) {
      const imgMovie = cE("img");
      imgMovie.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      );

      colImg.append(imgMovie);
    }

    const desc = cE("p");
    desc.innerHTML = data.overview;

    const modalTextD = cE("h3");
    modalTextD.innerHTML = name;

    const modalRating = cE("fieldset");
    modalRating.setAttribute("id", data.id + "fieldset");
    modalRating.className = "rating";
    const numbers = parseInt(data.vote_average);

    if (numbers >= 10) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star10" name="rating" value="10"/><label class="full" for="id_${data.id}star10" title="10 stars"></label>`;
    }
    if (numbers >= 9) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star9" name="rating"  value="9"/><label class="full" for="id_${data.id}star9" title="9 stars"></label>`;
    }
    if (numbers >= 8) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star8" name="rating"  value="8"/><label class="full" for="id_${data.id}star8" title="8 stars"></label>`;
    }
    if (numbers >= 7) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star7" name="rating"  value="7"/><label class="full" for="id_${data.id}star7" title="7 stars"></label>`;
    }
    if (numbers >= 6) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star6" name="rating"  value="6"/><label class="full" for="id_${data.id}star6" title="6 stars"></label>`;
    }
    if (numbers >= 5) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star5" name="rating"  value="5"/><label class="full" for="id_${data.id}star5" title="5 stars"></label>`;
    }
    if (numbers >= 4) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star4" name="rating"  value="4"/><label class="full" for="id_${data.id}star4" title="4 stars"></label>`;
    }
    if (numbers >= 3) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star3" name="rating"  value="3"/><label class="full" for="id_${data.id}star3" title="3 stars"></label>`;
    }
    if (numbers >= 2) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star2" name="rating"  value="2"/><label class="full" for="id_${data.id}star2" title="2 stars"></label>`;
    }
    if (numbers >= 1) {
      modalRating.innerHTML += `<input type="radio" id="id_${data.id}star1" name="rating"  value="1"/><label class="full" for="id_${data.id}star1" title="1 stars"></label>`;
    }

    col.append(modalTextD, modalRating, desc);
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
  let name = ''
  if (data.title) {
    name = data.title
  } else {
    name = data.name
  }
  const body = qS("body");
  const contMovie = cE("div");
  contMovie.setAttribute("id", data.id + "_loop");
  contMovie.className = "col col-3";

  const cardMovie = cE("div");
  cardMovie.className = "movies";

  const cardDescription = cE("div");
  cardDescription.className = "cat-info";

  const imgMovie = cE("img");
  if (data.poster_path) {
    imgMovie.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
    imgMovie.setAttribute("alt", name);
  }

  const textD = cE("h3");
  textD.innerHTML = name;

  cardDescription.append(textD);
  cardMovie.append(imgMovie, cardDescription);
  contMovie.appendChild(cardMovie);

  return contMovie;
};



const preferiti = (data, colsize) => {
  
  let name = ''
  if (data.title) {
    name = data.title
  } else {
    name = data.name
  }
  const body = qS("body");
  const contMovie = cE("div");
  contMovie.setAttribute("id", data.id + "_loop");
  contMovie.className = `col ${colsize}` ;

  const cardMovie = cE("div");
  cardMovie.className = "movies";

  const cardDescription = cE("div");
  cardDescription.className = "cat-info";

  const imgMovie = cE("img");
  const imgMovieF = cE("img");
  if (data.poster_path) {
    imgMovie.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
    imgMovie.setAttribute("alt", name);
    
    imgMovieF.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
    imgMovieF.setAttribute("alt", name);
  }

  const textD = cE("h3");
  const button = cE("button");
  button.className = "btn-icon";
  button.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-heart"><path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path></svg>'
  textD.innerHTML = name;

  const textA = cE("h3");
  textA.innerHTML = name;

  button.addEventListener("click", () => {
    
    qS(".notFound").remove();
    sendpreferito(data.id)
    const alert = cE("div");
    alert.className = "success";
    const alertCont = cE("p");
    alertCont.innerHTML = `${name} è stato aggiunto alla lista dei tuoi preferiti` ;
    
    qS(".alert").append(alert)
    const my = qS(".Myhighlights")
    const movieF = cE("div");
    movieF.className = `col col-2 movies`;
    
    const closef = cE("div");
    closef.className = "close";
    closef.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';

    closef.addEventListener("click", () => {
      alert.remove();
    });
    alert.append(closef, alertCont)
    movieF.append(textA);
    movieF.append(imgMovieF);
    my.appendChild(movieF);


    
  });
  

  cardDescription.append(textD, button);
  cardMovie.append(imgMovie, cardDescription);
  contMovie.appendChild(cardMovie);



  return contMovie;
};

function addHours(date) {
  date.setHours(date.getHours() + 1);
  return date;
}



const SETCOOKIES = (data) => {
  const date = new Date(data.expires_at);
  const newDate = addHours(date);
  document.cookie = `request_token=${data.request_token}; expires=${newDate};`;
};

const API_KEY = "471790fc56c9e56a0de0d32e185c4cb4";
const requestToken = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`);
    const data = await res.json();
    const token = data.request_token;
  return token;
};





export { qS, qSA, cE, newCard, HG, SETCOOKIES, requestToken, preferiti };
