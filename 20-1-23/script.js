


// CATEGORIES SELECTOR  - FOR VIEW
const showCategories = document.querySelector(".showCategories");
const showBlockCategories = document.querySelector(".nuova-categoria");
const showSectionAddCategories = document.querySelector(".insert-categories");
// CATEGORIES SELECTOR - FOR ADD
const addCategories = document.querySelector("#addcategory");
const categoryName = document.querySelector("#categoryName");
const categoryImage = document.querySelector("#categoryImage");

// CATEGORIES - FOR ADD
showBlockCategories.addEventListener("click", () => { 
  showSectionAddProducts.classList.remove("active");
  showSectionAddCategories.classList.add("active");
});

addCategories.addEventListener("submit", (event) => {
  event.preventDefault();
  const nuovoCategoria = {
    name: categoryName.value,
    image: categoryImage.value,
  };
  registraElemento(nuovoCategoria, "categories");
  
});

// PRODUCT SELECTOR  - FOR VIEW
const showProducts = document.querySelector("#showProducts");
const showBlockProducts = document.querySelector(".nuovo-prodotto");

const showSectionProducts = document.querySelector(".product-row");
const showSectionAddProducts = document.querySelector(".insert-product");

// PRODUCT SELECTOR - FOR ADD
const addProducts = document.querySelector("#addProduct");
const titolo = document.querySelector("#title");
const prezzo = document.querySelector("#price");
const categoria = document.querySelector("#category");
const descrizione = document.querySelector("#description");
const immagine = document.querySelector("#image");



// PRODUCT - FOR ADD
showBlockProducts.addEventListener("click", () => { 
  showSectionAddProducts.classList.add("active");
  showSectionAddCategories.classList.remove("active");
});


addProducts.addEventListener("submit", (event) => {
  event.preventDefault();
  const nuovoProdotto = {
    title: titolo.value,
    price: parseInt(prezzo.value),
    description: descrizione.value,
    categoryId: parseInt(categoria.value),
    images: [immagine.value],
  };
  registraElemento(nuovoProdotto, "products");
});

//REGISTRA ELEMENTO NEL DB

const registraElemento = (nuovoProdotto, param) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuovoProdotto),
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.statusCode >= 400 && data.statusCode < 500) {
      alert(
        `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
      );
    } else {
      alert(`${param} CARICATO CORRETTAMENTE!`);
      console.log(data);
    }
  })
    .catch(e => console.log("ERRORE: ", e));
    mostaElemento(param);
};

const loopCategories = item => {
  const catUl = document.createElement("li");
  catUl.className = "cat";

  const catLi = document.createElement("a");
  catLi.className = "cat-title";
  catLi.id = item.id;
  catLi.textContent = item.name;
  
  catLi.setAttribute("href", "#" + item.id);
  
  

  catUl.append(catLi);
  showCategories.appendChild(catUl);



  catLi.addEventListener("click", (e) => { 
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id === 'all') {
      mostaElementoPerCategoria('products');
    } else {
      mostaElementoPerCategoria('categories/' + e.target.id + '/products');
    }
  });
};
let all = document.querySelector("#all");
all.addEventListener("click", (e) => { 
  e.preventDefault();
  console.log(e.target.id);
  refreshProduct(e);
  mostaElemento('products');
});

const refreshProduct = item => {
  const prodUl = document.querySelector("#showProducts");
  prodUl.innerHTML = '';
}

const loopProduct = item => {
  const prodUl = document.createElement("div");
  prodUl.className = "col-2 card";

  const prodTitle = document.createElement("p");
  prodTitle.className = "title";
  prodTitle.textContent = item.title;

  const prodprice = document.createElement("p");
  prodprice.className = "price";
  prodprice.textContent = item.price + ' €';

  const prodimmagine = document.createElement("img");
  prodimmagine.setAttribute("src", item.images);
  prodimmagine.setAttribute("alt", "#");

  const addCarts = document.createElement("button");
    addCarts.textContent = " Aggiungi al carrello";
  addCarts.className = "addCart";
  
  prodUl.append(prodimmagine,prodTitle, prodprice,addCarts);
  showProducts.appendChild(prodUl);
};

const mostaElemento = (param) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param, )
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.statusCode >= 400 && data.statusCode < 500) {
      alert(
        `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
      );
    } else {
      data.forEach(element => {
        if (param === 'categories' ) {
          loopCategories(element);
        } else if (param === 'products') { 
          loopProduct(element);
        } else {
          alert( ' Questo parametro al momento non è disponibile ' );
        }
        
      })
    }
  })
  .catch(e => console.log("ERRORE: ", e));
};

const mostaElementoPerCategoria = (param) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param, )
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    if (data.length === 0) {
      refreshProduct(data);
      alert(
        `Non ci sono prodotti nella categoria ` 
      );
    }
    if (data.statusCode >= 400 && data.statusCode < 500) {
      alert(
        `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
      );
    } else {
      data.forEach(element => {
       
          refreshProduct(element);
          loopProduct(element);
      })
    }
  })
  .catch(e => console.log("ERRORE: ", e));
};



const closeblock = document.querySelector(".closeblock");
const closeblock2 = document.querySelector(".closeblock2");

closeblock.addEventListener("click", () => { 
  showSectionAddProducts.classList.remove("active");
  showSectionAddCategories.classList.remove("active");
});

closeblock2.addEventListener("click", () => { 
  showSectionAddProducts.classList.remove("active");
  showSectionAddCategories.classList.remove("active");
});


mostaElemento('categories');
mostaElemento('products');