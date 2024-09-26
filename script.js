
// variable initialization
const container = document.querySelector("#container");
const grid = document.querySelector("#grid");
const MAX_GRID_SIDE_LEN = 100;
let gridSideLen = 16;

document.documentElement.style.setProperty('--gridSideLen', gridSideLen);




function generateSquares(gridSideLen) {
    // generate a grid of squares with width and height equal to gridSideLen (but no more than the MAX)
    for (col = 1; col<=gridSideLen; col++) {
        column = document.createElement("div");
        column.classList.add("col");
        for (row = 1; row <= gridSideLen; row++) {
            square = document.createElement("div");
            square.classList.add("square");
            column.appendChild(square);
        }
        grid.appendChild(column);
    }
}

// on load, generate the grid
document.addEventListener("DOMContentLoaded", function() {

    generateSquares(gridSideLen);

});