const formElem = document.querySelector(".login-form");

function onFormLoginSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert(" ");
  }
  const formData = { email: email.value, password: password.value };
  console.log(formData);
  e.currentTarget.reset();
}
formElem.addEventListener("submit", onFormLoginSubmit);