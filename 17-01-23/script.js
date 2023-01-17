const productsElement = document.querySelector(".productsList");
const productsHero = document.querySelector(".hero");
const createShop = document.querySelector(".button");
const loaderElement = document.querySelector(".loader");
const cartContainer = document.querySelector(".cartContainer");
const cartBox = document.querySelector(".cart");
const close = document.querySelector(".close");
const cart = [];

createShop.addEventListener("click", () => {
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

    divContainer.appendChild(image);
    divContainer.appendChild(titleElement);
    divContainer.appendChild(descriptionElement);
    divContainer.appendChild(indexContainer);
    divContainer.appendChild(addCarts);
    productsElement.appendChild(divContainer);

    addCarts.addEventListener("click", () => {
      alert(" Prodotto aggiunto al carrello");
      loaderElement.textContent = "loading...";
      cartContainer.style.display = "block";
      cart[index] = item;
      const cartCard = document.createElement("div");
      cartCard.className = "card";
      

      const removeCarts = document.createElement("button");
      removeCarts.textContent = " Rimuovi dal carrello";
      removeCarts.className = "removecard";
        
      cartCard.appendChild(image);
      cartCard.appendChild(titleElement);
      cartCard.appendChild(descriptionElement);
      cartCard.appendChild(indexContainer);
        cartCard.appendChild(removeCarts);
        
      cartBox.appendChild(cartCard);
        removeCarts.addEventListener("click", () => {
            alert('prodotto rimosso');
            cartBox.removeChild(cartCard);
      });
      console.log(cart);
    });
  });
};

close.addEventListener("click", () => {
  loaderElement.textContent = "";
  cartContainer.style.display = "none";
});
