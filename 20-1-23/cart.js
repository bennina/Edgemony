const body = document.querySelector("body");
const openCart = document.querySelector(".openCart");
const closeCart = document.querySelector(".closeCart");
const divCart = document.querySelector(".cartContainer");

openCart.addEventListener("click", (e) => {
  e.preventDefault();
  divCart.style.display = "block";
  body.style.overflow = "hidden";
});

closeCart.addEventListener("click", (e) => {
  e.preventDefault();
  divCart.style.display = "none";
  body.style.overflow = "";
});


