fetch(`http://localhost:8082/Product/readAll`) 
    .then((response) => {
        if (response.status !== 200) { 
            console.error(`status: ${reponse.status}`);
            return;
        }
        response.json() 
        .then(data => {
            for(let i = 0; i < data.length; i++) {
            if(data[i].category == "gym") {
            readAllProducts(data[i])
            }
            }
        })
    }).catch((err)=> console.error(`Fetch Error: ${err}`)); 

function readAllProducts(data) {
    let container = document.getElementById("product-card");

    let list_group_shadow = document.createElement("ul");
    list_group_shadow.setAttribute("class", "list-group shadow");
    list_group_shadow.setAttribute("style", "margin-bottom: 15px");
    container.appendChild(list_group_shadow);

    let list_group_item = document.createElement("div");
    list_group_shadow.appendChild(list_group_item);

    let media_one = document.createElement("div");
    media_one.setAttribute("class", "media align-items-lg-center flex-column flex-lg-row p-3");
    list_group_item.appendChild(media_one);

    let media_two = document.createElement("div");
    media_two.setAttribute("class", "media-body order-2 order-lg-1");
    media_one.appendChild(media_two);
    
    let productNameClass = document.createElement("h5");
    productNameClass.setAttribute("class", "mt-0 font-weight-bold mb-2");
    productNameClass.textContent = data.name;
    media_two.appendChild(productNameClass);

    let productDesClass = document.createElement("p");
    productDesClass.setAttribute("class", "font-italic text-muted mb-0 small");
    productDesClass.textContent = data.description;
    media_two.appendChild(productDesClass);

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "d-flex align-items-center justify-content-between mt-1");
    media_two.appendChild(priceDiv);

    let priceClass = document.createElement("h6");
    priceClass.setAttribute("class", "font-weight-bold my-2");
    priceClass.textContent = "£" + data.price;
    priceDiv.appendChild(priceClass);

    let ratingList = document.createElement("ul");
    ratingList.setAttribute("class", "list-inline small");
    priceDiv.appendChild(ratingList);

    console.log(data);
    let image = document.createElement("img");
    image.setAttribute("src", "./img/" + data.photo + ".jpg");
    image.setAttribute("class", "ml-lg-5 order-1 order-lg-2");
    image.setAttribute("width", "200");
    image.setAttribute("alt", "No photo found");
    media_one.appendChild(image);

    let rating = data.rating;
    for(i = 0; i < rating; i++) {
        let starItem = document.createElement("li");
        starItem.setAttribute("class", "list-inline-item m-0");
        let star = document.createElement("i");
        star.setAttribute("class", "fa fa-star text-success");
        starItem.appendChild(star);
        ratingList.appendChild(starItem);
    }

    let buyNow = document.createElement("a");
    buyNow.setAttribute("href", "#");
    buyNow.setAttribute("style", "color: green");
    buyNow.textContent = "Buy now";
    media_two.appendChild(buyNow);

}
