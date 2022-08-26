const detailContainer = document.querySelector(".game_spesific");

const queryString = document.location.search
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id)

const url = "https://gamehub.pilusjin.site/wp-json/wc/store/products/" + id;
const proxy = "https://noroffcors.herokuapp.com/";
const prductUrl = proxy + url;

console.log.apply(url);

async function details() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        newPageTitle = results.name;
        document.title = newPageTitle;

        createHTML(results);

    } catch(error) {
        detailContainer.innerHTML = `<div class="error">Ups ! An error has occured.</div>`;
    }

}
details();

function createHTML(results) {
    detailContainer.innerHTML +=    `<h1>${results.name}</h1>
                                    <img src="${results.images[0].src}" alt="${results.name}" class="product_image">
                                    <h2>${results.prices.price} kr </h2>
                                    <p>${results.description}</p>`;


}