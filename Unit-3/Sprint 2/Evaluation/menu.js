
var array = JSON.parse(localStorage.getItem("mealData")) || [];


async function myFunction() {
  try {
    let url = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s"
    );
    let responce = await url.json();

    data = responce.meals;
    displayItems(data);
    console.log(data);
  } catch {
    console.log("error");
  }
}
myFunction();

let menu = document.getElementById("menu");

// Diplay Items
function displayItems(data) {
  data.map(function (ele) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src = ele.strMealThumb;

    var name = document.createElement("p");
    name.textContent = ele.strMeal;

    var price = document.createElement("p");
    price.textContent = `${Math.floor(Math.random() * 400) + 100} ₹`;


    var add = document.createElement("button");
    add.textContent = "Add to Cart";

    add.addEventListener("click", function () {
      addtoCart(ele);
    });

    div.append(img, name, price, add);
    menu.append(div);
  });
}


// number of items in cart

var count = 0
function countItems() {
  for (var i = 0; i < array.length; i++) {
    count++;
    document.getElementById("count").textContent = "Items:" + " " + count;
  }
  displayItems(array)

}

countItems();

//Add items to cart
function addtoCart(ele) {

  array.push(ele);
  localStorage.setItem("mealData", JSON.stringify(array))
}



