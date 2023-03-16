const controls = document.querySelector("#controls");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

controls.addEventListener("click", (event) => {
  if (event.target.dataset.create) {
    const amount = +controls.querySelector("input").value;
    createBoxes(amount);
  } else if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});
