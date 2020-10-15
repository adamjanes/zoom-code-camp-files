class Cart {
  constructor() {
    this.items = [];
  }

  update() {
    const tbody = document.getElementById("table-contents");
    tbody.innerHTML = "";

    this.items.forEach((item) => {
      tbody.innerHTML += `
        <tr>
          <td>${item.title}</td>
          <td>${item.quantity}</td>
          <td>${item.price}</td>
        </tr>
      `;
    });

    document.getElementById("total").innerHTML = this.calculateTotal();
  }

  add(product) {
    const found = this.items.find((item) => product.id === item.id);

    if (found) {
      found.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.update();
  }

  calculateTotal() {
    return this.items.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0).toFixed(2); // Number.toFixed() rounds to a number of decimal points
  }

  empty() {
    this.items = [];
    this.update();
  }
}
