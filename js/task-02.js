const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liItems = document.querySelector("#ingredients");
const liArray = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  liArray.push(item);
});
liItems.append(...liArray);
console.log(liItems);
