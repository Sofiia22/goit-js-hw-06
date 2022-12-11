const textInput = document.querySelector("#name-input");
const textNoInput = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  textNoInput.textContent = e.target.value;
  if (e.target.value === "") {
    textNoInput.textContent = "Anonymous";
  }
});