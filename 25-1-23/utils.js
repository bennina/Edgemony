const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
//import { ageStatusBarGen } from "./script.js";

const wrapperEl = qS(".user-div");

let firstStage, secondStage, thirdStage, fourthStage, fifthStage;
let stagesCount = [];
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


const userGraph = (data) => {
    const usersAge = data.map((data) => data.age);
    firstStage = {
        ages: usersAge.filter((age) => age <= 19),
        text: "0 - 19",
    };
    secondStage = {
        ages: usersAge.filter((age) => age <= 29 && age >= 20),
        text: "20 - 29",
    };
    thirdStage = {
        ages: usersAge.filter((age) => age <= 39 && age >= 30),
        text: "30 - 39",
    };
    fourthStage = {
        ages: usersAge.filter((age) => age <= 49 && age >= 40),
        text: "40 - 49",
    };
    fifthStage = {
        ages: usersAge.filter((age) => age <= 59 && age >= 50),
        text: "50 - 59",
    };
  
    stagesCount.push(
        firstStage,
        secondStage,
        thirdStage,
        fourthStage,
        fifthStage
    );

    
    
    ageStatusBarGen(stagesCount);
}

const ageStatusBarGen = (value) => {
    const grafico = qS(".grafico");
    value.forEach(e => {
        const wrapper = cE("div");
        
        const textEl = cE("h4");
        const statusEl = cE("div");
  
        wrapper.className = "age-status-bar";
        textEl.textContent = e.text;
        statusEl.className = "age-status-bar__status";
        statusEl.style.height = e.ages.reduce((a, b) => a + b, 0) + '%';
        console.log();
        //   setInterval(() => {
        statusEl.style.backgroundColor = `#${Math.floor(
            Math.random() * 16777215
        ).toString(16)}`;
        //   }, 1000);
        wrapper.append(textEl, statusEl);
        grafico.append(wrapper);
    });
    
    return grafico;
    
};
export { cE, qS, userCard, userGraph};
