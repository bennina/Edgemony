const productsElement = document.querySelector(".productsList");
const productsHero = document.querySelector(".hero");
const downloadDataBtn = document.querySelector(".button");
const loaderElement = document.querySelector(".loader");
const cart = [];
downloadDataBtn.addEventListener("click", () => {
  loaderElement.textContent = "loading...";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataManupulation(data);
    })
    .catch((error) => {
      loaderElement.textContent = "c'è stato un errore";
      console.log("MIO ERRORE: ", error);
    });
});

const dataManupulation = (data) => {
  loaderElement.textContent = "";
  productsHero.style.display = "none";
  data.forEach((item, index) => {
    const divContainer = document.createElement("div");
    divContainer.className = "card";

    const titleElement = document.createElement("h3");
    titleElement.textContent = item.title.substring(0, 10) + "...";

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = item.description.substring(0, 30) + "...";

    const image = document.createElement("img");
    image.src = item.images;

    const indexContainer = document.createElement("h5");
    indexContainer.textContent = item.price + "€";

    const addCarts = document.createElement("button");
    addCarts.textContent = " Aggiungi al carrello";
    addCarts.className = "addCart";
    addCarts.id = item.id;

    divContainer.appendChild(image);
    divContainer.appendChild(titleElement);
    divContainer.appendChild(descriptionElement);
    divContainer.appendChild(indexContainer);
    divContainer.appendChild(addCarts);
    productsElement.appendChild(divContainer);
  });
};

const addCart = document.querySelector(".addCart");
addCart.addEventListener("click", () => {
  alert("aggiunto al carrello");
});
