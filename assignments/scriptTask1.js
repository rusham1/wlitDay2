const heading=document.querySelector("#heading");
const fontsize=document.getElementById("fontsize");
const chButton=document.getElementById("changeBtn");

chButton.addEventListener("click", function(){
    const size = fontsize.value;

    if (size > 0) {
        heading.style.fontSize = size + "px";
    } else {
        alert("Please enter a valid font size!");
    }
})