var cartItem = JSON.parse(localStorage.getItem("cartData"));

//   var container = document.createElement("div");
//   container.setAttribute("id", "container");
//   document.querySelector("body").append(container);
var totalPrice = 0;
cartItem.map(function (elem) {
    var image = document.createElement("img");
    image.setAttribute("src", elem.image_url);
    image.style.width = "100%";
    image.style.height = "100%";

    var name = document.createElement("p");
    name.setAttribute("id", "product_name");
    name.textContent = elem.name;

    var p1 = document.createElement("p");
    p1.setAttribute("id", "price_p");
    p1.textContent = elem.price;

    var btn = document.createElement("button");
    btn.setAttribute("id", "btn");
    btn.style.color = "#2d2d2d";
    btn.textContent = "X";
    btn.addEventListener("click", function () {
        addToCart(elem, btn);
    });

    var m_div = document.createElement("div");
    m_div.setAttribute("id", "main_div")
    var img_div = document.createElement("div");
    img_div.setAttribute("id", "img_div");
    var right_div = document.createElement("div");
    right_div.setAttribute("id", "right_div");

    img_div.append(image);
    right_div.append(p1, name, btn);
    m_div.append(img_div, right_div);

    document.querySelector("#cart-item-list").append(m_div);
});

totalPrice = cartItem.reduce(function (ac, cv) {
    return ac + Number(cv.price);
}, 0);

document.querySelector(
    "#sub-total"
).textContent = `INR ${totalPrice}`;

document.querySelector("#payment-btn").addEventListener("click", function () {
    window.location.href = "checkout.html";
});

// var promo = document.querySelector("#promo-code").value;
// document.querySelector("#promo-btn").addEventListener("click", function () {
//     if (promo == "masai") {
//         console.log("promo apply");
//     }
// });

document.querySelector("#my-total-h1").textContent = cartItem.length;