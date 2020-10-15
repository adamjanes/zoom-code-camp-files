function createCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <div class="image-wrapper">
      <img
        class="product-image"
        src="${product.image}"
        alt="Picture of ${product.title}"
      />
    </div>
    <div class="product-info">
      <div class="product-price">$${product.price}</div>
      <div class="product-title">
        ${product.title}
      </div>
      <button class="product-button">Add to cart</button>
    </div>
  `;

  document.getElementById("cards-container").appendChild(card);
}

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const myCart = new Cart();

    data.forEach((product) => {
      createCard(product);
    });
  })
  .catch((e) => {
    console.log(e);
  });
