let counterValue = 0;
const btnDecrementEl = document.querySelector(`[data-action="decrement"]`);
const btnIncrementEl = document.querySelector(`[data-action="increment"]`);
const spanEl = document.querySelector("#value");
btnDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
});

btnIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
});
