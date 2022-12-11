let counterValue = 0;
const counter = document.querySelector("#value");
const minusListenerBtn = document.querySelector(
  'button[data-action="decrement"]'
);
const plusListenerBtn = document.querySelector(
  'button[data-action="increment"]'
);

minusListenerBtn.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});
plusListenerBtn.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});