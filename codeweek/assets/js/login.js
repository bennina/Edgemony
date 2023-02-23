import { GET, USER } from "./api.js";
import { qS, qSA, newCard, HG, SETCOOKIES } from "./utils.js";

const login = document.getElementById("login");


login.addEventListener("submit", (event) => {
    event.preventDefault();
    
    Promise.all([USER("authentication", username.value, password.value)]).then((data) => {
        data.map((request) => SETCOOKIES(request));
    });
    
});
  