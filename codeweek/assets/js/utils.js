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
    rating.setAttribute("id", data.id + 'fieldset');
    rating.disabled = true;
    rating.className = "rating";

    //rating.innerHTML += `<input type="radio" id="id_${data.id}star9" name="rating" value="9" /><label class="full" for="id_${data.id}star9" title="9 stars"></label><input type="radio" id="id_${data.id}star8" name="rating" value="8" checked/><label class="full" for="id_${data.id}star8" title="8 stars"></label><input type="radio" id="id_${data.id}star7" name="rating" value="7" /><label class="full" for="id_${data.id}star7" title="7 stars"></label><input type="radio" id="id_${data.id}star6" name="rating" value="6" /><label class="full" for="id_${data.id}star6" title="6 stars"></label><input type="radio" id="id_${data.id}star5" name="rating" value="5" /><label class="full" for="id_${data.id}star5" title="5 stars"></label>  <input type="radio" id="id_${data.id}star4" name="rating" value="4" /><label class="full" for="id_${data.id}star4" title="Pretty good - 4 stars"></label>  <input type="radio" id="id_${data.id}star3" name="rating" value="3" /><label class="full" for="id_${data.id}star3" title="Meh - 3 stars"></label>  <input type="radio" id="id_${data.id}star2" name="rating" value="2" /><label class="full" for="id_${data.id}star2" title="Kinda bad - 2 stars"></label>  <input type="radio" id="id_${data.id}star1" name="rating" value="1" /><label class="full" for="id_${data.id}star1" title="1 star"></label> `
   
    const numbers = parseInt(data.vote_average);
    
    if(numbers >= 10){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star10" name="rating" value="10" checked/><label class="full" for="id_${data.id}star10" title="10 stars"></label>`
    } 

    if(numbers >= 9){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star9" name="rating"  value="9" checked/><label class="full" for="id_${data.id}star9" title="9 stars"></label>`
    } 

    if(numbers >= 8){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star8" name="rating"  value="8" checked/><label class="full" for="id_${data.id}star8" title="8 stars"></label>`
    } 

    if(numbers >= 7){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star7" name="rating"  value="7" checked/><label class="full" for="id_${data.id}star7" title="7 stars"></label>`
    } 


    if(numbers >= 6){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star6" name="rating"  value="6" checked/><label class="full" for="id_${data.id}star6" title="6 stars"></label>`
    } 

    if(numbers >= 5){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star5" name="rating"  value="5" checked/><label class="full" for="id_${data.id}star5" title="5 stars"></label>`
    } 
    

    if(numbers >= 4){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star4" name="rating"  value="4" checked/><label class="full" for="id_${data.id}star4" title="4 stars"></label>`
    } 
    
    if(numbers >= 3){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star3" name="rating"  value="3" checked/><label class="full" for="id_${data.id}star3" title="3 stars"></label>`
    } 

    if(numbers >= 2){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star2" name="rating"  value="2" checked/><label class="full" for="id_${data.id}star2" title="2 stars"></label>`
    } 

    if(numbers >= 1){
        rating.innerHTML += `<input type="radio" id="id_${data.id}star1" name="rating"  value="1" checked/><label class="full" for="id_${data.id}star1" title="1 stars"></label>`
    } 

    console.log(numbers)
    
    const imgMovie = cE("img");
    if (data.poster_path) {
        
        imgMovie.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        );
    }
    const textD = cE("h3");
    textD.innerHTML = data.title + ' - ' + data.vote_average ;
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


        const modalTextD = cE("h3");
        modalTextD.innerHTML = data.title ;
        
        const modalRating = cE('fieldset');
        modalRating.className = "rating";
        
        modalRating.innerHTML = '<input type="radio" id="id_'+data.id+'star10" name="rating" value="10" /><label class="full" for="id_'+data.id+'star10" title="10 stars"></label><input type="radio" id="id_'+data.id+'star9" name="rating" value="9" /><label class="full" for="id_'+data.id+'star9" title="9 stars"></label><input type="radio" id="id_'+data.id+'star8" name="rating" value="8" /><label class="full" for="id_'+data.id+'star8" title="8 stars"></label><input type="radio" id="id_'+data.id+'star7" name="rating" value="7" /><label class="full" for="id_'+data.id+'star7" title="7 stars"></label><input type="radio" id="id_'+data.id+'star6" name="rating" value="6" /><label class="full" for="id_'+data.id+'star6" title="6 stars"></label><input type="radio" id="id_'+data.id+'star5" name="rating" value="5" /><label class="full" for="id_'+data.id+'star5" title="5 stars"></label> <input type="radio" id="id_'+data.id+'star4half" name="rating" value="4 and a half" /><label class="half" for="id_'+data.id+'star4half" title="Pretty good - 4.5 stars"></label> <input type="radio" id="id_'+data.id+'star4" name="rating" value="4" /><label class="full" for="id_'+data.id+'star4" title="Pretty good - 4 stars"></label> <input type="radio" id="id_'+data.id+'star3half" name="rating" value="3 and a half" /><label class="half" for="id_'+data.id+'star3half" title="Meh - 3.5 stars"></label> <input type="radio" id="id_'+data.id+'star3" name="rating" value="3" /><label class="full" for="id_'+data.id+'star3" title="Meh - 3 stars"></label> <input type="radio" id="id_'+data.id+'star2half" name="rating" value="2 and a half" /><label class="half" for="id_'+data.id+'star2half" title="Kinda bad - 2.5 stars"></label> <input type="radio" id="id_'+data.id+'star2" name="rating" value="2" /><label class="full" for="id_'+data.id+'star2" title="Kinda bad - 2 stars"></label> <input type="radio" id="id_'+data.id+'star1half" name="rating" value="1 and a half" /><label class="half" for="id_'+data.id+'star1half" title="Meh - 1.5 stars"></label> <input type="radio" id="id_'+data.id+'star1" name="rating" value="1" /><label class="full" for="id_'+data.id+'star1" title="Sucks big time - 1 star"></label> <input type="radio" id="id_'+data.id+'starhalf" name="rating" value="half" /><label class="half" for="id_'+data.id+'starhalf" title="Sucks big time - 0.5 stars"></label>'
        
        

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
    console.log(data)
    const body = qS('body');
    const contMovie = cE("div");
    contMovie.setAttribute("id", data.id + '_loop');
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
        imgMovie.setAttribute("alt", data.title);
    }
    
    const textD = cE("h3");
    textD.innerHTML = data.title ;
    

    cardDescription.append(textD);
    cardMovie.append(imgMovie, cardDescription);
    contMovie.appendChild(cardMovie);

    return contMovie;
    
};

function addHours(date) {
    date.setHours(date.getHours() + 1);
    return date;
}
  

function checkACookieExists() {
    let session = '';
    if(document.cookie.split(";").some((item) => item.trim().startsWith("request_token="))) {
        session = true
    } else {
        session = false
    }
    console.log(session)
    return session;
}
  
const SETCOOKIES = (data) => {
    const date = new Date(data.expires_at);
    const newDate = addHours(date);
    document.cookie = `request_token=${data.request_token}; expires=${newDate};`
}

export { qS, qSA, cE, newCard, HG, SETCOOKIES, checkACookieExists };