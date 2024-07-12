var app = document.getElementById("board")

var grid = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
]
var round = "X"

var board = grid.map((line, lineIndex) => {
  return line.map((cell, cellIndex) => {
    return `<button id="${lineIndex}${cellIndex}" onclick="X_Or_O(${lineIndex}, ${cellIndex})">${cell}</button>`
  }).join("")
}).join("<br>")

app.innerHTML = board

function X_Or_O(line, cell) {
  if(round == "X") {
    grid[line][cell] = round
    document.getElementById(`${line}${cell}`).innerHTML = grid[line][cell]
    document.getElementById(`${line}${cell}`).setAttribute("disabled", true)
    round = "O"
  } else {
    grid[line][cell] = round
    document.getElementById(`${line}${cell}`).innerHTML = grid[line][cell]
    document.getElementById(`${line}${cell}`).setAttribute("disabled", true)
    round = "X"
  }
  checkForSequence()
}

function resetGame() {
  grid.forEach((line, line_index) => {
    line.forEach((cell, cell_index) => {
      document.getElementById(`${line_index}${cell_index}`).innerHTML = "-"
      document.getElementById(`${line_index}${cell_index}`).removeAttribute("disabled")
    })
  })
  grid = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]
  round = "X"
  document.getElementById("message").innerHTML = ""
}

function disableAll() {
  grid.forEach((line, line_index) => {
    line.forEach((cell, cell_index) => {
      document.getElementById(`${line_index}${cell_index}`).setAttribute("disabled", true)
    })
  })
}

function checkForSequence() {
  //Check if O is the winner
  if(grid[0][0] == "O" && grid[0][1] == "O" && grid[0][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[1][0] == "O" && grid[1][1] == "O" && grid[1][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[2][0] == "O" && grid[2][1] == "O" && grid[2][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][0] == "O" && grid[1][0] == "O" && grid[2][0] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][1] == "O" && grid[1][1] == "O" && grid[2][1] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][2] == "O" && grid[1][2] == "O" && grid[2][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][0] == "O" && grid[1][1] == "O" && grid[2][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][2] == "O" && grid[1][1] == "O" && grid[2][0] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  
  //Check if X is the winner
  if(grid[0][0] == "X" && grid[0][1] == "X" && grid[0][2] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  if(grid[1][0] == "X" && grid[1][1] == "X" && grid[1][2] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  if(grid[2][0] == "X" && grid[2][1] == "X" && grid[2][2] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][0] == "X" && grid[1][0] == "X" && grid[2][0] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][1] == "X" && grid[1][1] == "X" && grid[2][1] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][2] == "X" && grid[1][2] == "X" && grid[2][2] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][0] == "X" && grid[1][1] == "X" && grid[2][2] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][2] == "X" && grid[1][1] == "X" && grid[2][0] == "X") {
    document.getElementById("message").innerHTML = "X is the Winner!!!"
    disableAll()
    return
  }
  
  //Check if O is the winner
  if(grid[0][0] == "O" && grid[0][1] == "O" && grid[0][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[1][0] == "O" && grid[1][1] == "O" && grid[1][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[2][0] == "O" && grid[2][1] == "O" && grid[2][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][0] == "O" && grid[1][0] == "O" && grid[2][0] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][1] == "O" && grid[1][1] == "O" && grid[2][1] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][2] == "O" && grid[1][2] == "O" && grid[2][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][0] == "O" && grid[1][1] == "O" && grid[2][2] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
  if(grid[0][2] == "O" && grid[1][1] == "O" && grid[2][0] == "O") {
    document.getElementById("message").innerHTML = "O is the Winner!!!"
    disableAll()
    return
  }
}