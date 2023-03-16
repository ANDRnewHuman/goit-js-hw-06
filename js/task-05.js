const inputEL = document.querySelector("#name-input");
const outputEL = document.querySelector("#name-output");
inputEL.addEventListener("input", () => {
  console.log(inputEL.value);
  outputEL.textContent = inputEL.value;
  if (inputEL.value === "") {
    outputEL.textContent = "Anonymous";
  }
});
