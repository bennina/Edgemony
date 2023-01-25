export { GET };
import myJson from "./mock.json" assert { type: "json" };

const GET = async () => {
  const res = await myJson;
  return res;
};
    
