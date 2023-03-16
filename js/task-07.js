const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  refs.text.style.fontSize = event.currentTarget.value + "px";
}
