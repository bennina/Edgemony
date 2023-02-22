
const API_KEY = "471790fc56c9e56a0de0d32e185c4cb4";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "movie", resource = "550") => {
  console.log(resource)
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};


const USER = async (type = "movie", resource = "550") => {
  console.log(type + ' ---- ' + resource )
  const res = await fetch(`https://api.themoviedb.org/3/account?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET, USER };