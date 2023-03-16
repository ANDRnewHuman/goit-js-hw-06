const refs = {
  btnColor: document.querySelector("button.change-color"),
  spanName: document.querySelector("span.color"),
};

refs.btnColor.addEventListener("click", randomColor);
function randomColor() {
  const colorRandom = (document.body.style.background = getRandomHexColor());
  refs.spanName.textContent = colorRandom;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
