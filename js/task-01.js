const quantityUlEl = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${quantityUlEl.length}`);

quantityUlEl.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
