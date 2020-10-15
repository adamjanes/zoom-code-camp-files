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
      <button id="btn-${product.id}" class="product-button">Add to cart</button>
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

      // attach click event listener to newly created button
      const button = document.getElementById(`btn-${product.id}`);
      button.addEventListener("click", () => {
        myCart.add(product);
      });
    });
  })
  .catch((e) => {
    console.log(e);
  });
