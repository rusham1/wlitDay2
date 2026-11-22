let colors = ["red", "blue", "green", "yellow"];

// Use splice() to replace "green" with "purple".
// splice(startIndex, deleteCount, newItem)
console.log(colors.splice(colors.indexOf("green"),1,"purple"))
console.log(colors)


// Then use slice() to make a new array with the first two colors.
// slice(start, end) -> end is not included
console.log(colors.slice(0,2))