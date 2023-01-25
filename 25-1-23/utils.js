const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const wrapperEl = qS(".user-div");

const userCard = (data) => {
    
    data.forEach(e => {
        
        const wrapperElDiv = cE("div");
        wrapperElDiv.className = "user__card";
        const textEl = cE("div")
        textEl.className = "user__text";
        const usertext = cE("h3");
        const etatext = cE("p");
        usertext.innerHTML = e.firstName + ' ' + e.lastName;
        etatext.textContent = 'Età: ' + e.age ;
        textEl.append(usertext, etatext);
        wrapperElDiv.append(textEl);
        wrapperEl.append(wrapperElDiv);
    });
    return wrapperEl;
};


export { cE, qS, userCard};
