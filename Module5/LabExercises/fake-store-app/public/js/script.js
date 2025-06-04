// public/script.js :contentReference[oaicite:6]{index=6}
const productContainer = document.querySelector("#products-list");
const categoryMenu = document.getElementById("category-buttons");

// Clone a <template> (optionally, add a <template> in your HTML). Here we’ll build cards manually:
function addCard(product) {
  const col = document.createElement("div");
  col.className = "col-lg-3 col-md-4 col-sm-12 col-6 mb-4";

  const card = document.createElement("div");
  card.className = "card h-100";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = product.image;
  img.alt = product.title;

  const body = document.createElement("div");
  body.className = "card-body d-flex flex-column";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = product.title;

  const desc = document.createElement("p");
  desc.className = "card-text flex-grow-1";
  desc.innerText = product.description;

  const price = document.createElement("p");
  price.className = "mt-auto fw-bold";
  price.innerText = `\$${product.price}`;

  body.append(title, desc, price);
  card.append(img, body);
  col.appendChild(card);
  productContainer.appendChild(col);
}

function renderCards(products) {
  productContainer.innerHTML = "";
  products.forEach((p) => addCard(p));
}

function renderCategoryButtons(categories, allProducts) {
  categoryMenu.innerHTML = ""; // clear previous items

  categories.forEach((category) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "dropdown-item";
    a.href = "#";
    a.innerText = category;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const filtered = allProducts.filter((p) => p.category === category);
      renderCards(filtered);
    });
    li.appendChild(a);
    categoryMenu.appendChild(li);
  });

  // “All” button at the top:
  const liAll = document.createElement("li");
  const aAll = document.createElement("a");
  aAll.className = "dropdown-item";
  aAll.href = "#";
  aAll.innerText = "All";
  aAll.addEventListener("click", (e) => {
    e.preventDefault();
    renderCards(allProducts);
  });
  liAll.appendChild(aAll);
  categoryMenu.insertBefore(liAll, categoryMenu.firstChild);
}

// Fetch products from our Express route
axios
  .get("/store/products")
  .then((res) => {
    const products = res.data; // Array of products
    renderCards(products);

    const categories = [...new Set(products.map((p) => p.category))];
    renderCategoryButtons(categories, products);
  })
  .catch((err) => {
    console.error("Failed to load products:", err);
    productContainer.innerHTML =
      '<div class="alert alert-danger">Error loading products</div>';
  });
