const categoriesItems = document.querySelectorAll("#categories > .item");
console.log("Number of cetegories: ", categoriesItems.length);

categoriesItems.forEach((element) => {
  console.log("Category: ", element.querySelector("h2").textContent);
  console.log("Elements: ", element.querySelectorAll("li").length);
});