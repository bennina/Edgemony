const BASE_URL = "https://api.coingecko.com/api/v3/coins/";

export const GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();
  return data;
};
