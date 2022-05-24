class View {
  constructor(game, el) {}

  setupBoard() {
    // game.board
    const ttt = document.querySelector('.ttt')
    let ul = document.createElement("ul")
  
    for (let i = 0; i < 3; i++) {
      // li.setAttribute
      for (let j=0; j < 3; j++) {
        let li = document.createElement("li")
        li.setAttribute("data-pos", `[${i},${j}]`)
        ttt.appendChild(li)
      }
    }
// think we create a for loop
// append into an array?
// add an attribute for the position??
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
