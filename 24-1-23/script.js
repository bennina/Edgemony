import {qS, userCard, cE} from "./utils.js";
import { GET } from "./api.js";

const userDiv = qS(".user-div");
const form = qS("#userSearch");

const name = qS("#name");
const inLoad = qS(".loading");



let param = 'users';

form.addEventListener("submit", (e) => { 
    
    e.preventDefault();
    inLoad.innerHTML = '<p> Caricamento....</p> </h2> Stai cercando: '+ name.value+'  </h2>';
    userDiv.innerHTML = '';

    GET(param).then((data) =>
        data.users.map((users) => userDiv.appendChild(userCard(users, name.value)))
    );
    
});


GET(param).then((data) =>
    data.users.map((users) => userDiv.appendChild(userCard(users, 'NULL'))),
);