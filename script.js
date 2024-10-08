
// variable initialization
const container = document.querySelector("#container");
const grid = document.querySelector("#grid");
const MAX_GRID_SIDE_LEN = 100;
let gridSideLen = 16;
const sizeStatement = document.querySelector("p");

const resizeBtn = document.querySelector("button");
let squareArray = document.querySelectorAll(".square")




function generateSquares(gridSideLen) {
    // generate a grid of squares with width and height equal to gridSideLen 
    // (but no more than the MAX)
    for (col = 1; col<=gridSideLen; col++) {
        column = document.createElement("div");
        column.classList.add("col");
        for (row = 1; row <= gridSideLen; row++) {
            square = document.createElement("div");
            square.classList.add("square");
            column.appendChild(square);
            square.addEventListener("mouseover", function() {
                // console.log(this); // debug line
                this.classList.add("inked");
            })
        }
        grid.appendChild(column);
    }
    document.documentElement.style.setProperty('--gridSideLen', gridSideLen);
    sizeStatement.textContent = gridSideLen + "x" + gridSideLen;
}

function clearSquares() {
    grid.innerHTML = "";
}

function validLen(inputLen) {
    if ((Number.isInteger(inputLen)) && (inputLen > 0) && (inputLen <= MAX_GRID_SIDE_LEN)) {
        return true;
    } else {
        return false;
    }
}

resizeBtn.addEventListener("click", function() {

    let inputLen = parseInt(prompt("Squares per side:"));
    if (validLen(inputLen)) {
        gridSideLen = inputLen;
        clearSquares();
        generateSquares(gridSideLen);
    } 
})


// on load, generate the grid
document.addEventListener("DOMContentLoaded", function() {

    generateSquares(gridSideLen);
    squareArray = document.querySelectorAll(".square");
    

});

