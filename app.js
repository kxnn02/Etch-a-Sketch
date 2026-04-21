// PROJECT ETCH-A-SKETCH
// A grid of squares in the browser
// When the user hovers over a square, it changes color
// When the user clicks a button, they can choose the size of the grid (e.g. 16x16, 32x32, etc.)
// INPUT: mouse movement, button click
// OUTPUT: a grid of squares that change color on hover

// 1. Create a container element in the HTML to hold the grid
// 2. Use JavaScript to create a grid of div elements inside the container
// 3. Add an event listener to each square that changes its color on hover
// 4. Create a button that prompts the user for the grid size and regenerates the grid accordingly

let container = document.querySelector(".container");

// Create a single square to test
// const square = document.createElement("div");
// square.classList.add("square");
// container.appendChild(square);



// Function to create the grid
function createGrid(size) {
    container.innerHTML = ""; // Clear the container before creating a new grid
    const squareSize = 600 / size; // Assuming the container is 600px wide
    container.style.width = 600 + "px";
    
    for (let i = 0; i < size * size; i++) {
        // create the individual squares
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        container.appendChild(square);
    }
}

function changeColor(event) {
    if (event.target.classList.contains("square")) {
        // set the background color of the square to a random color
        event.target.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function resizeGrid() {
    const newSize = prompt("Enter the new grid size (e.g. 16 for 16x16):");
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid grid size (1-100).");
    }
}

const resizeButton = document.querySelector(".resize-button");

resizeButton.addEventListener("click", resizeGrid);

container.addEventListener("mouseover", changeColor);

createGrid(16);

