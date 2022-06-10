// Global Variables

var gridSize;

// Event Listeners

document.addEventListener(
  "DOMContentLoaded",
  () => {
    gridSize = 16;

    for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      div.className = "div-square";
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });
      container.appendChild(div);
    }
  },
  false
);

const adjustBtn = document.querySelector(".prompt");
adjustBtn.addEventListener("click", retrieveGridSize);

const container = document.querySelector(".grid-container");

const shakeBtn = document.querySelector(".shake");
shakeBtn.addEventListener("click", () => {
  adjustGrid(gridSize);
});

// Retrieve & Check Prompt Input

function retrieveGridSize() {
  gridSize = prompt("Enter number of squares per side:");
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

  for (let i = 0; i < iterations; i++) {
    const div = document.createElement("div");
    div.className = "div-square";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}
