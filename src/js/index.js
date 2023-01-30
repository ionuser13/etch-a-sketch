const errorPanel = document.querySelector(".error");
const errorText = document.querySelector(".error-text");
let currentColor = "black";
let gridStatus = false;
let gridContainer = document.querySelector(".grid-container");
function populate(size) {
    const prevCells = document.querySelectorAll(".cell");
    prevCells.forEach((cell) => cell.remove())
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i<Math.pow(size, 2); i++) {
        let cell = document.createElement("div");
        cell.style.backgroundColor = "whte";
        cell.classList.add("cell");
        cell.addEventListener("mouseover", colorCell);
        gridContainer.insertAdjacentElement("beforeend", cell)
    }
}

populate(16);

function changeSize(input) {
    if(input >= 2 && input <= 100) {
        populate(input)
    }
    else if (input < 0) {
        errorPanel.classList.remove("none");
        errorPanel.innerText = "We haven't invented negative areas yet";
    }
    else {
        errorPanel.classList.remove("none");
        errorPanel.innerText = "Maximun number of cells reached"
    }
}
window.addEventListener("mousedown", () => {
    gridStatus = true
})
window.addEventListener("mouseup", () => {
    gridStatus = false;
})
function colorCell() {
    if (gridStatus) {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        this.style.backgroundColor = currentColor;
    }
}

function changeColor(color) {
    currentColor = color;
    this.style.backgroundColor = "black";
}

function resetGrid() {
    const prevCells = document.querySelectorAll(".cell");
    prevCells.forEach((cell) => cell.style.backgroundColor = "white")
}