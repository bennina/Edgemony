import {cE, qS, quoteCard, quoteList, randomCard } from "./utils.js";
import { GET } from "./api.js";

const wrapperEl = qS(".quote-div");
const card = qS(".card");
const list = qS(".list");
const random = qS(".random");
let param = 'quotes?limit=1';
let randomParam = 'quotes/random';



card.addEventListener("click", () => { 
    wrapperEl.innerHTML = '';
    GET(param).then((data) =>
        data.quotes.map((quotes) => wrapperEl.appendChild(quoteCard(quotes)))
    );
});


list.addEventListener("click", () => { 
    wrapperEl.innerHTML = '';
    GET(param).then((data) =>
        data.quotes.map((quotes) => wrapperEl.appendChild(quoteList(quotes)))
    );
});


random.addEventListener("click", () => { 
    wrapperEl.innerHTML = '';
    GET(randomParam).then((data) =>
        wrapperEl.appendChild(quoteList(data))
    );
});