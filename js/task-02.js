const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const markup = ingredients.map((parametr) => {
  const elementLi = document.createElement("li");
  elementLi.textContent = parametr;
  elementLi.classList.add("item");
  return elementLi;
});
const elementUl = document.querySelector("#ingredients");
elementUl.append(...markup);
