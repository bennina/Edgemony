const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const newCard = (data) => {
    const cardMovie = cE("div");
    const imgMovie = cE("img");
    const cardDescription = cE("div");
    const textD = cE("p");

    cardMovie.setAttribute("id", data.id);
    cardMovie.className = "movie";

    if (data.poster_path) {
      imgMovie.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      );
    }
   
    textD.innerHTML = '</b>' + data.title + '</b><br><em>'+ data.release_date +'</em><br>' + data.overview;
    imgMovie.setAttribute("alt", data.title);
    
    cardDescription.appendChild(textD);
    cardMovie.append(imgMovie, cardDescription);
  
    return cardMovie;
};
  
export { qS, qSA, cE, newCard };