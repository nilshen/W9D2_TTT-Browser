const View = require ("./ttt-view")
const Game = require ("./game")

document.addEventListener("DOMContentLoaded", () => {
  const newGame = new Game()
  const newView = new View(newGame)

  newView.setupBoard()
});
