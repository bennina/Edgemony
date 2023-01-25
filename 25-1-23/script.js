import {cE, qS, userCard} from "./utils.js";
import { GET } from "./api.js";

const wrapperEl = qS(".user-div");
const grafico = qS(".grafico");
let param = 'users';


GET(param).then((data) =>
    data.users.map((users) => wrapperEl.appendChild(userCard(users)))
);
let firstStage, secondStage, thirdStage, fourthStage, fifthStage;
let stagesCount = [];

const ageStatusBarGen = (value, userAge) => {
    const wrapper = cE("div");
    const textEl = cE("h4");
    const statusEl = cE("div");
  
    wrapper.className = "age-status-bar";
    textEl.textContent = value;
    statusEl.className = "age-status-bar__status";
    statusEl.style.height = `${userAge * 60}px`;
  
    //   setInterval(() => {
    statusEl.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    //   }, 1000);
  
    wrapper.append(textEl, statusEl);
    return wrapper;
};
  
GET("users")
  .then(({ users }) => {
    const usersAge = users.map((user) => user.age);

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
  })
  .then(() => {
    stagesCount.map((stage) =>
        grafico.appendChild(ageStatusBarGen(stage.text, stage.ages.length))
    );
});