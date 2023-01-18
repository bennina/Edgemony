const addProducts = document.querySelector("#addProduct");

const titolo = document.querySelector("#title");
const prezzo = document.querySelector("#price");
const categoria = document.querySelector("#category");
const descrizione = document.querySelector("#description");
const immagine = document.querySelector("#image");

addProducts.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("submit");

  const nuovoProdotto = {
    title: titolo.value,
    price: parseInt(prezzo.value),
    description: descrizione.value,
    categoryId: parseInt(categoria.value),
    images: [immagine.value],
  };
  registraProdotto(nuovoProdotto);
});

const registraProdotto = (nuovoProdotto) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovoProdotto),
  })
    .then((res) => res.json())
    .then((data) => console.log("IL RISULTATO: ", data))
    .catch((e) => console.log("AIUTO COSA HO SBAGLIATO: ", e));
};
