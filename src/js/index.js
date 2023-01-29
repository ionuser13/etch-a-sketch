function populate(size) {
    let gridContainer = document.querySelector(".grid-container");
    const prevCells = document.querySelectorAll(".cell");
    prevCells.forEach((cell) => cell.remove())
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i<Math.pow(size, 2); i++) {
        let cell = document.createElement("div");
        cell.style.backgroundColor = "blue";
        cell.classList.add("cell");
        cell.style.border = "1px solid black"
        gridContainer.insertAdjacentElement("beforeend", cell)
    }
}

populate(16);

function changeSize(input) {
    populate(input)
}

