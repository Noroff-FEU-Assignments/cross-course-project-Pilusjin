import { productArray } from "./productList.js";
const productsContainer = document.querySelector(".buyproduct");
const cart = document.querySelector(".cartsecond");
const cartList = document.querySelector("cart-list");
let cartArray = [];

productArray.forEach(function(product){
    productsContainer.innerHTML +=
    `
    <div class="list">
        <h2>${product.name}</h2>
        <p>${product.id}</p>
        <dic class="product-price">${product.price}</div>
        <button class="cta-standard" data.product=${product.id}">Add to cart>
        </div>
    `
})

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event){
        const itemToAdd = productArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd); 
        showCart(cartArray);
    }
})

function showCart(cartItems){
    cart.style.display = "block";
    cartList.innerHTML = "";
    cartItems.forEach(function(cartElement){
    cartList.innerHTML += 
        `<div class="cart-item">
        <h4>${cartElement.name}</h4>
        </div>`
    })
}