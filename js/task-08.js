const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    if (value === "" || name === "") {
      const message = "всі поля повинні бути заповнені";
      alert(message);
    } else {
      console.log("name:", name);
      console.log("value:", value);
    }
    event.currentTarget.reset();
  });
}
