import { requestToken } from "./utils.js";


const API_KEY = "471790fc56c9e56a0de0d32e185c4cb4";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "movie", resource = "550") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};


const USER = async (type = "movie", username, password) => {
  if (username === 'username' && password === 'password') {
    const res = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`);
    const data = await res.json();
    window.location.replace("./my-list.html");
    return data;
  } else {
    const data = 'Non sei autorizzato!'
    return data;
  }
};



requestToken()



const favorite = async (type = "movies", username, password) => {
  
    const res = await fetch(`https://api.themoviedb.org/3/account/elisabetta.monaco/favorite/${type}?api_key=${API_KEY}`);
    const data = await res.json();
    console.log('favorite : '+JSON.stringify(data))
    return data;

};
favorite();


const result = await requestToken();

const nuovaSessione = {
  "username": "elisabetta.monaco",
  "password": "VgiEa3MAV5rf@2f",
  "request_token": result
}

const session_id = (param) => {
  
  fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovaSessione),
  })
  .then(res => res.json()).then(data => { return data;  }).catch(e => console.log("ERRORE: ", e));
  
  
};

export { GET, USER, session_id };