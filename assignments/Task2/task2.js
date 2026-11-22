const color = document.querySelector("#color");
const form = document.getElementById("styleForm");
const bgColor = document.getElementById("bgColor");
const contentText = document.getElementById("contentText");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const col = color.value.trim();
  const bgCo = bgColor.value.trim();
  const text = contentText.value.trim();

  output.textContent = text;
  output.style.color = col;
  output.style.backgroundColor = bgCo;
  output.style.padding = "10px";
});

form.addEventListener("reset", function () {
  output.textContent = "";
  output.removeAttribute("style");
});