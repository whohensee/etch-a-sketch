"use strict";

const sketchBoard = document.querySelector("#sketch-board");

function createTile() {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  return tile;
}

function fillBoardWithTiles(N) {
  for (let i = 0; i < N; i++) {
    const tile = createTile();
    sketchBoard.appendChild(tile);
  }
}

function removeBoardTiles() {
  const children = sketchBoard.children;
  console.log(children);
  Array.from(children).forEach((child) => {
    sketchBoard.removeChild(child);
  });
}

// Generate the webpage
fillBoardWithTiles(16);
