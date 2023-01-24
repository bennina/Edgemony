const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const inLoad = qS(".loading");

const userCard = (data, name) => {
    
    if (name === 'NULL') {
        const wrapperEl = cE("div");
        wrapperEl.className = "card";
        const names = cE("p");
        const email = cE("p");
        const phone = cE("p");
        const images = cE("img");
        images.setAttribute("src", data.image);
        images.setAttribute("alt", "#");
        names.className = "name__text";
        names.innerHTML = data.firstName + ' ' + data.lastName;
        email.innerHTML = data.email;
        phone.innerHTML = data.phone;
    
        wrapperEl.append(names, images, email, phone);
        return wrapperEl;
    
    } else {
        if (name === data.firstName) {
            const wrapperEl = cE("div");
            wrapperEl.className = "card";
            const names = cE("p");
            const email = cE("p");
            const phone = cE("p");
            const images = cE("img");
            images.setAttribute("src", data.image);
            images.setAttribute("alt", "#");
            names.className = "name__text";
            names.innerHTML = data.firstName + ' ' + data.lastName;
            email.innerHTML = data.email;
            
            phone.innerHTML = data.phone;
            wrapperEl.append(names, images, email, phone);
            return wrapperEl;
        }
       
    }


}


export { cE, qS, userCard };