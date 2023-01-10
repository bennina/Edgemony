import { products } from "./product.js";
const createHero = (title, img, description) => { 
    const contentHero = document.querySelector(".hero");
    const imgHero = document.createElement("img");
    const titleHero = document.createElement("h1");
    const descriptionHero = document.createElement("p");


    contentHero.className = "hero-content hero";

    imgHero.className = "hero__img";
    imgHero.setAttribute("src", img);
    imgHero.setAttribute("alt", title);

    titleHero.className = "hero__title";
    titleHero.textContent = title;

    descriptionHero.className = "hero__description";
    descriptionHero.textContent = description;

    contentHero.append(imgHero,titleHero, descriptionHero);
    
}

const createCard = (title, img, description) => {
  const contentProduct = document.querySelector(".content-products");
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h2");
  const descriptionEl = document.createElement("p");

  cardEl.className = "card";

  imgEl.className = "card__img";
  imgEl.setAttribute("src", img);
  imgEl.setAttribute("alt", title);

  titleEl.className = "card__title";
  titleEl.textContent = title;

  descriptionEl.className = "card__description";
  descriptionEl.textContent = description;

  cardEl.append(imgEl, titleEl, descriptionEl);
  contentProduct.appendChild(cardEl);
};
for (let product of products) {
  createCard(product.title, product.img, product.description);
}
const cardEls = document.querySelectorAll(".card");

createHero('Welcome', 'https://picsum.photos/1900/600', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum efficitur tortor, id luctus risus vehicula quis. Aliquam ac libero non odio venenatis facilisis. Proin vitae justo nulla');