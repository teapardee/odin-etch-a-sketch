/* Event Listeners */

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
button.addEventListener("click", retrieveAnswer);

const container = document.querySelector(".grid-container");

/* Retrieve & Check Answer */

function retrieveAnswer() {
  let answer = prompt("Enter number of squares per side:");
  let gridNumber = checkAnswer(answer);
  adjustGrid(gridNumber);
}

function checkAnswer(Answer) {
  let output = parseInt(Answer);

  if (output > 100) {
    alert("Please enter number between 1 and 100!");
    git;
    retrieveAnswer();
  } else {
    return output;
  }
}

/* Adjust Grid */

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function adjustGrid(gridNumber) {
  const gridContainer = document.querySelector(".grid-container");

  removeAllChildNodes(gridContainer);

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
