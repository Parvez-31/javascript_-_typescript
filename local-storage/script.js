const addProduct = () => {
  const productNameEl = document.getElementById("product-name").value;
  const productPriceEl = document.getElementById("product-price").value;

  if (!productNameEl || !productPriceEl) {
    alert("Please enter product name and price");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];

  let newProduct = {
    id: Date.now(),
    name: productNameEl,
    price: Number(productPriceEl),
  };

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";

  displayProduct();
};

const displayProduct = () => {
  const productListEl = document.getElementById("product-list");
  productListEl.innerHTML = "";

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.forEach((p) => {
    const liEl = document.createElement("li");
    liEl.textContent = `Name: ${p.name} ---- Price: ${p.price}`;

    let deleteBtnEl = document.createElement("button");
    deleteBtnEl.textContent = "Delete";

    deleteBtnEl.onclick = function () {
      deleteProduct(p.id); // ✅ fixed name
    };

    liEl.appendChild(deleteBtnEl);
    productListEl.appendChild(liEl);
  });
};

const deleteProduct = (id) => {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let updatedProducts = products.filter((p) => p.id !== id);

  localStorage.setItem("products", JSON.stringify(updatedProducts));

  displayProduct();
};
