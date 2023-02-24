import { requestToken } from "./utils.js";


const API_KEY = "471790fc56c9e56a0de0d32e185c4cb4";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "movie", resource = "550") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}&include_adult=true`);
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

const sendpreferito = async (ID_preferito) => {
  const id = ID_preferito;
  console.log(id + ' è stato aggiunto al DB')
}
export { GET, USER, sendpreferito };