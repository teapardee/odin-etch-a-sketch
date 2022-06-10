// Event Listeners

document.addEventListener(
  "DOMContentLoaded",
  () => {
    for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      div.className = "div-square";
      container.appendChild(div);
    }
  },
  false
);

const button = document.querySelector(".prompt");
button.addEventListener("click", retrieveGridSize);

const container = document.querySelector(".grid-container");

// Retrieve & Check Prompt Input

function retrieveGridSize() {
  let gridSize = prompt("Enter number of squares per side:");
  gridSize = parseInt(gridSize);

  if (gridSize > 100 || gridSize < 1 || Number.isNaN(gridSize)) {
    alert("Please enter number between 1 and 100!");
    retrieveGridSize();
  } else {
    adjustGrid(gridSize);
  }
}

// Adjust Grid

function clearGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function adjustGrid(gridNumber) {
  const gridContainer = document.querySelector(".grid-container");

  clearGrid(gridContainer);

  gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

  let iterations = gridNumber * gridNumber;

  console.log(iterations);
  for (let i = 0; i < iterations; i++) {
    const div = document.createElement("div");
    div.className = "div-square";
    container.appendChild(div);
  }
}
