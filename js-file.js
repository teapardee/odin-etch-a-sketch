// Global Variables

var gridSize;

// Initial Load

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
      grid.appendChild(div);
    }
  },
  false
);

// Event Listeners

const adjustBtn = document.querySelector("#adjust");
adjustBtn.addEventListener("click", retrieveGridSize);

const grid = document.querySelector(".grid");

const shakeBtn = document.querySelector("#shake");
shakeBtn.addEventListener("click", () => {
  blackGrid(gridSize);
});

const rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", () => {
  rainbowGrid(gridSize);
});

const blackBtn = document.querySelector("#black");
blackBtn.addEventListener("click", () => {
  blackGrid(gridSize);
});

// Retrieve & Check Prompt Input

function retrieveGridSize() {
  gridSize = prompt("Enter number of squares per side:");
  gridSize = parseInt(gridSize);

  if (gridSize > 100 || gridSize < 1 || Number.isNaN(gridSize)) {
    alert("Please enter number between 1 and 100!");
    retrieveGridSize();
  } else {
    blackGrid(gridSize);
  }
}

// Grid

function clearGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function blackGrid(gridNumber) {
  const grid = document.querySelector(".grid");

  clearGrid(grid);

  grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

  let iterations = gridNumber * gridNumber;

  for (let i = 0; i < iterations; i++) {
    const div = document.createElement("div");
    div.className = "div-square";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
}

function rainbowGrid(gridNumber) {
  const grid = document.querySelector(".grid");

  clearGrid(grid);

  grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

  let iterations = gridNumber * gridNumber;

  for (let i = 0; i < iterations; i++) {
    const div = document.createElement("div");
    div.className = "div-square";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    });
    grid.appendChild(div);
  }
}
