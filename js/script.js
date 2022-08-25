const url = "http://localhost:10008/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts();


function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML += `<div class="product_list"> 
        <img src="${product.images[0].src}" alt="${product.name}" class="product_image">
        <h3>${product.name}</h3> 
        <p>${product.prices.price} kr </p>
        <a href="http://127.0.0.1:5500/product_specific.html?id=${product.id}"><button class="cta_home">View more</button></a>
        </div>`;
    })
}