const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const quoteCard = (data) => {
    
    const wrapperEl = cE("div");
    wrapperEl.className = "quote__card";
    const textEl = cE("div")
    textEl.className = "quote__text";
    const quotetext = cE("h3");
    const authortext = cE("p");
  
    quotetext.textContent = data.quote;
    authortext.textContent = data.author;

    textEl.append(quotetext, authortext);
    wrapperEl.append( textEl);
    return wrapperEl;
};


const quoteList = (data) => {
    
    const wrapperEl = cE("div");
    wrapperEl.className = "quote__list";
    const textEl = cE("div")
    textEl.className = "quote__text";
    const quotetext = cE("h3");
    const authortext = cE("em");
    quotetext.textContent = data.quote;
    authortext.innerHTML = '<br>' + data.author;
    quotetext.append(authortext);
    textEl.append(quotetext);
    wrapperEl.append( textEl);
    return wrapperEl;
};

const randomCard = (data) => {
    console.log(data);
};


export { cE, qS, quoteCard, quoteList, randomCard };
