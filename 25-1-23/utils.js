const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const userCard = (data) => {
    
    const wrapperEl = cE("div");
    wrapperEl.className = "user__card";
    const textEl = cE("div")
    textEl.className = "user__text";
    const usertext = cE("h3");
    const etatext = cE("p");
    usertext.innerHTML = data.firstName + ' ' + data.lastName;
    etatext.textContent = 'Età: ' + data.age ;
    textEl.append(usertext, etatext);
    wrapperEl.append( textEl);
    return wrapperEl;
};


export { cE, qS, userCard};
