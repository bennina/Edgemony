import {cE, qS, userCard, userGraph} from "./utils.js";
import myJson from "./mock.json" assert { type: "json" };
import { GET } from "./api.js";


let param = 'users';


userCard(myJson[param]);
userGraph(myJson[param]);

//export {ageStatusBarGen};

/*  
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

*/