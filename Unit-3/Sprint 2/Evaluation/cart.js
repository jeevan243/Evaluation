
var arr = JSON.parse(localStorage.getItem("mealData")) || [];
displayItems(arr);


function displayItems(arr) {
    document.getElementById("items").textContent = "";

    arr.map(function (ele, index) {
        var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = ele.strMealThumb;

        var name = document.createElement("p");
        name.textContent = ele.strMeal;

        var price = document.createElement("p");
        price.textContent = `  ${Math.floor(Math.random() * 500) + 100} ₹`;

        var add = document.createElement("button");
        add.textContent = "Remove";

        add.addEventListener("click", function () {
            removeItem(index);
        });

        div.append(img, name, price, add);
        document.getElementById("items").append(div);
    });
}

// removingItems
function removeItem(index) {
    arr.splice(index, 1)
    displayItems(arr);
    localStorage.setItem("mealData", JSON.stringify(arr))
}