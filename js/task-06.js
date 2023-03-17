const refs = {
  inputId: document.querySelector("#validation-input"),
  data: document.querySelector('input[data-length ="6"]'),
  colorGreen: document.querySelector("#validation-input.valid"),
  colorRed: document.querySelector("#validation-input.invalid"),
  input: document.querySelector("input"),
};

refs.input.addEventListener("blur", () => {
  if (refs.input.value.length === parseInt(refs.data.dataset.length)) {
    console.log("valid");
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    console.log("invalid");
    refs.input.classList.add("invalid");
    refs.input.classList.remove("valid");
  }
});
