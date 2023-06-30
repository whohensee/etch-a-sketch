"use strict";

const sketchBoard = document.querySelector("#sketch-board");
const sketchBoardStyle = document.querySelector(".tile");
const boardWidth = 800;

function createTile(tileWidth) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.setAttribute("style", `width: ${tileWidth}px; height: ${tileWidth}px`);
  return tile;
}

function fillBoardWithTiles(N) {
  // calculate the sizes of each tile
  const tilesPerRow = Math.floor(Math.sqrt(N));
  const tileWidth = boardWidth / tilesPerRow;

  for (let i = 0; i < tilesPerRow ** 2; i++) {
    const tile = createTile(tileWidth);
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
fillBoardWithTiles(64);
