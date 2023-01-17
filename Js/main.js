// Sample product data
const products = [
  {
    name: "Product 1",
    image: "product1.jpg",
    price: "$19.99"
  },
  {
    name: "Product 2",
    image: "product2.jpg",
    price: "$29.99"
  },
  // Add more products here
];

// Get reference to the product list element
const productList = document.getElementById("product-list");

// Loop through the products array and add each product to the page
for (let i = 0; i < products.length; i++) {
  const product = products[i];

  // Create a new list item element
  const productItem = document.createElement("li");

  // Add the product name to the element
  productItem.innerHTML = `<h2>${product.name}</h2>`;

  // Create an image element and set its src to the product image
  const productImage = document.createElement("img");
  productImage.src = product.image;

  // Add the image to the list item
  productItem.appendChild(productImage);

  // Add the price to the element
  productItem.innerHTML += `<p>${product.price}</p>`