let currentColor = "black";

function populate(size) {
    let gridContainer = document.querySelector(".grid-container");
    const prevCells = document.querySelectorAll(".cell");
    prevCells.forEach((cell) => cell.remove())
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i<Math.pow(size, 2); i++) {
        let cell = document.createElement("div");
        cell.style.backgroundColor = "whte";
        cell.classList.add("cell");
        cell.addEventListener("mouseover", colorCell)
        cell.style.border = "1px solid black"
        gridContainer.insertAdjacentElement("beforeend", cell)
    }
}

populate(16);

function changeSize(input) {
    if(input >= 2 && input <= 100) {
        populate(input)
    }
    else if (input < 0) {
        console.log("We haven't invented negative areas yet")
    }
    else {
        console.log("Maximun number of cells reached")
    }
}
function colorCell() {
    if (color = "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = currentColor;
    }
}

function changeColor(color) {
    currentColor = color
}
