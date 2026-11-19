

// const title = document.querySelector("#heading");
// console.log(title);
// title.style.color="red";
// title.textContent="Things weeeeee like to do"

// // DOM Manipulation
// // updating Elements

const title = document.querySelector('#heading');
// console.log(title);
title.style.color = "red";
title.style.color = 'red';
title.style.color = `red`;
title.textContent = "Things WE LIKE TO DO";
console.log(title);

const items = document.querySelectorAll(".item-list");

console.log(items);

// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = “bold”;
// }

items.forEach((item) => {
    item.style.fontWeight = "normal";
});