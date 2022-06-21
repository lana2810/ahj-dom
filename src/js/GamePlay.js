import imgsrc from "../img/goblin.png";
import getRandom from "./utils";

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.boardEl = document.getElementById("board");
    this.cells = [];
  }

  init() {
    const goblin = document.createElement("img");
    goblin.src = imgsrc;
    goblin.classList.add("character");

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      this.boardEl.appendChild(cellEl);
      this.cells.push(cellEl);
    }
    let indexRandom;
    setInterval(() => {
      indexRandom = getRandom(0, this.cells.length - 1);
      this.cells[indexRandom].append(goblin);
    }, 3000);
  }
}
