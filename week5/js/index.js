fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((e) => {
    console.log(e);
  });
