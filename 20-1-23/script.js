//import { productInCart } from "./cart.js";
const addInCartProducts = document.querySelector(".elenco-prodotti");

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

const showSectionEditProducts = document.querySelector(".edit-product");

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
    if (data.statusCode >= 400 && data.statusCode < 500) {
      alert(
        `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
      );
    } else {
      alert(`${param} CARICATO CORRETTAMENTE!`);
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
  refreshProduct(e);
  mostaElemento('products');
});

const refreshProduct = item => {
  const prodUl = document.querySelector("#showProducts");
  prodUl.innerHTML = '';
}
const loopProductInCart = item => {
  
  const pdInCart = document.createElement("div");
  pdInCart.className = "row cardList";
  

  const divImg = document.createElement("div");
  divImg.className = "col-2";
  const prodimmagine = document.createElement("img");
  prodimmagine.setAttribute("src", item.images[0]);
  prodimmagine.setAttribute("alt", "#");

  divImg.appendChild(prodimmagine);

  const divText = document.createElement("div");
  divText.className = "col-7";
  const prodTitle = document.createElement("p");
  prodTitle.className = "title";
  prodTitle.textContent = item.title;

  const prodprice = document.createElement("p");
  prodprice.className = "price";
  prodprice.textContent = item.price + ' €';  
  divText.appendChild(prodTitle, prodprice);
  const divBtn = document.createElement("div");
  divBtn.className = "col-1";
  const removeCarts = document.createElement("button");
  removeCarts.textContent = " X ";
  removeCarts.className = "removeCart";
  removeCarts.id = item.id;
  divBtn.appendChild(removeCarts);
  pdInCart.append(divImg, divText, divBtn);

  addInCartProducts.appendChild(pdInCart);

  removeCarts.addEventListener("click", (e) => { 
    e.preventDefault();    
    
    pdInCart.remove();
    cart.forEach((a, index) => {
      if (a.id === item.id) {
        cart.splice(index, 1);
      }
    });

    countInCart(cart);
  });
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
  addCarts.id = item.id;

  const deleteProduct = document.createElement("button");
  deleteProduct.innerHTML = '<i class="fa-solid fa-bucket"></i>';
  deleteProduct.className = "delete btn-alert";
  deleteProduct.id = item.id;

  const editProduct = document.createElement("button");
  editProduct.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editProduct.className = "edit btn-edit";
  editProduct.id = item.id;
  
  prodUl.append(prodimmagine,prodTitle, prodprice,addCarts,editProduct, deleteProduct);
  showProducts.appendChild(prodUl);

  addCarts.addEventListener("click", (e) => { 
    e.preventDefault();
    console.log('PRODOTTO:' + e.target.id);
    addToCartElemento(e.target.id);
  });
  editProduct.addEventListener("click", (e) => { 
    e.preventDefault();
    modificaElemento(e.target.id, item);
  });

  deleteProduct.addEventListener("click", (e) => { 
    e.preventDefault();
    if (confirm("Sei sicuro di voler elimanare il prodotto?") == true) {
      deleteElemento(e.target.id);
    } else {
    }
  });
  
};

const modificaElemento = (param, elemento) => {
  console.log(elemento);
  console.log(param);

  // MOSTRO IL FORM
  showSectionEditProducts.classList.add("active");
  // COMPILO CON I DATI IL FORM
  editID.value = elemento.id;
  editTitle.value = elemento.title;
  editPrice.value = elemento.price;
  editCategory.value = elemento.category.id;
  editImage.value = elemento.images[0];
  editDescription.value = elemento.description;
  
}
  const editID = document.getElementById("idPCT");
  const editTitle = document.getElementById("editTitle");
  const editPrice = document.getElementById("editPrice");
  const editCategory = document.getElementById("editCategory");
  const editImage = document.getElementById("editImage");
  const editDescription = document.getElementById("editDescription");
  const eP = document.getElementById("editProduct");

eP.addEventListener("submit", (event) => {
  event.preventDefault();
  const nuoveInformazioni = {
    id: editID.value,
    title: editTitle.value,
    price: parseInt(editPrice.value),
    description: editDescription.value,
    categoryId: parseInt(editCategory.value),
    images: [editImage.value],
  };
  editE(nuoveInformazioni, "products/", editID.value);
});

const editE = (nuoveInformazioni, param, id) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuoveInformazioni),
  })
  .then(res => res.json())
  .then(data => {
    if (data.statusCode >= 400 && data.statusCode < 500) {
      alert(
        `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
      );
    } else {
      alert(`${param} CARICATO CORRETTAMENTE!`);
    }
  })
  .catch(e => console.log("ERRORE: ", e));
  
};



const deleteElemento = (param) => {
  alert('eliminato:' + param);

  fetch(`https://api.escuelajs.co/api/v1/products/` + param, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
        );
      } else {
        alert(`${param} ELIMINATO CORRETTAMENTE!`);
      }
    })
    .catch(e => console.log("ERRORE: ", e));
};

const mostaElemento = (param) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param, )
  .then(res => res.json())
  .then(data => {
    
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
const closeblock3 = document.querySelector(".closeblock3");

closeblock.addEventListener("click", () => { 
  showSectionEditProducts.classList.remove("active");
  showSectionAddProducts.classList.remove("active");
  showSectionAddCategories.classList.remove("active");
});

closeblock2.addEventListener("click", () => { 
  showSectionEditProducts.classList.remove("active");
  showSectionAddProducts.classList.remove("active");
  showSectionAddCategories.classList.remove("active");
});

closeblock3.addEventListener("click", () => { 
  showSectionEditProducts.classList.remove("active");
  showSectionAddProducts.classList.remove("active");
  showSectionAddCategories.classList.remove("active");
});
let cart = [];
const addToCartElemento = (param) => {
  fetch(`https://api.escuelajs.co/api/v1/products/` + param, )
  .then(res => res.json())
  .then(data => {
    if (data.statusCode >= 400 && data.statusCode < 500) {
      alert(
        `${param} NON AGGIUNTO: ` + data.message[0]
      );
    } else {
      
      cart.push(data);
      loopProductInCart(data);
      countInCart(cart);
    }
  })
  .catch(e => console.log("ERRORE: ", e));
}



const countInCart = (cart) => {
  
  const totals = document.querySelector(".total");
  totals.textContent = "";
  totals.textContent = cart.length;
}

countInCart(cart);
mostaElemento('categories');
mostaElemento('products');